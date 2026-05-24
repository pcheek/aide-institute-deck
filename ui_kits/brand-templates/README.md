# AIDE Brand Templates · UI Kit

Pixel-perfect recreations of the 19-component AIDE reference gallery as composable React JSX components. **This is a brand-templates kit, not a typical UI kit** — the components produce publication-grade fixed-pixel social cards, email assets, and report covers, not interactive app surfaces.

Open `index.html` to see all components rendered with stock content.

---

## Files

| File | Purpose |
|---|---|
| `brand-templates.css` | All component styles, extracted faithfully from `source/gallery.html` and re-pointed at `colors_and_type.css` tokens. |
| `Primitives.jsx` | `HeaderBand` · `FooterBand` · `Logo` — the three-band layout's two ends, plus a logo helper. |
| `HeroStatCard.jsx` | **#01** — 1200×628. Oversize fuchsia stat + claim with em-emphasis. |
| `CompareCard.jsx` | **#02** — 1200×628. Two-stat comparison split by hairline divider. |
| `QuadScorecard.jsx` | **#03** — 1200×1200. Four-pillar tinted grid with deltas. |
| `PullQuoteCard.jsx` | **#04** — 1200×628. Editorial pull quote with Georgia mark + bar attribution. |
| `CompactQuoteCard.jsx` | **#05** — 1200×628. Quote + 220px round headshot avatar with fuchsia dot. Accepts `photo="paul" \| "felipe" \| "kate"` or any URL; falls back to initials on a navy→violet gradient. |
| `BarChartCard.jsx` | **#06** — 1200×628. Pillar bars colored by AIDE Index methodology. |
| `RankingCard.jsx` | **#07** — 1200×1200. AIDE50 leaderboard. |
| `MethodologyCard.jsx` | **#08** — 1200×1200. The canonical four-pillar explainer. |
| `SubBrandPromo.jsx` | **#09–11+** — 1200×628. Sub-brand promo with colored gradient visual. Supports all six sub-brands. |
| `LinkedInBanner.jsx` | **#12** — 1584×396. Profile banner with subtle dual radial gradient. |
| `EmailHeader.jsx` | **#13** — 600×150. Newsletter header. |
| `ReportCover.jsx` | **#18** — 1200×1500. Whitepaper / flagship-report cover. |

Each `.jsx` file exposes its component to `window` so files can be loaded as siblings via `<script type="text/babel" src="...">` without a bundler.

## Composing a card

```jsx
<HeroStatCard
  eyebrowLeft="AIDE Index"
  eyebrowRight="Q1 2026"
  stat="42%"
  unit="of healthcare executives"
  statement="lack measurable AI literacy in"
  emphasis="board-facing communications"
  context="Measured across earnings calls and LinkedIn activity, Q1 2026."
  source="Source: AIDE Index Q1 2026 · n = 200 healthcare leaders"
/>
```

`HeaderBand` accepts a `subbrand` prop (`'index' | 'insights' | 'rankings' | 'awards' | 'education' | 'talent'`) to recolor the eyebrow separator dot. `FooterBand` defaults its tagline to the canonical *"Tracking the AI that counts."* — don't override it without reason.

## Exporting

These are designed at exact pixel dimensions. To export a card to PNG, open `index.html` in Chrome, right-click the unscaled element in DevTools → *Capture node screenshot*. For PDF, use Chrome's *File → Print → Save as PDF*. Don't try to fluid-resize — the dimensions are LinkedIn / X / OG canonical and shouldn't drift.

## What's deliberately missing

- **No motion / hover states.** These are publication graphics, not interactive UI.
- **No card-on-card shadow elevation.** AIDE has no shadow tokens — borders + color contrast only.
- **No new imagery.** The brand uses solid fills, two specific radial gradients, and typographic marks. Nothing else.

## Reference

The faithful original is `../../source/gallery.html`. The four authority documents — `tokens.json`, `design-tokens.md`, `component-inventory.md`, `AIDE_Brand_Guidelines.html`, `CLAUDE.md`, `ASSET_MANIFEST.md` — all live in `../../source/`.
