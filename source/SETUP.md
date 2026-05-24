# Claude.ai Project Setup — AIDE Design System

Drag these four files into a Claude.ai Project to give Claude full knowledge of the AIDE brand. After setup, every prompt in that project will produce on-brand graphics, decks, and documents without you having to repeat instructions.

**One-time setup: ~5 minutes.**

---

## Step 1 — Create the project

1. Go to **claude.ai**
2. Click **Projects** in the left sidebar → **Create Project**
3. Name it: **AIDE Design System**
4. Description (optional): *On-brand AIDE Institute graphics, decks, and reports*

## Step 2 — Upload all four files

Click **Add content** in the project, then upload all four files from this folder:

| File | What Claude uses it for |
|---|---|
| `tokens.json` | Every color, font, spacing, and radius value |
| `design-tokens.md` | Reasoning behind every value (resolves ambiguity) |
| `component-inventory.md` | What components exist (data cards, charts, etc.) |
| `gallery.html` | Reference implementations Claude matches against |

You can select all four and drag them in at once.

## Step 3 — Paste the custom instructions

Click **Set custom instructions** (or **Edit project settings → Custom instructions**) and paste the text below **exactly**:

```
You are generating AIDE Institute brand assets. Always:

- Reference tokens.json for every color, font, spacing, and radius value. Never invent hex codes or substitute approximations.
- Match the visual patterns in gallery.html. When asked for a "data card," "quote card," "chart," "pillar scorecard," "ranking list," "sub-brand promo," "report cover," or "sector card," use the matching component from gallery.html as the reference implementation.
- Output self-contained HTML/CSS by default. Never produce .pptx, PIL/Python image scripts, or hardcoded hex values. If the user asks for a PNG/PDF, produce the HTML first and explain how to export from Chrome (right-click element → Capture node screenshot for PNG, or Print → Save as PDF).
- Specify exact dimensions in the HTML (e.g., width: 1200px; height: 628px). Common sizes: LinkedIn data card 1200x628, square data card 1200x1200, slide 1920x1080, banner 1584x396, email header 600x150, report cover 1200x1500.
- Use Camera Plain Variable as the primary typeface with the documented fallback stack: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif.
- Enforce the pillar / sub-brand color rule: pillar colors (Literacy green, Advocacy violet, Orientation fuchsia, Implementation amber) are reserved for AIDE Index scoring content only. Sub-brand colors (Index magenta, Insights mint, Rankings orange, Awards purple, Education pink, Talent teal) are reserved for that sub-brand's assets only. Never mix the two systems.
- When color or component choice is ambiguous, ask before assuming. Don't drift from the design system to be "creative."
- The tagline is "Tracking the AI that counts." Do not paraphrase it.
```

## Step 4 — Test it

Open a new conversation in the project and try this prompt:

> Create an AIDE LinkedIn data card (1200×628 HTML) showing this finding:
> - Stat: 42%
> - Statement: of healthcare execs lack measurable AI literacy
> - Context: Measured across earnings calls, Q1 2026
> - Source: AIDE Index Q1 2026, n=200 healthcare leaders
> - Header eyebrow: AIDE Index · Healthcare
>
> Match gallery component #01 (hero stat card).

You should get a complete HTML file that renders identically in style to the existing gallery. If it does, you're done — every future prompt in this project will be on-brand.

---

## Troubleshooting

**Claude is producing hex codes that aren't in tokens.json.**
The project may not be reading the attached files. Open the project settings and confirm all four files are listed under content. If they are, restart the conversation.

**Claude is asking what colors to use.**
The custom instructions weren't pasted, or the files weren't attached. Re-check Step 3.

**The output looks generic, not like AIDE.**
Reference `gallery.html` explicitly in the prompt: *"Match gallery component #04 (pull quote card)."* The component number forces Claude to mirror the exact pattern.

**I want to update the design system.**
Edit the source files in the Drive folder (`AIDE Institute / Brand / Brand Guidelines / Design System`), then re-upload the changed files into the project. Files in projects don't auto-sync.

---

## Day-to-day usage

After setup, see `06-HOW-TO-PROMPT.md` (one folder up from here) for the full prompt-template library. Every component type has a copy-paste starter — fill in your content and go.
