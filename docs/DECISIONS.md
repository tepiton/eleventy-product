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
