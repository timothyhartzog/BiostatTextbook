# BiostatTextbook — Claude Code Prompts

## Quick Start

### One prompt at a time (CLI)
```bash
cd BiostatTextbook
claude -p "$(cat prompts/foundation/prompt_001_quarto_book_scaffold.md)"
```

### Interactive (reference file)
```bash
claude
> Read @prompts/foundation/prompt_001_quarto_book_scaffold.md and execute all tasks
```

### Claude Code Web (claude.ai/code)
1. Go to claude.ai/code → connect this repo
2. Open a prompt file, copy contents
3. Paste into a new session

### Automated
```bash
chmod +x prompts/orchestrator.sh
./prompts/orchestrator.sh
```

## Prompt Inventory

| Phase | Folder | Prompts | Execution |
|-------|--------|---------|-----------|
| Foundation | `foundation/` | 001–004 | Sequential |
| Chapters — Beginner | `chapters/` | 010–016 | Parallel |
| Chapters — Intermediate | `chapters/` | 020–028 | Parallel |
| Chapters — Advanced | `chapters/` | 030–039 | Parallel |
| Chapters — Expert | `chapters/` | 040–043 | Parallel |
| Integration | `integration/` | 050–053 | Sequential |
| QA & Deploy | `qa/` | 060–063 | Sequential |

## Parallel Wave Guide

```
Wave A: 010(Ch1) | 011(Ch2) | 016(Ch7)         ← no deps
Wave B: 012(Ch3) | 013(Ch4)                     ← need Ch1-2
Wave C: 014(Ch5) | 015(Ch6)                     ← need Ch1-3
Wave D: 020(Ch8) | 021(Ch9) | 023(Ch11)         ← need beginner
Wave E: 022(Ch10)| 026(Ch14)| 027(Ch15)
Wave F: 024(Ch12)| 025(Ch13)| 028(Ch16)
Wave G: 030-035  (Ch17-22)                      ← advanced
Wave H: 036-039  (Ch23-26)
Wave I: 040-042  (Ch27-29)                      ← expert
Wave J: 043      (Ch30)                         ← ALL
```

## Files

- `chapters/prompt_010_ch1_types_of_data_and_measurement_scales.md`
- `chapters/prompt_011_ch2_descriptive_statistics.md`
- `chapters/prompt_012_ch3_probability_foundations.md`
- `chapters/prompt_013_ch4_sampling_and_study_design.md`
- `chapters/prompt_014_ch5_confidence_intervals.md`
- `chapters/prompt_015_ch6_hypothesis_testing_framework.md`
- `chapters/prompt_016_ch7_visualizing_medical_data.md`
- `chapters/prompt_020_ch8_the_t-test_family.md`
- `chapters/prompt_021_ch9_chi-squared_and_categorical_data.md`
- `chapters/prompt_022_ch10_anova.md`
- `chapters/prompt_023_ch11_correlation.md`
- `chapters/prompt_024_ch12_linear_regression.md`
- `chapters/prompt_025_ch13_logistic_regression.md`
- `chapters/prompt_026_ch14_non-parametric_methods.md`
- `chapters/prompt_027_ch15_power_and_sample_size.md`
- `chapters/prompt_028_ch16_bayesian_thinking.md`
- `chapters/prompt_030_ch17_survival_analysis.md`
- `chapters/prompt_031_ch18_mixed-effects_models.md`
- `chapters/prompt_032_ch19_glm_extensions.md`
- `chapters/prompt_033_ch20_meta-analysis.md`
- `chapters/prompt_034_ch21_diagnostic_test_evaluation.md`
- `chapters/prompt_035_ch22_missing_data.md`
- `chapters/prompt_036_ch23_causal_inference.md`
- `chapters/prompt_037_ch24_multivariable_model_building.md`
- `chapters/prompt_038_ch25_advanced_longitudinal_methods.md`
- `chapters/prompt_039_ch26_high-dimensional_data_and_ml.md`
- `chapters/prompt_040_ch27_clinical_trial_design.md`
- `chapters/prompt_041_ch28_advanced_survival_methods.md`
- `chapters/prompt_042_ch29_bayesian_clinical_trials.md`
- `chapters/prompt_043_ch30_putting_it_all_together.md`
- `foundation/prompt_001_quarto_book_scaffold.md`
- `foundation/prompt_002_shared_ojs_modules_and_webr_configuration.md`
- `foundation/prompt_003_sample_datasets.md`
- `foundation/prompt_004_landing_page_and_appendices.md`
- `integration/prompt_050_cross-chapter_assembly_and_navigation.md`
- `integration/prompt_051_assessment_and_progress_system.md`
- `integration/prompt_052_performance_and_polish.md`
- `integration/prompt_053_multi-format_export_and_documentation.md`
- `qa/prompt_060_render_validation_and_link_checking.md`
- `qa/prompt_061_statistical_validation.md`
- `qa/prompt_062_accessibility_and_mobile_audit.md`
- `qa/prompt_063_deployment.md`
