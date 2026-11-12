import {useEffect,useState} from 'react';
import {ArrowLeft,ArrowRight,BookOpen,CheckCircle2,ChevronRight,Lightbulb,RotateCcw,Target,Volume2} from 'lucide-react';
import {foundationCheckpoint,guidedTeachingScripts,normalizeFoundationAnswer} from '../data/guidedLessons';
import {speakUS} from '../lib/sensory';

type Props={lang:'en'|'vi';onOpenUnit:(lessonIndex:number)=>void};
type Attempt={firstCorrect:boolean;bestCorrect:boolean;attempts:number;usedHint:boolean};
const KEY='eq-foundation-bridge-v1';
const weekPlan=[
 {week:1,title:'Build sentences',goal:'S + be + complement / S + verb + object; viết câu mới'},
 {week:2,title:'Ask & answer',goal:'Negative, do/does, am/is/are, Wh-questions'},
 {week:3,title:'Getting Started & Vocabulary',goal:'Music and Arts; people/places; /ʃ/ vs /ʒ/'},
 {week:4,title:'Comparisons',goal:'like · different from · (not) as ... as'},
];
const foundationPhases=[
 {min:5,title:'Warm-up · Khởi động',teacher:'Ask: I am a student. I like music. What changes between these two sentences?',student:'Point out the subject and find am vs like.',tip:'Bắt đầu từ những mẫu câu em đã biết; không dạy lại bảng chữ cái.'},
 {min:8,title:'I Do · Làm mẫu',teacher:'Write: She is an artist. / She likes music. Underline subject, verb, and complement/object. Explain be versus main verb.',student:'Name She, is / likes, an artist / music.',tip:'Không thêm is trước like: She likes music (not She is likes music).'},
 {min:10,title:'We Do · Luyện cùng',teacher:'Solve one example out loud with the learner. Then guide rearranging: Nick / plays / piano / the.',student:'Say Nick plays the piano and identify why plays has -s.',tip:'Gợi ý tuần tự: Ai? Làm gì? Thông tin nào còn lại?'},
 {min:8,title:'You Do · Tự làm',teacher:'Do not read answers aloud. Ask learner to complete the five checkpoint items below without examples.',student:'Complete independently, then review the explanations and try again if needed.',tip:'Theo dõi câu nào đúng ngay lần đầu và câu nào cần gợi ý.'},
 {min:4,title:'Check · Kiểm tra cuối buổi',teacher:'Ask for two NEW sentences about a family member and an art activity. Check subject–verb order independently.',student:'Write a to-be sentence and a main-verb sentence, then read them aloud.',tip:'Bài viết mở cần người dạy đánh giá. Điểm quiz chưa đủ chứng minh đã nắm vững.'},
];
const getProgress=():Record<string,Attempt>=>{try{const s=localStorage.getItem(KEY);const parsed=s?JSON.parse(s) as Record<string,Attempt>:{};return parsed&&typeof parsed==='object'&&!Array.isArray(parsed)?parsed:{}}catch{return {}}};

export function GuidedLearning({lang,onOpenUnit}:Props){
 const vi=lang==='vi';
 const [selected,setSelected]=useState(-1);
 const [phase,setPhase]=useState(0);
 const [drafts,setDrafts]=useState<Record<string,string>>({});
 const [history,setHistory]=useState<Record<string,Attempt>>(getProgress);
 const [hints,setHints]=useState<Record<string,boolean>>({});
 const [feedback,setFeedback]=useState<Record<string,boolean|null>>({});
 const [exitText,setExitText]=useState('');
 const [showTeacher,setShowTeacher]=useState(true);
 useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(history))}catch{}},[history]);
 const changeLesson=(next:number)=>{setSelected(next);setPhase(0);setShowTeacher(true)};
 const first=Object.values(history).filter(x=>x.firstCorrect).length;
 const mastered=Object.values(history).filter(x=>x.bestCorrect).length;
 const attempted=Object.keys(history).length;
 const guided=selected>=0?guidedTeachingScripts[selected]:null;
 const checkAnswer=(id:string,answer:string)=>{
  const ok=normalizeFoundationAnswer(drafts[id]??'')===normalizeFoundationAnswer(answer);
  const prev=history[id];
  setFeedback(old=>({...old,[id]:ok}));
  setHistory(old=>({...old,[id]:{
   firstCorrect:prev?.firstCorrect??ok,
   bestCorrect:Boolean(prev?.bestCorrect||ok),
   attempts:(prev?.attempts??0)+1,
   usedHint:Boolean(prev?.usedHint||hints[id])
  }}));
 };
 return <div className="space-y-5">
  <header className="rounded-[2rem] bg-gradient-to-r from-indigo-900 via-indigo-700 to-violet-700 px-6 py-8 text-white md:px-9">
   <p className="text-xs font-black uppercase tracking-wider text-indigo-200">ENGLISH QUEST · PERSONALIZED BRIDGE</p>
   <h1 className="mt-2 text-3xl font-black">{vi?'🌱 Từ đặt câu đến Unit 4':'🌱 From sentences to Unit 4'}</h1>
   <p className="mt-3 max-w-3xl text-sm text-indigo-100">{vi?'Dựa vào đánh giá: nghe, đọc, to be, hiện tại đơn và viết đã làm được; cần củng cố cấu trúc câu khi không có gợi ý.':'Based on the screening: reading, listening, to be, simple present and writing are functional; unsupported sentence-building needs attention.'}</p>
  </header>
  <section className="grid gap-2 sm:grid-cols-4">
   {weekPlan.map(w=><article key={w.week} className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-xs font-black text-indigo-600">{vi?'TUẦN':'WEEK'} {w.week}</p><h2 className="mt-1 font-black">{w.title}</h2><p className="mt-2 text-xs leading-relaxed text-slate-600">{w.goal}</p></article>)}
  </section>
  <nav aria-label={vi?'Chọn buổi học':'Choose session'} className="grid gap-2 sm:grid-cols-4">
   <button onClick={()=>changeLesson(-1)} className={'rounded-xl border-2 px-4 py-3 text-left text-sm font-bold '+(selected===-1?'border-emerald-600 bg-emerald-50 text-emerald-900':'border-slate-200 bg-white')}>🌱 1. Foundation Bridge<span className="mt-1 block text-xs font-normal">35 {vi?'phút':'min'} · Build sentences</span></button>
   {guidedTeachingScripts.map((item,i)=><button key={item.id} onClick={()=>changeLesson(i)} className={'rounded-xl border-2 px-4 py-3 text-left text-sm font-bold '+(selected===i?'border-indigo-600 bg-indigo-50 text-indigo-900':'border-slate-200 bg-white')}><span>📚 {i+2}. {i===0?'Getting Started':i===1?'A Closer Look 1':'A Closer Look 2'}</span><span className="mt-1 block text-xs font-normal">45 {vi?'phút':'min'} · {vi?'SGK trang':'Textbook pp.'} {item.page}</span></button>)}
  </nav>
  {selected===-1?<section className="space-y-5 rounded-3xl border bg-white p-5 shadow-sm md:p-7">
   <div className="flex flex-wrap items-start justify-between gap-2"><div><p className="text-xs font-bold text-emerald-700">LESSON 01 · 35 MINUTES</p><h2 className="mt-1 text-2xl font-black">How to Build a Sentence</h2><p className="mt-1 text-sm text-slate-600">Subject + be + complement / Subject + main verb + object</p></div><span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">{mastered}/5 {vi?'câu đã làm đúng':'correct at least once'}</span></div>
   <div className="grid gap-3 lg:grid-cols-2">
    <div className="rounded-2xl bg-indigo-50 p-4"><h3 className="font-black">A. She is an artist.</h3><p className="mt-2 text-sm text-indigo-900">She = subject · is = to be · an artist = complement</p><p className="mt-2 text-xs text-slate-600">Giới thiệu hoặc mô tả một người.</p><button onClick={()=>void speakUS('She is an artist.',true,.85)} className="mt-2 flex items-center gap-2 text-sm font-bold text-indigo-700"><Volume2 size={16}/> Listen</button></div>
    <div className="rounded-2xl bg-amber-50 p-4"><h3 className="font-black">B. She likes music.</h3><p className="mt-2 text-sm text-amber-900">She = subject · likes = main verb · music = object</p><p className="mt-2 text-xs text-slate-600">Diễn tả sở thích; she → likes (không dùng is likes).</p><button onClick={()=>void speakUS('She likes music.',true,.85)} className="mt-2 flex items-center gap-2 text-sm font-bold text-amber-800"><Volume2 size={16}/> Listen</button></div>
   </div>
   <div className="rounded-2xl border p-4"><div className="flex items-center justify-between gap-3"><h3 className="font-black">{vi?'Kịch bản 35 phút':'35-minute teaching script'}</h3><span className="text-xs text-slate-500">{phase+1}/{foundationPhases.length}</span></div><div className="mt-3 flex flex-wrap gap-2">{foundationPhases.map((x,i)=><button key={x.title} onClick={()=>setPhase(i)} className={'rounded-full px-3 py-2 text-xs font-bold '+(phase===i?'bg-indigo-700 text-white':'bg-slate-100 text-slate-700')}>{i+1}. {x.min}'</button>)}</div><h4 className="mt-4 font-bold">{foundationPhases[phase].title}</h4><p className="mt-3 text-sm"><strong>{vi?'Giáo viên: ':'Teacher: '}</strong>{foundationPhases[phase].teacher}</p><p className="mt-2 text-sm"><strong>{vi?'Học sinh: ':'Learner: '}</strong>{foundationPhases[phase].student}</p><p className="mt-3 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-900"><Lightbulb className="mr-1 inline" size={14}/>{foundationPhases[phase].tip}</p><div className="mt-4 flex justify-between"><button disabled={phase===0} onClick={()=>setPhase(i=>Math.max(0,i-1))} className="text-sm font-bold text-indigo-700 disabled:opacity-30">← {vi?'Trước':'Previous'}</button><button disabled={phase===foundationPhases.length-1} onClick={()=>setPhase(i=>Math.min(foundationPhases.length-1,i+1))} className="text-sm font-bold text-indigo-700 disabled:opacity-30">{vi?'Tiếp':'Next'} →</button></div></div>
   <div className="rounded-2xl border p-4"><h3 className="text-lg font-black"><Target className="mr-2 inline text-indigo-700" size={20}/>{vi?'Bài kiểm tra 5 câu':'5-question foundation checkpoint'}</h3><p className="mt-2 text-xs text-slate-600">{vi?'Ưu tiên tự làm ngay lần đầu; có thể xem gợi ý và làm lại. Kết quả chỉ lưu trên trình duyệt của thiết bị này.':'Try without hints first, then review and retry. Results are stored only in this browser.'}</p><div className="mt-4 space-y-5">{foundationCheckpoint.map((q,i)=><div key={q.id} className="rounded-xl bg-slate-50 p-4"><label className="block text-sm font-bold" htmlFor={'foundation-'+q.id}>{i+1}. {q.question}</label><div className="mt-3 flex flex-col gap-2 sm:flex-row"><input id={'foundation-'+q.id} className="min-w-0 flex-1 rounded-xl border bg-white p-3 text-sm" value={drafts[q.id]??''} onChange={e=>{setDrafts(prev=>({...prev,[q.id]:e.target.value}));setFeedback(prev=>({...prev,[q.id]:null}))}} placeholder={vi?'Gõ câu trả lời tiếng Anh...':'Your answer...'}/><button onClick={()=>checkAnswer(q.id,q.answer)} disabled={!(drafts[q.id]??'').trim()} className="rounded-xl bg-indigo-700 px-4 py-3 text-sm font-bold text-white disabled:opacity-40">{vi?'Kiểm tra':'Check'}</button></div><div className="mt-2 flex flex-wrap gap-3"><button className="text-xs font-bold text-indigo-700 underline" onClick={()=>setHints(prev=>({...prev,[q.id]:!prev[q.id]}))}>{hints[q.id]?(vi?'Ẩn gợi ý':'Hide hint'):(vi?'Xem gợi ý':'Get hint')}</button>{history[q.id]?.bestCorrect&&<span className="flex items-center gap-1 text-xs font-bold text-emerald-700"><CheckCircle2 size={14}/>{vi?'Đã đúng':'Correct'}</span>}</div>{hints[q.id]&&<p className="mt-2 text-xs text-amber-800">{q.hint}</p>}{feedback[q.id]!==undefined&&feedback[q.id]!==null&&<p role="status" className={'mt-2 text-sm '+(feedback[q.id]?'text-emerald-800':'text-rose-700')}>{feedback[q.id]?'✅ Correct!':'🔁 Not yet. Review the rule and retry.'}<span className="mt-1 block text-xs text-slate-500">{q.why}</span></p>}</div>)}</div>
    <div className="mt-4 rounded-xl bg-indigo-50 p-4"><h4 className="font-bold">{vi?'Tiến trình':'Progress'}</h4><p className="mt-1 text-sm">{vi?'Đã thử':'Attempted'}: {attempted}/5 · {vi?'Đúng lần đầu':'Correct first attempt'}: {first}/5 · {vi?'Đã làm đúng':'Best correct'}: {mastered}/5</p><p className="mt-2 text-xs text-slate-600">{first>=4?(vi?'Tốt! Tiếp theo hãy tự viết hai câu mới bên dưới.':'Great! Try writing two new sentences below.'):(vi?'Cần luyện thêm. Khi làm câu mới, đừng nhìn mẫu.':'Keep practicing. Try new sentences without looking at examples.')}</p><button onClick={()=>{setHistory({});setFeedback({});setDrafts({});setHints({})}} className="mt-3 flex items-center gap-1 text-xs font-bold text-indigo-700 underline"><RotateCcw size={13}/>{vi?'Làm lại từ đầu':'Restart checkpoint'}</button></div>
   </div>
   <div className="rounded-2xl border p-4"><h3 className="font-black">{vi?'Exit ticket — viết độc lập':'Exit ticket — independent writing'}</h3><p className="mt-2 text-sm text-slate-600">{vi?'Tự viết 2 câu MỚI: một câu dùng am/is/are và một câu dùng động từ thường về người thân hoặc sở thích. Không xem đáp án mẫu.':'Write two NEW sentences: one using be, and one using an action verb about a family member or hobby.'}</p><textarea className="mt-3 min-h-28 w-full rounded-xl border p-3" value={exitText} onChange={e=>setExitText(e.target.value)} placeholder="My brother is ...&#10;He likes ..."/><p className="mt-2 text-xs text-slate-500">{vi?'Đoạn viết tự do cần người dạy kiểm tra; chưa được tự động chấm.':'Open-ended writing requires teacher review, not automated grading.'}</p><button onClick={()=>changeLesson(0)} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white">{vi?'Tiếp: Getting Started':'Next: Getting Started'}<ArrowRight size={16}/></button></div>
  </section>:guided&&<section className="space-y-5 rounded-3xl border bg-white p-5 shadow-sm md:p-7">
   <div className="flex flex-wrap justify-between gap-3"><div><p className="text-xs font-bold text-indigo-700">UNIT 4 · {vi?'TRANG':'PAGES'} {guided.page}</p><h2 className="mt-1 text-2xl font-black">{guided.title}</h2><p className="mt-2 text-sm text-slate-600">{guided.focus}</p></div><span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-black text-indigo-800">45 {vi?'phút':'minutes'}</span></div>
   <div className="grid gap-4 lg:grid-cols-2">
    <div className="rounded-2xl bg-indigo-50 p-4"><h3 className="font-black">{vi?'Mục tiêu của buổi':'Learning goals'}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{guided.objectives.map(x=><li key={x}>{x}</li>)}</ul></div>
    <div className="rounded-2xl bg-slate-50 p-4"><h3 className="font-black">{vi?'Từ vựng và cấu trúc':'Vocabulary & structures'}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{guided.vocabulary.map(x=><li key={x}>{x}</li>)}</ul></div>
   </div>
   <div className="rounded-2xl border p-4"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-black">{vi?'Kịch bản dạy từng bước':'Step-by-step teaching scenario'}</h3><button onClick={()=>setShowTeacher(x=>!x)} className="rounded-lg border px-3 py-2 text-xs font-bold text-indigo-800">{showTeacher?(vi?'Ẩn hướng dẫn người dạy':'Hide teacher prompts'):(vi?'Hiện hướng dẫn người dạy':'Show teacher prompts')}</button></div>
    <div className="mt-4 flex flex-wrap gap-2">{guided.stages.map((part,i)=><button key={i} onClick={()=>setPhase(i)} className={'rounded-xl border px-3 py-2 text-xs font-bold '+(phase===i?'border-indigo-600 bg-indigo-700 text-white':'border-slate-200 bg-slate-50')}>{i+1}. {part.minutes}'</button>)}</div>
    <h4 className="mt-4 text-xl font-black">{guided.stages[phase].phase}</h4>
    <p className="mt-3 text-sm"><strong>{vi?'Học sinh thực hiện: ':'Student action: '}</strong>{guided.stages[phase].student}</p>
    {showTeacher&&<p className="mt-3 rounded-xl bg-indigo-50 p-4 text-sm"><strong>{vi?'Lời dẫn và thao tác của giáo viên: ':'Teacher prompt & moves: '}</strong>{guided.stages[phase].teacher}</p>}
    <p className="mt-3 rounded-xl bg-emerald-50 p-4 text-sm"><CheckCircle2 size={16} className="mr-2 inline text-emerald-700"/><strong>{vi?'Quan sát đạt: ':'Success check: '}</strong>{guided.stages[phase].check}</p>
    <div className="mt-4 flex justify-between"><button disabled={phase===0} onClick={()=>setPhase(i=>Math.max(i-1,0))} className="inline-flex items-center gap-1 font-bold text-indigo-700 disabled:opacity-30"><ArrowLeft size={16}/>{vi?'Trước':'Previous'}</button><button disabled={phase===guided.stages.length-1} onClick={()=>setPhase(i=>Math.min(i+1,guided.stages.length-1))} className="inline-flex items-center gap-1 font-bold text-indigo-700 disabled:opacity-30">{vi?'Tiếp':'Next'}<ChevronRight size={16}/></button></div>
   </div>
   <div className="grid gap-3 lg:grid-cols-2">
    <div className="rounded-2xl bg-amber-50 p-4"><h3 className="font-black">{vi?'Lỗi hay gặp và cách hỗ trợ':'Likely errors & scaffolds'}</h3><ul className="mt-2 list-disc space-y-2 pl-5 text-sm">{guided.misconceptions.map(s=><li key={s}>{s}</li>)}</ul></div>
    <div className="rounded-2xl bg-emerald-50 p-4"><h3 className="font-black">{vi?'Tiêu chí chuyển bài':'Mastery gate'}</h3><p className="mt-2 text-sm">{guided.passCriteria}</p><h4 className="mt-3 font-bold">{vi?'Bài tập về nhà':'Home mission'}</h4><p className="mt-1 text-sm">{guided.homework}</p></div>
   </div>
   <button onClick={()=>onOpenUnit(guided.lessonIndex)} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-700 px-5 py-4 font-bold text-white hover:bg-indigo-800"><BookOpen size={18}/>{vi?'Mở bài luyện tương ứng trên English Quest':'Open aligned interactive activities'}<ArrowRight size={17}/></button>
  </section>}
  <p className="text-xs leading-relaxed text-slate-500">{vi?'Kịch bản sư phạm tự biên soạn dựa trên cấu trúc và mục tiêu SGK Global Success 7, Unit 4 trang 40–44. Đây không phải bản sao bài tập hay bản ghi âm của nhà xuất bản.':'Teacher-authored scripts aligned to Global Success Grade 7 Unit 4 pp. 40–44. Not a reproduction of publisher exercises or official recordings.'}</p>
 </div>;
}
