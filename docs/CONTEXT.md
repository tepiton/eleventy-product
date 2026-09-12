---
phase: 0
phase_name: foundation
updated: 2026-09-11
last_commit: e469461
---

# Current Focus

Foundation build complete: section engine, page layout, mimeo deploy
manifest, and centralized branding are all in and verified. Published
to tepiton/eleventy-product and living in TEMPLATES/ - nothing open in
this repo.

# Active Tasks

None open in this repo.

# Context

- Section engine, design system, and demo content are in and verified
  (clean build, schema fires on bad front matter, no stray section
  pages, css fully inlined per page)
- Subpages use layouts/page.njk (hero + stats/cards/projects blocks),
  shared with eleventy-service - keep them in sync
- Branding (email, accent palette) is centralized in metadata.js; a
  rebrand is a one-file edit (see DEC-P4)
- Demo prose renders through nunjucks so it interpolates
  {{ metadata.title }} where frontmatter can't (see DEC-P5)
- Demo brand: Northlight Analytics (placeholder, de-personalized)
- Cross-cutting decisions live in the kincaid meta-repo docs/
  (~/projects/kincaid/docs/DECISIONS.md); this file tracks repo-local
  state only

# Next Session

No open work. Pick up here only when new feature work is requested.
