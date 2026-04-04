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

# PROMPT 063 — Deployment

**Phase:** Deployment | **Prerequisites:** Previous prompts

## Tasks

1. Create GitHub repo timothyhartzog/BiostatTextbook
2. Push all source files
3. quarto publish gh-pages
4. GitHub Actions workflow (render + deploy on push to main)
5. Custom domain if desired
6. Verify deployed site
7. Release tag v1.0.0

## Quality Gates

- All tasks completed and verified
- No regressions
- `quarto render` passes

---

**IMPORTANT:** Verify all prior phases are complete before executing.
