#!/usr/bin/env python3.11
"""Build the single-page church-facing Wroot Labs product catalog (AC2026 print).
Generates per-product QR SVGs + catalog.html, matching conference-print/print.css.
Prices reflect the 2026-06-16 portfolio re-cut. Render to PDF with Chrome headless."""
import segno, html, pathlib

HERE = pathlib.Path(__file__).parent

# (slug, name, who-it's-for, one-liner, price, url)
PRODUCTS = [
    ("lampstand", "Lampstand", "Pastors & comms",
     "An editorial audit of your church website, delivered as a designed PDF.",
     "$49 / $149", "https://lampstand.review"),
    ("echo", "Echo", "Small & mid churches",
     "Sunday's sermon becomes a week of social posts — one Monday approval.",
     "from $90 / yr", "https://echochurch.app"),
    ("fairshare", "FairShare", "Methodist churches",
     "Plan your apportionment and defend the number at finance committee.",
     "$24 / yr", "https://www.fairshare.church"),
    ("chapel", "Chapel", "Small parishes",
     "Bulletins, services, contacts, and the rota for small parishes.",
     "Free under 50 · $90 / yr", "https://chapelapp.com"),
    ("bookthechurch", "Book the Church", "Churches that rent space",
     "Booking for parishes that hire out the hall, sanctuary, or hall space.",
     "$90 / yr", "https://www.bookthechurch.com"),
    ("nave", "nave.build", "Parishes",
     "Quiet, careful church websites — built in a week.",
     "$99 build · $10 / mo", "https://nave.build"),
    ("cupboard", "Cupboard", "Food pantries",
     "Intake, household tracking, and monthly reports for small feeding ministries.",
     "$99 one-time", "https://cupboard.cc"),
]

INK = "#1A2128"

def make_qr(slug, url):
    out = HERE / f"qr-cat-{slug}.svg"
    segno.make(url, error="m").save(str(out), kind="svg", scale=8,
                                    dark=INK, light=None, border=0)
    return out.name

for slug, *_rest, url in [(p[0], p[5]) for p in PRODUCTS]:
    make_qr(slug, url)
make_qr("wrootlabs", "https://wrootlabs.com")

def card(slug, name, who, desc, price, url):
    qr = f"qr-cat-{slug}.svg"
    domain = url.replace("https://", "").replace("http://", "").replace("www.", "")
    return f"""    <div class="pcard">
      <div class="ptext">
        <p class="pwho">{html.escape(who)}</p>
        <p class="pname">{html.escape(name)}</p>
        <p class="pdesc">{html.escape(desc)}</p>
        <p class="pprice">{html.escape(price)}</p>
        <p class="pdomain">{html.escape(domain)}</p>
      </div>
      <div class="pqr">
        <img src="{qr}" alt="Scan to open {html.escape(name)}">
        <p class="scan">Scan</p>
      </div>
    </div>"""

cards = "\n".join(card(*p) for p in PRODUCTS)

overview = """    <div class="pcard overview">
      <div class="ptext">
        <p class="pwho">All of it, in one place</p>
        <p class="pname">Wroot Labs</p>
        <p class="pdesc">Small, quiet software for the work of ministry — made by someone who has had to use it on a Sunday morning.</p>
        <p class="pdomain">wrootlabs.com</p>
      </div>
      <div class="pqr">
        <img src="qr-cat-wrootlabs.svg" alt="Scan for wrootlabs.com">
        <p class="scan">Scan</p>
      </div>
    </div>"""

doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Wroot Labs — Software for the local church</title>
<link rel="stylesheet" href="print.css">
<style>
  .cgrid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8pt;
    margin-top: 9pt;
  }}
  .pcard {{
    background: var(--ivory);
    border: 1px solid var(--slate-200);
    border-left: 3px solid var(--reed);
    border-radius: 6px;
    padding: 8pt 11pt;
    display: flex;
    gap: 9pt;
    align-items: flex-start;
    page-break-inside: avoid;
    min-height: 1.18in;
  }}
  .pcard.overview {{ border-left-color: var(--fen); background: var(--bg-sunken, #EFEAE0); }}
  .ptext {{ flex: 1; }}
  .pwho {{
    font-family: var(--sans); font-size: 7.5pt; font-weight: 600;
    letter-spacing: 1.1px; text-transform: uppercase;
    color: var(--reed-deep); margin: 0 0 3pt;
  }}
  .pname {{
    font-family: var(--serif); font-size: 15pt; font-weight: 500;
    color: var(--fen); margin: 0 0 3pt; line-height: 1.05;
  }}
  .pdesc {{ font-size: 9pt; line-height: 1.35; color: var(--ink); margin: 0 0 5pt; max-width: none; }}
  .pprice {{
    font-family: var(--serif); font-size: 13pt; font-weight: 500;
    color: var(--reed-deep); margin: 0 0 2pt;
  }}
  .pdomain {{
    font-family: var(--sans); font-size: 8.5pt; letter-spacing: 0.3px;
    color: var(--slate-600); margin: 0;
  }}
  .pqr {{ text-align: center; flex: 0 0 auto; }}
  .pqr img {{ display: block; width: 0.85in; height: 0.85in; }}
  .pqr .scan {{
    font-family: var(--sans); font-size: 7pt; letter-spacing: 1.2px;
    text-transform: uppercase; color: var(--slate-600); margin: 3pt 0 0;
  }}
  .page {{ padding: 0.45in 0.55in; min-height: 0; }}
  h1 {{ font-size: 24pt; margin-bottom: 6pt; }}
  .lede {{ margin-bottom: 8pt; }}
  .signoff {{
    margin-top: 10pt; padding-top: 8pt; border-top: 1px solid var(--slate-200);
    font-size: 9pt; color: var(--slate-600);
  }}
  .signoff em {{ font-family: var(--serif); color: var(--fen-mist); }}
</style>
</head>
<body>
<section class="page">
  <p class="eyebrow">Wroot Labs · Río Texas Annual Conference 2026</p>
  <h1>Software for the <em>local church</em>.</h1>
  <p class="lede">Small, quiet tools for the work of ministry. Scan any code to open it — no sign-up to look.</p>

  <div class="cgrid">
{cards}
{overview}
  </div>

  <p class="signoff">
    Built by <em>Wilson Pruitt</em>, pastor, Covenant UMC Austin. Not affiliated with or endorsed by any annual conference.
    Prices shown are current as of June 2026.
  </p>
</section>
</body>
</html>"""

(HERE / "catalog.html").write_text(doc, encoding="utf-8")
print("wrote catalog.html +", len(PRODUCTS) + 1, "QR svgs")
