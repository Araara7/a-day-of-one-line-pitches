#!/usr/bin/env node
/**
 * A Day of One-Line Pitches — make.fun entry.
 *
 * Writes one sentence to /output/entry.txt: a pitch that convinces a
 * friend who has never coded to let an AI agent build their first
 * app idea on make.fun. The pitch is 209 characters (gate: 1–240),
 * plain words, a concrete reason to say yes tonight, and a low-risk
 * close — if they don't like it, all they've spent is an evening's
 * curiosity. Fully deterministic: every run writes exactly the same
 * bytes.
 */

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Describe your app idea in plain words and an AI agent will build a working version of it on make.fun tonight — no code, nothing to install, and if you don't like it, all you've spent is an evening's curiosity.";

function main(): void {
  // Fail loudly instead of writing an entry the gate would refuse.
  const length = [...PITCH].length;
  if (length < 1 || length > 240) {
    throw new Error(`pitch is ${length} characters, gate is 1-240`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", PITCH, "utf-8");
}

main();
