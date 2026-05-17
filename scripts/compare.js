const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });

  // Desktop
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const dp = await desktop.newPage();
  await dp.goto('http://localhost:8000', { waitUntil: 'networkidle' });
  await dp.screenshot({
    path: 'scripts/screenshots/local-desktop.png',
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  await dp.evaluate(() => document.getElementById('projects').scrollIntoView({ block: 'start' }));
  await dp.waitForTimeout(300);
  await dp.screenshot({
    path: 'scripts/screenshots/local-desktop-projects.png',
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });

  // Mobile
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
  });
  const mp = await mobile.newPage();
  await mp.goto('http://localhost:8000', { waitUntil: 'networkidle' });
  await mp.screenshot({
    path: 'scripts/screenshots/local-mobile.png',
    fullPage: true,
  });

  await browser.close();
  console.log('Done.');
})();
