/* ───────────────────────────────────────────────────────────────
   CompareCard — Card #02, 1200×628
   Two-stat comparison split by a thin divider. Lead value in
   fuchsia, lagging value in navy.
   ─────────────────────────────────────────────────────────────── */

function CompareCard({
  eyebrow = ["AIDE Index", "Leadership vs Company"],
  left = { label: "Leadership Score", value: "42", caption: "What executives KNOW & SAY", sub: "Literacy + Advocacy" },
  right = { label: "Company Score", value: "28", caption: "What the org PRIORITIZES & BUILDS", sub: "Orientation + Implementation" },
  source = "A 14-point gap. Talk outpaces build by ~50%.",
}) {
  return (
    <div className="card card--compare">
      <HeaderBand eyebrow={eyebrow} />
      <div className="card-body">
        <div className="compare-cell">
          <div className="compare-cell__label">{left.label}</div>
          <div className="compare-cell__value compare-cell__value--lead">{left.value}</div>
          <div className="compare-cell__caption">{left.caption}</div>
          <div className="compare-cell__sub">{left.sub}</div>
        </div>
        <div className="compare-divider" />
        <div className="compare-cell">
          <div className="compare-cell__label">{right.label}</div>
          <div className="compare-cell__value compare-cell__value--lag">{right.value}</div>
          <div className="compare-cell__caption">{right.caption}</div>
          <div className="compare-cell__sub">{right.sub}</div>
        </div>
      </div>
      <FooterBand source={source} />
    </div>
  );
}

Object.assign(window, { CompareCard });
