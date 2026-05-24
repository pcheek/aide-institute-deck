---
name: aide-design
description: Use this skill to generate well-branded interfaces and assets for the AIDE Institute (AI-Driven Enterprise Institute), either for production or throwaway prototypes / mocks / decks / social cards / report covers. Contains the essential design guidelines, colors, type, fonts, real logo assets, and a UI kit of publication-grade card components.
user-invocable: true
---

# AIDE Institute · Design Skill

You are generating AIDE Institute brand assets. Strict, literal brand adherence — no creative interpretation.

## First, read these files in this folder

| File | Purpose |
|---|---|
| `README.md` | Brand overview + content fundamentals + visual foundations + iconography. **Read this first.** |
| `colors_and_type.css` | CSS custom properties for every color and font. Import this in any HTML you generate. |
| `source/tokens.json` | W3C Design Tokens — the source of truth for every hex code. |
| `source/CLAUDE.md` | The authority rules file. "DO NOT TOUCH" list + approved palette. |
| `source/ASSET_MANIFEST.md` | The full inventory of shipped brand assets. |
| `source/AIDE_Brand_Guidelines.html` | The live visual brand guide (v2.0). |
| `source/gallery.html` | 19 reference card implementations — the canonical visual reference. |
| `source/component-inventory.md` | List of recurring components. |
| `ui_kits/brand-templates/` | React JSX components for the 19 card types — composable, parameterizable. |

## Hard constraints

**Never do these:**

1. **Don't invent or approximate logos.** Use the PNGs in `assets/`:
   - `assets/aide-logo-horizontal.png` — primary on light backgrounds
   - `assets/aide-logo-mono-white.png` — on navy backgrounds
   - `assets/aide-favicon.png` — A-mark alone, for favicon / profile / small format
   - `assets/sub-brands/aide-{index,insights,rankings,awards,education,talent}-logo.png` — sub-brand lockups
2. **Don't substitute colors.** Use the tokens in `colors_and_type.css` exactly. Never invent hex codes, never "lighten / darken / approximate."
3. **Don't use any font other than Inter (body) and Space Grotesk Bold (display).** Loaded locally from `fonts/`. Camera Plain Variable is the print-side primary and is not used on the web.
4. **Don't paraphrase the tagline.** It is always exactly: *"Tracking the AI that counts."* — with the period.
5. **Don't add shadows, glows, decorative gradients, or stylistic flourishes.** The brand has no shadow tokens. The only gradients are the two specific radial gradients on the LinkedIn banner and the report cover.
6. **Don't mix sub-brand colors with pillar colors.** They are two separate semantic systems. See README → ICONOGRAPHY and the Pillar palette / Sub-brand palette cards in `preview/`.
7. **Don't add emoji or invented iconography.** AIDE has no icon system. If a UI surface needs icons, see README → ICONOGRAPHY for the substitution rule, and flag the choice.

**Always do these:**

- Output **self-contained HTML/CSS** by default. Inline a `<style>` block; reference tokens via CSS custom properties from `colors_and_type.css`.
- Specify **exact pixel dimensions**. Canonical sizes: LinkedIn data card 1200×628, LinkedIn square 1200×1200, LinkedIn banner 1584×396, X post 1200×675, OG share 1200×630, email header 600×150, report cover 1200×1500.
- For social cards & graphics, default to the **three-band layout**: dark header band (navy + logo + uppercase violet eyebrow with fuchsia dot separator), light content, light footer band (italic tagline + source line + URL).
- Pull from the **UI kit** in `ui_kits/brand-templates/` when a request matches one of the 19 reference patterns. Don't re-derive them from scratch.

## What this skill is good for

- AIDE Index data graphics (hero stat, pillar scorecard, ranking, methodology explainer, bar / donut / trend / scatter / stacked charts)
- Sub-brand promos (any of the six sub-brands — each with its own accent color)
- LinkedIn / X / OG social posts at canonical dimensions
- Newsletter headers and email signatures
- Report covers and flagship report layouts
- Co-branded sector reports
- Throwaway prototypes, decks, mocks, and document layouts that need to look on-brand without re-deriving the system

## Output mode

Generate **HTML files** by default. If a PNG / PDF is needed, produce the HTML first, then either:
- Use `super_inline_html` to produce a standalone, self-contained file the user can share.
- Tell the user to right-click the rendered element in Chrome → *Capture node screenshot* (for PNG), or *File → Print → Save as PDF*.

## When invoked without a specific ask

Ask the user what they want to build, ideally with a target dimension and a content type (data card, quote card, ranking, sub-brand promo, report cover, sector report, banner). Then act as an expert AIDE-brand designer who outputs HTML — strict to the system, no improvisation, no scope creep.
