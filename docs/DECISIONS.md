# Decisions — eleventy-product

Cross-cutting decisions (two templates, dark default, section model,
names) live in the kincaid meta-repo: ~/projects/kincaid/docs/DECISIONS.md.

### DEC-P1: Section schema via directory data file key (2026-09-08)

**Status:** accepted

**Context:** Eleventy 3.1.6 has no `addDataSchema` config API. A global
`_data/eleventyDataSchema.js` exporting a function is invoked once with
the global data (TemplateData.js calls function-valued data-file
exports), not per template — it cannot validate front matter. A named
export alongside the default in a directory data file breaks Eleventy's
ESM import so the whole file silently stops applying.

**Decision:** `content/sections/sections.11tydata.js` exports ONLY a
default object: `{ tags, permalink: false, eleventyDataSchema }`. The
validator lives in `_config/section-schema.js` and is imported.

**Consequences:** Works per-template with file-named errors. Do not add
named exports to directory data files.

### DEC-P2: Demo brand Northlight Analytics (2026-09-08)

**Status:** accepted

**Decision:** Generic, de-personalized fictional analytics SaaS as demo
content, per the family convention established in the tech-blog and
prose-blog de-personalization passes.

### DEC-P3: Icons via inline SVG includes (2026-09-08)

**Status:** accepted

**Decision:** Ten abstract stroke icons in `_includes/icons/`, picked by
frontmatter `icon:` name. No emoji, no icon font, no runtime dependency.

### DEC-P4: Branding centralized in metadata.js (2026-09-11)

**Status:** accepted

**Decision:** metadata.js is the single source for email and brand
accent colors ([dark, light] pairs); base.njk, page cards
(useSiteEmail), and generate-icons.mjs all read from it instead of
hardcoding values. A rebrand (new client, new template instance) is a
one-file edit.

### DEC-P5: Demo prose interpolates brand where possible (2026-09-11)

**Status:** accepted

**Decision:** Markdown bodies render through nunjucks
(markdownTemplateEngine: njk) so prose can reference
{{ metadata.title }} and stay in sync with the brand automatically.
Frontmatter string fields (feature/showcase/faq copy, ledes) can't
interpolate, so those were hand-written brand-neutral instead.

---

### DEC-P6: Quiet installs — fund/audit silenced in .npmrc (2026-10-03)

**Status:** accepted — revisit when eleventy 4 ships

**Context:** npm audit reports high-severity findings rooted in
braces→chokidar under eleventy/dev-server/nunjucks. No fixed release
exists (braces 3.0.3 is latest; npm's only suggested fix is downgrading
to eleventy 0.6.0). The chain runs only in the `--serve` file watcher —
never during build or CI. Consumers cannot remediate it either.

**Decision:** Commit `.npmrc` with `fund=false` and `audit=false` so
install-time output is silent; `npm audit` still reports on demand.
Drop `audit=false` when eleventy 4 (chokidar 5) lands.
