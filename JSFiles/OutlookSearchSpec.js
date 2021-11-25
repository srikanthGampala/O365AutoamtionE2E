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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let ec = protractor_1.browser.ExpectedConditions;
describe("Auotmate O365", function () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log("Browser started");
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://outlook.office365.com/");
        yield protractor_1.browser.manage().deleteAllCookies();
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        console.log("Browser closed");
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
        //you will be navigated to https://outlook.office365.com/mail/inbox page
        //click on new message button
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//span[@id='id__7']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[@id='id__7']")).click();
        //Enter maild first few char and select the required mail id( in my case it is my mail id)
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//input[@aria-label='To']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//input[@aria-label='To']")).sendKeys("srikanth");
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@id='FloatingSuggestionsItemId-0']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//div[@id='FloatingSuggestionsItemId-0']")).click();
        //Enter tab to move on to the subject filed to enter text and then press tab to enter text in body 
        yield (0, protractor_1.element)(protractor_1.by.xpath("//input[@aria-label='To']")).sendKeys(protractor_1.protractor.Key.TAB, protractor_1.protractor.Key.TAB, protractor_1.protractor.Key.TAB, protractor_1.protractor.Key.TAB, "Quote-9999", protractor_1.protractor.Key.TAB, "Quote-9999");
        //click on send button to send the email
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.css("button[name='Send'] span[class='ms-Button-flexContainer flexContainer-162']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.css("button[name='Send'] span[class='ms-Button-flexContainer flexContainer-162']")).click();
        // click on the email that we have sent
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.refresh();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]")).click();
        //Click on the Quote which got highlighted as hyperlink      
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//span[@role='link']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[@role='link']")).click();
        protractor_1.browser.sleep(2000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0bG9va1NlYXJjaFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9PdXRsb29rU2VhcmNoU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDJDQUE4RDtBQUU5RCxJQUFJLEVBQUUsR0FBQyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO0FBSWxDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDdEIsVUFBVSxDQUFDLEdBQU8sRUFBRTtRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtRQUNuRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsU0FBUyxDQUFDLEdBQU8sRUFBRTtRQUVmLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBTyxFQUFFO1FBRXZDLElBQUksT0FBTyxHQUFDLEtBQUssQ0FBQztRQUNsQiw2QkFBNkI7UUFDN0IsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLHNDQUFzQyxDQUFDLENB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