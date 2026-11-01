import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const exported = (path) => readFile(new URL(`../out/${path}`, import.meta.url), "utf8");
const removedSlugs = ["synthetic-data-print-recommendation-agent", "constraint-aware-coding-agent-evals"];

test("exported homepage matches the approved experience and current education", async () => {
  const html = await exported("index.html");
  for (const phrase of [
    /Shivanand Kumar \| Data &amp; Applied AI Engineer/,
    /Data Scientist II \| Data &amp; AI Platform Engineering/,
    /Jun 2024 - Present/,
    /50\+ legacy enterprise Databricks pipelines/,
    /nine reusable Copilot skills/,
    /source reviews and developer approval gates/,
    /Microsoft Presidio/,
    /spaCy/,
    /PGPy\/OpenPGP/,
    /LLM-generated case-note summaries/,
    /OntoBricks/,
    /MCP/,
    /40 Databricks jobs/,
    /~70% less investigation and remediation effort/,
    /40\+ enterprise production pipelines/,
    /~90% less manual migration effort/,
    /54 pipelines monitored/,
    /85–90% fewer routine manual checks/,
    /21B → 400M records/,
    /~75% pipeline runtime reduction/,
    /~\$1\.55M annual infrastructure savings contribution/,
    /Business Analyst \| SSD\/AMXL - India Supply Chain Analytics/,
    /Oct 2022 - Jun 2024/,
    /~30%/,
    /Minesweeper and Automation Expert/,
    /M.Tech \(Online\) · AI &amp; Data Science Engineering · Ongoing/,
    /IIT Patna · Jul 2026 — Present/,
    /UIET, Panjab University · 2016 — 2020/,
  ]) assert.match(html, phrase);
  assert.doesNotMatch(html, /ML Data Associate|47 Databricks pipelines|zero migration-related runtime failures|Browser Summary/);
  const person = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(person.jobTitle, "Data & Applied AI Engineer");
  assert.deepEqual(person.alumniOf.map((school) => school.name), ["University Institute of Engineering and Technology, Panjab University"]);
  assert.match(person.memberOf.roleName, /student.*Jul 2026 - Present/);
  assert.equal(person.memberOf.memberOf.name, "Indian Institute of Technology Patna");
  assert.doesNotMatch(html, /Latest one-page résumé|Download Resume|Resume · PDF|Shivanand_Kumar_Data_AI_Engineer_Resume\.pdf|href="tel:|instagram\.com|open to work/i);
});

test("one flagship and separate learning notebook replace the old public catalogue", async () => {
  const html = await exported("index.html");
  const sitemap = await exported("sitemap.xml");
  assert.equal((html.match(/class="project-card"/g) || []).length, 1);
  assert.match(html, /One flagship project/);
  assert.match(html, /Data Platform Reliability Agent/);
  assert.match(html, /PII Masking Lab/);
  assert.doesNotMatch(html, /Three reproducible|3 verified|Synthetic Data and Print Recommendation Agent|Constraint-Aware Coding Agent Evaluation Lab/);
  for (const slug of removedSlugs) {
    assert.doesNotMatch(html, new RegExp(slug));
    assert.doesNotMatch(sitemap, new RegExp(slug));
    await assert.rejects(access(new URL(`../out/projects/${slug}/index.html`, import.meta.url)));
  }
  assert.match(sitemap, /data-platform-reliability-agent/);
  assert.match(sitemap, /learning\/pii-masking-lab/);
});

test("flagship preserves read-only scope, retrieval design and offline evaluation boundary", async () => {
  const html = await exported("projects/data-platform-reliability-agent/index.html");
  for (const phrase of [/SCHEMA_MISMATCH/, /approval_required/, /execution_performed/, /25\/25/, /256/, /feature-hashed embeddings/, /Cosine-similarity/, /keyword-based rescoring/, /OpenAI Responses API/, /deterministic fallback/, /not evaluate the optional LLM planner/, /does not execute remediation/, /SoftwareSourceCode/]) assert.match(html, phrase);
  assert.match(html, /href="\/learning\/pii-masking-lab\/"/);
  assert.match(html, /property="og:url" content="https:\/\/shivanandkumar\.in\/projects\/data-platform-reliability-agent\/"/);
  for (const slug of removedSlugs) assert.doesNotMatch(html, new RegExp(slug));
});

test("search metadata, social preview and static hosting controls are intact", async () => {
  const html = await exported("index.html");
  const cname = await exported("CNAME");
  const robots = await exported("robots.txt");
  const notFound = await exported("404.html");
  const socialCard = await readFile(new URL("../out/og-data-applied-ai-2026-11.png", import.meta.url));
  assert.equal(socialCard.toString("ascii", 12, 16), "IHDR");
  assert.equal(socialCard.readUInt32BE(16), 1200);
  assert.equal(socialCard.readUInt32BE(20), 630);
  assert.match(html, /https:\/\/shivanandkumar\.in\/og-data-applied-ai-2026-11\.png/);
  assert.doesNotMatch(html, /og-data-applied-ai-2026-3-projects\.png/);
  assert.match(html, /name="google-site-verification" content="o0qvKwbp99kYmQG3wkL8xT5ofg_MDeba9eRAPCvGZtg"/);
  assert.equal(cname.trim(), "shivanandkumar.in");
  assert.match(robots, /Allow: \//);
  assert.match(robots, /https:\/\/shivanandkumar\.in\/sitemap\.xml/);
  assert.match(notFound, /This route is not part of the portfolio/);
  for (const path of [".nojekyll", "shivanand-logo-48.png", "shivanand-kumar-portrait.jpg", "iit-patna-logo.png", "uiet-panjab-university-logo.png", "fonts/geist-sans-latin.woff2"]) await access(new URL(`../out/${path}`, import.meta.url));
  await assert.rejects(access(new URL("../out/Shivanand_Kumar_Data_AI_Engineer_Resume.pdf", import.meta.url)));
});
