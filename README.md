> **Moved (Nov 10, 2026):** this app is now the Check-In mode of **Vehicle Scan**, repo littlecountrycars/lcc-vehicle-scan, live at https://littlecountrycars.github.io/lcc-vehicle-scan/. This repository is archived; its page only redirects. Make all changes in lcc-vehicle-scan.

# LCC Check-In Scan

Internal tool for Little Country Cars recon. Reads trucks through the Veepeak Bluetooth OBD2 scanner on an Android phone (Chrome 138+), checks battery, idle/misfires and a recorded test drive, builds the Day-1 estimate, and posts it all to the Inventory Recon board in monday.com.

- Read-only: it never clears codes.
- No keys or customer data live here. Each user's monday.com token is stored only on their own phone.
- Files: `index.html` (screens), `app.js` (screens + monday.com), `obd.js` (scanner engine), `sw.js` (offline), `manifest.webmanifest` (home-screen install).
