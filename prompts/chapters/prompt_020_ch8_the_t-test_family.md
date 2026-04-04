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

# PROMPT 020 — Ch8: The t-Test Family

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 8
**File:** `chapters/intermediate/08-t-tests.qmd`
**Prerequisites (chapters):** 2, 5, 6
**Primary dataset:** `clinical_trial.csv`

## Textbook Content

- One-sample t (vs benchmark)
- Independent two-sample t
- Welch's t (default)
- Paired t
- Assumptions (normality, independence, equal variance)
- Effect sizes (Cohen's d, Hedges' g, CLES)
- Nonparametric alternatives (Wilcoxon SR, Mann-Whitney U)
- Equivalence testing (TOST)
- APA reporting

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **t-Distribution Explorer** — Adjust df
2. **Two-Group Comparator** — Drag distributions
3. **Paired vs Independent** — Power comparison
4. **Assumption Violation Simulator** — Type I error rates under violation
5. **Equivalence Testing Visualizer** — TOST step-by-step

## WebR User Data Analysis

Compare Two Groups (full workflow); Pre-Post Analysis (paired + effect size)

## Validation

p-values match R t.test() within 1e-10

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/08-t-tests.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/08-t-tests.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
