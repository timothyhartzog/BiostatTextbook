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

# PROMPT 035 — Ch22: Missing Data

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 22
**File:** `chapters/advanced/22-missing-data.qmd`
**Prerequisites (chapters):** 12, 13, 18

## Textbook Content

- MCAR/MAR/MNAR
- Consequences of ignoring
- Complete case analysis
- MICE + Rubin's rules
- EM/FIML
- Sensitivity analysis (tipping point)
- Missing in trials (ITT/estimand)

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Mechanism Visualizer**
2. **Imputation Comparator**
3. **Rubin's Rules Calculator**
4. **Tipping Point**

## WebR User Data Analysis

Missing Data Diagnostic; MICE Pipeline with Pooled Results (via mice)

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/22-missing-data.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/22-missing-data.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
