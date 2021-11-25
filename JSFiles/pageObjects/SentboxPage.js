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
exports.SentboxPage = void 0;
const protractor_1 = require("protractor");
const commonFunctions_1 = require("../MainBase/common/commonFunctions");
class SentboxPage extends commonFunctions_1.commonFunctions {
    constructor() {
        //Banking page elments
        super(...arguments);
        this.ClickOnSentBox = (0, protractor_1.element)(protractor_1.by.xpath("//div[@role='tree']//div//div[@draggable='true']//div[@title='Sent Items']"));
        this.ClickOnFirstEmail = (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_103OfEN9Q5mN9TrgGsjrrT customScrollBar']/div/div/div/div/div/child::div[2]"));
        this.ValidateMailHeder = (0, protractor_1.element)(protractor_1.by.xpath("//div[@id='ReadingPaneContainerId']/div/div/div/div/div/div/div/div/div/span"));
    }
    ClickSentBox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnSentBox);
        });
    }
    ClickFirstEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.visibilityOf(this.ClickOnFirstEmail);
            yield this.click(this.ClickOnFirstEmail);
        });
    }
    ValidateHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(this.ValidateMailHeder);
            yield this.ValidateMailHeder.getText().then((text) => {
                console.log("The First email in the sent box having header as:" + text);
            });
        });
    }
}
exports.SentboxPage = SentboxPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VudGJveFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9TZW50Ym94UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0Y7QUFDdEYsd0VBQXFFO0FBR3JFLE1BQWEsV0FBWSxTQUFRLGlDQUFlO0lBQWhEO1FBRUksc0JBQXNCOztRQUVkLG1CQUFjLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUMsQ0FBQztRQUMvSCxzQkFBaUIsR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkZBQTJGLENBQUMsQ0FBQyxDQUFDO1FBQ2pKLHNCQUFpQixHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDLENBQUM7SUF3QjVJLENBQUM7SUFyQlksWUFBWTs7WUFFckIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFWSxlQUFlOztZQUd4QixtREFBbUQ7WUFDbkQsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdDLENBQUM7S0FBQTtJQUVZLGNBQWM7O1lBR25CLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNoRCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUVKO0FBOUJMLGtDQThCSyJ9