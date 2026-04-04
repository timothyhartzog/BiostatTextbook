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

# PROMPT 030 — Ch17: Survival Analysis

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 17
**File:** `chapters/advanced/17-survival.qmd`
**Prerequisites (chapters):** 6, 12, 13
**Primary dataset:** `survival_data.csv`

## Textbook Content

- Censoring types
- Kaplan-Meier
- Life table
- Log-rank
- Cox PH
- Hazard ratio interpretation
- PH assumption (Schoenfeld)
- Time-varying covariates
- Competing risks (Fine-Gray)
- Parametric models
- RMST
- Sample size (Schoenfeld formula)

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **KM Builder**
2. **Cox Dashboard**
3. **PH Assumption Checker**
4. **Competing Risks Visualizer**
5. **Censoring Impact Demonstrator**

## WebR User Data Analysis

Survival Pipeline (KM + log-rank + Cox via survival package); Competing Risks

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/17-survival.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/17-survival.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
