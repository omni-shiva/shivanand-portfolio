const caseStudies = [
  {
    number: "01",
    label: "Production case study",
    title: "AI-driven data-product contract automation",
    summary:
      "Led the design and rollout of an agentic engineering workflow that turned authoritative pipeline context into structured, reviewable data-product contracts.",
    outcomes: ["47 Databricks pipelines", "Days to hours", "Human approval retained"],
    stack: ["Agent skills", "Structured generation", "Deterministic validation", "Databricks"],
  },
  {
    number: "02",
    label: "Production case study",
    title: "Platform reliability and migration at scale",
    summary:
      "Built repeatable monitoring and migration patterns that improved operational visibility while reducing manual effort and production risk.",
    outcomes: ["54 monitored pipelines", "40 migrated pipelines", "Zero migration-related failures"],
    stack: ["Observability", "SLA monitoring", "Migration automation", "Data quality"],
  },
  {
    number: "03",
    label: "Production case study",
    title: "Distributed data optimization",
    summary:
      "Improved high-volume telemetry and lakehouse workloads through partitioning, join optimization, caching, and distributed deduplication.",
    outcomes: ["~75% faster runtime", "21B → 400M rows", "~$1.55M savings contribution"],
    stack: ["PySpark", "Spark", "Databricks", "Performance tuning"],
  },
  {
    number: "04",
    label: "Production case study",
    title: "SQL analytics automation",
    summary:
      "Built production SQL pipelines, operational metrics, and BI datasets for large-scale supply-chain decision systems.",
    outcomes: ["15M+ users supported", "~70% less manual reporting", "~30% runtime reduction"],
    stack: ["Advanced SQL", "Python", "BI datasets", "Metric design"],
  },
];

const services = [
  {
    title: "Reliable data pipelines",
    copy: "SQL, Python, Databricks and PySpark pipelines designed around clear grain, validation, recoverability and measurable outcomes.",
  },
  {
    title: "Agentic engineering workflows",
    copy: "Structured generation, deterministic checks, evaluation sets and human-review controls for enterprise engineering automation.",
  },
  {
    title: "Platform reliability",
    copy: "Observability, migration frameworks, SLA monitoring, data-quality controls and performance diagnosis for production platforms.",
  },
  {
    title: "Analytics automation",
    copy: "Operational metrics, BI-ready datasets and reporting workflows that replace repetitive manual work with trusted data products.",
  },
];

const skillGroups = [
  {
    title: "Data engineering",
    skills: ["Advanced SQL", "Python", "PySpark", "ETL / ELT", "Data modeling", "Data quality"],
  },
  {
    title: "Platforms & cloud",
    skills: ["Databricks", "Delta Lake", "Unity Catalog", "Spark", "AWS S3", "Glue", "Redshift"],
  },
  {
    title: "Agentic AI",
    skills: ["Agent skills", "Structured outputs", "Context engineering", "Evaluation sets", "Human approval"],
  },
  {
    title: "Reliability",
    skills: ["Observability", "SLA monitoring", "Migration", "Performance tuning", "Incident diagnosis"],
  },
];

const experience = [
  {
    years: "2024 — Present",
    company: "HP",
    role: "Data Scientist II · Data Engineering & AI Platform Automation",
    detail:
      "Enterprise Databricks pipelines, agentic contract automation, production monitoring, migration frameworks, observability and distributed optimization.",
  },
  {
    years: "2022 — 2024",
    company: "Amazon",
    role: "Business Analyst · Machine Learning Data Associate II",
    detail:
      "Production SQL pipelines, operational analytics, metric automation, supervised fine-tuning data quality and prompt-response evaluation.",
  },
  {
    years: "2021 — 2022",
    company: "BYJU’S",
    role: "Centre Head · Operations",
    detail:
      "Led a 16-member cross-functional team and used SQL dashboards and operating reviews to improve delivery and business performance.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shivanand Kumar",
    jobTitle: "Senior Data Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    sameAs: ["https://linkedin.com/in/shivachauhan", "https://www.hackerrank.com/profile/krshivan"],
    knowsAbout: [
      "Data Engineering",
      "Agentic AI",
      "Databricks",
      "SQL",
      "Python",
      "PySpark",
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
          <span className="brand-name">Shivanand Kumar</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#lab">Public lab</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            Bengaluru · Open to remote & flexible opportunities
          </p>
          <h1>
            Reliable data platforms.
            <span>Applied intelligence where it matters.</span>
          </h1>
          <p className="hero-role">Senior Data Engineer · Agentic AI & Data Platform Automation</p>
          <p className="hero-copy">
            I build production data systems and controlled AI-assisted engineering workflows using SQL,
            Python, Databricks and AWS—connecting reliability, automation and measurable business impact.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work
            </a>
            <a
              className="button button-secondary"
              href="/Shivanand_Kumar_Senior_Data_Engineer_Resume.pdf"
              download
            >
              Download résumé
            </a>
          </div>
          <div className="proof-line" aria-label="Career highlights">
            <span>5 years</span>
            <span>HP · Amazon · BYJU’S</span>
            <span>IIT Patna M.Tech</span>
          </div>
        </div>

        <div className="system-card" aria-label="Selected production outcomes">
          <div className="system-card-top">
            <span>PRODUCTION SIGNALS</span>
            <span className="live-pill">LIVE EVIDENCE</span>
          </div>
          <div className="signal-map">
            <div className="signal signal-a">
              <strong>47</strong>
              <span>Databricks pipelines</span>
            </div>
            <div className="signal signal-b">
              <strong>54</strong>
              <span>Monitored pipelines</span>
            </div>
            <div className="signal signal-c">
              <strong>40</strong>
              <span>Zero-failure migrations</span>
            </div>
            <div className="signal signal-d">
              <strong>~75%</strong>
              <span>Runtime reduction</span>
            </div>
            <div className="signal-core">
              <span>DATA</span>
              <strong>+</strong>
              <span>AI</span>
            </div>
          </div>
          <p>Production outcomes · Confidentiality-safe summaries</p>
        </div>
      </section>

      <section className="marquee" aria-label="Core focus areas">
        <div>
          <span>DATA PLATFORMS</span>
          <span>AGENTIC AUTOMATION</span>
          <span>SQL & ANALYTICS</span>
          <span>RELIABILITY</span>
          <span>LLM EVALUATION</span>
          <span>DATA PLATFORMS</span>
        </div>
      </section>

      <section className="section-shell services-section" id="about">
        <div className="section-heading">
          <p className="section-kicker">What I build</p>
          <h2>Engineering work that survives the demo.</h2>
          <p>
            A data-engineering foundation, with AI automation added through explicit context,
            structured outputs, validation and human review.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-shell">
          <div className="section-heading light">
            <p className="section-kicker">Selected work</p>
            <h2>Case studies, not confidential implementation details.</h2>
            <p>
              Each story separates the engineering problem, my ownership and the measured outcome.
            </p>
          </div>
          <div className="case-grid">
            {caseStudies.map((project) => (
              <article className="case-card" key={project.number}>
                <div className="case-meta">
                  <span>{project.number}</span>
                  <span>{project.label}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="outcomes">
                  {project.outcomes.map((outcome) => (
                    <span key={outcome}>{outcome}</span>
                  ))}
                </div>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell lab-section" id="lab">
        <div className="lab-copy">
          <p className="section-kicker">Public lab · In development</p>
          <h2>AI-ready pipeline knowledge platform</h2>
          <p>
            A non-confidential portfolio project that combines deterministic parsing, hybrid retrieval,
            structured generation, citations, automated evaluation and human approval.
          </p>
          <div className="lab-boundary">
            <strong>Capability boundary</strong>
            <span>
              This is a public portfolio project—not a claim of production RAG ownership.
            </span>
          </div>
          <ul>
            <li>Exact facts from schemas, configurations and DDLs</li>
            <li>Hybrid retrieval for standards, runbooks and prior examples</li>
            <li>Separate retrieval and answer-quality evaluation</li>
            <li>Tracing for latency, cost, failures and version changes</li>
          </ul>
        </div>
        <div className="lab-ui" aria-label="Concept UI for the public portfolio project">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <p>pipeline-knowledge / evaluation</p>
          </div>
          <div className="lab-ui-body">
            <aside>
              <strong>Knowledge sources</strong>
              <span className="source active">Pipeline configs</span>
              <span className="source">Schemas & DDLs</span>
              <span className="source">Engineering standards</span>
              <span className="source">Runbooks</span>
            </aside>
            <div className="eval-panel">
              <div className="eval-query">
                <span>QUESTION</span>
                <p>Which transformations affect the customer grain?</p>
              </div>
              <div className="evidence-row">
                <span className="score">0.94</span>
                <p>schema/customer_v3.sql</p>
                <span>authoritative</span>
              </div>
              <div className="evidence-row">
                <span className="score">0.88</span>
                <p>standards/grain_rules.md</p>
                <span>supporting</span>
              </div>
              <div className="eval-status">
                <div>
                  <span>Groundedness</span>
                  <strong>PASS</strong>
                </div>
                <div>
                  <span>Citations</span>
                  <strong>2 / 2</strong>
                </div>
                <div>
                  <span>Human review</span>
                  <strong className="pending">PENDING</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell experience-section">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>Five years across data, AI evaluation and operations.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.company}>
              <time>{item.years}</time>
              <div>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <div className="section-shell skills-inner">
          <div className="section-heading light">
            <p className="section-kicker">Technical range</p>
            <h2>Deep enough to build. Broad enough to connect the system.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell education-section">
        <div className="education-card">
          <p className="section-kicker">Education</p>
          <h2>M.Tech, AI & Data Science Engineering</h2>
          <p>Indian Institute of Technology (IIT) Patna · July 2026 — Present</p>
        </div>
        <div className="education-card secondary">
          <p className="section-kicker">Foundation</p>
          <h2>B.E. in Mechanical Engineering</h2>
          <p>UIET, Panjab University, Chandigarh · 2016 — 2020</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="section-kicker">Let&apos;s build something reliable</p>
          <h2>Data platforms first. Applied AI with control.</h2>
          <p>
            Open to Senior Data Engineering, Data Platform, Data & AI, and selected freelance
            engagements.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:kumarshivanand7@gmail.com">
              Email Shivanand
            </a>
            <a
              className="button button-secondary dark"
              href="/Shivanand_Kumar_Freelance_Resume.pdf"
              download
            >
              Freelance résumé
            </a>
          </div>
          <div className="contact-links">
            <a href="https://linkedin.com/in/shivachauhan">LinkedIn</a>
            <a href="https://www.hackerrank.com/profile/krshivan">HackerRank</a>
            <span>Bengaluru, India</span>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Shivanand Kumar</span>
        <span>Senior Data Engineer · Agentic AI & Data Platform Automation</span>
      </footer>
    </main>
  );
}
