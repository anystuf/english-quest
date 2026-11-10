# English Quest

A textbook-first, gamified English learning MVP for Grade 7 (Global Success). Initial learning slice: Unit 4 — Getting Started, *A Talk at the School Gate*.

## Stack
React + Vite + TypeScript + Tailwind CSS; Firebase Auth/Firestore (optional until configured); deployable to Vercel.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
On Windows PowerShell use `Copy-Item .env.example .env.local`. Fill in your Firebase web app config values in `.env.local`. The app runs with local progress if Firebase is not configured.

## Configure Firebase
1. Create/verify a Firebase Web App under project `english-quest-6a724`.
2. Enable **Authentication → Sign-in method → Anonymous** for the current prototype, if desired.
3. Create a Cloud Firestore database, then publish the supplied `firestore.rules` using the Firebase console or Firebase CLI. **Rules are not deployed simply by pushing to GitHub.**
4. Use a test account and verify isolation of per-user progress; current client-reported scores are not trusted for grading, rankings, or XP.
5. Configure the same `VITE_FIREBASE_*` values in Vercel project environment variables and deploy.

## Safety and scope
- This is an early MVP with **sample** lesson questions, not a reproduction of the textbook's copyrighted exercises.
- The Teacher Studio is an **unprotected demo**; do not store personal student data or teacher-only answer keys there until authorization is built.
- Anonymous user accounts do not survive loss of their authentication state; proper accounts and recovery belong in the next milestone.
- Firebase Web SDK config isn't an admin credential. Never commit service account keys or private credentials.
- Firestore rules restrict ownership, but **cannot validate whether a student's quiz answer is correct**. For trusted scores, calculate results on a trusted backend before awarding XP.
- YouTube embed availability and content must be checked by the publisher.

## Next milestone
Implement teacher/student authorization, server-validated assessment, accessible flashcards, spaced review, and usability testing with the target learner. Keep textbook content rights and children's privacy in scope.
