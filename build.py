#!/usr/bin/env python3
"""
Inline slides/slides.css and slides/deck.css into index.html.

Why: deck-stage.js builds thumbnails by cloning each slide into a nested
shadow DOM and snapshotting `document.styleSheets`. When index.html is
opened over file://, browsers block cross-origin access to .cssRules of
linked stylesheets, so the thumbnails render unstyled — collapsing to the
natural image size of the AIDE logo and looking like "one big logo."

Solution: replace the <link rel="stylesheet" href="..."> tags with inline
<style> blocks, which are always same-origin. The CSS source files remain
the canonical edit target — just run `python3 build.py` after any edit.
"""
from pathlib import Path
import re

ROOT = Path(__file__).parent
INDEX = ROOT / "index.html"

LINK_RE = re.compile(
    r'<link rel="stylesheet" href="(slides/[^"]+\.css)">'
)


def inline(match: re.Match) -> str:
    href = match.group(1)
    path = ROOT / href
    css = path.read_text(encoding="utf-8")
    # Strip the local @font-face declarations only if present and the paths
    # would no longer resolve from the embedded location — but here the
    # font URLs are relative to slides/ and we're inlining into index.html
    # at the repo root, so paths need rewriting too.
    if "url(\"fonts/" in css or "url('fonts/" in css:
        css = css.replace('url("fonts/', 'url("slides/fonts/')
        css = css.replace("url('fonts/", "url('slides/fonts/")
    if "url(\"../fonts/" in css or "url('../fonts/" in css:
        css = css.replace('url("../fonts/', 'url("slides/fonts/')
        css = css.replace("url('../fonts/", "url('slides/fonts/")
    if '@import url("../colors_and_type.css")' in css:
        # Resolve relative @import to the actual file content.
        ct = (ROOT / "colors_and_type.css").read_text(encoding="utf-8")
        css = css.replace('@import url("../colors_and_type.css");', ct)
    if '@import url("../ui_kits/brand-templates/brand-templates.css")' in css:
        # The brand-templates CSS itself @imports colors_and_type.css.
        bt = (ROOT / "ui_kits/brand-templates/brand-templates.css").read_text(
            encoding="utf-8"
        )
        ct = (ROOT / "colors_and_type.css").read_text(encoding="utf-8")
        bt = bt.replace('@import url("../../colors_and_type.css");', ct)
        css = css.replace(
            '@import url("../ui_kits/brand-templates/brand-templates.css");', bt
        )
    return f"<style data-source=\"{href}\">\n{css}\n</style>"


html = INDEX.read_text(encoding="utf-8")
new_html, n = LINK_RE.subn(inline, html)
# Idempotency: if the index already has <style data-source=...> blocks,
# replace those instead of leaving stale copies.
new_html = re.sub(
    r'<style data-source="(slides/[^"]+\.css)">.*?</style>',
    lambda m: inline(re.match(r'<link rel="stylesheet" href="(slides/[^"]+\.css)">',
                              f'<link rel="stylesheet" href="{m.group(1)}">')),
    new_html,
    flags=re.DOTALL,
)
INDEX.write_text(new_html, encoding="utf-8")
print(f"Inlined {n if n else 'previously-embedded'} stylesheet(s) into index.html")
