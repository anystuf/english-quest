/** A text-recognition match, NOT an acoustic pronunciation/phoneme assessment. */
export function normalizeSpoken(value:string):string{
 return value.toLowerCase().normalize('NFKC').replace(/[’']/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
}
export function editDistance(left:string,right:string):number{
 const prev=Array.from({length:right.length+1},(_,i)=>i);
 for(let i=1;i<=left.length;i++){
  const next=[i];
  for(let j=1;j<=right.length;j++)next[j]=Math.min(next[j-1]+1,prev[j]+1,prev[j-1]+(left[i-1]===right[j-1]?0:1));
  for(let j=0;j<next.length;j++)prev[j]=next[j];
 }
 return prev[right.length];
}
export type RecognitionMatch={score:number;status:'recognized'|'close'|'retry'|'no-speech';expected:string;heard:string;exact:boolean};
export function scoreWordRecognition(expected:string,heard:string):RecognitionMatch{
 const target=normalizeSpoken(expected),speech=normalizeSpoken(heard);
 if(!target||!speech)return {score:0,status:'no-speech',expected:target,heard:speech,exact:false};
 const n=target.split(' ').length;const tokens=speech.split(' ');
 const windows=tokens.length>=n?Array.from({length:tokens.length-n+1},(_,i)=>tokens.slice(i,i+n).join(' ')):[speech];
 const score=Math.max(...windows.map(segment=>Math.round(100*(1-editDistance(target,segment)/Math.max(target.length,segment.length,1)))));
 const safe=Math.max(0,Math.min(100,score));
 return {score:safe,status:safe>=85?'recognized':safe>=55?'close':'retry',expected:target,heard:speech,exact:safe===100};
}
export function pronunciationWordId(word:string):string{
 return normalizeSpoken(word).replace(/\s+/g,'-').slice(0,80);
}
