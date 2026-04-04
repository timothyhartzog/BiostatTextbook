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

# PROMPT 024 — Ch12: Linear Regression

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 12
**File:** `chapters/intermediate/12-linear-regression.qmd`
**Prerequisites (chapters):** 8, 11
**Primary dataset:** `multivariate_clinical.csv`

## Textbook Content

- Simple linear
- OLS derivation
- Coefficient interpretation
- R²/adjusted R²
- Residual diagnostics (4-panel)
- Multiple regression
- Categorical predictors
- Interactions
- Polynomial
- Variable selection (forward/backward/AIC)
- Multicollinearity (VIF)
- Influential observations (Cook's D, leverage, DFBETAS)
- Standardized coefficients

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Fit the Line** — Drag points, live regression
2. **Residual Diagnostic Dashboard**
3. **Multicollinearity Detector**
4. **Variable Selection Race**
5. **Influential Point Laboratory**

## WebR User Data Analysis

Regression Modeler; Diagnostic Report; Model Comparison (AIC/BIC/R²)

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/12-linear-regression.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/12-linear-regression.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
