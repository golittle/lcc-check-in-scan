# LCC Check-In Scan — notes for Claude

Owner: Dylan (recon). Sign-off on process changes: Jonathan.

## What this is
A web app installed on Dylan's Android phone (Chrome 138+). It talks to a Veepeak Bluetooth OBD2 adapter (ELM327) and posts results to monday.com. Live at https://littlecountrycars.github.io/lcc-check-in-scan/ (repo: littlecountrycars/lcc-check-in-scan; moved from golittle on Nov 9, 2026) via GitHub Pages from `main` (root). Pushing to `main` publishes; phones pick up the new version next open.

## Files
- `obd.js` — scanner engine: transports (Web Serial classic BT, Web Bluetooth LE, demo truck), ELM327 commands, code parsing, idle/misfire, cranking test, freeze frame, Ford module codes (UDS 0x19), test-drive analysis, fix/parts/cost table (`FIXES`), parts links (`SHOPS`).
- `app.js` — screens, estimate builder, monday.com GraphQL calls.
- `index.html` — layout and styles. `sw.js` — offline cache (bump `CACHE` version when files change). `manifest.webmanifest` — home-screen install.

## monday.com
- Board: Inventory Recon (new) `18410463373`; subitems board `18410479838`.
- Columns: Stock # `text_mm2txesd`, Stage `color_mm2tny8k`, Location `color_mm2yxmdw`, Day-1 Estimate `numeric_mm8x1pk1`.
- Subitem columns: Status `color_mm2t1egg`, Notes `long_text_mm2t42xe`, Parts Needed `text_mm2tdxxp`.
- Stock # = last 6 of VIN. Over $1,000 notifies Jonathan (user `101601751`).
- Each user's API token is stored only on their phone (localStorage). Never commit tokens.

## Rules
- Read-only scanner: never send mode 04 (clear codes).
- Use the LCC Brand Kit (lcc-brand skill): Country Orange #FF8C00, black, white, #666666 small print; status green #2E7D32 / red #C62828 only for state. Fjalla One headings, Arial body. Rounded corners. Nebraska orange icon as favicon/app icon. Plain, specific wording.
- Parts: AutoZone Pro (button copies the VIN for Pro's VIN lookup), Advance, NAPA, Amazon.
- Process lives in the SOP "Recon Intake And The Day-1 Estimate" (Recon & Lot folder). Keep the app and SOP in step.
- Test with the demo truck before pushing; nothing posts to monday from the demo.
