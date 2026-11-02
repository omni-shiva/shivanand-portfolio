# Shivanand Kumar - Portfolio

Source for the existing portfolio at [shivanandkumar.in](https://shivanandkumar.in/).
Data & Analytics Engineer | Applied AI. Data engineering and analytics lead the presentation, with practical Applied AI
as an additional capability. Employer experience and the AI-assisted independent
project are presented separately.
The work section links to the public Codex activity profile as a tooling reference.

## Pages

- `/`: data engineering, analytics, experience, education and contact
- `/projects/data-platform-reliability-agent/`: the single independent project,
  using synthetic data and read-only decision support

The previous learning notebook is replaced by a redirect to the retained project;
its learning UI and downloads are removed. Retired entries are absent from the
catalogue and sitemap. Legacy social-image URLs serve the new card. Claims about specialist production AI,
LangGraph, unsupported numerical outcomes and professional certifications are
excluded from this revision.
Selected experience and outcomes follow the owner's final approved wording;
the website contains no public résumé, résumé data file, PDF download or phone.

## Local checks

Next.js static export, React, TypeScript and pnpm. Requires Node.js 22.13 or newer.

```bash
pnpm install --frozen-lockfile
pnpm run build
node --test tests/*.test.mjs
```

The existing GitHub Pages workflow remains the publication mechanism. A local
build or preview does not establish publication. Review the public copy before any approved release. Professional contact is by email only.
