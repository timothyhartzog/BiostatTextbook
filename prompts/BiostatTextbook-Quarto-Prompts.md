# Interactive Biostatistics Textbook — Quarto Edition

## Claude Code Prompt Specification v2.0

### Project: *Biostatistics for Physician Researchers*
### Quarto Book + Observable JS + WebR

**Version:** 2.0.0 | **Date:** 2026-04-03 | **Total Prompts:** 40 | **Chapters:** 30

---

## 1. Architecture Overview

### Monorepo Structure

```
BiostatTextbook/
├── _quarto.yml                    # Book config, chapters, theme, extensions
├── _variables.yml                 # Shared variables (version, date, author)
├── index.qmd                      # Landing page / preface
├── references.bib                 # BibTeX bibliography
├── CLAUDE.md                      # Claude Code project conventions
├── Project.toml                   # Julia dependencies (build-time)
├── _extensions/
│   └── live/                      # quarto-live extension (WebR/Pyodide)
├── assets/
│   ├── css/custom.scss            # Custom SCSS theme
│   ├── js/
│   │   ├── stat-engine.js         # OJS statistical computation library
│   │   ├── plot-factory.js        # D3/Observable Plot helpers
│   │   ├── interpretation.js      # Plain-English result interpreter
│   │   ├── data-upload.js         # Client-side CSV upload + parsing
│   │   ├── exercise-engine.js     # Quiz grading + localStorage persistence
│   │   └── table-one.js           # Publication-quality Table 1 generator
│   ├── sample_data/               # 8 synthetic CSV datasets
│   │   ├── clinical_trial.csv
│   │   ├── survival_data.csv
│   │   ├── longitudinal_study.csv
│   │   ├── case_control.csv
│   │   ├── rct_parallel.csv
│   │   ├── diagnostic_test.csv
│   │   ├── meta_analysis_studies.csv
│   │   ├── multivariate_clinical.csv
│   │   └── DATA_DICTIONARY.md
│   └── images/
├── chapters/
│   ├── _common-setup.qmd          # Shared Julia/OJS preamble
│   ├── beginner/
│   │   ├── 01-data-types.qmd
│   │   ├── 02-descriptive.qmd
│   │   ├── 03-probability.qmd
│   │   ├── 04-sampling-design.qmd
│   │   ├── 05-confidence-intervals.qmd
│   │   ├── 06-hypothesis-testing.qmd
│   │   └── 07-visualization.qmd
│   ├── intermediate/
│   │   ├── 08-t-tests.qmd
│   │   ├── 09-chi-squared.qmd
│   │   ├── 10-anova.qmd
│   │   ├── 11-correlation.qmd
│   │   ├── 12-linear-regression.qmd
│   │   ├── 13-logistic-regression.qmd
│   │   ├── 14-nonparametric.qmd
│   │   ├── 15-power-sample-size.qmd
│   │   └── 16-bayesian-thinking.qmd
│   ├── advanced/
│   │   ├── 17-survival.qmd
│   │   ├── 18-mixed-effects.qmd
│   │   ├── 19-glm-extensions.qmd
│   │   ├── 20-meta-analysis.qmd
│   │   ├── 21-diagnostic-tests.qmd
│   │   ├── 22-missing-data.qmd
│   │   ├── 23-causal-inference.qmd
│   │   ├── 24-model-building.qmd
│   │   ├── 25-advanced-longitudinal.qmd
│   │   └── 26-high-dimensional-ml.qmd
│   └── expert/
│       ├── 27-clinical-trial-design.qmd
│       ├── 28-advanced-survival.qmd
│       ├── 29-bayesian-trials.qmd
│       └── 30-putting-it-together.qmd
├── appendix/
│   ├── glossary.qmd
│   ├── formula-reference.qmd
│   ├── test-decision-tree.qmd
│   ├── r-code-reference.qmd
│   └── datasets.qmd
├── scripts/
│   ├── generate_datasets.jl
│   ├── validate_webr.R
│   └── build_check.sh
└── test/
    ├── validate_renders.sh
    ├── validate_stats.R
    ├── validate_links.sh
    └── lighthouse.sh
```

### Three Computation Layers

**Layer 1 — Julia (build-time):** `{julia}` cells execute during `quarto render`. Used for pre-computing datasets, generating static tables, producing reference values. Output baked into HTML — zero runtime cost.

**Layer 2 — Observable JS (client-side reactive):** `{ojs}` cells run in the browser. Used for interactive visualizations (D3, Observable Plot), parameter sliders, animated simulations, reactive dashboards. Zero server needed.

**Layer 3 — WebR (client-side computation):** `{webr}` cells via quarto-live extension. Used for user data upload + statistical analysis (t-tests, regression, survival analysis on user CSVs), exercise grading, live code editors. All computation in-browser via WebAssembly.

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Publishing | Quarto 1.6+ Book format | Chapters, TOC, search, cross-refs, MathJax, PDF export |
| Build-time | Julia 1.11+ engine | Pre-compute datasets, static tables, reference values |
| Visualization | Observable Plot + D3 v7 | Interactive client-side plots, animations |
| User Analysis | WebR (quarto-live) | In-browser R for uploaded data analysis |
| Statistics (JS) | jstat.js + custom | Lightweight client-side stats for OJS demos |
| Exercises | quarto-live exercises | Graded code blocks, hints, solutions |
| Theme | Custom SCSS | Hartzog color system, Wong colorblind palette |
| Deployment | GitHub Pages / Netlify | Static site — zero server infrastructure |

### What Quarto Gives Free (vs. Genie/Stipple v1.0)

TOC, chapter navigation, full-text search, cross-references (`@sec-`, `@fig-`, `@tbl-`, `@eq-`), MathJax, responsive layout, print/PDF export (`quarto render --to pdf`), dark mode, code folding, citation management via BibTeX, WCAG accessibility via semantic HTML, sitemap — all via `_quarto.yml` configuration.

### Chapter `.qmd` Template

```markdown
---
title: "Chapter N: Title"
subtitle: "Tier | Estimated time"
bibliography: ../../references.bib
---

{{< include ../_common-setup.qmd >}}

## Learning Objectives {.unnumbered}
::: {.callout-note appearance="simple"}
After this chapter you will be able to: 1. ... 2. ...
:::

## N.1 Section Title
[Prose with $\LaTeX$, @citations, cross-refs (@sec-something)]

## Interactive Demos {.unnumbered}
### Demo N.1: Title
```{ojs}
// Observable JS reactive visualization with sliders/plots
```

## Analyze Your Data {.unnumbered}
```{webr}
# WebR — user uploads CSV, runs chapter's analysis
```

## Exercises {.unnumbered}
::: {.exercise}
### Exercise N.1
```{webr}
#| exercise: ex_N_1
# Starter code
```
:::
```

---

## 2. Agentic Workflow

```
Phase 1: Foundation (Sequential)
  001 → 002 → 003 → 004

Phase 2: Chapters (Parallel — up to 10 concurrent)
  Wave A: Ch1, Ch2, Ch7              ← no chapter deps
  Wave B: Ch3, Ch4                    ← need Ch1-2
  Wave C: Ch5, Ch6                    ← need Ch1-3
  Wave D: Ch8, Ch9, Ch11             ← need beginner
  Wave E: Ch10, Ch14, Ch15
  Wave F: Ch12, Ch13, Ch16
  Wave G: Ch17–Ch22                   ← advanced
  Wave H: Ch23–Ch26
  Wave I: Ch27–Ch29                   ← expert
  Wave J: Ch30                        ← ALL

Phase 3: Integration (Sequential)
  050 → 051 → 052 → 053

Phase 4: QA & Deploy (Sequential)
  060 → 061 → 062 → 063
```

**Conflict avoidance:** Each chapter is a single `.qmd` file. No shared files modified during Phase 2. `_quarto.yml` chapter listing assembled in Phase 3. Shared OJS modules in `assets/js/` are read-only during Phase 2.

**Estimated timeline:** Foundation ~2hrs, Chapters ~2hrs (10× parallel), Integration ~1hr, QA ~1hr. **Total: ~6 hours wall-clock** (vs. ~5.25hrs Genie v1.0, but far simpler and more reliable).

---

## 3. Foundation Prompts

### PROMPT 001 — Quarto Book Scaffold

**Phase:** Foundation | **Prerequisites:** None

**Tasks:**

1. Initialize Quarto Book project with `quarto create project book BiostatTextbook`

2. Configure `_quarto.yml` with:
   - Book metadata (title, author, date)
   - All 30 chapters organized in 4 Parts (Beginner/Intermediate/Advanced/Expert) + Appendices
   - HTML format with custom SCSS theme, dark mode toggle, MathJax
   - Fonts: Inter (body), JetBrains Mono (code), STIX Two Math (equations)
   - Colors: primary=#1a365d, secondary=#0d9488, accent=#d97706
   - `toc: true`, `toc-depth: 3`, `number-sections: true`, `code-fold: true`
   - `search: true`, `repo-url`, `repo-actions: [edit, issue]`
   - Julia engine with `--project` exeflags
   - `execute: cache: true, freeze: auto`
   - Bibliography: references.bib, CSL: apa.csl

3. Install quarto-live extension: `quarto add r-wasm/live`

4. Create Julia `Project.toml` with build-time dependencies:
   HypothesisTests, GLM, Distributions, StatsBase, DataFrames, CSV,
   CairoMakie, MultipleTesting, Bootstrap, KernelDensity

5. Create `assets/css/custom.scss`:
   - Hartzog color variables as SCSS custom properties
   - Wong colorblind palette: #0072B2, #D55E00, #009E73, #CC79A7, #F0E442, #56B4E9, #E69F00
   - Custom callout styles: Definition, Formula, Clinical Example, Common Mistake, Key Concept
   - Styled exercise blocks with hint/solution toggles
   - Print-friendly styles

6. Create `chapters/_common-setup.qmd`:
   ```markdown
   ```{julia}
   #| echo: false
   #| output: false
   using DataFrames, CSV, HypothesisTests, GLM, Distributions, StatsBase
   sample_data_dir = joinpath(@__DIR__, "..", "..", "assets", "sample_data")
   ```
   ```{ojs}
   //| echo: false
   statEngine = (await import("../../assets/js/stat-engine.js")).default
   plotFactory = (await import("../../assets/js/plot-factory.js")).default
   interpret = (await import("../../assets/js/interpretation.js")).default
   ```
   ```

7. Create placeholder `index.qmd` with book overview, tier descriptions, "How to Use This Book"

8. Create `references.bib` with 50+ foundational biostatistics references (Altman, Bland, Hosmer, Harrell, Gelman, Agresti, etc.)

9. Create `CLAUDE.md` with project conventions, tech stack, chapter template

10. Create directory skeleton for all folders

11. Create placeholder `.qmd` stubs for all 30 chapters (frontmatter + "Content coming soon")

12. Verify: `quarto render` produces complete book with navigation, search, and all placeholder chapters

**Quality Gates:**
- `quarto render` succeeds without errors
- Book renders with TOC, chapter navigation, search functional
- Custom theme applies (colors, fonts, dark mode toggle)
- MathJax renders: $\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$
- All 30 chapter stubs accessible via navigation

---

### PROMPT 002 — Shared OJS Modules & WebR Configuration

**Phase:** Foundation | **Prerequisites:** 001

**Create all `assets/js/` modules as ES modules importable from OJS cells:**

**stat-engine.js:**
- Descriptive: mean, median, mode, SD, variance, IQR, skewness, kurtosis, percentiles
- Distributions: normal/t/chi-squared/F/binomial/Poisson PDF/CDF/quantile via jstat
- Tests: one-sample/two-sample/paired t, chi-squared, Fisher exact, correlation, Mann-Whitney
- Effect sizes: Cohen's d, Hedges' g, eta-squared, OR, RR, NNT
- Confidence intervals: mean (Z/t), proportion (Wilson/Clopper-Pearson), difference, bootstrap
- Power approximations for t-test, chi-squared, correlation
- Returns standardized `TestResult` objects: `{testName, statistic, pValue, ci, effectSize, effectSizeName, df, n, interpretation}`

**plot-factory.js:**
- Observable Plot and D3 v7 wrappers
- `histogram(data, opts)` with KDE overlay, `boxplot(data, groups)` with violin toggle
- `scatter(x, y)` with regression line + CI band, `qqPlot(data)` with reference line
- `forestPlot(studies)`, `kmPlot(times, events, groups)`, `rocCurve(truth, scores)`
- `funnelPlot(effects, se)`, `heatmap(matrix)`, `distributionPlot(type, params)`
- All plots: Wong colorblind palette, responsive, tooltips, SVG/PNG download
- Theme matches custom.scss

**interpretation.js:**
- Input: `TestResult` → Output: structured plain-English interpretation
- One-sentence verdict, effect size classification (Cohen), CI interpretation
- Clinical significance commentary, assumption warnings
- APA-formatted result string

**data-upload.js:**
- Drag-and-drop file input for CSV/TSV
- Papa Parse for parsing with auto-detect delimiter/header/types
- Column type override UI (numeric/categorical/date/ID)
- Data preview table (first 20 rows), validation (missing %, outlier flags)
- Export as reactive OJS variable

**exercise-engine.js:**
- Multiple choice (single/multi), numeric with tolerance, fill-in-blank
- Drag-and-drop matching, score tracking via localStorage
- Hint/solution reveal with attempt counting
- Per-chapter completion %, `exerciseState` reactive OJS variable

**table-one.js:**
- Input: data array + group column
- Continuous: mean±SD or median(IQR) based on normality test
- Categorical: n(%), p-values: t-test/Wilcoxon or chi-squared/Fisher
- Output: formatted HTML table, CSV export

**WebR configuration:**
- Configure quarto-live for WebR with pre-installed packages: stats, MASS, survival, lme4, ggplot2, dplyr, tidyr, broom, pROC, meta, boot, car, psych, epiR, PropCIs
- Create shared R setup that pre-loads helper functions and sample data paths
- Verify WebR loads and executes R code in browser

**Quality Gates:**
- All OJS modules import correctly in a test `.qmd`
- stat-engine.js t-test output matches R `t.test()` within 1e-6
- plot-factory.js produces valid SVG output
- WebR loads successfully and runs `t.test(rnorm(100))` in browser

---

### PROMPT 003 — Sample Datasets

**Phase:** Foundation | **Prerequisites:** 001

**Create 8 synthetic clinical datasets in `assets/sample_data/` via `scripts/generate_datasets.jl`:**

1. **clinical_trial.csv** (n=500) — RCT Drug A vs Placebo for HTN.
   Columns: patient_id, age, sex, race, bmi, baseline_sbp, baseline_dbp, treatment_group, week4/8/12_sbp/dbp, adverse_event, adherence_pct, dropout, dropout_week

2. **survival_data.csv** (n=800) — Oncology survival.
   stage_I-IV, tumor_grade, treatment, time_to_event, event, ecog, tumor_size, lymph_nodes, comorbidity_index

3. **longitudinal_study.csv** (n=300×6=1800 rows) — HbA1c diabetes monitoring, 6 visits, medication groups

4. **case_control.csv** (n=400) — MI risk factors. 200 cases + 200 controls. smoking, lipids, BMI, family_hx

5. **rct_parallel.csv** (n=600) — 3-arm pain RCT. Drug A/B/Placebo, VAS_pain, SF_36, site

6. **diagnostic_test.csv** (n=1000) — Biomarker evaluation. gold_standard, severity, symptoms, test_1, test_2

7. **meta_analysis_studies.csv** (n=25 studies) — Study-level. SMD, SE, quality_score, year, region

8. **multivariate_clinical.csv** (n=1000) — LOS, ICU, APACHE, labs, readmission

Generate via Julia with fixed Random seed, realistic correlations, realistic missing (<5%).
Create `DATA_DICTIONARY.md` with full variable descriptions for each dataset.

**Also create `scripts/validate_webr.R`** — R scripts that load each dataset and compute reference values for all statistical tests used across chapters. Save reference values as `test/reference_values.json`.

**Quality Gates:**
- No impossible values, clinically plausible correlations
- All datasets loadable via `CSV.read()` in Julia and `read.csv()` in WebR
- `DATA_DICTIONARY.md` complete and accurate
- Reference values generated for validation

---

### PROMPT 004 — Landing Page & Appendices

**Phase:** Foundation | **Prerequisites:** 001, 002, 003

**Tasks:**

1. **index.qmd** — Full landing page:
   - Book title, author, tagline
   - "Who This Book Is For" section (physician researchers, clinical fellows, epidemiologists)
   - 4 tier cards with chapter counts and estimated completion times
   - "How to Use This Book" — explaining the three computation layers
   - "Interactive Features" showcase (embed one small OJS demo as a teaser)
   - "Prerequisites" — algebra, basic research methods
   - Navigation to first chapter

2. **appendix/glossary.qmd** — 500+ statistical terms as Quarto definition lists, searchable.
   Terms organized alphabetically. Cross-referenced to chapters where each term is introduced.

3. **appendix/formula-reference.qmd** — All key formulas organized by chapter.
   LaTeX rendered, with links back to the chapter section where each is derived.

4. **appendix/test-decision-tree.qmd** — Master interactive test selector.
   OJS-powered: answer questions about your data → get recommended test → link to chapter.
   Decision tree:
   - Outcome type → continuous / binary / categorical / count / time-to-event
   - Number of groups → 1 / 2 / 3+
   - Paired or independent?
   - Assumptions met?
   → Recommended test + chapter link

5. **appendix/r-code-reference.qmd** — WebR code cookbook. Common R patterns used throughout.
   Loading data, running tests, creating plots. Copy-paste ready.

6. **appendix/datasets.qmd** — Dataset documentation with download links and previews.
   Embedded data preview tables (first 10 rows of each dataset).

**Quality Gates:**
- All appendix pages render and are accessible from book navigation
- Glossary terms link to correct chapters
- Test decision tree produces correct recommendations
- R code cookbook examples execute in WebR

---

## 4. Chapter Prompts — Beginner Tier

### PROMPT 010 — Ch1: Types of Data and Measurement Scales

**Tier:** Beginner | **Chapter:** 1 | **Prerequisites:** none | **Time:** 45 min
**File:** `chapters/beginner/01-data-types.qmd` | **Dataset:** clinical_trial.csv

**Content sections:**
- 1.1 Why measurement scales matter (determines test choice)
- 1.2 Nominal (blood type, diagnosis; mode, frequencies, chi-squared)
- 1.3 Ordinal (cancer stage, NYHA, GCS, APGAR; median, IQR)
- 1.4 Interval (temperature, IQ; no true zero; mean, SD)
- 1.5 Ratio (weight, BP, labs; true zero; geometric mean for log-normal)
- 1.6 Special types (binary, count/Poisson, time-to-event, compositional)
- 1.7 Decision framework flowchart + variable-to-test mapping table

**OJS Demos:**
1. **Classification Game** — 20 clinical variables appear one at a time. User selects type. Scored.
2. **Distribution Shape Explorer** — dropdown selects column from sample data. Auto-detect type, show histogram or bar chart with appropriate summary stats.
3. **Wrong Test Detector** — run an inappropriate test (e.g., mean of ordinal data). Show why the result is meaningless with visual explanation.
4. **Variable Audit** — auto-classify all variables in uploaded dataset, user overrides, export codebook as CSV.

**WebR Analysis:** Upload CSV → auto-classify columns → verify/override types → generate codebook → variable summary dashboard with appropriate stats per type.

**Exercises (5):** Classify variables from published abstract, identify misclassified variables, match variables to appropriate tests, critique a colleague's analysis.

---

### PROMPT 011 — Ch2: Descriptive Statistics

**Tier:** Beginner | **Chapter:** 2 | **Prerequisites:** [1] | **Time:** 60 min
**File:** `chapters/beginner/02-descriptive.qmd` | **Dataset:** clinical_trial.csv

**Content:** Central tendency (arithmetic/geometric/harmonic/trimmed/weighted mean, median, mode); Dispersion (range, IQR, variance, SD, CV, MAD); Percentiles/box plots; Distribution shape (skewness, kurtosis); Frequency tables/cross-tabs; The "Table 1" in medical papers

**Key equations:** $\bar{x}$, $s^2$, $CV = s/\bar{x} \times 100\%$, $IQR = Q_3 - Q_1$, skewness, kurtosis

**OJS Demos:**
1. **Mean-Median-Mode Machine** — adjustable distribution shape + outlier slider. Watch mean shift while median stays stable.
2. **SD Intuition Builder** — same mean, different SD. Slider adjusts SD, show overlapping distributions.
3. **Box Plot Anatomy Lab** — hover components to label. Toggle violin/swarm/raincloud overlay.
4. **Table 1 Generator** — select variables + grouping column from sample data. Publication-quality table with toggle: mean vs median, p-values on/off.

**WebR Analysis:** Upload → comprehensive descriptive report + distribution explorer with normality testing + Table 1 generation.

---

### PROMPT 012 — Ch3: Probability Foundations

**Tier:** Beginner | **Chapter:** 3 | **Prerequisites:** [1,2] | **Time:** 75 min
**File:** `chapters/beginner/03-probability.qmd` | **Dataset:** diagnostic_test.csv

**Content:** Probability rules (addition, multiplication, conditional); Bayes' theorem for diagnostic tests (PPV/NPV/LR from sensitivity/specificity/prevalence); Distributions intro (Binomial, Poisson, Normal, Log-Normal, Exponential); Normal deep dive (Z-scores, CLT, QQ plots); Clinical decision analysis

**OJS Demos:**
1. **Bayes' Theorem Visualizer** — sliders: prevalence, sensitivity, specificity. Fagan nomogram + natural frequency 1000-patient icon array (colored TP/FP/TN/FN). Watch PPV change as prevalence slider moves.
2. **Distribution Explorer** — dropdown: distribution type. Parameter sliders. Show PDF/PMF + CDF side by side.
3. **CLT Simulator** — draw samples from any distribution (uniform, exponential, bimodal). Animated convergence of sampling distribution to Normal. Sliders: sample size, number of samples. THE signature demo.
4. **Screening Test Evaluator** — input sensitivity/specificity/prevalence → icon array + 2×2 table + all diagnostic metrics.

**WebR Analysis:** Upload diagnostic test data → 2×2 table → Sens/Spec/PPV/NPV/ROC/AUC/optimal cutpoint → distribution fitting.

---

### PROMPT 013 — Ch4: Sampling and Study Design

**Tier:** Beginner | **Chapter:** 4 | **Prerequisites:** [1,2,3] | **Time:** 90 min
**File:** `chapters/beginner/04-sampling-design.qmd` | **Dataset:** case_control.csv

**Content:** Study design hierarchy (cross-sectional/case-control/cohort/RCT/N-of-1); Sampling methods (simple random/stratified/cluster/systematic/convenience); Bias taxonomy (selection/information/confounding/lead-time/immortal-time/ecological fallacy — each with clinical example + mitigation); Randomization methods; Sample size introduction; Reporting guidelines (SPIRIT/STROBE/CONSORT/PRISMA/STARD)

**OJS Demos:**
1. **Study Design Decision Tree** — answer questions about research goal → recommended design + reporting checklist.
2. **Sampling Simulator** — 10K-dot population with spatial clusters. Compare random/stratified/cluster sampling. Show bias + precision differences.
3. **Bias Illustrated** — 6 interactive scenarios, each showing a specific bias with DAG and before/after mitigation.
4. **Randomization Validator** — simulate randomization, show covariate balance plots (Love plot).

**WebR Analysis:** Study Design Advisor (input research question → recommended design); Covariate Balance Checker for uploaded trial data.

---

### PROMPT 014 — Ch5: Confidence Intervals

**Tier:** Beginner | **Chapter:** 5 | **Prerequisites:** [1,2,3] | **Time:** 60 min
**File:** `chapters/beginner/05-confidence-intervals.qmd` | **Dataset:** clinical_trial.csv

**Content:** Correct interpretation (and 3 common wrong ones); CI for mean (Z vs t); CI for proportion (Wald/Wilson/Agresti-Coull/Clopper-Pearson); CI for differences and ratios (means/proportions/OR/RR/HR/NNT); Bootstrap CIs (percentile/BCa); CI width, precision, sample size; Reporting (ICMJE)

**OJS Demos:**
1. **CI Interpretation Simulator** — draw 100 CIs from same population. ~5 miss true parameter. Toggle 90/95/99%.
2. **CI Width Explorer** — 3 sliders: n, confidence level, SD. Watch CI shrink/grow.
3. **Bootstrap CI Machine** — animated resampling. Build bootstrap distribution. Show percentile + BCa CIs.
4. **Forest Plot Builder** — add/remove studies with point estimates + CIs. See pooled estimate change.

**WebR Analysis:** CI Calculator for all numeric variables (parametric + bootstrap, multiple methods compared); Precision-Based Sample Size calculator.

---

### PROMPT 015 — Ch6: Hypothesis Testing Framework

**Tier:** Beginner | **Chapter:** 6 | **Prerequisites:** [1,2,3,5] | **Time:** 90 min
**File:** `chapters/beginner/06-hypothesis-testing.qmd` | **Dataset:** clinical_trial.csv

**Content:** Logic of hypothesis testing (Fisher/Neyman-Pearson); Type I/II errors (clinical consequences); P-value (correct definition, 5 common misinterpretations, ASA 2016 statement); One-tailed vs two-tailed; Multiple testing (FWER/FDR, Bonferroni/Holm/Hochberg/BH); Statistical vs clinical significance (MCID, effect sizes, superiority/non-inferiority/equivalence)

**OJS Demos:**
1. **Hypothesis Test Visualizer** — two overlapping Normal distributions (H₀ and H₁). Shade α, β, power regions. Sliders: μ₀, μ₁, σ, n, α. THE key demo — students see how each parameter affects shaded regions.
2. **P-Value Simulator** — simulate 10,000 experiments under H₀ (uniform p) vs H₁ (right-skewed). Toggle.
3. **Multiple Testing Disaster** — run 20 tests on random data. Show false positives. Apply corrections.
4. **Clinical Significance Detector** — CI relative to zero AND relative to MCID. Four outcome zones.

**WebR Analysis:** Hypothesis Test Advisor; P-Value Context Report (effect size + CI + power).

---

### PROMPT 016 — Ch7: Visualizing Medical Data

**Tier:** Beginner | **Chapter:** 7 | **Prerequisites:** [1,2] | **Time:** 75 min
**File:** `chapters/beginner/07-visualization.qmd` | **Dataset:** clinical_trial.csv

**Content:** Tufte principles (data-ink ratio, chartjunk, lie factor); Cleveland hierarchy; Accessible color palettes; Univariate (histogram/density/box/violin/raincloud/bar); Bivariate (scatter/grouped box/mosaic/line/Bland-Altman); Multivariate (pairs/heatmap/parallel coords/PCA biplot/facets); Clinical specialized (forest/KM/ROC/funnel/CONSORT/nomogram/DCA); Common mistakes (truncated axis, dual axis, pie charts, 3D, rainbow); Publication standards (300 DPI, vector vs raster)

**OJS Demos:**
1. **Plot Type Chooser** — interactive decision tree: data type questions → recommended plot.
2. **Visualization Playground** — select variables, map to aesthetic roles, choose plot type, customize theme/palette/annotations. Live-updating Observable Plot.
3. **Lie Factor Calculator** — input true ratio + visual ratio → compute lie factor.
4. **Clinical Plot Gallery** — 20+ clinical plot types with live examples. Click to explore.

**WebR Analysis:** Auto-Visualization (recommended plots for all variable combinations); Custom Figure Builder with ggplot2.

---

## 5. Chapter Prompts — Intermediate Tier

### PROMPT 020 — Ch8: The t-Test Family

**Tier:** Intermediate | **Chapter:** 8 | **Prerequisites:** [2,5,6] | **Dataset:** clinical_trial.csv

**Content:** One-sample t (vs benchmark); Independent two-sample t; Welch's t (default); Paired t; Assumptions (normality, independence, equal variance); Effect sizes (Cohen's d, Hedges' g, CLES); Nonparametric alternatives (Wilcoxon SR, Mann-Whitney U); Equivalence testing (TOST); APA reporting

**OJS Demos:** t-Distribution Explorer (adjust df); Two-Group Comparator (drag distributions); Paired vs Independent power comparison; Assumption Violation Simulator (Type I error rates); Equivalence Testing Visualizer (TOST step-by-step)

**WebR Analysis:** Compare Two Groups (full workflow); Pre-Post Analysis (paired + effect size). Validation: p-values match R `t.test()` within 1e-10.

---

### PROMPT 021 — Ch9: Chi-Squared and Categorical Data

**Tier:** Intermediate | **Chapter:** 9 | **Prerequisites:** [1,3,6] | **Dataset:** case_control.csv

**Content:** Goodness-of-fit; Independence; Fisher exact; McNemar; Association measures (OR/RR/phi/Cramer's V); Stratified analysis (Mantel-Haenszel); Cochran-Armitage trend test

**OJS Demos:** 2×2 Table Laboratory; Expected vs Observed animation; OR vs RR Clarifier; Simpson's Paradox demo

**WebR Analysis:** Cross-Tabulation Analyzer; Risk Calculator (OR/RR/ARR/NNT with CIs)

---

### PROMPT 022 — Ch10: ANOVA

**Tier:** Intermediate | **Chapter:** 10 | **Prerequisites:** [8] | **Dataset:** rct_parallel.csv

**Content:** One-way ANOVA; Post-hoc (Tukey/Dunnett/Scheffé); Two-way factorial; Repeated measures; ANCOVA; Assumptions (sphericity); Kruskal-Wallis/Friedman; Effect sizes (η²/partial η²/ω²); Planned contrasts; Mixed ANOVA

**OJS Demos:** ANOVA Decomposition (SS bars); Post-Hoc Comparison Matrix; Interaction Plot Builder; Sphericity Explorer; ANCOVA vs No Adjustment comparison

**WebR Analysis:** Multi-Group Comparison Pipeline; Repeated Measures Analyzer

---

### PROMPT 023 — Ch11: Correlation

**Tier:** Intermediate | **Chapter:** 11 | **Prerequisites:** [2,6,7] | **Dataset:** multivariate_clinical.csv

**Content:** Pearson; Spearman; Kendall tau; Point-biserial; Partial correlation; Correlation ≠ causation; Correlation matrix + multicollinearity; ICC; Concordance correlation; Sample size

**OJS Demos:** Anscombe's Quartet + Datasaurus Dozen; Correlation Guesser game; Partial Correlation Revealer; ICC Calculator

**WebR Analysis:** Correlation Matrix Explorer (heatmap + significance); Agreement Analysis (ICC + Bland-Altman)

---

### PROMPT 024 — Ch12: Linear Regression

**Tier:** Intermediate | **Chapter:** 12 | **Prerequisites:** [8,11] | **Dataset:** multivariate_clinical.csv

**Content:** Simple linear; OLS derivation; Coefficient interpretation; R²/adjusted R²; Residual diagnostics (4-panel); Multiple regression; Categorical predictors; Interactions; Polynomial; Variable selection (forward/backward/AIC — why stepwise is problematic); Multicollinearity (VIF); Influential observations (Cook's D, leverage, DFBETAS); Standardized coefficients

**OJS Demos:** Fit the Line (drag points, live regression update); Residual Diagnostic Dashboard; Multicollinearity Detector (r slider → watch VIF/SE explode); Variable Selection Race; Influential Point Laboratory

**WebR Analysis:** Regression Modeler; Diagnostic Report; Model Comparison (AIC/BIC/R²)

---

### PROMPT 025 — Ch13: Logistic Regression

**Tier:** Intermediate | **Chapter:** 13 | **Prerequisites:** [9,12] | **Dataset:** case_control.csv

**Content:** Why not linear for binary; Logistic function/log-odds; Simple/multiple logistic; OR interpretation; Confounding adjustment; Diagnostics (Hosmer-Lemeshow/ROC/calibration); Ordinal/multinomial; Penalized (Ridge/LASSO/Elastic Net); Clinical prediction models

**OJS Demos:** Logistic Curve Fitter (β₀, β₁ sliders); OR Forest Plot; ROC Curve Builder; Calibration Plot; LASSO Variable Selector (lambda slider → coefficient path)

**WebR Analysis:** Binary Outcome Modeler; Risk Score Builder; Discrimination/Calibration Report

---

### PROMPT 026 — Ch14: Non-Parametric Methods

**Tier:** Intermediate | **Chapter:** 14 | **Prerequisites:** [8,9,10] | **Dataset:** clinical_trial.csv

**Content:** When to go nonparametric (decision framework); Wilcoxon SR; Mann-Whitney U; Kruskal-Wallis; Friedman; Permutation tests; Sign test; Rank-based effect sizes; Power comparison (parametric vs nonparametric)

**OJS Demos:** Ranking Machine (data → ranks visualization); Parametric vs Non-Parametric Face-Off (same data, both tests); Permutation Test Visualizer (animated label shuffling); Power Comparison Simulation

**WebR Analysis:** Non-Parametric Test Suite; Parametric vs Non-Parametric Comparison with recommendation

---

### PROMPT 027 — Ch15: Power and Sample Size

**Tier:** Intermediate | **Chapter:** 15 | **Prerequisites:** [6,8,9,12,13]

**Content:** Power framework (α, β, δ, n); Power for all test types; MCID determination; Adjustments (dropout/non-compliance/multiple testing/clustering); Simulation-based power; Post-hoc power fallacy; Grant writing sample size section

**OJS Demos:** Power Calculator Suite (dropdown: test type → sliders → required n); Power Curves (n vs power); Monte Carlo Simulation Power; Budget vs Power Trade-off; Post-Hoc Power Fallacy (show why it's circular)

**WebR Analysis:** Power Analysis Report from pilot data; Sensitivity Analysis across effect sizes

---

### PROMPT 028 — Ch16: Bayesian Thinking

**Tier:** Intermediate | **Chapter:** 16 | **Prerequisites:** [3,5,6]

**Content:** Frequentist vs Bayesian philosophy; Prior/likelihood/posterior; Conjugate priors (Beta-Binomial, Normal-Normal); Credible intervals vs CIs; Choosing priors; Bayesian A/B testing; Adaptive trial designs; MCMC intuition (Metropolis-Hastings); Bayesian vs frequentist comparison

**OJS Demos:** Prior-to-Posterior Updater (Beta-Binomial with sliders — THE signature Bayesian demo); Beta-Binomial Clinical Trial (sequential updating as data arrives); MCMC Visualizer (2D random walk); Bayesian vs Frequentist Face-Off (same data, both analyses); Prior Sensitivity Analysis

**WebR Analysis:** Bayesian Proportion Comparison; Bayesian Mean Comparison (using R `BayesFactor` package in WebR)

---

## 6. Chapter Prompts — Advanced Tier

### PROMPT 030 — Ch17: Survival Analysis

**Tier:** Advanced | **Chapter:** 17 | **Prerequisites:** [6,12,13] | **Dataset:** survival_data.csv

**Content:** Censoring types; Kaplan-Meier; Life table; Log-rank/Wilcoxon-Gehan; Cox PH; Hazard ratio interpretation; PH assumption (Schoenfeld/log-log); Time-varying covariates; Competing risks (Fine-Gray); Parametric models; Landmark analysis; RMST; Sample size (Schoenfeld formula); Reporting (CONSORT-TIME/STROBE)

**OJS Demos:** KM Builder (add/censor patients step-by-step); Cox Dashboard; PH Assumption Checker; Competing Risks Visualizer; Censoring Impact Demonstrator

**WebR Analysis:** Survival Pipeline (KM + log-rank + Cox via `survival` package); Competing Risks Analysis

---

### PROMPT 031 — Ch18: Mixed-Effects Models

**Tier:** Advanced | **Chapter:** 18 | **Prerequisites:** [10,12] | **Dataset:** longitudinal_study.csv

**Content:** Why standard regression fails for clustered data; Fixed vs random effects; Random intercepts/slopes; Crossed/nested; Model selection (REML vs ML/LRT/AIC/BIC); GLMM; Diagnostics; Marginal vs conditional; Missing data in longitudinal; Reporting (JARS-Quant)

**OJS Demos:** Spaghetti Plot + Mixed Model overlay; Random Effects Forest Plot; ICC Calculator; Missing Data Impact on trajectories

**WebR Analysis:** Longitudinal Analysis Pipeline (via `lme4`); Clustering Assessment (ICC/design effects)

---

### PROMPT 032 — Ch19: GLM Extensions

**Tier:** Advanced | **Chapter:** 19 | **Prerequisites:** [12,13] | **Dataset:** multivariate_clinical.csv

**Content:** GLM framework (link functions, exponential family); Poisson; Overdispersion/negative binomial; Zero-inflated; Gamma (costs/LOS); Beta (proportions); Quantile regression; Robust regression

**OJS Demos:** Link Function Visualizer; Poisson vs NB comparison; Zero-Inflation Detector; GLM Family Comparator (decision tree)

**WebR Analysis:** Count Data Modeler; Cost/Utilization Analysis

---

### PROMPT 033 — Ch20: Meta-Analysis

**Tier:** Advanced | **Chapter:** 20 | **Prerequisites:** [5,6,12] | **Dataset:** meta_analysis_studies.csv

**Content:** PRISMA 2020; Effect size computation (SMD/OR/RR/HR/MD); Fixed-effect (MH/inverse variance); Random-effects (DL/REML/Knapp-Hartung); Heterogeneity (Q/I²/τ²/prediction intervals); Forest plots; Publication bias (funnel/Egger/trim-and-fill); Subgroup/meta-regression; Network meta-analysis; IPD; GRADE

**OJS Demos:** Forest Plot Studio (drag studies, toggle fixed/random); Heterogeneity Explorer (τ² slider); Funnel Plot Detective; Fixed vs Random weights; Meta-Regression bubble plot

**WebR Analysis:** Meta-Analysis Pipeline (via `meta` or `metafor` in WebR); Publication Bias Assessment

---

### PROMPT 034 — Ch21: Diagnostic Test Evaluation

**Tier:** Advanced | **Chapter:** 21 | **Prerequisites:** [3,13] | **Dataset:** diagnostic_test.csv

**Content:** Sens/Spec deep dive; Likelihood ratios; ROC/AUC; Optimal cutpoint (Youden/cost-based); Comparing tests (DeLong); Clinical prediction rules; NRI/IDI; Decision curve analysis; STARD; Multi-class

**OJS Demos:** ROC Interactive; LR Nomogram; Decision Curve Analysis; Prediction Rule Validator

**WebR Analysis:** STARD-Compliant Evaluator (via `pROC`); Prediction Model Validator

---

### PROMPT 035 — Ch22: Missing Data

**Tier:** Advanced | **Chapter:** 22 | **Prerequisites:** [12,13,18]

**Content:** MCAR/MAR/MNAR with clinical examples; Consequences of ignoring; Complete case analysis; Single imputation limitations; MICE (theory + Rubin's rules); ML methods (EM/FIML); Sensitivity analysis (pattern-mixture/tipping point); Missing in trials (ITT/estimand); Reporting

**OJS Demos:** Mechanism Visualizer (introduce MCAR/MAR/MNAR, show resulting bias); Imputation Comparator; Rubin's Rules Calculator; Tipping Point analysis

**WebR Analysis:** Missing Data Diagnostic (pattern matrix, Little's MCAR test); MICE Pipeline with Pooled Results (via `mice` in WebR)

---

### PROMPT 036 — Ch23: Causal Inference

**Tier:** Advanced | **Chapter:** 23 | **Prerequisites:** [4,12,13]

**Content:** Confounding; Potential outcomes (Rubin); DAGs; PS estimation; PS methods (matching/stratification/IPTW/covariate adjustment); Balance assessment (SMD/Love plots); Sensitivity (E-value/Rosenbaum); Instrumental variables; DiD; RDD; Reporting

**OJS Demos:** DAG Builder (drag-and-drop nodes/arrows, auto-identify confounders/colliders); PS Matching Visualizer; Balance Before/After (Love plot); E-Value Calculator

**WebR Analysis:** PS Analysis Pipeline (via `MatchIt`); Causal Diagram Analyzer

---

### PROMPT 037 — Ch24: Multivariable Model Building

**Tier:** Advanced | **Chapter:** 24 | **Prerequisites:** [12,13,17,18] | **Dataset:** multivariate_clinical.csv

**Content:** Prediction vs explanation vs causal goals; Variable selection strategies; Non-linearity (splines/fractional polynomials); Interactions; Overfitting/bias-variance; Internal validation (CV/bootstrap optimism); External validation; Performance metrics; Nomograms; TRIPOD

**OJS Demos:** Overfitting Demonstrator (complexity slider → training/test error); Spline Fitter; Cross-Validation Visualizer; Nomogram Builder

**WebR Analysis:** Guided Model Building Workshop; Model Validation Report

---

### PROMPT 038 — Ch25: Advanced Longitudinal Methods

**Tier:** Advanced | **Chapter:** 25 | **Prerequisites:** [10,18] | **Dataset:** longitudinal_study.csv

**Content:** GEE (population-averaged); GEE vs mixed models; Correlation structures (exchangeable/AR1/unstructured); Growth curve models; Latent class growth; Joint models (longitudinal + survival); Handling dropout; Reporting

**OJS Demos:** GEE vs Mixed Model comparison; Correlation Structure Selector; Growth Curve Animator; Joint Model Visualizer

**WebR Analysis:** GEE Pipeline (via `geepack`); Trajectory Analysis

---

### PROMPT 039 — Ch26: High-Dimensional Data and Machine Learning

**Tier:** Advanced | **Chapter:** 26 | **Prerequisites:** [6,12,13,15]

**Content:** Multiple testing at genomics scale; FWER (Bonferroni/Holm/Westfall-Young); FDR (BH/Storey q); PCA/Factor analysis; Cluster analysis (K-means/hierarchical/DBSCAN); Supervised ML (random forests/gradient boosting/SVM); Cross-validation; Variable importance (SHAP/permutation); ML vs traditional statistics; TRIPOD-ML

**OJS Demos:** FDR Visualizer (volcano plot with correction toggle); PCA Explorer (biplot with loadings); Cluster Explorer (K slider); Random Forest Explainer; SHAP Dashboard

**WebR Analysis:** High-Dimensional Pipeline (PCA + clustering via R); ML Prediction Model (via `caret` or `randomForest` in WebR)

---

## 7. Chapter Prompts — Expert Tier

### PROMPT 040 — Ch27: Clinical Trial Design

**Tier:** Expert | **Chapter:** 27 | **Prerequisites:** [4,6,15,17] | **Dataset:** clinical_trial.csv

**Content:** Phase I-IV; Adaptive (group sequential/SSR); Non-inferiority/equivalence (margin selection); Crossover (washout/carryover); Cluster RCT (design effect/ICC); Factorial; Platform/basket/umbrella; Bayesian adaptive; Interim analysis (O'Brien-Fleming/Lan-DeMets); SAP structure; Estimand framework (ICH E9(R1)); Regulatory; DMC reports

**OJS Demos:** Trial Designer (answer questions → recommended design); Group Sequential Boundaries; NI Margin Explorer; Adaptive Simulator; Estimand Builder

**WebR Analysis:** Trial Data Analyzer; SAP Template Generator

---

### PROMPT 041 — Ch28: Advanced Survival Methods

**Tier:** Expert | **Chapter:** 28 | **Prerequisites:** [17,18]

**Content:** Competing risks (cause-specific vs sub-distribution); Frailty models; AFT; Joint models; RMST as HR alternative; Landmark/conditional; Multi-state; Recurrent events (AG/PWP); Cure models; Dynamic prediction

---

### PROMPT 042 — Ch29: Bayesian Clinical Trials

**Tier:** Expert | **Chapter:** 29 | **Prerequisites:** [16,27]

**Content:** Bayesian trial design; Adaptive randomization; Hierarchical models; Bayesian NMA; Bayesian diagnostics; Bayesian sample size; MCMC diagnostics; Prior elicitation; FDA guidance; Reporting

---

### PROMPT 043 — Ch30: Putting It All Together

**Tier:** Expert | **Chapter:** 30 | **Prerequisites:** ALL

**Content:** PICOT/FINER; Study design selection (master decision tree linking all chapters); Sample size justification; Data collection/management; EDA workflow; Statistical method selection; Running analysis; Clinical interpretation; Publication tables/figures; Writing methods/results; Responding to reviewers; Statistical consulting; Reproducible research

**OJS Demos:** Statistical Method Selector (master flowchart linking to all chapters); Methods Section Writer (fill in blanks → generate methods text); Results Section Writer; Reviewer Response Helper; Full Analysis Walkthrough

**WebR Analysis:** Complete Pipeline (upload → EDA → test selection → analysis → report); Publication Package Generator

---

## 8. Integration Prompts

### PROMPT 050 — Cross-Chapter Assembly & Navigation

**Phase:** Integration | **Prerequisites:** All chapter prompts complete

**Tasks:**
1. Finalize `_quarto.yml` chapter listing — verify all 30 .qmd files listed correctly
2. Build cross-reference index (ensure all `@sec-`, `@fig-`, `@tbl-`, `@eq-` refs resolve)
3. Verify search index covers all chapter content
4. Add "Key Concepts" callout boxes linking to prerequisite chapters where needed
5. Add "Next Steps" section at end of each chapter linking to next chapter(s)
6. Verify all OJS imports resolve correctly
7. Verify all WebR code blocks execute
8. Test navigation: first chapter → last chapter via Previous/Next
9. Full `quarto render` — all 30 chapters + appendices + index
10. Fix any broken cross-references, missing images, rendering errors

---

### PROMPT 051 — Assessment & Progress System

**Phase:** Integration | **Prerequisites:** 050

**Tasks:**
1. Create `assets/js/progress-tracker.js`:
   - Track chapter completion via localStorage
   - Track exercise scores per chapter
   - Calculate overall progress percentage
   - Visual progress bar component (OJS)
2. Add progress indicators to each chapter's frontmatter section
3. Create `progress-dashboard.qmd` appendix page:
   - Overall progress bar
   - Per-chapter completion cards
   - Exercise score summary
   - Recommended next chapter based on completion
4. Add placement quiz to `index.qmd`:
   - 10 questions spanning beginner → expert
   - Recommend starting chapter based on score
5. OJS progress widget in sidebar (if Quarto supports, otherwise in footer)

---

### PROMPT 052 — Performance & Polish

**Phase:** Integration | **Prerequisites:** 051

**Tasks:**
1. Optimize WebR loading:
   - Lazy-load WebR only on chapters that use it
   - Show loading indicator while WebR initializes
   - Pre-load common R packages in background
2. Optimize OJS modules:
   - Bundle shared modules to reduce HTTP requests
   - Minify JavaScript for production
3. Run Lighthouse audit on 5 representative chapters
   - Performance score > 80
   - Accessibility score > 90
   - Best Practices score > 90
4. Image optimization (compress, lazy-load, responsive srcset)
5. Add `<meta>` tags for social sharing (Open Graph, Twitter cards)
6. Add Google Analytics / Plausible analytics snippet
7. Final dark mode verification across all chapters
8. Mobile responsive verification on 3 representative chapters

---

### PROMPT 053 — Multi-Format Export & Documentation

**Phase:** Integration | **Prerequisites:** 052

**Tasks:**
1. Configure PDF export via `quarto render --to pdf`:
   - LaTeX template with professional formatting
   - Page numbers, headers, TOC
   - Figures rendered as static images (OJS → PNG fallback)
   - WebR blocks → static code listing
2. Create `CONTRIBUTING.md`: how to add a new chapter
3. Create `ARCHITECTURE.md`: system overview
4. Create `README.md` with setup instructions:
   - Prerequisites (Quarto 1.6+, Julia 1.11+, R for WebR validation)
   - Build: `quarto render`
   - Preview: `quarto preview`
   - Deploy: `quarto publish gh-pages`
5. Generate PDF version of complete textbook
6. Verify EPUB output if desired: `quarto render --to epub`

---

## 9. QA & Deployment Prompts

### PROMPT 060 — Render Validation & Link Checking

**Phase:** QA | **Tasks:**
1. `quarto render` — all 30 chapters + appendices without errors
2. Check all cross-references resolve (`@sec-`, `@fig-`, `@tbl-`, `@eq-`)
3. Check all internal links (chapter-to-chapter, chapter-to-appendix)
4. Check all external links (DOIs, reference URLs)
5. Verify all OJS demos load and respond to interaction
6. Verify all WebR blocks execute without errors
7. Verify all images render
8. Create `test/validate_renders.sh` script automating these checks

---

### PROMPT 061 — Statistical Validation

**Phase:** QA | **Tasks:**
1. Run `scripts/validate_webr.R` — R reference scripts for every statistical test
2. Compare WebR results against `test/reference_values.json`
3. Tolerance: p-value within 1e-10, effect size within 1e-6
4. Verify: t-test, chi-squared, ANOVA, correlation, regression, logistic, survival, meta-analysis
5. Verify OJS stat-engine.js matches R for basic tests
6. Create validation report documenting all comparisons
7. Fix any discrepancies

---

### PROMPT 062 — Accessibility & Mobile Audit

**Phase:** QA | **Tasks:**
1. Lighthouse audit: Performance > 80, Accessibility > 90
2. Screen reader compatibility (ARIA labels for interactive elements)
3. Keyboard navigation through all demos
4. Color contrast verification (WCAG AA for all text)
5. Mobile layout verification on phone/tablet viewports
6. MathJax accessibility (aria-label for equations)
7. Alt text for all images
8. Create `test/lighthouse.sh` automation script

---

### PROMPT 063 — Deployment

**Phase:** Deployment | **Tasks:**
1. Create GitHub repository `timothyhartzog/BiostatTextbook`
2. Push all source files
3. Configure GitHub Pages: `quarto publish gh-pages`
4. Create GitHub Actions workflow:
   - On push to main: `quarto render` + deploy to GitHub Pages
   - On PR: `quarto render` (verify build succeeds)
   - Scheduled: weekly link check
5. Configure custom domain if desired
6. Verify deployed site is fully functional
7. Create release tag v1.0.0

---

## 10. Orchestrator Script

```bash
#!/usr/bin/env bash
# orchestrator.sh — Build BiostatTextbook (Quarto) with Claude Code
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-$(pwd)}"
PROMPTS_DIR="${PROJECT_DIR}/prompts"
STATUS_FILE="${PROJECT_DIR}/build/status.toml"
MAX_PARALLEL="${MAX_PARALLEL:-10}"
MAX_TURNS=50

mkdir -p "${PROJECT_DIR}/build"

is_complete() {
    grep -q "^\[prompt_${1}\]" "$STATUS_FILE" 2>/dev/null && \
    grep -A1 "^\[prompt_${1}\]" "$STATUS_FILE" | grep -q 'status = "complete"'
}

run_prompt() {
    local f=$1 id=$(basename "$1" .md | grep -oP '\d{3}')
    is_complete "$id" && { echo "Skip $id"; return 0; }
    echo "[$(date +%H:%M:%S)] Running $id"
    printf '\n[prompt_%s]\nstatus = "running"\nstarted = "%s"\n' \
        "$id" "$(date -Iseconds)" >> "$STATUS_FILE"
    if claude -p "$f" --allowedTools bash,write,edit,read \
        --max-turns $MAX_TURNS 2>&1 | tee "build/log_${id}.txt"; then
        sed -i "/prompt_${id}/,/status/{s/running/complete/}" "$STATUS_FILE"
    else
        sed -i "/prompt_${id}/,/status/{s/running/failed/}" "$STATUS_FILE"
        return 1
    fi
}
export -f run_prompt is_complete
export PROJECT_DIR STATUS_FILE MAX_TURNS

# Phase 1: Foundation (sequential)
echo "=== PHASE 1: Foundation ==="
for p in 001 002 003 004; do
    run_prompt "${PROMPTS_DIR}/foundation/prompt_${p}"*.md || exit 1
done
quarto render --to html 2>&1 | tail -5 || exit 1

# Phase 2: Chapters (parallel)
echo "=== PHASE 2: Chapters (parallel x${MAX_PARALLEL}) ==="
find "${PROMPTS_DIR}/chapters/" -name '*.md' | sort | \
    parallel -j "$MAX_PARALLEL" --progress run_prompt {}

# Phase 3: Integration (sequential)
echo "=== PHASE 3: Integration ==="
for p in 050 051 052 053; do
    run_prompt "${PROMPTS_DIR}/integration/prompt_${p}"*.md
done

# Phase 4: QA + Deploy (sequential)
echo "=== PHASE 4: QA & Deploy ==="
for p in 060 061 062 063; do
    run_prompt "${PROMPTS_DIR}/qa/prompt_${p}"*.md
done

quarto render
echo "=== BUILD COMPLETE ==="
```

---

## 11. Dependency Graph

```
Foundation: 001 → 002 → 003 → 004

Parallel Waves:
  A: 010(Ch1) | 011(Ch2) | 016(Ch7)         ← no chapter deps
  B: 012(Ch3) | 013(Ch4)                     ← need Ch1-2
  C: 014(Ch5) | 015(Ch6)                     ← need Ch1-3
  D: 020(Ch8) | 021(Ch9) | 023(Ch11)         ← need beginner
  E: 022(Ch10)| 026(Ch14)| 027(Ch15)
  F: 024(Ch12)| 025(Ch13)| 028(Ch16)
  G: 030-035  (Ch17-22)                      ← advanced
  H: 036-039  (Ch23-26)
  I: 040-042  (Ch27-29)                      ← expert
  J: 043      (Ch30)                         ← ALL

Integration: 050 → 051 → 052 → 053
QA/Deploy:   060 → 061 → 062 → 063
```

### Estimated Timeline

```
Foundation:   4 prompts × 20 min =  80 min (sequential)
Chapters:    30 prompts × 15 min =  45 min (10× parallel)
Integration:  4 prompts × 15 min =  60 min (sequential)
QA/Deploy:    4 prompts × 15 min =  60 min (sequential)
TOTAL WALL TIME: ~4 hours
```

---

## Appendix: Prompt File Layout

```
prompts/
├── foundation/   prompt_001–004
├── chapters/     prompt_010–043
├── integration/  prompt_050–053
└── qa/           prompt_060–063
```

## Appendix: Color & Typography

```
Wong colorblind-safe palette: #0072B2, #D55E00, #009E73,
#CC79A7, #F0E442, #56B4E9, #E69F00

CSS: --primary: #1a365d; --secondary: #0d9488; --accent: #d97706
Fonts: Inter (body), JetBrains Mono (code), STIX Two Math (equations)
```

## Appendix: Statistical Test Decision Tree

```
Continuous outcome → 1 group: one-sample t
                   → 2 groups: independent/paired t
                   → 3+ groups: ANOVA/repeated measures
                   → predictors: regression/mixed models
Binary outcome     → logistic regression / chi-squared
Categorical 3+     → ordinal/multinomial logistic
Count outcome      → Poisson / negative binomial
Time-to-event      → KM + log-rank / Cox PH / Fine-Gray
```
