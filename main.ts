// Cutest-picture-01 entry (Node 22, standard library only): the picture is the
// entry.jpg beside this file, and the program copies it to /output/entry.png.
// The picture is a baby red panda in a daisy crown hugging a sleeping chick:
// big glossy eyes, soft round shapes, a tiny flower crown, two friends cuddling.
// It runs as the grader runs an entry, `node /bot/main.ts` on Node 22, with
// MAKEFUN_OUTPUT_DIR standing in for /output outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is byte for byte, so both graded runs write identical bytes.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.jpg', import.meta.url), outPath);
process.stdout.write(`wrote ${outPath} (${statSync(outPath).size} bytes)\n`);
