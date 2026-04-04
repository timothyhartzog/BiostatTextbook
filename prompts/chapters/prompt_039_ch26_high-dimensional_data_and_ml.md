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

# PROMPT 039 — Ch26: High-Dimensional Data and ML

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 26
**File:** `chapters/advanced/26-high-dimensional-ml.qmd`
**Prerequisites (chapters):** 6, 12, 13, 15

## Textbook Content

- Multiple testing at genomics scale
- FWER/FDR
- PCA/Factor analysis
- Cluster analysis
- Supervised ML (random forests/gradient boosting/SVM)
- Cross-validation
- Variable importance (SHAP)
- ML vs traditional statistics
- TRIPOD-ML

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **FDR Visualizer**
2. **PCA Explorer**
3. **Cluster Explorer**
4. **Random Forest Explainer**
5. **SHAP Dashboard**

## WebR User Data Analysis

High-Dimensional Pipeline (PCA + clustering); ML Prediction Model

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/26-high-dimensional-ml.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/26-high-dimensional-ml.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
