const featuredWork = [
  {
    number: "01",
    title: "AI-driven data-product contract automation",
    summary:
      "Led a five-phase agentic control loop that turned authoritative pipeline context into structured, reviewable data-product contracts.",
    outcomes: ["47 Databricks pipelines", "Days to hours", "20+ transformations"],
    stack: ["Agent skills", "Waza evaluation", "Human approval"],
  },
  {
    number: "02",
    title: "AI-powered operational support agent",
    summary:
      "Built and deployed an agentic workflow that retrieves operational context, correlates failure signals and recommends corrective actions.",
    outcomes: ["54 production pipelines", "85–90% fewer manual checks", "Actionable failure context"],
    stack: ["RAG", "Vector database", "Knowledge graph"],
  },
  {
    number: "03",
    title: "Platform migration and observability",
    summary:
      "Led logging standardization through a reusable migration framework while improving SLA and incident-diagnosis visibility.",
    outcomes: ["40 production pipelines", "Zero migration failures", "~$1.55M savings contribution"],
    stack: ["Migration automation", "Observability", "SLA monitoring"],
  },
];

const additionalOutcomes = [
  {
    title: "Distributed data optimization",
    description: "Partitioning, joins, caching and distributed deduplication across high-volume workloads.",
    outcomes: ["~75% faster runtime", "21B → 400M rows"],
  },
  {
    title: "SQL analytics automation",
    description: "Production SQL pipelines, operational metrics and BI datasets for supply-chain decisions.",
    outcomes: ["15M+ users supported", "~70% less manual reporting", "~30% faster runtime"],
  },
];

const skillGroups = [
  {
    title: "Primary strengths",
    skills: ["Agentic AI", "Advanced SQL", "Python", "Databricks"],
  },
  {
    title: "Data platform engineering",
    skills: ["PySpark", "Delta Lake", "Unity Catalog", "Data modeling", "Data quality", "Observability"],
  },
  {
    title: "AI systems & evaluation",
    skills: ["Agent workflows", "RAG", "Vector databases", "Knowledge graphs", "Waza evaluation", "LLM evaluation"],
  },
  {
    title: "Supporting cloud",
    skills: ["AWS S3", "Glue", "Redshift"],
  },
];

const experience = [
  {
    years: "2024 — Present",
    company: "HP",
    role: "Data Scientist II · Data Engineering & AI Platform Automation",
    detail:
      "Agentic contract automation across 47 Databricks pipelines, an AI-powered operational support agent across 54 production pipelines, evaluation controls, migration frameworks, observability and distributed optimization.",
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
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University Institute of Engineering and Technology, Panjab University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Patna",
      },
    ],
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
          <span className="brand-name">Shivanand Kumar</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#lab">Public lab</a>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <section className="hero mature-hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-backdrop-words" aria-hidden="true">
          <span>SQL</span>
          <span>PYTHON</span>
          <span>DATABRICKS</span>
          <span>AGENTIC AI</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            Bengaluru · Open to remote & flexible opportunities
          </p>

          <a
            className="hero-credential"
            href="https://www.iitp.ac.in/"
            target="_blank"
            rel="noreferrer"
            aria-label="IIT Patna M.Tech programme"
          >
            <img src="/iit-patna-logo.png" alt="" />
            <span>
              <strong>IIT Patna</strong>
              M.Tech · AI & Data Science Engineering · 2026–Present
            </span>
          </a>

          <h1>
            Senior Data Engineer building <span>reliable data platforms</span> and{" "}
            <span>controlled Agentic AI workflows.</span>
          </h1>

          <p className="hero-role">
            SQL · Python · Databricks <span>|</span> Production automation, evaluation and platform reliability
          </p>

          <p className="hero-copy">
            Five years across HP, Amazon and BYJU&apos;S, connecting production engineering with
            measurable business impact.
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
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected production outcomes">
        <div className="section-shell proof-strip-inner">
          <article>
            <strong>47</strong>
            <div>
              <span>Databricks pipelines</span>
              <p>Agentic contract automation</p>
            </div>
          </article>
          <article>
            <strong>54</strong>
            <div>
              <span>Production pipelines</span>
              <p>85–90% fewer manual checks</p>
            </div>
          </article>
          <article>
            <strong>~75%</strong>
            <div>
              <span>Runtime reduction</span>
              <p>Distributed workload optimization</p>
            </div>
          </article>
        </div>
      </section>

      <section className="work-section mature-work" id="work">
        <div className="section-shell">
          <div className="section-heading light compact-heading">
            <p className="section-kicker">Selected production impact</p>
            <h2>Evidence first. Confidentiality intact.</h2>
            <p>
              Three ownership stories that connect engineering decisions with measurable outcomes.
            </p>
          </div>

          <div className="case-grid featured-case-grid">
            {featuredWork.map((project) => (
              <article className="case-card mature-case-card" key={project.number}>
                <div className="case-meta">
                  <span>{project.number}</span>
                  <span>Production</span>
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

          <div className="additional-outcomes">
            <p className="section-kicker">Additional outcomes</p>
            {additionalOutcomes.map((item) => (
              <article key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="outcome-list">
                  {item.outcomes.map((outcome) => (
                    <span key={outcome}>{outcome}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell experience-section mature-section" id="experience">
        <div className="section-heading compact-heading">
          <p className="section-kicker">Experience</p>
          <h2>Production ownership across data, AI and operations.</h2>
          <p>
            A career path from operational leadership to analytics, data platforms and Agentic AI automation.
          </p>
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

      <section className="section-shell education-section mature-education" id="education">
        <div className="education-card featured">
          <a
            className="education-logo"
            href="https://www.iitp.ac.in/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the official IIT Patna website"
          >
            <img src="/iit-patna-logo.png" alt="Indian Institute of Technology Patna emblem" />
          </a>
          <div>
            <p className="section-kicker">Current programme</p>
            <h2>M.Tech, AI & Data Science Engineering</h2>
            <p>Indian Institute of Technology (IIT) Patna · July 2026 — Present</p>
            <span className="education-note">
              Industry-integrated postgraduate study aligned with AI-ready data platforms.
            </span>
          </div>
        </div>

        <div className="education-card secondary">
          <a
            className="education-logo uiet-logo"
            href="https://uiet.puchd.ac.in/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the official UIET Panjab University website"
          >
            <img
              src="/uiet-panjab-university-logo.png"
              alt="University Institute of Engineering and Technology emblem"
            />
          </a>
          <div>
            <p className="section-kicker">Engineering foundation</p>
            <h2>B.E. in Mechanical Engineering</h2>
            <p>UIET, Panjab University, Chandigarh · 2016 — 2020</p>
          </div>
        </div>
      </section>

      <section className="section-shell lab-section mature-lab" id="lab">
        <div className="lab-copy">
          <p className="section-kicker">Public lab · In development</p>
          <h2>AI-ready pipeline knowledge platform</h2>
          <p>
            A non-confidential portfolio project combining deterministic parsing, hybrid retrieval,
            structured generation, citations, automated evaluation and human approval.
          </p>
          <div className="lab-boundary">
            <strong>Public project boundary</strong>
            <span>
              This project extends production data-platform and AI-automation experience into a
              reusable portfolio architecture with separate retrieval and answer evaluation.
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

      <section className="skills-section mature-skills">
        <div className="section-shell skills-inner">
          <div className="section-heading light">
            <p className="section-kicker">Technical range</p>
            <h2>Focused strengths, clearly separated.</h2>
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

      <section className="contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="section-kicker">Open to the right conversation</p>
          <h2>Senior Data Engineering. Data platforms. Applied AI.</h2>
          <p>Remote-first and flexible opportunities, plus selected freelance engagements.</p>
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
