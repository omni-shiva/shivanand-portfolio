/* eslint-disable @next/next/no-img-element */

import { projects } from "./projects/project-data";

const impactStories = [
  {
    label: "AI-assisted automation",
    title: "Data-product contracts, with controls",
    description:
      "Owned a five-phase generation and validation loop for configurations, schemas, DDLs and 20+ transformations.",
    proof: ["47 Databricks pipelines", "Days → hours", "Waza evaluation"],
  },
  {
    label: "Operational engineering",
    title: "Faster issue triage, grounded in signals",
    description:
      "Built operational tooling to bring pipeline context, failure signals and recommended next steps into a controlled support workflow.",
    proof: ["54 production pipelines", "85–90% fewer checks", "Human review"],
  },
  {
    label: "Platform engineering",
    title: "Scale, reliability and measurable efficiency",
    description:
      "Led migration, observability and distributed-processing improvements across high-volume enterprise workloads.",
    proof: ["40 pipelines migrated", "Zero migration failures", "~75% faster"],
  },
];

const career = [
  {
    company: "HP",
    period: "2024 — Present",
    role: "Data Scientist II",
    detail: "Data Engineering & AI Platform Automation",
  },
  {
    company: "Amazon",
    period: "2022 — 2024",
    role: "Business Analyst · ML Data Associate II",
    detail: "SQL pipelines, analytics automation and LLM evaluation",
  },
  {
    company: "BYJU’S",
    period: "2021 — 2022",
    role: "Centre Head · Operations",
    detail: "16-member team leadership and SQL-led operating reviews",
  },
];

const primarySkills = ["Agentic AI", "SQL", "Python", "Databricks", "PySpark", "LLM evaluation"];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shivanand Kumar",
    jobTitle: "Senior Data Engineer",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Patna",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University Institute of Engineering and Technology, Panjab University",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com/in/shivachauhan",
      "https://github.com/omni-shiva",
      "https://www.hackerrank.com/profile/krshivan",
      "https://www.instagram.com/kumarshivanand7/",
    ],
    knowsAbout: [
      "Data Engineering",
      "Agentic AI",
      "Databricks",
      "SQL",
      "Python",
      "PySpark",
      "RAG",
      "LLM Evaluation",
      "Data Platform Automation",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shivanand Kumar, back to top">
          <span className="brand-mark">SK</span>
          <span>Shivanand Kumar</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#impact">Impact</a>
          <a href="#profile">Profile</a>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-visual" aria-hidden="true">
          <div className="agent-flow">
            <span className="flow-route" />
            <span className="flow-signal" />
            <div className="flow-node flow-context">
              <span>01</span>
              <strong>Context</strong>
              <small>Pipeline configs · schemas</small>
            </div>
            <div className="flow-node flow-skills">
              <span>02</span>
              <strong>Extraction</strong>
              <small>Deterministic context</small>
            </div>
            <div className="flow-core">
              <span>AGENTIC</span>
              <strong>Generation</strong>
            </div>
            <div className="flow-node flow-validation">
              <span>04</span>
              <strong>Validation</strong>
              <small>DQ · Waza evaluation</small>
            </div>
            <div className="flow-node flow-approval">
              <span>05</span>
              <strong>Human review</strong>
              <small>Approved artifacts</small>
            </div>
          </div>
          <img className="hero-portrait" src="/shivanand-kumar-portrait.png" alt="" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            Bengaluru · Remote & flexible opportunities
          </p>

          <a
            className="iit-chip"
            href="https://www.iitp.ac.in/"
            target="_blank"
            rel="noreferrer"
            aria-label="IIT Patna M.Tech programme"
          >
            <img src="/iit-patna-logo.png" alt="" />
            <span>
              <strong>IIT Patna</strong>
              M.Tech · AI & Data Science Engineering
            </span>
          </a>

          <h1>
            Senior Data Engineer building <span>reliable platforms</span> and{" "}
            <span>controlled Agentic AI.</span>
          </h1>

          <p className="hero-skills">SQL · Python · Databricks · Agentic AI</p>
          <p className="hero-summary">
            Five years of production data and analytics experience across HP, Amazon and
            BYJU&apos;S. My public projects show how I apply that foundation to safe,
            evaluation-driven AI systems.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              See project outputs
            </a>
            <a className="button button-secondary" href="#impact">
              Production impact
            </a>
            <a
              className="button button-secondary has-tooltip"
              href="/Shivanand_Kumar_Data_AI_Engineer_Resume.pdf"
              download
              data-tooltip="Latest one-page résumé · PDF"
              aria-label="Download Shivanand Kumar's latest résumé as a PDF"
            >
              Download résumé ↓
            </a>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-shell">
          <div className="section-intro">
            <div>
              <p className="section-kicker">Independent public builds</p>
              <h2>Don&apos;t just read the claims. Inspect the work.</h2>
            </div>
            <p>
              Two reproducible projects built with synthetic data, versioned evaluation and clear
              human-approval boundaries. Each case study links to its output, source, tests and
              design decisions.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.slug}>
                <div className="project-card-meta">
                  <span>0{index + 1}</span>
                  <span>{project.cardLabel}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="project-output-preview">
                  <span>Verified output</span>
                  <strong>{project.outputHeadline}</strong>
                </div>

                <div className="project-metrics" aria-label={`${project.title} evidence`}>
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="project-card-actions">
                  <a className="button button-primary" href={`/projects/${project.slug}/`}>
                    See output &amp; case study →
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source on GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="project-boundary-note">
            These are independent portfolio implementations—not employer systems. They contain no
            employer code, data, configuration or confidential architecture.
          </p>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="section-shell">
          <div className="section-intro dark">
            <div>
              <p className="section-kicker">Selected production impact</p>
              <h2>Three stories. Measured outcomes. No résumé repetition.</h2>
            </div>
            <p>
              A quick view of engineering ownership and outcomes, with confidential implementation
              details intentionally omitted.
            </p>
          </div>

          <div className="impact-grid">
            {impactStories.map((story, index) => (
              <article className="impact-card" key={story.title}>
                <div className="impact-meta">
                  <span>0{index + 1}</span>
                  <span>{story.label}</span>
                </div>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="proof-pills">
                  {story.proof.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="impact-footnote">
            <span>Also delivered</span>
            <strong>~$1.55M annual savings contribution</strong>
            <strong>~70% less recurring reporting effort</strong>
            <strong>15M+ users supported</strong>
          </div>
        </div>
      </section>

      <section className="profile-section section-shell" id="profile">
        <div className="profile-main">
          <div className="section-intro">
            <div>
              <p className="section-kicker">Career snapshot</p>
              <h2>Data foundations. AI direction.</h2>
            </div>
            <p>
              Production data engineering remains the foundation; Agentic AI and evaluation are
              the direction of growth.
            </p>
          </div>

          <div className="career-grid">
            {career.map((item) => (
              <article key={item.company} className={item.company === "Amazon" ? "amazon-card" : ""}>
                <div>
                  <h3>{item.company}</h3>
                  <time>{item.period}</time>
                </div>
                <strong>{item.role}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="profile-sidebar">
          <div className="education-compact">
            <img
              src="/iit-patna-logo.png"
              alt="Indian Institute of Technology Patna emblem"
            />
            <div>
              <span>Current education</span>
              <strong>M.Tech · AI & Data Science Engineering</strong>
              <p>IIT Patna · Jul 2026 — Present</p>
            </div>
          </div>
          <div className="education-secondary">
            <img
              src="/uiet-panjab-university-logo.png"
              alt="University Institute of Engineering and Technology emblem"
            />
            <p>
              <strong>B.E. Mechanical Engineering</strong>
              UIET, Panjab University · 2016 — 2020
            </p>
          </div>

          <div className="skills-compact">
            <span>Core strengths</span>
            <div>
              {primarySkills.map((skill) => (
                <strong key={skill}>{skill}</strong>
              ))}
            </div>
          </div>

          <a className="project-note" href="#projects">
            <span>Public portfolio · 2 verified projects</span>
            <strong>Open the case studies, outputs, tests and source →</strong>
          </a>
        </aside>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <div>
            <p className="section-kicker">Open to the right conversation</p>
            <h2>Senior Data Engineering · Data Platforms · Applied AI</h2>
            <p>Open to remote-first or flexible permanent opportunities.</p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-light has-tooltip"
              href="mailto:kumarshivanand7@gmail.com"
              data-tooltip="kumarshivanand7@gmail.com"
            >
              Email Shivanand
            </a>
            <a
              className="has-tooltip"
              href="https://linkedin.com/in/shivachauhan"
              target="_blank"
              rel="noreferrer"
              data-tooltip="linkedin.com/in/shivachauhan"
              aria-label="LinkedIn profile, shivachauhan"
            >
              LinkedIn ↗
            </a>
            <a
              className="has-tooltip"
              href="https://github.com/omni-shiva"
              target="_blank"
              rel="noreferrer"
              data-tooltip="github.com/omni-shiva"
              aria-label="GitHub profile, omni-shiva"
            >
              GitHub ↗
            </a>
            <a
              className="has-tooltip"
              href="https://www.hackerrank.com/profile/krshivan"
              target="_blank"
              rel="noreferrer"
              data-tooltip="hackerrank.com/profile/krshivan"
              aria-label="HackerRank profile, krshivan"
            >
              HackerRank ↗
            </a>
            <a
              className="has-tooltip"
              href="https://www.instagram.com/kumarshivanand7/"
              target="_blank"
              rel="noreferrer"
              data-tooltip="instagram.com/kumarshivanand7"
              aria-label="Instagram profile, kumarshivanand7"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Shivanand Kumar</span>
        <span>Senior Data Engineer · Data Platforms · Applied AI Projects</span>
      </footer>
    </main>
  );
}
