// Make the AI Judge Laugh: Developer Excuses — writes the entry line to /output/entry.txt.
import * as fs from "node:fs";

const line =
  "I didn't break production — I ran an unannounced resilience drill. It failed, which only proves how badly it needed one.";

// Guard: one line, 1-200 characters, not only whitespace.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (line.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
