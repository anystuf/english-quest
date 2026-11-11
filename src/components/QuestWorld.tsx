import {useMemo,useState} from 'react';
import {Award,BookOpen,ChevronRight,CircleHelp,Crown,Flag,HeartHandshake,Medal,ShieldCheck,Sparkles,Zap} from 'lucide-react';
import type {ProgressRecord,AttemptRecord} from '../lib/studentRecords';
import {lessonIds} from '../lib/studentRecords';

const missions=[
 {title:'The Art Explorer',vi:'Nhà thám hiểm nghệ thuật',icon:'🎨',mode:'Interpretive',modeVi:'Đọc, nghe, hiểu',focus:'Find the topic and key information in the dialogue.',focusVi:'Tìm chủ đề và ý chính của hội thoại.'},
 {title:'Sound Detective',vi:'Thám tử âm thanh',icon:'🎧',mode:'Interpretive',modeVi:'Nhận biết âm',focus:'Identify art words and distinguish /ʃ/ from /ʒ/.',focusVi:'Nhận diện từ và phân biệt /ʃ/ với /ʒ/.'},
 {title:'Comparison Wizard',vi:'Pháp sư so sánh',icon:'🪄',mode:'Presentational',modeVi:'Diễn đạt',focus:'Explain similarities and differences using English.',focusVi:'So sánh điểm giống và khác nhau bằng tiếng Anh.'},
 {title:'Conversation Champion',vi:'Nhà vô địch hội thoại',icon:'💬',mode:'Interpersonal',modeVi:'Hội thoại hai chiều',focus:'Ask questions, reply, and explain a preference.',focusVi:'Hỏi, trả lời và giải thích sở thích.'},
 {title:'Culture Detective',vi:'Thám tử văn hóa',icon:'🏮',mode:'Interpretive',modeVi:'Đọc hiểu',focus:'Understand traditional art and explain two details.',focusVi:'Hiểu nghệ thuật truyền thống và nêu hai chi tiết.'},
 {title:'Invitation Creator',vi:'Người sáng tạo lời mời',icon:'✉️',mode:'Presentational',modeVi:'Viết và trình bày',focus:'Understand a listening passage and write an invitation.',focusVi:'Hiểu nội dung nghe và viết thư mời.'},
 {title:'Music Show Hero',vi:'Anh hùng sân khấu',icon:'🏆',mode:'Presentational',modeVi:'Thuyết trình',focus:'Present an original school music-show invitation.',focusVi:'Giới thiệu lời mời xem biểu diễn âm nhạc.'}
] as const;

export function gameStats(progress:Record<string,ProgressRecord>,attempts:AttemptRecord[]){
 const tackled=lessonIds.filter(id=>Boolean(progress[id]));
 const perfect=lessonIds.filter(id=>progress[id]?.bestScore===3);
 // Display-only XP, earned once per topic; retaking the same quiz cannot farm points.
 const xp=lessonIds.reduce((sum,id)=>{const record=progress[id];return sum+(record?20+record.bestScore*10:0)},0);
 const latest=attempts.filter(a=>a.createdAt?.toDate?.()).map(a=>a.createdAt!.toDate()).sort((a,b)=>b.getTime()-a.getTime());
 const recentDays=new Set(latest.map(date=>date.toLocaleDateString('en-CA')));
 const activeDays=recentDays.size;
 const level=xp>=300?4:xp>=180?3:xp>=70?2:1;
 const badges=[
  {id:'first',name:'First Quest',vi:'Nhiệm vụ đầu tiên',emoji:'🌱',earned:tackled.length>=1,why:'Attempt a practice quest',whyVi:'Làm một bài luyện tập'},
  {id:'practice',name:'Practice Explorer',vi:'Nhà thám hiểm chăm chỉ',emoji:'🧭',earned:tackled.length>=4,why:'Try four lesson quizzes',whyVi:'Thử bốn bài kiểm tra'},
  {id:'precision',name:'Sharp Thinker',vi:'Tư duy sắc bén',emoji:'🎯',earned:perfect.length>=2,why:'Get full marks on two short quizzes',whyVi:'Đạt điểm tối đa ở hai bài luyện ngắn'},
  {id:'explorer',name:'Unit 4 Explorer',vi:'Khám phá Unit 4',emoji:'🏅',earned:tackled.length===7,why:'Try all seven lesson quizzes',whyVi:'Thử cả bảy bài luyện tập'}
 ];
 return {xp,level,tackled,perfect,activeDays,badges};
}

export function QuestWorld({progress,attempts,isLoggedIn,onOpenLesson,onOpenAccount,lang}:{progress:Record<string,ProgressRecord>;attempts:AttemptRecord[];isLoggedIn:boolean;onOpenLesson:(index:number)=>void;onOpenAccount:()=>void;lang:'en'|'vi'}){
 const [showHelp,setShowHelp]=useState(false);
 const stats=useMemo(()=>gameStats(progress,attempts),[progress,attempts]);
 const vi=lang==='vi';const attempted=stats.tackled.length;const next=lessonIds.findIndex(id=>!progress[id]);const current=next<0?6:next;
 const min=stats.level===1?0:stats.level===2?70:stats.level===3?180:300;
 const max=stats.level===4?350:stats.level===3?300:stats.level===2?180:70;
 const percent=Math.min(100,Math.round((stats.xp-min)/(max-min)*100));
 return <div className="space-y-6">
 <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#15285e] via-[#3e3db2] to-[#7e56d6] p-6 text-white shadow-xl md:p-9">
  <div className="absolute right-[-50px] top-[-60px] h-56 w-56 rounded-full border-[26px] border-white/10" aria-hidden="true"/>
  <div className="relative z-10 grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-center">
   <div><span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider"><Sparkles size={15}/>{vi?'Hành trình âm nhạc và nghệ thuật':'Music & Arts Adventure'}</span><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{vi?'Thế giới nhiệm vụ Unit 4':'Welcome to Quest World'}</h2><p className="mt-3 text-indigo-100">{vi?'Khám phá bảy thử thách. Hiểu bài, luyện kỹ năng và mở huy hiệu của riêng em.':'Explore seven challenges. Build communication skills and collect private, mastery-based badges.'}</p>
   <button onClick={()=>onOpenLesson(current)} className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-amber-300 px-5 py-3 font-black text-indigo-950 hover:bg-amber-200"><Zap size={19}/>{vi?'Tiếp tục hành trình':'Continue my quest'}<ChevronRight size={18}/></button>
   </div>
   <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
    <div className="flex items-center justify-between"><span className="text-sm font-bold text-indigo-100"><Crown size={17} className="mr-1 inline"/>{vi?'Cấp độ':'Level'} {stats.level}</span><span className="font-black text-amber-200">{stats.xp} XP</span></div>
    <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/20" role="progressbar" aria-label="Progress to next level" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}><div style={{width:percent+'%'}} className="h-full rounded-full bg-amber-300 transition-all"/></div>
    <p className="mt-2 text-xs text-indigo-100">{stats.level===4?(vi?'Đã đạt cấp cao nhất của Unit 4':'Top level for Unit 4'):(vi?'Tiến trình đến cấp tiếp theo':'Progress to next level')+': '+stats.xp+'/'+max+' XP'}</p>
    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/20 pt-4"><div><p className="text-2xl font-black">{attempted}/7</p><p className="text-xs text-indigo-100">{vi?'Bài đã thử':'Quests attempted'}</p></div><div><p className="text-2xl font-black">{stats.perfect.length}</p><p className="text-xs text-indigo-100">{vi?'Bài đạt 3/3':'Perfect short quizzes'}</p></div></div>
   </div>
  </div>
 </section>
 {!isLoggedIn&&<div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm"><p className="text-amber-900"><ShieldCheck className="mr-2 inline" size={18}/>{vi?'Chế độ xem thử. Đăng nhập và xác minh email để lưu tiến trình.':'Preview mode. Sign in and verify email to save progress and unlock badges.'}</p><button className="rounded-xl bg-amber-200 px-4 py-2 font-bold text-amber-950" onClick={onOpenAccount}>{vi?'Đăng nhập':'Sign in'}</button></div>}
 <section>
  <div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="text-2xl font-black">{vi?'Bản đồ nhiệm vụ':'Your quest map'}</h3><p className="text-sm text-slate-500">{vi?'Em có thể làm bài theo thứ tự hoặc chọn bài muốn học.':'Choose your own path or follow the suggested lesson order.'}</p></div><button onClick={()=>setShowHelp(!showHelp)} className="inline-flex items-center gap-1 rounded-xl border bg-white px-3 py-2 text-sm font-bold"><CircleHelp size={16}/>{vi?'Cách tính XP':'How XP works'}</button></div>
  {showHelp&&<div className="mt-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm"><p className="font-bold">{vi?'Điểm thưởng học tập':'Mastery-based points'}</p><p className="mt-1">{vi?'Mỗi bài đã làm nhận 20 XP + 10 XP cho mỗi câu đúng trong điểm cao nhất của bài. Làm lại giúp cải thiện kỹ năng nhưng không cộng điểm trùng lặp.':'Each tried lesson earns 20 XP plus 10 XP for each correct answer in its best short quiz. Retakes improve your best score, without farming points.'}</p><p className="mt-2 text-xs text-slate-600">{vi?'XP chỉ thể hiện hoạt động luyện tập, không phải chứng nhận năng lực ACTFL.':'XP is a practice indicator, not an ACTFL proficiency rating or credential.'}</p></div>}
  <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{missions.map((m,i)=>{const rec=progress[lessonIds[i]];const state=!rec?'new':rec.bestScore===3?'perfect':'inprogress';return <button key={m.title} onClick={()=>onOpenLesson(i)} className="group relative flex min-h-[185px] flex-col items-start rounded-3xl border-2 border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-md"><span className="absolute right-4 top-4 rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-indigo-700">{i+1}/7</span><span className="text-4xl" aria-hidden="true">{m.icon}</span><h4 className="mt-3 text-lg font-black">{vi?m.vi:m.title}</h4><span className="mt-1 text-xs font-semibold text-violet-700">{vi?m.modeVi:m.mode}</span><p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{vi?m.focusVi:m.focus}</p><div className="mt-3 flex w-full items-center justify-between border-t pt-3"><span className={'text-xs font-bold '+(state==='perfect'?'text-emerald-700':state==='inprogress'?'text-amber-700':'text-slate-500')}>{state==='perfect'?'⭐ '+(vi?'Đúng 3/3':'3/3 practice'):state==='inprogress'?'✨ '+rec.bestScore+'/3':vi?'Chưa thử':'Not tried'}</span><span className="flex items-center text-xs font-bold text-indigo-700">{state==='new'?(vi?'Khám phá':'Explore'):(vi?'Luyện tiếp':'Practice again')}<ChevronRight size={15}/></span></div></button>})}</div>
 </section>
 <section className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7"><h3 className="flex items-center gap-2 text-xl font-black"><Medal className="text-amber-500"/>{vi?'Bộ sưu tập huy hiệu':'My achievement shelf'}</h3><p className="mt-1 text-sm text-slate-500">{vi?'Huy hiệu chỉ hiển thị cá nhân, không có bảng xếp hạng gây áp lực.':'Private milestones — no public leaderboards or penalty for taking a break.'}</p><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{stats.badges.map(b=><div key={b.id} className={'rounded-2xl border p-4 text-center '+(b.earned?'border-amber-200 bg-amber-50':'border-slate-200 bg-slate-50 opacity-65')}><span className="text-3xl" aria-label={b.earned?'Unlocked':'Locked'}>{b.earned?b.emoji:'🔒'}</span><p className="mt-2 text-sm font-black">{vi?b.vi:b.name}</p><p className="mt-1 text-xs text-slate-500">{vi?b.whyVi:b.why}</p></div>)}</div></section>
 <section className="grid gap-3 md:grid-cols-3">{[{icon:<BookOpen/>,name:vi?'Hiểu nội dung':'Interpretive',detail:vi?'Hiểu điều nghe, đọc và xem':'Understand what you hear, read and view'},{icon:<HeartHandshake/>,name:vi?'Giao tiếp':'Interpersonal',detail:vi?'Hỏi, trả lời, tương tác':'Interact, ask and respond'},{icon:<Flag/>,name:vi?'Trình bày':'Presentational',detail:vi?'Viết và thuyết trình':'Write and present ideas'}].map(x=><div key={x.name} className="rounded-2xl bg-indigo-50 p-4"><span className="text-indigo-700">{x.icon}</span><h4 className="mt-2 font-black">{x.name}</h4><p className="mt-1 text-sm text-slate-600">{x.detail}</p></div>)}</section>
 <p className="text-xs text-slate-500"><Award className="mr-1 inline" size={14}/>{vi?'Thiết kế lấy cảm hứng từ ba phương thức giao tiếp ACTFL và các mục tiêu học tập của Unit 4; không phải đánh giá ACTFL chính thức.':'Inspired by ACTFL communication modes and Unit 4 outcomes. Not an official ACTFL assessment.'}</p>
 </div>
}
