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

# PROMPT 015 — Ch6: Hypothesis Testing Framework

**Phase:** Chapter | **Tier:** beginner | **Chapter:** 6
**File:** `chapters/beginner/06-hypothesis-testing.qmd`
**Prerequisites (chapters):** 1, 2, 3, 5
**Estimated learner time:** 90 min
**Primary dataset:** `clinical_trial.csv`

## Textbook Content

- Logic of hypothesis testing (Fisher/Neyman-Pearson)
- Type I/II errors (clinical consequences)
- P-value (correct definition, 5 misinterpretations, ASA 2016)
- One-tailed vs two-tailed
- Multiple testing (FWER/FDR, Bonferroni/Holm/Hochberg/BH)
- Statistical vs clinical significance (MCID, effect sizes, superiority/non-inferiority/equivalence)

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Hypothesis Test Visualizer** — Two overlapping Normals (H₀/H₁), shade α/β/power regions, sliders: μ₀, μ₁, σ, n, α — THE key demo
2. **P-Value Simulator** — 10,000 experiments under H₀ (uniform) vs H₁ (right-skewed)
3. **Multiple Testing Disaster** — 20 tests on random data, show false positives, apply corrections
4. **Clinical Significance Detector** — CI relative to zero AND MCID, four outcome zones

## WebR User Data Analysis

Hypothesis Test Advisor; P-Value Context Report (effect size + CI + power)

## Quality Gates

- Chapter renders: `quarto render chapters/beginner/06-hypothesis-testing.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/beginner/06-hypothesis-testing.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
