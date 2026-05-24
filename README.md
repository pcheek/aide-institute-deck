# AIDE Institute Design System

> **Tracking the AI that counts.**

This is the design system for the **AIDE Institute** (AI-Driven Enterprise Institute) — a research organization that benchmarks AI maturity across the Fortune 500 through the **AIDE Index** methodology. The system produces on-brand graphics, decks, reports, social cards, and emails.

The brand is dense, editorial, data-forward. The primary outputs are **HTML/CSS graphics** (LinkedIn cards, OG shares, methodology explainers, report covers) rendered at fixed dimensions and exported to PNG / PDF from Chrome. The brand explicitly does **not** ship as a typical app or marketing-site UI — its components are publication templates.

---

## Sources ingested

All sources are W3C-aligned design tokens + their reasoning, reconciled May 22, 2026. The HTML brand guidelines + `CLAUDE.md` + asset manifest trio are the live authority; the older `aide-brand` skill is **stale** and was reconciled against this trio.

| File | What it is |
|---|---|
| `source/tokens.json` | W3C Design Tokens — every color, font, spacing, radius value (source of truth). |
| `source/design-tokens.md` | The reasoning behind every value, with a conflict-resolution log. |
| `source/component-inventory.md` | The faithful list of recurring visual components observed in shipped AIDE assets. |
| `source/gallery.html` | 19 reference component implementations (LinkedIn cards, charts, report cover, sub-brand promos, co-brand). |
| `source/SETUP.md` | The user-facing setup instructions for a claude.ai Project + custom instructions. |

External references the source documents point to but that are **not yet attached**:

- `~/aide/branding/AIDE_Brand_Guidelines.html` (v2.0, March 2026) — the live brand guidelines doc.
- `~/aide/branding/CLAUDE.md` — companion authority file.
- `~/aide/branding/ASSET_MANIFEST.md` — list of shipped assets.
- `~/aide/branding/logos/png/` — the real PNG logo lockups (horizontal color, mono white, sub-brand variants, A-mark / favicon).
- `aideinstitute.com` — the live marketing site.

---

## Products represented

AIDE is not a single app or website — it is a **brand house** with sub-brands. The system's "components" are publication templates, not UI controls.

| Sub-brand | Hex | Role |
|---|---|---|
| **AIDE Index**     | `#E600FF` | Research — the proprietary 4-pillar scoring methodology, quarterly Fortune-500 scores. |
| **AIDE Insights**  | `#5CFFC8` | Publishing — quarterly briefs, sector deep-dives, methodology notes. |
| **AIDE Rankings**  | `#FF7A00` | The annual **AIDE50** — the 50 most AI-mature enterprises. |
| **AIDE Awards**    | `#7B2FFF` | Annual awards. |
| **AIDE Education** | `#FF47C2` | Executive AI education. |
| **AIDE Talent**    | `#00E5A0` | Talent / hiring. |

The **AIDE Index methodology** uses a *separate* color system for its four scoring pillars (never mix these with sub-brand colors):

| Pillar | Verb | Hex | Dimension |
|---|---|---|---|
| Literacy | KNOW | `#4ADE80` | Leadership — what executives know |
| Advocacy | SAY | `#A78BFA` | Leadership — what executives say |
| Orientation | PRIORITIZE | `#D946EF` | Company — what the org prioritizes |
| Implementation | BUILD | `#FBBF24` | Company — what the org actually ships |

**Hard rule:** the sub-brand palette and the pillar palette are two separate semantic systems. Never use a pillar color as a sub-brand accent or vice versa. The token names (and hex codes — `subbrand.index` `#E600FF` vs. `pillar.orientation` `#D946EF`) make the distinction explicit.

---

## CONTENT FUNDAMENTALS

How AIDE copy is written, observed across the brand guidelines, sub-brand promos, gallery components, welcome emails, and email signatures.

### Voice
- **Editorial-analytical, not marketing.** Closer to *The Economist* or a McKinsey insight brief than to a startup landing page. Sentences are confident, declarative, evidence-backed. No exclamation marks, no "let's", no second-person hype.
- **The data is the hero.** Every headline pairs a number with a claim — "Only 1 in 3 top executives demonstrate measurable AI literacy." Never a number floating alone, never a claim without a source line under it.
- **Third-person and we-voice.** AIDE writes about the Fortune 500, executives, sectors. Never "you" except in the welcome email's onboarding micro-copy.
- **Active verbs in the AIDE Index pillars:** KNOW / SAY / PRIORITIZE / BUILD. These four verbs reappear as eyebrow labels and section captions throughout — they are the brand's verbal spine.

### Tone
- Confident, not breathless. "The pillar gap is widening." not "Wow — pillar gaps are widening!"
- Comfortable naming gaps and laggards. The brand calls out under-performance ("Manufacturing trails on every one") rather than softening it.
- Editorial precision. Quarters are written `Q1 2026`, not "this quarter". Dates are written `March 2026`, not "last month".

### Headline patterns
- Period-terminated short sentences as titles. "The pillar gap is widening." "Talk vs. build." "The leaders of the AI-driven enterprise era." "Tech leads every pillar. Manufacturing trails on every one."
- Numbers as the lede: `37%`, `42 vs. 28`, `2.3×`. Display weight, fuchsia or navy color, oversized.
- "Em-emphasis with color" pattern — within a sentence, swap one phrase to fuchsia (`<em style="color: #E600FF">`) to spotlight the takeaway. E.g. *"Only **1 in 3** top executives…"*.

### Casing
- **Title case** for proper nouns and product names (`AIDE Index`, `AIDE Rankings`, `Fortune 500`).
- **UPPERCASE letter-spaced** (`letter-spacing: 1.5–3px`) for eyebrows, section labels, pillar names, table column headers, footer-band tags. Always in `--accent-label` violet.
- **Sentence case** for body and headlines.
- **lowercase URLs** — always `aideinstitute.com`, never `AideInstitute.com`.

### Tagline (canonical, never paraphrased)
**"Tracking the AI that counts."** — Always with the period. Always in italics in footers / signatures. Never substituted with synonyms.

### Emoji & informal markers
- **No emoji.** Not on social cards, not in headlines, not in email body. The only "marks" used are: filled dot (`•`) as a separator in eyebrows, the `▲` / `▼` arrows for delta indicators, italic typographic quotes (`"`) at oversize in pull-quote cards.

### Numbers
- Percentages: `37%` (no space).
- Multipliers: `2.3×` with a multiplication sign, not `x`.
- Scores: `0–100` (en-dash), composite scores written as bare integers (`42`, `28`).
- Quarters: `Q1 2026`. Year-quarters: `Q1'26` only when space-constrained in chart axes.
- Sample sizes always in footer: `n = 500 companies`, `n = 200 healthcare leaders`.

### Source lines
Every data graphic ends with a **source band**: `Source: AIDE Index Q1 2026 · n = 500 companies`. Methodology version reference where relevant: `AIDE Index methodology v2.1`.

---

## VISUAL FOUNDATIONS

The motifs and rules that make a piece of work look like AIDE rather than a generic editorial layout.

### Color
- **Navy `#1B2541` is the brand color**, not blue. It anchors header bands, footers, report covers, social profile circles. Almost every shipped piece has a navy band at the top.
- **Fuchsia `#E600FF` is the activator** — it's used for hero stat values, accent bars (3–4px), CTAs, em-emphasis within sentences. Sparingly applied: usually one fuchsia element per card.
- **Violet `#7C3AED` is the structural accent** — eyebrow labels, section numbers, URLs, dividers. Quieter than fuchsia; never used as a fill.
- **Light gray `#F8F9FB`** for card-on-card subtle surfaces (footer bands, info notes).
- **Pillar colors and sub-brand colors are two separate semantic systems** — never crossed.
- **No green systemic color** beyond pillar Literacy (`#4ADE80`) and the up-delta indicator (`#1a8a3e`). The brand does not use green as a UI state color.

### Typography
- **Two typefaces on web:** **Space Grotesk Bold** for display & headings (matches the chunky geometric AIDE wordmark), **Inter** for body / captions / eyebrows / labels (matches the "Institute" subline and tagline). Camera Plain Variable is the print-side primary per `source/design-tokens.md` and is not used on web.
- **Weights: 400 (Inter regular) / 700 (both bold) / 900 (Inter black).** No 500 or 600 in body text.
- **Tight letter-spacing on display** (`-0.5px` to `-3px` at the largest sizes). Eyebrow labels use **wide tracking** (`1.5–3px`).
- **Numbers are the hero type:** the largest type on most cards is the stat value, e.g. `200px / 700` (Space Grotesk Bold) in fuchsia, line-height `0.9`.
- **No mixed type families beyond Space Grotesk / Inter.** Mono is *only* used for hex codes and file paths in the guidelines doc itself — never in shipped social/email assets.

### Layout — the three-band pattern
Almost every shipped piece is built from three horizontal bands:
1. **Dark header band** — navy fill, AIDE logo left, uppercase violet/dim eyebrow text right with a fuchsia separator dot.
2. **Light content area** — white or `--bg-subtle`, full editorial breathing room, stat + statement + context.
3. **Light footer band** — `--bg-subtle` fill, top border `--border-muted`, italic tagline left, source line center, URL right.

This pattern repeats across LinkedIn cards (1200×628, 1200×1200), X cards, OG shares, email headers, welcome emails. **When in doubt, default to the three-band layout.**

### Backgrounds
- **Solid fills only.** No images. No textures. No photography. No illustration.
- **Two background gradients exist**, both reserved for hero pieces (banner & report cover):
  - Subtle radial: `radial-gradient(circle at 15% 80%, rgba(124,58,237,0.15) 0%, transparent 45%)` — violet at one corner, fuchsia at the opposite. Always on navy.
- **No glass / blur / frosted surfaces.** No backdrop-filter anywhere.

### Borders, dividers, accent bars
- **3px fuchsia accent bar** — vertical (4px wide, on the left of a stat) or horizontal (32–80px wide, under an attribution). The single most recognizable AIDE accent.
- **3px violet horizontal bar** as a section divider in welcome emails / brand-guide section dividers.
- **1px `--border-muted` (`#EBEBEF`)** — section separators in dense layouts (table rows, footer-band top edge).
- **`rgba(0,0,0,0.06)`** — subtle card outlines, swatch outlines.
- **Borders, not shadows.** The brand has **no shadow tokens** — elevation is conveyed via borders and color contrast only.

### Shadows
**There are no shadows in AIDE.** "Don't add drop shadows, outlines, glows, or effects" is a rule on the logo and is honored systemwide. If a card needs visual weight, give it a border or a darker fill — never a shadow.

### Cards & containers
- **Radius 12px (`--radius-2xl`)** is the default for cards, panels, callouts.
- **Radius 16px** appears on inner pillar quad cells and methodology bar — slightly larger than the outer card.
- **Light cards** use `--bg-subtle` with no border, or `--bg-surface` with `--border-subtle`.
- **Dark cards** use `--bg-inverse` with white text.
- **No card hovers, no card-press states** — these are publication graphics, not interactive UI.

### Animation, hover, press
- **Effectively none.** The only documented motion in the entire source corpus is a `0.2s color transition` on TOC link hover in the brand-guide doc itself.
- **No motion tokens were defined**, intentionally. Don't invent them.
- If implementing interactive UI (e.g. for the website), use `transition: color 0.2s ease` for links and treat that as the upper bound until a real motion spec exists.

### Transparency, blur
- Used **only** to dim white text on navy (e.g. `rgba(255,255,255,0.55)` for header-band eyebrows; `rgba(255,255,255,0.7)` for the report-cover subhead; `rgba(255,255,255,0.15)` for the cover-meta hairline).
- **No blur.** No backdrop-filter.

### Spacing
- 4px base scale. Frequently observed multiples: 8, 12, 16, 24, 32, 48, 56, 64, 80.
- Card padding inside the three-band layout: usually `56px` horizontal, `48–64px` vertical. Footer band: `18px 56px`.

### Imagery
- **No photography. No illustrations. No hand-drawn marks.** The brand's visual language is purely typographic + data. Where a "visual" is needed in a sub-brand promo, it's a colored gradient rectangle with a single oversized typographic symbol inside (`I`, `i`, `50`) — never an image, never an icon.

### Fixed-pixel design
- Every output is **designed at fixed pixel dimensions** matching the channel. LinkedIn data card: `1200×628`. LinkedIn square: `1200×1200`. Banner: `1584×396`. OG share: `1200×630`. Email header: `600×150`. Report cover: `1200×1500`. These dimensions are non-negotiable — don't fluid-resize them, don't responsive them.

---

## ICONOGRAPHY

**There is no AIDE icon system, by design.** This is documented explicitly in `tokens.json` under `_omitted.iconography`: *"No icon family documented in any source."*

The brand's visual vocabulary is **typographic, not iconographic** — meaning is carried by:

- **Oversized digits** as the primary "icon" on data cards (`37%`, `42`, `2.3×`).
- **Single typographic glyphs** as sub-brand marks — `I` for AIDE Index, `i` for AIDE Insights, `50` for AIDE Rankings, set in a serif (Georgia / Times) inside a gradient square.
- **Delta arrows** `▲` / `▼` for change indicators (Unicode chars, not SVG icons).
- **Bullet `•`** as the only separator dot, used in eyebrows: `AIDE Index • Q1 2026`.
- **The A-mark logo** (`assets/aide-favicon.svg`) when a logo is needed at small scale or as a centered profile mark.

If a component genuinely needs an icon (e.g. a future website nav, a UI control inside the AIDE Education product), substitute the closest single-weight outline icon from **Lucide** (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`) at `1.5px` stroke, navy or violet fill — and **flag the substitution to the user** because no icon set is canonized yet. Do not invent new icons. Do not introduce emoji.

---

## Index — what lives where

```
.
├── README.md                        ← this file
├── SKILL.md                         ← Agent-Skills entrypoint (also works in Claude Code)
├── colors_and_type.css              ← CSS custom properties + semantic type helpers
│
├── source/                          ← original docs as ingested (read-only authority)
│   ├── tokens.json                  ← W3C Design Tokens (source of truth)
│   ├── design-tokens.md             ← reasoning + conflict-resolution log
│   ├── component-inventory.md       ← faithful list of recurring components
│   ├── gallery.html                 ← 19 reference component implementations
│   ├── AIDE_Brand_Guidelines.html   ← live visual brand guide (v2.0, March 2026)
│   ├── CLAUDE.md                    ← the authority rules file ("DO NOT TOUCH" list)
│   ├── ASSET_MANIFEST.md            ← master inventory of shipped brand assets
│   └── SETUP.md                     ← original Project setup instructions
│
├── fonts/                           ← local @font-face files (variable axes)
│   ├── Inter-VariableFont_opsz_wght.ttf
│   ├── Inter-Italic-VariableFont_opsz_wght.ttf
│   └── SpaceGrotesk-VariableFont_wght.ttf
│
├── assets/                          ← real brand asset PNGs
│   ├── aide-logo-horizontal.png     ← horizontal lockup, color
│   ├── aide-logo-mono-white.png     ← mono white for navy backgrounds
│   ├── aide-favicon.png             ← A-mark, square / favicon / profile circle
│   ├── aide-institute-stacked.png   ← stacked AIDE / Institute lockup (letterhead)
│   ├── aide-index-brand-page.jpg    ← reference page for Index sub-brand lockup
│   ├── sub-brands/                  ← all 6 sub-brand lockups
│   │   ├── aide-index-logo.png
│   │   ├── aide-insights-logo.png
│   │   ├── aide-rankings-logo.png
│   │   ├── aide-awards-logo.png
│   │   ├── aide-education-logo.png
│   │   └── aide-talent-logo.png
│   ├── marketing/                   ← brand wheel + product mockups
│   │   ├── aide-brand-wheel.png
│   │   ├── aide-brand-wheel-alt.png
│   │   └── reports-benchmark-mockup.png
│   ├── email/                       ← email headers & signatures
│   │   ├── email-header-600x150.png
│   │   └── email-signature-400x100.png
│   └── social/                      ← reference social renders (LinkedIn / OG)
│       ├── linkedin-banner-1584x396.png
│       ├── linkedin-post-data-1200x1200.png
│       ├── linkedin-post-quote-1200x628.png
│       └── og-share-1200x630.png
│
├── preview/                         ← Design-System tab cards (registered as assets)
│   ├── colors-core.html             ← Core palette swatches
│   ├── colors-subbrand.html         ← Real sub-brand lockups + hex
│   ├── colors-pillar.html           ← AIDE Index pillar swatches (4)
│   ├── colors-semantic.html         ← Semantic aliases (bg, fg, border, accent)
│   ├── type-scale.html              ← Display → caption type ladder
│   ├── type-specimen.html           ← Aa1. at hero size + the three weights
│   ├── type-eyebrow-and-label.html  ← Uppercase eyebrow / label treatment
│   ├── spacing-scale.html           ← 4px-base spacing tokens
│   ├── radius-scale.html            ← Radius tokens 4 → 12
│   ├── elevation-rule.html          ← "No shadows" rule card
│   ├── three-band-layout.html       ← The dominant layout primitive
│   ├── accent-bars.html             ← Fuchsia vertical & horizontal accents
│   ├── eyebrow-anatomy.html         ← Header-band logo + Section · dot · Context
│   ├── footer-band.html             ← Source-line footer band
│   ├── pillar-bar.html              ← Methodology 4-pillar bar
│   ├── stat-treatment.html          ← Hero stat value + accent bar
│   ├── pull-quote.html              ← Quote-mark + body + attribution
│   ├── logo-lockups.html            ← Horizontal + mono white + A-mark + clearspace
│   ├── brand-wheel.html             ← Sub-brand ecosystem
│   ├── tagline-block.html           ← The tagline, set canonically
│   └── do-and-dont.html             ← Pillar × sub-brand color rule
│
└── ui_kits/
    └── brand-templates/             ← The component "UI kit" — 13 cards as React JSX
        ├── README.md
        ├── index.html               ← Interactive showcase (all 13 components)
        ├── brand-templates.css      ← All component styles
        ├── Primitives.jsx           ← HeaderBand · FooterBand · Logo
        ├── HeroStatCard.jsx         ← Card #01 — 1200×628 hero stat
        ├── CompareCard.jsx          ← Card #02 — two-stat comparison
        ├── QuadScorecard.jsx        ← Card #03 — 4-pillar grid
        ├── PullQuoteCard.jsx        ← Card #04 — pull-quote
        ├── BarChartCard.jsx         ← Card #06 — pillar bar chart
        ├── RankingCard.jsx          ← Card #07 — AIDE50 ranking
        ├── MethodologyCard.jsx      ← Card #08 — 4-pillar explainer
        ├── SubBrandPromo.jsx        ← Cards #09–11+ — sub-brand promos (all 6)
        ├── LinkedInBanner.jsx       ← Card #12 — 1584×396 banner
        ├── EmailHeader.jsx          ← Card #13 — 600×150 newsletter header
        └── ReportCover.jsx          ← Card #18 — 1200×1500 report cover
```

---

## Fonts & assets — confirmed setup

**Typefaces (web).** Loaded from Google Fonts in `colors_and_type.css`:
- **Space Grotesk** (500 / 700) — used for the AIDE display & heading scale (matches the chunky geometric wordmark in `assets/aide-logo-horizontal.png`).
- **Inter** (400 / 700 / 900) — used for body, captions, eyebrows, labels, source lines (matches the "Institute" subline and the small uppercase tagline lockup).
- *Camera Plain Variable* remains the print-side primary per `source/design-tokens.md` but is not used on the web — Inter is the documented fallback.

**Logos (real PNGs in `assets/`):**
| File | Source | Use |
|---|---|---|
| `aide-logo-horizontal.png` | "AIDE logo Blue" upload | Horizontal lockup on light bg |
| `aide-logo-mono-white.png` | "AIDE logo White" upload | Horizontal lockup on navy bg |
| `aide-favicon.png` | "Index Logo 1" upload — the A-mark only | Favicon, profile mark, small-format |
| `aide-institute-stacked.png` | "AIDE Institute Letter Head" | Stacked AIDE / Institute lockup |
| `aide-institute-stacked-alt.png` | "AIDE Institute Letter Head 1" | Stacked, alternate (AI-Driven Enterprise / Institute) |
| `aide-index-brand-page.jpg` | "Index Letter Heads" | Reference page — AIDE Index sub-brand logo color variations |

**Still to provide:**
1. **Sub-brand lockups.** `aide-{index,insights,rankings,awards,education,talent}` PNGs are referenced by `source/design-tokens.md`. Only the **AIDE Index** lockup variations exist as a reference image (`aide-index-brand-page.jpg`) — drop the actual PNG files (and the other five sub-brand lockups) in `assets/sub-brands/` when available.
2. **Iconography.** No icon system is canonized. If a future surface needs icons, see the **ICONOGRAPHY** section above for guidance and flag the choice explicitly.

---

## Using this system

For agent / `claude.ai` usage, see `SKILL.md`. For direct human use:

1. Import `colors_and_type.css` at the top of your HTML output.
2. Pick a template from `ui_kits/brand-templates/` (or directly copy from `source/gallery.html`).
3. Specify exact pixel dimensions for your output (LinkedIn data card `1200×628`, square `1200×1200`, banner `1584×396`, OG share `1200×630`, email header `600×150`, report cover `1200×1500`).
4. Never invent hex codes. Always reference tokens.
5. Never mix sub-brand colors with pillar colors.
6. Output is HTML by default. PNG/PDF is exported from Chrome (right-click element → *Capture node screenshot*, or **File → Print → Save as PDF**).
