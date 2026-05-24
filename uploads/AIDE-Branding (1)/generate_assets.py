#!/usr/bin/env python3
"""Generate all missing AIDE brand assets using the real geometric A mark."""

from PIL import Image, ImageDraw, ImageFont
import os

# ── Brand colors ──
NAVY = (27, 37, 65)        # #1B2541
BLUE = (59, 130, 246)      # #3B82F6 — original logo blue ("Institute" text)
VIOLET = (124, 58, 237)    # #7C3AED — structural accent (section labels, URLs)
WHITE = (255, 255, 255)
LIGHT_GRAY = (248, 249, 251)
MID_GRAY = (119, 119, 119)
BODY_TEXT = (26, 26, 26)      # #1A1A1A
FUCHSIA = (230, 0, 255)    # #E600FF — data highlights, dividers, accent bars

# Output directories
BASE = os.path.dirname(os.path.abspath(__file__))
LOGOS_DIR = os.path.join(BASE, "logos", "png")
ICONS_DIR = os.path.join(BASE, "icons")
SOCIAL_DIR = os.path.join(BASE, "social")
EMAIL_DIR = os.path.join(BASE, "email")

os.makedirs(os.path.join(SOCIAL_DIR, "linkedin"), exist_ok=True)
os.makedirs(os.path.join(SOCIAL_DIR, "x"), exist_ok=True)
os.makedirs(EMAIL_DIR, exist_ok=True)

# ── Load the real geometric A mark ──
favicon_path = os.path.join(ICONS_DIR, "favicon.png")
a_mark = Image.open(favicon_path).convert("RGBA")

# Create a white version of the A mark
def make_white_mark(src):
    """Convert navy pixels to white, preserve transparency."""
    img = src.copy()
    data = img.getdata()
    new_data = []
    for r, g, b, a in data:
        if a > 50:  # visible pixel
            new_data.append((255, 255, 255, a))
        else:
            new_data.append((r, g, b, a))
    img.putdata(new_data)
    return img

white_mark = make_white_mark(a_mark)


def get_font(size, bold=False):
    """Try to load Camera Plain Variable (brand font) or fall back to system fonts."""
    font_paths = [
        "/System/Library/Fonts/SFCamera.ttf",       # Camera Plain Variable (brand primary)
        "/System/Library/Fonts/SFNSText.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/HelveticaNeue.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    if bold:
        bold_paths = [
            "/System/Library/Fonts/SFCamera.ttf",    # Variable font handles bold
            "/System/Library/Fonts/SFNSTextBold.ttf",
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        ]
        font_paths = bold_paths + font_paths

    for fp in font_paths:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size)
            except:
                continue
    return ImageFont.load_default()


def paste_centered(canvas, mark, x, y, size):
    """Resize mark and paste centered at (x, y)."""
    resized = mark.resize((size, size), Image.LANCZOS)
    canvas.paste(resized, (x - size // 2, y - size // 2), resized)


def draw_text_centered(draw, text, x, y, font, fill):
    """Draw text centered at (x, y)."""
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((x - tw // 2, y - th // 2), text, font=font, fill=fill)


def add_accent_bar(draw, width, height, bar_height=4):
    """Add a thin fuchsia accent bar at the bottom."""
    draw.rectangle([(0, height - bar_height), (width, height)], fill=FUCHSIA)


# ══════════════════════════════════════════════════════════════════════
#  1. LINKEDIN PROFILE PIC (400x400)
# ══════════════════════════════════════════════════════════════════════
def gen_linkedin_profile():
    img = Image.new("RGB", (400, 400), NAVY)
    draw = ImageDraw.Draw(img)
    # Paste white A mark centered
    paste_centered(img, white_mark, 200, 185, 200)
    # Blue accent bar at bottom
    add_accent_bar(draw, 400, 400, 6)
    img.save(os.path.join(SOCIAL_DIR, "linkedin", "linkedin-profile-400x400.png"))
    print("  linkedin-profile-400x400.png")


# ══════════════════════════════════════════════════════════════════════
#  2. LINKEDIN BANNER (1584x396)
# ══════════════════════════════════════════════════════════════════════
def gen_linkedin_banner():
    w, h = 1584, 396
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)

    # A mark on the left
    paste_centered(img, white_mark, 180, h // 2 - 10, 160)

    # Text
    font_title = get_font(52, bold=True)
    font_sub = get_font(22)
    font_tag = get_font(16)

    draw.text((310, 100), "AI-Driven Enterprise", font=font_title, fill=WHITE)
    draw.text((310, 165), "Institute", font=font_title, fill=BLUE)
    draw.text((310, 248), "Tracking the AI that counts.", font=font_sub, fill=MID_GRAY)

    # Subtle dot pattern on right side
    import random
    random.seed(42)
    for _ in range(40):
        dx = random.randint(1050, 1520)
        dy = random.randint(60, 336)
        r = random.choice([2, 2, 2, 3])
        opacity = random.choice([30, 45, 60, 80])
        color = (*VIOLET[:3], opacity) if random.random() > 0.7 else (255, 255, 255, opacity)
        # Draw on RGBA overlay
        draw.ellipse([(dx - r, dy - r), (dx + r, dy + r)], fill=(color[0], color[1], color[2]))

    # Blue accent bar at bottom
    add_accent_bar(draw, w, h, 4)

    img.save(os.path.join(SOCIAL_DIR, "linkedin", "linkedin-banner-1584x396.png"))
    print("  linkedin-banner-1584x396.png")


# ══════════════════════════════════════════════════════════════════════
#  3. LINKEDIN POST - DATA CARD (1200x1200)
# ══════════════════════════════════════════════════════════════════════
def gen_linkedin_post_data():
    w, h = 1200, 1200
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)

    # Top section - logo area
    paste_centered(img, white_mark, 100, 90, 80)
    font_brand = get_font(24, bold=True)
    draw.text((155, 60), "AIDE", font=font_brand, fill=WHITE)
    draw.text((155, 90), "Institute", font=get_font(18), fill=BLUE)

    # Main stat area
    font_stat = get_font(120, bold=True)
    font_context = get_font(36, bold=True)
    font_body = get_font(28)

    draw_text_centered(draw, "[STAT]", w // 2, 420, font_stat, FUCHSIA)
    draw_text_centered(draw, "[Headline goes here]", w // 2, 560, font_context, VIOLET)

    # Supporting text
    draw_text_centered(draw, "Source: AIDE Index  |  aideinstitute.com/rankings", w // 2, 1080, get_font(20), MID_GRAY)

    # Divider
    bar_w = 80
    draw.rectangle([(w // 2 - bar_w // 2, 640), (w // 2 + bar_w // 2, 644)], fill=FUCHSIA)

    # Template label
    draw_text_centered(draw, "[ DATA CARD TEMPLATE ]", w // 2, 750, get_font(22), MID_GRAY)

    add_accent_bar(draw, w, h, 6)
    img.save(os.path.join(SOCIAL_DIR, "linkedin", "linkedin-post-data-1200x1200.png"))
    print("  linkedin-post-data-1200x1200.png")


# ══════════════════════════════════════════════════════════════════════
#  4. LINKEDIN POST - QUOTE (1200x628)
# ══════════════════════════════════════════════════════════════════════
def gen_linkedin_post_quote():
    w, h = 1200, 628
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)

    # Logo top left
    paste_centered(img, white_mark, 90, 70, 64)
    font_brand = get_font(20, bold=True)
    draw.text((135, 52), "AIDE Institute", font=font_brand, fill=WHITE)

    # Quote marks
    font_quote = get_font(80, bold=True)
    draw.text((80, 150), "\u201C", font=font_quote, fill=FUCHSIA)

    # Quote text placeholder
    font_body = get_font(32, bold=True)
    draw_text_centered(draw, "[ Quote text goes here ]", w // 2, 280, font_body, WHITE)

    # Attribution
    draw_text_centered(draw, "— AIDE Index Data", w // 2, 400, get_font(22), FUCHSIA)

    # Strapline
    draw_text_centered(draw, "Tracking the AI that counts.  |  aideinstitute.com", w // 2, 560, get_font(18), MID_GRAY)

    add_accent_bar(draw, w, h, 4)
    img.save(os.path.join(SOCIAL_DIR, "linkedin", "linkedin-post-quote-1200x628.png"))
    print("  linkedin-post-quote-1200x628.png")


# ══════════════════════════════════════════════════════════════════════
#  5. X PROFILE (400x400)
# ══════════════════════════════════════════════════════════════════════
def gen_x_profile():
    img = Image.new("RGB", (400, 400), NAVY)
    draw = ImageDraw.Draw(img)
    paste_centered(img, white_mark, 200, 185, 200)
    add_accent_bar(draw, 400, 400, 6)
    img.save(os.path.join(SOCIAL_DIR, "x", "x-profile-400x400.png"))
    print("  x-profile-400x400.png")


# ══════════════════════════════════════════════════════════════════════
#  6. X HEADER (1500x500)
# ══════════════════════════════════════════════════════════════════════
def gen_x_header():
    w, h = 1500, 500
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)

    # Centered layout
    paste_centered(img, white_mark, w // 2, 160, 140)

    font_title = get_font(44, bold=True)
    font_sub = get_font(24)
    font_tag = get_font(18)

    draw_text_centered(draw, "AI-Driven Enterprise Institute", w // 2, 290, font_title, WHITE)

    # Fuchsia divider
    bar_w = 60
    draw.rectangle([(w // 2 - bar_w // 2, 320), (w // 2 + bar_w // 2, 323)], fill=FUCHSIA)

    draw_text_centered(draw, "Tracking the AI that counts.", w // 2, 360, font_sub, MID_GRAY)
    draw_text_centered(draw, "aideinstitute.com", w // 2, 420, font_tag, VIOLET)

    add_accent_bar(draw, w, h, 4)
    img.save(os.path.join(SOCIAL_DIR, "x", "x-header-1500x500.png"))
    print("  x-header-1500x500.png")


# ══════════════════════════════════════════════════════════════════════
#  7. X POST CARD (1200x675)
# ══════════════════════════════════════════════════════════════════════
def gen_x_post_card():
    w, h = 1200, 675
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)

    # Logo top left
    paste_centered(img, white_mark, 80, 60, 56)
    draw.text((120, 42), "AIDE Institute", font=get_font(18, bold=True), fill=WHITE)

    # Main stat
    font_stat = get_font(90, bold=True)
    draw_text_centered(draw, "[STAT]", w // 2, 280, font_stat, FUCHSIA)

    # Context line
    draw_text_centered(draw, "[ Insight headline ]", w // 2, 390, get_font(30, bold=True), VIOLET)

    # Divider
    bar_w = 60
    draw.rectangle([(w // 2 - bar_w // 2, 440), (w // 2 + bar_w // 2, 443)], fill=FUCHSIA)

    # Template label
    draw_text_centered(draw, "[ DATA CARD TEMPLATE ]", w // 2, 490, get_font(20), MID_GRAY)

    # Footer
    draw_text_centered(draw, "aideinstitute.com/rankings  |  #AIDEIndex", w // 2, 610, get_font(16), MID_GRAY)

    add_accent_bar(draw, w, h, 4)
    img.save(os.path.join(SOCIAL_DIR, "x", "x-post-card-1200x675.png"))
    print("  x-post-card-1200x675.png")


# ══════════════════════════════════════════════════════════════════════
#  8. X POST QUOTE (1200x675)
# ══════════════════════════════════════════════════════════════════════
def gen_x_post_quote():
    w, h = 1200, 675
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)

    # Logo top left
    paste_centered(img, white_mark, 80, 60, 56)
    draw.text((120, 42), "AIDE Institute", font=get_font(18, bold=True), fill=WHITE)

    # Quote
    draw.text((80, 160), "\u201C", font=get_font(72, bold=True), fill=FUCHSIA)
    draw_text_centered(draw, "[ Quote text goes here ]", w // 2, 300, get_font(30, bold=True), WHITE)
    draw_text_centered(draw, "— AIDE Index", w // 2, 400, get_font(22), FUCHSIA)

    draw_text_centered(draw, "Tracking the AI that counts.  |  aideinstitute.com", w // 2, 610, get_font(16), MID_GRAY)

    add_accent_bar(draw, w, h, 4)
    img.save(os.path.join(SOCIAL_DIR, "x", "x-post-quote-1200x675.png"))
    print("  x-post-quote-1200x675.png")


# ══════════════════════════════════════════════════════════════════════
#  9. EMAIL HEADER (600x150)
# ══════════════════════════════════════════════════════════════════════
def gen_email_header():
    w, h = 600, 150
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)

    paste_centered(img, white_mark, 80, h // 2 - 5, 70)

    font_title = get_font(26, bold=True)
    font_sub = get_font(12)

    draw.text((130, 40), "AI-Driven Enterprise", font=font_title, fill=WHITE)
    draw.text((130, 72), "Institute", font=font_title, fill=BLUE)
    draw.text((130, 110), "Tracking the AI that counts.", font=font_sub, fill=MID_GRAY)

    add_accent_bar(draw, w, h, 3)
    img.save(os.path.join(EMAIL_DIR, "email-header-600x150.png"))
    print("  email-header-600x150.png")


# ══════════════════════════════════════════════════════════════════════
#  10. EMAIL SIGNATURE (400x100)
# ══════════════════════════════════════════════════════════════════════
def gen_email_signature():
    w, h = 400, 100
    img = Image.new("RGB", (w, h), WHITE)
    draw = ImageDraw.Draw(img)

    # Thin navy line at top
    draw.rectangle([(0, 0), (w, 2)], fill=NAVY)

    paste_centered(img, a_mark, 40, 52, 48)

    font_name = get_font(16, bold=True)
    font_detail = get_font(11)

    draw.text((75, 22), "AI-Driven Enterprise Institute", font=font_name, fill=NAVY)
    draw.text((75, 44), "hello@aideinstitute.com", font=font_detail, fill=MID_GRAY)
    draw.text((75, 60), "aideinstitute.com", font=font_detail, fill=VIOLET)
    draw.text((75, 76), "Tracking the AI that counts.", font=get_font(10), fill=MID_GRAY)

    img.save(os.path.join(EMAIL_DIR, "email-signature-400x100.png"))
    print("  email-signature-400x100.png")


# ══════════════════════════════════════════════════════════════════════
#  11. OG SHARE IMAGE (1200x630)
# ══════════════════════════════════════════════════════════════════════
def gen_og_image():
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)

    paste_centered(img, white_mark, w // 2, 200, 160)

    font_title = get_font(48, bold=True)
    font_sub = get_font(26)

    draw_text_centered(draw, "AI-Driven Enterprise Institute", w // 2, 340, font_title, WHITE)

    bar_w = 60
    draw.rectangle([(w // 2 - bar_w // 2, 375), (w // 2 + bar_w // 2, 378)], fill=FUCHSIA)

    draw_text_centered(draw, "Tracking the AI that counts.", w // 2, 420, font_sub, MID_GRAY)
    draw_text_centered(draw, "aideinstitute.com", w // 2, 480, get_font(20), VIOLET)

    add_accent_bar(draw, w, h, 4)
    img.save(os.path.join(SOCIAL_DIR, "og-share-1200x630.png"))
    print("  og-share-1200x630.png")


# ══════════════════════════════════════════════════════════════════════
#  RUN
# ══════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    print("Generating AIDE brand assets...\n")

    print("Social — LinkedIn:")
    gen_linkedin_profile()
    gen_linkedin_banner()
    gen_linkedin_post_data()
    gen_linkedin_post_quote()

    print("\nSocial — X:")
    gen_x_profile()
    gen_x_header()
    gen_x_post_card()
    gen_x_post_quote()

    print("\nEmail:")
    gen_email_header()
    gen_email_signature()

    print("\nMarketing:")
    gen_og_image()

    print(f"\nDone — 11 assets generated.")
