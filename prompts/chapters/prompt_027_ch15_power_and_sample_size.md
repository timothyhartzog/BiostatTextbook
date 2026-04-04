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

# PROMPT 027 — Ch15: Power and Sample Size

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 15
**File:** `chapters/intermediate/15-power-sample-size.qmd`
**Prerequisites (chapters):** 6, 8, 9, 12, 13

## Textbook Content

- Power framework (α, β, δ, n)
- Power for all test types
- MCID determination
- Adjustments (dropout/non-compliance/multiple testing/clustering)
- Simulation-based power
- Post-hoc power fallacy
- Grant writing sample size section

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Power Calculator Suite**
2. **Power Curves (n vs power)**
3. **Monte Carlo Simulation Power**
4. **Budget vs Power Trade-off**
5. **Post-Hoc Power Fallacy**

## WebR User Data Analysis

Power Analysis Report from pilot data; Sensitivity Analysis

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/15-power-sample-size.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/15-power-sample-size.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
