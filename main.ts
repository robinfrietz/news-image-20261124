import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for news-image-20261124: "Sum up 24 November's world news in one image".
// The program writes one image to /output/entry.png. It simply copies the
// bundled newspaper front page (news.png, 1024x1024) to the output path,
// so both runs produce byte-identical output and no network is needed.

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "news.png");
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`bundled image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Verify the copy is byte-identical to the bundled image so both runs
// of the program produce exactly the same output.
const sourceBytes = readFileSync(source);
const targetBytes = readFileSync(target);
if (!sourceBytes.equals(targetBytes)) {
  throw new Error(`output mismatch: ${target} differs from ${source}`);
}
console.log(`wrote ${target} (${targetBytes.length} bytes)`);
