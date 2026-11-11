import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateStreak,shiftDay,vietnamDay} from '../src/lib/dailyStreak.ts';

test('Vietnam calendar day switches at UTC+7 midnight',()=>{
 assert.equal(vietnamDay(new Date('2026-11-10T16:59:59Z')),'2026-11-10');
 assert.equal(vietnamDay(new Date('2026-11-10T17:00:00Z')),'2026-11-11');
});
test('day shifting works across month and year boundaries',()=>{
 assert.equal(shiftDay('2026-01-01',-1),'2025-12-31');
 assert.equal(shiftDay('2026-11-30',1),'2026-12-01');
});
test('new learner has no streak and seven calendar days',()=>{
 const a=calculateStreak([],'2026-11-11');
 assert.equal(a.current,0);assert.equal(a.longest,0);assert.equal(a.calendar.length,7);
 assert.equal(a.calendar[0],'2026-11-05');
});
test('today and previous consecutive days count once each',()=>{
 const a=calculateStreak(['2026-11-09','2026-11-10','2026-11-11','2026-11-11'],'2026-11-11');
 assert.equal(a.current,3);assert.equal(a.longest,3);assert.equal(a.doneToday,true);
});
test('yesterday keeps current streak until today is completed',()=>{
 const a=calculateStreak(['2026-11-08','2026-11-09','2026-11-10'],'2026-11-11');
 assert.equal(a.current,3);assert.equal(a.doneToday,false);
});
test('missed day resets current streak without erasing personal best',()=>{
 const a=calculateStreak(['2026-11-04','2026-11-05','2026-11-06','2026-11-09'],'2026-11-11');
 assert.equal(a.current,0);assert.equal(a.longest,3);
});
test('future records cannot artificially extend today streak',()=>{
 const a=calculateStreak(['2026-11-11','2026-11-12'],'2026-11-11');
 assert.equal(a.current,1);assert.equal(a.days.has('2026-11-12'),false);
});
