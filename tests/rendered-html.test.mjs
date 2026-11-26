import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const file = path => new URL("../out/" + path, import.meta.url);
const text = path => readFile(file(path), "utf8");

test("homepage presents services and keeps professional and independent work distinct", async () => {
  const html = await text("index.html");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  const visibleText = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
  for (const promise of ["Reliable data.", "Practical AI.", "Better operations."]) assert.ok(visibleText.includes(promise));
  const person = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(person.jobTitle, "Data & Applied AI Engineer");
  assert.match(html, /Data Engineer - 2/);
  assert.match(html, /Business Analyst · Supply Chain Analytics/);
  assert.match(html, /independent projects using synthetic data/);
  assert.match(html, /Professional experience at HP and Amazon is described separately/);
  assert.doesNotMatch(html, /Data Scientist|41\.4B|OntoBricks|RDF\/OWL/);
  assert.doesNotMatch(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/);
  assert.match(html, /<link rel="canonical" href="https:\/\/shivanandkumar\.in\/"/);
});

test("release contains no resume page, PDF, phone contact or full-CV data", async () => {
  for (const path of ["resume/index.html", "resume.pdf"]) await assert.rejects(access(file(path)));
  const inspect = async path => {
    for (const entry of await readdir(file(path), { withFileTypes: true })) {
      const next = path + entry.name;
      if (entry.isDirectory()) await inspect(next + "/");
      else if (/\.(html|js|json|xml|txt|css)$/.test(next)) assert.doesNotMatch(await text(next), /\/resume\/|\/resume\.pdf|href="tel:|"telephone"|resume\/content\.json|hetanor|hatenor|partner@|private limited/i);
    }
  };
  await inspect("");
  const contact = (await text("index.html")).match(/<section[^>]*id="contact"[\s\S]*?<\/section>/)[0];
  assert.match(contact, /href="mailto:kumarshivanand7@gmail\.com/);
  assert.doesNotMatch(contact, /href="tel:|<form/);
});

test("all existing project pages and learning downloads remain available", async () => {
  const html = await text("index.html");
  const sitemap = await text("sitemap.xml");
  for (const path of ["projects/data-platform-reliability-agent", "projects/synthetic-data-print-recommendation-agent", "projects/constraint-aware-coding-agent-evals", "learning/pii-masking-lab"]) {
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
  assert.match(project, /does not execute remediation/);
  assert.match(project, /do not evaluate the optional LLM planner/);
});

test("homepage navigation, tabs and published assets resolve", async () => {
  const html = await text("index.html");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, "IDs must be unique");
  for (const match of html.matchAll(/href="#([^"]+)"|aria-controls="([^"]+)"/g)) assert.ok(ids.includes(match[1] || match[2]), match[0]);
  assert.equal((html.match(/data-orbit="/g) || []).length, 6);
  assert.equal((html.match(/data-work-tab="/g) || []).length, 4);
  for (const match of html.matchAll(/(?:src|href)="(\/(?!\/)[^"?#]+)(?:[?#][^"]*)?"/g)) {
    const path = match[1].slice(1);
    await access(file(path.endsWith("/") ? path + "index.html" : path));
  }
});

test("canonical domain, social image and static hosting controls are intact", async () => {
  assert.equal((await text("CNAME")).trim(), "shivanandkumar.in");
  assert.match(await text("robots.txt"), /https:\/\/shivanandkumar.in\/sitemap.xml/);
  const image = await readFile(file("services/share-card.png"));
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
  for (const alias of ["og-services-2026-11-v2.png", "og-services-2026-11.png", "og-data-engineer-2026-11.png", "og-data-applied-ai-2026-11.png", "og-data-applied-ai-2026-3-projects.png", "og-data-applied-ai-2026.png", "og-data-applied-ai.png", "og-projects.png", "og-v2.png", "og.png"]) assert.deepEqual(await readFile(file(alias)), image);
  assert.match(await text("index.html"), /property="og:image" content="https:\/\/shivanandkumar.in\/services\/data-ai-services.jpg"/);
  const sharingJpeg = await readFile(file("services/share-card.jpg"));
  assert.equal(sharingJpeg.readUInt16BE(0), 0xffd8);
  assert.ok(sharingJpeg.length < 600000, "WhatsApp sharing image must remain under 600 KB");
  await access(file("brand/sk-mark.svg"));
  assert.match(await text("index.html"), /src="\/brand\/sk-mark.svg"/);
  for (const size of [32, 48, 180, 512]) {
    const icon = await readFile(file(`brand/sk-mark-${size}.png`));
    assert.equal(icon.readUInt32BE(16), size);
    assert.equal(icon.readUInt32BE(20), size);
  }
  await access(file(".nojekyll"));
});


test("circular challenges start collapsed and the sharing URL has no parameters", async () => {
  const html = await text("index.html");
  const challenges = [...html.matchAll(/<button[^>]*data-orbit="([^"]+)"[^>]*>/g)];
  assert.deepEqual(challenges.map(match => match[1]), ["data", "design", "process", "cost", "capacity", "support"]);
  for (const challenge of challenges) assert.match(challenge[0], /aria-expanded="false"/);
  assert.match(html, /id="challenge-summary"[^>]*hidden=""/);
  assert.doesNotMatch(html, /<dialog[^>]*\bopen[= >]/);
  for (const property of ["og:url", "og:image"]) {
    const value = html.match(new RegExp('property="' + property + '" content="([^"]+)"'))[1];
    assert.equal(new URL(value).search, "");
  }
  assert.deepEqual(await readFile(file("services/share-card.jpg")), await readFile(file("services/data-ai-services.jpg")));
});


test("internal navigation resolves across exported pages", async () => {
  const pages = ["index.html", "projects/data-platform-reliability-agent/index.html", "projects/synthetic-data-print-recommendation-agent/index.html", "projects/constraint-aware-coding-agent-evals/index.html", "learning/pii-masking-lab/index.html"];
  for (const page of pages) {
    const html = await text(page);
    for (const match of html.matchAll(/href="([/#][^"<>]*)"/g)) {
      const url = new URL(match[1], "https://shivanandkumar.in/" + page);
      if (url.origin !== "https://shivanandkumar.in") continue;
      const destination = url.pathname.slice(1) + (url.pathname.endsWith("/") ? "index.html" : "");
      await access(file(destination));
      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        assert.ok((await text(destination)).includes('id="' + id + '"'), page + " -> " + match[1]);
      }
    }
  }
});
