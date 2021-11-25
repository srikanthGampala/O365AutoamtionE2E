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
const AddPluginPage_1 = require("./pageObjects/AddPluginPage");
const LoginPage_1 = require("./pageObjects/LoginPage");
const SentboxPage_1 = require("./pageObjects/SentboxPage");
var d = require("./outlookData.js");
var using = require('jasmine-data-provider');
const LPage = new LoginPage_1.LoginPage();
const AddinPage = new AddPluginPage_1.AddPluginPage();
const SentPage = new SentboxPage_1.SentboxPage();
describe("Otlook Login Functionality validation", function () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        console.log("Otlook Login Functionality validation");
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://outlook.office365.com");
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        //let types= await browser.manage().logs().getAvailableLogTypes();
        //console.log("Types :" + types);
    }));
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log("Browser started an navigating to url");
        //await browser.waitForAngularEnabled(false)
        //await browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");  
        //await browser.manage().deleteAllCookies();
    }));
    afterEach(() => {
        console.log("Test complleted and Browser closed");
    });
    //let alert=browser.switchTo().alert();
    //let msg=alert.getText();
    using(d.Datadriven, function (data, description) {
        it("Outlook Login" + description, () => __awaiter(this, void 0, void 0, function* () {
            //validating heading of the page
            yield LPage.SubmitEmail(data.username);
            yield LPage.NextBtn();
            yield LPage.clickOnSonata();
            yield LPage.fillPassWord(data.password);
            yield LPage.SigninBtn();
            yield LPage.ClickOnYes();
            yield protractor_1.browser.sleep(1000);
            yield LPage.validateTitleOfThePage(data.expectedText);
        }));
        it("Validating Sentbox email header", () => __awaiter(this, void 0, void 0, function* () {
            yield SentPage.ClickSentBox();
            //await browser.refresh();
            yield AddinPage.ClickFirstEmail();
            yield SentPage.ValidateHeader();
        }));
        it("Adding Manifest file to outlook", () => __awaiter(this, void 0, void 0, function* () {
            //validating heading of the page
            yield AddinPage.ClickFirstEmail();
            yield AddinPage.ClickOnEllipse();
            yield AddinPage.ClickGetAddins();
            yield protractor_1.browser.sleep(1000);
            yield AddinPage.switchToFrame(1);
            yield AddinPage.ClickMyAddins();
            yield AddinPage.ClickCustomAddinDropDown();
            //await AddinPage.AddFromFile();
            //    
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bG9va0xvZ2luU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL291dGxvb2tMb2dpblNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQsK0RBQTREO0FBQzVELHVEQUFrRDtBQUNsRCwyREFBd0Q7QUFFeEQsSUFBSSxDQUFDLEdBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbkMsSUFBSSxLQUFLLEdBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUMsTUFBTSxLQUFLLEdBQUUsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDN0IsTUFBTSxTQUFTLEdBQUUsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDckMsTUFBTSxRQUFRLEdBQUUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFbEMsUUFBUSxDQUFDLHVDQUF1QyxFQUFFO0lBRTlDLFNBQVMsQ0FBQyxHQUFRLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxHQUFRLEVBQUU7UUFDZixrRUFBa0U7UUFDdEUsaUNBQWlDO0lBQ2pDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixVQUFVLENBQUMsR0FBTyxFQUFFO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNwRCw0Q0FBNEM7UUFDNUMsNkZBQTZGO1FBQzdGLDRDQUE0QztJQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsU0FBUyxDQUFDLEdBQUUsRUFBRTtRQUdkLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNGLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsVUFBUyxJQUFJLEVBQUMsV0FBVztRQUM1QyxFQUFFLENBQUMsZUFBZSxHQUFFLFdBQVcsRUFBQyxHQUFPLEVBQUU7WUFDckMsZ0NBQWdDO1lBQ2hDLE1BQU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsTUFBTSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDNUIsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QixNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN6QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLE1BQU0sS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUcxRCxDQUFDLENBQUEsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQU8sRUFBRTtZQUUzQyxNQUFNLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QiwwQkFBMEI7WUFDMUIsTUFBTSxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbEMsTUFBTSxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFHcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFPLEVBQUU7WUFDM0MsZ0NBQWdDO1lBQ2hDLE1BQU0sU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sU0FBUyxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDM0MsZ0NBQWdDO1lBQ3BDLE1BQU07UUFFTixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFDLENBQUE7QUFFRixDQUFDLENBQUMsQ0FBQSJ9