/**
 * stats.js – Statistical utility functions shared across all chapters
 * BiostatTextbook
 */

'use strict';

const Stats = (() => {

  /* ── Basic descriptives ── */

  function mean(arr) {
    if (!arr.length) return NaN;
    return arr.reduce((s, v) => s + v, 0) / arr.length;
  }

  function sum(arr) { return arr.reduce((s, v) => s + v, 0); }

  function median(arr) {
    if (!arr.length) return NaN;
    const s = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? (s[mid - 1] + s[mid]) / 2 : s[mid];
  }

  function mode(arr) {
    const freq = {};
    arr.forEach(v => { freq[v] = (freq[v] || 0) + 1; });
    const maxF = Math.max(...Object.values(freq));
    const modes = Object.keys(freq).filter(k => freq[k] === maxF).map(Number);
    return modes.length === arr.length ? [] : modes; // no mode if all unique
  }

  function variance(arr, population = false) {
    if (arr.length < 2) return NaN;
    const m = mean(arr);
    const ssq = arr.reduce((s, v) => s + (v - m) ** 2, 0);
    return ssq / (arr.length - (population ? 0 : 1));
  }

  function sd(arr, population = false) { return Math.sqrt(variance(arr, population)); }

  function range(arr) {
    if (!arr.length) return NaN;
    return Math.max(...arr) - Math.min(...arr);
  }

  function iqr(arr) {
    const s = [...arr].sort((a, b) => a - b);
    const n = s.length;
    const q1 = median(s.slice(0, Math.floor(n / 2)));
    const q3 = median(s.slice(Math.ceil(n / 2)));
    return { q1, q3, iqr: q3 - q1 };
  }

  function sem(arr) { return sd(arr) / Math.sqrt(arr.length); }

  /* ── Normal distribution ── */

  /** Φ(z) — standard normal CDF (Hart approximation) */
  function normCDF(z) {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = z < 0 ? -1 : 1;
    const x = Math.abs(z) / Math.SQRT2;
    const t = 1 / (1 + p * x);
    const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return 0.5 * (1 + sign * y);
  }

  /** Standard normal PDF */
  function normPDF(z) {
    return Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
  }

  /** Inverse normal CDF (probit) – Beasley-Springer-Moro algorithm */
  function normInv(p) {
    const a = [2.50662823884, -18.61500062529, 41.39119773534, -25.44106049637];
    const b = [-8.47351093090, 23.08336743743, -21.06224101826, 3.13082909833];
    const c = [0.3374754822726147, 0.9761690190917186, 0.1607979714918209,
               0.0276438810333863, 0.0038405729373609, 0.0003951896511349,
               0.0000321767881768, 0.0000002888167364, 0.0000003960315187];
    let y = p - 0.5;
    if (Math.abs(y) < 0.42) {
      const r = y * y;
      return y * (((a[3]*r+a[2])*r+a[1])*r+a[0]) / ((((b[3]*r+b[2])*r+b[1])*r+b[0])*r+1);
    }
    let r = p < 0.5 ? p : 1 - p;
    r = Math.sqrt(-Math.log(r));
    let x = c[0];
    for (let i = 1; i < 9; i++) x = x * r + c[i];
    return p < 0.5 ? -x : x;
  }

  /* ── t distribution ── */

  /** t CDF — uses regularised incomplete beta function */
  function tCDF(t, df) {
    const x = df / (df + t * t);
    return 1 - 0.5 * incompleteBeta(df / 2, 0.5, x);
  }

  /** Two-tailed p-value from t statistic */
  function tPValue(t, df) { return 2 * (1 - tCDF(Math.abs(t), df)); }

  /** Regularised incomplete beta I_x(a,b) – continued fraction */
  function incompleteBeta(a, b, x) {
    if (x < 0 || x > 1) return NaN;
    if (x === 0) return 0;
    if (x === 1) return 1;
    const lbeta = lgamma(a) + lgamma(b) - lgamma(a + b);
    const front = Math.exp(Math.log(x) * a + Math.log(1 - x) * b - lbeta) / a;
    return front * betaCF(a, b, x);
  }

  function betaCF(a, b, x) {
    const maxIt = 200, eps = 3e-7;
    let c = 1, d = 1 - (a + b) * x / (a + 1);
    if (Math.abs(d) < 1e-30) d = 1e-30;
    d = 1 / d;
    let h = d;
    for (let m = 1; m <= maxIt; m++) {
      let m2 = 2 * m;
      let aa = m * (b - m) * x / ((a + m2 - 1) * (a + m2));
      d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30;
      c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30;
      d = 1 / d; h *= d * c;
      aa = -(a + m) * (a + b + m) * x / ((a + m2) * (a + m2 + 1));
      d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30;
      c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30;
      d = 1 / d;
      const delta = d * c;
      h *= delta;
      if (Math.abs(delta - 1) < eps) break;
    }
    return h;
  }

  /** log-Gamma (Stirling approx) */
  function lgamma(z) {
    const coef = [76.18009172947146,-86.50532032941677,24.01409824083091,
                  -1.231739572450155,0.1208650973866179e-2,-0.5395239384953e-5];
    let x = z, y = z, tmp = x + 5.5;
    tmp -= (x + 0.5) * Math.log(tmp);
    let s = 1.000000000190015;
    for (let j = 0; j < 6; j++) s += coef[j] / ++y;
    return -tmp + Math.log(2.5066282746310005 * s / x);
  }

  /* ── Binomial distribution ── */

  function binomPMF(k, n, p) {
    return binomCoef(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
  }

  function binomCDF(k, n, p) {
    let c = 0;
    for (let i = 0; i <= k; i++) c += binomPMF(i, n, p);
    return c;
  }

  function binomCoef(n, k) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    k = Math.min(k, n - k);
    let c = 1;
    for (let i = 0; i < k; i++) c = c * (n - i) / (i + 1);
    return c;
  }

  /* ── Chi-square distribution ── */

  /** Chi-square CDF */
  function chiCDF(x, df) {
    if (x < 0) return 0;
    return regularisedGamma(df / 2, x / 2);
  }

  /** P-value for chi-square statistic */
  function chiPValue(x, df) { return 1 - chiCDF(x, df); }

  /** Regularised incomplete gamma P(a,x) */
  function regularisedGamma(a, x) {
    if (x < 0) return 0;
    if (x < a + 1) return gammaSeries(a, x);
    return 1 - gammaCF(a, x);
  }

  function gammaSeries(a, x) {
    const maxIt = 200, eps = 3e-7;
    if (x <= 0) return 0;
    let ap = a, delta = 1 / a, sum2 = delta;
    for (let i = 0; i < maxIt; i++) {
      ap++; delta *= x / ap; sum2 += delta;
      if (Math.abs(delta) < Math.abs(sum2) * eps) break;
    }
    return sum2 * Math.exp(-x + a * Math.log(x) - lgamma(a));
  }

  function gammaCF(a, x) {
    const maxIt = 200, eps = 3e-7;
    let c = 1e30, d = x + 1 - a;
    if (Math.abs(d) < 1e-30) d = 1e-30;
    d = 1 / d; let h = d;
    for (let i = 1; i <= maxIt; i++) {
      const an = -i * (i - a);
      d = x + d * an + (2 * i + 1 - a);
      if (Math.abs(d) < 1e-30) d = 1e-30;
      c = x + (an / c) + (2 * i + 1 - a);
      if (Math.abs(c) < 1e-30) c = 1e-30;
      d = 1 / d; const delta = d * c; h *= delta;
      if (Math.abs(delta - 1) < eps) break;
    }
    return Math.exp(-x + a * Math.log(x) - lgamma(a)) * h;
  }

  /* ── Linear regression ── */

  function linearRegression(xs, ys) {
    const n = xs.length;
    if (n < 2) return null;
    const mx = mean(xs), my = mean(ys);
    const ssxy = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0);
    const ssx  = xs.reduce((s, x) => s + (x - mx) ** 2, 0);
    const slope = ssxy / ssx;
    const intercept = my - slope * mx;
    const predicted = xs.map(x => intercept + slope * x);
    const residuals = ys.map((y, i) => y - predicted[i]);
    const sst = ys.reduce((s, y) => s + (y - my) ** 2, 0);
    const ssr = residuals.reduce((s, r) => s + r ** 2, 0);
    const r2 = 1 - ssr / sst;
    const r = Math.sqrt(Math.abs(r2)) * Math.sign(slope);
    return { slope, intercept, r, r2, predicted, residuals };
  }

  /* ── Pearson correlation ── */

  function pearsonR(xs, ys) {
    const mx = mean(xs), my = mean(ys);
    const num = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0);
    const den = Math.sqrt(
      xs.reduce((s, x) => s + (x - mx) ** 2, 0) *
      ys.reduce((s, y) => s + (y - my) ** 2, 0)
    );
    return den === 0 ? 0 : num / den;
  }

  /* ── One-sample t-test ── */

  function oneSampleT(arr, mu0) {
    const n = arr.length, m = mean(arr), s = sd(arr);
    const t = (m - mu0) / (s / Math.sqrt(n));
    const df = n - 1;
    const pValue = tPValue(t, df);
    return { t, df, pValue, mean: m, sd: s, n };
  }

  /* ── Two-sample t-test (Welch) ── */

  function twoSampleT(arr1, arr2) {
    const n1 = arr1.length, m1 = mean(arr1), v1 = variance(arr1);
    const n2 = arr2.length, m2 = mean(arr2), v2 = variance(arr2);
    const se = Math.sqrt(v1 / n1 + v2 / n2);
    const t  = (m1 - m2) / se;
    const df = (v1/n1 + v2/n2)**2 /
               ((v1/n1)**2/(n1-1) + (v2/n2)**2/(n2-1));
    const pValue = tPValue(t, df);
    return { t, df, pValue, mean1: m1, mean2: m2, sd1: Math.sqrt(v1), sd2: Math.sqrt(v2), n1, n2 };
  }

  /* ── Chi-square test of independence ── */

  function chiSquareTest(observed) {
    const rows = observed.length, cols = observed[0].length;
    const rowTotals = observed.map(r => r.reduce((s, v) => s + v, 0));
    const colTotals = Array.from({length: cols}, (_, j) => observed.reduce((s, r) => s + r[j], 0));
    const N = rowTotals.reduce((s, v) => s + v, 0);
    let chi2 = 0;
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) {
        const E = rowTotals[i] * colTotals[j] / N;
        chi2 += (observed[i][j] - E) ** 2 / E;
      }
    const df = (rows - 1) * (cols - 1);
    return { chi2, df, pValue: chiPValue(chi2, df) };
  }

  /* ── Helpers ── */

  function parseNumbers(str) {
    return str.split(/[\s,;]+/).map(Number).filter(v => !isNaN(v));
  }

  function round(v, d = 4) {
    return isNaN(v) ? 'N/A' : +v.toFixed(d);
  }

  function pValueLabel(p) {
    if (p < 0.001) return '< 0.001';
    return round(p, 3).toString();
  }

  /* ── Public API ── */

  return {
    mean, sum, median, mode, variance, sd, range, iqr, sem,
    normCDF, normPDF, normInv,
    tCDF, tPValue,
    binomPMF, binomCDF, binomCoef,
    chiCDF, chiPValue,
    linearRegression, pearsonR,
    oneSampleT, twoSampleT, chiSquareTest,
    parseNumbers, round, pValueLabel
  };
})();
