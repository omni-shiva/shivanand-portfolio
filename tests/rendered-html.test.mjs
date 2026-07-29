import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports the finished Shivanand Kumar portfolio for GitHub Pages", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /Shivanand Kumar \| Senior Data Engineer &amp; Agentic AI/);
  assert.match(html, /Senior Data Engineer building/);
  assert.match(html, /reliable platforms/);
  assert.match(html, /controlled Agentic AI\./);
  assert.match(html, /Five years of production engineering/);
  assert.match(html, /Amazon/);
  assert.match(html, /Agentic AI &amp; Data Platform Automation/);
  assert.match(html, /Data-product contracts, with controls/);
  assert.match(html, /Three stories\. Measured outcomes\. No résumé repetition\./);
  assert.match(html, /47 Databricks pipelines/);
  assert.match(html, /Operational context, not another dashboard/);
  assert.match(html, /85–90% fewer checks/);
  assert.match(html, /Waza evaluation/);
  assert.match(html, /Public build · In development/);
  assert.match(html, /AI-ready pipeline knowledge and evaluation platform/);
  assert.match(html, /IIT Patna/);
  assert.match(html, /Deterministic context/);
  assert.match(html, /Agentic/);
  assert.match(html, /Human review/);
  assert.match(html, /shivanand-kumar-portrait\.png/);
  assert.match(html, /iit-patna-logo\.png/);
  assert.match(html, /uiet-panjab-university-logo\.png/);
  assert.doesNotMatch(html, /Experience across/);
  assert.doesNotMatch(html, /Selected production results/);
  assert.doesNotMatch(html, /PyTorch/);
  assert.match(html, /Shivanand_Kumar_Senior_Data_Engineer_Resume\.pdf/);
  assert.match(html, /https:\/\/shivanandkumar\.in\/og\.png/);
  assert.match(html, /Latest one-page résumé · PDF/);
  assert.match(html, /github\.com\/omni-shiva/);
  assert.match(html, /instagram\.com\/kumarshivanand7/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/);
});

test("ships the public portfolio assets and GitHub Pages controls", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  const cname = await readFile(new URL("../out/CNAME", import.meta.url), "utf8");

  await Promise.all([
    access(new URL("../out/.nojekyll", import.meta.url)),
    access(new URL("../out/og.png", import.meta.url)),
    access(new URL("../out/Shivanand_Kumar_Senior_Data_Engineer_Resume.pdf", import.meta.url)),
    access(new URL("../out/shivanand-kumar-portrait.png", import.meta.url)),
    access(new URL("../out/iit-patna-logo.png", import.meta.url)),
    access(new URL("../out/uiet-panjab-university-logo.png", import.meta.url)),
    access(new URL("../out/fonts/geist-sans-latin.woff2", import.meta.url)),
    access(new URL("../out/fonts/geist-mono-latin.woff2", import.meta.url)),
  ]);

  assert.equal(cname.trim(), "shivanandkumar.in");
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /"build": "[^"]*vinext/);
  assert.equal(root.pathname.endsWith("/portfolio/"), true);
});
