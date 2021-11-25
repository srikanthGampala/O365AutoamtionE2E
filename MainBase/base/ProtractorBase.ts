import { browser, ElementFinder, ProtractorExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";
import { text } from "stream/consumers";

export class ProtractorBase {

    private ec: ProtractorExpectedConditions= browser.ExpectedConditions;
    private timeOut=20000;

    /**
     * @description This function is used to do the click action 
     * @param element- The element on which click action to be perfomed
     */

    public async click (element: ElementFinder){
        await browser.wait(this.ec.elementToBeClickable(element),this.timeOut, "Failed to click the element");
        element.click();

    }
    /**
     * @description This function will append the text
     * @param element pass the element locator
     * @param testData data to be typed on the element
     */
    public async type (element: ElementFinder,testData: string){
        await this.visibilityOf(element);
        
        await element.sendKeys(testData);

    }
    /**
     * @description This function will clear the existing value and then type the data 
     * @param element  Pass the element locator 
     * @param testData Data to be typed on the element
     */
    public async clearAndType (element: ElementFinder,testData: string){
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testData);
    }

    public async assertText(element: ElementFinder, expectedText: string){
        await this.visibilityOf(element);
        let actualText= await element.getText();
        await expect(actualText.trim()).toBe(expectedText);

    }
    public async visibilityOf(element: ElementFinder){
        await browser.wait(this.ec.visibilityOf(element), this.timeOut, "Element is not visible");
    }

    public async assertTrue(element: ElementFinder){
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(true);
    }

    public async assertFalse(element: ElementFinder){
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(false);
    }

    public async acceptAlert(){
        await this.waitForAlert();
        await (await browser.switchTo().alert()).accept();

    }

    public async dismissAlert(){
        await this.waitForAlert();
        await (await browser.switchTo().alert()).dismiss();
        
    }

    public async typeInAlert(data: string){
        await this.waitForAlert();
        await (await browser.switchTo().alert()).sendKeys(data);
    }
    
    private async waitForAlert(){
        await browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");  
    }
    public async getTextFromAlert(): Promise<string>{
        await this.waitForAlert();
        let alertText= await (await browser.switchTo().alert()).getText();
        return alertText;
    }

    public async switchToFrame(frameNumber: number){
        await browser.switchTo().frame(frameNumber);

    }

    public async typeAndTab(element: ElementFinder, testData: string){
        let capabilities= await browser.getCapabilities()
        let platform=capabilities.get('platform');

        await this.visibilityOf(element);
        if (platform=== "Mac OS x"){
            await element.sendKeys(testData, protractor.Key.RETURN)
        }else{
            await element.sendKeys(testData, protractor.Key.ENTER)
        }
        
    }
    public async mouseHoverAndClick(element: ElementFinder){
        await this.visibilityOf(element);
        await browser.actions().mouseMove(await element.getWebElement()).click().perform();

    }
    public async moveToElement(element: ElementFinder){
        await this.visibilityOf(element);
        await browser.actions().mouseMove(await element.getWebElement()).perform()
    }
    public async validateTitleOfThePage(expectedText: string){
        let actualText= await browser.getTitle();
        console.log("The Title of the page is:" + actualText);
        await expect(actualText.trim()).toBe(expectedText);
    }
}
