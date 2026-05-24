# AIDE Branding — Project Rules

These rules apply to ALL work in this directory. No exceptions.

## DO NOT TOUCH

- `logos/png/` — All logo PNGs are final. Never modify, rename, regenerate, or "improve" them.
- `icons/favicon.png` — The geometric "A" mark is final.
- `logos/png/sub-brands/` — All 6 sub-brand lockups are final.
- `archive/` — Old assets. Ignore completely.

## APPROVED COLOR PALETTE

You may ONLY use these colors. Do not invent, adjust, lighten, darken, or "suggest" new ones.

### Core
| Role | Hex |
|---|---|
| Dark Navy (primary bg, wordmark) | #1B2541 |
| Blue (logo "Institute" text, light accent) | #3B82F6 |
| Institute Violet (dividers, labels, URLs) | #7C3AED |
| Fuchsia (CTA buttons, data highlights, accents) | #E600FF |
| White | #FFFFFF |
| Dark Gray (body text on light bg) | #1A1A1A |
| Mid Gray (secondary text) | #777777 |
| Light Gray (subtle bg) | #F8F9FB |

### Sub-Brand Accents (use ONLY for that sub-brand's assets)
| Sub-Brand | Hex |
|---|---|
| AIDE Index (Magenta) | #E600FF |
| AIDE Insights (Mint) | #5CFFC8 |
| AIDE Rankings (Orange) | #FF7A00 |
| AIDE Awards (Purple) | #7B2FFF |
| AIDE Education (Pink) | #FF47C2 |
| AIDE Talent (Teal) | #00E5A0 |

### Methodology Pillar Colors (use ONLY for index scoring content)
| Pillar | Hex |
|---|---|
| Literacy (Green) | #4ADE80 |
| Advocacy (Violet) | #A78BFA |
| Orientation (Magenta) | #D946EF |
| Implementation (Gold) | #FBBF24 |

**Sub-brand colors and pillar colors are two separate systems. Never mix them.**

## BEHAVIORAL RULES

1. **No scope creep.** Do exactly what was asked. Do not add features, refactor surrounding code, add CLI flags, or create utilities.
2. **No invented assets.** Do not create files unless explicitly requested. If it's not in the ask, don't make it.
3. **No logo work.** The logos are done. No SVGs, no "variants," no redesigns.
4. **No color changes.** If a color isn't in the palette above, you cannot use it.
5. **No renaming.** File names and directory structure are established. Don't reorganize.
6. **Check before writing.** Before creating or modifying any file, verify what already exists on disk. Don't overwrite good work with assumptions.
7. **Typography.** Primary: Camera Plain Variable. Fallback: ui-sans-serif, system-ui, sans-serif. No other fonts.
8. **Tagline.** "Tracking the AI that counts." Do not change this.

## KEY FILES

- `ASSET_MANIFEST.md` — Master inventory of all brand assets
- `AIDE_Brand_Guidelines.html` — Visual brand guide
- `generate_assets.py` — Regenerates social/email/OG assets from the geometric A mark
- Run: `python3 generate_assets.py`
