
import { chromium, test } from "@playwright/test";

test(`Test to learn CSS Selectors`, async ({ page }) => {     

    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator(`#username`).fill(`democsr2`) 

    await page.locator(`#password`).fill(`crmsfa`)    

    await page.locator(`.decorativeSubmit`).click()

    await page.waitForTimeout(3000)

    await page.locator(`[style="color: black;"]`).click() 

    await page.locator('[href="/crmsfa/control/leadsMain"]').click() 

    await page.locator(`[href="/crmsfa/control/createLeadForm"]`).click() 

    await page.locator(`[id="createLeadForm_companyName"]`).fill(`TestLeaf`) 

    await page.locator(`[id="createLeadForm_firstName"]`).fill(`Santhoshkumar`) 

    await page.locator(`[id="createLeadForm_lastName"]`).fill(`Ramamoorthy`) 

    await page.locator(`[id="createLeadForm_personalTitle"]`).fill(`Mr.`) 

    await page.locator(`[id="createLeadForm_generalProfTitle"]`).fill(`Automation Tester`) 

    await page.locator(`[id="createLeadForm_annualRevenue"]`).fill(`1000000`) 

    await page.locator(`[id="createLeadForm_departmentName"]`).fill(`Testing`) 

    await page.locator(`[id="createLeadForm_primaryPhoneNumber"]`).fill(`9876000000`)

    await page.locator(`[value="Create Lead"]`).click()

    await page.waitForTimeout(3000)

})
