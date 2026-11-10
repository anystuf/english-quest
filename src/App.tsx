import { useEffect, useState } from 'react';
import { BookOpen, CheckCircle2, ChevronRight, GraduationCap, RotateCcw, Sparkles, Trophy, Video } from 'lucide-react';
import { lesson } from './data/grade7/unit4/getting-started';
import { auth, db, firebaseConfigured } from './lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';

type View = 'home' | 'lesson' | 'teacher';
type Progress = { completed: boolean; correct: number; total: number };
const localKey = 'english-quest-unit4-getting-started';

function App() {
  const [view, setView] = useState<View>('home');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState<Progress | null>(() => {
    try { return JSON.parse(localStorage.getItem(localKey) || 'null') as Progress | null; } catch { return null; }
  });
  const [uid, setUid] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState('Local progress only');
  const correct = lesson.questions.filter(q => answers[q.id] === q.correctIndex).length;
  const finished = lesson.questions.every(q => answers[q.id] !== undefined);

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (!user) { setUid(null); return; }
      setUid(user.uid);
      if (!db) return;
      try {
        const snapshot = await getDoc(doc(db, 'users', user.uid, 'progress', 'unit4-getting-started'));
        if (snapshot.exists()) { const result = snapshot.data() as Progress; setProgress(result); localStorage.setItem(localKey, JSON.stringify(result)); }
        setSyncStatus('Firebase progress enabled');
      } catch { setSyncStatus('Cloud sync unavailable; local progress saved'); }
    });
    return unsubscribe;
  }, []);

  async function signIn() {
    if (!auth) return;
    try { await signInAnonymously(auth); }
    catch { setSyncStatus('Anonymous sign-in unavailable. Enable it in Firebase Authentication.'); }
  }
  async function submit() {
    if (!finished) return;
    const result = { completed: true, correct, total: lesson.questions.length };
    setProgress(result); setSubmitted(true);
    localStorage.setItem(localKey, JSON.stringify(result));
    if (db && uid) {
      try { await setDoc(doc(db, 'users', uid, 'progress', 'unit4-getting-started'), result); setSyncStatus('Progress saved to Firebase'); }
      catch { setSyncStatus('Cloud sync failed; local progress saved'); }
    }
  }
  function retry() { setAnswers({}); setSubmitted(false); }

  return <div className="min-h-screen">
    <header className="bg-navy text-white"><div className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap gap-4 justify-between items-center">
      <button className="flex gap-3 items-center font-black text-xl" onClick={() => setView('home')}><span className="rounded-xl bg-mint text-navy p-2"><BookOpen size={23}/></span> English Quest</button>
      <nav className="flex gap-2 text-sm"><button onClick={() => setView('home')} className="rounded-lg px-4 py-2 hover:bg-white/10">Dashboard</button><button onClick={() => setView('lesson')} className="rounded-lg px-4 py-2 hover:bg-white/10">Learn</button><button onClick={() => setView('teacher')} className="rounded-lg px-4 py-2 hover:bg-white/10">Teacher Studio (demo)</button></nav>
    </div></header>
    <main className="max-w-6xl mx-auto px-5 py-10">
    {view === 'home' && <section><div className="rounded-3xl bg-navy text-white p-8 md:p-12"><p className="text-mint font-bold mb-3">GRADE 7 · GLOBAL SUCCESS</p><h1 className="text-4xl md:text-5xl font-black mb-4">Your English adventure starts here.</h1><p className="text-slate-200 max-w-xl mb-7">Learn the textbook lesson, practice with feedback, and check what you really remember.</p><button onClick={() => setView('lesson')} className="bg-mint text-navy font-bold px-6 py-3 rounded-xl flex items-center gap-2">Start Unit 4 <ChevronRight size={19}/></button></div>
    <div className="grid md:grid-cols-3 gap-4 mt-6"><div className="bg-white rounded-2xl p-6 border"><Sparkles className="text-teal-600 mb-3"/><strong>Current quest</strong><p className="text-slate-500 mt-2">Unit 4 — Music and Arts</p></div><div className="bg-white rounded-2xl p-6 border"><Trophy className="text-amber-500 mb-3"/><strong>Knowledge check</strong><p className="text-slate-500 mt-2">{progress ? progress.correct + '/' + progress.total + ' correct' : 'Not completed yet'}</p></div><div className="bg-white rounded-2xl p-6 border"><GraduationCap className="text-blue-600 mb-3"/><strong>Progress</strong><p className="text-slate-500 mt-2">{progress?.completed ? 'Getting Started completed' : 'Ready to begin'}</p></div></div></section>}
    {view === 'lesson' && <section className="space-y-7"><div><p className="text-teal-700 font-bold uppercase tracking-wide">Unit 4 · {lesson.lesson}</p><h1 className="text-3xl font-extrabold mt-2">{lesson.subtitle}</h1><p className="text-slate-500 mt-2">Textbook-aligned introductory activities · This is an MVP sample, not the full textbook exercise set.</p></div>
    <div className="grid md:grid-cols-3 gap-6"><div className="md:col-span-2 space-y-6"><div className="bg-white border rounded-2xl p-5"><h2 className="font-bold flex gap-2 items-center mb-4"><Video size={20}/> Watch and listen</h2><div className="aspect-video rounded-xl overflow-hidden bg-slate-950"><iframe className="w-full h-full" src={`https://www.youtube-nocookie.com/embed/${lesson.videoId}`} title="Unit 4 Getting Started lesson video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><p className="text-xs text-slate-500 mt-2">Video availability depends on the YouTube publisher and embedding permissions.</p></div>
    <div className="bg-white border rounded-2xl p-6"><h2 className="font-bold text-xl mb-5">Knowledge check</h2><div className="space-y-7">{lesson.questions.map((q,i)=><fieldset key={q.id} className="space-y-3"><legend className="font-semibold mb-3">{i+1}. {q.prompt}</legend>{q.options.map((option,index)=><label key={option} className={`block rounded-xl border p-3 cursor-pointer ${answers[q.id] === index ? 'border-teal-600 bg-teal-50' : 'hover:bg-slate-50'}`}><input type="radio" className="accent-teal-700 mr-3" name={q.id} checked={answers[q.id] === index} onChange={() => {if(!submitted) setAnswers(a=>({...a,[q.id]:index}));}} disabled={submitted}/>{option}</label>)}{submitted && <p className="text-sm text-teal-800 rounded-lg bg-teal-50 p-3">{answers[q.id] === q.correctIndex ? 'Correct! ' : 'Review: '}{q.explanation}</p>}</fieldset>)}</div><div className="flex flex-wrap items-center gap-3 mt-8"><button onClick={submit} disabled={!finished || submitted} className="bg-navy text-white px-6 py-3 rounded-xl font-bold">Check answers</button><button onClick={retry} className="border px-4 py-3 rounded-xl flex gap-2 items-center"><RotateCcw size={16}/> Try again</button>{submitted && <strong className="text-teal-700 flex gap-2 items-center"><CheckCircle2/> {correct}/{lesson.questions.length} correct</strong>}</div></div></div>
    <aside className="space-y-5"><div className="bg-white border rounded-2xl p-6"><h2 className="font-bold mb-4">Your objectives</h2><ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">{lesson.objectives.map(o=><li key={o}>{o}</li>)}</ul></div><div className="bg-white border rounded-2xl p-6"><h2 className="font-bold mb-4">Vocabulary</h2><dl className="space-y-3">{lesson.vocabulary.map(v=><div key={v.word} className="border-b pb-2"><dt className="font-semibold">{v.word}</dt><dd className="text-sm text-slate-500">{v.meaning}</dd></div>)}</dl></div></aside></div></section>}
    {view === 'teacher' && <section className="max-w-3xl"><p className="text-teal-700 font-bold">TEACHER STUDIO · DEMONSTRATION</p><h1 className="text-3xl font-extrabold my-4">Lesson facilitation guide</h1><p className="text-slate-600 mb-5">The demo guide is visible to everyone. Restrict it to authorized teachers before publishing real class data.</p><div className="bg-white rounded-2xl border p-6"><h2 className="font-bold mb-3">60-minute lesson flow</h2><ol className="list-decimal pl-5 space-y-2">{['0–5 min · Warm-up: identify art images','5–10 min · Predict the school-gate conversation','10–22 min · Listen and read','22–34 min · Vocabulary practice','34–42 min · Language focus','42–52 min · Personal communication','52–60 min · Exit ticket and feedback'].map(x=><li key={x}>{x}</li>)}</ol></div></section>}
    <footer className="mt-12 text-xs text-slate-500 flex flex-wrap justify-between gap-3"><span>English Quest · Prototype v0.1</span><span>{firebaseConfigured ? (uid ? 'Signed in anonymously · ' : 'Firebase configured · ') : 'Firebase not configured · '}{syncStatus}</span>{firebaseConfigured && !uid && <button className="underline text-teal-700" onClick={signIn}>Enable cloud progress (anonymous)</button>}</footer>
    </main></div>;
}
export default App;
