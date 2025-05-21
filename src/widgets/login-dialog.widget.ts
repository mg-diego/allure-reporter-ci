import * as puppeteer from "puppeteer";


export class LoginDialog
{
    public static async login(page: puppeteer.Page, username: string, password: string, url:string): Promise<void>
    {        
        await this.clearInput(page, "#username")
        await page.type("#username", username)

        await this.clearInput(page, "#password")
        await page.type("#password", password)

        await this.clearInput(page, "#server")
        await page.type("#server", url)

        await page.click("button.btn.ml-auto")
    }

    private static async clearInput(page: puppeteer.Page, locator:string) {
        await page.click(locator, { clickCount: 3 }); // Select all
        await page.keyboard.press('Backspace');
    }
}
