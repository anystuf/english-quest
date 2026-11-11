import {useEffect,useMemo,useState} from 'react';
import type {User} from 'firebase/auth';
import {ArrowLeft,ArrowRight,BookOpen,CheckCircle2,Headphones,Info,Mic,MicOff,RotateCcw,ShieldCheck,Sparkles,Volume2,VolumeX} from 'lucide-react';
import {unit} from '../data/unit4-full';
import {pronunciationTargets} from '../data/pronunciationWords';
import {useWordPractice} from '../lib/wordPracticeRecords';
import {scoreWordRecognition,pronunciationWordId,type RecognitionMatch} from '../lib/wordRecognition';
import {recognizeEnglish,soundEffect,speakUS,speechRecognitionAvailable} from '../lib/sensory';

const button='inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white hover:bg-indigo-800 disabled:opacity-40';
export function PronunciationLab({user,authRevision,lang,initialLesson,onAccount,onBack}:{user:User|null;authRevision:number;lang:'en'|'vi';initialLesson:number;onAccount:()=>void;onBack:()=>void}){
 const vi=lang==='vi';const [lesson,setLesson]=useState(initialLesson);const [index,setIndex]=useState(0);const [sound,setSound]=useState(true);const [consent,setConsent]=useState(false);const [working,setWorking]=useState(false);const [feedback,setFeedback]=useState<RecognitionMatch|null>(null);const [error,setError]=useState('');const [saved,setSaved]=useState('');
 const {records,status,loading,save}=useWordPractice(user,authRevision);
 const words=useMemo(()=>pronunciationTargets.filter(target=>target.lesson===lesson),[lesson]);
 const selected=words[Math.min(index,words.length-1)];
 const count=pronunciationTargets.filter(target=>records[pronunciationWordId(target.word)]).length;
 const green=pronunciationTargets.filter(target=>(records[pronunciationWordId(target.word)]?.bestScore??-1)>=85).length;
 const record=selected?records[pronunciationWordId(selected.word)]:undefined;
 const speechOK=speechRecognitionAvailable();
 const currentIndex=Math.min(index,words.length-1);
 useEffect(()=>{setIndex(0);setFeedback(null);setError('');setSaved('')},[lesson]);
 const selectWord=(i:number)=>{setIndex(i);setFeedback(null);setError('');setSaved('');soundEffect('tap',sound)};
 const play=(rate:number)=>{if(selected)void speakUS(selected.spoken,true,rate)};
 async function check(){
  if(!selected||!consent||!speechOK||working)return;
  const word=selected;
  setWorking(true);setError('');setSaved('');
  try{
   const heard=await recognizeEnglish();
   const result=scoreWordRecognition(word.spoken,heard);
   setFeedback(result);
   soundEffect(result.score>=85?'success':'try',sound);
   if(user?.emailVerified){
    try{await save(word.word,result.score);setSaved(vi?'✅ Đã lưu điểm nhận dạng vào Firebase':'✅ Recognition result saved to Firebase')}
    catch(e){setSaved(vi?'Chưa lưu được; kiểm tra Firestore Rules.':'Could not save; check Firestore rules.');setError(e instanceof Error?e.message:String(e))}
   }else setSaved(vi?'Chế độ khách: điểm chỉ hiển thị trong phiên này.':'Guest practice: result remains only in this session.');
  }catch(e){setError(e instanceof Error?e.message:'Microphone recognition failed')}
  finally{setWorking(false)}
 }
 const scoreLabel=feedback?(feedback.score>=85?(vi?'Trình duyệt nhận diện đúng từ':'Word recognized clearly'):feedback.score>=55?(vi?'Từ gần đúng, hãy thử đọc lại':'Close match — try again'):(vi?'Chưa nhận ra từ này, luyện thêm nhé':'Not recognized yet — practice again')):'';
 return <div className="mx-auto max-w-6xl space-y-6">
  <div className="flex flex-wrap items-center justify-between gap-3"><button onClick={onBack} className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-3 font-bold"><ArrowLeft size={16}/>{vi?'Quay lại':'Go back'}</button><button onClick={()=>setSound(a=>!a)} className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-3 font-bold">{sound?<Volume2 size={17}/>:<VolumeX size={17}/>} {sound?(vi?'Âm thanh bật':'Sound on'):(vi?'Âm thanh tắt':'Sound off')}</button></div>
  <section className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#182964] via-[#4935a4] to-[#9e51d4] p-6 text-white shadow-xl md:p-9">
   <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-widest text-indigo-200">UNIT 4 · MUSIC AND ARTS</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">🎙️ Pronunciation Lab</h1><p className="mt-3 max-w-2xl text-sm text-indigo-100">{vi?'Nghe giọng Mỹ → đọc từng từ → xem trình duyệt nhận ra gì → luyện lại âm khó.':'Listen in US English, say each word, see what the browser recognized, and practice tricky sounds.'}</p></div><span className="hidden text-6xl sm:block eq-floating" aria-hidden="true">🦊</span></div>
   <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-lg"><div className="rounded-2xl bg-white/15 p-4"><p className="text-3xl font-black">{count}/{pronunciationTargets.length}</p><p className="text-xs text-indigo-100">{vi?'Từ đã luyện và lưu':'Words practiced & saved'}</p></div><div className="rounded-2xl bg-white/15 p-4"><p className="text-3xl font-black">{green}</p><p className="text-xs text-indigo-100">{vi?'Từ nhận dạng ≥85':'Words recognized ≥85'}</p></div></div>
  </section>
  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"><p className="flex items-start gap-2 font-semibold"><Info className="mt-0.5 shrink-0" size={18}/>{vi?'Đây là điểm KHỚP NHẬN DẠNG TỪ, chưa phải điểm phát âm chuẩn.':'This is a WORD RECOGNITION MATCH, not an acoustic pronunciation grade.'}</p><p className="mt-2 text-xs">{vi?'Điểm 0–100 so sánh văn bản mà trình duyệt nghe được với từ mẫu; không thể kết luận âm vị, trọng âm hay ngữ điệu đúng đến mức nào. Trình duyệt có thể nghe nhầm dù bé phát âm tốt.':'The 0–100 indicator compares the browser’s recognized text with the target, not individual phonemes or stress. Recognition can make mistakes even when speech is clear.'}</p></div>
  <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
   <aside className="space-y-4"><section className="rounded-2xl border bg-white p-4 shadow-sm"><h2 className="mb-3 flex items-center gap-2 font-black"><BookOpen size={17} className="text-indigo-600"/>{vi?'Chọn bài':'Select lesson'}</h2><div className="grid grid-cols-2 gap-2 lg:grid-cols-1">{unit.map((u,i)=><button key={u.name} onClick={()=>setLesson(i)} className={'rounded-xl px-3 py-3 text-left text-sm font-bold '+(lesson===i?'bg-indigo-700 text-white':'bg-slate-50 text-slate-700 hover:bg-indigo-50')}>{i+1}. {u.name}</button>)}</div></section><section className="rounded-2xl border bg-white p-4 shadow-sm"><h2 className="font-black">{vi?'Danh sách từ':'Word collection'}</h2><p className="mb-3 mt-1 text-xs text-slate-500">{words.length} {vi?'từ/cụm từ':'words/phrases'}</p><div className="max-h-[400px] space-y-2 overflow-y-auto">{words.map((w,i)=>{const old=records[pronunciationWordId(w.word)];return <button key={w.word} onClick={()=>selectWord(i)} className={'flex w-full items-center justify-between gap-2 rounded-xl border px-3 py-3 text-left text-sm '+(currentIndex===i?'border-indigo-600 bg-indigo-50':'border-slate-100 hover:border-indigo-300')}><span><b className="block">{w.word}</b><small className="text-slate-500">{w.meaning}</small></span>{old?<span className={'rounded-full px-2 py-1 text-xs font-black '+(old.bestScore>=85?'bg-emerald-100 text-emerald-700':'bg-amber-100 text-amber-800')}>{old.bestScore}</span>:<span className="text-xs text-slate-400">○</span>}</button>})}</div></section></aside>
   <section className="space-y-5">
    <div className="rounded-3xl border border-indigo-100 bg-white p-6 text-center shadow-sm md:p-9"><p className="text-xs font-black tracking-[.2em] text-indigo-600">{vi?'TỪ SỐ':'WORD'} {currentIndex+1}/{words.length}</p><h2 className="mt-4 break-words text-4xl font-black text-slate-900 sm:text-5xl">{selected?.word}</h2><p className="mt-3 text-xl text-slate-500">{selected?.meaning}</p>{selected?.ipa&&<p className="mt-3 font-mono text-base text-indigo-700">{selected.ipa}</p>}{selected?.spoken!==selected?.word&&<p className="mt-3 rounded-xl bg-indigo-50 p-3 text-sm text-indigo-900">{vi?'Ví dụ đọc thành tiếng':'Speak this example'}: <b>{selected?.spoken}</b></p>}
     <div className="mt-6 flex flex-wrap justify-center gap-3"><button className={button} onClick={()=>play(.86)}><Volume2 size={18}/>{vi?'Nghe mẫu':'Listen · US'}</button><button className="inline-flex items-center gap-2 rounded-xl border-2 border-indigo-200 px-5 py-3 font-bold text-indigo-800" onClick={()=>play(.68)}><Headphones size={18}/>{vi?'Nghe chậm':'Listen slowly'}</button></div>
     <div className="mt-6 rounded-2xl bg-violet-50 p-5 text-left"><p className="font-black text-violet-800">💡 {vi?'Mẹo phát âm':'Pronunciation tip'}</p><p className="mt-2 text-sm font-semibold text-slate-800">{selected?.tipEn}</p><p className="mt-1 text-sm text-slate-500">{selected?.tipVi}</p></div>
     <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-left text-sm"><label className="flex cursor-pointer items-start gap-3"><input className="mt-1 h-4 w-4" type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)}/><span><b>{vi?'Cho phép thử micro':'Allow optional microphone practice'}</b><small className="mt-1 block text-slate-700">{vi?'Cha mẹ/người giám hộ đã đồng ý. Tính năng nhận dạng giọng nói có thể gửi âm thanh đến nhà cung cấp trình duyệt. English Quest không lưu giọng nói hoặc bản ghi nhận dạng.':'Parent/guardian approval is required. Browser speech recognition may send audio to the browser vendor. English Quest does not save audio or transcripts.'}</small></span></label></div>
     <button onClick={()=>void check()} disabled={!speechOK||!consent||working} className={button+' mt-5 w-full py-4 text-lg'}>{speechOK?<Mic size={21}/>:<MicOff size={21}/>} {working?(vi?'Đang nghe…':'Listening…'):(vi?'BẤM MICRO VÀ ĐỌC TỪ':'TAP TO SPEAK THE WORD')}</button>{!speechOK&&<p className="mt-2 text-sm text-amber-700">{vi?'Trình duyệt này chưa hỗ trợ nhận dạng giọng nói. Em vẫn có thể nghe mẫu và luyện cùng giáo viên.':'Speech recognition is unavailable in this browser. Listening and teacher-guided practice still work.'}</p>}
     {error&&<p role="alert" className="mt-4 break-words rounded-xl bg-rose-50 p-3 text-sm text-rose-800">{error}</p>}
     {feedback&&<div className="mt-6 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-5 text-left" aria-live="polite"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-wide text-indigo-600">{vi?'Điểm khớp nhận dạng':'Recognition match score'}</p><p className="mt-1 text-4xl font-black text-indigo-900">{feedback.score}<span className="text-lg text-indigo-500">/100</span></p></div><span className={'rounded-full px-3 py-2 text-sm font-bold '+(feedback.score>=85?'bg-emerald-100 text-emerald-700':'bg-amber-100 text-amber-800')}>{feedback.score>=85?<CheckCircle2 className="mr-1 inline" size={16}/>:<RotateCcw className="mr-1 inline" size={16}/>} {scoreLabel}</span></div><p className="mt-4 text-sm"><b>{vi?'Trình duyệt nghe được':'Browser heard'}:</b> “{feedback.heard||'—'}”</p><p className="mt-1 text-sm"><b>{vi?'Từ cần đọc':'Target'}:</b> “{selected?.spoken}”</p><p className="mt-3 text-xs text-slate-600">{vi?'Điểm chỉ dựa trên văn bản nhận diện; đừng xem đây là mức đúng/sai của từng âm.':'This score reflects transcript similarity, not phoneme correctness.'}</p></div>}
     {saved&&<p role="status" className="mt-3 text-sm font-semibold text-emerald-700">{saved}</p>}
     {record&&<p className="mt-4 text-sm text-slate-500">{vi?'Kỷ lục':'Best recognized'}: <b>{record.bestScore}/100</b> · {vi?'Đã thử':'Attempts'}: <b>{record.attempts}</b></p>}
     {!user?.emailVerified&&<button onClick={onAccount} className="mt-4 text-sm font-bold text-indigo-700 underline">{vi?'Đăng nhập và xác minh để lưu điểm':'Sign in & verify to save results'}</button>}
     <div className="mt-7 flex flex-wrap justify-between gap-3 border-t pt-5"><button disabled={currentIndex===0} onClick={()=>selectWord(currentIndex-1)} className="rounded-xl border px-5 py-3 font-bold disabled:opacity-40"><ArrowLeft className="mr-2 inline" size={16}/>{vi?'Từ trước':'Previous'}</button><button onClick={()=>selectWord((currentIndex+1)%words.length)} className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">{currentIndex===words.length-1?(vi?'Luyện lại':'Review again'):(vi?'Từ tiếp':'Next word')}<ArrowRight className="ml-2 inline" size={16}/></button></div>
    </div>
    <div className="rounded-2xl border bg-white p-5"><h3 className="flex items-center gap-2 font-black"><Sparkles size={17} className="text-violet-600"/>{vi?'Thử thách phân biệt âm':'Sound detective'}</h3><p className="mt-2 text-sm text-slate-600">{vi?'Hãy thử nghe và đọc “show” (/ʃ/) rồi “vision” (/ʒ/). Âm /ʒ/ có rung dây thanh; em có thể đặt tay lên cổ họng để cảm nhận.':'Listen to “show” (/ʃ/) and “vision” (/ʒ/). The /ʒ/ sound is voiced; gently feel your throat to notice the vibration.'}</p><div className="mt-4 flex flex-wrap gap-2"><button className={button} onClick={()=>void speakUS('show',true,.76)}><Volume2 size={16}/> show /ʃ/</button><button className={button} onClick={()=>void speakUS('vision',true,.76)}><Volume2 size={16}/> vision /ʒ/</button></div></div>
    <p className="flex items-start gap-2 text-xs text-slate-500"><ShieldCheck size={15} className="shrink-0"/>{loading?(vi?'Đang tải lịch sử từ Firebase…':'Loading Firebase scores…'):status}</p>
   </section>
  </div>
 </div>;
}
