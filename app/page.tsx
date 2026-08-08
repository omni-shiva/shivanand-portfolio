/* eslint-disable @next/next/no-img-element */

import { projects } from "./projects/project-data";

const impactStories = [
  {
    label: "Production GenAI engineering",
    title: "Failure analysis grounded in operational signals",
    description:
      "Built a graph-orchestrated workflow across 40 enterprise Databricks jobs to turn failure evidence into consistent, reviewable analysis.",
    proof: [
      "40 Databricks jobs",
      "~70% less failure-investigation and remediation effort",
      "Human-reviewed output",
    ],
  },
  {
    label: "AI-assisted automation",
    title: "Data-product contracts, generated with controls",
    description:
      "Automated configurations, schemas, DDLs and 20+ transformations across a governed data-product workflow.",
    proof: [
      "47 Databricks pipelines",
      "Documentation effort: days → hours",
      "Validation before approval",
    ],
  },
  {
    label: "Platform reliability",
    title: "Scale, observability and measurable efficiency",
    description:
      "Improved monitoring, migration and distributed-processing workflows across high-volume enterprise data platforms.",
    proof: [
      "54 production pipelines",
      "85–90% fewer recurring manual checks",
      "Observability automation",
    ],
  },
];

const career = [
  {
    company: "HP",
    period: "2024 — Present",
    role: "Data Scientist II | Data & AI Platform Engineering",
    detail: "Databricks platforms, production automation, observability and Applied AI workflows",
  },
  {
    company: "Amazon",
    period: "2022 — 2024",
    role: "ML Data Associate II → Business Analyst",
    detail:
      "SQL pipelines, analytics automation and LLM data and evaluation work · director-level recognition for automation impact",
  },
  {
    company: "BYJU’S",
    period: "2021 — 2022",
    role: "Centre Head · Operations",
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
          <p className="eyebrow">
            Bengaluru, India
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

          <h1>Data & Applied AI Engineer</h1>

          <p className="hero-skills">
            Generative AI · Agentic AI · Databricks · Spark
          </p>
          <p className="hero-summary">
            I build reliable data and AI systems—from Databricks and Spark platforms to GenAI
            automation, agentic workflows, retrieval and evaluation.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#impact">
              See production impact
            </a>
            <a className="button button-secondary" href="#projects">
              Inspect public projects
            </a>
            <a
              className="button button-secondary has-tooltip"
              href="/Shivanand_Kumar_Data_AI_Engineer_Resume.pdf"
              download
              data-tooltip="Approved recruiter résumé · PDF"
              aria-label="Download Shivanand Kumar's approved résumé as a PDF"
            >
              Download résumé ↓
            </a>
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="section-shell">
          <div className="section-intro dark">
            <div>
              <p className="section-kicker">Selected production impact</p>
              <p className="impact-source">HP · 2024 — Present · Public-safe summary</p>
              <h2>Enterprise systems. Measurable outcomes.</h2>
            </div>
            <p>
              A public-safe view of engineering ownership across data platforms and Applied AI.
              Employer code, data and confidential architecture remain private.
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
            <span>Additional scale</span>
            <strong>Deduplication: 21B → 400M rows</strong>
            <strong>~$1.55M annual savings contribution</strong>
            <strong>PySpark workload · ~75% runtime reduction</strong>
            <strong>40-pipeline migration · zero migration-related runtime failures</strong>
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
              human-review boundaries. Each case study links to output, source, tests,
              architecture and disclosed limitations.
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
            These are independent public implementations—not employer systems. They contain no
            employer code, data, configuration or confidential architecture.
          </p>
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
              UIET, Panjab University · 2016 — 2021
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
            <h2>Data & AI engineering for real systems.</h2>
            <p>Applied AI, GenAI, Agentic AI and Data & AI engineering opportunities.</p>
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
