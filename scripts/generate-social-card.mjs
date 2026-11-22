import React from "react";
import { ImageResponse } from "next/og.js";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, writeFile, copyFile } from "node:fs/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const nextRoot = dirname(require.resolve("next/package.json"));
const font = await readFile(join(nextRoot, "dist/compiled/@vercel/og/Geist-Regular.ttf"));
const h = React.createElement;
const promises = [
  ["Build reliable data.", "Connect systems. Trust the numbers."],
  ["Put AI to work.", "Useful answers. Better workflows."],
  ["Improve how work runs.", "Clearer costs, plans and decisions."],
];
const card = h("div", { style: { display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "48px 54px", backgroundColor: "#07110e", color: "#f8f4e9", fontFamily: "Geist" } },
  h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28, paddingBottom: 30, borderBottom: "1px solid #425148" } },
    h("span", {}, "Shivanand Kumar"),
    h("span", { style: { color: "#d2b56f", fontSize: 21 } }, "Data & AI services"),
  ),
  h("div", { style: { display: "flex", gap: 36, marginTop: 72, flexGrow: 1 } },
    ...promises.map(([title, line]) => h("div", { key: title, style: { display: "flex", flexDirection: "column", width: 338 } },
      h("div", { style: { display: "flex", fontSize: 48, lineHeight: 1.12, letterSpacing: -1.5, minHeight: 172 } }, title),
      h("div", { style: { display: "flex", marginTop: 20, fontSize: 23, lineHeight: 1.5, color: "#c3cbbd" } }, line),
    )),
  ),
  h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, borderTop: "1px solid #425148", color: "#d2b56f", fontSize: 22 } },
    h("span", {}, "Start with one business problem."),
    h("span", {}, "shivanandkumar.in"),
  ),
);
const response = new ImageResponse(card, { width: 1200, height: 630, fonts: [{ name: "Geist", data: font, weight: 400, style: "normal" }] });
const destination = join(root, "public/og-services-2026-11.png");
await writeFile(destination, Buffer.from(await response.arrayBuffer()));
for (const alias of ["og-data-engineer-2026-11.png", "og-data-applied-ai-2026-11.png", "og-data-applied-ai-2026-3-projects.png", "og-data-applied-ai-2026.png", "og-data-applied-ai.png", "og-projects.png", "og-v2.png", "og.png"]) {
  await copyFile(destination, join(root, "public", alias));
}
