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

# PROMPT 040 — Ch27: Clinical Trial Design

**Phase:** Chapter | **Tier:** expert | **Chapter:** 27
**File:** `chapters/expert/27-clinical-trial-design.qmd`
**Prerequisites (chapters):** 4, 6, 15, 17
**Primary dataset:** `clinical_trial.csv`

## Textbook Content

- Phase I-IV
- Adaptive (group sequential/SSR)
- Non-inferiority/equivalence
- Crossover
- Cluster RCT
- Factorial
- Platform/basket/umbrella
- Bayesian adaptive
- Interim analysis
- SAP structure
- Estimand framework (ICH E9(R1))

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Trial Designer**
2. **Group Sequential Boundaries**
3. **NI Margin Explorer**
4. **Adaptive Simulator**
5. **Estimand Builder**

## WebR User Data Analysis

Trial Data Analyzer; SAP Template Generator

## Quality Gates

- Chapter renders: `quarto render chapters/expert/27-clinical-trial-design.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/expert/27-clinical-trial-design.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
