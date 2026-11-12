import test from 'node:test';
import assert from 'node:assert/strict';
import {guidedTeachingScripts,foundationCheckpoint,normalizeFoundationAnswer} from '../src/data/guidedLessons.ts';

test('three initial Unit 4 lessons follow textbook order and page mapping',()=>{
 assert.deepEqual(guidedTeachingScripts.map(s=>s.id),['getting-started','closer-look-1','closer-look-2']);
 assert.deepEqual(guidedTeachingScripts.map(s=>s.lessonIndex),[0,1,2]);
 assert.deepEqual(guidedTeachingScripts.map(s=>s.page),['40–41','42','43–44']);
});
test('each teaching script has a complete 45 minute teach–model–practice–check flow',()=>{
 for(const script of guidedTeachingScripts){
  assert.equal(script.stages.reduce((sum,s)=>sum+s.minutes,0),45);
  assert.ok(script.stages.length>=5);
  assert.ok(script.objectives.length>=3);
  assert.ok(script.vocabulary.length>=5);
  assert.ok(script.passCriteria && script.homework);
  for(const stage of script.stages){
   assert.ok(stage.phase.length>=4);for(const field of [stage.teacher,stage.student,stage.check])assert.ok(field.length>=10);
  }
 }
});
test('checkpoint has 5 unique valid original questions',()=>{
 assert.equal(foundationCheckpoint.length,5);
 assert.equal(new Set(foundationCheckpoint.map(q=>q.id)).size,5);
 for(const q of foundationCheckpoint){assert.ok(q.question);assert.ok(q.answer);assert.ok(q.hint);assert.ok(q.why);}
});
test('case whitespace and trailing punctuation cannot break a correct answer',()=>{
 assert.equal(normalizeFoundationAnswer('  Nick   plays the PIANO.  '),'nick plays the piano');
 assert.equal(normalizeFoundationAnswer('SHE IS AN ARTIST!'),'she is an artist');
});
