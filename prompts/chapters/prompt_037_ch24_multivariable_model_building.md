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

# PROMPT 037 — Ch24: Multivariable Model Building

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 24
**File:** `chapters/advanced/24-model-building.qmd`
**Prerequisites (chapters):** 12, 13, 17, 18
**Primary dataset:** `multivariate_clinical.csv`

## Textbook Content

- Prediction vs explanation vs causal
- Variable selection
- Splines/fractional polynomials
- Overfitting/bias-variance
- Internal validation (CV/bootstrap)
- External validation
- Nomograms
- TRIPOD

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Overfitting Demonstrator**
2. **Spline Fitter**
3. **Cross-Validation Visualizer**
4. **Nomogram Builder**

## WebR User Data Analysis

Guided Model Building Workshop; Model Validation Report

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/24-model-building.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/24-model-building.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
