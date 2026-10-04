# Implementation — eleventy-product

## Phase Overview

| # | Name | Status | Date Range |
|---|------|--------|------------|
| 0 | foundation | complete | 2026-09-08 |
| 1 | maintenance | complete | 2026-10-03 |

### Phase 0: Foundation (2026-09-08)

- [x] Eleventy v3 scaffold (config, package.json, family infra files)
- [x] Section engine: collection, permalink:false, zod schema
- [x] Six section types: hero, features, showcase, pricing, faq, cta
- [x] Design system: dark-default tokens, sticky header, cards, buttons
- [x] Theme switcher (family contract, pre-paint guard)
- [x] Demo content: Northlight Analytics + about/contact pages
- [x] Icon/OG generation script (sharp)
- [x] Clean build verified; negative test (unknown type) fails loudly
- [x] README, CLAUDE.md, docs
- [x] Real subpage layout (page.njk): hero band, stats/cards/projects
      blocks, wide mode; About and Contact rewritten with demo content
- [x] mimeo.template.json manifest for deploy-time parameterization
- [x] Branding centralized in metadata.js (email + accent palette);
      base.njk, page cards, generate-icons.mjs all read from it
- [x] Demo prose follows the brand via nunjucks-rendered markdown

See: chronicles/phase-0-foundation.md

### Phase 1: Maintenance (2026-10-03)

- [x] npm 12 install hygiene: stale sharp pin dropped, engines >=22,
      `.nvmrc` 24, `.npmrc` fund/audit silenced (DEC-P6); fresh
      installs silent

See: chronicles/phase-1-maintenance.md

## Current State

Builds clean. Published to tepiton/eleventy-product; living in
TEMPLATES/. Nothing deferred.
