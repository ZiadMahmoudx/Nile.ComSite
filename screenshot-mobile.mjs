import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'screenshots');

const pages = [
  { name: 'mobile-home', url: 'http://localhost:3000/' },
  { name: 'mobile-about', url: 'http://localhost:3000/about' },
  { name: 'mobile-services', url: 'http://localhost:3000/services' },
  { name: 'mobile-solutions', url: 'http://localhost:3000/solutions' },
  { name: 'mobile-contact', url: 'http://localhost:3000/contact' },
  { name: 'mobile-team', url: 'http://localhost:3000/team' },
  { name: 'mobile-careers', url: 'http://localhost:3000/careers' },
  { name: 'mobile-partners', url: 'http://localhost:3000/partners' },
  { name: 'mobile-case-studies', url: 'http://localhost:3000/case-studies' },
  { name: 'mobile-faq', url: 'http://localhost:3000/faq' },
  { name: 'mobile-news', url: 'http://localhost:3000/news' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  for (const pg of pages) {
    const page = await browser.newPage();
    // iPhone 14 Pro viewport
    await page.setViewport({ width: 393, height: 852, isMobile: true, deviceScaleFactor: 2 });
    try {
      await page.goto(pg.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Scroll to trigger animations
      for (let i = 0; i < 15; i++) {
        await page.evaluate(() => window.scrollBy(0, 400));
        await new Promise(r => setTimeout(r, 200));
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(outDir, `${pg.name}.png`), fullPage: true });
      console.log(`OK ${pg.name}`);
    } catch (e) {
      console.error(`FAIL ${pg.name}: ${e.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log('Done!');
})();
