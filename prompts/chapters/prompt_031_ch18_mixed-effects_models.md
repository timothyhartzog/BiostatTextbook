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

# PROMPT 031 — Ch18: Mixed-Effects Models

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 18
**File:** `chapters/advanced/18-mixed-effects.qmd`
**Prerequisites (chapters):** 10, 12
**Primary dataset:** `longitudinal_study.csv`

## Textbook Content

- Why standard regression fails for clustered data
- Fixed vs random effects
- Random intercepts/slopes
- Crossed/nested
- Model selection (REML/ML/LRT/AIC/BIC)
- GLMM
- Diagnostics
- Missing data in longitudinal

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Spaghetti Plot + Mixed Model**
2. **Random Effects Forest Plot**
3. **ICC Calculator**
4. **Missing Data Impact**

## WebR User Data Analysis

Longitudinal Analysis Pipeline (via lme4); Clustering Assessment

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/18-mixed-effects.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/18-mixed-effects.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
