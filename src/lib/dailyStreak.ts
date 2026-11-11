/** Streak dates are interpreted in Vietnam time (UTC+7). Display-only, not a proficiency credential. */
export const STREAK_TIMEZONE = 'Asia/Ho_Chi_Minh';
export function vietnamDay(date: Date): string {
 const parts=new Intl.DateTimeFormat('en-US',{timeZone:STREAK_TIMEZONE,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(date);
 const read=(type:string)=>parts.find(part=>part.type===type)?.value??'';
 return read('year')+'-'+read('month')+'-'+read('day');
}
export function shiftDay(day: string, delta: number): string {
 const value=new Date(day+'T00:00:00Z');
 value.setUTCDate(value.getUTCDate()+delta);
 return value.toISOString().slice(0,10);
}
export type StreakStats={current:number;longest:number;doneToday:boolean;today:string;days:Set<string>;calendar:string[]};
export function calculateStreak(days:readonly string[],today:string):StreakStats{
 const valid=Array.from(new Set(days.filter(day=>/^\d{4}-\d{2}-\d{2}$/.test(day)&&day<=today))).sort();
 const set=new Set(valid);
 let longest=0;let run=0;let previous='';
 for(const day of valid){
  run=previous&&shiftDay(previous,1)===day?run+1:1;
  longest=Math.max(longest,run);previous=day;
 }
 const yesterday=shiftDay(today,-1);
 let cursor=set.has(today)?today:set.has(yesterday)?yesterday:'';
 let current=0;
 while(cursor&&set.has(cursor)){current++;cursor=shiftDay(cursor,-1);}
 return {current,longest,doneToday:set.has(today),today,days:set,calendar:Array.from({length:7},(_,i)=>shiftDay(today,i-6))};
}
