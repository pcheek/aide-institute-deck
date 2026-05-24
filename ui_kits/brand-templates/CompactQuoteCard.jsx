/* ───────────────────────────────────────────────────────────────
   CompactQuoteCard — Card #05, 1200×628
   Editorial quote with a 220px round avatar at the right.
   Avatar accepts either a `photo` URL (real headshot) OR
   `initials` (falls back to the navy→violet gradient + monogram).
   Either way a 48px fuchsia dot anchors the bottom-right corner.
   ─────────────────────────────────────────────────────────────── */

const TEAM_PHOTOS = {
  paul:   "../../assets/team/paul-cheek.png",
  felipe: "../../assets/team/felipe-scherer.jpg",
  kate:   "../../assets/team/kate-reed.jpg",
};

function CompactQuoteCard({
  eyebrow = ["Conversations", "2026"],
  body = "The companies winning at AI aren't the ones with the loudest decks. They're the ones whose boards know enough to ask the second question.",
  name = "Felipe Scherer",
  role = "Co-Founder & Chief Researcher, AIDE Institute",
  photo,          // URL or one of: "paul" | "felipe" | "kate"
  initials,       // fallback when no photo
  source = "From AIDE Insights · Q1 2026",
  url = "aideinstitute.com",
}) {
  const photoSrc = photo && (TEAM_PHOTOS[photo] || photo);
  const mono = initials || name.split(" ").map(w => w[0]).slice(0, 2).join("");
  return (
    <div className="card card--quote-compact">
      <HeaderBand eyebrow={eyebrow} />
      <div className="card-body">
        <div className="qc-quote">
          <div className="qc-quote__body">{body}</div>
          <div className="qc-quote__attr-name">{name}</div>
          <div className="qc-quote__attr-role">{role}</div>
        </div>
        <div className="qc-avatar">
          {photoSrc
            ? <img className="qc-avatar__photo" src={photoSrc} alt={name} />
            : mono}
        </div>
      </div>
      <FooterBand source={source} url={url} />
    </div>
  );
}

Object.assign(window, { CompactQuoteCard, TEAM_PHOTOS });
