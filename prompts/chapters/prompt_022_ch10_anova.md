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

# PROMPT 022 — Ch10: ANOVA

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 10
**File:** `chapters/intermediate/10-anova.qmd`
**Prerequisites (chapters):** 8
**Primary dataset:** `rct_parallel.csv`

## Textbook Content

- One-way ANOVA
- Post-hoc (Tukey/Dunnett/Scheffé)
- Two-way factorial
- Repeated measures
- ANCOVA
- Assumptions (sphericity)
- Kruskal-Wallis/Friedman
- Effect sizes (η²/partial η²/ω²)
- Planned contrasts
- Mixed ANOVA

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **ANOVA Decomposition** — SS bars
2. **Post-Hoc Comparison Matrix**
3. **Interaction Plot Builder**
4. **Sphericity Explorer**
5. **ANCOVA vs No Adjustment**

## WebR User Data Analysis

Multi-Group Comparison Pipeline; Repeated Measures Analyzer

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/10-anova.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/10-anova.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
