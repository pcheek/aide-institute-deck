/* ───────────────────────────────────────────────────────────────
   SubBrandPromo — Cards #09–11+, 1200×628
   Sub-brand promo with title left + colored gradient visual right
   carrying a serif typographic symbol. Supports all six sub-brands.
   Uses the real sub-brand lockup PNG in the header band when
   showLockup is true.
   ─────────────────────────────────────────────────────────────── */

const SUBBRAND_CONFIG = {
  index:     { lockup: "../../assets/sub-brands/aide-index-logo.png",     eyebrow: "AIDE Index · Research",       symbol: "I"  },
  insights:  { lockup: "../../assets/sub-brands/aide-insights-logo.png",  eyebrow: "AIDE Insights · Publishing",  symbol: "i"  },
  rankings:  { lockup: "../../assets/sub-brands/aide-rankings-logo.png",  eyebrow: "AIDE Rankings · AIDE 50",     symbol: "50" },
  awards:    { lockup: "../../assets/sub-brands/aide-awards-logo.png",    eyebrow: "AIDE Awards · Excellence",    symbol: "★"  },
  education: { lockup: "../../assets/sub-brands/aide-education-logo.png", eyebrow: "AIDE Education · Academia",   symbol: "E"  },
  talent:    { lockup: "../../assets/sub-brands/aide-talent-logo.png",    eyebrow: "AIDE Talent · Recruiting",    symbol: "T"  },
};

function SubBrandPromo({
  subbrand = "index",
  eyebrow,
  titleTop,
  titleAccent,
  body,
  symbol,
  source = "Read more at aideinstitute.com",
  url,
  hideHeader = false,
}) {
  const cfg = SUBBRAND_CONFIG[subbrand];
  return (
    <div className={`card card--subbrand card--sb-${subbrand}`}>
      {!hideHeader && (
        <HeaderBand
          eyebrow={[cfg.eyebrow.split(" · ")[0], cfg.eyebrow.split(" · ")[1] || ""]}
          subbrand={subbrand}
        />
      )}
      <div className="card-body">
        <div className="sb-left">
          <div className="sb-eyebrow">{eyebrow || cfg.eyebrow}</div>
          <div className="sb-title">
            {titleTop}<span className="accent">{titleAccent}</span>
          </div>
          <div className="sb-body">{body}</div>
        </div>
        <div className="sb-right">
          <div className="sb-visual">
            <div className="sb-visual__symbol">{symbol ?? cfg.symbol}</div>
          </div>
        </div>
      </div>
      <FooterBand source={source} url={url} />
    </div>
  );
}

Object.assign(window, { SubBrandPromo, SUBBRAND_CONFIG });
