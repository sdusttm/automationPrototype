const puppeteer = require('puppeteer');
const login = require('./login.js');
const helper = require('./helper.js');
const iwpowerbi = require('./iwpowerbi.js');
const prepaid = require('./prepaid.js');
const adminE2E = require('./adminE2E.js');

(async () => {
    await prepaid.run();
    await adminE2E.run();
    await iwpowerbi.run();
    // browser.close();
  })();