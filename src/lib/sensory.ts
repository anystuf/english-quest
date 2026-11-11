/** Original UI sound effects + browser-native US English speech. No bundled music or external audio APIs. */
type RecognitionAlternative={transcript:string};
type RecognitionEventLike={results:ArrayLike<ArrayLike<RecognitionAlternative>>};
type RecognitionLike={
 lang:string;interimResults:boolean;maxAlternatives:number;
 onresult:((event:RecognitionEventLike)=>void)|null;
 onerror:((event:{error:string})=>void)|null;
 onend:(()=>void)|null;start:()=>void;stop:()=>void;
};
type RecognitionCtor=new()=>RecognitionLike;
export function speechRecognitionAvailable():boolean {
 if(typeof window==='undefined')return false;
 const w=window as unknown as {SpeechRecognition?:RecognitionCtor;webkitSpeechRecognition?:RecognitionCtor};
 return Boolean(w.SpeechRecognition||w.webkitSpeechRecognition);
}
export function recognizeEnglish():Promise<string>{
 return new Promise((resolve,reject)=>{
  if(typeof window==='undefined')return reject(new Error('Voice input is unavailable.'));
  const w=window as unknown as {SpeechRecognition?:RecognitionCtor;webkitSpeechRecognition?:RecognitionCtor};
  const Ctor=w.SpeechRecognition||w.webkitSpeechRecognition;
  if(!Ctor)return reject(new Error('Voice recognition is unavailable. You can type your answer instead.'));
  const instance=new Ctor();let finished=false;
  const done=(result:string|null,error?:string)=>{if(finished)return;finished=true;if(result!==null)resolve(result);else reject(new Error(error||'No words recognized. Try typing.'))};
  instance.lang='en-US';instance.interimResults=false;instance.maxAlternatives=1;
  instance.onresult=e=>done(e.results[0]?.[0]?.transcript??'');
  instance.onerror=e=>done(null,e.error==='not-allowed'?'Microphone permission denied. Type your answer instead.':'Voice recognition could not finish: '+e.error);
  instance.onend=()=>done(null,'No speech detected. Try typing instead.');
  try{instance.start()}catch(e){done(null,e instanceof Error?e.message:'Microphone unavailable')}
 });
}
export function speakUS(text:string,enabled=true,rate=.87):Promise<void>{
 return new Promise(resolve=>{
  if(!enabled||typeof window==='undefined'||!('speechSynthesis'in window)){resolve();return;}
  const engine=window.speechSynthesis;engine.cancel();
  const utterance=new SpeechSynthesisUtterance(text);utterance.lang='en-US';utterance.rate=rate;utterance.pitch=1.04;
  const voices=engine.getVoices();
  utterance.voice=voices.find(v=>v.lang.toLowerCase()==='en-us')??null;
  utterance.onend=()=>resolve();utterance.onerror=()=>resolve();
  try{engine.speak(utterance)}catch{resolve()}
 });
}
let context:AudioContext|null=null;
export function soundEffect(kind:'success'|'try'|'tap'|'celebrate',enabled=true){
 if(!enabled||typeof window==='undefined')return;
 try{
  const w=window as unknown as {AudioContext?:typeof AudioContext;webkitAudioContext?:typeof AudioContext};
  const A=w.AudioContext||w.webkitAudioContext;
  if(!A)return;
  context??=new A();
  if(context.state==='suspended')void context.resume();
  const tones=kind==='celebrate'?[440,554,659,880]:kind==='success'?[523,659,784]:kind==='try'?[294,247]:[640];
  const length=kind==='celebrate'?.14:.11;
  tones.forEach((hz,i)=>{
   const now=context!.currentTime+i*length;
   const osc=context!.createOscillator();const gain=context!.createGain();
   osc.type=kind==='try'?'triangle':'sine';
   osc.frequency.value=hz;
   gain.gain.setValueAtTime(.0001,now);
   gain.gain.exponentialRampToValueAtTime(.085,now+.012);
   gain.gain.exponentialRampToValueAtTime(.0001,now+length-.004);
   osc.connect(gain);gain.connect(context!.destination);osc.start(now);osc.stop(now+length);
  });
 }catch{/* Audio is optional; game stays accessible without it. */}
}
export async function speakConversation(lines:string[],enabled=true):Promise<void>{
 for(const line of lines)await speakUS(line,enabled,.84);
}
