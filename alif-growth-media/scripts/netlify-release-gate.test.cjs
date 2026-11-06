"use strict";

const assert = require("node:assert/strict");
const { test } = require("node:test");
const { isApprovedRelease, shouldBuild } = require("./netlify-release-gate.cjs");

const commitRef = "a".repeat(40);
const readApproved = () => "release: reviewed update [netlify-release]\n";

test("only an exact release marker authorizes a Netlify production build", () => {
  assert.equal(isApprovedRelease("release: reviewed update [netlify-release]"), true);
  assert.equal(isApprovedRelease("release: reviewed update [netlify-release] extra"), true);
  assert.equal(isApprovedRelease("fix: new hero without release marker"), false);
  assert.equal(isApprovedRelease("fix: [netlify-release-preview]"), false);
  assert.equal(isApprovedRelease(undefined), false);
});

test("production release commit permits a single opted-in build", () => {
  assert.equal(shouldBuild({ context: "production", commitRef, readCommitMessage: readApproved }), true);
});

test("regular production commits are skipped", () => {
  assert.equal(
    shouldBuild({ context: "production", commitRef, readCommitMessage: () => "fix: button padding" }),
    false,
  );
});

test("branch and pull request builds are skipped even with the marker", () => {
  for (const context of ["deploy-preview", "branch-deploy", "dev", undefined]) {
    assert.equal(shouldBuild({ context, commitRef, readCommitMessage: readApproved }), false);
  }
});

test("missing or malformed commit ids cannot start a build", () => {
  for (const ref of [undefined, "", "not-a-commit", "f".repeat(39)]) {
    assert.equal(shouldBuild({ context: "production", commitRef: ref, readCommitMessage: readApproved }), false);
  }
});

test("git lookup failure fails closed", () => {
  assert.equal(
    shouldBuild({
      context: "production",
      commitRef,
      readCommitMessage: () => { throw new Error("commit unavailable"); },
    }),
    false,
  );
});
