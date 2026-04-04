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

# PROMPT 002 — Shared OJS Modules & WebR Configuration

**Phase:** Foundation | **Prerequisites:** 001

## Modules to Implement

### stat-engine.js

**Client-side statistical computation library (jstat + custom)**

- Descriptive: mean, median, mode, SD, variance, IQR, skewness, kurtosis, percentiles
- Distributions: normal/t/chi-squared/F/binomial/Poisson PDF/CDF/quantile via jstat
- Tests: one-sample/two-sample/paired t, chi-squared, Fisher exact, correlation, Mann-Whitney
- Effect sizes: Cohen's d, Hedges' g, eta-squared, OR, RR, NNT
- Confidence intervals: mean (Z/t), proportion (Wilson/Clopper-Pearson), difference, bootstrap
- Power approximations for t-test, chi-squared, correlation
- Returns standardized TestResult objects: {testName, statistic, pValue, ci, effectSize, effectSizeName, df, n, interpretation}

### plot-factory.js

**Observable Plot + D3 v7 visualization factory**

- histogram(data, opts) with KDE overlay
- boxplot(data, groups) with violin toggle
- scatter(x, y) with regression line + CI band
- qqPlot(data) with reference line
- forestPlot(studies), kmPlot(times, events, groups), rocCurve(truth, scores)
- funnelPlot(effects, se), heatmap(matrix), distributionPlot(type, params)
- All: Wong colorblind palette, responsive, tooltips, SVG/PNG download

### interpretation.js

**Auto-generate plain-English statistical interpretation**

- One-sentence verdict
- Effect size classification (Cohen)
- CI interpretation
- Clinical significance commentary
- APA-formatted result string
- Assumption warnings

### data-upload.js

**Client-side CSV/TSV upload and parsing**

- Drag-and-drop file input
- Papa Parse with auto-detect delimiter/header/types
- Column type override UI
- Data preview table (20 rows)
- Validation (missing %, outlier flags)
- Export as reactive OJS variable

### exercise-engine.js

**Quiz/exercise management with localStorage persistence**

- Multiple choice (single/multi)
- Numeric with tolerance
- Fill-in-blank
- Drag-and-drop matching
- Score tracking via localStorage
- Hint/solution reveal with attempt counting
- Per-chapter completion %

### table-one.js

**Publication-quality Table 1 generator**

- Input: data array + group column
- Continuous: mean±SD or median(IQR) based on normality
- Categorical: n(%)
- P-values: t-test/Wilcoxon or chi-squared/Fisher
- HTML table output, CSV export

## WebR Configuration

**Pre-installed packages:** stats, MASS, survival, lme4, ggplot2, dplyr, tidyr, broom, pROC, meta, boot, car, psych, epiR, PropCIs

- Configure quarto-live for WebR
- Create shared R setup with helper functions
- Verify WebR loads and executes R code in browser

## Quality Gates

- All OJS modules import correctly in a test .qmd
- stat-engine.js t-test matches R t.test() within 1e-6
- plot-factory.js produces valid SVG output
- WebR loads and runs t.test(rnorm(100)) in browser

---

**IMPORTANT:** After completing all tasks, verify all quality gates pass before marking this prompt complete.
