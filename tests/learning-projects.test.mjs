import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { carouselIndex } from "../app/projects/carousel-index.ts";
import { learningProjects } from "../app/projects/learning-project-data.ts";

test("manual navigation handles 2, 3, 4 and 5 projects without hardcoded limits", () => {
  for (const count of [2, 3, 4, 5]) {
    let current = 0;
    for (let step = 1; step <= count * 2; step++) {
      current = carouselIndex(current, 1, count);
      assert.equal(current, step % count);
    }
    assert.equal(carouselIndex(0, -1, count), count - 1);
    assert.equal(carouselIndex(count - 1, 1, count), 0);
  }
  assert.equal(carouselIndex(0, 1, 0), 0);
  assert.equal(carouselIndex(0, -1, 1), 0);
});

test("only real or explicitly in-progress learning entries are included", () => {
  assert.deepEqual(learningProjects.map((p) => p.slug), ["pii-masking-lab", "browser-summary"]);
  assert.match(learningProjects[0].status, /Practice pending/);
  assert.match(learningProjects[0].note, /Live LLM evaluation.*pending/);
  assert.match(learningProjects[1].status, /In progress.*Repository pending/);
  assert.equal(new Set(learningProjects.map((p) => p.slug)).size, learningProjects.length);
});

test("export separates flagship and learning projects and provides accessible controls", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.equal((html.match(/class="project-card"/g) || []).length, 3);
  assert.match(html, /Flagship projects/);
  assert.match(html, /id="learning-projects"/);
  assert.match(html, /aria-roledescription="carousel"/);
  assert.match(html, /aria-label="Previous learning project"/);
  assert.match(html, /aria-label="Next learning project"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /class="learning-slide" hidden="" role="group"/);
  assert.match(html, /Local notebook · Practice pending/);
  assert.match(html, /In progress · Repository pending/);
  assert.match(html, /Measured rule-based result, not an LLM score/);
  assert.match(html, /href="\/learning\/pii-masking-lab.zip" download=""/);
  assert.match(html, /href="\/learning\/pii-masking-lab\/"/);
  assert.match(html, /Open learning notebook/);
  assert.doesNotMatch(html, /github.com\/omni-shiva\/pii-masking-lab/);
});

test("PII page is a direct static destination with matching metadata and resources", async () => {
  const html = await readFile(new URL("../out/learning/pii-masking-lab/index.html", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  assert.match(html, /<h1>PII Masking Lab<\/h1>/);
  assert.match(html, /<title>PII Masking Lab \| Learning Notebook \| Shivanand Kumar<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/shivanandkumar.in\/learning\/pii-masking-lab\/"/);
  assert.match(html, /property="og:url" content="https:\/\/shivanandkumar.in\/learning\/pii-masking-lab\/"/);
  assert.doesNotMatch(html, /og-data-applied-ai-2026-3-projects\.png/);
  assert.match(html, /href="\/learning\/pii-masking-lab.zip" download=""/);
  assert.match(html, /href="\/learning\/synthetic_support_tickets.csv" download=""/);
  assert.match(html, /href="\/#learning-projects"/);
  assert.match(html, /not a live LLM response/);
  assert.match(html, /Assistant-run verification/);
  assert.match(html, /hands-on practice remain pending/);
  assert.match(html, /not a production privacy filter/);
  assert.match(html, /RUN_LLM = False/);
  assert.match(html, /17 \/ 25/);
  for (const kind of ["ADDRESS", "EMAIL", "PHONE", "BANK_ACCOUNT", "PAYMENT_CARD"]) {
    assert.match(html, new RegExp(kind));
  }
  assert.match(sitemap, /https:\/\/shivanandkumar.in\/learning\/pii-masking-lab\//);
});

test("exports the prepared archive and five-column synthetic CSV unchanged", async () => {
  const zip = await readFile(new URL("../out/learning/pii-masking-lab.zip", import.meta.url));
  assert.equal(zip.subarray(0, 2).toString(), "PK");
  assert.deepEqual(zip, await readFile(new URL("../public/learning/pii-masking-lab.zip", import.meta.url)));
  const csv = await readFile(new URL("../out/learning/synthetic_support_tickets.csv", import.meta.url), "utf8");
  assert.equal(csv.split("\n")[0], '"ticket_id","category","created_at","status","issue_summary"');
  assert.equal(csv, await readFile(new URL("../public/learning/synthetic_support_tickets.csv", import.meta.url), "utf8"));
  assert.match(csv, /DEMO-024/);
});

test("PII table has four distinct columns and no unpractised platform comparison", async () => {
  const html = await readFile(new URL("../out/learning/pii-masking-lab/index.html", import.meta.url), "utf8");
  const table = html.match(/<table class="learning-type-table">([\s\S]*?)<\/table>/)?.[1];
  assert.ok(table, "The definitions table must be exported");
  assert.equal((table.match(/scope="col"/g) || []).length, 4);
  assert.equal((table.match(/scope="row"/g) || []).length, 5);
  for (const heading of ["Entity", "What it means", "Original example", "Masked value"]) {
    assert.match(table, new RegExp(`<th scope="col">${heading}</th>`));
  }
  assert.equal((table.match(/class="learning-mask-token"/g) || []).length, 5);
  assert.doesNotMatch(html, /ai_mask|ai-mask-heading|Related platform capability/);
  const stylesheetPaths = [...html.matchAll(/<link[^>]+href="([^"]+\.css)"[^>]*>/g)].map(match => match[1]);
  assert.ok(stylesheetPaths.length > 0, "The page must load a stylesheet");
  const css = (await Promise.all(stylesheetPaths.map(path => readFile(new URL(`../out${path}`, import.meta.url), "utf8")))).join("\n");
  assert.match(css, /\.learning-mask-token/);
  assert.match(css, /\.learning-type-table/);
  assert.match(css, /\.learning-detail-shell/);
});
