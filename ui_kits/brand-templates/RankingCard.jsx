/* ───────────────────────────────────────────────────────────────
   RankingCard — Card #07, 1200×1200 (square)
   The AIDE50 leaderboard. Rank #01 is highlighted in fuchsia.
   Rows: rank · company + sector · score bar · numeric score.
   ─────────────────────────────────────────────────────────────── */

function RankingCard({
  eyebrow = ["AIDE Rankings", "AIDE 50 · 2026"],
  subbrand = "rankings",
  eyebrowTop = "Top 5 · AIDE50 Index 2026",
  title = "The leaders of the AI-driven enterprise era.",
  sub = "Companies ranked by composite AIDE Index score across all four pillars.",
  rows = [
    { num: "01", name: "Microsoft",      sector: "Technology · Cloud / Productivity", score: 91 },
    { num: "02", name: "Alphabet",       sector: "Technology · Search / AI Labs",     score: 87 },
    { num: "03", name: "JPMorgan Chase", sector: "Financial Services · Banking",      score: 82 },
    { num: "04", name: "NVIDIA",         sector: "Technology · Semiconductors",        score: 79 },
    { num: "05", name: "Walmart",        sector: "Retail · Consumer",                  score: 74 },
  ],
  source = "Full 50: aideinstitute.com/rankings · Sample data, illustrative",
}) {
  return (
    <div className="card card--ranking">
      <HeaderBand eyebrow={eyebrow} subbrand={subbrand} />
      <div className="card-body">
        <div className="rank-header">
          <div className="rank-header__eyebrow">{eyebrowTop}</div>
          <div className="rank-header__title">{title}</div>
          <div className="rank-header__sub">{sub}</div>
        </div>
        <div className="rank-list">
          {rows.map((r, i) => (
            <div key={i} className={`rank-row${i === 0 ? " rank-row--top" : ""}`}>
              <div className="rank-row__num">{r.num}</div>
              <div>
                <div className="rank-row__name">{r.name}</div>
                <div className="rank-row__sector">{r.sector}</div>
              </div>
              <div className="rank-row__bar-wrap">
                <div className="rank-row__bar" style={{ width: `${r.score}%` }} />
              </div>
              <div className="rank-row__score">{r.score}</div>
            </div>
          ))}
        </div>
      </div>
      <FooterBand source={source} />
    </div>
  );
}

Object.assign(window, { RankingCard });
