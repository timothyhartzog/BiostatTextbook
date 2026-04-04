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

# PROMPT 011 — Ch2: Descriptive Statistics

**Phase:** Chapter | **Tier:** beginner | **Chapter:** 2
**File:** `chapters/beginner/02-descriptive.qmd`
**Prerequisites (chapters):** 1
**Estimated learner time:** 60 min
**Primary dataset:** `clinical_trial.csv`

## Textbook Content

- Central tendency (arithmetic/geometric/harmonic/trimmed/weighted mean, median, mode)
- Dispersion (range, IQR, variance, SD, CV, MAD)
- Percentiles/box plots
- Distribution shape (skewness, kurtosis)
- Frequency tables/cross-tabs
- The Table 1 in medical papers

## Key Equations

- $x̄ = (1/n)Σxᵢ$
- $s² = (1/(n-1))Σ(xᵢ-x̄)²$
- $CV = s/x̄ × 100%$
- $IQR = Q₃ - Q₁$

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Mean-Median-Mode Machine** — Adjustable distribution + outlier slider, watch mean shift while median stays stable
2. **SD Intuition Builder** — Same mean, different SD via slider
3. **Box Plot Anatomy Lab** — Hover components, toggle violin/swarm/raincloud
4. **Table 1 Generator** — Select variables + grouping, publication-quality table, toggle mean vs median, p-values on/off

## WebR User Data Analysis

Upload → comprehensive descriptive report + distribution explorer + normality testing + Table 1

## Quality Gates

- Chapter renders: `quarto render chapters/beginner/02-descriptive.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/beginner/02-descriptive.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
