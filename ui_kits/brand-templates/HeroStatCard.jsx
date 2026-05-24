/* ───────────────────────────────────────────────────────────────
   HeroStatCard — Card #01, 1200×628
   The most-used LinkedIn / OG card. One oversized fuchsia stat +
   a bolded claim with em-emphasis, sourced in the footer.
   ─────────────────────────────────────────────────────────────── */

function HeroStatCard({
  eyebrowLeft = "AIDE Index",
  eyebrowRight = "Q1 2026",
  finding = "Key Finding",
  stat = "37%",
  unit = "of S&P 500 C-suite",
  statement,
  emphasis,
  statementAfter,
  context,
  source,
}) {
  return (
    <div className="card card--hero-stat">
      <HeaderBand eyebrow={[eyebrowLeft, eyebrowRight]} />
      <div className="card-body">
        <div className="stat-accent">
          <div className="eyebrow hero-stat__label">{finding}</div>
          <div className="hero-stat__value">{stat}</div>
          <div className="hero-stat__unit">{unit}</div>
        </div>
        <div>
          <div className="hero-stat__statement">
            {statement}{" "}
            {emphasis && <em>{emphasis}</em>}{" "}
            {statementAfter}
          </div>
          <div className="hero-stat__context">{context}</div>
        </div>
      </div>
      <FooterBand source={source} />
    </div>
  );
}

Object.assign(window, { HeroStatCard });
