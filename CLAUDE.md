# BiostatTextbook — Claude Code Project Context

## Project
- **Name:** Biostatistics for Physician Researchers
- **Type:** Quarto Book (interactive textbook)
- **Framework:** Quarto 1.6+ with Observable JS + WebR

## Build Commands
- Preview: `quarto preview`
- Build: `quarto render`
- Deploy: `quarto publish gh-pages`
- PDF: `quarto render --to pdf`

## Three Computation Layers
1. **Julia (build-time):** `{julia}` cells run during `quarto render`. Pre-compute datasets, tables.
2. **Observable JS (client-side):** `{ojs}` cells for interactive visualizations. D3, Plot, jstat.
3. **WebR (client-side):** `{webr}` cells via quarto-live for user data analysis in-browser.

## Chapter Convention
- Each chapter is ONE `.qmd` file in `chapters/{tier}/`
- Include `{{< include ../_common-setup.qmd >}}` at top
- Structure: Learning Objectives → Content Sections → Interactive Demos → Analyze Your Data → Exercises → Summary
- Use cross-references: `@sec-`, `@fig-`, `@tbl-`, `@eq-`
- Citations via `@key` referencing `references.bib`

## Shared OJS Modules (read-only during chapter builds)
- `assets/js/stat-engine.js` — statistical computation
- `assets/js/plot-factory.js` — D3/Plot visualization helpers
- `assets/js/interpretation.js` — plain-English results
- `assets/js/data-upload.js` — CSV upload + parsing
- `assets/js/exercise-engine.js` — quiz grading
- `assets/js/table-one.js` — Table 1 generator

## Theme
- Colors: primary=#1a365d, secondary=#0d9488, accent=#d97706
- Wong colorblind palette for all plots
- Fonts: Inter (body), JetBrains Mono (code), STIX Two Math (equations)

## Key Rules
- Do NOT modify `_quarto.yml` during chapter builds (Integration Phase only)
- Do NOT modify shared JS modules during chapter builds
- Do NOT modify other chapter `.qmd` files
- Statistical results must match R reference values (p within 1e-10, effect size within 1e-6)
