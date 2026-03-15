//Activity on Xpath 


import { test } from "@playwright/test";

test(`Test to learn Xpath`, async ({ page }) =>  { // {page}--> page

    await page.goto(`https://login.salesforce.com/`)

    await page.locator(`//input[@id='username']`).fill(`dilipkumar.rajendran@testleaf.com`);
    await page.locator(`//input[contains(@id,'password')]`).fill(`TestLeaf@2025@123`);
    await page.locator('//input[@id="Login"]').click()

    // await page.locator('//input[@id='Login']').click() --> This will not work because of the single quote used in the id attribute value.
    //await page.locator(`//input[contains(@class,'primary')]`).click()

    await page.waitForTimeout(3000) 

}
)
