/* ───────────────────────────────────────────────────────────────
   ReportCover — Card #18, 1200×1500
   Magazine / whitepaper cover. Navy fill with corner radial
   gradients. A-mark large, then violet eyebrow, fuchsia divider,
   oversized display title with fuchsia accent word, long subhead,
   and a hairline-divided author / URL strip at the bottom.
   ─────────────────────────────────────────────────────────────── */

function ReportCover({
  volumeLabel = "Volume 01",
  volumeNum = "Q1 · 2026",
  eyebrow = "AIDE Insights · Flagship Report",
  titleBefore = "The State of",
  titleAfter = "Enterprise",
  titleAccent = "AI.",
  sub = "Benchmarking the AI maturity of the S&P 500 across four pillars — Literacy, Advocacy, Orientation, and Implementation. The definitive reference for boards, C-suites, and investors navigating the AI-driven enterprise era.",
  tagline = '"Tracking the AI that counts."',
  by = "By the AIDE Institute",
  url = "aideinstitute.com",
}) {
  return (
    <div className="cover">
      <div className="cover-top">
        <img className="cover-logo" src={LOGO_MONO_WHITE} alt="AIDE" />
        <div className="cover-volume">
          <div className="cover-volume__label">{volumeLabel}</div>
          <div className="cover-volume__num">{volumeNum}</div>
        </div>
      </div>

      <img className="cover-amark" src={LOGO_AMARK} alt="" />

      <div className="cover-eyebrow">{eyebrow}</div>
      <div className="cover-divider" />
      <h1 className="cover-title">{titleBefore}<br />{titleAfter} <span className="accent">{titleAccent}</span></h1>
      <p className="cover-sub">{sub}</p>

      <div className="cover-meta">
        <div className="cover-meta__by">
          {by}
          <span className="tagline">{tagline}</span>
        </div>
        <div className="cover-meta__url">{url}</div>
      </div>
    </div>
  );
}

Object.assign(window, { ReportCover });
