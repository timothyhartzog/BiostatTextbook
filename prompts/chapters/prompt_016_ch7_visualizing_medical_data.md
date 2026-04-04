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

# PROMPT 016 — Ch7: Visualizing Medical Data

**Phase:** Chapter | **Tier:** beginner | **Chapter:** 7
**File:** `chapters/beginner/07-visualization.qmd`
**Prerequisites (chapters):** 1, 2
**Estimated learner time:** 75 min
**Primary dataset:** `clinical_trial.csv`

## Textbook Content

- Tufte principles (data-ink ratio, chartjunk, lie factor)
- Cleveland hierarchy
- Accessible color palettes
- Univariate (histogram/density/box/violin/raincloud/bar)
- Bivariate (scatter/grouped box/mosaic/line/Bland-Altman)
- Multivariate (pairs/heatmap/parallel coords/PCA biplot/facets)
- Clinical specialized (forest/KM/ROC/funnel/CONSORT/nomogram/DCA)
- Common mistakes (truncated axis, dual axis, pie charts, 3D, rainbow)
- Publication standards (300 DPI, vector vs raster)

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Plot Type Chooser** — Interactive decision tree → recommended plot
2. **Visualization Playground** — Select variables, map aesthetics, choose type, customize theme/palette — live Observable Plot
3. **Lie Factor Calculator** — Input true ratio + visual ratio → compute lie factor
4. **Clinical Plot Gallery** — 20+ clinical plot types with live examples

## WebR User Data Analysis

Auto-Visualization (recommended plots for all variables); Custom Figure Builder with ggplot2

## Quality Gates

- Chapter renders: `quarto render chapters/beginner/07-visualization.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/beginner/07-visualization.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
