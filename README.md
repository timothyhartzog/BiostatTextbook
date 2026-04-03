# Interactive Biostatistics Textbook

An open-access, browser-based interactive textbook for biostatistics in health and life sciences. No installation required — everything runs in the browser.

## Features

- **10 comprehensive chapters** covering core biostatistics topics
- **Interactive charts and visualisers** (normal distribution, binomial, CLT simulation)
- **Built-in statistical calculators** (descriptive stats, t-tests, chi-square, regression)
- **Practice quizzes** with instant feedback in every chapter
- **Responsive design** — works on desktop, tablet, and mobile
- **No dependencies to install** — uses Chart.js from CDN; pure HTML/CSS/JS otherwise

## Chapters

| # | Title | Key Interactive Features |
|---|-------|--------------------------|
| 1 | Introduction to Biostatistics | Sampling demonstration, quiz |
| 2 | Types of Variables | Drag-and-drop classification, quiz |
| 3 | Descriptive Statistics | Full stats calculator + histogram |
| 4 | Probability | Bayesian diagnostic test calculator |
| 5 | Probability Distributions | Normal & binomial distribution explorers |
| 6 | Sampling & the CLT | CLT simulation, CI calculator |
| 7 | Hypothesis Testing | p-value visualiser, error table |
| 8 | t-Tests | One-sample / two-sample / paired calculator |
| 9 | Chi-Square Tests | Contingency table calculator |
| 10 | Correlation & Regression | Interactive scatter plot + regression line |

## Usage

Open `index.html` in any modern browser, or serve with any static file server:

```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

## Project Structure

```
├── index.html          # Home page / table of contents
├── css/
│   └── styles.css      # Shared stylesheet
├── js/
│   └── stats.js        # Statistical utility library
└── chapters/
    ├── chapter1.html   # Introduction
    ├── chapter2.html   # Types of Variables
    ├── chapter3.html   # Descriptive Statistics
    ├── chapter4.html   # Probability
    ├── chapter5.html   # Probability Distributions
    ├── chapter6.html   # Sampling & CLT
    ├── chapter7.html   # Hypothesis Testing
    ├── chapter8.html   # t-Tests
    ├── chapter9.html   # Chi-Square Tests
    └── chapter10.html  # Correlation & Regression
```
