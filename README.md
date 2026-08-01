# Shivanand Kumar — Portfolio

Personal portfolio for Shivanand Kumar, a Senior Data Engineer focused on
reliable data platforms, AI-driven engineering automation, and enterprise-scale
data systems.

## Live portfolio

[shivanandkumar.in](https://shivanandkumar.in/)

## Current site

- Recruiter-focused one-page portfolio
- Production-impact highlights from HP, Amazon, and BYJU'S
- Two dedicated project case studies with verified output, validation evidence,
  architecture notes, evaluation links, and GitHub source
- Professional profile, core capabilities, education, and contact links
- Downloadable Senior Data Engineer résumé
- Responsive layout and social-sharing preview

The portfolio keeps production Data Engineering experience separate from
Applied AI learning and project capability.

## Technology

- Next.js and React
- TypeScript
- vinext and Cloudflare Workers-compatible output
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
node --test tests/rendered-html.test.mjs
```

## Public projects

- Data Platform Reliability Agent
- Synthetic Data and Print Recommendation Agent

Both projects are independent portfolio implementations built with synthetic
data. They are presented separately from production experience and link back to
their source, tests, evaluation design, and passing CI in
[`omni-shiva/shiva-applied-agentic`](https://github.com/omni-shiva/shiva-applied-agentic).
