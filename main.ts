import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Internet in One Word: the entry is a single word and nothing else.
// It is written to /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set).
// The word: doomscrolling — the endless scroll through bad news that
// defines the modern internet: funny by itself, true of the whole thing,
// and not the first obvious word anyone reaches for.
const WORD = "doomscrolling";

// Guard: the entry must be exactly one word — no whitespace, no newline.
if (/\s/.test(WORD)) throw new Error("entry must be a single word");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
