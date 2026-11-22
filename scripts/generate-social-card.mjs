import React from "react";
import { ImageResponse } from "next/og.js";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, writeFile, copyFile } from "node:fs/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const nextRoot = dirname(require.resolve("next/package.json"));
const [sans, serif, mark, artwork] = await Promise.all([
  readFile(join(nextRoot, "dist/compiled/@vercel/og/Geist-Regular.ttf")),
  readFile(join(root, "public/fonts/dm-serif-display/DMSerifDisplay-Regular.ttf")),
  readFile(join(root, "public/brand/sk-mark.svg")),
  readFile(join(root, "public/services/approved-d0fc830d5a50.jpg")),
]);
const h = React.createElement;
const colors = { forest: "#07110e", ivory: "#f8f4e9", brass: "#d7be80" };

// Retain the approved brass-and-glass artwork from the services website.
// Compose the headline separately so it stays crisp at social-preview sizes.
const card = h("div", { style: { display: "flex", flexDirection: "column", width: "100%", height: "100%", backgroundColor: colors.forest, color: colors.ivory, fontFamily: "Geist" } },
  h("div", { style: { display: "flex", height: 90, flexShrink: 0, padding: "0 48px", justifyContent: "space-between", alignItems: "center", backgroundColor: colors.ivory, color: colors.forest } },
    h("div", { style: { display: "flex", alignItems: "center", gap: 16 } },
      h("img", { src: `data:image/svg+xml;base64,${mark.toString("base64")}`, width: 54, height: 54 }),
      h("span", { style: { fontFamily: "DM Serif Display", fontSize: 33, letterSpacing: -0.5 } }, "Shivanand Kumar"),
    ),
    h("span", { style: { fontSize: 23 } }, "shivanandkumar.in"),
  ),
  h("div", { style: { display: "flex", flexDirection: "column", position: "relative", height: 540, padding: "70px 56px 38px", overflow: "hidden" } },
    h("img", { src: `data:image/jpeg;base64,${artwork.toString("base64")}`, width: 1200, height: 600, style: { position: "absolute", left: 0, top: -30, objectFit: "cover" } }),
    h("div", { style: { position: "absolute", left: 0, top: 0, width: 1200, height: 540, backgroundImage: "linear-gradient(90deg, rgba(5,13,11,0.98) 0%, rgba(5,13,11,0.94) 34%, rgba(5,13,11,0.76) 53%, rgba(5,13,11,0.06) 85%)" } }),
    h("div", { style: { display: "flex", position: "relative", color: colors.brass, fontSize: 21, marginBottom: 22 } }, "Data engineering & applied AI"),
    h("div", { style: { display: "flex", position: "relative", flexDirection: "column", fontFamily: "DM Serif Display", fontSize: 61, lineHeight: 1.09, letterSpacing: -0.8 } },
      ...["Build reliable data", "& AI infrastructure.", "Optimize your operations."].map(line => h("div", { key: line, style: { display: "flex" } }, line)),
    ),
    h("div", { style: { display: "flex", position: "relative", marginTop: 27, maxWidth: 650, fontSize: 23, lineHeight: 1.45, color: "#d5d8ca" } }, "Connect systems. Automate work. Improve performance."),
    h("div", { style: { display: "flex", position: "relative", marginTop: "auto", fontSize: 19, color: "#b7c0b4" } }, "Manufacturing · Supply chain · Business operations"),
  ),
);

const response = new ImageResponse(card, {
  width: 1200, height: 630,
  fonts: [
    { name: "Geist", data: sans, weight: 400, style: "normal" },
    { name: "DM Serif Display", data: serif, weight: 400, style: "normal" },
  ],
});
const destination = join(root, "public/og-services-2026-11-v2.png");
await writeFile(destination, Buffer.from(await response.arrayBuffer()));
// Preserve previously shared image URLs while metadata uses a fresh URL.
for (const alias of ["og-services-2026-11.png", "og-data-engineer-2026-11.png", "og-data-applied-ai-2026-11.png", "og-data-applied-ai-2026-3-projects.png", "og-data-applied-ai-2026.png", "og-data-applied-ai.png", "og-projects.png", "og-v2.png", "og.png"]) {
  await copyFile(destination, join(root, "public", alias));
}
