# AIDE Design Tokens — Reconciled

Last updated: 2026-05-22
Status: Source of truth for color, type, spacing, radius. Supersedes the `aide-brand` skill where they disagree.

**Default output format: HTML.** When generating AIDE design system outputs — components, templates, graphics, documents — default to HTML/CSS. This matches what the existing brand guidelines, welcome emails, and email signatures already use, and what claude.ai/design produces natively. If a PNG/JPG is needed (e.g., social cards, OG images), render from HTML rather than drawing in PIL. The `generate_assets.py` PIL pipeline stays for backward compatibility but is not the preferred path going forward.

---

## Sources reconciled

| Source | Role |
|---|---|
| `~/aide/branding/AIDE_Brand_Guidelines.html` (v2.0, March 2026) | **Authoritative.** Matches live aideinstitute.com. |
| `~/aide/branding/CLAUDE.md` | Authoritative. Agrees with the HTML guidelines on every value. |
| `~/aide/branding/ASSET_MANIFEST.md` | Authoritative for asset list. Agrees on palette. |
| `anthropic-skills:aide-brand` SKILL.md | **Stale.** Diverges on core palette and typography. To be rewritten after this file is locked. |

The HTML + CLAUDE.md + ASSET_MANIFEST trio agree on every color and font value. The skill is the only outlier. Where they disagree, the trio wins — they reflect what is actually live on the site and used in the finalized logo files.

---

## Conflict resolution log

Each disagreement is recorded so the decision is auditable.

### Color — primary navy
- **HTML / CLAUDE.md / manifest:** Dark Navy `#1B2541`
- **Skill:** Midnight Blue (INK) `#0B1E36`
- **Decision:** `#1B2541` ("Dark Navy").
- **Why:** Used throughout AIDE_Brand_Guidelines.html, embedded in finalized logo PNGs, matches the live aideinstitute.com cover treatment.

### Color — blue accent
- **HTML / CLAUDE.md:** Blue `#3B82F6` (logo "Institute" text, light accent)
- **Skill:** Cerulean `#2C7BE5` (connectors, links)
- **Decision:** `#3B82F6` ("Blue").
- **Why:** Embedded in the live logo. The skill's Cerulean is not used anywhere in the live system.

### Color — magenta/fuchsia accent
- **HTML / CLAUDE.md:** Fuchsia `#E600FF` (CTAs, data highlights, accent bars; also AIDE Index sub-brand)
- **Skill:** Magic Magenta `#DC00F5`
- **Decision:** `#E600FF` ("Fuchsia").
- **Why:** All finalized assets and the live signature divider use `#E600FF`. The skill's `#DC00F5` does not appear in any shipped asset.

### Color — structural accent
- **HTML / CLAUDE.md:** Institute Violet `#7C3AED` (dividers, labels, URLs)
- **Skill:** Purple `#6730D2`
- **Decision:** `#7C3AED` ("Institute Violet").
- **Why:** Used as the structural accent across the live brand guidelines and email signature URLs.

### Color — secondary text on light
- **HTML / CLAUDE.md:** Mid Gray `#777777`
- **Skill:** INK2 `#283750`
- **Decision:** `#777777` ("Mid Gray").
- **Why:** Used throughout the live brand guidelines for captions and metadata. INK2 is a near-navy not present in any shipped asset.

### Color — additional skill-only values
- **Skill:** Emerald Pulse `#00A073`, LGRAY `#DCE1EB`, BGCOL `#F8F9FC`, TEAL_LT `#E6F8F2`, PURP_LT `#F0EBFC`
- **Decision:** Drop all five.
- **Why:** None appear in AIDE_Brand_Guidelines.html or any shipped logo/social/email asset. The live light-bg color is `#F8F9FB` (not `#F8F9FC`); the live brand has no green systemic color. If pill backgrounds for tags become a documented need, they should be added consciously, not silently from the skill.

### Pillar colors
- **All sources agree:** Literacy `#4ADE80`, Advocacy `#A78BFA`, Orientation `#D946EF`, Implementation `#FBBF24`.
- **Naming note:** CLAUDE.md calls Orientation "Magenta," skill calls it "Fuchsia." Hex is identical. **Decision:** name it "Fuchsia" to avoid collision with the core-palette Fuchsia `#E600FF` — use the hex, not the name, as the primary identifier. Document the collision explicitly.

### Typography
- **HTML / CLAUDE.md:** Camera Plain Variable (single typeface, fallback `ui-sans-serif, system-ui, sans-serif`). Weights 400 / 700 / 900.
- **Skill:** Space Grotesk (titles), Inter (body), Bricolage Grotesque (stats), Instrument Sans (labels).
- **Decision:** Camera Plain Variable only, plus the documented fallback stack.
- **Why:** This is what runs on the live site and what CLAUDE.md explicitly enforces ("No other fonts"). The skill's four-font stack was likely a generic tech-brand default; nothing in the finalized assets uses it.

### Tagline
- **All sources agree:** "Tracking the AI that counts." No change.

---

## Tokens

### Color — core

| Token | Hex | RGB | Use |
|---|---|---|---|
| `color.core.navy` | `#1B2541` | 27, 37, 65 | Primary bg, wordmark, headers, footers |
| `color.core.blue` | `#3B82F6` | 59, 130, 246 | Logo "Institute" text, light accent on dark |
| `color.core.violet` | `#7C3AED` | 124, 58, 237 | Section labels, dividers, URLs, structural accents |
| `color.core.fuchsia` | `#E600FF` | 230, 0, 255 | CTAs, data highlights, accent bars, hero stats |
| `color.core.white` | `#FFFFFF` | 255, 255, 255 | Page bg, text on dark |
| `color.core.ink` | `#1A1A1A` | 26, 26, 26 | Body text on light |
| `color.core.midGray` | `#777777` | 119, 119, 119 | Secondary text, captions, metadata |
| `color.core.lightGray` | `#F8F9FB` | 248, 249, 251 | Card fills, subtle bg, alt rows |

### Color — sub-brand

Use **only** in that sub-brand's assets.

| Token | Hex | Sub-brand |
|---|---|---|
| `color.subbrand.index` | `#E600FF` | AIDE Index — Research |
| `color.subbrand.insights` | `#5CFFC8` | AIDE Insights — Publishing |
| `color.subbrand.rankings` | `#FF7A00` | AIDE Rankings — AIDE50 |
| `color.subbrand.awards` | `#7B2FFF` | AIDE Awards |
| `color.subbrand.education` | `#FF47C2` | AIDE Education |
| `color.subbrand.talent` | `#00E5A0` | AIDE Talent |

Note: `color.subbrand.index` and `color.core.fuchsia` share the same hex (`#E600FF`). This is intentional — Index is the flagship sub-brand. Don't deduplicate at the token layer; the semantic distinction matters.

### Color — methodology pillars

Use **only** in AIDE Index scoring content (methodology diagrams, scoring charts, benchmark visualizations).

| Token | Hex | Pillar | Verb |
|---|---|---|---|
| `color.pillar.literacy` | `#4ADE80` | Literacy | KNOW |
| `color.pillar.advocacy` | `#A78BFA` | Advocacy | SAY |
| `color.pillar.orientation` | `#D946EF` | Orientation | PRIORITIZE |
| `color.pillar.implementation` | `#FBBF24` | Implementation | BUILD |

**Hard rule:** Sub-brand colors and pillar colors are two separate semantic systems. Never use a pillar color as a sub-brand accent or vice versa.

**Naming collision warning:** `color.pillar.orientation` `#D946EF` is also a fuchsia-family color, distinct from `color.core.fuchsia` `#E600FF`. Always reference by hex when there is any ambiguity.

### Color — semantic roles

Derived from how the core palette is actually used in the guidelines. These are aliases over the core palette so components can be themed without re-binding raw colors.

| Semantic token | Resolves to | Use |
|---|---|---|
| `color.bg.surface` | `color.core.white` | Default page background |
| `color.bg.subtle` | `color.core.lightGray` | Cards, alt rows, light panels |
| `color.bg.inverse` | `color.core.navy` | Dark hero sections, footers, headers |
| `color.fg.primary` | `color.core.ink` | Body text on light |
| `color.fg.secondary` | `color.core.midGray` | Captions, metadata |
| `color.fg.onInverse` | `color.core.white` | Text on navy |
| `color.fg.link` | `color.core.violet` | URLs, navigation links |
| `color.border.subtle` | `rgba(0,0,0,0.06)` | Card borders, swatch outlines (observed in HTML) |
| `color.border.muted` | `#EBEBEF` | 1px section separators in dense layouts (welcome emails) — heavier than `subtle` for visibility at small sizes |
| `color.border.divider` | `color.core.violet` | Structural section dividers |
| `color.accent.cta` | `color.core.fuchsia` | Primary CTAs, accent bars, hero stat highlights |
| `color.accent.label` | `color.core.violet` | Section number labels, uppercase eyebrow labels |

### Typography

**Family**
- `font.family.primary`: `"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif`
- `font.family.mono`: `"SF Mono", "Fira Code", monospace` (used only for hex codes, file paths, code in guidelines)

**Weights**
- `font.weight.regular`: 400
- `font.weight.bold`: 700
- `font.weight.black`: 900

**Scale** (sizes as observed in AIDE_Brand_Guidelines.html)

| Token | Size | Weight | Line height | Letter spacing | Use |
|---|---|---|---|---|---|
| `text.display` | 36–48px | 900 | 1.1 | -0.5px | Hero headings, cover titles, report titles |
| `text.heading` | 22–28px | 900 | 1.2 | -0.3px | Section headings, card titles |
| `text.subheading` | 16–18px | 700 | 1.4 | 0 | Sub-section titles, table headers |
| `text.body` | 14–16px | 400 | 1.6–1.7 | 0 | Paragraphs, descriptions |
| `text.caption` | 11–13px | 400 | 1.5 | 0 | Source lines, captions, metadata (Mid Gray) |
| `text.label` | 11–14px | 700 | 1.2 | 1–2px, uppercase | Eyebrow labels, section nums, table headers (Violet) |
| `text.mono` | 11–12px | 400 | 1.4 | 0 | Hex codes, file paths |

### Spacing

Derived from the 4px-base scale visible in the HTML guidelines (margins of 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 80, 100).

| Token | px |
|---|---|
| `space.0` | 0 |
| `space.1` | 4 |
| `space.2` | 8 |
| `space.3` | 12 |
| `space.4` | 16 |
| `space.5` | 20 |
| `space.6` | 24 |
| `space.8` | 32 |
| `space.10` | 40 |
| `space.12` | 48 |
| `space.16` | 60 |
| `space.20` | 80 |
| `space.24` | 100 |

### Radius

Observed values: 4, 6, 8, 10, 12. Standardized:

| Token | px | Use |
|---|---|---|
| `radius.sm` | 4 | Inline code, small chips |
| `radius.md` | 6 | Color swatches |
| `radius.lg` | 8 | Usage example rows, divider bars |
| `radius.xl` | 10 | Code blocks, preview cards |
| `radius.2xl` | 12 | Cards, panels, callouts |

### Shadow

The live brand explicitly uses **no shadows** on the logo (per rules: "Don't add drop shadows, outlines, glows, or effects"). The guidelines doc itself contains no box-shadows. Therefore no shadow tokens — components should rely on borders and color contrast for elevation.

### Motion

No motion values documented in any source. The HTML contains a single 0.2s color transition on TOC link hover. Out of scope for v1; do not invent motion tokens yet.

---

## Logo system (token-adjacent)

Not strictly design tokens, but referenced by components and worth listing alongside.

**These are the same files distributed in the AIDE media kit.** The local `~/aide/branding/logos/` directory and the externally-shared media-kit logos are one and the same — don't fork them, don't regenerate, don't create "design-system variants." When the design system needs a logo, pull from these paths.

| Asset | File | Use |
|---|---|---|
| Horizontal logo (color) | `logos/png/aide-logo-horizontal.png` | Primary on light bg |
| Horizontal logo (mono white) | `logos/png/aide-logo-mono-white.png` | On `color.bg.inverse` only |
| A mark | `icons/favicon.png` | Favicon, app icon, small-format |
| Sub-brand logos | `logos/png/sub-brands/aide-{index,insights,rankings,awards,education,talent}-logo.png` | One per sub-brand |

**Clear space:** 1 × A-mark height on all sides.
**Minimum size:** Horizontal logo 120px digital / 30mm print. A mark 24px / 8mm.

Note: The brand-guidelines HTML and asset manifest reference `aide-logo-white.png`, but the actual filename on disk is `aide-logo-mono-white.png`. Both names refer to the same media-kit asset. When Prompt 5 backports to CLAUDE.md and the skill, reconcile the filename to match what's on disk.

---

## What is intentionally NOT in v1

Documented so the next step doesn't re-debate these:

- **Pill / tag component.** Confirmed dropped 2026-05-22. The skill defined `TEAL_LT` / `PURP_LT` pills but no shipped asset uses them. If methodology graphics later need them, commission a real spec (bg, text color, padding, radius, font) and add as a v1.1 extension — do not silently re-introduce the skill's values.
- **Type scale density variants.** Confirmed locked 2026-05-22. The ranges documented in this file are guidance; `tokens.json` exposes a single default per scale step (e.g., `text.body` = 15px, not min/max pair). Add `text.body.compact` / `text.body.comfortable` etc. only if a real product surface needs them.
- **Component sizing tokens** (button height, input padding, etc.). Defer to component-inventory pass (Prompt 3).
- **Dark mode** as a distinct theme. The brand already has dark surfaces (`bg.inverse` = navy) used inline; a full dark-theme alias map is not warranted yet.
- **Iconography system.** No icon family documented in any source. Out of scope.

---

## Next step

This file is the input for `tokens.json` (W3C Design Tokens format) — see Prompt 2 in the design-system plan. After tokens.json lands and the claude.ai/design build is stable, back-port the canonical values into the `aide-brand` skill so its guidance stops drifting.
