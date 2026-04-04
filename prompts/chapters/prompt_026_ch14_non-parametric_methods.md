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

# PROMPT 026 — Ch14: Non-Parametric Methods

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 14
**File:** `chapters/intermediate/14-nonparametric.qmd`
**Prerequisites (chapters):** 8, 9, 10
**Primary dataset:** `clinical_trial.csv`

## Textbook Content

- When to go nonparametric
- Wilcoxon SR
- Mann-Whitney U
- Kruskal-Wallis
- Friedman
- Permutation tests
- Sign test
- Rank-based effect sizes
- Power comparison

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Ranking Machine**
2. **Parametric vs Non-Parametric Face-Off**
3. **Permutation Test Visualizer**
4. **Power Comparison Simulation**

## WebR User Data Analysis

Non-Parametric Test Suite; Parametric vs Non-Parametric Comparison

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/14-nonparametric.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/14-nonparametric.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
