/* ───────────────────────────────────────────────────────────────
   PullQuoteCard — Card #04, 1200×628
   Editorial pull-quote with oversized fuchsia Georgia quote mark,
   navy body with em-emphasis, bar + attribution.
   ─────────────────────────────────────────────────────────────── */

function PullQuoteCard({
  eyebrow = ["AIDE Insights", "March 2026"],
  before,
  emphasis,
  after,
  name,
  role,
  source = "Read the full Q1 2026 brief",
  url = "aideinstitute.com/insights",
}) {
  return (
    <div className="card card--quote">
      <HeaderBand eyebrow={eyebrow} />
      <div className="card-body">
        <div className="quote-mark">"</div>
        <div className="quote-body">
          {before}{" "}
          {emphasis && <em>{emphasis}</em>}{" "}
          {after}
        </div>
        <div className="quote-attribution">
          <div className="quote-attribution__bar" />
          <div>
            <div className="quote-attribution__text">{name}</div>
            <div className="quote-attribution__role">{role}</div>
          </div>
        </div>
      </div>
      <FooterBand source={source} url={url} />
    </div>
  );
}

Object.assign(window, { PullQuoteCard });
