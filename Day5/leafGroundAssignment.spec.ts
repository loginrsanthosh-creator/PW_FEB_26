/* Assignment Requirements:
1. Navigate to https://leafground.com/select.xhtml
2. Select your favorite UI automation tool using the different select options
3. Get the count and print of all the values
4. Choose your preferred Country
5. Confirm Cities belongs to Country is loaded
6. Choose any three courses from the dropdown
7. Choose a language and print all the values from the dropdown.
8. Select 'Two' irrespective of the language chosen
 */

import { test } from "@playwright/test";

test( "Test to validate the Assertion Validation", async ({ page }) => {

    await page.goto(`https://leafground.com/select.xhtml`);
    await page.selectOption('//select[@class="ui-selectonemenu"]', {value: `Selenium`});

    const favAutomationTool = page.locator(`//select[@class="ui-selectonemenu"] /option`);
    
    const allFavAutomationToolCount = await favAutomationTool.count();
    console.log("Below are the list of Automation tools");

    for (let index = 0; index < allFavAutomationToolCount; index++) {
        const element = await favAutomationTool.nth(index).innerText();
        console.log(element);
        
    }

    await page.waitForTimeout(3000);
    

    


}

)
