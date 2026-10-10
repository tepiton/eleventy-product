---
phase: 1
phase_name: maintenance
updated: 2026-10-09
last_commit: 13c58fd
---

# Current Focus

README cleanup complete (Phase 1): retired folio link dropped from
the family list, Deploy section corrected to Node 24. Nothing else
open in this repo.

# Active Tasks

- [ ] Drop `audit=false` from `.npmrc` when eleventy 4 ships (DEC-P6)

# Context

- Section engine, design system, and demo content are in and verified
  (clean build, schema fires on bad front matter, css fully inlined)
- Subpages use layouts/page.njk (hero + stats/cards/projects blocks),
  shared with eleventy-service — keep them in sync
- Branding (email, accent palette) is centralized in metadata.js; a
  rebrand is a one-file edit (see DEC-P4); demo brand: Northlight
  Analytics
- npm 12: `allowScripts` pins `fsevents@2.3.3` only (sharp 0.35.x has
  no install script); engines >=22, `.nvmrc` 24, CI node-version 24
- eleventy-folio retired 2026-10-04 (TEMPLATES docs/chronicles
  phase-1 Entry 5); this README no longer links it — chapbook is the
  chaptered-literary template
- Remaining audit findings are braces→chokidar, dev-server-only and
  unfixable on eleventy 3; hidden from install output only (DEC-P6)
- Cross-cutting decisions live in the kincaid meta-repo docs/
  (~/projects/kincaid/docs/DECISIONS.md); this file tracks repo-local
  state only

# Next Session

No open work. Pick up here only when new feature work is requested.
