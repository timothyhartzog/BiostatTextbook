# Biostatistics for Physician Researchers

An interactive biostatistics textbook built with **Quarto Book**, **Observable JS**, and **WebR**.

30 chapters spanning Beginner → Expert, with interactive visualizations, user data upload, and graded exercises — all running as a static site with zero server infrastructure.

## Quick Start

```bash
# Prerequisites: Quarto 1.6+, Julia 1.11+, R (for WebR validation)

# Clone
git clone https://github.com/timothyhartzog/BiostatTextbook.git
cd BiostatTextbook

# Install extension
quarto add r-wasm/live

# Preview
quarto preview

# Build
quarto render

# Deploy
quarto publish gh-pages
```

## Architecture

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Publishing | Quarto 1.6+ Book | Chapters, TOC, search, cross-refs, MathJax, PDF |
| Build-time | Julia 1.11+ | Pre-compute datasets, static tables |
| Visualization | Observable Plot + D3 v7 | Interactive client-side plots |
| User Analysis | WebR (quarto-live) | In-browser R for uploaded data |
| Exercises | quarto-live | Graded code blocks, hints, solutions |
| Deployment | GitHub Pages | Static site — zero server |

## Chapters

### Part I: Beginner
1. Types of Data and Measurement Scales
2. Descriptive Statistics
3. Probability Foundations
4. Sampling and Study Design
5. Confidence Intervals
6. Hypothesis Testing Framework
7. Visualizing Medical Data

### Part II: Intermediate
8. The t-Test Family
9. Chi-Squared and Categorical Data
10. ANOVA
11. Correlation
12. Linear Regression
13. Logistic Regression
14. Non-Parametric Methods
15. Power and Sample Size
16. Bayesian Thinking

### Part III: Advanced
17. Survival Analysis
18. Mixed-Effects Models
19. GLM Extensions
20. Meta-Analysis
21. Diagnostic Test Evaluation
22. Missing Data
23. Causal Inference
24. Multivariable Model Building
25. Advanced Longitudinal Methods
26. High-Dimensional Data and ML

### Part IV: Expert
27. Clinical Trial Design
28. Advanced Survival Methods
29. Bayesian Clinical Trials
30. Putting It All Together

## Building with Claude Code

This project is designed to be built using Claude Code with a structured prompt architecture. See `prompts/README.md` for the complete build guide.

### Quick build (one prompt at a time)
```bash
claude -p "$(cat prompts/foundation/prompt_001_quarto_book_scaffold.md)"
```

### Automated build (orchestrator)
```bash
chmod +x prompts/orchestrator.sh
./prompts/orchestrator.sh
```

## Project Structure

```
BiostatTextbook/
├── _quarto.yml              # Book configuration
├── index.qmd                # Landing page
├── references.bib           # Bibliography
├── CLAUDE.md                # Claude Code conventions
├── chapters/                # 30 .qmd chapter files
│   ├── beginner/            # Ch 1–7
│   ├── intermediate/        # Ch 8–16
│   ├── advanced/            # Ch 17–26
│   └── expert/              # Ch 27–30
├── appendix/                # Glossary, formulas, decision tree
├── assets/
│   ├── css/custom.scss      # Theme
│   ├── js/                  # OJS modules (stat-engine, plot-factory, etc.)
│   └── sample_data/         # 8 synthetic clinical datasets
├── prompts/                 # Claude Code prompt files (42 total)
│   ├── foundation/          # 001–004
│   ├── chapters/            # 010–043
│   ├── integration/         # 050–053
│   └── qa/                  # 060–063
├── scripts/                 # Build helpers
└── test/                    # Validation scripts
```

## License

MIT
