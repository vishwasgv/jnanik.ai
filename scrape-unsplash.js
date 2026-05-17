const puppeteer = require('puppeteer');

const searches = [
  { key: 'home_hero', query: 'industrial robot manufacturing automation' },
  { key: 'about_hero', query: 'engineer technology AI workspace' },
  { key: 'services_hero', query: 'data center server enterprise infrastructure' },
  { key: 'careers_hero', query: 'tech team engineers modern office' },
  { key: 'contact_hero', query: 'business meeting consultation professional' },
  { key: 'use_manufacturing', query: 'smart factory manufacturing floor CNC' },
  { key: 'use_iot', query: 'industrial IoT sensors monitoring' },
  { key: 'use_maintenance', query: 'equipment maintenance industrial machinery' },
  { key: 'use_automation', query: 'workflow automation enterprise digital' },
  { key: 'use_knowledge', query: 'knowledge data analytics intelligence' },
  { key: 'use_ai', query: 'artificial intelligence neural network technology' },
];

async function searchUnsplash(query) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled'],
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  );
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });

  const url = `https://unsplash.com/s/photos/${encodeURIComponent(query)}`;
  console.log(`  GET ${url}`);

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await new Promise(r => setTimeout(r, 3000));

    const ids = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a[href*="/photos/"]'));
      const found = new Set();
      for (const a of anchors) {
        const m = a.href.match(/unsplash\.com\/photos\/([A-Za-z0-9_-]{10,})/);
        if (m) found.add(m[1]);
        if (found.size >= 5) break;
      }
      return [...found];
    });

    await browser.close();
    return ids;
  } catch (e) {
    await browser.close();
    console.error(`  Error: ${e.message}`);
    return [];
  }
}

async function main() {
  const results = {};
  for (const s of searches) {
    console.log(`\nSearching [${s.key}]: ${s.query}`);
    const ids = await searchUnsplash(s.query);
    results[s.key] = ids;
    console.log(`  IDs: ${ids.join(', ') || '(none)'}`);
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log('\n\n=== RESULTS ===');
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);
