import * as puppeteer from "puppeteer";


export class UploadDialog
{   
    public static async openProjectDialog(page: puppeteer.Page): Promise<void>
    {        
        await page.click("div.slab-dropdown-toogle button.slab-combo-button")
    }

    public static async selectProject(page: puppeteer.Page, project: string): Promise<void>
    {
        const projectItem = await page.evaluateHandle((projectName) => {
            return Array.from(document.querySelectorAll('div[role="gridcell"]')).find(
                el => el.textContent?.trim() === projectName
            );
        }, project);

        // Check if the project item exists and cast it to ElementHandle<Element>
        if (projectItem) {
            const element = await projectItem.asElement() as puppeteer.ElementHandle<Element>;
            if (element) {
                await element.click();
            } else {
                console.log('The item is not an Element.');
            }
        } else {
            console.log('Project item not found.');
        }
    }

    public static async clickUpdateTests(page: puppeteer.Page): Promise<void>
    {
        await page.click('button.btn.mr-0')
    }

    public static async checkUploadStatus(page: puppeteer.Page): Promise<void>
    {   
        try {   
            await page.waitForSelector('[aria-label="Test cases description and steps updated"]');
        }
        catch(error) {
            console.error('Confirmation Toast not found.');
            throw error;
        }        
    }
}
