import { $, $$, browser, by, element } from "protractor"
import { AddPluginPage } from "./pageObjects/AddPluginPage";
import { informationworkerLoginPage } from "./pageObjects/informationworkerLoginPage";
import {LoginPage} from "./pageObjects/LoginPage";
import { SentboxPage } from "./pageObjects/SentboxPage";

var d= require("./outlookData.js");
var using= require('jasmine-data-provider');
const LPage= new LoginPage();
const AddinPage= new AddPluginPage();
const SentPage= new SentboxPage();
const EpicorLogin= new informationworkerLoginPage();

describe("Otlook Login Functionality validation", function(){
    
    beforeAll(async ()=>{
        console.log("Otlook Login Functionality validation");
        await browser.waitForAngularEnabled(false);
        await browser.get("https://outlook.office365.com"); 
    })
    afterAll(async ()=>{
        //let types= await browser.manage().logs().getAvailableLogTypes();
    //console.log("Types :" + types);
    })
    beforeEach(async()=>
    {
    console.log("Browser started an navigating to url");
    //await browser.waitForAngularEnabled(false)
    //await browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");  
    //await browser.manage().deleteAllCookies();
    })
    afterEach(()=>
    {
        
    console.log("Test complleted and Browser closed")
    })
    //let alert=browser.switchTo().alert();
    //let msg=alert.getText();
    using(d.Datadriven,function(data,description){
    it("Outlook Login"+ description,async()=>{
        //validating heading of the page
        await LPage.SubmitEmail(data.username);
        await LPage.NextBtn();
        await LPage.clickOnSonata();
        await LPage.fillPassWord(data.password);
        await LPage.SigninBtn();
        await LPage.ClickOnYes();
        await browser.sleep(1000);
        await LPage.validateTitleOfThePage(data.expectedText);    


    })
    
    it("Validating Sentbox email header", async()=>{
        
        await SentPage.ClickSentBox();
        //await browser.refresh();
        await AddinPage.ClickFirstEmail();
        await SentPage.ValidateHeader();
         

    })
    xit("Adding Manifest file to outlook", async()=>{
        //validating heading of the page
        await AddinPage.ClickFirstEmail();
        //await EpicorLogin.ClickOnEllipse();
        await AddinPage.ClickGetAddins();
        await browser.sleep(1000);
        await AddinPage.switchToFrame(1);
        await AddinPage.ClickMyAddins();
        await AddinPage.ClickCustomAddinDropDown();
        //await AddinPage.AddFromFile();
    //    

    })
    it("Information worker Login screen validation", async()=>{
        //validating heading of the page
        await EpicorLogin.ClickFirstEmail();
        await EpicorLogin.ClickQuote();
        //await browser.sleep(1000);
        await EpicorLogin.switchToFrame(1);
        await EpicorLogin.ClickToggleBtn();
        await EpicorLogin.ClickContinueBtn();
        await EpicorLogin.EnterServerDetails(data.servername);
        await EpicorLogin.ClickContinueBtn();
        await EpicorLogin.EnterUserName(data.Uname);
        await EpicorLogin.EnterPassword(data.Pwd)

    //    

    })
    
})

})

