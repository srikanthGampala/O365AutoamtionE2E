import { element, ElementFinder , by, ElementArrayFinder, browser } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";
import { log4jsconfig } from "../config/log4jsconfig";
export class LoginPage extends commonFunctions{

    //Banking page elments
    
    private EnterEmail: ElementFinder= element(by.name("loginfmt"));
    private ClickOnNext: ElementFinder= element(by.css("#idSIButton9"));
    private SelectSonata: ElementFinder= element(by.xpath("//span[normalize-space()='Sonata Software']"));
    private EnterPassword: ElementFinder= element(by.name("Password"));
    private ClickOnSigninBtn: ElementFinder= element(by.xpath("//span[@id='submitButton']"));
    private ClickOnYesBtn: ElementFinder= element(by.id("idSIButton9"));
    //private clickonTableFirstColumn:ElementFinder= element(by.xpath("//thead//td[1]"));
    //public  sortedData: any;
    // Banking page methods starts
   
    public async SubmitEmail(username: string)
    {
        await this.clearAndType(this.EnterEmail, username);
    }

    public async NextBtn()
        
    {
        await this.click(this.ClickOnNext);
    }

    public async clickOnSonata()
        
        {
            await this.click(this.SelectSonata);
        }
    public async fillPassWord(password: string)
    {
            await this.clearAndType(this.EnterPassword, password);

    }

    public async SigninBtn()
    {
        await this.click(this.ClickOnSigninBtn);
    }

    public async ClickOnYes()
    {
        await this.click(this.ClickOnYesBtn);
    }
    async validateTitle(){
        let Title= browser.getTitle();
        
        
        
    }   
}


