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
    
    await page.goto('https://signupppe.microsoft.com/version');
    await page.waitForNavigation();
  
    var text = await page.evaluate(() => document.querySelector('pre').textContent);
    var info = JSON.parse(text);
    console.log('Environment: ' + info.EnvironmentName);
    console.log('BuildId: ' + info.BuildId);
    console.log('DeploymentId: ' + info.DeploymentId);    
    browser.close();
  };

  module.exports.run();