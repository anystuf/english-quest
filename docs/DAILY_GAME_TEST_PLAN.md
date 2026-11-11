# Daily Arcade: game loop, streak rules, and verification

## Features
- **Daily Game** accessible from the global navigation, header flame counter, and Home / Quest World.
- Three sequential rounds: 4 English–Vietnamese vocabulary matches; 3 multiple-choice questions with immediate explanations; 1 word-order sentence builder.
- Vocabulary, questions and sentences vary by day, with a stable daily selection (no external paid API).
- To qualify for a check-in: complete all 4 pairs, answer at least 2 of 3 quiz questions correctly, and assemble the sentence correctly. The learner can retry without a timer, costs, or losing hearts.
- 7-day history calendar, current streak, longest streak, 10 displayed XP for distinct completed days, and replay without repeated rewards.
- Both language modes are supported; game vocabulary and prompts include Vietnamese explanations.
- Streak day boundaries are **Asia/Ho_Chi_Minh (UTC+7)**. The current streak may include yesterday until the learner has completed today's game.
- Public leaderboards and punitive loss mechanics are deliberately excluded for a young learner. XP is self-practice motivation, **not** an ACTFL rating or formally verified examination score.

## Firebase activation required
The application writes **one immutable session document** per local day to:
`users/{uid}/dailySessions/{YYYY-MM-DD}`

Expected data:
```js
{
  mode: 'daily-game',
  matched: 4,
  correct: 2,        // or 3
  total: 3,
  sentenceSolved: true,
  completedAt: serverTimestamp()
}
```
The client reads all session documents for that user and derives display streak days from **server-generated timestamps**, not the client-chosen document IDs. This avoids crediting a forged calendar day in the displayed streak. Write validation is strict but still client-side self-reported evidence, so do not award money, grades, or competitive prizes based on it.

**Firestore rule deployment is separate from Vercel.** The repository contains an updated `firestore.rules`; publishing that file in Firebase Console is mandatory for saving the new `dailySessions` documents. Existing rules deny access to all unknown collections. In Firebase Console: Cloud Firestore → Rules → paste the latest GitHub `firestore.rules` → Publish. Validate with Rules Playground and a verified learner test account.

## Acceptance testing
1. Run `npm run test:streak` with Node 22+; this also runs automatically in `npm run build`.
2. Open website → Daily Game in guest mode → finish all three rounds, verify no cloud reward is falsely claimed.
3. Log in to a **verified** learner test account; finish all three rounds with >=2 quiz answers correct. Check that the server confirms a saved session.
4. In Firebase Console verify `users/{uid}/dailySessions/{today}` exists with server timestamp. After refresh, the flame shows 1, today's dot is marked and the best streak is 1.
5. Replay on the same day: no additional daily credit/document should be created.
6. On a second device sign in to the same account and verify the calendar and streak. On another account, confirm no read access to the first learner's sessions.
7. The next Vietnam calendar day complete a game; streak should increment. Simulate skipped days in pure unit tests only—do not alter production records.
8. Verify that the original Unit 4 lessons, quizzes, saved writing, notes and sign-out still work.

## Known limitations
- Without published rules, cloud saving fails with a permissions message, and the guest practice still works.
- A client can self-report qualifying results, so these are low-stakes game records. A server-validated reward system would require Cloud Functions or other trusted grading.
- The system stores daily session history; no push notifications, social pressure, streak freezes, or monetization are present.
- Gameplay has no original textbook recordings and is a supplemental study tool, not a replacement for the text's full unit coverage.
