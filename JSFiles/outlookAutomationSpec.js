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
var path = require('path');
describe("Auotmate O365", function () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log("Browser started");
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://outlook.office365.com/");
        //await browser.manage().deleteAllCookies();
    }));
    it(" Outlook login", () => __awaiter(this, void 0, void 0, function* () {
        //Enter user id in  the field
        yield protractor_1.browser.sleep(1000);
        yield (0, protractor_1.element)(protractor_1.by.name("loginfmt")).sendKeys("srikanth.gampala@sonata-software.com");
        yield protractor_1.browser.sleep(2000);
        //Click on next
        yield (0, protractor_1.element)(protractor_1.by.css("#idSIButton9")).click();
        yield protractor_1.browser.sleep(4000);
        //Select sonata 
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[normalize-space()='Sonata Software']")).click();
        yield protractor_1.browser.sleep(2000);
        //User name will be added by default so enter password in password field
        yield (0, protractor_1.element)(protractor_1.by.name("Password")).sendKeys("Devansh@23");
        yield protractor_1.browser.sleep(2000);
        //click on submit button
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[@id='submitButton']")).click();
        yield protractor_1.browser.sleep(1000);
        //input[@id='KmsiCheckboxField']
        //span[@id='submitButton']
        yield (0, protractor_1.element)(protractor_1.by.id("idSIButton9")).click();
        // browser.sleep(1000);
        yield protractor_1.browser.sleep(2000);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_3qXS6Uo8WFxax_lDWr_1a_']/div[2]")).click();
        yield protractor_1.browser.sleep(3000);
        // element(by.css("span[role='link']")).click();
        // browser.sleep(2000);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//button[@id='read_ellipses_menu']")).click();
        yield protractor_1.browser.sleep(3000);
        yield (0, protractor_1.element)(protractor_1.by.xpath("//span[normalize-space()='Get Add-ins']")).click();
        yield protractor_1.browser.sleep(3000);
        //browser.waitForAngularEnabled(true);
        yield protractor_1.browser.switchTo().frame(1);
        yield protractor_1.browser.sleep(1000);
        yield (0, protractor_1.element)(protractor_1.by.id("MyAddins")).click();
        yield protractor_1.browser.sleep(4000);
        yield (0, protractor_1.element)(protractor_1.by.id("PrivateAddInDropdownLabel")).click();
        yield protractor_1.browser.sleep(1000);
        //var fileToUpload = './fileupload.exe';
        // absolutePath = path.resolve(__dirname, fileToUpload);
        //await element(by.linkText("Add from file...")).sendKeys(fileToUpload);
        //await element(by.linkText("Add from file...")).sendKeys(absolutePath);
        //await $('input[type="file"]').sendKeys(absolutePath);
        yield protractor_1.browser.sleep(3000);
        var remote = require('../../node_modules/protractor/node_modules/selenium-webdriver/remote');
        protractor_1.browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../fileupload.exe';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = (0, protractor_1.element)(protractor_1.by.css('input[type="file"]'));
        // Unhide file input
        protractor_1.browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
        fileElem.sendKeys(absolutePath);
        // take a breath 
        protractor_1.browser.driver.sleep(100);
        // click upload button
        yield (0, protractor_1.element)(protractor_1.by.linkText("Add from file...")).click(); // does post request
        // const child = exec('C:/Users/admin/Documents/ProtractorTypeScripts./fileupload.exe', (error, stdout, _stderr) => {
        //     if (error) {
        //        throw error;
        //     }
        //     console.log(stdout);
        //  });
        // spawn('./fileupload.exe', function(err) {
        //     if (err) return err;
        // });
        //var shell = require('shelljs');
        // var shell = require('shelljs');
        // relative file path for the autoit exe
        //     var cmd = 'C:/Users/admin/Documents/ProtractorTypeScripts./fileupload.exe';
        //     var task = shell.exec(cmd);
        // if (task.code !== 0) {
        //     shell.echo("execute AutoIt script fail: " + task.stdout);
        //     shell.exit(1);
        // }
        //         var { exec } = require("child_process");
        // //the function acts like a shell, so just use shell commands.
        //         await exec("./fileupload.exe");
        //         await browser.sleep(3000);
        // relative file path for the autoit exe
        // element(by.xpath("//input[@aria-label='To']")).sendKeys("g3.srikanth@gmail.com;");
        // browser.sleep(2000);
        // element(by.css("#TextField212")).sendKeys("order 9999");
        // browser.sleep(2000);
        // element(by.css("button[name='Send']")).click();
        // browser.sleep(2000);
        //.ms-Icon.root-90.css-157.ms-Button-icon._3elxfLs8GcU_Dugz30Zho0.icon-171[data-icon-name='More']
        // it(" Outlook login", async()=>{
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bG9va0F1dG9tYXRpb25TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vb3V0bG9va0F1dG9tYXRpb25TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQWtEO0FBR2xELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUczQixRQUFRLENBQUMsZUFBZSxFQUFFO0lBQ3RCLFVBQVUsQ0FBQyxHQUFPLEVBQUU7UUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzlCLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7UUFDbkQsNENBQTRDO0lBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBTyxFQUFFO1FBQzFCLDZCQUE2QjtRQUM3QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNwRixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLGVBQWU7UUFDZixNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixnQkFBZ0I7UUFDaEIsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENB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