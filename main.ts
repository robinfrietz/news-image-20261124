import { copyFileSync, existsSync, mkdirSync } from "node:fs";
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
console.log(`wrote ${target}`);
