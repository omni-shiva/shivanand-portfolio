import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://portfolio.example/", {
      headers: {
        accept: "text/html",
        host: "portfolio.example",
        "x-forwarded-host": "portfolio.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Shivanand Kumar portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
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

test("ships the public portfolio assets and removes starter dependencies", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");

  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/og-v2.png", import.meta.url)),
    access(new URL("../public/Shivanand_Kumar_Senior_Data_Engineer_Resume.pdf", import.meta.url)),
    access(new URL("../public/shivanand-kumar-portrait.png", import.meta.url)),
    access(new URL("../public/iit-patna-logo.png", import.meta.url)),
    access(new URL("../public/uiet-panjab-university-logo.png", import.meta.url)),
  ]);

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
  await assert.rejects(access(new URL("../app/_sites-preview/preview.css", import.meta.url)));
  assert.equal(root.pathname.endsWith("/portfolio/"), true);
});
