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

# PROMPT 025 — Ch13: Logistic Regression

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 13
**File:** `chapters/intermediate/13-logistic-regression.qmd`
**Prerequisites (chapters):** 9, 12
**Primary dataset:** `case_control.csv`

## Textbook Content

- Why not linear for binary
- Logistic function/log-odds
- Simple/multiple logistic
- OR interpretation
- Confounding adjustment
- Diagnostics (Hosmer-Lemeshow/ROC/calibration)
- Ordinal/multinomial
- Penalized (Ridge/LASSO/Elastic Net)
- Clinical prediction models

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Logistic Curve Fitter**
2. **OR Forest Plot**
3. **ROC Curve Builder**
4. **Calibration Plot**
5. **LASSO Variable Selector** — Lambda slider → coefficient path

## WebR User Data Analysis

Binary Outcome Modeler; Risk Score Builder; Discrimination/Calibration Report

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/13-logistic-regression.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/13-logistic-regression.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
