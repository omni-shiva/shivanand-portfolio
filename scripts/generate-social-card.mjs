import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { copyFile } from "node:fs/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
// Keep the exact approved artwork portable: builds need no system fonts,
// developer checkout path, external image service or unpublished dependency.
const source = join(root, "public/services/circular-explorer.png");
const destination = join(root, "public/services/share-card.png");
await copyFile(source, destination);
await sharp(source).jpeg({ quality: 95, chromaSubsampling: "4:4:4" }).toFile(join(root, "public/services/circular-explorer.jpg"));
await copyFile(join(root, "public/services/circular-explorer.jpg"), join(root, "public/services/share-card.jpg"));
// Historical URLs remain valid. The canonical page uses the new descriptive
// image path so social crawlers can refresh without a versioned website URL.
for (const alias of ["og-services-2026-11-v2.png", "og-services-2026-11.png", "og-data-engineer-2026-11.png", "og-data-applied-ai-2026-11.png", "og-data-applied-ai-2026-3-projects.png", "og-data-applied-ai-2026.png", "og-data-applied-ai.png", "og-projects.png", "og-v2.png", "og.png"]) {
  await copyFile(destination, join(root, "public", alias));
}
