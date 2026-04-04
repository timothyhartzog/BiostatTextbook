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

# PROMPT 062 — Accessibility & Mobile Audit

**Phase:** Qa | **Prerequisites:** Previous prompts

## Tasks

1. Lighthouse audit (Performance >80, Accessibility >90)
2. Screen reader compatibility
3. Keyboard navigation
4. Color contrast (WCAG AA)
5. Mobile layout verification
6. MathJax ARIA labels
7. Alt text for all images

## Quality Gates

- All tasks completed and verified
- No regressions
- `quarto render` passes

---

**IMPORTANT:** Verify all prior phases are complete before executing.
