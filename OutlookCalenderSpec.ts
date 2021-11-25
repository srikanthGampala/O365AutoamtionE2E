import moment from "moment";
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
        await browser.getTitle().then((title)=>(console.log(title)));
        //     console.log(Title);
        // })
        // console.log(Title);
        await browser.wait(ec.visibilityOf(element(by.xpath("//a[@title='Calendar']"))), maxTime);
        await element(by.xpath("//a[@title='Calendar']")).click();
        await browser.sleep(2000);
        await browser.wait(ec.visibilityOf(element(by.xpath("//button[@id='NewEventButtonAnchor']/span[1]"))), maxTime);
        //await browser.actions().mouseMove(element(by.xpath("//button[@id='NewEventButtonAnchor']/span"))).perform();
        await element(by.xpath("//button[@id='NewEventButtonAnchor']/span[1]")).click();
        await expect(browser.getCurrentUrl()).toEqual("https://outlook.office365.com/calendar/view/month");
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@class='_3E7wnxJiOkDAHYaAOAj9uX _1Wl1IVTBi18kkA9VykFQp']/div/div/div/div/input"))), maxTime);
        //await browser.actions().mouseMove(element(by.xpath("//input[@id='TextField285']"))).perform();
        await element(by.xpath("//div[@class='_3E7wnxJiOkDAHYaAOAj9uX _1Wl1IVTBi18kkA9VykFQp']/div/div/div/div/input")).sendKeys("Quote:1234 details");
        await browser.wait(ec.visibilityOf(element(by.xpath("//input[@placeholder='Invite attendees']"))), maxTime);
        await element(by.xpath("//input[@placeholder='Invite attendees']")).sendKeys("g3.srikanth@gmail.com;");
        
        await browser.element.all(by.xpath("//div[@class='ms-TextField-wrapper']/div/input")).get(1).clear();
        let Date=moment().add(2,'day').format('MM/DD/YYYY');
        await browser.element.all(by.xpath("//div[@class='ms-TextField-wrapper']/div/input")).get(1).sendKeys(Date);
        await browser.wait(ec.visibilityOf(element(by.xpath("//button[@role='presentation']/span/i"))), maxTime);
        await browser.element(by.xpath("//button[@role='presentation']/span/i")).click();
        //await browser.element(by.xpath("//div[@data-ktp-target='true']/input")).sendKeys("09:00 AM");
        // let Time=browser.element.all(by.xpath("//input[@id='ComboBox150-input']"));
        // let  Times=moment().add(4,'hour').format('LT');
        // await Time.sendKeys(Times);
        await browser.element.all(by.xpath("//div[@class='ms-TextField-wrapper']/div/input")).get(2).clear();
        await browser.element.all(by.xpath("//div[@class='ms-TextField-wrapper']/div/input")).get(2).sendKeys(Date);
        await browser.wait(ec.visibilityOf(element(by.css("button[class*='ms-Toggle-background pill']"))), maxTime);
        // await element(by.xpath("//div[@class='ms-Toggle is-enabled _9BgCecnJMUGKJPu3lh8WT root-366']")).click();
        // 
        // await browser.element(by.xpath("//div[@class='_1b3vd6BobFJ4IrJRuFQCNw']//div[@role='none']")).click();
        await browser.element.all(by.css("button[class*='ms-Toggle-background pill']")).get(1).click();
        
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@dir='ltr']/div"))), maxTime);
        await browser.actions().mouseMove(element(by.xpath("//div[@dir='ltr']/div"))).click();
        await browser.element(by.xpath("//div[@dir='ltr']/div")).sendKeys("Hi,", protractor.Key.ENTER,protractor.Key.ENTER,"This meeting is to discuss on Quote-1234");
        await browser.wait(ec.visibilityOf(element(by.css("button[class*='ms-Button ms-Button--action ms-Button--command'] span[class*='ms-Button-label ']"))), maxTime);
        await element.all(by.css("button[class*='ms-Button ms-Button--action ms-Button--command'] span[class*='ms-Button-label ']")).get(0).click();
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@id='LeftRailItem_Mail']/a"))), maxTime);
        await browser.element(by.xpath("//div[@id='LeftRailItem_Mail']/a")).click();
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']"))), maxTime);
        await element(by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']")).click();
        // await browser.sleep(2000);
        // await browser.refresh();
        await browser.sleep(2000);
        await browser.wait(ec.visibilityOf(element(by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]"))), maxTime);
        await element(by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]")).click(); 
        await browser.sleep(2000);
        await browser.wait(ec.visibilityOf(element(by.xpath("//span[@title='Quote:1234 details']"))), maxTime);
        await element(by.xpath("//span[@title='Quote:1234 details']")).getText().then((msg)=>{
            expect(msg).toBe("Quote:1234 details");
            console.log("validated meeting request header:" + msg);
        })
        // await browser.wait(ec.visibilityOf(element(by.xpath("//span[@role='link']"))), maxTime);
        // await element(by.xpath("//span[@role='link']")).click();
        
     
        //await element(by.xpath(`//button[@class='dayButton-202 dayIsToday-710 ms-CalendarDay-dayIsToday']//span[@aria-hidden='true'][normalize-space()='${tomo}']`)).click();


        
    })
})
