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

# PROMPT 023 — Ch11: Correlation

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 11
**File:** `chapters/intermediate/11-correlation.qmd`
**Prerequisites (chapters):** 2, 6, 7
**Primary dataset:** `multivariate_clinical.csv`

## Textbook Content

- Pearson
- Spearman
- Kendall tau
- Point-biserial
- Partial correlation
- Correlation ≠ causation
- Correlation matrix + multicollinearity
- ICC
- Concordance correlation

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Anscombe's Quartet + Datasaurus Dozen**
2. **Correlation Guesser Game**
3. **Partial Correlation Revealer**
4. **ICC Calculator**

## WebR User Data Analysis

Correlation Matrix Explorer (heatmap + significance); Agreement Analysis (ICC + Bland-Altman)

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/11-correlation.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/11-correlation.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
