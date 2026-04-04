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

# PROMPT 021 — Ch9: Chi-Squared and Categorical Data

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 9
**File:** `chapters/intermediate/09-chi-squared.qmd`
**Prerequisites (chapters):** 1, 3, 6
**Primary dataset:** `case_control.csv`

## Textbook Content

- Goodness-of-fit
- Independence
- Fisher exact
- McNemar
- Association measures (OR/RR/phi/Cramer's V)
- Stratified analysis (Mantel-Haenszel)
- Cochran-Armitage trend test

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **2×2 Table Laboratory**
2. **Expected vs Observed Animation**
3. **OR vs RR Clarifier**
4. **Simpson's Paradox**

## WebR User Data Analysis

Cross-Tabulation Analyzer; Risk Calculator (OR/RR/ARR/NNT with CIs)

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/09-chi-squared.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/09-chi-squared.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
