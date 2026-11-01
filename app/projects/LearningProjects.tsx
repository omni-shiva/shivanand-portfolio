"use client";

import { useState } from "react";
import { carouselIndex } from "./carousel-index";
import { learningProjects } from "./learning-project-data";

export default function LearningProjects() {
  const [active, setActive] = useState(0);
  const count = learningProjects.length;
  const move = (direction: number) =>
    setActive((current) => carouselIndex(current, direction, count));

  if (count === 0) return null;

  return (
    <section
      className="learning-projects"
      id="learning-projects"
      aria-labelledby="learning-heading"
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="learning-heading-row">
        <div>
          <p className="section-kicker">The learning notebook</p>
          <h3 id="learning-heading">Learning projects</h3>
          <p>Focused experiments, working notes and what still needs testing.</p>
        </div>
        {count > 1 && <div className="learning-controls" aria-label="Learning project navigation">
          <span className="learning-count" aria-live="polite" aria-atomic="true">
            {active + 1} / {count}
            <span className="learning-sr-only">: {learningProjects[active].title}</span>
          </span>
          <button
            type="button"
            aria-label="Previous learning project"
            aria-controls="learning-slides"
            disabled={count < 2}
            onClick={() => move(-1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Next learning project"
            aria-controls="learning-slides"
            disabled={count < 2}
            onClick={() => move(1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>}
      </div>

      <div id="learning-slides">
        {learningProjects.map((project, index) => (
          <div
            className="learning-slide"
            key={project.slug}
            hidden={active !== index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}: ${project.title}`}
          >
            <div className="learning-copy">
              <span className="learning-status">{project.status}</span>
              <p className="learning-topic">{project.topic}</p>
              <h4>{project.href ? <a href={project.href}>{project.title} ↗</a> : project.title}</h4>
              <p className="learning-summary">{project.summary}</p>
              <ul className="learning-skills" aria-label="Topics explored">
                {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              <div className="learning-actions">
                <a className="button button-primary" href={project.href}>
                  Open learning notebook →
                </a>
                <a href="/learning/pii-masking-lab.zip" download>Download code ↓</a>
              </div>
              <p className="learning-note">{project.note}</p>
            </div>

              <aside className="learning-evidence" aria-label="PII masking example and measured limitation">
                <p className="learning-panel-label">Inside the notebook</p>
                <div className="learning-example">
                  <span>Fictional input</span>
                  <code>Send the setup guide to alex@example.com.</code>
                </div>
                <div className="learning-flow" aria-label="Masking workflow">
                  <span>Detect</span><b aria-hidden="true">→</b><span>Validate</span><b aria-hidden="true">→</b><span>Mask</span>
                </div>
                <div className="learning-example learning-example-output">
                  <span>Python replacement</span>
                  <code>Send the setup guide to [EMAIL].</code>
                </div>
                <div className="learning-result">
                  <strong>17 / 25</strong>
                  <p>Sensitive occurrences found by the rules baseline. It missed 8 and flagged 1 non-sensitive value.</p>
                </div>
                <p className="learning-caveat">Measured rule-based result, not an LLM score. Masking is not encryption.</p>
              </aside>

          </div>
        ))}
      </div>
      {count > 1 && <div className="learning-pagination" aria-label="Choose a learning project">
        {learningProjects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            aria-label={`Show ${project.title}`}
            aria-current={active === index ? "true" : undefined}
            onClick={() => setActive(index)}
          ><span aria-hidden="true" /></button>
        ))}
      </div>}
    </section>
  );
}
