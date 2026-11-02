# Engineering workflow — Alif Growth Media

This guide applies to **`helloalifstudio-coder/Alif-Growth-Media`**. The public website is a TanStack Start/React/TypeScript application in `alif-growth-media/`. It is not the separate `MuhammadMinhaj229/Alif-Growth-Media` repository described in the earlier design roadmap.

## Working agreement

1. Check current `main`, open pull requests, and any active deployment before starting work.
2. Define the business problem and observable acceptance criteria.
3. Research existing project patterns and, when useful, maintained upstream libraries. Check licence, compatibility and security before adopting a new dependency.
4. Create a descriptive branch from current `main`; do not rewrite published Git history (the project is also connected to Lovable).
5. Keep each change scoped and reviewable. Open a **draft pull request** with a change summary, test evidence, and remaining risks.
6. Require human review and a successful preview before merging. No AI-assisted workflow may independently merge to `main`, deploy to production, or access production credentials.
7. Re-check production routes after an authorized deployment.

## Validate locally

Use Node.js 22.x and the checked-in lockfile:

```sh
cd alif-growth-media
npm ci
npm run lint
npm run typecheck
npm run build
```

The `.github/workflows/ci.yml` job executes these same commands for pull requests and pushes to `main`. It has read-only repository permissions and does not deploy or consume production secrets. A failing check is a regression signal to investigate, not a reason to disable the gate.

## What is and is not automated

**Established with the initial CI change:** dependency installation, ESLint, TypeScript typechecking, Vite production build, pull-request checks.

**Not yet established:** unit/component test suite, Playwright browser smoke tests, automated accessibility, visual regression, cross-browser validation, Lighthouse budgets, CodeQL and Dependabot. Do not describe these as running until they have actually been configured and verified.

## Prioritized roadmap

- **P0 — baseline and truthfulness:** make the quality workflow pass on the existing project, review dependency findings, audit claims on the site versus delivered functionality, and review public-repository assets for confidential material.
- **P1 — complete the experience:** consistent design across home, services, work, about, contact, legal, 404 and mobile layouts; validated links and form journeys.
- **P2 — independent quality checks:** add Vitest and Playwright, then axe accessibility scanning, SEO/performance budgets and dependency/security automation.
- **P3 — agent-assisted contributions:** separate research, architecture, implementation, QA and review. Use isolated workspaces, a documented source/licence assessment and draft pull requests. Keep the agent runner **outside** the public site runtime.

For every completed change, record: commit/PR link, user-facing benefit, changed files, actual commands and results, known gaps, and next action. **Do not invent test passes, client outcomes, or shipped features.**

## Public repository hygiene

Check `Agm/` and all other committed documents and media for client data, addresses, personal identifiers, account details and other sensitive material before publishing. If an exposure is confirmed, seek the owner's approval for the appropriate remediation; merely deleting a tracked file does **not** erase it from Git history.

Refer to [SECURITY.md](../SECURITY.md) for reporting security concerns.
