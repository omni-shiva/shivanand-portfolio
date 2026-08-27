import React from "react";
import { ImageResponse } from "next/og.js";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, writeFile } from "node:fs/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const nextRoot = dirname(require.resolve("next/package.json"));
const font = await readFile(join(nextRoot, "dist/compiled/@vercel/og/Geist-Regular.ttf"));
const portrait = await readFile(join(root, "public/shivanand-kumar-portrait.jpg"));
const logo = await readFile(join(root, "public/shivanand-logo-180.png"));
const data = (mime, bytes) => `data:${mime};base64,${bytes.toString("base64")}`;
const h = React.createElement;

const dot = () => h("span", { style: { color: "#00a4c7", margin: "0 13px" } }, "•");
const line = (...parts) =>
  h("div", { style: { display: "flex", alignItems: "center" } }, ...parts);

const card = h(
  "div",
  {
    style: {
      display: "flex",
      width: "100%",
      height: "100%",
      padding: "46px 48px 42px 56px",
      backgroundColor: "#fbf7ee",
      backgroundImage:
        "linear-gradient(rgba(11,40,72,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(11,40,72,.045) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      color: "#08264d",
      fontFamily: "Geist",
    },
  },
  h(
    "div",
    { style: { display: "flex", flexDirection: "column", width: "700px", height: "100%" } },
    h(
      "div",
      { style: { display: "flex", alignItems: "center", fontSize: 22, color: "#37516d" } },
      h("img", {
        src: data("image/png", logo),
        width: 42,
        height: 42,
        style: { borderRadius: 10, marginRight: 14 },
      }),
      "shivanandkumar.in",
    ),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", marginTop: 34 } },
      h(
        "div",
        { style: { fontSize: 74, lineHeight: 0.96, letterSpacing: "-2px", fontWeight: 700 } },
        "SHIVANAND",
      ),
      h(
        "div",
        { style: { fontSize: 74, lineHeight: 0.96, letterSpacing: "-2px", fontWeight: 700 } },
        "KUMAR",
      ),
    ),
    h("div", {
      style: { display: "flex", width: 108, height: 6, backgroundColor: "#00a4c7", marginTop: 24 },
    }),
    h(
      "div",
      { style: { display: "flex", fontSize: 30, fontWeight: 700, marginTop: 18 } },
      "DATA & APPLIED AI ENGINEER",
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          fontSize: 25,
          lineHeight: 1.35,
          fontWeight: 600,
          marginTop: 22,
        },
      },
      line("GENAI", dot(), "AGENTIC AI", dot(), "DATA PLATFORMS"),
      line("DATABRICKS", dot(), "SPARK", dot(), "SQL", dot(), "PYTHON"),
    ),
    h(
      "div",
      { style: { display: "flex", alignItems: "center", marginTop: 23 } },
      h(
        "div",
        {
          style: {
            display: "flex",
            backgroundColor: "#08264d",
            color: "#ffffff",
            borderRadius: 999,
            padding: "10px 18px",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: ".3px",
          },
        },
        "3 VERIFIED PUBLIC PROJECTS",
      ),
    ),
  ),
  h(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "396px",
        height: "100%",
        marginLeft: 2,
      },
    },
    h(
      "div",
      {
        style: {
          display: "flex",
          width: 380,
          height: 506,
          padding: 8,
          border: "2px solid rgba(0,164,199,.42)",
          borderRadius: 34,
          background: "rgba(255,255,255,.72)",
          boxShadow: "0 22px 60px rgba(8,38,77,.16)",
        },
      },
      h("img", {
        src: data("image/jpeg", portrait),
        width: 360,
        height: 486,
        style: { objectFit: "cover", borderRadius: 26 },
      }),
    ),
  ),
);

const response = new ImageResponse(card, {
  width: 1200,
  height: 630,
  fonts: [{ name: "Geist", data: font, weight: 400, style: "normal" }],
});

await writeFile(
  join(root, "public/og-data-applied-ai-2026-3-projects.png"),
  Buffer.from(await response.arrayBuffer()),
);
