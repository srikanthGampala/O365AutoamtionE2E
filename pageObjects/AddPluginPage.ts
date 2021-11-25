import { element, ElementFinder , by, ElementArrayFinder, browser } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";
import { log4jsconfig } from "../config/log4jsconfig";
export class AddPluginPage extends commonFunctions{

    //Banking page elments
    
    private ClickOnFirstEmail: ElementFinder= element(by.xpath("//div[@class='_3qXS6Uo8WFxax_lDWr_1a_']/div[2]"));
    private ClickEllipse: ElementFinder= element(by.xpath("//button[@id='read_ellipses_menu']"));
    private ClickOnAddins: ElementFinder= element(by.xpath("//span[normalize-space()='Get Add-ins']"));
    private ClickOnMyAddins: ElementFinder= element(by.id("MyAddins"));
    private ClickOnCustomAddinDropDown: ElementFinder= element(by.id("PrivateAddInDropdownLabel"));
    //private AddOnFromFile: ElementFinder= element(by.id("idSIButton9"));
    //private clickonTableFirstColumn:ElementFinder= element(by.xpath("//thead//td[1]"));
    //public  sortedData: any;
    // Banking page methods starts
   
    public async ClickFirstEmail()
    {
        await this.click(this.ClickOnFirstEmail);
    }

    public async ClickOnEllipse()
        
    {
        await this.click(this.ClickEllipse);
    }

    public async ClickGetAddins()
        
        {
            await this.click(this.ClickOnAddins);
        }
    

    public async ClickMyAddins()
    {
        await this.click(this.ClickOnMyAddins);
    }

    public async ClickCustomAddinDropDown()
    {
        await this.click(this.ClickOnCustomAddinDropDown);
    }
    // public async AddFromFile(){
    //     await this.click(this.AddOnFromFile)
        
        
        
    // }   
}
