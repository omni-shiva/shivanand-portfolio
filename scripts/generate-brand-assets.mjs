import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { copyFile, readFile } from "node:fs/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const nextRequire = createRequire(require.resolve("next/package.json"));
const sharp = nextRequire("sharp");
const source = join(root, "public/brand/sk-mark.svg");
const svg = await readFile(source);
for (const size of [32, 48, 180, 512]) {
  const output = join(root, `public/brand/sk-mark-${size}.png`);
  await sharp(svg, { density: 600 }).resize(size, size).png().toFile(output);
  // Existing project-page image paths continue to resolve to the current mark.
  await copyFile(output, join(root, `public/shivanand-logo-${size}.png`));
  if (size === 32 || size === 180) await copyFile(output, join(root, `public/sk-logo-${size}.png`));
}
await copyFile(source, join(root, "public/services/favicon.svg"));
await copyFile(source, join(root, "public/favicon.svg"));
await copyFile(source, join(root, "public/sk-logo.svg"));
