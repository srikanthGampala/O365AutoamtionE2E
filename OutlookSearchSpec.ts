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
        await element(by.name("Password")).sendKeys("Devansh@23");
        //click on submit button
        await element(by.xpath("//span[@id='submitButton']")).click();
        //Click on yes button
        await browser.wait(ec.visibilityOf(element(by.id("idSIButton9"))), maxTime);
        await element(by.id("idSIButton9")).click();
        //you will be navigated to https://outlook.office365.com/mail/inbox page
        //click on new message button
        await browser.wait(ec.visibilityOf(element(by.xpath("//span[@id='id__7']"))), maxTime);
        await element(by.xpath("//span[@id='id__7']")).click();
        //Enter maild first few char and select the required mail id( in my case it is my mail id)
        await browser.wait(ec.visibilityOf(element(by.xpath("//input[@aria-label='To']"))), maxTime);
        await element(by.xpath("//input[@aria-label='To']")).sendKeys("srikanth");
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@id='FloatingSuggestionsItemId-0']"))), maxTime);
        await element(by.xpath("//div[@id='FloatingSuggestionsItemId-0']")).click();
        //Enter tab to move on to the subject filed to enter text and then press tab to enter text in body 
        await element(by.xpath("//input[@aria-label='To']")).sendKeys(protractor.Key.TAB,protractor.Key.TAB,protractor.Key.TAB,protractor.Key.TAB,"Quote-9999",protractor.Key.TAB,"Quote-9999");
        //click on send button to send the email
        await browser.wait(ec.visibilityOf(element(by.css("button[name='Send'] span[class='ms-Button-flexContainer flexContainer-162']"))), maxTime);
        await element(by.css("button[name='Send'] span[class='ms-Button-flexContainer flexContainer-162']")).click();
        // click on the email that we have sent
        await browser.sleep(2000);
        await browser.refresh();
        await browser.sleep(2000);
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]"))), maxTime);
        await element(by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]")).click(); 
        
        //Click on the Quote which got highlighted as hyperlink      
        await browser.wait(ec.visibilityOf(element(by.xpath("//span[@role='link']"))), maxTime);
        await element(by.xpath("//span[@role='link']")).click();
        browser.sleep(2000);
        
        
        
        })

})