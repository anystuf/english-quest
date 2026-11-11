# English Quest — Grade 7 Bilingual Study Platform

React + Vite + TypeScript + Tailwind + Firebase. Unit 4 (*Music and Arts*) contains seven **original, textbook-aligned companion** lessons and a Learning Studio. It does not reproduce the textbook or promise ACTFL certification.

## Development

```sh
npm install
cp .env.example .env.local
npm run dev
npm run build
```

Use `Copy-Item .env.example .env.local` in Windows PowerShell. Fill `VITE_FIREBASE_*` with the Firebase **web app config**; never use Firebase Admin/service-account secrets in Vite.

## Activate **real** student accounts and cloud storage

1. Visit [Firebase Console — English Quest](https://console.firebase.google.com/project/english-quest-6a724/overview).
2. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable**. Google, anonymous and other providers are not necessary for v0.3.
3. **Authentication → Settings → Authorized domains**: include the live site `english-quest-roan-nu.vercel.app` and any additional production/preview domains you intend to test.
4. **Build → Firestore Database → Create database** if not already created; choose a suitable region and **production mode**. Do not leave test-mode rules.
5. **Firestore Database → Rules**: paste the checked-in [firestore.rules](firestore.rules), publish, and test from the Rules Playground. Rules are **not automatically deployed** by Vercel/GitHub.
6. Verify site env vars under Vercel → english-quest → Settings → Environment Variables. Redeploy after changing build-time variables.
7. Have the **parent/guardian** register with a suitable email and learner nickname (no full name or school required), click the email verification link, and on Account choose **Check verification**.
8. Run one quiz and save one short written response. On refresh and another device (same login), verify private attempts, scores, notebook notes and free-text work survive. Sign out, create another test account and verify it cannot see the prior account's data.

**IMPORTANT**: The website compiles and serves before Firebase services are enabled, but **email registration, verification, cloud writes and cross-device sync only work once steps 2–5 are complete**. No Firebase administrator credentials or verified cloud action is implied. On a shared device, sign out; email/password sessions are deliberately persistent on the browser.

## Data model

Cloud Firestore per registered UID:
- `users/{uid}/progress/{lessonId}`: best and latest practice score, number of attempts
- `users/{uid}/attempts/{randomId}`: each answer choice, score and server timestamp
- `users/{uid}/work/{lessonId}`: written free-text task response
- `users/{uid}/notes/unit4`: personal notebook

Security rules require matching UID **and a verified email** for reads/writes, reject unknown fields and disallow attempt edits/deletion. They do not certify answer accuracy: client-side grading remains self-practice only. Each user's records are isolated; there is no public leaderboard or teacher access to student data.

No identifying child age, school or full legal name is requested. Parent/guardian approval should be obtained before registration. The registration checkbox is not a legally sufficient age-verification system; obtain appropriate real-world consent.

The previous anonymous session and browser-local `eq-v2-results`/notes are **not automatically imported** to any signed-in account, intentionally preventing cross-account disclosure on shared devices. To restore data from the old local prototype, a separate supervised import feature would be required.

## Academic alignment

See [Academic Audit and Coverage Map](docs/ACADEMIC_AUDIT.md). The 7 lessons and 21 MCQs are a **structured starting point, not full scholarly coverage or formal proficiency proof**. Authentic audio, varied tasks and teacher scoring for speaking/writing remain needed.

## Notes on NotebookLM

English Quest's NotebookLM button is only a user-saved URL and opens Google's separate product. This is **not** an authenticated API integration, and doesn't transfer student learning data.
