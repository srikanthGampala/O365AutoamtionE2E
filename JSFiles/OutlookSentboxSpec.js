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
        yield (0, protractor_1.element)(protractor_1.by.name("Password")).sendKeys("Hyd@Dev123");
        //click on submit button
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[@id='submitButton']")).click();
        //Click on yes button
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.id("idSIButton9"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.id("idSIButton9")).click();
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']")).click();
        yield protractor_1.browser.refresh();
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]"))), maxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]")).click();
        yield protractor_1.browser.wait(ec.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath("//div[@id='ReadingPaneContainerId']/div/div/div/div/div/div/div/div/div/span"))), maxTime);
        var messageHeader = (0, protractor_1.element)(protractor_1.by.xpath("//div[@id='ReadingPaneContainerId']/div/div/div/div/div/div/div/div/div/span")).getText();
        yield console.log(messageHeader);
        protractor_1.browser.sleep(2000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0bG9va1NlbnRib3hTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vT3V0bG9va1NlbnRib3hTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQThEO0FBRTlELElBQUksRUFBRSxHQUFDLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7QUFJbEMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN0QixVQUFVLENBQUMsR0FBTyxFQUFFO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUM5QixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQ25ELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixTQUFTLENBQUMsR0FBTyxFQUFFO1FBRWYsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFPLEVBQUU7UUFFdkMsSUFBSSxPQUFPLEdBQUMsS0FBSyxDQUFDO1FBQ2xCLDZCQUE2QjtRQUM3QixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsc0NBQXNDLENBQUMs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