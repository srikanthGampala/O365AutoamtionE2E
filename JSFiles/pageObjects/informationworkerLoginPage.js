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
exports.informationworkerLoginPage = void 0;
const protractor_1 = require("protractor");
const commonFunctions_1 = require("../MainBase/common/commonFunctions");
class informationworkerLoginPage extends commonFunctions_1.commonFunctions {
    constructor() {
        super(...arguments);
        this.ClickOnQuote = (0, protractor_1.element)(protractor_1.by.xpath("//span[@role='link']"));
        this.ClickOnToggleButton = (0, protractor_1.element)(protractor_1.by.xpath("//span[@role='switch']"));
        this.ClickOnContinue = (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='ep-button-content']"));
        this.InputServerValue = (0, protractor_1.element)(protractor_1.by.xpath("//input[@id='input_serverValue']"));
        this.UserName = (0, protractor_1.element)(protractor_1.by.xpath("//input[@id='input_username']"));
        this.Password = (0, protractor_1.element)(protractor_1.by.xpath("//input[@id='input_password']"));
        this.ClickOnFirstEmail = (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_3qXS6Uo8WFxax_lDWr_1a_']/div[2]"));
    }
    ClickFirstEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnFirstEmail);
        });
    }
    ClickQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnQuote);
        });
    }
    ClickToggleBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnToggleButton);
        });
    }
    ClickContinueBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnContinue);
        });
    }
    EnterServerDetails(servername) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.InputServerValue, servername);
        });
    }
    EnterUserName(Uname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type(this.UserName, Uname);
        });
    }
    EnterPassword(Pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type(this.Password, Pwd);
        });
    }
}
exports.informationworkerLoginPage = informationworkerLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYXRpb253b3JrZXJMb2dpblBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9pbmZvcm1hdGlvbndvcmtlckxvZ2luUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0Y7QUFDdEYsd0VBQXFFO0FBR3JFLE1BQWEsMEJBQTJCLFNBQVEsaUNBQWU7SUFBL0Q7O1FBSVksaUJBQVksR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLHdCQUFtQixHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDaEYsb0JBQWUsR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLHFCQUFnQixHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDdkYsYUFBUSxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDNUUsYUFBUSxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDNUUsc0JBQWlCLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztJQXlDakgsQ0FBQztJQXZDZSxlQUFlOztZQUV4QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBQ1ksVUFBVTs7WUFFbkIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFWSxjQUFjOztZQUd2QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBRVksZ0JBQWdCOztZQUdyQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUdRLGtCQUFrQixDQUFDLFVBQWtCOztZQUU5QyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtJQUVZLGFBQWEsQ0FBQyxLQUFhOztZQUVwQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFDWSxhQUFhLENBQUMsR0FBVzs7WUFFbEMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0NBS0g7QUFuREYsZ0VBbURFIn0=