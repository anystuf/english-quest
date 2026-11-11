import {useState,type FormEvent} from 'react';
import {BookOpen,Mic,Send,ShieldCheck,Volume2,VolumeX,X} from 'lucide-react';
import {recognizeEnglish,soundEffect,speakUS,speechRecognitionAvailable} from '../lib/sensory';
import {coachAnswer} from '../lib/coachLogic';

type Msg={role:'coach'|'learner';en:string;vi?:string};
const suggestions=[
 {en:'Let’s practice a conversation.',vi:'Luyện hội thoại'},
 {en:'Explain “different from”.',vi:'Giải thích different from'},
 {en:'How do I say /sh/ and /zh/?',vi:'Luyện phát âm'},
 {en:'Help me invite a friend to an art show.',vi:'Viết lời mời'}
];
const intro:Msg={role:'coach',en:'Hey, explorer! I’m Nova, your Unit 4 practice buddy. What would you like to learn today? Try telling me what music or art you like!',vi:'Chào nhà thám hiểm! Mình là Nova, bạn luyện Unit 4. Em muốn học gì hôm nay? Hãy thử nói em thích âm nhạc hay nghệ thuật nào nhé!'};
export function EnglishCoach({lang,onClose,defaultSound=true}:{lang:'en'|'vi';onClose:()=>void;defaultSound?:boolean}){
 const [messages,setMessages]=useState<Msg[]>([intro]);
 const [draft,setDraft]=useState('');
 const [sound,setSound]=useState(defaultSound);
 const [listening,setListening]=useState(false);
 const [micError,setMicError]=useState('');
 const [lastInput,setLastInput]=useState('');
 const vi=lang==='vi';
 function send(text:string){const value=text.trim();if(!value)return;const reply=coachAnswer(value);setMessages(old=>[...old,{role:'learner',en:value},reply]);setDraft('');setLastInput(value);soundEffect('success',sound);void speakUS(reply.en,sound);}
 function submit(event:FormEvent){event.preventDefault();send(draft);}
 async function listen(){setMicError('');setListening(true);try{const transcript=await recognizeEnglish();setDraft(transcript)}catch(e){setMicError(e instanceof Error?e.message:'Speech unavailable')}finally{setListening(false)}}
 return <section className="flex h-[min(75vh,650px)] min-h-[460px] flex-col overflow-hidden rounded-3xl border-2 border-indigo-200 bg-white shadow-2xl" aria-label="Guided English Coach">
  <header className="flex items-center justify-between gap-2 bg-indigo-700 p-4 text-white"><div className="flex min-w-0 items-center gap-3"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/20 text-3xl">🦊</span><div><h2 className="font-black">Nova · English Coach</h2><p className="text-xs text-indigo-100">{vi?'Bạn luyện tập Unit 4 · Không cần AI API':'Unit 4 guided practice · Offline replies'}</p></div></div><div className="flex gap-1"><button className="rounded-lg bg-white/10 p-2" onClick={()=>setSound(v=>!v)} aria-label={sound?'Mute coach':'Unmute coach'}>{sound?<Volume2 size={18}/>:<VolumeX size={18}/>}</button><button onClick={onClose} aria-label="Close coach" className="rounded-lg bg-white/10 p-2"><X size={19}/></button></div></header>
  <div className="flex-1 space-y-4 overflow-y-auto bg-[#f7f6ff] p-4" role="log" aria-live="polite">{messages.map((m,i)=><div key={i} className={'max-w-[94%] rounded-2xl p-3 text-sm leading-relaxed '+(m.role==='coach'?'mr-auto border border-indigo-100 bg-white text-slate-800':'ml-auto bg-indigo-700 text-white')}><p className="mb-1 text-[11px] font-bold opacity-75">{m.role==='coach'?'🦊 Nova':'👤 You'}</p><p>{m.en}</p>{vi&&m.vi&&<p className="mt-2 text-xs opacity-75">{m.vi}</p>}{m.role==='coach'&&<button className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-indigo-700" onClick={()=>void speakUS(m.en,true)}><Volume2 size={14}/> Listen · US</button>}</div>)}</div>
  <div className="border-t bg-white p-4"><p className="mb-2 flex items-center gap-2 text-[11px] text-slate-500"><ShieldCheck size={15}/>{vi?'Hội thoại chỉ lưu trong phiên này. Không nhập thông tin cá nhân.':'Chat stays in this session. No personal details.'}</p><div className="mb-3 flex gap-2 overflow-x-auto pb-1">{suggestions.map(s=><button key={s.en} onClick={()=>send(s.en)} className="shrink-0 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-800">{vi?s.vi:s.en}</button>)}</div><form className="flex items-center gap-2" onSubmit={submit}><label htmlFor="coach-message" className="sr-only">Ask Nova</label><input id="coach-message" className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-3 text-sm" value={draft} maxLength={500} onChange={e=>setDraft(e.target.value)} placeholder={vi?'Hỏi Nova về Unit 4…':'Ask Nova about Unit 4…'}/><button type="button" disabled={listening||!speechRecognitionAvailable()} onClick={()=>void listen()} title="Optional microphone - browser recognition may use provider services" className="rounded-xl border p-3 disabled:opacity-30"><Mic size={17}/></button><button disabled={!draft.trim()} type="submit" className="rounded-xl bg-indigo-700 p-3 text-white disabled:opacity-40" aria-label="Send message"><Send size={17}/></button></form>{micError&&<p className="mt-1 text-xs text-amber-700">{micError}</p>}{lastInput&&<p className="sr-only">{lastInput}</p>}<p className="mt-2 text-[10px] text-slate-500"><BookOpen size={12} className="mr-1 inline"/>{vi?'Nội dung hướng dẫn cố định, không phải AI sinh câu trả lời. Micro tùy chọn; nhận dạng giọng nói phụ thuộc trình duyệt.':'Curated guided responses, not generative AI. Optional browser-based recognition may process speech via its provider.'}</p></div>
 </section>;
}
