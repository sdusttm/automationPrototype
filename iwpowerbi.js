const puppeteer = require('puppeteer');
const login = require('./login.js');
const helper = require('./helper.js');

module.exports.run = async () => {
    const browser = await puppeteer.launch({
      headless: false
    });

    var page = await browser.newPage();
  
    await page.setViewport({ width: 800, height: 600 });
  
    page = await login.login(page);
    
    await page.goto('https://signupppe.microsoft.com/signup?sku=powerbi&box-skip-email=1');
    await page.waitForNavigation();
    
    await page.type('#StepsData_Email', helper.generateRandom(10) + '@' + helper.generateRandom(10) + '.com', { delay: 10 });
    await page.click('#MultiPageLayout_Next');
  
    await page.waitForSelector('#FirstName');
    await page.type('#FirstName', 'Meng', { delay: 10 });
    await page.type('#LastName', 'Tian', { delay: 10 });
    await page.type('#Password', 'Tm0112358', { delay: 10 });
    await page.type('#RePassword', 'Tm0112358', { delay: 10 });
    await page.type('#SignupCode', '0', { delay: 10 });
    await page.select('#StepsData_SelectedRegion', 'US');
    await page.click('#MultiPageLayout_Next');
  
    await page.waitForSelector('#MultiPageLayout_Additional', { visible : true });
    await page.click('#MultiPageLayout_Additional');
  
    await page.screenshot({
        path: 'iwsignup.png',
        fullPage: false
      });
  
    // browser.close();
  };

  module.exports.run();