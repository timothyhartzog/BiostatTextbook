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

# PROMPT 032 — Ch19: GLM Extensions

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 19
**File:** `chapters/advanced/19-glm-extensions.qmd`
**Prerequisites (chapters):** 12, 13
**Primary dataset:** `multivariate_clinical.csv`

## Textbook Content

- GLM framework
- Poisson
- Overdispersion/negative binomial
- Zero-inflated
- Gamma (costs/LOS)
- Beta (proportions)
- Quantile regression
- Robust regression

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Link Function Visualizer**
2. **Poisson vs NB**
3. **Zero-Inflation Detector**
4. **GLM Family Comparator**

## WebR User Data Analysis

Count Data Modeler; Cost/Utilization Analysis

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/19-glm-extensions.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/19-glm-extensions.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
