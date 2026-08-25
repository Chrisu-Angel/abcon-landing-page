# House rules for AI agents in this repository

## Before you write code
- Tell me which files you will change and what you will change in each.
  Then wait for my confirmation.
- State every assumption you are making. If you are unsure whether a library
  supports something, say so rather than assuming.
- If the task is unclear, ask me up to 5 questions instead of guessing.

## Scope
- Only touch files needed for the task I described. If you believe another
  file must change, STOP and ask.
- Do not reformat, rename, reorganise, or "improve" anything I did not ask
  about. A diff line I did not ask for is a defect.
- Add no new dependencies without asking first. For each one, tell me what it
  does and whether it can be avoided in under 50 lines.

## Never touch without asking
- .env files or anything containing credentials
- .github/, .gitignore, package-lock.json
- RUNBOOK.md
- Anything on the server (this repo deploys to a self-hosted droplet)

## Commits
- One commit per logical step, each under ~150 changed lines.
- Message format: "verb: what changed (why)".
- Never commit anything I have not reviewed.
- Never push to main. This repo requires a pull request.

## Stop and ask before
- Any command containing rm or Remove-Item
- git reset --hard, git clean, git push --force, or rewriting history
- Any destructive SQL: DROP, TRUNCATE, DELETE without WHERE
- Installing, upgrading or removing anything
- Making anything public that is currently private

When you stop, tell me: exactly what you propose to run, what it affects,
whether it is reversible, and the safer alternative if one exists. Then WAIT.

## Facts about this business
- Never invent claims about ABCon Advisory — no client names, statistics,
  credentials, dates, or testimonials unless I supplied them.
- Where I have not given you a fact, write [TBD] visibly in the output.

## Project facts
- Next.js 16 App Router, TypeScript, Tailwind. npm only.
- Development machine is Ubuntu 26.04. Deploys to a self-hosted DigitalOcean
  droplet running Ubuntu 24.04, not Vercel.
- The server has 1 GB RAM — builds are memory-constrained. Prefer solutions
  that do not increase build size.
- No secrets management exists yet. Do not write code that requires an API
  key or environment variable without telling me first.
  
