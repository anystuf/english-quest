# Immersive Art Festival — v0.6 QA and Safety

English Quest is a curriculum-aligned supplement for Grade 7 Global Success Unit 4 (Music and Arts), not an officially ACTFL-certified course.

## The six chapters
1. Explore three interactive festival locations with US English narration and Vietnamese explanations.
2. Listen to an original Anna/Ben conversation, replay and optionally reveal accessible transcripts.
3. Match English vocabulary to Vietnamese translations using pronunciation and positive/corrective sounds.
4. Role-play at a ticket booth; optionally try US English speech recognition through the browser.
5. Create a grammatical sentence from shuffled words; retry freely.
6. Complete three practice questions with explanations and a 2/3 threshold for a daily check-in.

This is hands-on contextual practice, not a validated proficiency test. The sound effects are original Web Audio oscillators; text-to-speech attempts the browser's en-US voice. Speech recognition depends on browser support and may use the browser vendor's servers. No recorded audio or transcript is saved. Users can mute audio and reduced-motion preferences are respected.

## Nova Coach
Nova is a **scripted offline educational chatbot** offering scoped bilingual responses for Unit 4 pronunciation, vocabulary, comparisons, preferences, invitations, and role-play. It is not a generative AI model, and messages are kept only for the current session.

Google Gemini API terms effective March 23, 2026 explicitly prohibit applications directed at or likely to be accessed by persons under 18, so it must not be embedded in this Grade 7 site. Source: https://ai.google.dev/gemini-api/terms. The project must not expose Gemini API keys in frontend code in any case.

## QA checklist
- npm run test:streak — 7 timezone/date tests.
- npm run test:coach — 8 scoped response tests.
- npm run build — both suites + TypeScript + Vite.
- Manual: verify every hotspot and sound toggle, listen/answer/transcript, matching, role-play and optional microphone, sentence construction, final quiz/retry, confetti.
- Manual with a verified learner: publish latest Firestore rules; confirm one dailySessions document for a learning day, streak after refresh, cross-device continuity, and denial of other accounts.
- Manual accessibility: mobile sizes, keyboard focus, no-sound path, reduced motion, clear feedback.

## Limitations
No guarantee of a specific recorded US voice: browser voices vary. Client-generated awards are low-stakes indicators, not official language scores. Streak cloud saving still requires active Firestore permissions. No payments, public leaderboard, punitive hearts, AI API or external music.
