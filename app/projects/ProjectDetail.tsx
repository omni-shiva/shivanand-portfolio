import Link from "next/link";
import type { PortfolioProject } from "./project-data";

export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  return (
    <main className="project-page">
      <header className="site-header project-site-header">
        <Link className="brand" href="/" aria-label="Shivanand Kumar portfolio home">
          <span className="brand-mark">SK</span>
          <span>Shivanand Kumar</span>
        </Link>
        <nav aria-label="Project navigation">
          <Link href="/#projects">All projects</Link>
          <a className="nav-cta" href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub source ↗
          </a>
        </nav>
      </header>

      <section className="project-hero">
        <div className="project-hero-grid" aria-hidden="true" />
        <div className="section-shell project-hero-inner">
          <Link className="back-link" href="/#projects">
            ← Back to public work
          </Link>
          <p className="project-status">
            <span /> Independent build · Synthetic data · CI passing
          </p>
          <p className="section-kicker">{project.cardLabel}</p>
          <h1>{project.title}</h1>
          <p className="project-lede">{project.lede}</p>
          <div className="project-hero-actions">
            <a className="button button-project-primary" href="#output">
              See verified output
            </a>
            <a
              className="button button-project-secondary"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Inspect source &amp; tests ↗
            </a>
          </div>
        </div>
      </section>

      <section className="project-metric-band">
        <div className="section-shell project-metric-inner">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
          <div>
            <strong>Human</strong>
            <span>approval boundary</span>
          </div>
        </div>
      </section>

      <section className="project-story section-shell">
        <div className="project-story-copy">
          <p className="section-kicker">Problem and ownership</p>
          <h2>A real engineering question, built to be inspected.</h2>
        </div>
        <div className="project-story-columns">
          <article>
            <span>01 · The problem</span>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>02 · My role</span>
            <p>{project.role}</p>
          </article>
        </div>
      </section>

      <section className="project-output-section" id="output">
        <div className="section-shell project-output-grid">
          <div className="project-output-copy">
            <p className="section-kicker">Verified output</p>
            <h2>Concrete behavior, not a concept slide.</h2>
            <p>{project.outputNote}</p>
            <div className="project-resource-links">
              <a href={project.readmeUrl} target="_blank" rel="noreferrer">
                Project README ↗
              </a>
              <a href={project.evaluationUrl} target="_blank" rel="noreferrer">
                Evaluation design ↗
              </a>
              <a href={project.ciUrl} target="_blank" rel="noreferrer">
                Passing CI ↗
              </a>
            </div>
          </div>
          <div className="output-console" aria-label="Abbreviated project output">
            <div className="output-console-bar">
              <span />
              <span />
              <span />
              <strong>verified-output.json</strong>
            </div>
            <pre>{project.output}</pre>
          </div>
        </div>
      </section>

      <section className="project-build-section section-shell">
        <div className="project-capabilities">
          <p className="section-kicker">What the repository proves</p>
          <h2>Designed, tested and documented end to end.</h2>
          <ul>
            {project.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
        <div className="project-architecture">
          <div className="architecture-heading">
            <span>Architecture flow</span>
            <a href={project.architectureUrl} target="_blank" rel="noreferrer">
              Design decisions ↗
            </a>
          </div>
          <ol>
            {project.architecture.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="project-boundary-section">
        <div className="section-shell project-boundary-inner">
          <div>
            <p className="section-kicker">Credibility boundary</p>
            <h2>Independent work, described honestly.</h2>
          </div>
          <p>{project.boundary}</p>
        </div>
      </section>

      <section className="next-project section-shell">
        <p className="section-kicker">Continue exploring</p>
        <Link href={project.nextProject.href}>
          <span>Next project</span>
          <strong>{project.nextProject.title}</strong>
          <b>→</b>
        </Link>
      </section>

      <footer>
        <span>© 2026 Shivanand Kumar</span>
        <span>Independent project · Source and evidence on GitHub</span>
      </footer>
    </main>
  );
}
