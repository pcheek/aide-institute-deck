# AIDE Component Inventory

Last updated: 2026-05-22
Source of truth for tokens: `~/aide/branding/tokens.json` / `DESIGN_TOKENS.md`.

This is a faithful list of every recurring visual component observed in the AIDE source materials. **No new components.** Three things were observed-but-undocumented (a divider color, light divider rule, missing pill/tag spec) — flagged at the bottom for resolution before the claude.ai/design build.

Sources scanned:
- `AIDE_Brand_Guidelines.html` (v2.0 — primary visual reference)
- `social/linkedin/*.png` and `social/x/*.png` (template renders)
- `social/og-share-1200x630.png`
- `email/email-signature-*.html` (Paul, Kate, Felipe, Zach)
- `email/welcome-email*.html`
- `email/email-header-600x150.png`, `email/email-signature-400x100.png`
- `aide-brand` skill "Standard layout pattern" section

---

## 1. Layout primitives

The skill's three-band layout is the dominant structure across LinkedIn/methodology graphics.

| Component | Where it appears | Variants | Tokens used |
|---|---|---|---|
| Dark header band | LinkedIn templates, welcome email header, OG share, methodology graphics | (single variant) | `bg.inverse` (navy), `fg.onInverse`, `text.display` or `text.heading` |
| Light content area | All template body areas, doc page body | (single variant) | `bg.surface` or `bg.subtle`, `fg.primary` for body |
| Light footer band | LinkedIn/X cards, welcome email footer | With logo only • with tagline/source | `bg.subtle`, top border via `border.muted`, logo left + caption right |
| Vertical fuchsia divider | Email signature, dark header band lockups | 3px width default | `accent.cta` (`#E600FF`) |
| Horizontal violet bar | Welcome email banner divider, section dividers in doc | 3px height | `accent.label` / `border.divider` (`#7C3AED`) |
| Horizontal fuchsia top-border | Brand-guidelines section dividers | 3px height | `accent.cta` |

---

## 2. Surfaces & containers

| Component | Where it appears | Variants | Tokens used |
|---|---|---|---|
| Card (light) | Logo card, sub-brand card, voice card, type-specimen, type-scale card, preview card | All share `bg.subtle` + `radius.2xl` | `bg.subtle`, `radius.2xl`, `border.subtle` (optional) |
| Card (dark) | Dark logo card in brand guide | (single) | `bg.inverse`, `radius.2xl`, white text |
| Note block | Brand-guidelines "Critical rule" boxes, info notes | (single) | `bg.subtle`, left border via `accent.label` (violet), `text.body` in `fg.secondary` |
| Callout block | Tagline block, asset-generation quick-start | Light variant • dark navy variant | `bg.inverse`, `radius.2xl`, `text.body`, accent text in `accent.cta` |
| Inline code chip | All file paths and hex codes in the brand guide | (single) | `bg.subtle`, `radius.sm`, `text.mono`, `accent.label` color |
| Pre / code block | Asset generation, code samples | (single) | `bg.subtle`, `border.subtle`, `radius.xl`, `text.mono` |

---

## 3. Text components

| Component | Where it appears | Variants | Tokens used |
|---|---|---|---|
| Section header | Each brand-guide section | With number eyebrow • without | `text.label` (violet eyebrow) + `text.heading` + `fg.secondary` intro paragraph + 3px top border via `accent.cta` |
| Eyebrow label | TOC, type-specimen labels, section numbers, voice cards | (single) | `text.label`, color `accent.label` |
| Type specimen | Brand guide typography section | (single) | Card (light) + spec label + sample at scale + meta in mono |
| Type scale card | Type scale grid | (single) | Card (light) + label + meta |
| Voice card | Brand voice grid | (single) | Card (light) with `accent.label` top border (3px) + bold word + secondary description |

---

## 4. Color & swatch display

| Component | Where it appears | Variants | Tokens used |
|---|---|---|---|
| Inline swatch | Table rows in color tables | 20px • 28px | `radius.md`, `border.subtle` |
| Swatch card | Core / sub-brand / pillar swatch grids | (single) | Card + 72px tall swatch + name (`text.subheading`) + hex (`text.mono`) |
| Pillar bar | Methodology pillar visualization | 4-column full-width strip, 80px tall | One pillar color per cell, `text.label` name + small verb caption, no gap, `radius.2xl` on outer corners |
| Color usage example row | Color roles section | (single) | `bg.subtle`, `radius.lg`, 8px tall bar in target color + secondary text caption |

---

## 5. Logo & brand-asset displays

| Component | Where it appears | Variants | Tokens used |
|---|---|---|---|
| Logo card | Master logos grid | Light bg • dark bg | Card pattern + max-height 80px image + caption + caption-sub (mono path) |
| Sub-brand card | Sub-brand grid | (single per sub-brand) | Card (light) + 48px logo + name + accent hex caption (in that sub-brand's color) |
| Background pairing card | Logo-on-background examples | Dark navy • white • light gray | Cell with bg color + favicon + label + verdict (green check or fuchsia X) |
| Clearspace demo | Logo usage section | (single) | Light card + dashed violet border (`accent.label`) outset 24px + "1× A height" labels |

---

## 6. Preview / media

| Component | Where it appears | Variants | Tokens used |
|---|---|---|---|
| Preview card | Social asset previews | 2-up grid • full-width | Card (light) + image (full width) + name + dimensions in mono |
| Subbrand grid item | Sub-brand showcase | (single) | Smaller card pattern, image 48px max |

---

## 7. Data & instructional

| Component | Where it appears | Variants | Tokens used |
|---|---|---|---|
| Table | Color roles, asset references, sub-brand reference, signature specs, etc. | (single) | `text.label` header (uppercase mid-gray, navy bottom border 2px) + `text.body` cells with `bg.subtle` row separator and hover |
| Rule card | Do / Don't grids | "Do" (literacy green border-left) • "Don't" (fuchsia border-left) | Card (light) + 4px left border + tiny uppercase label heading in the border color + checklist with ✓ or ✗ icons |
| Usage example | Asset generation quick-start | (single — see Inline code chip + Callout) | Combines callout + code chip |

---

## 8. Document chrome (brand-guide only)

| Component | Where it appears | Variants | Tokens used |
|---|---|---|---|
| Cover treatment | Brand-guide cover page | (single) | Navy bg, A-mark white logo top, `text.display` h1 in white, violet eyebrow, 48×3px fuchsia divider, italic strapline, version meta in low-opacity white |
| Table of contents | After cover | (single) | `bg.subtle` block, violet uppercase heading, 2-column numbered list with violet numerals, underline-on-hover via `accent.label` |

---

## 9. Social, email, share templates (output formats)

These are component compositions, not new primitives. Listed so the design system tracks every shipping output.

| Template | Dimensions | Composition |
|---|---|---|
| LinkedIn banner | 1584×396 | Dark header band (navy), A-mark + wordmark, tagline |
| LinkedIn data card | 1200×1200 | Dark header band + light content area (stats) + light footer band w/ logo |
| LinkedIn quote card | 1200×628 | Same three-band, body emphasizes quote |
| LinkedIn profile | 400×400 | Navy bg + centered A-mark |
| X header | 1500×500 | Same three-band pattern, wider aspect |
| X data card | 1200×675 | Three-band |
| X quote card | 1200×675 | Three-band, quote emphasis |
| X profile | 400×400 | Navy bg + centered A-mark |
| OG share | 1200×630 | Three-band, generic share treatment |
| Newsletter email header | 600×150 | Dark header band scaled for inbox |
| Email signature (image) | 400×100 | Image of the HTML signature pattern |
| Email signature (HTML) | flexible | Logo cell + 3px fuchsia vertical divider + identity stack (name in navy `text.subheading`, role in `fg.secondary` caption, email in `fg.primary` caption, URL in `fg.link` caption, italic tagline in `fg.secondary` 11px) |
| Welcome email | 600 wide | Dark header band w/ logo + vertical fuchsia divider lockup, 3px violet horizontal bar, body sections divided by `border.muted` 1px rules, fuchsia CTA button (`accent.cta`, `radius.md`), footer band on `bg.subtle` |

---

## 10. Resolutions (2026-05-22)

The three open questions are now closed.

1. **`#EBEBEF` divider color** → **resolved.** Promoted to `color.border.muted` in `tokens.json` and DESIGN_TOKENS.md. Welcome-email entry above and §1 footer-band entry now reference it.

2. **Pill/tag component** → **dropped.** Not used in any shipped asset; the skill's reference to TEAL_LT / PURP_LT is stale and will be removed when the skill is rewritten in Prompt 5. If methodology graphics later need pills, commission a real spec — do not re-import the skill's values.

3. **Type scale ranges** → **single defaults locked.** `tokens.json` exposes one value per step. Ranges in DESIGN_TOKENS.md are guidance, not tokens. Add density variants (`text.body.compact`, etc.) only if a real product surface requires them.

The inventory + tokens are ready to paste into claude.ai/design.
