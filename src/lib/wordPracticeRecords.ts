import {useEffect,useState} from 'react';
import type {User} from 'firebase/auth';
import {collection,doc,getDocs,runTransaction,serverTimestamp,type Timestamp} from 'firebase/firestore';
import {db} from './firebase';
import {pronunciationWordId} from './wordRecognition';

export type WordPracticeRecord={wordId:string;bestScore:number;latestScore:number;attempts:number;updatedAt?:Timestamp|null;method:'browser-word-recognition'};
export function useWordPractice(user:User|null,authRevision:number){
 const [records,setRecords]=useState<Record<string,WordPracticeRecord>>({});
 const [loading,setLoading]=useState(false);
 const [status,setStatus]=useState('Practice locally / Luyện tập thử');
 useEffect(()=>{
  let mounted=true;setRecords({});setLoading(false);
  if(!db||!user?.emailVerified){setStatus('Sign in and verify email to save / Đăng nhập và xác minh email để lưu');return}
  const database=db,uid=user.uid;
  setLoading(true);
  getDocs(collection(database,'users',uid,'pronunciation')).then(snapshot=>{
   if(!mounted)return;
   const data:Record<string,WordPracticeRecord>={};
   snapshot.docs.forEach(s=>{data[s.id]=s.data() as WordPracticeRecord});
   setRecords(data);setStatus('Word scores synced / Đã đồng bộ điểm luyện từ');
  }).catch(e=>{if(mounted)setStatus('Saving requires updated Firestore rules / Cần cập nhật Firestore Rules: '+(e instanceof Error?e.message:''))})
  .finally(()=>{if(mounted)setLoading(false)});
  return()=>{mounted=false};
 },[user?.uid,user?.emailVerified,authRevision]);
 async function save(word:string,score:number){
  if(!user?.emailVerified||!db)throw new Error('Verify your email to save / Cần xác minh email để lưu');
  if(!Number.isInteger(score)||score<0||score>100)throw new Error('Invalid recognition score');
  const wordId=pronunciationWordId(word);if(!wordId)throw new Error('Invalid word');
  const database=db,uid=user.uid,ref=doc(database,'users',uid,'pronunciation',wordId);
  const next=await runTransaction(database,async tx=>{
   const current=await tx.get(ref);
   const previous=current.exists()?current.data() as WordPracticeRecord:null;
   const updated:WordPracticeRecord={wordId,bestScore:Math.max(previous?.bestScore??0,score),latestScore:score,attempts:(previous?.attempts??0)+1,updatedAt:null,method:'browser-word-recognition'};
   tx.set(ref,{...updated,updatedAt:serverTimestamp()});
   return updated;
  });
  setRecords(old=>({...old,[wordId]:next}));
  setStatus('Word practice saved / Đã lưu lượt luyện từ');
 }
 return {records,loading,status,save};
}
