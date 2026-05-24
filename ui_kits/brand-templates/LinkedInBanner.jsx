/* ───────────────────────────────────────────────────────────────
   LinkedInBanner — Card #12, 1584×396
   Navy with subtle violet+fuchsia radial gradients. A-mark left,
   thin divider, "AI-Driven Enterprise Institute" eyebrow + AIDE
   wordmark + italic tagline. URL + fuchsia accent bar on the right.
   ─────────────────────────────────────────────────────────────── */

function LinkedInBanner({
  eyebrow = "AI-Driven Enterprise Institute",
  title = "AIDE Institute",
  tagline = '"Tracking the AI that counts."',
  url = "aideinstitute.com",
}) {
  return (
    <div className="banner">
      <div className="banner-inner">
        <img className="banner-amark" src={LOGO_AMARK} alt="" />
        <div className="banner-divider" />
        <div className="banner-text">
          <div className="banner-text__eyebrow">{eyebrow}</div>
          <div className="banner-text__title">{title}</div>
          <div className="banner-text__tagline">{tagline}</div>
        </div>
      </div>
      <div className="banner-cta">
        <div className="banner-cta__url">{url}</div>
        <div className="banner-cta__bar" />
      </div>
    </div>
  );
}

Object.assign(window, { LinkedInBanner });
