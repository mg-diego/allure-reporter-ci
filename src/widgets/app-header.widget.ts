import * as puppeteer from "puppeteer";

const baseLocator = 'app-navbar button';

export class ApplicationHeader
{      
    public static async hideSummary(page: puppeteer.Page): Promise<void>
    {
        await page.click(`${baseLocator} .fa-table`);
    }

    public static async openLoginDialog(page: puppeteer.Page): Promise<void>
    {
        await page.click(`${baseLocator} .fa-user`)
    }

    public static async openUploadDialog(page: puppeteer.Page): Promise<void> 
    {
        await page.click(`${baseLocator} .fa-upload`)
    }
}
