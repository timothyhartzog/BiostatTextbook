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

# PROMPT 038 — Ch25: Advanced Longitudinal Methods

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 25
**File:** `chapters/advanced/25-advanced-longitudinal.qmd`
**Prerequisites (chapters):** 10, 18
**Primary dataset:** `longitudinal_study.csv`

## Textbook Content

- GEE
- GEE vs mixed models
- Correlation structures
- Growth curve models
- Latent class growth
- Joint models
- Handling dropout

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **GEE vs Mixed Model**
2. **Correlation Structure Selector**
3. **Growth Curve Animator**
4. **Joint Model Visualizer**

## WebR User Data Analysis

GEE Pipeline (via geepack); Trajectory Analysis

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/25-advanced-longitudinal.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/25-advanced-longitudinal.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
