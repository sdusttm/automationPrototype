const puppeteer = require('puppeteer');
const helper = require('./helper.js');

module.exports.login = async (page) => {

  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('https://signupppe.microsoft.com/login.builtin');
  await page.waitForNavigation();
  await page.type('#i0116', 'menti@microsoft.com', { delay: 10 });
  await page.click('#idSIButton9');
  
  await page.waitForSelector('.normalText');
  await page.click('.normalText');

  await page.waitForSelector('#passwordInput');
  await page.type('#passwordInput', 'Tm01123581321', { delay: 10 });
  await page.click('#submitButton');

  helper.sleep(3);

  return page;
};


function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }