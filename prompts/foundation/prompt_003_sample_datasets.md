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

# PROMPT 003 — Sample Datasets

**Phase:** Foundation | **Prerequisites:** 001

## Datasets to Create

Location: `assets/sample_data/`

### clinical_trial.csv
- **n:** 500
- **Description:** RCT Drug A vs Placebo for HTN
- **Columns:** patient_id, age, sex, race, bmi, baseline_sbp, baseline_dbp, treatment_group, week4_sbp, week4_dbp, week8_sbp, week8_dbp, week12_sbp, week12_dbp, adverse_event, adherence_pct, dropout, dropout_week

### survival_data.csv
- **n:** 800
- **Description:** Oncology survival
- **Columns:** stage, tumor_grade, treatment, time_to_event, event, ecog, tumor_size, lymph_nodes, comorbidity_index

### longitudinal_study.csv
- **n:** 300x6=1800
- **Description:** HbA1c diabetes monitoring, 6 visits, medication groups

### case_control.csv
- **n:** 400
- **Description:** MI risk factors, 200 cases + 200 controls

### rct_parallel.csv
- **n:** 600
- **Description:** 3-arm pain RCT: Drug A/B/Placebo

### diagnostic_test.csv
- **n:** 1000
- **Description:** Biomarker evaluation with gold standard

### meta_analysis_studies.csv
- **n:** 25 studies
- **Description:** Study-level meta-analysis data

### multivariate_clinical.csv
- **n:** 1000
- **Description:** Large clinical dataset with LOS, ICU, labs

**Generation:** Julia script (scripts/generate_datasets.jl) with fixed seed, realistic correlations, <5% missing. DATA_DICTIONARY.md with full variable descriptions.

**Validation:** R reference scripts (scripts/validate_webr.R) compute reference values for all tests → test/reference_values.json

## Quality Gates

- No impossible values
- Clinically plausible correlations
- Loadable via CSV.read() and read.csv()
- Reference values generated

---

**IMPORTANT:** After completing all tasks, verify all quality gates pass before marking this prompt complete.
