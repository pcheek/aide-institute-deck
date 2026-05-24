/* ───────────────────────────────────────────────────────────────
   QuadScorecard — Card #03, 1200×1200
   The 4-pillar score grid. One cell per AIDE Index pillar with
   tinted background + value + delta-vs-last-quarter.
   ─────────────────────────────────────────────────────────────── */

const PILLAR_VERBS = { literacy: "Know", advocacy: "Say", orientation: "Prioritize", implementation: "Build" };
const PILLAR_LABELS = { literacy: "Literacy", advocacy: "Advocacy", orientation: "Orientation", implementation: "Implementation" };

function QuadCell({ pillar, value, delta, direction = "up" }) {
  return (
    <div className={`quad-cell quad-cell--${pillar}`}>
      <div className="quad-cell__top">
        <div className="quad-cell__pillar-name">{PILLAR_LABELS[pillar]}</div>
        <div className="quad-cell__verb">{PILLAR_VERBS[pillar]}</div>
      </div>
      <div className="quad-cell__value">{value}</div>
      <div className="quad-cell__delta">
        <span className={direction}>{direction === "up" ? "▲" : "▼"} {delta}</span>
        {" "}vs. Q4 2025
      </div>
    </div>
  );
}

function QuadScorecard({
  eyebrow = ["S&P 500", "Pillar Scores Q1 2026"],
  heading = "The pillar gap is widening.",
  sub = "Median scores across the S&P 500 reveal a clear pattern — executives talk fluently about AI but their organizations lag in tangible deployment.",
  cells = [
    { pillar: "literacy",       value: "38", delta: "6",  direction: "up" },
    { pillar: "advocacy",       value: "47", delta: "11", direction: "up" },
    { pillar: "orientation",    value: "31", delta: "3",  direction: "up" },
    { pillar: "implementation", value: "19", delta: "2",  direction: "down" },
  ],
  source = "Scores 0–100. Higher = more AI-mature.",
}) {
  return (
    <div className="card card--quad">
      <HeaderBand eyebrow={eyebrow} />
      <div className="card-body">
        <div className="quad-intro">
          <div className="quad-intro__heading">{heading}</div>
          <div className="quad-intro__sub">{sub}</div>
        </div>
        <div className="quad-grid">
          {cells.map((c, i) => <QuadCell key={i} {...c} />)}
        </div>
      </div>
      <FooterBand source={source} />
    </div>
  );
}

Object.assign(window, { QuadScorecard, QuadCell, PILLAR_VERBS, PILLAR_LABELS });
