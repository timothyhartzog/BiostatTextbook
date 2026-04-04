# BiostatTextbook — Claude Code Prompt

> **Project:** Biostatistics for Physician Researchers
> **Stack:** Quarto Book + Observable JS + WebR
> **Deployment:** Static site (GitHub Pages)

## Architecture Summary

- **Quarto 1.6+** Book format with Julia build-time engine
- **Observable JS** for client-side interactive visualizations (D3, Plot)
- **WebR** (quarto-live) for in-browser R statistical computation
- **jstat.js** + custom `stat-engine.js` for OJS demos
- Quarto provides: TOC, search, cross-refs, MathJax, dark mode, PDF export
- Each chapter is a single `.qmd` file

## Conflict Avoidance

- Each chapter is ONE `.qmd` file — no shared files modified during chapter builds
- `_quarto.yml` chapter listing assembled only in Integration Phase (Prompt 050)
- Shared OJS modules in `assets/js/` are read-only during chapter builds
- Write status to `build/status.toml` after completing all tasks

---

# PROMPT 033 — Ch20: Meta-Analysis

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 20
**File:** `chapters/advanced/20-meta-analysis.qmd`
**Prerequisites (chapters):** 5, 6, 12
**Primary dataset:** `meta_analysis_studies.csv`

## Textbook Content

- PRISMA 2020
- Effect size computation
- Fixed-effect/Random-effects
- Heterogeneity (Q/I²/τ²)
- Forest plots
- Publication bias (funnel/Egger/trim-and-fill)
- Subgroup/meta-regression
- Network meta-analysis
- GRADE

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Forest Plot Studio**
2. **Heterogeneity Explorer**
3. **Funnel Plot Detective**
4. **Fixed vs Random**
5. **Meta-Regression**

## WebR User Data Analysis

Meta-Analysis Pipeline (via meta/metafor in WebR); Publication Bias Assessment

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/20-meta-analysis.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/20-meta-analysis.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
