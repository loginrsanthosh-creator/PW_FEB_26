import { test } from '@playwright/test'

test('Handling dropdown in select tag', async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`.inputLogin`).first().fill(`democsr2`); // Option4

    await page.locator(`.inputLogin`).last().fill(`crmsfa`); // Option4

    await page.locator(`input[class="decorativeSubmit"]`).click();

    await page.locator('//a[contains(text(), "CRM/SFA")]').click();

    await page.locator('//a[contains(text(),"Leads")]').click();

    await page.locator('//a[contains(text(),"Create Lead")]').click();

    await page.locator('//input[@id="createLeadForm_companyName"]').fill(`TestLeaf`);

    await page.locator('//input[@id="createLeadForm_firstName"]').fill(`Dilip`);

    await page.locator('//input[@id="createLeadForm_lastName"]').fill(`Rajendran`);

    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { value: "LEAD_PARTNER" });

    const alldropDownValues= page.locator('//select[@id="createLeadForm_dataSourceId"]/option');



    const dropDownCount = await alldropDownValues.count(); //Number of web elements in dropdown
    console.log("Below are the list of source options");
    

    for (let index = 0; index < dropDownCount; index++) {
        const element = await alldropDownValues.nth(index).innerText();
        console.log(element);
    }

       const countryDropDownValues = page.locator('//select[@id="createLeadForm_industryEnumId"]/option');
    const countryDropDownCount = await countryDropDownValues.count(); //Number of web elements in dropdown

    console.log("\nBelow are the list of industry options");

    for (let index = 0; index < countryDropDownCount; index++) {
        const element = await countryDropDownValues.nth(index).innerText();
        console.log(element);
    }
    //console.log(await alldropDownValues.nth(0)); //innerText
    

    await page.waitForTimeout(3000) //Note: only for observation purpose, not a good practice to use in real time automation script
    await page.locator('//input[@name="submitButton"]').click();
    await page.waitForTimeout(3000)
})




