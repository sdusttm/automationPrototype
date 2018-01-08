const puppeteer = require('puppeteer');

module.exports.run = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 800, height: 600 });

  // Open page.
  await page.goto('https://signup.microsoft.com/productkeystart');
  
  // await page.waitForSelector('#MultiPageLayout_Next');

  // Show search form.
  await page.click('#MultiPageLayout_Next');

  await page.waitForNavigation();

  const result = await page.evaluate(() => {
    return location.href.includes('https://signup.microsoft.com/signup?offerid=8339cc50-d965-4ad5-bb94-749021a5ebf9&origin=productkey');
  });

  console.log('result:', result);

  await page.screenshot({
    path: 'prepaid.png',
    fullPage: false
  });

  // Keep the browser open.
  browser.close();
};