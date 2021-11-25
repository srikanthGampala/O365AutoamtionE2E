"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const protractor_1 = require("protractor");
let ec = protractor_1.browser.ExpectedConditions;
describe("Auotmate O365", function () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log("Browser started");
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://outlook.office365.com/");
        yield protractor_1.browser.manage().deleteAllCookies();
    }));
    it(" Outlook email verficatiopn", () => __awaiter(this, void 0, void 0, function* () {
        let maxTime = 10000;
        //Enter user id in  the field
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.name("loginfmt"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.name("loginfmt")).sendKeys("srikanth.gampala@sonata-software.com");
        //Click on next
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.css("#idSIButton9"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.css("#idSIButton9")).click();
        //click on sonata software
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//span[normalize-space()='Sonata Software']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[normalize-space()='Sonata Software']")).click();
        //User name will be added by default so enter password in password field
        yield (0, protractor_1.element)(protractor_1.by.name("Password")).sendKeys("Devansh@23");
        //click on submit button
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[@id='submitButton']")).click();
        //Click on yes button
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.id("idSIButton9"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.id("idSIButton9")).click();
        yield protractor_1.browser.getTitle().then((title) => (console.log(title)));
        //     console.log(Title);
        // })
        // console.log(Title);
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//a[@title='Calendar']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//a[@title='Calendar']")).click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//button[@id='NewEventButtonAnchor']/span[1]"))), maxTime);
        //await browser.actions().mouseMove(element(by.xpath("//button[@id='NewEventButtonAnchor']/span"))).perform();
        yield (0, protractor_1.element)(protractor_1.by.xpath("//button[@id='NewEventButtonAnchor']/span[1]")).click();
        yield expect(protractor_1.browser.getCurrentUrl()).toEqual("https://outlook.office365.com/calendar/view/month");
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_3E7wnxJiOkDAHYaAOAj9uX _1Wl1IVTBi18kkA9VykFQp']/div/div/div/div/input"))), maxTime);
        //await browser.actions().mouseMove(element(by.xpath("//input[@id='TextField285']"))).perform();
        yield (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_3E7wnxJiOkDAHYaAOAj9uX _1Wl1IVTBi18kkA9VykFQp']/div/div/div/div/input")).sendKeys("Quote:1234 details");
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//input[@placeholder='Invite attendees']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//input[@placeholder='Invite attendees']")).sendKeys("g3.srikanth@gmail.com;");
        yield protractor_1.browser.element.all(protractor_1.by.xpath("//div[@class='ms-TextField-wrapper']/div/input")).get(1).clear();
        let Date = (0, moment_1.default)().add(2, 'day').format('MM/DD/YYYY');
        yield protractor_1.browser.element.all(protractor_1.by.xpath("//div[@class='ms-TextField-wrapper']/div/input")).get(1).sendKeys(Date);
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//button[@role='presentation']/span/i"))), maxTime);
        yield protractor_1.browser.element(protractor_1.by.xpath("//button[@role='presentation']/span/i")).click();
        //await browser.element(by.xpath("//div[@data-ktp-target='true']/input")).sendKeys("09:00 AM");
        // let Time=browser.element.all(by.xpath("//input[@id='ComboBox150-input']"));
        // let  Times=moment().add(4,'hour').format('LT');
        // await Time.sendKeys(Times);
        yield protractor_1.browser.element.all(protractor_1.by.xpath("//div[@class='ms-TextField-wrapper']/div/input")).get(2).clear();
        yield protractor_1.browser.element.all(protractor_1.by.xpath("//div[@class='ms-TextField-wrapper']/div/input")).get(2).sendKeys(Date);
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.css("button[class*='ms-Toggle-background pill']"))), maxTime);
        // await element(by.xpath("//div[@class='ms-Toggle is-enabled _9BgCecnJMUGKJPu3lh8WT root-366']")).click();
        // 
        // await browser.element(by.xpath("//div[@class='_1b3vd6BobFJ4IrJRuFQCNw']//div[@role='none']")).click();
        yield protractor_1.browser.element.all(protractor_1.by.css("button[class*='ms-Toggle-background pill']")).get(1).click();
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@dir='ltr']/div"))), maxTime);
        yield protractor_1.browser.actions().mouseMove((0, protractor_1.element)(protractor_1.by.xpath("//div[@dir='ltr']/div"))).click();
        yield protractor_1.browser.element(protractor_1.by.xpath("//div[@dir='ltr']/div")).sendKeys("Hi,", protractor_1.protractor.Key.ENTER, protractor_1.protractor.Key.ENTER, "This meeting is to discuss on Quote-1234");
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.css("button[class*='ms-Button ms-Button--action ms-Button--command'] span[class*='ms-Button-label ']"))), maxTime);
        yield protractor_1.element.all(protractor_1.by.css("button[class*='ms-Button ms-Button--action ms-Button--command'] span[class*='ms-Button-label ']")).get(0).click();
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@id='LeftRailItem_Mail']/a"))), maxTime);
        yield protractor_1.browser.element(protractor_1.by.xpath("//div[@id='LeftRailItem_Mail']/a")).click();
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']")).click();
        // await browser.sleep(2000);
        // await browser.refresh();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]")).click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//span[@title='Quote:1234 details']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[@title='Quote:1234 details']")).getText().then((msg) => {
            expect(msg).toBe("Quote:1234 details");
            console.log("validated meeting request header:" + msg);
        });
        // await browser.wait(ec.visibilityOf(element(by.xpath("//span[@role='link']"))), maxTime);
        // await element(by.xpath("//span[@role='link']")).click();
        //await element(by.xpath(`//button[@class='dayButton-202 dayIsToday-710 ms-CalendarDay-dayIsToday']//span[@aria-hidden='true'][normalize-space()='${tomo}']`)).click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0bG9va0NhbGVuZGVyU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL091dGxvb2tDYWxlbmRlclNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsMkNBQThEO0FBRTlELElBQUksRUFBRSxHQUFDLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7QUFJbEMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN0QixVQUFVLENBQUMsR0FBTyxFQUFFO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUM5QixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQ25ELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBTyxFQUFFO1FBRXZDLElBQUksT0FBTyxHQUFDLEtBQUssQ0FBQztRQUNsQiw2QkFBNkI7UUFDN0IsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDcEYsZUFBZTtRQUNmLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFD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