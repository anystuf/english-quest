import {useEffect,useState} from 'react';
import type {User} from 'firebase/auth';
import {collection,doc,getDocs,runTransaction,serverTimestamp,type Timestamp} from 'firebase/firestore';
import {db} from './firebase';
import {curriculumActivityIds} from '../data/textbookCurriculum';

export type CurriculumEntry={activityId:string;lessonId:string;response:string;mode:'auto'|'submission';correct:boolean;bestCorrect:boolean;attempts:number;updatedAt?:Timestamp|null};
const ids=new Set(curriculumActivityIds);
export function useCurriculumRecords(user:User|null,revision:number){
 const [entries,setEntries]=useState<Record<string,CurriculumEntry>>({});
 const [loading,setLoading]=useState(false);
 const [status,setStatus]=useState('Sign in to sync textbook tasks / Đăng nhập để đồng bộ bài học');
 useEffect(()=>{
  let alive=true;setEntries({});setLoading(false);
  if(!user?.emailVerified||!db){setStatus('Guest / unverified: this session only / Chế độ khách: chỉ lưu trong phiên');return}
  setLoading(true);const database=db,uid=user.uid;
  getDocs(collection(database,'users',uid,'curriculum')).then(snapshot=>{
   if(!alive)return;
   const map:Record<string,CurriculumEntry>={};
   snapshot.forEach(s=>{if(ids.has(s.id))map[s.id]=s.data() as CurriculumEntry});
   setEntries(map);setStatus('Textbook progress synced / Đã đồng bộ tiến trình SGK');
  }).catch(e=>{if(alive)setStatus('Please publish updated Firestore rules / Cần cập nhật Firestore Rules: '+(e instanceof Error?e.message:''))})
  .finally(()=>{if(alive)setLoading(false)});
  return()=>{alive=false};
 },[user?.uid,user?.emailVerified,revision]);
 async function save(activityId:string,lessonId:string,response:string,mode:'auto'|'submission',correct:boolean){
  if(!ids.has(activityId)||!/^u4-[a-z0-9-]+$/.test(activityId))throw new Error('Invalid activity');
  if(response.trim().length===0||response.length>2400)throw new Error('Enter an answer under 2400 characters / Bài làm cần có nội dung');
  if(mode==='submission'&&correct)throw new Error('Open responses require teacher review / Bài tự luận cần giáo viên đánh giá');
  if(!user?.emailVerified||!db)throw new Error('Verify your account to sync work / Xác minh tài khoản để đồng bộ');
  const database=db,uid=user.uid,ref=doc(database,'users',uid,'curriculum',activityId);
  const result=await runTransaction(database,async tx=>{
   const snapshot=await tx.get(ref);
   const old=snapshot.exists()?snapshot.data() as CurriculumEntry:null;
   const next:CurriculumEntry={activityId,lessonId,response,mode,correct,bestCorrect:old?.bestCorrect===true||correct,attempts:(old?.attempts??0)+1,updatedAt:null};
   tx.set(ref,{...next,updatedAt:serverTimestamp()});
   return next;
  });
  setEntries(old=>({...old,[activityId]:result}));
  setStatus('Activity saved / Đã lưu hoạt động');
  return result;
 }
 return {entries,loading,status,save};
}
