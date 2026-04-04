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

# PROMPT 004 — Landing Page & Appendices

**Phase:** Foundation | **Prerequisites:** 001, 002, 003

## Tasks

1. index.qmd
2. glossary.qmd
3. formula-reference.qmd
4. test-decision-tree.qmd
5. r-code-reference.qmd
6. datasets.qmd

## Tasks

### index.qmd
Full landing page: title, Who This Book Is For, 4 tier cards, How to Use This Book (3 computation layers), Interactive Features teaser demo, Prerequisites, navigation to Ch1

### glossary.qmd
500+ statistical terms as Quarto definition lists, searchable, cross-referenced to introducing chapters

### formula-reference.qmd
All key formulas by chapter, LaTeX rendered, linked back to source sections

### test-decision-tree.qmd
OJS-powered interactive test selector: outcome type → groups → paired? → assumptions → recommended test + chapter link

### r-code-reference.qmd
WebR code cookbook — common R patterns, copy-paste ready

### datasets.qmd
Dataset documentation with download links and preview tables

## Quality Gates

- All appendix pages render
- Glossary links to correct chapters
- Test decision tree produces correct recommendations
- R cookbook examples execute in WebR

---

**IMPORTANT:** After completing all tasks, verify all quality gates pass before marking this prompt complete.
