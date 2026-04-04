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

# PROMPT 041 — Ch28: Advanced Survival Methods

**Phase:** Chapter | **Tier:** expert | **Chapter:** 28
**File:** `chapters/expert/28-advanced-survival.qmd`
**Prerequisites (chapters):** 17, 18

## Textbook Content

- Competing risks (cause-specific vs sub-distribution)
- Frailty models
- AFT
- Joint models
- RMST
- Multi-state
- Recurrent events
- Cure models
- Dynamic prediction

## Quality Gates

- Chapter renders: `quarto render chapters/expert/28-advanced-survival.qmd` succeeds
- All OJS demos load and respond to interaction
- All WebR blocks execute without errors
- Exercises grade correctly
- Cross-references resolve
- MathJax equations render

---

**IMPORTANT:** Only modify `chapters/expert/28-advanced-survival.qmd`. Do NOT modify `_quarto.yml`, shared JS modules, or other chapter files.
