/* ───────────────────────────────────────────────────────────────
   BarChartCard — Card #06, 1200×628
   Horizontal bar chart with one row per AIDE Index pillar.
   Bars colored by pillar token. KNOW/SAY/PRIORITIZE/BUILD verbs
   appear under the pillar name.
   ─────────────────────────────────────────────────────────────── */

function BarChartCard({
  eyebrow = ["AIDE Index", "Median Pillar Scores · Q1 2026"],
  title = "Where the S&P 500 stands.",
  sub = "Each pillar scored 0–100, median across 500 companies.",
  rows = [
    { pillar: "literacy",       value: 38 },
    { pillar: "advocacy",       value: 47 },
    { pillar: "orientation",    value: 31 },
    { pillar: "implementation", value: 19 },
  ],
  source = "Scores 0–100. Median, S&P 500. AIDE Index methodology v2.1.",
}) {
  return (
    <div className="card card--chart">
      <HeaderBand eyebrow={eyebrow} />
      <div className="card-body">
        <div className="chart-header">
          <div className="chart-header__title">{title}</div>
          <div className="chart-header__sub">{sub}</div>
        </div>
        <div className="chart-rows">
          {rows.map((r, i) => (
            <div key={i} className="chart-row">
              <div className="chart-row__label">
                {PILLAR_LABELS[r.pillar]}
                <span className="chart-row__verb">{PILLAR_VERBS[r.pillar].toUpperCase()}</span>
              </div>
              <div className="chart-row__bar-bg">
                <div className={`chart-row__bar chart-row__bar--${r.pillar}`} style={{ width: `${r.value}%` }} />
              </div>
              <div className="chart-row__value">{r.value}</div>
            </div>
          ))}
        </div>
      </div>
      <FooterBand source={source} />
    </div>
  );
}

Object.assign(window, { BarChartCard });
