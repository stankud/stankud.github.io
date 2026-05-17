Take screenshots of the portfolio site using Playwright.

If $ARGUMENTS contains "local", run: `LOCAL=1 node scripts/screenshot.js` (targets http://localhost:8000).
Otherwise run: `node scripts/screenshot.js` (targets the live site https://stankudrow.com).

After running, read and display all saved screenshots from `scripts/screenshots/`: desktop-full.png, desktop-hero.png, and mobile-full.png.
