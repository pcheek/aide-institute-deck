/* ───────────────────────────────────────────────────────────────
   Primitives — shared building blocks for every AIDE template.
   HeaderBand, FooterBand, Logo, Eyebrow.
   ─────────────────────────────────────────────────────────────── */

const LOGO_HORIZONTAL = "../../assets/aide-logo-horizontal.png";
const LOGO_MONO_WHITE = "../../assets/aide-logo-mono-white.png";
const LOGO_AMARK      = "../../assets/aide-favicon.png";

/* The dark navy band used as the top of almost every shipped card.
   eyebrow: array of segments separated by a fuchsia (or sub-brand) dot.
   subbrand: 'index' | 'insights' | 'rankings' | 'awards' | 'education' | 'talent' — recolors the dot. */
function HeaderBand({ eyebrow = [], subbrand, cobrand, logoHeight }) {
  const eyebrowClass = subbrand ? `h-band h-band--${subbrand}` : "h-band";
  const logoStyle = logoHeight ? { height: logoHeight } : undefined;
  return (
    <div className={eyebrowClass}>
      {cobrand ? (
        <div className="h-band__cobrand">
          <img className="h-band__logo h-band__logo--inv" src={LOGO_MONO_WHITE} alt="AIDE" style={logoStyle} />
          <div className="h-band__cobrand-x" />
          <div className="h-band__partner">{cobrand}</div>
        </div>
      ) : (
        <img className="h-band__logo h-band__logo--inv" src={LOGO_MONO_WHITE} alt="AIDE" style={logoStyle} />
      )}
      {eyebrow.length > 0 && (
        <div className="h-band__eyebrow">
          {eyebrow.map((seg, i) => (
            <React.Fragment key={i}>
              <span>{seg}</span>
              {i < eyebrow.length - 1 && <span className="dot" />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

/* The light footer band found on every social/share card.
   Three slots: tagline (left), source line (center), URL (right). */
function FooterBand({ tagline = "Tracking the AI that counts.", source, url = "aideinstitute.com" }) {
  return (
    <div className="f-band">
      <div className="f-band__tag">{tagline}</div>
      {source && <div className="f-band__source">{source}</div>}
      <div className="f-band__url">{url}</div>
    </div>
  );
}

/* Just the logo, exposed for ad-hoc layouts (banner, cover). */
function Logo({ variant = "horizontal", height }) {
  const src = variant === "mono" ? LOGO_MONO_WHITE : variant === "amark" ? LOGO_AMARK : LOGO_HORIZONTAL;
  const cls = variant === "mono" ? "h-band__logo h-band__logo--inv" : "h-band__logo";
  return <img className={cls} src={src} alt="AIDE" style={height ? { height } : undefined} />;
}

Object.assign(window, { HeaderBand, FooterBand, Logo, LOGO_HORIZONTAL, LOGO_MONO_WHITE, LOGO_AMARK });
