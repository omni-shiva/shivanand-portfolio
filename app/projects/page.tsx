/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import "../internal-base.css";
import "./projects-index.css";
import { projects } from "./project-data";

const title = "Data & Applied AI Portfolio | 100B+ Tokens with Codex & Claude Code";
const description = "Explore Shivanand Kumar's engineering projects in data reliability, synthetic data, AI evaluation and PII masking. Experience includes 100B+ tokens with Codex and Claude Code across personal and professional engineering work.";
const url = "https://shivanandkumar.in/projects/";
const image = { url: "/projects/engineering-portfolio.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Shivanand Kumar — Data & Applied AI Portfolio. 100B+ tokens with Codex and Claude Code across personal and professional work. Data reliability, synthetic data, AI evaluation and PII masking." };

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Shivanand Kumar — Engineering Portfolio",
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Shivanand Kumar", type: "website", images: [image] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

const introductions: Record<string, { question: string; method: string; evidence: string }> = {
  "data-platform-reliability-agent": {
    question: "What explains a pipeline failure?",
    method: "Bring incident events, data contracts and retrieved runbooks together into a diagnosis with evidence and proposed next steps.",
    evidence: "25 offline regression cases. Read-only recommendations, with an explicit approval boundary.",
  },
  "synthetic-data-print-recommendation-agent": {
    question: "When does more synthetic data help?",
    method: "Measure gaps in a small document corpus, generate controlled variations and compare recommendation quality across data scales.",
    evidence: "A separately versioned 12-case synthetic holdout. Compare 1×, 10× and 100× generation.",
  },
  "constraint-aware-coding-agent-evals": {
    question: "Can correct code still break the runtime contract?",
    method: "Evaluate coding-agent outputs against both functional requirements and the constraints of a shared execution environment.",
    evidence: "Inspect the documented 6/6 versus 2/6 constraint-check result, source and evaluation report.",
  },
};

export default function ProjectsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shivanand Kumar's engineering projects",
    url,
    itemListElement: [
      ...projects.map(project => ({ name: project.title, url: `${url}${project.slug}/` })),
      { name: "PII Masking Lab", url: "https://shivanandkumar.in/learning/pii-masking-lab/" },
    ].map((item, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "CreativeWork", ...item } })),
  };

  return (
    <div className="projects-index">
      <a className="pi-skip" href="#projects-content">Skip to main content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <header className="pi-header pi-shell">
        <Link className="pi-brand" href="/" aria-label="Shivanand Kumar home">
          <img src="/brand/sk-mark.svg" width={44} height={44} alt="" />
          <span><strong>Shivanand Kumar</strong><span>Data &amp; Applied AI Engineer</span></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/projects/" aria-current="page">Projects</Link>
          <Link href="/#about">About</Link>
        </nav>
      </header>

      <main id="projects-content" tabIndex={-1}>
        <section className="pi-hero" aria-labelledby="portfolio-title">
          <div className="pi-shell pi-hero-inner">
            <p className="pi-background">Data Engineer - 2 at HP. Previously, analytics at Amazon.</p>
            <h1 id="portfolio-title">Data engineering<br />&amp; applied AI projects.</h1>
            <p className="pi-intro">The problem, the implementation and the evidence behind each build.</p>
            <p className="pi-usage"><strong>100B+ tokens with Codex &amp; Claude Code</strong><span>Across personal and professional engineering work.</span></p>
            <a className="pi-hero-link" href="#project-list">Explore the projects</a>
          </div>
        </section>

        <section className="pi-shell pi-projects" id="project-list" aria-labelledby="project-list-title">
          <div className="pi-section-intro">
            <h2 id="project-list-title">Explore the work.</h2>
            <p>Independent projects using synthetic data. Each case study explains the approach, results and limits; AI assistance is documented where used.</p>
          </div>
          <div className="pi-grid">
            {projects.map(project => {
              const intro = introductions[project.slug];
              return (
                <article className="pi-project" key={project.slug}>
                  <p className="pi-category">{project.cardLabel}</p>
                  <h3><Link href={`/projects/${project.slug}/`}>{project.title}</Link></h3>
                  <p className="pi-question">{intro.question}</p>
                  <p>{intro.method}</p>
                  <p className="pi-evidence">{intro.evidence}</p>
                  <div className="pi-project-links">
                    <Link href={`/projects/${project.slug}/`}>Read case study<span className="pi-sr">: {project.title}</span></Link>
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">Source code<span className="pi-sr">: {project.title} (opens in a new tab)</span></a>
                  </div>
                </article>
              );
            })}
            <article className="pi-project">
              <p className="pi-category">Privacy · Learning notebook</p>
              <h3><Link href="/learning/pii-masking-lab/">PII Masking Lab</Link></h3>
              <p className="pi-question">What should be masked, and what should stay?</p>
              <p>Follow detection, candidate validation and masking while preserving the useful technical context in fictional support issues.</p>
              <p className="pi-evidence">24 teaching fixtures, a rule-based baseline and examples of missed and unnecessary masking.</p>
              <div className="pi-project-links">
                <Link href="/learning/pii-masking-lab/">Read notebook<span className="pi-sr">: PII Masking Lab</span></Link>
                <a href="/learning/pii-masking-lab.zip" download>Download code<span className="pi-sr">: PII Masking Lab ZIP</span></a>
              </div>
            </article>
          </div>
        </section>

        <aside className="pi-experience" aria-labelledby="experience-title">
          <div className="pi-shell pi-experience-inner">
            <div><h2 id="experience-title">Professional background</h2><p>My work at HP spans data pipelines, platform reliability and applied AI workflows. My Amazon experience centres on supply chain analytics.</p></div>
            <a href="https://www.linkedin.com/in/shivachauhan/" target="_blank" rel="noreferrer">View LinkedIn profile<span className="pi-sr"> (opens in a new tab)</span></a>
          </div>
        </aside>
      </main>
      <footer className="pi-shell pi-footer"><Link href="/">Shivanand Kumar</Link><a href="https://github.com/omni-shiva" target="_blank" rel="noreferrer">GitHub<span className="pi-sr"> (opens in a new tab)</span></a><Link href="/#contact">Contact</Link></footer>
    </div>
  );
}
