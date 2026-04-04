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

# PROMPT 013 — Ch4: Sampling and Study Design

**Phase:** Chapter | **Tier:** beginner | **Chapter:** 4
**File:** `chapters/beginner/04-sampling-design.qmd`
**Prerequisites (chapters):** 1, 2, 3
**Estimated learner time:** 90 min
**Primary dataset:** `case_control.csv`

## Textbook Content

- Study design hierarchy (cross-sectional/case-control/cohort/RCT/N-of-1)
- Sampling methods (random/stratified/cluster/systematic/convenience)
- Bias taxonomy (selection/information/confounding/lead-time/immortal-time/ecological fallacy)
- Randomization methods
- Sample size introduction
- Reporting guidelines (SPIRIT/STROBE/CONSORT/PRISMA/STARD)

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Study Design Decision Tree** — Answer questions about research goal → recommended design + checklist
2. **Sampling Simulator** — 10K-dot population, compare sampling methods, show bias + precision
3. **Bias Illustrated** — 6 interactive scenarios with DAGs and mitigation
4. **Randomization Validator** — Simulate randomization, show covariate balance (Love plot)

## WebR User Data Analysis

Study Design Advisor; Covariate Balance Checker

## Quality Gates

- Chapter renders: `quarto render chapters/beginner/04-sampling-design.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/beginner/04-sampling-design.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
