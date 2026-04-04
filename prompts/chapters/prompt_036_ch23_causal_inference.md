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

# PROMPT 036 — Ch23: Causal Inference

**Phase:** Chapter | **Tier:** advanced | **Chapter:** 23
**File:** `chapters/advanced/23-causal-inference.qmd`
**Prerequisites (chapters):** 4, 12, 13

## Textbook Content

- Confounding
- Potential outcomes (Rubin)
- DAGs
- PS methods (matching/IPTW)
- Balance assessment (Love plots)
- Sensitivity (E-value)
- Instrumental variables
- DiD
- RDD

## Interactive OJS Demos

Each demo is an Observable JS reactive visualization with sliders/controls.

1. **DAG Builder**
2. **PS Matching Visualizer**
3. **Balance Before/After**
4. **E-Value Calculator**

## WebR User Data Analysis

PS Analysis Pipeline (via MatchIt); Causal Diagram Analyzer

## Quality Gates

- Chapter renders: `quarto render chapters/advanced/23-causal-inference.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/advanced/23-causal-inference.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
