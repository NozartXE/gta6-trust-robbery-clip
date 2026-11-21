// gta6-clipper-01 entry program — "TRUST — The Robbery" clip.
//
// The whole job of this program is to hand the grader the address of the
// submitted YouTube video: it copies this repository's VIDEO.json into the
// output directory named by MAKEFUN_OUTPUT_DIR.
//
// Constraints honoured by construction:
//   * Node.js standard library only — no dependencies, no network.
//   * Reads exactly one file (VIDEO.json inside MAKEFUN_BOT_DIR) and writes
//     exactly one file (VIDEO.json inside MAKEFUN_OUTPUT_DIR).
//   * No clock, no randomness, no environment-dependent bytes: running it
//     twice produces byte-identical output.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function main(): void {
  const sourceDir = process.env.MAKEFUN_BOT_DIR ?? ".";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(sourceDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`main.ts: could not deliver VIDEO.json — ${message}`);
  process.exit(1);
}
