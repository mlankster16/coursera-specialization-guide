"""Render the guidance site's line icons to transparent PNGs for the .docx.

No SVG rasteriser is available, but the four icons needed use only straight-line
path commands plus circles, so they can be drawn exactly with PIL. Anything with
bezier curves is deliberately out of scope.
"""
import re
import sys
from PIL import Image, ImageDraw

SS = 12          # supersample factor, downsampled at the end for antialiasing
VIEWBOX = 24.0
STROKE = 1.7     # matches the site's stroke-width

# Same path data as the ICONS map in app.js
ICONS = {
    "certificate": [
        ("path", "M5 3h9l5 5v13H5V3Z"),
        ("path", "M14 3v5h5"),
        ("circle", (12, 13, 2.4)),
        ("path", "M10.4 15.2 9.9 19l2.1-1.1 2.1 1.1-.5-3.8"),
    ],
    "layers": [
        ("path", "M12 3 3 7.5l9 4.5 9-4.5L12 3Z"),
        ("path", "M3 12.4 12 17l9-4.6"),
        ("path", "M3 16.9 12 21.5l9-4.6"),
    ],
    "list": [
        ("path", "M9.5 6.5h10"),
        ("path", "M9.5 12h10"),
        ("path", "M9.5 17.5h10"),
        ("circle", (5, 6.5, 1.3)),
        ("circle", (5, 12, 1.3)),
        ("circle", (5, 17.5, 1.3)),
    ],
    "play": [
        ("circle", (12, 12, 8.5)),
        ("path", "M10.2 8.4 16 12l-5.8 3.6V8.4Z"),
    ],
}

TOKEN = re.compile(r"[MmLlHhVvZz]|-?\d*\.?\d+")


def parse_path(d):
    """Return a list of point-lists. Supports M/m, L/l, H/h, V/v, Z/z only."""
    toks = TOKEN.findall(d)
    subpaths, cur = [], []
    x = y = 0.0
    start = None
    cmd = None
    i = 0
    while i < len(toks):
        t = toks[i]
        if t in "MmLlHhVvZz":
            cmd = t
            i += 1
            if cmd in "Zz":
                if cur:
                    if start:
                        cur.append(start)      # close the subpath
                    subpaths.append(cur)
                    cur = []
                x, y = start if start else (x, y)
            continue

        # Numeric argument — apply the current (or implied) command
        if cmd in "Mm":
            nx, ny = float(toks[i]), float(toks[i + 1]); i += 2
            if cmd == "m":
                nx, ny = x + nx, y + ny
            if cur:
                subpaths.append(cur)
            x, y = nx, ny
            start = (x, y)
            cur = [(x, y)]
            cmd = "L" if cmd == "M" else "l"   # further numbers are implicit linetos
        elif cmd in "Ll":
            nx, ny = float(toks[i]), float(toks[i + 1]); i += 2
            x, y = (x + nx, y + ny) if cmd == "l" else (nx, ny)
            cur.append((x, y))
        elif cmd in "Hh":
            nx = float(toks[i]); i += 1
            x = x + nx if cmd == "h" else nx
            cur.append((x, y))
        elif cmd in "Vv":
            ny = float(toks[i]); i += 1
            y = y + ny if cmd == "v" else ny
            cur.append((x, y))
        else:
            raise ValueError(f"unsupported command {cmd!r} in {d!r}")
    if cur:
        subpaths.append(cur)
    return subpaths


def render(name, size, colour=(255, 255, 255, 255)):
    px = size * SS
    scale = px / VIEWBOX
    img = Image.new("RGBA", (px, px), (0, 0, 0, 0))
    dr = ImageDraw.Draw(img)
    w = max(1, int(round(STROKE * scale)))

    for kind, data in ICONS[name]:
        if kind == "circle":
            cx, cy, r = data
            box = [(cx - r) * scale, (cy - r) * scale, (cx + r) * scale, (cy + r) * scale]
            dr.ellipse(box, outline=colour, width=w)
        else:
            for pts in parse_path(data):
                sp = [(p[0] * scale, p[1] * scale) for p in pts]
                dr.line(sp, fill=colour, width=w, joint="curve")
                # round the caps/joins the way the SVG does
                for p in sp:
                    dr.ellipse([p[0] - w / 2, p[1] - w / 2, p[0] + w / 2, p[1] + w / 2], fill=colour)

    return img.resize((size, size), Image.LANCZOS)


if __name__ == "__main__":
    outdir = sys.argv[1]
    for n in ICONS:
        im = render(n, 96)
        im.save(f"{outdir}/icon-{n}.png")
        print(f"icon-{n}.png  {im.size}  alpha bbox={im.getchannel('A').getbbox()}")
