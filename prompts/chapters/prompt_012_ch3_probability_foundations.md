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

# PROMPT 012 — Ch3: Probability Foundations

**Phase:** Chapter | **Tier:** beginner | **Chapter:** 3
**File:** `chapters/beginner/03-probability.qmd`
**Prerequisites (chapters):** 1, 2
**Estimated learner time:** 75 min
**Primary dataset:** `diagnostic_test.csv`

## Textbook Content

- Probability rules (addition, multiplication, conditional)
- Bayes' theorem for diagnostic tests (PPV/NPV/LR)
- Distributions intro (Binomial, Poisson, Normal, Log-Normal, Exponential)
- Normal deep dive (Z-scores, CLT, QQ plots)
- Clinical decision analysis

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Bayes' Theorem Visualizer** — Sliders: prevalence, sensitivity, specificity → Fagan nomogram + 1000-patient icon array (TP/FP/TN/FN)
2. **Distribution Explorer** — Dropdown distribution type, parameter sliders, PDF/CDF side by side
3. **CLT Simulator** — Draw samples from any distribution, animated convergence to Normal — THE signature demo
4. **Screening Test Evaluator** — Input sens/spec/prev → icon array + 2×2 table + all diagnostic metrics

## WebR User Data Analysis

Upload diagnostic data → 2×2 table → Sens/Spec/PPV/NPV/ROC/AUC/optimal cutpoint → distribution fitting

## Quality Gates

- Chapter renders: `quarto render chapters/beginner/03-probability.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/beginner/03-probability.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
