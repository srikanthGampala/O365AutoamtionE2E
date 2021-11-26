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
const informationworkerLoginPage_1 = require("./pageObjects/informationworkerLoginPage");
const LoginPage_1 = require("./pageObjects/LoginPage");
const SentboxPage_1 = require("./pageObjects/SentboxPage");
var d = require("./outlookData.js");
var using = require('jasmine-data-provider');
const LPage = new LoginPage_1.LoginPage();
const AddinPage = new AddPluginPage_1.AddPluginPage();
const SentPage = new SentboxPage_1.SentboxPage();
const EpicorLogin = new informationworkerLoginPage_1.informationworkerLoginPage();
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
        xit("Adding Manifest file to outlook", () => __awaiter(this, void 0, void 0, function* () {
            //validating heading of the page
            yield AddinPage.ClickFirstEmail();
            //await EpicorLogin.ClickOnEllipse();
            yield AddinPage.ClickGetAddins();
            yield protractor_1.browser.sleep(1000);
            yield AddinPage.switchToFrame(1);
            yield AddinPage.ClickMyAddins();
            yield AddinPage.ClickCustomAddinDropDown();
            //await AddinPage.AddFromFile();
            //    
        }));
        it("Information worker Login screen validation", () => __awaiter(this, void 0, void 0, function* () {
            //validating heading of the page
            yield EpicorLogin.ClickFirstEmail();
            yield EpicorLogin.ClickQuote();
            //await browser.sleep(1000);
            yield EpicorLogin.switchToFrame(1);
            yield EpicorLogin.ClickToggleBtn();
            yield EpicorLogin.ClickContinueBtn();
            yield EpicorLogin.EnterServerDetails(data.servername);
            yield EpicorLogin.ClickContinueBtn();
            yield EpicorLogin.EnterUserName(data.Uname);
            yield EpicorLogin.EnterPassword(data.Pwd);
            //    
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bG9va0xvZ2luU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL291dGxvb2tMb2dpblNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQsK0RBQTREO0FBQzVELHlGQUFzRjtBQUN0Rix1REFBa0Q7QUFDbEQsMkRBQXdEO0FBRXhELElBQUksQ0FBQyxHQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25DLElBQUksS0FBSyxHQUFFLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sS0FBSyxHQUFFLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQzdCLE1BQU0sU0FBUyxHQUFFLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ3JDLE1BQU0sUUFBUSxHQUFFLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sV0FBVyxHQUFFLElBQUksdURBQTBCLEVBQUUsQ0FBQztBQUVwRCxRQUFRLENBQUMsdUNBQXVDLEVBQUU7SUFFOUMsU0FBUyxDQUFDLEdBQVEsRUFBRTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDckQsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLEdBQVEsRUFBRTtRQUNmLGtFQUFrRTtRQUN0RSxpQ0FBaUM7SUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLFVBQVUsQ0FBQyxHQUFPLEVBQUU7UUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3BELDRDQUE0QztRQUM1Qyw2RkFBNkY7UUFDN0YsNENBQTRDO0lBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixTQUFTLENB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