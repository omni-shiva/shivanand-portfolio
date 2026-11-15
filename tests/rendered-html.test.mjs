import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const file = path => new URL("../out/" + path, import.meta.url);
const text = path => readFile(file(path), "utf8");

test("public pages lead with data engineering and omit disputed claims", async () => {
  const pages = await Promise.all(["index.html", "projects/data-platform-reliability-agent/index.html"].map(text));
  assert.match(pages[0], /<h1>Data &amp; Applied AI Engineer<\/h1>/);
  assert.match(pages[0], /Data Engineering · BI &amp; Analytics · Applied AI/);
  assert.match(pages[0], /href="#work"/);
  assert.equal((pages[0].match(/href="https:\/\/chatgpt.com\/u\/kumarshivanand7"/g) || []).length, 1);
  assert.match(pages[0], /AI development tools: GitHub Copilot · Claude/);
  const person = JSON.parse(pages[0].match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(person.jobTitle, "Data & Applied AI Engineer");
  const expectedSequence = ["Pipeline modernisation", "PII protection and enrichment", "Data-aware engineering", "Pipeline migration", "Processing optimisation", "Pipeline monitoring", "Lakehouse observability"];
  const positions = expectedSequence.map(label => pages[0].indexOf(label));
  assert.ok(positions.every((position, index) => position >= 0 && (!index || position > positions[index - 1])));
  assert.match(pages[0], /Data Scientist II \| Data and AI Platform Engineering/);
  for (const page of pages) assert.doesNotMatch(page, /LangGraph|MLflow|41\.4B/);
});

test("release contains no résumé page, PDF, phone contact or full-CV data", async () => {
  for (const path of ["resume/index.html", "resume.pdf"]) await assert.rejects(access(file(path)));
  const inspect = async path => {
    for (const entry of await readdir(file(path), { withFileTypes: true })) {
      const next = path + entry.name;
      if (entry.isDirectory()) await inspect(next + "/");
      else if (/\.(html|js|json|xml|txt|css)$/.test(next)) assert.doesNotMatch(await text(next), /\/resume\/|\/resume\.pdf|href="tel:|"telephone"|resume\/content\.json/);
    }
  };
  await inspect("");
  const home = await text("index.html");
  const contact = home.match(/<section class="contact-section"[\s\S]*?<\/section>/)[0];
  assert.equal((contact.match(/<a /g) || []).length, 1);
  assert.match(contact, /href="mailto:kumarshivanand7@gmail.com"/);
  assert.doesNotMatch(contact, /linkedin|github|tel:|download/i);
});

test("all portfolio projects are exported, linked and included in the sitemap", async () => {
  const html = await text("index.html");
  const sitemap = await text("sitemap.xml");
  assert.equal((html.match(/class="project-card"/g) || []).length, 3);
  for (const path of [
    "projects/data-platform-reliability-agent",
    "projects/synthetic-data-print-recommendation-agent",
    "projects/constraint-aware-coding-agent-evals",
    "learning/pii-masking-lab",
  ]) {
    assert.ok(html.includes('href="/' + path + '/"'), path);
    assert.ok(sitemap.includes("https://shivanandkumar.in/" + path + "/"), path);
    await access(file(path + "/index.html"));
  }
  assert.doesNotMatch(sitemap, /resume/);
  assert.match(await text("projects/synthetic-data-print-recommendation-agent/index.html"), /same documented synthetic policy world/);
  assert.match(await text("projects/constraint-aware-coding-agent-evals/index.html"), /6\/6 vs 2\/6/);
  const lab = await text("learning/pii-masking-lab/index.html");
  assert.match(lab, /17 \/ 25/);
  assert.match(lab, /href="\/learning\/pii-masking-lab\.zip"/);
  await access(file("learning/pii-masking-lab.zip"));
  await access(file("learning/synthetic_support_tickets.csv"));
  const project = await text("projects/data-platform-reliability-agent/index.html");
  assert.match(project, /AI-assisted independent project/);
  assert.match(project, /Synthetic data/);
  assert.match(project, /execution_performed/);
  assert.match(project, /does not execute remediation/);
  assert.match(project, /do not evaluate the optional LLM planner/);
  assert.doesNotMatch(project, /Learning notebook/);
  assert.match(project, /href="mailto:kumarshivanand7@gmail.com"/);
});

test("canonical domain, social image and static hosting controls are intact", async () => {
  assert.equal((await text("CNAME")).trim(), "shivanandkumar.in");
  assert.match(await text("robots.txt"), /https:\/\/shivanandkumar.in\/sitemap.xml/);
  const image = await readFile(file("og-data-engineer-2026-11.png"));
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
  for (const alias of ["og-data-applied-ai-2026-11.png", "og-data-applied-ai-2026-3-projects.png", "og-data-applied-ai-2026.png", "og-data-applied-ai.png", "og-projects.png", "og-v2.png", "og.png"]) assert.deepEqual(await readFile(file(alias)), image);
  await access(file(".nojekyll"));
});
