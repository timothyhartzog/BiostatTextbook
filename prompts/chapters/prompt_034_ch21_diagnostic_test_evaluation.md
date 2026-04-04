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

# PROMPT 034 — Ch21: Diagnostic Test Evaluation

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 21
**File:** `chapters/advanced/21-diagnostic-tests.qmd`
**Prerequisites (chapters):** 3, 13
**Primary dataset:** `diagnostic_test.csv`

## Textbook Content

- Sens/Spec deep dive
- Likelihood ratios
- ROC/AUC
- Optimal cutpoint
- Comparing tests (DeLong)
- NRI/IDI
- Decision curve analysis
- STARD

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **ROC Interactive**
2. **LR Nomogram**
3. **Decision Curve Analysis**
4. **Prediction Rule Validator**

## WebR User Data Analysis

STARD-Compliant Evaluator (via pROC); Prediction Model Validator

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/21-diagnostic-tests.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/21-diagnostic-tests.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
