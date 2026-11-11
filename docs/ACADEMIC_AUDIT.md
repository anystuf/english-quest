# English Quest — Unit 4 Academic Quality Review (2026-11-11)

## Source hierarchy and claims
- **Primary textbook-alignment reference**: *Tiếng Anh 7 – Global Success*, Unit 4, *Music and Arts* (publisher training material, Nhà xuất bản Giáo dục Việt Nam): https://medialib.qlgd.edu.vn/Uploads/THU_VIEN/shn/2/37/UserFiles/TLBD-Anh-7---Global-Success-434ab8a9-7aa0-48d3-a228-a433dd62d185.pdf
- **Learning design**: interpretive, interpersonal, and presentational communicative tasks inspired by ACTFL; formative assessment, retrieval practice and spaced review. These are instructional choices, **not ACTFL certification**.
- All interactive question prompts are independently written. The platform is a **supplement** to the physical textbook and official listening recordings, not a licensed reproduction.

## Coverage map
| Lesson | Curriculum target | Website evidence | Missing to call 'complete' |
| --- | --- | --- | --- |
| Getting Started | Introductory conversation, music and arts, vocabulary, preferences | Companion video link, prediction, vocabulary, 3 MCQs, free-response work | Teacher-approved audio transcript fidelity, full textbook activities and detailed comprehension checks |
| A Closer Look 1 | Art people/places vocabulary; /ʃ/ and /ʒ/ | Terms, TTS, 3 practice questions, teacher task | Authentic pronunciation recordings, minimal-pair listening, human pronunciation feedback |
| A Closer Look 2 | like/different from/(not) as…as | Patterns, examples, 3 MCQs, writing field | Controlled gap-fill, transformation exercises, misconception checks and transfer |
| Communication | Expressing preferences | Dialogue prompts, example language, 3 MCQs, dialogue writing field | Partner turns/audio capture and rubric-based evaluation |
| Skills 1 | Reading about traditional art; speaking about school performances | Original reading prompt, checks, speech task and written reflection | Longer age-appropriate reading with multi-level questions, timed spoken performance feedback |
| Skills 2 | Listening about street painting; informal letter of invitation | Original short passage and writing instructions, 3 questions, writing draft save | Real audio/comprehension discrimination, teacher-scored writing based on explicit analytic rubric |
| Looking Back & Project | Review knowledge and create music-show invitation | Original project brief, original quiz and editable response | User-submitted poster file, project rubric, comparison to baseline |

## Audit verdict (preliminary, not a formal accreditation)
1. **Structure**: Seven of seven lesson sections represented.
2. **Depth**: Insufficient to claim the full textbook's exercises or a full unit has been taught to mastery. Currently three short automatically graded MCQs per lesson.
3. **Skills**: Reading/writing prompts are present; spoken responses and listening are not independently and formally assessed.
4. **Measurement**: Progress records and attempt histories are learning analytics only. Since answer keys are sent to browsers and grading is client-side, scores are **not tamper-resistant** and cannot support high-stakes comparisons.
5. **Privacy**: Implemented private per-UID Firestore record structure and deny-by-default rules in source. Rules must be **published and tested** before cloud save is operational; code alone does not deploy rules.
6. **UX**: Bilingual EN/VI toggle, lesson workflow, feedback, notes, attempts, saved written responses and 10 Study Studio tools. Accessibility and device usability still require empirical testing with the learner.

## Formative research and acceptance plan
- Have the learner complete a baseline task **before feedback**; repeat with a parallel-form assessment after 6 weeks.
- Collect at least: comprehension accuracy, speed to complete tasks, open-ended writing samples, teacher-scored pronunciation/speaking, and return rate.
- Avoid treating 3/3 as objective competence; describe it as *perfect score on one short practice quiz*.
- Run usability test on the learner's actual device; observe errors, comprehension of bilingual switch and ability to resume after sign-in.
- A speaking rubric may assess comprehensibility, fluency, vocabulary, and interaction on a 0–3 scale; writing may assess task completion, organization, grammar and vocabulary on a 0–3 scale; a teacher must score them.
- Recheck pronunciation and performance examples against official teacher materials, and use publisher content only with appropriate licensing.

## Future priorities
1. Enable email/password Firebase Auth, add production domain, publish/test rules.
2. Record baseline and final assessments with *different* but comparable questions and teacher-reviewed speaking/writing artifacts.
3. Expand each unit to include more varied question types, authentic audio and explicit learning outcomes.
4. Add parent-managed profile / consent workflow and robust deletion/export controls before onboarding multiple children.
5. Add server-side grading and trusted audit data if ever used for competitive rankings or formal assessments.
