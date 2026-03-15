/* Task:
Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Firefox browser instance and verify the page title and URL.
Preconditions:
1. Use Playwright to launch Edge and Firefox.
2. Create two separate browser instances.
3. Use the following URLs:
o Red Bus: https://www.redbus.in
o Flipkart: https://www.flipkart.com
Requirements:
 Red Bus (Edge):
o Load the home page and print the page title and current URL.
 Flipkart (Firefox):
o Load the home page and print the page title and current URL.
Hints:
 Use page.title() to retrieve the page title.
 Use page.url() to retrieve the current page URL.
Expected Outcome:
 Upon completion, you should be able to navigate two websites in two separate browser
instances (Edge and Firefox), retrieve page information, and print the page titles and
URLs. */

import { chromium,firefox, test } from "@playwright/test";

test(`Test to launch Red Bus and Flipkart in separate browser instances`, async ({}) => {

    //Launch Edge Browser and load Red Bus

    const browser = await chromium.launch({ headless: false });
    const edgeBrowser = await browser.newContext();
    const redBusPage1 = await edgeBrowser.newPage();
    await redBusPage1.goto('https://www.redbus.in');
    console.log('Red Bus Page Title:', await redBusPage1.title());
    console.log('Red Bus Page URL:', await redBusPage1.url());

    //Launch Firefox Browser and load Flipkart

    const browser1 = await firefox.launch({ headless: false });
    const firefoxBrowser = await browser1.newContext();
    const flipkartPage = await firefoxBrowser.newPage();
    await flipkartPage.goto('https://www.flipkart.com');
    console.log('Flipkart Page Title:', await flipkartPage.title());
    console.log('Flipkart Page URL:', await flipkartPage.url());
});
