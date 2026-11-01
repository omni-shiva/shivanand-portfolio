# Shivanand Kumar - Portfolio

Personal portfolio for Shivanand Kumar, a Data & Applied AI Engineer building
reliable data platforms and controlled AI workflows.

## Live portfolio

[shivanandkumar.in](https://shivanandkumar.in/)

The source is aligned to the approved November 2026 résumé. Local changes are
not published until the existing deployment workflow completes successfully.

## Current site

- HP Inc.: Data Scientist II | Data & AI Platform Engineering, June 2024 to present
- AI-assisted modernisation of 50+ Databricks pipelines; contract-driven ODPS
  migration tooling with nine Copilot skills, source reviews, read-only parity
  checks and developer approval gates for CI/CD handoff
- Production PII masking/encryption, LLM case-note summaries, OntoBricks/MCP
  context, LangGraph/Claude operations automation, migration and observability
- Amazon: Business Analyst | SSD/AMXL - India Supply Chain Analytics,
  October 2022 to June 2024, covering SQL pipelines and operational analytics
- IIT Patna M.Tech (Online), AI & Data Science Engineering, July 2026 to present;
  current study, not a completed qualification
- One independent flagship and a separate PII learning notebook

Employer production work and independent public projects are presented
separately. The ODPS framework description establishes its review and handoff
controls; it does not claim that a sample contract package was deployed.

## Flagship project

**Data Platform Reliability Agent** is a FastAPI/Pydantic incident-diagnosis
service using synthetic data, tenant-scoped SQL and local Qdrant runbook retrieval.
It uses 256-dimensional feature-hashed embeddings, cosine similarity and keyword
rescoring. An optional OpenAI Responses API planner has a deterministic fallback.
The offline path is validated against 25 regression cases. It returns
approval-ready recovery previews and never executes remediation.

The case study links to source and evaluation documentation in
[`omni-shiva/shiva-applied-agentic`](https://github.com/omni-shiva/shiva-applied-agentic).
The synthetic-data print recommendation and constraint-aware evaluation projects
are not included in the public catalogue, navigation, sitemap or exported routes.

## Learning notebook

[PII Masking Lab](https://shivanandkumar.in/learning/pii-masking-lab/) is separate
from the flagship and HP production work. It provides a downloadable notebook
and synthetic CSV, entity definitions, candidate validation, deterministic
masking and measured rule-based failures. Live LLM evaluation and learner
practice remain pending. It is not a production privacy filter or certification.

## Technology and local checks

Next.js, React, TypeScript and pnpm. Requires Node.js 22.13 or newer.

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

Validate before publishing:

```bash
pnpm run build
node --experimental-strip-types --test tests/*.test.mjs
```

The existing `.github/workflows/deploy-pages.yml` builds the static `out`
export, checks pages, learning resources, metadata and content boundaries, then
publishes it to GitHub Pages on a push to `main` or an explicit workflow run.
No application-control data, private job-operation records, credentials or
public job-application demo are included in this portfolio.
