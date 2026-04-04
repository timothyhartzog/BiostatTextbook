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

# PROMPT 001 — Quarto Book Scaffold

**Phase:** Foundation | **Prerequisites:** None

## Tasks

1. Initialize Quarto Book project: quarto create project book BiostatTextbook
2. Configure _quarto.yml: 30 chapters in 4 Parts (Beginner/Intermediate/Advanced/Expert) + Appendices, HTML format with custom SCSS, dark mode, MathJax, search, Julia engine with --project exeflags, execute cache/freeze
3. Install quarto-live extension: quarto add r-wasm/live
4. Create Julia Project.toml with build-time deps: HypothesisTests, GLM, Distributions, StatsBase, DataFrames, CSV, CairoMakie, MultipleTesting, Bootstrap, KernelDensity
5. Create assets/css/custom.scss: Hartzog colors, Wong palette, custom callout styles (Definition, Formula, Clinical Example, Common Mistake, Key Concept), exercise blocks, print styles
6. Create chapters/_common-setup.qmd: shared Julia imports + OJS module imports
7. Create placeholder index.qmd: book overview, tier descriptions, How to Use This Book
8. Create references.bib with 50+ foundational biostatistics references
9. Create CLAUDE.md with project conventions
10. Create directory skeleton for all folders
11. Create placeholder .qmd stubs for all 30 chapters
12. Verify: quarto render produces complete book with navigation, search, all placeholder chapters

## Quality Gates

- quarto render succeeds without errors
- Book renders with TOC, chapter navigation, search functional
- Custom theme applies (colors, fonts, dark mode toggle)
- MathJax renders test equation
- All 30 chapter stubs accessible via navigation

---

**IMPORTANT:** After completing all tasks, verify all quality gates pass before marking this prompt complete.
