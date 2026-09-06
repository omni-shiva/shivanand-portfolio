# Shivanand Kumar - Portfolio

Personal portfolio for Shivanand Kumar, a Data & Applied AI Engineer focused on
Generative AI, Agentic AI and reliable enterprise data platforms built with
Databricks, Spark, Python and SQL.

## Live portfolio

[shivanandkumar.in](https://shivanandkumar.in/)

## Current site

- Recruiter-focused portfolio aligned to Data & Applied AI Engineering
- Production impact from HP and an experience snapshot spanning HP, Amazon, and BYJU'S
- Three dedicated project case studies with verified output, validation evidence,
  architecture notes, evaluation links, disclosed limitations, and GitHub source
- Professional profile, core capabilities, education, and contact links
- A concise engineering journey from mechanical systems to data platforms and Applied AI
- Responsive layout, structured data, sitemap, robots controls and social-sharing preview

The portfolio keeps employer production experience separate from independent
public project capability. The public projects use synthetic data and do not
contain employer code, data, configuration or confidential architecture.

## Technology

- Next.js and React
- TypeScript
- pnpm

## Run locally

Requires Node.js 22.13 or newer.

```bash
pnpm install
pnpm run dev
```

Validate a production build:

```bash
pnpm run build
node --experimental-strip-types --test tests/*.test.mjs
```

## Public projects

- Data Platform Reliability Agent
- Synthetic Data and Print Recommendation Agent
- Constraint-Aware Coding Agent Evaluation Lab

All three projects are independent public implementations built with synthetic
data. They are presented separately from production experience and link back to
their source, tests, evaluation design and passing CI in
[`omni-shiva/shiva-applied-agentic`](https://github.com/omni-shiva/shiva-applied-agentic).

## Learning projects

Focused learning experiments are shown in a separate, manually navigated
carousel below the three flagship projects.

- [PII Masking Lab](https://shivanandkumar.in/learning/pii-masking-lab/):
  a downloadable notebook and synthetic CSV, five entity definitions,
  candidate validation, deterministic masking and measured rule-based failures.
  Live LLM evaluation and learner practice remain pending; this is not a
  production privacy filter or a privacy certification.
- Browser Summary remains work in progress, with no claimed completed release.

The deployment workflow checks the exported portfolio, learning-page metadata,
downloads, content boundaries and carousel navigation logic before publishing.
