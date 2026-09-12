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

## Session 2 - 2026-09-09

- Subpages had no styling beyond the base skeleton. Added a shared
  layouts/page.njk (page hero band with eyebrow/title/lede, prose
  measure body) plus frontmatter-driven blocks: stats row, cards grid,
  projects list with tag chips, wide mode.
- Default layout switched to page.njk via content.11tydata.js;
  index.njk already pinned base.njk explicitly, so homepages are
  unchanged. 404 inherits the page treatment too.
- Rewrote all four subpages with real frontmatter and demo copy
  (keeping eleventyNavigation - YAML object form works fine).
- Verified in-browser: hero bands centered with border, 3-column
  contact cards, 4 project rows with 9 tag chips, nav intact, no
  horizontal overflow.

## Session 3 - 2026-09-10/11

- Added mimeo.template.json (js-key url -> https://{domain}/, url
  placeholder normalized to https://example.com/); trimmed
  author.email/author.url since no layout read them.
- Centralized branding in metadata.js: email and a brand block of
  [dark, light] accent pairs; base.njk re-emits accent/link tokens from
  it and generate-icons.mjs reads its accent from the same source - a
  rebrand is now one file. Page cards gained useSiteEmail: true
  (mailto metadata.email); the contact page's General card uses it,
  support/security stay as editable example.com placeholders. Fixed
  dark link-hover to accent-strong (#9dbaff) matching the brand-driven
  tokens. mimeo.template.json email parameterized (hello@{domain}) same
  as url. README gained a Make-it-yours checklist.
- Made demo prose follow the brand: hero/features/about bodies render
  through nunjucks (markdownTemplateEngine: njk) so
  {{ metadata.title }} interpolates; frontmatter fields can't
  interpolate, so feature/showcase/faq copy, the about lede, and
  app-preview.svg's aria-label were rewritten brand-neutral. metadata.js
  hoists the name to a const so description follows title edits too.

See: DEC-P4, DEC-P5
