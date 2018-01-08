const puppeteer = require('puppeteer');
const login = require('./login.js');
const helper = require('./helper.js');

module.exports.run = async () => {
    const browser = await puppeteer.launch({
      headless: false
    });

    var page = await browser.newPage();
  
    await page.setViewport({ width: 1920, height: 1080 });
  
    page = await login.login(page);
    
    await page.goto('https://signupppe.microsoft.com/Signup?OfferId=B07A1127-DE83-4a6d-9F85-2C104BDAE8B4&dl=ENTERPRISEPACK&culture=en-US&country=US&ali=1#0');
    await page.waitForNavigation();
  
    await page.waitForSelector('#StepsData_SelectedRegion');
    await page.type('#FirstName', 'Meng', { delay: 10 });
    await page.type('#LastName', 'Tian', { delay: 10 });
    await page.type('#StepsData_EmailAddress', 'sdusttm@gmail.com', { delay: 10 });
    await page.type('#StepsData_OrganizationName', 'MSTEST', { delay: 10 });
    await page.type('#PhoneNumber', '2022222222', { delay: 10 });
    await page.select('#StepsData_SelectedRegion', 'US');
    await page.select('#StepsData_OrgSize', '2-4');
    await page.click('#MultiPageLayout_Next');

    await page.waitForSelector('#StepsData_UserId');
    await page.type('#StepsData_UserId', helper.generateRandom(10), { delay: 10 });
    await page.type('#StepsData_DomainName', helper.generateRandom(10), { delay: 10 });
    await page.focus('#Password');
    await page.waitForSelector('#DomainAvailable', { visible : true });
    await page.type('#Password', 'Tm0112358', { delay: 10 });
    await page.type('#RePassword', 'Tm0112358', { delay: 10 });
    await page.click('#MultiPageLayout_Next');
  
    await page.waitForSelector('#MultiPageLayout_Next', { visible : true, timeout : 60000 });
    await page.click('#MultiPageLayout_Next');
  
    await page.screenshot({
        path: 'adminE2E.png',
        fullPage: false
      });
  
    // browser.close();
  };

  module.exports.run();