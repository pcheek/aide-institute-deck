/* ───────────────────────────────────────────────────────────────
   EmailHeader — Card #13, 600×150
   Narrow newsletter header. Navy fill, mono-white horizontal logo
   left, thin divider, then newsletter name + tagline.
   ─────────────────────────────────────────────────────────────── */

function EmailHeader({
  title = "The AIDE Brief",
  tagline = "Tracking the AI that counts.",
}) {
  return (
    <div className="email-header">
      <img className="email-header__logo" src={LOGO_MONO_WHITE} alt="AIDE" />
      <div className="email-header__divider" />
      <div className="email-header__text">
        <div className="email-header__title">{title}</div>
        <div className="email-header__tagline">{tagline}</div>
      </div>
      <div className="email-header__bar" />
    </div>
  );
}

Object.assign(window, { EmailHeader });
