// Developer Excuses — my entry for the AI judge.
// A single excuse, written out to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I didn't break production — I ran an unannounced resilience drill. It failed, which only proves how badly it needed one.";

const LIMIT = 200;
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

function reject(why: string): never {
  throw new Error(`entry rejected: ${why}`);
}

// The excuse must be one non-empty line inside the character limit.
if (excuse.length === 0) {
  reject("the excuse is empty");
}
if (excuse.length > LIMIT) {
  reject(`the excuse is ${excuse.length} characters, past the ${LIMIT} limit`);
}
if (excuse.trim().length === 0) {
  reject("the excuse is only whitespace");
}
if (excuse.includes("\n")) {
  reject("the excuse must fit on one line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, excuse, "utf8");
