const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Use local server if available, otherwise live site
  const url = process.env.LOCAL ? 'http://localhost:8000' : 'https://stankudrow.com';
  console.log(`Navigating to ${url} ...`);
  await page.goto(url, { waitUntil: 'networkidle' });

  // Full page screenshot (desktop)
  await page.screenshot({ 
    path: 'scripts/screenshots/desktop-full.png', 
    fullPage: true 
  });
  console.log('Saved desktop-full.png');

  // Above the fold
  await page.screenshot({ 
    path: 'scripts/screenshots/desktop-hero.png', 
    clip: { x: 0, y: 0, width: 1280, height: 800 } 
  });
  console.log('Saved desktop-hero.png');

  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ 
    path: 'scripts/screenshots/mobile-full.png', 
    fullPage: true 
  });
  console.log('Saved mobile-full.png');

  await browser.close();
  console.log('Done.');
})();