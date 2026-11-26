// One-Liner Laughs — "My barber asked how I wanted my hair"
// Writes the joke line to /output/entry.txt.
// The line is 105 characters: a barber-shop setup, a quotable middle,
// and a payoff that lands where the reader did not expect it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My barber asked how I wanted my hair. I said, 'Like it belongs to someone with a plan.' He gave me a hat.";

// The gate allows 1 to 200 characters; fail loudly rather than submit an
// over-long line. Verified: the line is 105 characters. The payoff works
// because the barber answers a request for a look with a prop instead:
// a hat is the one haircut that needs no hair at all.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
