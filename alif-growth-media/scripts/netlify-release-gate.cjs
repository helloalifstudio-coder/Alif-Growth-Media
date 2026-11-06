"use strict";

const { execFileSync } = require("node:child_process");

const RELEASE_MARKER = "[netlify-release]";

/**
 * Only an explicitly labelled release commit may deploy the default branch
 * on Netlify. Day-to-day previews belong to Vercel.
 */
function isApprovedRelease(message) {
  return typeof message === "string" && /(?:^|\s)\[netlify-release\](?=\s|$)/.test(message);
}

function shouldBuild({ context, commitRef, readCommitMessage }) {
  // Fail closed: an unavailable Git commit or an unexpected context should
  // never cause a production build.
  if (context !== "production" || !/^[0-9a-f]{40}$/i.test(commitRef || "")) {
    return false;
  }

  try {
    return isApprovedRelease(readCommitMessage(commitRef));
  } catch {
    return false;
  }
}

if (require.main === module) {
  const allowed = shouldBuild({
    context: process.env.CONTEXT,
    commitRef: process.env.COMMIT_REF,
    readCommitMessage(sha) {
      return execFileSync("git", ["show", "-s", "--format=%B", sha], {
        encoding: "utf8",
        timeout: 5000,
      });
    },
  });

  console.log(
    allowed
      ? `Netlify production build approved by ${RELEASE_MARKER} commit marker.`
      : "Skipping Netlify build. Use Vercel for everyday previews; release is not approved.",
  );

  // Netlify's ignore convention is reversed from ordinary shell success:
  // 0 skips the build; 1 continues the build.
  process.exitCode = allowed ? 1 : 0;
}

module.exports = { isApprovedRelease, shouldBuild };
