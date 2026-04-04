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

# PROMPT 028 — Ch16: Bayesian Thinking

**Phase:** Chapter | **Tier:** intermediate | **Chapter:** 16
**File:** `chapters/intermediate/16-bayesian-thinking.qmd`
**Prerequisites (chapters):** 3, 5, 6

## Textbook Content

- Frequentist vs Bayesian philosophy
- Prior/likelihood/posterior
- Conjugate priors (Beta-Binomial, Normal-Normal)
- Credible intervals vs CIs
- Choosing priors
- Bayesian A/B testing
- Adaptive trial designs
- MCMC intuition
- Bayesian vs frequentist comparison

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **Prior-to-Posterior Updater** — Beta-Binomial with sliders — THE signature Bayesian demo
2. **Beta-Binomial Clinical Trial**
3. **MCMC Visualizer**
4. **Bayesian vs Frequentist Face-Off**
5. **Prior Sensitivity Analysis**

## WebR User Data Analysis

Bayesian Proportion Comparison; Bayesian Mean Comparison

## Quality Gates

- Chapter renders: `quarto render chapters/intermediate/16-bayesian-thinking.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/intermediate/16-bayesian-thinking.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
