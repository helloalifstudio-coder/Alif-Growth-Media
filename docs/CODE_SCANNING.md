# CodeQL security scanning — proposed change

The website's source is in `alif-growth-media/src` (React, TanStack Start and TypeScript). The root also contains supporting configuration and documentation. The proposed `.github/workflows/codeql.yml` scans JavaScript/TypeScript source in the **whole repository**; it is not restricted to the website directory, so new JavaScript/TypeScript code elsewhere is also analyzed.

## What the workflow does

- Runs on pull requests targeting `main`, pushes to `main`, a weekly Tuesday schedule at **02:23 UTC** (07:53 Asia/Kolkata), and manual dispatch. It does **not** deploy.
- Uses the maintained, MIT-licensed `github/codeql-action` v4.39.2, pinned to its verified release commit, and the already-verified `actions/checkout` v6 commit. The CodeQL engine itself has separate [terms](https://github.com/github/codeql-cli-binaries/blob/main/LICENSE.md); the repository is public and eligible for GitHub code scanning.
- Runs the `javascript-typescript` extractor with `build-mode: none`; no npm installation, application build, production credentials or secrets are required.
- Grants `contents: read` and the `security-events: write` permission needed to publish code scanning results. It does not grant write access to repository contents or deployments.

## Acceptance and activation

1. Review the draft PR and the pinned action SHAs. Do **not** merge automatically.
2. Confirm GitHub Actions and code scanning are enabled. If GitHub's CodeQL **default setup** is already enabled, choose one configuration before merging to avoid duplicate analyses.
3. Verify the PR workflow starts and completes successfully; check the `Analyze JavaScript and TypeScript` job, any permission/upload errors, and the resulting Security → Code scanning alerts. If the fork or repository policy blocks SARIF upload, an administrator must review the security settings; do not widen permissions or bypass policy to hide the failure.
4. After an approved merge, verify a push or scheduled run on `main` and triage alerts by severity, exploitability and affected code. Treat an empty alert list as **not proof** of security.

CodeQL complements rather than replaces dependency review, lint, typechecking, unit/browser/accessibility tests and a human review of committed documents. In particular, the public `Agm/` directory contains a registration-certificate PDF and other assets; the repository owner should privately confirm that these were intended for public distribution. Do not paste their contents into public PRs. Removing a file in a later commit does not erase its Git history.

## Verification status

The workflow YAML and action release references can be checked before merge. **Actual CodeQL execution, SARIF upload and security-alert visibility must be verified from GitHub Actions**; they cannot be claimed as passed solely from static configuration review. The separately proposed quality-check workflow (draft PR #2) still has an existing ESLint failure; CodeQL is independent of that gate.

References: [CodeQL action README](https://github.com/github/codeql-action), [advanced code scanning setup](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning), [CodeQL v4.39.2 release](https://github.com/github/codeql-action/releases/tag/v4.39.2).
