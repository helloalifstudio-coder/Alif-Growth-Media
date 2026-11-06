# Dependency maintenance and security review

This repository's website is the Node.js 22 / TanStack Start app in `alif-growth-media/`, with its own `package.json` and `package-lock.json`. The root `package.json` only delegates build/dev commands and has no lockfile. The source of truth for package updates is the **nested** lockfile.

## Proposed automation

`.github/dependabot.yml` schedules weekly update **pull requests** for:

- npm packages in `/alif-growth-media`, with at most five open version-update PRs. Minor/patch development-tooling updates are grouped; major and production dependency updates remain separately reviewable.
- GitHub Actions in `/.github/workflows`, with at most three open version-update PRs. This will become useful after the pending CI workflow is merged.

Both run on Mondays at 03:00 Asia/Kolkata. These are *version-update proposals*, not automatic merges or deployments. The configuration does **not** enable Dependabot alerts or security updates by itself; review those repository settings separately.

**Fork caveat:** This GitHub repository is a fork. GitHub does not automatically enable Dependabot version updates on forks when the configuration is committed. After human review and merge to `main`, the repository owner must check **Settings → Advanced Security → Dependabot version updates** and enable it if it is off. Also review the dependency graph, Dependabot alerts and security updates in the repository's security settings. Confirm the first check appears under **Insights → Dependency graph → Dependabot** before claiming monitoring is active.

## Review every dependency PR

1. Confirm the dependency is used and the requested version is compatible with Node.js 22, Vite 8, React 19, TanStack Start and the current deployment adapter. Read the upstream changelog and release notes.
2. Inspect the complete manifest/lockfile diff and any transitive dependency changes. Review license, maintainership, supply-chain signals, and vulnerability advisories. Do not accept a major version just because it is automated.
3. Run from the website directory:

   ```sh
   cd alif-growth-media
   npm ci
   npm audit --omit=dev
   npm run lint
   npx tsc --noEmit
   npm run build
   ```

   `npm audit` is a triage input, not proof of safety; evaluate findings for actual reachability and remediation. The existing lint baseline has known failures, so record the findings rather than hiding them. The draft CI PR tracks this work.
4. Review GitHub Actions changes with particular care: verify publisher, action source, and pinned commit SHA when applicable. Confirm workflow permissions remain minimal.
5. Require human review, relevant passing CI, and a safe preview before any merge. **Never auto-merge, expose secrets, or deploy production from a dependency PR.**

## Scope and follow-ups

This change adds no new runtime dependency, production credentials, workflow, or deployment. It does not perform CodeQL analysis or validate the security posture of committed files. Add CodeQL and browser/accessibility tests in separate scoped PRs, and have the owner privately review the public `Agm/` documents for any material that should not be published. Deleting a tracked file alone does not remove it from Git history.

Official references: [Dependabot configuration](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates), [Dependabot options](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference), [Dependabot security updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates).
