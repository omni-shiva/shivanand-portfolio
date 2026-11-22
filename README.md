# Shivanand Kumar — services and portfolio

Source for [shivanandkumar.in](https://shivanandkumar.in/). The homepage starts with
business challenges, describes data and AI services, and links to independent
project evidence. Professional experience at HP and Amazon is presented separately.

## Homepage

The approved editorial layout lives in `app/homepage.html`, with scoped styles in
`app/homepage.css`. `app/page.tsx` renders the complete content during static export;
`app/components/HomeInteractions.tsx` adds accessible tabs, enquiry selection,
mobile navigation and animation controls. Images are served from `public/services`.
No form submission or tracking service is introduced. The contact button opens an
email draft in the visitor's email application.

## Project pages

- `/projects/data-platform-reliability-agent/`
- `/projects/synthetic-data-print-recommendation-agent/`
- `/projects/constraint-aware-coding-agent-evals/`
- `/learning/pii-masking-lab/`, including existing notebook and CSV downloads

Project pages retain their styles and documented evidence boundaries. The public
site includes no resume download, private CV data or telephone number.

## Checks and publication

Next.js static export, React, TypeScript and pnpm. Node.js 22.13 or newer.

```sh
pnpm install --frozen-lockfile
pnpm run build
node --experimental-strip-types --test tests/*.test.mjs
```

The build generates the 1200×630 social card and retains older image URLs as aliases.
The existing GitHub Pages workflow builds and checks changes to `main`, then deploys
the `out/` artifact. Domain and DNS configuration remain unchanged.
