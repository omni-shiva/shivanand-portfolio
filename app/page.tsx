/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { projects } from "./projects/project-data";
const identity = { name: "Shivanand Kumar", email: "kumarshivanand7@gmail.com", location: "Bengaluru, India" };
const career = [
  { company: "HP Inc.", role: "Data Scientist II | Data and AI Platform Engineering", date: "Jun 2024 - Present", detail: "Databricks and PySpark pipeline modernisation, operational AI recommendations, protected data workflows, migration and platform reliability. I build reusable tools with output-parity checks and developer approval before release." },
  { company: "Amazon", date: "Jul 2023 - Jun 2024", role: "Business Analyst | Supply Chain Optimization Technologies (SCOT)", detail: "Built Python/Pandas inventory-rebalancing recommendations from SQL-sourced demand data, saving 20+ hours per week. Supported the IXD–AMXL launch and nationwide SSD planning; automated DRR analysis reduced weekly manual processing by 30%. Independently led 12+ supply-chain analytics and automation projects." },
  { company: "Amazon", date: "Oct 2022 - Jul 2023", role: "Machine Learning Data Associate II | Hyderabad", detail: "Reviewed reimbursement cases through a ten-section workflow covering case context, prior status, delivery milestones and missing-product evidence. Converted reviewed evidence into structured question–answer annotations for model-training feedback." },
  { company: "BYJU’S", date: "Oct 2021 - Oct 2022", role: "Centre Head - Operations", detail: "Led a 16-member team as the centre grew to 298 students. Partnered with analytics colleagues on MySQL, Tableau and spreadsheet dashboards to guide interventions and service delivery, contributing to a top-performing North India centre with a 5-star rating." },
];

const work = [
  { label: "Pipeline modernisation", title: "Legacy Databricks workflows, modernised", description: "A contract-driven ODPS coding agent orchestrates reusable skills with YAML data contracts, generated Python utilities and read-only output-parity checks. Developers approve changes before release.", proof: ["50+ legacy pipelines", "Nine reusable skills", "Developer approval gates"] },
  { label: "Operational AI", title: "Root-cause analysis with relevant historical fixes", description: "The KLO Recommendation Engine combines LangGraph and Claude Sonnet notebook-level root-cause analysis with semantic retrieval of approved historical fixes using Databricks SQL ai_similarity() and Unity Catalog.", proof: ["40 production Databricks jobs", "Approximately 70% less manual investigation and remediation"] },
  { label: "PII protection and enrichment", title: "Protected data and useful case-note context", description: "Databricks workflows for PII masking and OpenPGP encryption using Presidio, spaCy and domain rules, alongside LLM-generated summaries for operational review.", proof: ["PII masking", "OpenPGP encryption", "LLM-generated summaries"] },
  { label: "Pipeline migration", title: "Reusable tools across migration routes", description: "Reused coding-agent skills and logging/refactoring utilities for Redshift-to-Databricks migration, Splunk logs moving to Unity Catalog-governed tables and Databricks Runtime 13.3-to-17.x upgrades. Separate serverless migrations improved job runtime.", proof: ["40+ production pipelines", "Approximately 90% less manual migration effort", "25–30% less runtime per serverless-migrated job"] },
  { label: "Processing optimisation", title: "Less repeated work, faster processing", description: "Vectorized IP lookups and LRU caching reduced repeated mapping work in targeted firmware and Cloudflare logs. Separately, Spark deduplication resolved a Hermes database issue.", proof: ["Approximately 75% less targeted log runtime", "21 billion → 400 million records"] },
  { label: "Pipeline monitoring", title: "Checks and observability for reliable operations", description: "Automated recurring operational checks and added SLA and incident observability, contributing to enterprise infrastructure savings.", proof: ["54 pipelines", "85–90% fewer manual checks", "Approximately $1.55M annual savings contribution"] },
];

export default function Home() {
  const person = {
    "@context": "https://schema.org", "@type": "Person", name: identity.name,
    url: "https://shivanandkumar.in/", jobTitle: "Data & Applied AI Engineer", description: "Data and Applied AI engineering across Databricks pipelines, operational AI, supply-chain BI and data platform reliability.",
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "University Institute of Engineering and Technology, Panjab University" }],
    memberOf: { "@type": "OrganizationRole", roleName: "M.Tech student, AI & Data Science Engineering (Online), Jul 2026 - Present", memberOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Patna" } },
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    knowsAbout: ["Data Engineering", "Databricks", "PySpark", "SQL", "Python", "Pandas", "Analytics", "Data Quality", "LangGraph", "RAG", "Retrieval Evaluation", "MLflow", "Applied AI"],
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shivanand Kumar, back to top"><img className="brand-mark" src="/shivanand-logo-180.png" alt="" /><span>{identity.name}</span></a>
        <nav aria-label="Primary navigation"><a className="nav-mobile-link" href="#work">Work</a><a className="nav-mobile-link" href="#projects">Projects</a><a className="nav-cta" href="#contact">Contact</a></nav>
      </header>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-visual" aria-hidden="true">
          <div className="agent-flow"><span className="flow-route" /><span className="flow-signal" />
            <div className="flow-node flow-context"><span>01</span><strong>Source data</strong><small>Contracts · business rules</small></div>
            <div className="flow-node flow-skills"><span>02</span><strong>Transform</strong><small>SQL · Python · PySpark</small></div>
            <div className="flow-core"><span>DATA</span><strong>Workflow</strong></div>
            <div className="flow-node flow-validation"><span>04</span><strong>Validate</strong><small>Quality · logs · parity</small></div>
            <div className="flow-node flow-approval"><span>05</span><strong>Deliver</strong><small>Reporting · review</small></div>
          </div><img className="hero-portrait" src="/shivanand-kumar-portrait.jpg" alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{identity.location}</p>
          <a className="iit-chip" href="https://www.iitp.ac.in/" target="_blank" rel="noreferrer" aria-label="IIT Patna M.Tech programme, ongoing"><img src="/iit-patna-logo.png" alt="" /><span><strong>IIT Patna</strong>M.Tech · AI &amp; Data Science Engineering · Ongoing</span></a>
          <h1>Data &amp; Applied AI Engineer</h1><p className="hero-skills">Data Engineering · BI &amp; Analytics · Applied AI</p>
          <p className="hero-summary">I build reliable data platforms and practical AI workflows at HP, from Databricks pipeline modernisation to retrieval-supported incident diagnosis. My previous experience at Amazon combines supply-chain analytics, Python/SQL automation and structured model-training feedback.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work</a><a className="button button-secondary" href="#projects">View projects</a></div>
        </div>
      </section>
      <section className="impact-section" id="work"><div className="section-shell">
        <div className="section-intro dark"><div><p className="section-kicker">HP · Data and AI Platform Engineering</p><h2>Reliable data. Useful analysis.</h2></div><p>Selected HP contributions across pipeline modernisation, operational AI, protected data workflows, migration and platform reliability.</p></div>
        <div className="impact-grid data-work-grid">{work.map((item, index) => <article className="impact-card" key={item.title}><div className="impact-meta"><span>0{index + 1}</span><span>{item.label}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="proof-pills">{item.proof.map(label => <span key={label}>{label}</span>)}</div></article>)}</div>
        <p className="tooling-note">AI development tools: GitHub Copilot · Claude ·  <a href="https://chatgpt.com/u/kumarshivanand7" target="_blank" rel="noopener noreferrer" aria-label="Codex public activity profile, opens in a new tab">Codex ↗</a></p>
      </div></section>
      <section className="profile-section section-shell" id="profile">
        <div className="profile-main">
          <div className="section-intro"><div><p className="section-kicker">Professional experience</p><h2>Data platforms and operational context.</h2></div><p>My work spans enterprise data pipelines, business analysis and centre operations, with an emphasis on reliable inputs and useful operational outputs.</p></div>
          <div className="career-grid">{career.map(item => <article key={item.company + item.role}><div><h3>{item.company}</h3><p>{item.date}</p></div><strong>{item.role}</strong><p>{item.detail}</p></article>)}</div>
        </div>
        <aside className="profile-sidebar">
          <div className="education-compact"><img src="/iit-patna-logo.png" alt="" /><div><span>Current education</span><strong>M.Tech (Online) · AI &amp; Data Science Engineering</strong><p>IIT Patna · Jul 2026 - Present · In progress · Current CGPA: 9.4/10</p></div></div>
          <div className="education-secondary"><img src="/uiet-panjab-university-logo.png" alt="" /><p><strong>B.E. Mechanical Engineering</strong>UIET, Panjab University · 2016 - 2020</p></div>
          <div className="skills-compact"><span>Core strengths</span><div>{["SQL", "Python & Pandas", "PySpark", "Databricks", "Data quality", "Data modelling", "BI & Analytics", "Tableau", "Databricks AI/BI", "Reporting automation", "Unity Catalog", "Delta Lake", "LangGraph", "RAG & retrieval evaluation", "Vector embeddings & similarity search", "MLflow tracing", "MCP", "AWS S3, Redshift & Glue", "PII masking & OpenPGP"].map(skill => <strong key={skill}>{skill}</strong>)}</div></div>
        </aside>
      </section>
      <section className="projects-section" id="projects"><div className="section-shell">
        <div className="section-intro">
          <div><p className="section-kicker">Independent projects</p><h2>From data pipelines to AI evaluation</h2></div>
          <p>Three builds with synthetic data, reproducible experiments and source code. Each case study shows what was measured and what still needs validation.</p>
        </div>
        <div className="project-grid">{projects.map(project => (
          <article className="project-card" key={project.slug}>
            <div className="project-card-meta"><span>{project.cardLabel}</span></div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-output-preview"><span>Example result</span><strong>{project.outputHeadline}</strong></div>
            <div className="project-card-actions">
              <Link className="button button-primary" href={"/projects/" + project.slug + "/"}>Read case study →</Link>
              <a href={project.repoUrl} target="_blank" rel="noreferrer">Source on GitHub ↗</a>
            </div>
          </article>
        ))}</div>
        <section className="learning-projects" id="learning-projects" aria-labelledby="learning-projects-title">
          <div className="section-intro">
            <div><p className="section-kicker">Learning project</p><h2 id="learning-projects-title">PII Masking Lab</h2></div>
            <p>A Python notebook that tests what a rules-based detector finds and misses in synthetic support tickets.</p>
          </div>
          <div className="learning-actions">
            <Link className="button button-primary" href="/learning/pii-masking-lab/">Read the walkthrough →</Link>
            <a href="/learning/pii-masking-lab.zip" download>Download notebook and code ↓</a>
          </div>
        </section>
      </div></section>
      <section className="contact-section" id="contact"><div className="section-shell contact-inner"><div><p className="section-kicker">Professional contact</p><h2>Let&apos;s connect around data.</h2><p>Data engineering, analytics and practical Applied AI.</p></div><div className="contact-actions"><a className="button button-light" href={"mailto:" + identity.email}>Email Shivanand</a></div></div></section>
      <footer><span>© 2026 {identity.name}</span><span>Data &amp; Applied AI Engineer</span></footer>
    </main>
  );
}
