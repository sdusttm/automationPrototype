const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1440, height: 720 });

  // Open page.
  await page.goto('https://signupppe.microsoft.com/login.builtin');
  await page.waitForNavigation();
  await page.type('#i0116', 'menti@microsoft.com', { delay: 10 });
  await page.click('#idSIButton9');
  
  await page.waitForSelector('.normalText');
  await page.click('.normalText');

  await page.waitForSelector('#passwordInput');
  await page.type('#passwordInput', 'Tm01123581321', { delay: 10 });
  await page.click('#submitButton');

  sleep(3);
  
  await page.goto('https://signupppe.microsoft.com/signup?sku=powerbi&box-skip-email=1');
  await page.waitForNavigation();
  
  await page.type('#StepsData_Email', makeid() + '@' + makeid() + '.com', { delay: 10 });
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
})();

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