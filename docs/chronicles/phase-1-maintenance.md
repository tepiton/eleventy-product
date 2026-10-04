# Phase 1: Maintenance

## Session 1 — 2026-10-03

- npm 12 (2026-07) blocks dependency install scripts by default, and
  node 24 (CI's runtime) bundles it. Fleet-wide install-hygiene pass
  reached this repo.
- Dropped the stale `sharp@0.33.5` allowScripts pin — sharp 0.35.x has
  no install script, so the pin matched nothing. `fsevents@2.3.3`
  stays.
- `engines.node` ">=18" → ">=22" (eleventy-img@7's real floor — ">=18"
  was already false); `.nvmrc` 20 → 24 to match CI.
- `.npmrc`: `fund=false` + `audit=false` — fresh installs are silent.
  The remaining audit findings are braces→chokidar, dev-server-only
  and unfixable on eleventy 3 (fixed in eleventy 4 via chokidar 5);
  `npm audit` still works on demand.

See: DEC-P6
