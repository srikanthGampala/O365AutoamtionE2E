import { element, ElementFinder , by, ElementArrayFinder, browser } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";
import { log4jsconfig } from "../config/log4jsconfig";
import { text } from "stream/consumers";
export class SentboxPage extends commonFunctions{

    //Banking page elments
    
    private ClickOnSentBox: ElementFinder= element(by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']"));
    private ClickOnFirstEmail: ElementFinder= element(by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]"));
    private ValidateMailHeder: ElementFinder= element(by.xpath("//div[@id='ReadingPaneContainerId']/div/div/div/div/div/div/div/div/div/span"));
    
   
    public async ClickSentBox()
    {
        await this.click(this.ClickOnSentBox);
    }

    public async ClickFirstEmail()
        
    {
        // await this.visibilityOf(this.ClickOnFirstEmail);
        await this.click(this.ClickOnFirstEmail);
    }
    
    public async ValidateHeader()
        
        {
            await this.visibilityOf(this.ValidateMailHeder);
            await this.ValidateMailHeder.getText().then((text) =>{
            console.log("The First email in the sent box having header as:" + text);
            })
        }
    
    }

    
