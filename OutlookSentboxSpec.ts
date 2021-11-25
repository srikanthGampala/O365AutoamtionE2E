import { exec, spawn } from "node:child_process";
import { browser, by, element, protractor } from "protractor";
import { clearScreenDown } from "readline";
let ec=browser.ExpectedConditions;



describe("Auotmate O365", function(){
    beforeEach(async()=>
    {
    console.log("Browser started")
    await browser.waitForAngularEnabled(false)
    await browser.get("https://outlook.office365.com/")
    await browser.manage().deleteAllCookies();
    })
    afterEach(async()=>
    {
        await browser.sleep(2000)
    console.log("Browser closed")
    })

    it(" Outlook email verficatiopn", async()=>{

        let maxTime=10000;
        //Enter user id in  the field
        await browser.wait(ec.visibilityOf(element(by.name("loginfmt"))), maxTime);
        await element(by.name("loginfmt")).sendKeys("srikanth.gampala@sonata-software.com");
        //Click on next
        await browser.wait(ec.visibilityOf(element(by.css("#idSIButton9"))), maxTime);
        await element(by.css("#idSIButton9")).click();
        //click on sonata software
        await browser.wait(ec.visibilityOf(element(by.xpath("//span[normalize-space()='Sonata Software']"))), maxTime);
        await element(by.xpath("//span[normalize-space()='Sonata Software']")).click();
        //User name will be added by default so enter password in password field
        await element(by.name("Password")).sendKeys("Hyd@Dev123");
        //click on submit button
        await element(by.xpath("//span[@id='submitButton']")).click();
        //Click on yes button
        await browser.wait(ec.visibilityOf(element(by.id("idSIButton9"))), maxTime);
        await element(by.id("idSIButton9")).click();

        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']"))), maxTime);
        await element(by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']")).click();
        await browser.refresh();
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]"))), maxTime);
        await element(by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]")).click(); 
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@id='ReadingPaneContainerId']/div/div/div/div/div/div/div/div/div/span"))), maxTime);
        var messageHeader= element(by.xpath("//div[@id='ReadingPaneContainerId']/div/div/div/div/div/div/div/div/div/span")).getText();
        await console.log(messageHeader);
        browser.sleep(2000);
  
    })
})