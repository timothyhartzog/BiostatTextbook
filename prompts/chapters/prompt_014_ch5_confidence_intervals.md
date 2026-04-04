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

# PROMPT 014 — Ch5: Confidence Intervals

**Phase:** Chapter | **Tier:** beginner | **Chapter:** 5
**File:** `chapters/beginner/05-confidence-intervals.qmd`
**Prerequisites (chapters):** 1, 2, 3
**Estimated learner time:** 60 min
**Primary dataset:** `clinical_trial.csv`

## Textbook Content

- Correct interpretation (and 3 common wrong ones)
- CI for mean (Z vs t)
- CI for proportion (Wald/Wilson/Agresti-Coull/Clopper-Pearson)
- CI for differences and ratios (means/proportions/OR/RR/HR/NNT)
- Bootstrap CIs (percentile/BCa)
- CI width, precision, sample size
- Reporting (ICMJE)

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **CI Interpretation Simulator** — Draw 100 CIs, ~5 miss true parameter, toggle 90/95/99%
2. **CI Width Explorer** — 3 sliders: n, confidence level, SD
3. **Bootstrap CI Machine** — Animated resampling, build distribution, show percentile + BCa
4. **Forest Plot Builder** — Add/remove studies, see pooled estimate change

## WebR User Data Analysis

CI Calculator (parametric + bootstrap); Precision-Based Sample Size

## Quality Gates

- Chapter renders: `quarto render chapters/beginner/05-confidence-intervals.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/beginner/05-confidence-intervals.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
