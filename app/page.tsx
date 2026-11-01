/* eslint-disable @next/next/no-img-element */

import { projects } from "./projects/project-data";
import LearningProjects from "./projects/LearningProjects";
import Certifications from "./Certifications";

const impactStories = [
  {
    label: "AI-assisted modernisation",
    title: "Legacy pipelines, modernised with review controls",
    description:
      "Modernised 50+ legacy enterprise Databricks pipelines using GPT and Claude Opus/Sonnet. Built a contract-driven ODPS migration framework with nine reusable Copilot skills, YAML data contracts and shared-runtime Python utilities.",
    proof: ["50+ pipelines modernised", "Nine reusable Copilot skills", "Source-backed reviews · output-parity checks · developer approval"],
  },
  {
    label: "Production data protection",
    title: "PII masking and encryption in production",
    description:
      "Built and deployed PII-masking and encryption workflows using Microsoft Presidio, spaCy, domain-specific detection rules and PGPy/OpenPGP.",
    proof: ["Microsoft Presidio & spaCy", "Domain-specific detection", "PGPy / OpenPGP encryption"],
  },
  {
    label: "Data-aware AI workflows",
    title: "Richer datasets and engineering context",
    description:
      "Enriched Databricks datasets with LLM-generated case-note summaries. Integrated OntoBricks with the lakehouse, exposing ontology and knowledge-graph context through MCP to GitHub Copilot in VS Code.",
    proof: ["LLM-generated columns", "OntoBricks knowledge-graph context", "MCP → GitHub Copilot"],
  },
  {
    label: "Production GenAI engineering",
    title: "Operational evidence, retrieval and controlled recovery",
    description:
      "Built a production operations agent using LangGraph and Claude Sonnet for 40 Databricks jobs, combining historical-resolution retrieval, MLflow tracing and controlled Jobs API retriggers.",
    proof: ["40 Databricks jobs", "~70% less investigation and remediation effort", "LangGraph · Claude Sonnet · MLflow"],
  },
  {
    label: "Migration and monitoring",
    title: "Reusable frameworks for reliable platform operations",
    description:
      "Migrated and deployed 40+ enterprise production pipelines with a reusable logging and refactoring framework. Automated monitoring across 54 pipelines.",
    proof: ["~90% less manual migration effort", "54 pipelines monitored", "85–90% fewer routine manual checks"],
  },
  {
    label: "Distributed-processing efficiency",
    title: "Spark optimisation with measurable scale",
    description:
      "Optimised PySpark partitioning, joins and caching; implemented Spark deduplication at billion-record scale. Developed lakehouse observability and SLA/incident-diagnosis capabilities.",
    proof: ["~75% pipeline runtime reduction", "21B → 400M records", "~$1.55M annual infrastructure savings contribution"],
  },
];

const career = [
  {
    company: "HP Inc.",
    period: "Jun 2024 - Present",
    role: "Data Scientist II | Data & AI Platform Engineering",
    detail: "Databricks platforms, production automation, observability and Applied AI workflows",
  },
  {
    company: "Amazon",
    period: "Oct 2022 - Jun 2024",
    role: "Business Analyst | SSD/AMXL - India Supply Chain Analytics",
    detail:
      "SQL pipelines and BI datasets for supply-chain reporting; SQL/Python reporting automation reduced manual effort by ~70%, and CPT query optimisation cut runtime by ~30%. Director-level Minesweeper and Automation Expert awards.",
  },
  {
    company: "BYJU’S",
    period: "Oct 2021 - Oct 2022",
    role: "Centre Head - Operations",
    detail: "16-member cross-functional operations team and SQL-led operating reviews",
  },
];

const primarySkills = [
  "Generative AI",
  "Agentic AI",
  "Databricks",
  "Spark & PySpark",
  "SQL",
  "Python",
  "RAG & retrieval",
  "LLM evaluation",
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shivanand Kumar",
    url: "https://shivanandkumar.in/",
    jobTitle: "Data & Applied AI Engineer",
    description:
      "Data & Applied AI Engineer specializing in Generative AI and Agentic AI, grounded in Databricks, Spark and production data engineering.",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University Institute of Engineering and Technology, Panjab University",
      },
    ],
    memberOf: {
      "@type": "OrganizationRole",
      roleName: "M.Tech student, AI & Data Science Engineering (Online), Jul 2026 - Present",
      memberOf: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Patna",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com/in/shivachauhan",
      "https://github.com/omni-shiva",
      "https://www.hackerrank.com/profile/krshivan",
    ],
    knowsAbout: [
      "Data Engineering",
      "Generative AI",
      "Agentic AI",
      "Databricks",
      "Apache Spark",
      "SQL",
      "Python",
      "Retrieval-Augmented Generation",
      "LLM Evaluation",
      "Data Platform Engineering",
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
          <img className="brand-mark" src="/shivanand-logo-180.png" alt="" />
          <span>Shivanand Kumar</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#impact">Impact</a>
          <a className="nav-mobile-link" href="#projects">
            Projects
          </a>
          <a href="#profile">Experience</a>
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
              <small>Data · contracts · signals</small>
            </div>
            <div className="flow-node flow-skills">
              <span>02</span>
              <strong>Retrieval</strong>
              <small>Grounded evidence</small>
            </div>
            <div className="flow-core">
              <span>AGENTIC</span>
              <strong>Workflow</strong>
            </div>
            <div className="flow-node flow-validation">
              <span>04</span>
              <strong>Evaluation</strong>
              <small>Quality · safety · traces</small>
            </div>
            <div className="flow-node flow-approval">
              <span>05</span>
              <strong>Human approval</strong>
              <small>Controlled action</small>
            </div>
          </div>
          <img className="hero-portrait" src="/shivanand-kumar-portrait.jpg" alt="" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Bengaluru, India</p>

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
              M.Tech (Online) · AI & Data Science Engineering · Ongoing
            </span>
          </a>

          <h1>Data & Applied AI Engineer</h1>

          <p className="hero-skills">
            Generative AI · Agentic AI · Databricks · Spark
          </p>
          <p className="hero-summary">
            I build reliable data platforms and controlled AI workflows: Databricks and PySpark
            optimisation, pipeline migration and observability, alongside LangGraph and Claude
            operations automation.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#impact">
              See production impact
            </a>
            <a className="button button-secondary" href="#projects">
              Inspect the flagship project
            </a>
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="section-shell">
          <div className="section-intro dark">
            <div>
              <p className="section-kicker">HP engineering impact</p>
              <p className="impact-source">HP Inc. · Jun 2024 - Present · Data & AI Platform Engineering</p>
              <h2>Enterprise systems. Measurable outcomes.</h2>
            </div>
            <p>
              Production operations, data protection and platform engineering, alongside
              contract-driven migration tooling with source reviews and developer approval gates.
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
            <span>Engineering controls</span>
            <strong>Read-only output-parity checks</strong>
            <strong>Developer approval for CI/CD handoff</strong>
            <strong>Shared-runtime contracts and utilities</strong>
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
              One independent flagship built with synthetic data: a read-only incident-diagnosis
              service with runbook retrieval, tenant-scoped SQL and approval-ready recovery previews.
              Inspect the source, offline regression cases and implementation limits.
            </p>
          </div>

          <div className="project-collection-heading">
            <h3>Flagship project</h3>
            <a href="#learning-projects">Explore learning projects ↓</a>
          </div>
          <div className="project-grid" style={{ gridTemplateColumns: "minmax(0, 1fr)", maxWidth: 820 }}>
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
            This independent implementation uses synthetic data and read-only decision support.
            Employer code, data, configuration and confidential architecture remain private.
          </p>
          <LearningProjects />
        </div>
      </section>

      <section className="profile-section section-shell" id="profile">
        <div className="profile-main">
          <div className="section-intro">
            <div>
              <p className="section-kicker">Experience and approach</p>
              <h2>Production foundation. Applied AI systems.</h2>
            </div>
            <p>
              I work where data systems meet Applied AI: reliable inputs, measurable evaluation,
              controlled actions and clear operator handoffs.
            </p>
          </div>

          <div className="journey-note">
            <span>Engineering journey</span>
            <div>
              <h3>From mechanical systems to intelligent systems.</h3>
              <p>
                Mechanical engineering shaped my systems mindset. I carried it into data
                platforms and controlled Applied AI workflows, with dependable foundations,
                measurable outcomes and clear operator handoffs.
              </p>
            </div>
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

          <div className="leadership-note">
            <span>Leadership and operating judgment</span>
            <p>
              Led a 16-member operations team at BYJU&apos;S and now bring the same emphasis on
              accountability, measurable outcomes and clear handoffs to engineering work.
            </p>
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
              <strong>M.Tech (Online) · AI & Data Science Engineering</strong>
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
            <span>Public portfolio · One flagship project</span>
            <strong>Inspect the diagnosis service, regression cases and source →</strong>
          </a>
        </aside>
      </section>

      <Certifications />

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <div>
            <p className="section-kicker">Professional contact</p>
            <h2>Let&apos;s connect around data & AI systems.</h2>
            <p>Applied AI, GenAI, Agentic AI and Data & AI engineering.</p>
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
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Shivanand Kumar</span>
        <span>Data & Applied AI Engineer · GenAI & Agentic AI · Data Engineering Foundation</span>
      </footer>
    </main>
  );
}
