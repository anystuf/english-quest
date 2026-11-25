import {sectionsForUnit,verifiedPlaylistVideos,sectionNames,sectionKey} from '../src/data/learningSections.ts';
import test from 'node:test';import assert from 'node:assert/strict';import {journeyMissions,PLAYLIST_ID,START_VIDEO_ID,lessonVideos,normalizeJourney,recommendedReview,REVIEW_DELAY_DAYS,localTutorReply} from '../src/data/learningJourney.ts';
test('video playlist references precisely the parent-supplied playlist and clip',()=>{assert.equal(PLAYLIST_ID,'PLfsnwY_9CvJLLxs13u8dx036ofRDZyuRy');assert.equal(START_VIDEO_ID,'8f6ffXl0dno')});
test('Unit 5 comes first; older units are review routes',()=>{assert.deepEqual(journeyMissions.map(x=>x.unit),[5,4,3,2,1]);assert.equal(new Set(journeyMissions.map(x=>x.id)).size,5)});
test('four assessed skill categories per unit, with valid keys and helpful explanations',()=>{for(const m of journeyMissions){assert.deepEqual(m.quiz.map(q=>q.skill),['meaning','use','grammar','sentence']);for(const q of m.quiz){assert.equal(q.options.length,3);assert.ok(q.answer>=0&&q.answer<=2);assert.ok(q.why.length>=10)}assert.equal(m.lines.length,4);assert.ok(m.lines.every(l=>l.en.length>12&&l.vi.length>8))}});
test('normalization is stable without trimming meaningful words',()=>{assert.equal(normalizeJourney('  I  Like,  MUSIC! '),'i like music')});
test('spaced review and weakness suggestions do not require billing or AI',()=>{assert.deepEqual(REVIEW_DELAY_DAYS,[1,3,7]);assert.equal(recommendedReview({'u4-arts':2,'u3-service':1}),'u4-arts');assert.equal(recommendedReview({'u4-arts':4}),'u5-food')});

test('guided tutor explains Unit 5 grammar and rejects private contact data',()=>{assert.match(localTutorReply('How many eggs?',5),/How many/);assert.match(localTutorReply('Mình ở abc@gmail.com',5),/Đừng chia sẻ/);assert.match(localTutorReply('Cho em một gợi ý',5),/Food and Drink/);});

test('Each Unit has its own verified Getting Started video, without reusing Unit 1 for Unit 5',()=>{const ids=Object.values(lessonVideos).map(v=>v.id);assert.equal(new Set(ids).size,5);assert.equal(lessonVideos[1].id,START_VIDEO_ID);assert.equal(lessonVideos[5].id,'5Wu-MiEwRnQ');for(let unit=1;unit<=5;unit++)assert.match(lessonVideos[unit].title,new RegExp('Unit '+unit));});

test('Every Unit has exactly eight navigable textbook sections, including separate Looking Back and Project',()=>{
 assert.equal(sectionNames.length,8);
 for(const unit of [1,2,3,4,5]){
  const lessons=sectionsForUnit(unit);
  assert.equal(lessons.length,8);
  assert.deepEqual(lessons.map(x=>x.name),sectionNames);
  assert.equal(new Set(lessons.map(x=>x.id)).size,8);
  assert.ok(lessons.every((x,i)=>x.index===i&&x.id===sectionKey(unit,i)&&x.quiz.length===4&&x.lines.length===4));
 }
});
test('Unit 5 has seven correctly mapped videos and eight unique section checkpoints',()=>{
 const lessons=sectionsForUnit(5);
 assert.equal(lessons.filter(x=>x.videoId).length,8);
 assert.equal(new Set(lessons.map(x=>x.videoId)).size,7);
 assert.equal(lessons[0].videoId,'5Wu-MiEwRnQ');
 assert.equal(lessons[7].videoId,'98IEtXSP0Eg');
 for(const x of lessons){
  assert.equal(x.specific,true);
  assert.ok(x.page);
  assert.deepEqual(x.quiz.map(q=>q.skill),['meaning','use','grammar','sentence']);
  assert.ok(x.quiz.every(q=>q.options.length===3&&q.answer>=0&&q.answer<=2&&q.why.length>=10));
 }
 assert.notDeepEqual(lessons[0].quiz,lessons[1].quiz);
 assert.notDeepEqual(lessons[0].lines,lessons[1].lines);
});
test('The selected playlist provides all Units and shared Looking Back–Project lessons',()=>{
 assert.equal(verifiedPlaylistVideos[3][4],'bIeTqbx923Y');
 assert.equal(verifiedPlaylistVideos[3][5],'tul-rf_ZTU8');
 assert.equal(verifiedPlaylistVideos[4][4],'yRZv4ckBegw');
 assert.equal(verifiedPlaylistVideos[5][5],'sDzZOktvhJI');
 for(const unit of [1,2,3,4,5]){
  const ids=verifiedPlaylistVideos[unit];
  assert.equal(ids.length,8);
  assert.equal(new Set(ids).size,7);
  assert.equal(ids[6],ids[7],'Looking Back and Project share the teacher video');
 }
});

test('All five Units have 160 individual section questions and 160 short shadowing lines',()=>{
 const all=[1,2,3,4,5].flatMap(unit=>sectionsForUnit(unit));
 assert.equal(all.length,40);
 assert.equal(all.reduce((n,x)=>n+x.quiz.length,0),160);
 assert.equal(all.reduce((n,x)=>n+x.lines.length,0),160);
 assert.equal(new Set(all.map(x=>x.id)).size,40);
 assert.equal(new Set(all.flatMap(x=>x.quiz.map(q=>q.id))).size,160);
 for(const x of all){
  assert.equal(x.specific,true,'Each section must have original practice, not a reused Unit-level quiz');
  assert.ok(x.videoId&&/^[A-Za-z0-9_-]{11}$/.test(x.videoId));
  assert.ok(x.page);
  assert.deepEqual(x.quiz.map(q=>q.skill),['meaning','use','grammar','sentence']);
  for(const q of x.quiz){
   assert.ok(q.prompt.length>=12);
   assert.equal(q.options.length,3);
   assert.equal(new Set(q.options).size,3,'Distractors must be distinct');
   assert.ok(q.answer>=0&&q.answer<3);
   assert.ok(q.why.length>=10);
  }
  assert.equal(x.lines.length,4);
  for(const line of x.lines)assert.ok(line.en.length>=12&&line.vi.length>=8);
 }
 for(const unit of [1,2,3,4,5]){
  const lessons=sectionsForUnit(unit);
  assert.equal(new Set(lessons.map(x=>x.quiz[0].prompt)).size,8,'Section checkpoints must have distinct first questions');
  assert.equal(new Set(lessons.map(x=>x.lines[0].en)).size,8,'Section shadowing must be contextual, not duplicated across sections');
 }
});
test('Every section maps to the exact new 2026 selected Cô Minh Hậu playlist IDs',()=>{
 const expected={
 1:['8f6ffXl0dno','IeBG95n-2Cc','DXVB7_DBU9U','SxJXCJ0VbtU','35RTcJb_pTI','5O7d91fBsTw','5gQChtoqUgQ','5gQChtoqUgQ'],
 2:['IVTyK8q-_Us','viyXs6_ATzU','b-H_gHnP3iQ','u7LP6TUiLaE','67GcT-gbP-0','crtqwgCQVw4','uc3zUmMsBQg','uc3zUmMsBQg'],
 3:['bVAFCy7mFRU','1Q3GTKwm5F0','jbhIJ4anQbE','nL4fyqLAd7U','bIeTqbx923Y','tul-rf_ZTU8','vSbarci2o30','vSbarci2o30'],
 4:['Dac06tO9wDE','IJLbWfrf0ac','OXho0kHuVs0','RFLqZZZBMCI','yRZv4ckBegw','RIJB41k1gB4','VW9eAAAtyF0','VW9eAAAtyF0'],
 5:['5Wu-MiEwRnQ','0ZShEdRYVYs','ZhRX7zOoIGk','dq25WD8Us9c','7gnCf24o5ac','sDzZOktvhJI','98IEtXSP0Eg','98IEtXSP0Eg']};
 for(const unit of [1,2,3,4,5])assert.deepEqual(verifiedPlaylistVideos[unit],expected[unit]);
});
