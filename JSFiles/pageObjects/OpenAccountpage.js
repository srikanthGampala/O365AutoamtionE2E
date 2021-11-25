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
exports.OpenAccountpage = void 0;
const protractor_1 = require("protractor");
const commonFunctions_1 = require("../MainBase/common/commonFunctions");
class OpenAccountpage extends commonFunctions_1.commonFunctions {
    constructor() {
        //Banking page elments
        super(...arguments);
        this.openAccountBtn = (0, protractor_1.element)(protractor_1.by.buttonText("Open Account"));
        this.CustomerDrpdownBtn = (0, protractor_1.element)(protractor_1.by.id("userSelect"));
        this.SelcetnamefromDrpDown = (0, protractor_1.element)(protractor_1.by.css("option[value='6']"));
        this.CurencyDrpDown = (0, protractor_1.element)(protractor_1.by.id("currency"));
        this.SelectCurrency = (0, protractor_1.element)(protractor_1.by.css("option[value='Rupee']"));
        this.processBtn = (0, protractor_1.element)(protractor_1.by.buttonText("Process"));
    }
    // Banking page methods starts
    // 
    clickOnOpenAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.click(this.openAccountBtn);
        });
    }
    clickOnCustomerDrpDown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.CustomerDrpdownBtn);
        });
    }
    validateAddedUserName() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.SelcetnamefromDrpDown;
            this.assertText(yield text.getText(), "sri Kanth");
            console.log("Title:" + (yield text.getText()) + " is validated successfully");
        });
    }
    clickOnAddedUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.SelcetnamefromDrpDown);
        });
    }
    clickOnCurrency() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.CurencyDrpDown);
        });
    }
    selectCurrency() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.SelectCurrency);
        });
    }
    clickOnProcessBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.processBtn);
        });
    }
    alertmsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let alertmsg = yield this.getTextFromAlert();
            console.log("The alerst Message is: " + alertmsg);
        });
    }
    acceptAlertTxt() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.acceptAlert();
        });
    }
}
exports.OpenAccountpage = OpenAccountpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlbkFjY291bnRwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvT3BlbkFjY291bnRwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5RDtBQUN6RCx3RUFBcUU7QUFFckUsTUFBYSxlQUFnQixTQUFRLGlDQUFlO0lBQXBEO1FBRUksc0JBQXNCOztRQUVkLG1CQUFjLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsdUJBQWtCLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDaEUsMEJBQXFCLEdBQWUsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQ3hFLG1CQUFjLEdBQWdCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDekQsbUJBQWMsR0FBZ0IsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLGVBQVUsR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQWtEekUsQ0FBQztJQWhERyw4QkFBOEI7SUFHOUIsR0FBRztJQUNVLGtCQUFrQjs7WUFFM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRUssc0JBQXNCOztZQUN4QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUMsQ0FBQztLQUFBO0lBRUsscUJBQXFCOztZQUN2QixJQUFJLElBQUksR0FBRSxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFdBQVcsQ0FBRSxDQUFBO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUUsUUFBUSxJQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBLEdBQUcsNEJBQTRCLENBQUMsQ0FBQztRQUVqRixDQUFDO0tBQUE7SUFFSyxnQkFBZ0I7O1lBRWxCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNqRCxDQUFDO0tBQUE7SUFDSyxlQUFlOztZQUVqQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUNLLGNBQWM7O1lBRWhCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFMUMsQ0FBQztLQUFBO0lBQ0ssaUJBQWlCOztZQUVwQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUNLLFFBQVE7O1lBRVYsSUFBSSxRQUFRLEdBQUUsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUNNLGNBQWM7O1lBRWhCLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUM7S0FBQTtDQUVMO0FBM0RELDBDQTJEQyJ9