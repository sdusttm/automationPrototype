const puppeteer = require('puppeteer');
const login = require('./login.js');
const helper = require('./helper.js');

module.exports.run = async () => {
    const browser = await puppeteer.launch({
      headless: false
    });

    var page = await browser.newPage();
  
    await page.setViewport({ width: 1920, height: 1080});
  
    page = await login.login(page);
    
    await page.goto('https://ms.portal.azure.com/#resource/subscriptions/c7af1720-6815-4bd4-85f8-1df653091b74/resourceGroups/ppeprvsignupInstance9/providers/Microsoft.ClassicCompute/domainNames/ppeprvsignupInstance9/overview');
    await page.waitForNavigation();

    await page.waitForSelector('#CertificateAuthentication');
    await page.click('#CertificateAuthentication');
  };

  module.exports.run();