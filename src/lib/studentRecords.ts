import {useEffect,useState} from 'react';
import type {User} from 'firebase/auth';
import {collection,doc,getDoc,getDocs,orderBy,query,serverTimestamp,setDoc,runTransaction,type Timestamp} from 'firebase/firestore';
import {db} from './firebase';

export const lessonIds=['getting-started','closer-look-1','closer-look-2','communication','skills-1','skills-2','looking-back-project'] as const;
export type ProgressRecord={lessonId:string;latestScore:number;bestScore:number;total:number;attempts:number;updatedAt?:Timestamp|null};
export type AttemptRecord={id:string;lessonId:string;answers:number[];score:number;total:number;createdAt?:Timestamp|null};
export type StudentRecords={progress:Record<string,ProgressRecord>;attempts:AttemptRecord[];notes:string;work:Record<string,string>;loading:boolean;status:string;saveAttempt:(lessonId:string,answers:number[],score:number,total:number)=>Promise<void>;saveNotes:(content:string)=>Promise<void>;saveWork:(lessonId:string,content:string)=>Promise<void>};
const verified=(user:User|null)=>Boolean(db&&user&&user.emailVerified);
export function useStudentRecords(user:User|null,authRevision:number):StudentRecords{
 const [progress,setProgress]=useState<Record<string,ProgressRecord>>({});
 const [attempts,setAttempts]=useState<AttemptRecord[]>([]);
 const [notes,setNotes]=useState('');
 const [work,setWork]=useState<Record<string,string>>({});
 const [loading,setLoading]=useState(false);
 const [status,setStatus]=useState('Sign in to save progress / Đăng nhập để lưu tiến độ');
 useEffect(()=>{
  let active=true;
  setProgress({});setAttempts([]);setNotes('');setWork({});
  if(!user){setLoading(false);setStatus('Guest practice is not saved / Chế độ khách không lưu bài');return;}
  if(!db){setLoading(false);setStatus('Firebase is unavailable / Firebase chưa sẵn sàng');return;}
  if(!user.emailVerified){setLoading(false);setStatus('Verify your email to enable cloud saves / Xác minh email để lưu');return;}
  const database=db; const uid=user.uid;setLoading(true);
  const load=async()=>{
   try{
    const [p,a,n,w]=await Promise.all([
      getDocs(collection(database,'users',uid,'progress')),
      getDocs(query(collection(database,'users',uid,'attempts'),orderBy('createdAt','desc'))),
      getDoc(doc(database,'users',uid,'notes','unit4')),
      getDocs(collection(database,'users',uid,'work'))
    ]);
    if(!active)return;
    const pd:Record<string,ProgressRecord>={};p.docs.forEach(s=>pd[s.id]=s.data() as ProgressRecord);
    const wd:Record<string,string>={};w.docs.forEach(s=>{wd[s.id]=String(s.data().content??'')});
    setProgress(pd);setAttempts(a.docs.map(s=>({...s.data() as Omit<AttemptRecord,'id'>,id:s.id})));
    setNotes(n.exists()?String(n.data().content??''):'');setWork(wd);
    setStatus('Synced with Firebase / Đã đồng bộ Firebase');
   }catch(e){if(active)setStatus('Cloud read failed / Không đọc được dữ liệu: '+(e instanceof Error?e.message:'Unknown error'))}
   finally{if(active)setLoading(false)}
  };void load();return()=>{active=false};
 },[user?.uid,user?.emailVerified,authRevision]);
 const ensure=()=>{if(!verified(user)||!user||!db)throw new Error('Please sign in and verify your email before saving / Hãy đăng nhập và xác minh email trước khi lưu');return {database:db,uid:user.uid}};
 async function saveAttempt(lessonId:string,answers:number[],score:number,total:number){
  const {database,uid}=ensure();if(!lessonIds.includes(lessonId as typeof lessonIds[number])||answers.length!==3||total!==3)throw new Error('Invalid exercise');
  const ref=doc(collection(database,'users',uid,'attempts'));
  const progressRef=doc(database,'users',uid,'progress',lessonId);
  const next=await runTransaction(database,async transaction=>{
   const snapshot=await transaction.get(progressRef);
   const previous=snapshot.exists()?snapshot.data() as ProgressRecord:null;
   const updated:ProgressRecord={lessonId,latestScore:score,bestScore:Math.max(previous?.bestScore??0,score),total,attempts:(previous?.attempts??0)+1};
   transaction.set(ref,{lessonId,answers,score,total,createdAt:serverTimestamp()});
   transaction.set(progressRef,{...updated,updatedAt:serverTimestamp()});
   return updated;
  });
  setProgress(old=>({...old,[lessonId]:next}));
  setAttempts(old=>[{id:ref.id,lessonId,answers,score,total,createdAt:null},...old]);
  setStatus('Attempt saved to your account / Đã lưu bài vào tài khoản');
 }
 async function saveNotes(content:string){const {database,uid}=ensure();if(content.length>10000)throw new Error('Notes are too long / Ghi chú quá dài');await setDoc(doc(database,'users',uid,'notes','unit4'),{content,updatedAt:serverTimestamp()});setNotes(content);setStatus('Notes saved to Firebase / Đã lưu ghi chú');}
 async function saveWork(lessonId:string,content:string){const {database,uid}=ensure();if(!lessonIds.includes(lessonId as typeof lessonIds[number])||content.length>5000)throw new Error('Writing is too long / Bài viết quá dài');await setDoc(doc(database,'users',uid,'work',lessonId),{content,updatedAt:serverTimestamp()});setWork(old=>({...old,[lessonId]:content}));setStatus('Your answer was saved / Đã lưu bài làm');}
 return {progress,attempts,notes,work,loading,status,saveAttempt,saveNotes,saveWork};
}
