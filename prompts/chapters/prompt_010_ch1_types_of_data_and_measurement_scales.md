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

# PROMPT 010 — Ch1: Types of Data and Measurement Scales

**Phase:** Chapter | **Tier:** beginner | **Chapter:** 1
**File:** `chapters/beginner/01-data-types.qmd`
**Prerequisites (chapters):** None
**Estimated learner time:** 45 min
**Primary dataset:** `clinical_trial.csv`

## Textbook Content

- 1.1 Why measurement scales matter (determines test choice)
- 1.2 Nominal (blood type, diagnosis; mode, frequencies, chi-squared)
- 1.3 Ordinal (cancer stage, NYHA, GCS, APGAR; median, IQR)
- 1.4 Interval (temperature, IQ; no true zero; mean, SD)
- 1.5 Ratio (weight, BP, labs; true zero; geometric mean for log-normal)
- 1.6 Special types (binary, count/Poisson, time-to-event, compositional)
- 1.7 Decision framework flowchart + variable-to-test mapping table

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Classification Game** — 20 clinical variables appear, user selects type, scored
2. **Distribution Shape Explorer** — Select column from sample data, auto-detect type, histogram or bar with summary stats
3. **Wrong Test Detector** — Run inappropriate test, show why result is meaningless
4. **Variable Audit** — Auto-classify all variables in uploaded dataset, override, export codebook

## WebR User Data Analysis

Upload CSV → auto-classify columns → verify/override types → codebook → variable summary dashboard

## Exercises

Create **5** exercises: classify from abstract, identify misclassified, match to tests, critique analysis

## Quality Gates

- Chapter renders: `quarto render chapters/beginner/01-data-types.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/beginner/01-data-types.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
