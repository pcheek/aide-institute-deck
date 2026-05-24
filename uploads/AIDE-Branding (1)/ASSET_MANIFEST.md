
# AIDE Brand Asset Manifest

Last updated: 2026-03-11

---

## Brand Identity

**AIDE** = AI-Driven Enterprise Institute

The AIDE brand uses a geometric **"A" lettermark** with an embedded star/compass cutout in dark navy. This is the live brand on aideinstitute.com (Lovable). The parent brand pairs this mark with "AI-Driven Enterprise" in navy and "Institute" in blue.

Each sub-brand shares the same navy "AIDE" wordmark (with the geometric A) and adds a uniquely colored product name.

---

## Master Logos

| File | Description | Use |
|---|---|---|
| `logos/png/aide-logo-horizontal.png` | Geometric "A" + "AI-Driven Enterprise Institute" (navy/blue) | Primary logo for website, decks, documents |
| `logos/png/aide-logo-white.png` | White version of the full logo | Dark backgrounds |
| `icons/favicon.png` | Standalone geometric "A" mark (navy, transparent bg) | Favicon, app icon, small-format |

---

## Sub-Brand Logos

All in `logos/png/sub-brands/`. Each follows the pattern: navy geometric "AIDE" wordmark + colored product name.

| File | Sub-Brand | Accent Color | Hex | Description |
|---|---|---|---|---|
| `aide-index-logo.png` | **AIDE Index** | Magenta | #E600FF | Research — "TRACKING THE AI THAT COUNTS." |
| `aide-insights-logo.png` | **AIDE Insights** | Mint | #5CFFC8 | Content/Publishing — decision-grade AI analysis |
| `aide-rankings-logo.png` | **AIDE Rankings** (AIDE50) | Orange | #FF7A00 | Recognising the leaders of the AI-driven enterprise era |
| `aide-awards-logo.png` | **AIDE Awards** | Purple | #7B2FFF | Celebrating excellence in AI-driven enterprise |
| `aide-education-logo.png` | **AIDE Education** | Pink | #FF47C2 | Board-level AI education from top academic institutions |
| `aide-talent-logo.png` | **AIDE Talent** | Teal | #00E5A0 | Recruiting — board-ready AI leadership |

---

## Marketing Assets

All in `marketing/`.

| File | Description |
|---|---|
| `aide-brand-wheel.png` | Brand ecosystem wheel — all 6 sub-brands around the AIDE Institute center |
| `aide-brand-wheel-alt.png` | Brand wheel (alternate version) |
| `reports-benchmark-mockup.png` | iPhone mockup showing AIDE benchmark comparisons on mobile |

---

## Core Color System

| Role | Name | Hex |
|---|---|---|
| Primary background, wordmark | Dark Navy | #1B2541 |
| Logo "Institute" text, light accent | Blue | #3B82F6 |
| Structural accent (dividers, labels, URLs) | Institute Violet | #7C3AED |
| CTA buttons, data highlights, accent bars | Fuchsia | #E600FF |
| Light background | White | #FFFFFF |
| Body text on light bg | Dark Gray | #1A1A1A |
| Secondary text | Mid Gray | #777777 |
| Subtle bg | Light Gray | #F8F9FB |

---

## Sub-Brand Accent Colors

| Sub-Brand | Color | Hex |
|---|---|---|
| AIDE Index | Magenta | #E600FF |
| AIDE Insights | Mint | #5CFFC8 |
| AIDE Rankings | Orange | #FF7A00 |
| AIDE Awards | Purple | #7B2FFF |
| AIDE Education | Pink | #FF47C2 |
| AIDE Talent | Teal | #00E5A0 |

---

## Methodology Pillar Colors

These four colors are used exclusively for the AIDE Index scoring dimensions. They must be consistent everywhere — website, reports, charts, social content.

| Pillar | Verb | Color | Hex | Measures |
|---|---|---|---|---|
| **Literacy** | KNOW | Green | #4ADE80 | % of executives who are AI-literate |
| **Advocacy** | SAY | Violet | #A78BFA | AI-related LinkedIn activity by executives |
| **Orientation** | PRIORITIZE | Magenta | #D946EF | Strategic AI commitment across 6 channels |
| **Implementation** | BUILD | Gold | #FBBF24 | Tangible AI deployment across 6 channels |

**Dimensions:** Literacy + Advocacy = Leadership (what leaders know & say). Orientation + Implementation = Company (what the org prioritizes & builds).

**Rule:** Sub-brand colors and pillar colors are two separate systems. Never mix them.

---

## Social Media Assets

All in `social/`.

| File | Platform | Dimensions |
|---|---|---|
| `social/linkedin/linkedin-profile-400x400.png` | LinkedIn profile pic | 400x400 |
| `social/linkedin/linkedin-banner-1584x396.png` | LinkedIn banner | 1584x396 |
| `social/linkedin/linkedin-post-data-1200x1200.png` | LinkedIn data card template | 1200x1200 |
| `social/linkedin/linkedin-post-quote-1200x628.png` | LinkedIn quote template | 1200x628 |
| `social/x/x-profile-400x400.png` | X/Twitter profile pic | 400x400 |
| `social/x/x-header-1500x500.png` | X/Twitter header | 1500x500 |
| `social/x/x-post-card-1200x675.png` | X/Twitter data card template | 1200x675 |
| `social/x/x-post-quote-1200x675.png` | X/Twitter quote template | 1200x675 |
| `social/og-share-1200x630.png` | Open Graph share image | 1200x630 |

---

## Email Assets

All in `email/`.

| File | Description | Dimensions |
|---|---|---|
| `email/email-header-600x150.png` | Newsletter header banner | 600x150 |
| `email/email-signature-400x100.png` | Email signature block | 400x100 |

---

## Generation Script

`generate_assets.py` in `~/aide/branding/` regenerates all social, email, and OG assets from the real geometric A mark. Run `python3 generate_assets.py` to rebuild.

---

## Still Needed

- [ ] Mono dark logo variant (all navy, no blue)
- [ ] Mono white logo variant (all white)

---

## Archive

Old AI-generated assets (rounded-square magenta style, created 2026-03-10) are in `archive/old-generated-2026-03-10/`. These do NOT represent the real brand and should not be used.
