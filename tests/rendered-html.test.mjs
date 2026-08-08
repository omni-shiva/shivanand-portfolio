import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports the aligned Shivanand Kumar portfolio for GitHub Pages", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /Shivanand Kumar \| Data &amp; Applied AI Engineer/);
  assert.match(html, /Data &amp; Applied AI Engineer/);
  assert.match(html, /Generative AI · Agentic AI · Databricks · Spark/);
  assert.match(html, /I build reliable data and AI systems/);
  assert.match(html, /Enterprise systems\. Measurable outcomes\./);
  assert.match(html, /Production GenAI engineering/);
  assert.match(html, /40 Databricks jobs/);
  assert.match(html, /47 Databricks pipelines/);
  assert.match(html, /54 production pipelines/);
  assert.match(html, /Deduplication: 21B → 400M rows/);
  assert.match(html, /PySpark workload · ~75% runtime reduction/);
  assert.match(html, /zero migration-related runtime failures/);
  assert.match(html, /\$1\.55M annual savings contribution/);
  assert.match(html, /Independent public builds/);
  assert.match(html, /Data Platform Reliability Agent/);
  assert.match(html, /Synthetic Data and Print Recommendation Agent/);
  assert.match(html, /See output &amp; case study/);
  assert.match(html, /Data Scientist II \| Data &amp; AI Platform Engineering/);
  assert.match(html, /UIET, Panjab University · 2016 — 2021/);
  assert.match(html, /Approved recruiter résumé · PDF/);
  assert.match(html, /Shivanand_Kumar_Data_AI_Engineer_Resume\.pdf/);
  assert.match(html, /https:\/\/shivanandkumar\.in\/og-data-applied-ai\.png/);
  assert.match(html, /"jobTitle":"Data & Applied AI Engineer"/);
  assert.match(html, /github\.com\/omni-shiva/);

  assert.doesNotMatch(html, /Senior Data Engineer building/);
  assert.doesNotMatch(html, /Data Engineering &amp; AI Platform Automation/);
  assert.doesNotMatch(html, /2016 — 2020/);
  assert.doesNotMatch(html, /Waza evaluation/);
  assert.doesNotMatch(html, /five-phase/);
  assert.doesNotMatch(html, /Latest one-page résumé/);
  assert.doesNotMatch(html, /instagram\.com/);
  assert.doesNotMatch(html, /transitioning into AI|direction of growth/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/);
});

test("exports dedicated project evidence, limitations and source schema", async () => {
  const reliability = await readFile(
    new URL("../out/projects/data-platform-reliability-agent/index.html", import.meta.url),
    "utf8",
  );
  const printRecommendation = await readFile(
    new URL(
      "../out/projects/synthetic-data-print-recommendation-agent/index.html",
      import.meta.url,
    ),
    "utf8",
  );

  assert.match(reliability, /Concrete behavior, not a concept slide\./);
  assert.match(reliability, /SCHEMA_MISMATCH/);
  assert.match(reliability, /approval_required/);
  assert.match(reliability, /execution_performed/);
  assert.match(reliability, /25\/25/);
  assert.match(reliability, /97%/);
  assert.match(reliability, /What this project does not prove—yet\./);
  assert.match(reliability, /production-grade semantic retrieval quality/);
  assert.match(reliability, /SoftwareSourceCode/);
  assert.match(
    reliability,
    /property="og:url" content="https:\/\/shivanandkumar\.in\/projects\/data-platform-reliability-agent\/"/,
  );

  assert.match(printRecommendation, /incoming_brochure_001/);
  assert.match(printRecommendation, /color_mode/);
  assert.match(printRecommendation, /quality_mode/);
  assert.match(printRecommendation, /12/);
  assert.match(printRecommendation, /10×/);
  assert.match(printRecommendation, /100×/);
  assert.match(printRecommendation, /Synthetic holdout performance/);
  assert.match(printRecommendation, /cannot operate a printer/);
  assert.match(printRecommendation, /SoftwareSourceCode/);
  assert.match(
    printRecommendation,
    /property="og:url" content="https:\/\/shivanandkumar\.in\/projects\/synthetic-data-print-recommendation-agent\/"/,
  );
});

test("ships recruiter, search and GitHub Pages controls", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  const cname = await readFile(new URL("../out/CNAME", import.meta.url), "utf8");
  const robots = await readFile(new URL("../out/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  const notFound = await readFile(new URL("../out/404.html", import.meta.url), "utf8");

  await Promise.all([
    access(new URL("../out/.nojekyll", import.meta.url)),
    access(new URL("../out/og-data-applied-ai.png", import.meta.url)),
    access(new URL("../out/Shivanand_Kumar_Data_AI_Engineer_Resume.pdf", import.meta.url)),
    access(new URL("../out/shivanand-kumar-portrait.jpg", import.meta.url)),
    access(new URL("../out/iit-patna-logo.png", import.meta.url)),
    access(new URL("../out/uiet-panjab-university-logo.png", import.meta.url)),
    access(new URL("../out/fonts/geist-sans-latin.woff2", import.meta.url)),
    access(new URL("../out/fonts/geist-mono-latin.woff2", import.meta.url)),
  ]);

  assert.equal(cname.trim(), "shivanandkumar.in");
  assert.match(robots, /Allow: \//);
  assert.match(robots, /https:\/\/shivanandkumar\.in\/sitemap\.xml/);
  assert.match(sitemap, /data-platform-reliability-agent/);
  assert.match(sitemap, /synthetic-data-print-recommendation-agent/);
  assert.match(notFound, /This route is not part of the portfolio/);
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /"build": "[^"]*vinext/);
  assert.equal(root.pathname.endsWith("/portfolio/"), true);
});
