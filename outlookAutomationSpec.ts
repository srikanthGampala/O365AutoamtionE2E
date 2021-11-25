import { exec, spawn } from "node:child_process";
import { browser, by, element } from "protractor";
import { protractor } from "protractor/built/ptor";
import { clearScreenDown } from "readline";
var path = require('path');


describe("Auotmate O365", function(){
    beforeEach(async()=>
    {
    console.log("Browser started")
    await browser.waitForAngularEnabled(false)
    await browser.get("https://outlook.office365.com/")
    //await browser.manage().deleteAllCookies();
    })
    
    it(" Outlook login", async()=>{
        //Enter user id in  the field
        await browser.sleep(1000);
        await element(by.name("loginfmt")).sendKeys("srikanth.gampala@sonata-software.com");
        await browser.sleep(2000);
        //Click on next
        await element(by.css("#idSIButton9")).click();
        await browser.sleep(4000);
        //Select sonata 
        await element(by.xpath("//span[normalize-space()='Sonata Software']")).click();
        await browser.sleep(2000);
        //User name will be added by default so enter password in password field
        await element(by.name("Password")).sendKeys("Devansh@23");
        await browser.sleep(2000);
        //click on submit button
        await element(by.xpath("//span[@id='submitButton']")).click();
        await browser.sleep(1000);

        //input[@id='KmsiCheckboxField']
        //span[@id='submitButton']
        await element(by.id("idSIButton9")).click();
        // browser.sleep(1000);
        await browser.sleep(2000);

        await element(by.xpath("//div[@class='_3qXS6Uo8WFxax_lDWr_1a_']/div[2]")).click();
        await browser.sleep(3000);
        // element(by.css("span[role='link']")).click();
        // browser.sleep(2000);
        await element(by.xpath("//button[@id='read_ellipses_menu']")).click();
        await browser.sleep(3000);

        await element(by.xpath("//span[normalize-space()='Get Add-ins']")).click();
        await browser.sleep(3000);
        //browser.waitForAngularEnabled(true);
        await browser.switchTo().frame(1);

        await browser.sleep(1000);
        await element(by.id("MyAddins")).click();
        await browser.sleep(4000);
        await element(by.id("PrivateAddInDropdownLabel")).click();
        await browser.sleep(1000);
        //var fileToUpload = './fileupload.exe';
       // absolutePath = path.resolve(__dirname, fileToUpload);
           
        //await element(by.linkText("Add from file...")).sendKeys(fileToUpload);
        //await element(by.linkText("Add from file...")).sendKeys(absolutePath);
        //await $('input[type="file"]').sendKeys(absolutePath);
        
        await browser.sleep(3000);
        var remote = require('../../node_modules/protractor/node_modules/selenium-webdriver/remote');
browser.setFileDetector(new remote.FileDetector());


var fileToUpload = '../fileupload.exe';
var absolutePath = path.resolve(__dirname, fileToUpload);

var fileElem = element(by.css('input[type="file"]'));

// Unhide file input
browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());

fileElem.sendKeys(absolutePath);

// take a breath 
browser.driver.sleep(100);

// click upload button
    await element(by.linkText("Add from file...")).click(); // does post request

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
        })

})
        
    

