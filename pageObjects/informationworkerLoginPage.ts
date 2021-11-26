import { element, ElementFinder , by, ElementArrayFinder, browser } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";
import { log4jsconfig } from "../config/log4jsconfig";

export class informationworkerLoginPage extends commonFunctions{

    
    
    private ClickOnQuote: ElementFinder= element(by.xpath("//span[@role='link']"));
    private ClickOnToggleButton: ElementFinder= element(by.xpath("//span[@role='switch']"));
    private ClickOnContinue: ElementFinder= element(by.xpath("//div[@class='ep-button-content']"));
    private InputServerValue: ElementFinder= element(by.xpath("//input[@id='input_serverValue']"));
    private UserName: ElementFinder= element(by.xpath("//input[@id='input_username']"));
    private Password: ElementFinder= element(by.xpath("//input[@id='input_password']"));
    private ClickOnFirstEmail: ElementFinder= element(by.xpath("//div[@class='_3qXS6Uo8WFxax_lDWr_1a_']/div[2]"));
   
    public async ClickFirstEmail()
    {
        await this.click(this.ClickOnFirstEmail);
    }
    public async ClickQuote()
    {
        await this.click(this.ClickOnQuote);
    }

    public async ClickToggleBtn()
        
    {
        await this.click(this.ClickOnToggleButton);
    }

    public async ClickContinueBtn()
        
        {
            await this.click(this.ClickOnContinue);
        }
    

    public async EnterServerDetails(servername: string)
    {
        await this.clearAndType(this.InputServerValue, servername);
    }

    public async EnterUserName(Uname: string)
    {
        await this.type(this.UserName, Uname);
    }
    public async EnterPassword(Pwd: string)
    {
        await this.type(this.Password, Pwd);
    }
   
        
        
        
 }    
   