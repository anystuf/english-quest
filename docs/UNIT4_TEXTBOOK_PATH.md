# English Quest · Unit 4 textbook-first learning path (v0.8)

## Scope and source
- Textbook: *English 7 – Global Success*, Unit 4 **Music and Arts**, pages **40–49**.
- Seven curriculum sections: Getting Started; A Closer Look 1; A Closer Look 2; Communication; Skills 1; Skills 2; Looking Back & Project.
- **38 activity mappings**: 5 each for the first six sections; Looking Back 4, Project 3, and Now I Can reflection 1.
- Schoolbook content is the primary source of *objectives and activity sequence*. English Quest includes **newly authored companion texts, examples, quizzes, and listening scripts**. It does NOT reproduce the complete official textbook conversation, images, listening assets, answer key, or page layouts.
- Reference pages (for research, not licensing): https://sachgiaokhoa.online/lop-7-10/global-success-bo-giao-duc-dao-tao-11/unit-4-music-and-arts-2011/ . Validate against the learner's actual printed textbook edition.

## Teaching model
Each activity follows:
1. **Textbook** – actual page and activity number, instruction to complete the original printed-book question first.
2. **Understand** – bilingual goal, scaffold and context (if useful).
3. **Practice** – one original interactive multiple-choice, fill-in, listening or writing task with formative feedback.
4. **Apply** – self-generated example or writing/speaking task, teacher review for open responses.
5. **Play** – retain Quest World, Daily Adventure, Pronunciation Lab and Learning Studio.
6. **Check** – practice evidence, original exit quiz, and honest not-certified caveat.

The exercise numbering is matched to printed book, but each activity currently provides ONE companion item, not full replicas of every textbook subquestion. This is intentionally a **textbook-guided study companion**, not a complete replacement or publisher-approved digital edition.

## Stronger alignment by section
| SGK | App |
|---|---|
| Getting Started pages 40–41 | preferences, topic, vocabulary gaps, object recognition, self-reflection |
| A Closer Look 1 p42 | people/places, collocations, context vocabulary, /ʃ/ vs /ʒ/ |
| A Closer Look 2 pp43–44 | like/different from/as…as; fill/rewrite/museum comparisons |
| Communication p45 | preferred arts, paired role-play, music-culture knowledge, original school-arts reading, comparison between schools |
| Skills 1 p46 | discuss traditional performances, read an original email about puppetry, detail comprehension, performance interview, Teachers' Day plan |
| Skills 2 p47 | prediction, two original spoken street-painting tasks, informal invitation analysis, 60–80-word writing |
| Looking Back p48 | vocabulary/grammar checks and transformation |
| Project p49 | invitation comprehension, music-show plan, invitation presentation and Now I Can self-review |

## Learning records and privacy
- Firestore: `users/{uid}/curriculum/{activityId}` with activityId, lessonId, response (≤2400 chars), mode (auto/submission), latest correctness, ever-correct, attempt count and server timestamp.
- Requires a verified learner's Firebase Auth account and updated published Firestore rules. Guests see session results only. On errors the UI distinguishes session state from cloud save.
- Self-written answers are **submitted for teacher review**, not graded by the app. Automatic answers and progress are client-computed and should not be used for high-stakes decisions.

## Remaining work to call it fully textbook-complete
- Teacher-licensed official audio, publisher-approved digital text/images, complete subquestion coverage, and validated oral/written proficiency assessment.
- Expand the practice bank beyond one question per textbook activity and measure retention on separate, unseen items.
- Human usability tests on the actual Grade 7 learner's phone/computer and cross-device Firebase rule checks.

## Verification
- `npm run test:curriculum` verifies sections, 38 IDs, pages, question constraints, Skills 1/2 coverage and non-autograded writing.
- `npm run build` includes all previous streak, coach and pronunciation tests and TypeScript/Vite build.
- Manual: navigate all seven sections, complete one of each question type, test multiple incorrect attempts, listen to original TTS and reveal transcripts, submit Skills 2 letter, refresh and check Firestore per-UID records.
- Firebase Console -> Firestore -> Rules: publish latest `firestore.rules`; Vercel alone does not publish them.
