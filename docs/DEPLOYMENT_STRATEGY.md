# Deployment policy — Vercel review, controlled Netlify releases

Owner: Alif Growth Media  
Source repository: `helloalifstudio-coder/Alif-Growth-Media`  
App root: `alif-growth-media/` (TanStack Start + Nitro, Node.js 22)

## Deployment roles

| Environment | Source | When | Purpose |
| --- | --- | --- | --- |
| **Vercel preview** | `design/immersive-agency-experience` | Every push | Frequent UI/UX reviews and QA |
| **Vercel production** | `main` | Vercel Git integration | Main site on Vercel |
| **Netlify production** | `main` | Only an explicitly marked release merge commit | Stable, infrequent agency-site mirror |
| **Netlify deploy previews / branch deploys** | PRs or non-main branches | Disabled by `netlify.toml` ignore commands | No duplicate preview builds |

Neither an unreviewed design edit nor an ordinary `main` push should create a Netlify production build.

### How the Netlify production gate works

Root `netlify.toml` and `alif-growth-media/netlify.toml` are intentionally aligned. Both set:

```toml
[context.production]
  ignore = "node ./scripts/netlify-release-gate.cjs"

[context.deploy-preview]
  ignore = "exit 0"

[context.branch-deploy]
  ignore = "exit 0"
```

Netlify runs `ignore` from the configured base directory (`alif-growth-media`).
The gate reads the build's `COMMIT_REF` from Git and only allows a build if
the latest commit message includes the **exact** token `[netlify-release]`.
The gate rejects malformed/missing commit refs and uninspectable commits.
**Netlify's convention:** exit 0 means *skip*, exit 1 means *continue*.

After CI, the Vercel preview and the intended changes have been reviewed,
merge to `main` with a merge commit title resembling:

```
release(netlify): publish reviewed agency site [netlify-release]
```

That one commit lets Netlify build once. Future everyday work on the design
branch or ordinary main commits will **not** build on Netlify. For another
Netlify release, intentionally create another reviewed release commit bearing
the exact token. A `[netlify-release]` marker must not be used casually.

**Exceptions:** Build hooks and manual Netlify deployments can bypass the
ignore setting. The project owner should limit access to build hooks and
Git repository settings. This is a build policy, **not** an authorization or
secret-management boundary.

### Framework compatibility

The app uses `@lovable.dev/vite-tanstack-config` to register TanStack Start
and Nitro together. The app's `vite.config.ts` chooses the `netlify` Nitro
preset when `NETLIFY=true` and the `vercel` preset in Vercel. Keep the
preset-specific output intact. The pinned Nitro version used by this
repository was inspected in GitHub Actions: it generates
`.netlify/functions-internal/server/main.mjs` and
`.netlify/functions-internal/nitro.json`, with static files in `dist`.
Some newer Nitro documentation refers to Frameworks API v1 output;
our CI verifies the paths actually emitted by the pinned build.
See the official [Nitro Netlify integration](https://nitro.build/deploy/providers/netlify).
Do not bolt on a second `tanstackStart()` or `nitro()` plugin; Lovable already
registers both. The official Netlify TanStack plugin is a *different*
integration path and must be evaluated for compatibility before changing to it.

### Release checklist

1. Inspect the PR diff, ensure the security-patched `@tanstack/react-start`
   and `@tanstack/start-server-core` remain resolved in the npm lockfile.
2. Require passing `npm ci`, `node --test scripts/netlify-release-gate.test.cjs`,
   `npm run lint`, `npm run typecheck`, `npm run build` and CodeQL.
3. On the latest Vercel design preview, check `/`, `/services`, `/work`,
   `/about`, `/contact`, `/blog`, `/privacy`, `/terms`,
   `/sitemap.xml`, `/robots.txt`, plus at least one dynamic blog/work page.
   Test touch, keyboard, reduced motion and forms with safe test data.
4. Merge only approved, reviewable work into `main` with the release marker
   **only when a Netlify release is intended**.
5. In [Netlify deploys](https://app.netlify.com/projects/alif-growth/deploys),
   confirm a *production* deploy built successfully from that merge SHA.
   Inspect the Netlify build log for the Nitro Netlify preset, emitted
   functions, publish folder and any security/runtime errors. **This cannot
   be claimed verified from GitHub CI alone.**
6. Open [the Netlify site](https://alif-growth.netlify.app/) and test the same
   public routes, dynamic server routes, and contact flow. Check for status 200,
   not only a 200 response for the shell that fails at hydration.
7. After publishing, verify an ordinary non-release commit is skipped by
   Netlify while Vercel still creates its normal preview. Document the deploy
   ID/URL and release commit on the PR.

If the Netlify build fails, **do not suppress failures or bypass the security
checks**. Keep the last successful Netlify production deployment, inspect the
logs, fix the root cause in the design branch, and publish another explicitly
authorized release when ready.

### Testing the policy

The release policy has a dependency-free Node.js test suite:
`node --test alif-growth-media/scripts/netlify-release-gate.test.cjs`
(run from the repository root) or `node --test scripts/netlify-release-gate.test.cjs`
from `alif-growth-media/`. It is executed on each PR and `main` push by
GitHub Actions; it checks opt-in, non-release, non-production, invalid-ref
and Git failure behaviors.

### Avoiding accidental Netlify spending

Keep Netlify's branch/deploy preview settings limited to `main`, and avoid
Netlify build hooks for normal pushes. If **Stopped builds** is enabled at
site level, neither the release gate nor a Git push will generate a production
release until builds are re-enabled manually. This Git-controlled gate does
not itself change those dashboard-level settings.

This document does not claim that the Netlify site and Vercel deployment have
identical underlying server behavior; a Netlify production smoke test is
required at each release.
