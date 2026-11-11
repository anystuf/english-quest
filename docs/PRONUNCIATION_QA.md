# English Quest Pronunciation Lab — Quality, privacy, and academic validity

## Implemented
- Navigation via Pronunciation tab, the vocabulary card in each Unit 4 lesson, or Learning Studio.
- Unit 4 vocabulary grouped by seven sections; duplicate terms consolidated.
- Browser US English text-to-speech at normal and slow rates; optional IPA and bilingual pronunciation tips.
- Optional microphone with parental/guardian permission via browser Web Speech API (if supported).
- 0–100 **word recognition match** is based on edit distance between reference text and browser transcript. This is **not** an acoustic pronunciation/phoneme assessment.
- Encouraging feedback, read-aloud, and a /ʃ/ versus /ʒ/ listening challenge.
- Cloud records under users/{uid}/pronunciation/{wordId}: best score, latest score, attempt count, server timestamp. No audio or raw transcription is stored in Firestore.
- Guest mode does not persist scores; the microphone is never mandatory.

## Academic caveat
Browser speech recognition can mishear a properly pronounced word. A 0 does not establish poor pronunciation, and a 100 does not establish perfect phonetics. Lexical text similarity is not a validated phoneme, stress, or prosody grade.

A dedicated service is required for phoneme-level scoring. Microsoft Azure AI Speech Pronunciation Assessment supports word and phoneme granularity and en-US IPA results when configured with a subscription:
https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-pronunciation-assessment
Using it would require appropriate recording permission, a protected backend token flow, child-data compliance and budget controls. Do not place an Azure key in VITE_ variables.

Web Speech API microphone input can be processed by the browser vendor remotely. Consent is explicit; no microphone audio is saved by English Quest.

## Firestore rules migration
The previous file in the repository had a malformed dailySessions rule. This release replaces the broken version with well-formed Firestore rules for attempts, progress, notes, work, dailySessions and pronunciation. **Publish the updated firestore.rules in Firebase Console** separately from Vercel. Test permissions with Firestore Rules Playground.

## QA
- Run npm run test:pronunciation: text comparison, empty responses, phrase matching, stable word IDs.
- npm run build also runs 7 calendar streak tests and 8 coach tests, TypeScript and Vite.
- On the real learner device: test supported microphone recognition, denied microphone, replay/slow voice, bilingual UI and all 7 lesson groups.
- After verifying a student account, practice a term and inspect users/{uid}/pronunciation/art-gallery in Firestore.
- Refresh and sign in on another device: compare scores and counts; check another account is denied access.
