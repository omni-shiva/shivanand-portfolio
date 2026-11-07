/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { projects } from "./projects/project-data";
const identity = { name: "Shivanand Kumar", email: "kumarshivanand7@gmail.com", location: "Bengaluru, India" };
const career = [
  { company: "HP Inc.", role: "Data Scientist II | Data and AI Platform Engineering", date: "Jun 2024 - Present", detail: "Databricks pipeline modernisation, ontology-backed knowledge graphs and hybrid GraphRAG for pipeline troubleshooting, alongside PySpark optimisation and platform reliability." },
  { company: "AMAZON", date: "Oct 2022 - Jun 2024", role: "Business Analyst | SSD/AMXL - India Supply Chain Analytics", detail: "Built SQL pipelines and BI datasets for supply-chain reporting. Automated reporting with SQL and Python, reducing manual effort by approximately 70%, and improved CPT query runtime by approximately 30%. Received Minesweeper and Automation Expert awards." },
  { company: "BYJU’S", date: "Oct 2021 - Oct 2022", role: "Centre Head - Operations", detail: "Led a 16-member cross-functional team and built SQL-driven Student Performance Index dashboards combining attendance, assessment and tutor metrics." },
];

const work = [
  { label: "Pipeline modernisation", title: "Legacy Databricks workflows, modernised", description: "AI-assisted refactoring and a contract-driven ODPS framework, with YAML data contracts, shared-runtime Python utilities, source-backed review and output-parity checks.", proof: ["50+ legacy pipelines", "Nine reusable Copilot skills", "Developer approval gates"] },
  { label: "PII protection and enrichment", title: "Protected data and useful case-note context", description: "Databricks workflows for PII detection, masking and OpenPGP encryption using Presidio, spaCy and domain rules, alongside LLM-generated summaries for operational review and analytics.", proof: ["PII masking", "OpenPGP encryption", "LLM-generated summaries"] },
  { label: "Data-aware engineering", title: "Knowledge graphs and GraphRAG for pipeline troubleshooting", description: "Designed and deployed an OntoBricks knowledge graph on Databricks using Unity Catalog data and RDF/OWL and R2RML mappings. Built hybrid GraphRAG combining vector search and graph traversal, with read-only retrieval in GitHub Copilot via MCP.", proof: ["Hybrid GraphRAG", "Read-only Copilot retrieval", "Approximately $250K annualized team savings contribution"] },
  { label: "Pipeline migration", title: "Reusable migration and refactoring tools", description: "Migrated and deployed enterprise production pipelines with a reusable logging and refactoring framework.", proof: ["40+ production pipelines", "Approximately 90% less manual migration effort", "Approximately 25-30% less runtime per migrated job"] },
  { label: "Processing optimisation", title: "Efficient PySpark transformations", description: "Optimised partitioning, joins and caching, and implemented Spark deduplication to reduce redundant processing.", proof: ["Approximately 75% less runtime", "21 billion → 400 million records"] },
  { label: "Pipeline monitoring", title: "Routine checks with execution evidence", description: "Automated monitoring and recurring operational checks through reusable execution logging, validation and incident-diagnosis utilities.", proof: ["54 pipelines", "85-90% fewer manual checks"] },
  { label: "Lakehouse observability", title: "Pipeline health, SLAs and incident diagnosis", description: "Developed observability for lakehouse operations, contributing to annual infrastructure savings.", proof: ["Pipeline health and SLA tracking", "Approximately $1.55M annual savings contribution"] },
];

export default function Home() {
  const person = {
    "@context": "https://schema.org", "@type": "Person", name: identity.name,
    url: "https://shivanandkumar.in/", jobTitle: "Data & Applied AI Engineer", description: "Data and Applied AI engineering at HP and Amazon across Databricks pipelines, knowledge graphs, GraphRAG and supply-chain BI.",
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "University Institute of Engineering and Technology, Panjab University" }],
    memberOf: { "@type": "OrganizationRole", roleName: "M.Tech student, AI & Data Science Engineering (Online), Jul 2026 - Present", memberOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Patna" } },
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    knowsAbout: ["Data Engineering", "Databricks", "PySpark", "SQL", "Python", "Pandas", "Analytics", "Data Quality", "Knowledge Graphs", "GraphRAG", "RAG", "OntoBricks", "Applied AI"],
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shivanand Kumar, back to top"><img className="brand-mark" src="/shivanand-logo-180.png" alt="" /><span>{identity.name}</span></a>
        <nav aria-label="Primary navigation"><a className="nav-mobile-link" href="#work">Work</a><a className="nav-mobile-link" href="#projects">Project</a><a className="nav-cta" href="#contact">Contact</a></nav>
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
          <p className="hero-summary">At HP, I modernise Databricks pipelines and build ontology-backed knowledge graphs and GraphRAG retrieval for pipeline troubleshooting. At AMAZON, I built BI datasets and automated supply-chain reporting with SQL and Python.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work</a><a className="button button-secondary" href="#projects">View project</a></div>
        </div>
      </section>
      <section className="impact-section" id="work"><div className="section-shell">
        <div className="section-intro dark"><div><p className="section-kicker">HP · Data and AI Platform Engineering</p><h2>Reliable data. Useful analysis.</h2></div><p>Selected HP contributions across pipeline modernisation, knowledge graphs and GraphRAG, protected data workflows, migration and platform reliability.</p></div>
        <div className="impact-grid data-work-grid">{work.map((item, index) => <article className="impact-card" key={item.title}><div className="impact-meta"><span>0{index + 1}</span><span>{item.label}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="proof-pills">{item.proof.map(label => <span key={label}>{label}</span>)}</div></article>)}</div>
        <p className="tooling-note">AI development tools: GitHub Copilot · Claude ·  <a href="https://chatgpt.com/u/kumarshivanand7" target="_blank" rel="noopener noreferrer" aria-label="Codex public activity profile, opens in a new tab">Codex ↗</a></p>
      </div></section>
      <section className="profile-section section-shell" id="profile">
        <div className="profile-main">
          <div className="section-intro"><div><p className="section-kicker">Professional experience</p><h2>Data platforms and operational context.</h2></div><p>My work spans enterprise data pipelines, business analysis and centre operations, with an emphasis on reliable inputs and useful operational outputs.</p></div>
          <div className="career-grid">{career.map(item => <article key={item.company}><div><h3>{item.company}</h3><p>{item.date}</p></div><strong>{item.role}</strong><p>{item.detail}</p></article>)}</div>
        </div>
        <aside className="profile-sidebar">
          <div className="education-compact"><img src="/iit-patna-logo.png" alt="" /><div><span>Current education</span><strong>M.Tech (Online) · AI &amp; Data Science Engineering</strong><p>IIT Patna · Jul 2026 - Present · In progress</p></div></div>
          <div className="education-secondary"><img src="/uiet-panjab-university-logo.png" alt="" /><p><strong>B.E. Mechanical Engineering</strong>UIET, Panjab University · 2016 - 2020</p></div>
          <div className="skills-compact"><span>Core strengths</span><div>{["SQL", "Python & Pandas", "PySpark", "Databricks", "Data quality", "Data modelling", "BI & Analytics", "Tableau", "Databricks AI/BI", "Reporting automation", "Unity Catalog", "Delta Lake", "Knowledge graphs", "OntoBricks", "RDF/OWL & R2RML", "RAG & GraphRAG", "Hybrid retrieval", "MCP", "Qdrant", "FastAPI & Pydantic"].map(skill => <strong key={skill}>{skill}</strong>)}</div></div>
        </aside>
      </section>
      <section className="projects-section" id="projects"><div className="section-shell">
        <div className="section-intro"><div><p className="section-kicker">Independent project</p><h2>Data Platform Reliability Agent</h2></div><p>An AI-assisted independent build using synthetic data. The case study describes read-only decision support, source code and validation limits.</p></div>
        <div className="project-grid single-project-grid">{projects.map(project => <article className="project-card" key={project.slug}><div className="project-card-meta"><span>Synthetic data</span><span>AI-assisted build</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="project-output-preview"><span>Decision support</span><strong>{project.outputHeadline}</strong></div><div className="project-card-actions"><Link className="button button-primary" href={"/projects/" + project.slug + "/"}>Read case study →</Link><a href={project.repoUrl} target="_blank" rel="noreferrer">Source on GitHub ↗</a></div></article>)}</div>
      </div></section>
      <section className="contact-section" id="contact"><div className="section-shell contact-inner"><div><p className="section-kicker">Professional contact</p><h2>Let&apos;s connect around data.</h2><p>Data engineering, analytics and practical Applied AI.</p></div><div className="contact-actions"><a className="button button-light" href={"mailto:" + identity.email}>Email Shivanand</a></div></div></section>
      <footer><span>© 2026 {identity.name}</span><span>Data &amp; Applied AI Engineer</span></footer>
    </main>
  );
}
