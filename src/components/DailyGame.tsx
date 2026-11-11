import {useMemo,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,Flame,Heart,RotateCcw,ShieldCheck, Sparkles,Volume2,Zap} from 'lucide-react';
import type {DailySessionRecord} from '../lib/studentRecords';
import {calculateStreak,vietnamDay} from '../lib/dailyStreak';

type Pair={en:string;vi:string};
type Challenge={prompt:string;promptVi:string;options:string[];right:number;explanation:string;explanationVi:string};
const vocabulary:Pair[]=[
 {en:'art gallery',vi:'phòng trưng bày nghệ thuật'},{en:'musical instrument',vi:'nhạc cụ'},
 {en:'landscape',vi:'phong cảnh'},{en:'portrait',vi:'tranh chân dung'},
 {en:'exhibition',vi:'triển lãm'},{en:'sculpture',vi:'tác phẩm điêu khắc'},
 {en:'composer',vi:'nhà soạn nhạc'},{en:'musician',vi:'nhạc công'},
 {en:'concert hall',vi:'phòng hòa nhạc'},{en:'puppet theatre',vi:'nhà hát múa rối'},
 {en:'perform',vi:'biểu diễn'},{en:'audience',vi:'khán giả'},
 {en:'prefer',vi:'thích hơn'},{en:'invitation',vi:'lời mời'},
 {en:'street painting',vi:'tranh đường phố'},{en:'water puppetry',vi:'múa rối nước'},
 {en:'paintbrush',vi:'cọ vẽ'},{en:'creative',vi:'sáng tạo'},
 {en:'traditional',vi:'truyền thống'},{en:'performance',vi:'buổi biểu diễn'}
];
const questions:Challenge[]=[
 {prompt:'Which sentence makes a correct comparison?',promptVi:'Câu nào so sánh đúng?',options:['Jazz is different from pop.','Jazz is different as pop.','Jazz different of pop.'],right:0,explanation:'Use different from to compare unlike things.',explanationVi:'Dùng different from khi nói hai thứ khác nhau.'},
 {prompt:'Which word contains the sound /ʒ/?',promptVi:'Từ nào có âm /ʒ/?',options:['show','vision','ship'],right:1,explanation:'The middle of vision is pronounced /ʒ/.',explanationVi:'Âm giữa của từ vision là /ʒ/.'},
 {prompt:'Complete: Her picture is as colorful ___ mine.',promptVi:'Điền vào câu so sánh bằng.',options:['than','from','as'],right:2,explanation:'Equality uses as + adjective + as.',explanationVi:'So sánh bằng dùng as + tính từ + as.'},
 {prompt:'Where would you go to see an exhibition?',promptVi:'Em đến đâu để xem triển lãm?',options:['Art gallery','Swimming pool','Bus stop'],right:0,explanation:'An art gallery exhibits artworks.',explanationVi:'Phòng trưng bày là nơi trưng bày tác phẩm.'},
 {prompt:'How do you ask about a preference?',promptVi:'Hỏi sở thích bằng câu nào?',options:['What time is it?','Which do you prefer?','How old is it?'],right:1,explanation:'Which do you prefer asks someone to choose.',explanationVi:'Which do you prefer dùng để hỏi người khác thích gì hơn.'},
 {prompt:'Which word starts with /ʃ/?',promptVi:'Từ nào bắt đầu bằng /ʃ/?',options:['vision','measure','show'],right:2,explanation:'The letters sh in show make /ʃ/.',explanationVi:'Hai chữ sh trong show tạo âm /ʃ/.'},
 {prompt:'Which expression means something is less loud?',promptVi:'Cụm nào nghĩa là âm thanh nhỏ hơn?',options:['not as loud as','the same as','as loud as'],right:0,explanation:'Not as…as expresses a lower degree.',explanationVi:'Not as…as diễn tả mức độ kém hơn.'},
 {prompt:'What belongs in an informal invitation?',promptVi:'Thư mời thân mật cần gì?',options:['Only a drawing','Date, time and place','Only your age'],right:1,explanation:'Friends need event details to attend.',explanationVi:'Bạn bè cần biết ngày giờ và địa điểm.'},
 {prompt:'Which one is a musical instrument?',promptVi:'Đâu là nhạc cụ?',options:['Portrait','Paintbrush','Violin'],right:2,explanation:'The violin is a string instrument.',explanationVi:'Đàn violin là nhạc cụ dây.'}
];
const sentences=[
 {parts:['Music','is','different','from','painting.'],vi:'Âm nhạc khác với hội họa.'},
 {parts:['This','song','is','as','good','as','that','one.'],vi:'Bài hát này hay như bài kia.'},
 {parts:['I','prefer','music','because','it','is','relaxing.'],vi:'Em thích âm nhạc hơn vì nó giúp thư giãn.'},
 {parts:['The','flute','is','not','as','loud','as','the','drum.'],vi:'Sáo không to bằng trống.'},
 {parts:['Which','art','form','do','you','prefer?'],vi:'Em thích loại hình nghệ thuật nào hơn?'}
];
function dayNumber(day:string){return Math.floor(Date.parse(day+'T00:00:00Z')/86400000)}
function seededOrder(length:number,seed:number){
 const arr=Array.from({length},(_,i)=>i);let x=seed>>>0;
 for(let i=length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[arr[i],arr[j]]=[arr[j],arr[i]]}
 return arr;
}
type Phase='start'|'match'|'quiz'|'sentence'|'result';
export function DailyGame({lang,verified,sessions,onFinish,onAccount,onBack}:{lang:'en'|'vi';verified:boolean;sessions:DailySessionRecord[];onFinish:(correct:number)=>Promise<void>;onAccount:()=>void;onBack:()=>void}){
 const vi=lang==='vi';
 const today=vietnamDay(new Date());
 const stats=useMemo(()=>calculateStreak(sessions.flatMap(s=>s.completedAt?.toDate?.()?[vietnamDay(s.completedAt.toDate())]:[]),today),[sessions,today]);
 const n=dayNumber(today);
 const pairs=useMemo(()=>Array.from({length:4},(_,i)=>vocabulary[(n*3+i*7)%vocabulary.length]),[n]);
 const rightOrder=useMemo(()=>seededOrder(4,n+17),[n]);
 const quiz=useMemo(()=>Array.from({length:3},(_,i)=>questions[(n+i*3)%questions.length]),[n]);
 const sentence=sentences[n%sentences.length];
 const shuffled=useMemo(()=>seededOrder(sentence.parts.length,n+52),[n,sentence.parts.length]);
 const [phase,setPhase]=useState<Phase>('start');
 const [left,setLeft]=useState<number|null>(null);
 const [right,setRight]=useState<number|null>(null);
 const [matched,setMatched]=useState<number[]>([]);
 const [matchHint,setMatchHint]=useState('');
 const [position,setPosition]=useState(0);
 const [selected,setSelected]=useState<number[]>([]);
 const [tokens,setTokens]=useState<number[]>([]);
 const [sentenceSolved,setSentenceSolved]=useState(false);
 const [sentenceHint,setSentenceHint]=useState('');
 const [saving,setSaving]=useState(false);
 const [saveStatus,setSaveStatus]=useState<'idle'|'saved'|'already'|'guest'|'error'>('idle');
 const [saveError,setSaveError]=useState('');
 const correct=quiz.filter((q,i)=>selected[i]===q.right).length;
 const playAgain=()=>{setPhase('match');setLeft(null);setRight(null);setMatched([]);setMatchHint('');setPosition(0);setSelected([]);setTokens([]);setSentenceSolved(false);setSentenceHint('');setSaveStatus('idle');setSaveError('')};
 const pick=(side:'en'|'vi',index:number)=>{
  if(matched.includes(index))return;
  const a=side==='en'?index:left;
  const b=side==='vi'?index:right;
  if(a===null||b===null){if(side==='en')setLeft(index);else setRight(index);return}
  if(a===b){setMatched(prev=>[...prev,a]);setMatchHint(vi?'Chính xác! 🎉':'Nice match! 🎉')}else setMatchHint(vi?'Thử lại nhé.':'Not quite—try another pair.');
  setLeft(null);setRight(null);
 };
 async function finish(){
  setPhase('result');setSaveError('');
  if(stats.doneToday){setSaveStatus('already');return}
  if(!verified){setSaveStatus('guest');return}
  if(correct<2||!sentenceSolved){setSaveStatus('idle');return}
  setSaving(true);
  try{await onFinish(correct);setSaveStatus('saved')}
  catch(e){setSaveError(e instanceof Error?e.message:String(e));setSaveStatus('error')}
  finally{setSaving(false)}
 }
 const phaseLabel:Record<Phase,string>={start:vi?'Sẵn sàng':'Get ready',match:vi?'Ghép từ':'Word Match',quiz:vi?'Thử thách':'Quick Quiz',sentence:vi?'Xếp câu':'Sentence Builder',result:vi?'Phần thưởng':'Results'};
 const stage=phase==='match'?1:phase==='quiz'?2:phase==='sentence'?3:phase==='result'?3:0;
 return <div className="mx-auto max-w-4xl space-y-5">
  <header className="flex flex-wrap items-center justify-between gap-3"><button onClick={onBack} className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2 text-sm font-bold"><ArrowLeft size={16}/>{vi?'Về bản đồ':'Quest Map'}</button><div className="flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-2 font-black text-orange-700"><Flame size={20} aria-hidden="true"/>{stats.current} {vi?'ngày':'day streak'}</div></header>
  <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#1c285d] via-[#5140a3] to-[#8d4fd8] p-6 text-white md:p-8"><p className="text-xs font-black uppercase tracking-widest text-indigo-100">{vi?'Thử thách mỗi ngày':'DAILY ARCADE'} · UNIT 4</p><h1 className="mt-2 text-3xl font-black md:text-4xl">🔥 {vi?'Giữ lửa tiếng Anh!':'Keep your English flame!'} </h1><p className="mt-3 max-w-2xl text-sm text-indigo-100">{vi?'Ghép từ, vượt qua 3 câu đố và xếp một câu tiếng Anh. Hoàn thành để ghi nhận ngày học hôm nay.':'Match four words, solve three questions, and build a sentence. Finish the challenge to mark today as a learning day.'}</p><div className="mt-5 flex items-center gap-2">{[1,2,3].map(i=><div key={i} className={'h-2 flex-1 rounded-full '+(stage>=i?'bg-amber-300':'bg-white/20')}/>)}</div><p className="mt-2 text-xs text-indigo-100">{phaseLabel[phase]} {phase==='start'?'': ' · '+stage+'/3'}</p></div>
  <section className="rounded-3xl border bg-white p-5 shadow-sm md:p-8" aria-live="polite">
  {phase==='start'&&<div className="text-center"><div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-orange-100 text-5xl">🦊</div><h2 className="mt-5 text-3xl font-black">{stats.doneToday?(vi?'Hôm nay em đã hoàn thành!':'You already showed up today!'):(vi?'Bắt đầu chuyến phiêu lưu':'Ready, word hero?')}</h2><p className="mx-auto mt-3 max-w-lg text-sm text-slate-600">{stats.doneToday?(vi?'Em có thể chơi thêm để ôn luyện, không cần giành lại điểm danh.':'You can replay for practice. Your daily check-in is already recorded.'):(vi?'Học khoảng 3–5 phút. Không giới hạn số lần thử và không bị phạt khi sai.':'A short, self-paced game. Mistakes are practice—no hearts lost or timers.')}</p><button className="mt-7 rounded-2xl bg-indigo-700 px-7 py-4 text-lg font-black text-white hover:bg-indigo-800" onClick={playAgain}><Zap className="mr-2 inline"/>{vi?'Chơi ngay!':'Play daily quest!'}</button></div>}
  {phase==='match'&&<><p className="text-xs font-bold text-indigo-700">{vi?'VÒNG 1 / 3':'ROUND 1 / 3'}</p><h2 className="mt-2 text-2xl font-black">{vi?'Ghép từ với nghĩa':'Match each word to its meaning'}</h2><p className="mt-2 text-sm text-slate-500">{vi?'Chạm một từ tiếng Anh, rồi chọn nghĩa tiếng Việt chính xác.':'Choose an English word, then its Vietnamese meaning.'}</p><div className="mt-6 grid grid-cols-2 gap-3"><div className="space-y-3">{pairs.map((pair,i)=><button key={pair.en} disabled={matched.includes(i)} onClick={()=>pick('en',i)} className={'w-full min-h-16 rounded-2xl border-2 p-3 text-left text-sm font-bold transition '+(matched.includes(i)?'border-emerald-200 bg-emerald-50 text-emerald-700':left===i?'border-indigo-600 bg-indigo-100':'border-slate-200 hover:border-indigo-300')} aria-pressed={left===i}>{matched.includes(i)?'✓ ':''}{pair.en}</button>)}</div><div className="space-y-3">{rightOrder.map(i=><button key={pairs[i].en} disabled={matched.includes(i)} onClick={()=>pick('vi',i)} className={'w-full min-h-16 rounded-2xl border-2 p-3 text-left text-sm font-semibold transition '+(matched.includes(i)?'border-emerald-200 bg-emerald-50 text-emerald-700':right===i?'border-indigo-600 bg-indigo-100':'border-slate-200 hover:border-indigo-300')} aria-pressed={right===i}>{matched.includes(i)?'✓ ':''}{pairs[i].vi}</button>)}</div></div><p className="mt-4 text-sm font-bold" role="status">{matchHint||matched.length+'/4 '+(vi?'cặp đúng':'pairs matched')}</p><button disabled={matched.length!==4} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-700 px-6 py-3 font-black text-white disabled:opacity-40" onClick={()=>setPhase('quiz')}>{vi?'Vòng tiếp theo':'Next round'}<ArrowRight size={17}/></button></>}
  {phase==='quiz'&&<><p className="text-xs font-bold text-indigo-700">{vi?'VÒNG 2 / 3':'ROUND 2 / 3'} · {position+1}/3</p><h2 className="mt-3 text-2xl font-black">{quiz[position].prompt}</h2><p className="mt-2 text-sm text-slate-500">{quiz[position].promptVi}</p><div className="mt-5 grid gap-3">{quiz[position].options.map((option,i)=><button key={option} disabled={selected[position]!==undefined} onClick={()=>setSelected(a=>{const next=[...a];next[position]=i;return next})} className={'rounded-2xl border-2 px-4 py-4 text-left font-bold '+(selected[position]!==undefined&&i===quiz[position].right?'border-emerald-400 bg-emerald-50 text-emerald-900':selected[position]===i?'border-amber-300 bg-amber-50':'border-slate-200 hover:border-indigo-300')}>{String.fromCharCode(65+i)}. {option}</button>)}</div>{selected[position]!==undefined&&<div className={'mt-5 rounded-xl p-4 text-sm '+(selected[position]===quiz[position].right?'bg-emerald-50 text-emerald-900':'bg-amber-50 text-amber-900')}><strong>{selected[position]===quiz[position].right?(vi?'Chính xác!':'Correct!'):(vi?'Cùng học lại nhé.':'Nice try. Learn from this!')}</strong><p className="mt-2">{vi?quiz[position].explanationVi:quiz[position].explanation}</p><button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-5 py-2 font-bold text-white" onClick={()=>position===2?setPhase('sentence'):setPosition(position+1)}>{vi?'Tiếp tục':'Continue'}<ArrowRight size={17}/></button></div>}</>}
  {phase==='sentence'&&<><p className="text-xs font-bold text-indigo-700">{vi?'VÒNG 3 / 3':'ROUND 3 / 3'}</p><h2 className="mt-2 text-2xl font-black">{vi?'Xếp thành câu tiếng Anh':'Build an English sentence'}</h2><p className="mt-2 text-sm text-slate-500">{sentence.vi}</p><div className="mt-5 min-h-24 rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50 p-3"><p className="mb-2 text-xs text-slate-500">{vi?'Câu của em (nhấn từ để bỏ chọn)':'Your sentence (tap to undo a word)'}</p><div className="flex flex-wrap gap-2">{tokens.map((index,pos)=><button key={pos} onClick={()=>{if(sentenceSolved)return;setTokens(a=>a.filter((_,i)=>i!==pos));setSentenceHint('')}} className="rounded-xl bg-indigo-700 px-3 py-2 font-semibold text-white">{sentence.parts[index]}</button>)}</div></div><div className="mt-4 flex flex-wrap gap-2">{shuffled.filter(index=>!tokens.includes(index)).map(index=><button key={index} onClick={()=>{setTokens(a=>[...a,index]);setSentenceHint('')}} disabled={sentenceSolved} className="rounded-xl border-2 border-indigo-200 bg-white px-4 py-3 font-semibold hover:bg-indigo-50">{sentence.parts[index]}</button>)}</div><p className="mt-4 text-sm font-semibold" role="status">{sentenceHint}</p>{!sentenceSolved?<div className="mt-6 flex flex-wrap gap-3"><button disabled={tokens.length!==sentence.parts.length} onClick={()=>{if(tokens.every((word,i)=>word===i)){setSentenceSolved(true);setSentenceHint(vi?'Tuyệt vời! Em đã xếp đúng câu.':'Perfect! You built the sentence.')}else setSentenceHint(vi?'Chưa đúng, thử sắp xếp lại nhé.':'Not quite. Rearrange the words and try again.')}} className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white disabled:opacity-40">{vi?'Kiểm tra':'Check sentence'}</button><button onClick={()=>{setTokens([]);setSentenceHint('')}} className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-bold"><RotateCcw size={16}/>{vi?'Làm lại':'Clear'}</button></div>:<button onClick={()=>void finish()} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-lg font-black text-white"><Sparkles/>{vi?'Nhận phần thưởng':'Finish quest'}</button>}</>}
  {phase==='result'&&<div className="text-center"><div className="text-6xl" aria-hidden="true">{correct>=2?'🏆':'🌱'}</div><h2 className="mt-4 text-3xl font-black">{correct>=2?(vi?'Hoàn thành nhiệm vụ!':'Quest complete!'):(vi?'Luyện thêm một chút nhé!':'One more practice round!')}</h2><p className="mt-3 text-lg font-bold">{vi?'Câu trắc nghiệm đúng: ':'Quiz answers correct: '}{correct}/3</p>{correct<2?<><p className="mt-2 text-slate-600">{vi?'Làm lại phần trắc nghiệm để đạt ít nhất 2/3 câu đúng, rồi hoàn thành câu xếp chữ.':'Try the quiz again to get at least 2/3 correct. There is no time limit.'}</p><button className="mt-5 rounded-xl bg-indigo-700 px-6 py-3 font-bold text-white" onClick={()=>{setPosition(0);setSelected([]);setPhase('quiz')}}>{vi?'Luyện trắc nghiệm lại':'Retry quiz'}</button></>:<><p className="mt-3 text-sm text-slate-600">{saveStatus==='already'?(vi?'Hôm nay đã ghi nhận một ngày học. Giỏi lắm!':'Today is already on your calendar. Nice work!'):saveStatus==='saved'?(vi?'Đã lưu ngày học vào tài khoản Firebase.':'Your learning day was saved to Firebase.'):saveStatus==='guest'?(vi?'Đây là lượt chơi thử. Hãy đăng nhập để lưu streak.':'Guest practice complete. Sign in to save future streaks.'):saving?(vi?'Đang lưu…':'Saving your session…'):saveStatus==='error'?(vi?'Chưa lưu được tiến trình.':'Your session was not saved.'):''}</p>{saveStatus==='saved'&&<div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-3 font-black text-orange-700"><Flame/> {stats.current+(stats.doneToday?0:1)} {vi?'ngày liên tiếp':'day streak'}</div>}{saveStatus==='error'&&<><p className="mx-auto mt-2 max-w-lg break-words text-xs text-red-700">{saveError}</p><button onClick={()=>void finish()} className="mt-4 rounded-xl bg-indigo-700 px-5 py-3 text-white font-bold">{vi?'Thử lưu lại':'Retry save'}</button></>}{saveStatus==='guest'&&<button onClick={onAccount} className="mt-4 rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">{vi?'Đăng nhập':'Sign in'}</button>}<div className="mt-5 flex flex-wrap justify-center gap-3"><button onClick={playAgain} className="rounded-xl border px-5 py-3 font-bold">{vi?'Chơi lại để luyện':'Replay for practice'}</button><button onClick={onBack} className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">{vi?'Về Quest World':'Back to Quest World'}</button></div></>}</div>}
  </section>
  <p className="flex items-start gap-2 text-xs text-slate-500"><Heart size={16} className="shrink-0 text-rose-500"/>{vi?'Không phạt nếu em nghỉ học một ngày. Streak chỉ là dấu mốc luyện tập, không phải điểm số năng lực. Các thử thách đều được soạn mới theo chủ đề SGK.':'No penalty or pay-to-save streaks. The flame recognizes practice, not language proficiency. All challenges are original exercises.'}</p>
  <p className="flex items-start gap-2 text-xs text-slate-500"><ShieldCheck size={16} className="shrink-0"/>{vi?'Ngày học tính theo giờ Việt Nam (UTC+7). Một ngày chỉ ghi nhận một lần; chỉ tài khoản đã xác minh mới lưu được.':'Day boundaries use Vietnam time (UTC+7). One daily completion per day; a verified account is required for cloud saving.'}</p>
 </div>;
}
