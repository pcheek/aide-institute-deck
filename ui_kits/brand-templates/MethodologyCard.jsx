/* ───────────────────────────────────────────────────────────────
   MethodologyCard — Card #08, 1200×1200
   The canonical four-pillar explainer. Pillar bar + four explanation
   cards (one per pillar) with left-border in the pillar color.
   ─────────────────────────────────────────────────────────────── */

const METHODOLOGY_DEFAULTS = [
  { pillar: "literacy",       title: "What executives know.",        desc: "Measured share of C-suite and board demonstrating AI literacy via earnings calls, public statements, and credentialed background." },
  { pillar: "advocacy",       title: "What executives say.",         desc: "Volume and substance of AI-related communication by executives on LinkedIn, in interviews, and at industry events." },
  { pillar: "orientation",    title: "What the org prioritizes.",    desc: "Strategic AI commitment across six channels — 10-Ks, hiring, capex, partnerships, governance, and stated strategy." },
  { pillar: "implementation", title: "What the org builds.",         desc: "Tangible AI deployment across six channels — products shipped, customer-facing AI, internal tools, and measurable outcomes." },
];

function MethodologyCard({
  eyebrow = ["Methodology", "v 2.1"],
  title = "The four pillars.",
  sub,
  cards = METHODOLOGY_DEFAULTS,
  source = "Full methodology paper at aideinstitute.com/methodology",
}) {
  return (
    <div className="card card--methodology">
      <HeaderBand eyebrow={eyebrow} />
      <div className="card-body">
        <div className="method-header">
          <div className="method-header__title">{title}</div>
          <div className="method-header__sub">
            {sub || (
              <>Two dimensions — <strong style={{ color: "var(--color-navy)" }}>Leadership</strong> (what executives know & say) and <strong style={{ color: "var(--color-navy)" }}>Company</strong> (what the org prioritizes & builds) — each split into two scoring pillars.</>
            )}
          </div>
        </div>
        <div className="method-bar">
          {["literacy", "advocacy", "orientation", "implementation"].map(p => (
            <div key={p} className={`method-bar__cell method-bar__cell--${p}`}>
              <div className="method-bar__name">{PILLAR_LABELS[p].toUpperCase()}</div>
              <div className="method-bar__verb">{PILLAR_VERBS[p].toUpperCase()}</div>
            </div>
          ))}
        </div>
        <div className="method-explanations">
          {cards.map((c, i) => (
            <div key={i} className={`method-card method-card--${c.pillar}`}>
              <div className="method-card__pillar">{PILLAR_LABELS[c.pillar]}</div>
              <div className="method-card__title">{c.title}</div>
              <div className="method-card__desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <FooterBand source={source} />
    </div>
  );
}

Object.assign(window, { MethodologyCard, METHODOLOGY_DEFAULTS });
