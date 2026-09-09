# Phase 0: Foundation

## Session 1 — 2026-09-08

- Scaffolded from family conventions (pages.yml byte-identical, port
  8090, .editorconfig/netlify.toml/vercel.json copied).
- Built the section engine: sections collection sorted by order,
  per-type partials with per-type css swept into the inline bundle,
  permalink:false via directory data file, zod validation.
- Debugging trail worth remembering:
  - YAML front matter rejects tab indentation; quote values containing
    colon+space.
  - `addDataSchema` does not exist in Eleventy 3.1.6.
  - Function-valued default exports in _data/*.js get called once with
    global data — not usable as per-template schemas (the blogs' global
    eleventyDataSchema.js is inert).
  - Named exports in a directory data file break its default export's
    application entirely.
  - Nunjucks filter args use call syntax `| filter(arg)`.
- Design system: dark-default inverted family theme, pre-paint inline
  guard, --color-accent/surface tokens, sticky blurred header, card
  grids, details-based FAQ.
- Demo content (Northlight Analytics), icons + OG generated via sharp.
- Verified: clean build, 6 composed sections, sitemap lists only real
  pages, single inline style tag, unknown section type fails with a
  file-named zod error.
