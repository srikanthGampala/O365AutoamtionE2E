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
exports.AddCustoimerModule = void 0;
const protractor_1 = require("protractor");
const commonFunctions_1 = require("../MainBase/common/commonFunctions");
class AddCustoimerModule extends commonFunctions_1.commonFunctions {
    constructor() {
        super(...arguments);
        //Banking page elments
        this.header = (0, protractor_1.element)(protractor_1.by.css("strong.mainHeading"));
        this.ManagerLoginBtn = (0, protractor_1.element)(protractor_1.by.buttonText("Bank Manager Login"));
        this.MainAddCustomerBtn = (0, protractor_1.element)(protractor_1.by.buttonText("Add Customer"));
        this.FirstNameTxt = (0, protractor_1.element)(protractor_1.by.model("fName"));
        this.LastNameTxt = (0, protractor_1.element)(protractor_1.by.model("lName"));
        this.PostalCodeTxt = (0, protractor_1.element)(protractor_1.by.model("postCd"));
        this.addCustomerBtn = (0, protractor_1.element)(protractor_1.by.css("button.btn.btn-default"));
        // public async addingCustomer()
        // {
        //     this.click(await this.MainAddCustomerBtn);
        //     this.type (this.FirstNameTxt,"sri");
        //     this.type (this.LastNameTxt,"kanth");
        //     this.type (this.PostalCodeTxt,"500074");
        //     this.click(this.addCustomerBtn);
        //     let alertMsg= await this.getTextFromAlert();
        //     console.log("The alerst Message is: " + alertMsg);
        //     this.acceptAlert();
        //     console.log("custoimer added successfully");
        // }
    }
    // Banking page methods starts
    validateHeading() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.header;
            this.assertText(yield text.getText(), "XYZ Bank");
            console.log("Title:" + (yield text.getText()) + " is validated successfully");
        });
    }
    // 
    bankmanagerLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            this.click(this.ManagerLoginBtn);
        });
    }
    clickMainAddcustomerBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.MainAddCustomerBtn);
        });
    }
    enterFirstName(fname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.FirstNameTxt, fname);
        });
    }
    lastName(lname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.LastNameTxt, lname);
        });
    }
    postalcode(pcode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.PostalCodeTxt, pcode);
        });
    }
    clickaddCustomer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.addCustomerBtn);
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
exports.AddCustoimerModule = AddCustoimerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ3VzdG9pbWVyTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvQWRkQ3VzdG9pbWVyTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5RDtBQUN6RCx3RUFBcUU7QUFFckUsTUFBYSxrQkFBbUIsU0FBUSxpQ0FBZTtJQUF2RDs7UUFFSSxzQkFBc0I7UUFDYixXQUFNLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUM5RCxvQkFBZSxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0UsdUJBQWtCLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsaUJBQVksR0FBZSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3RELGdCQUFXLEdBQWdCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdEQsa0JBQWEsR0FBZ0IsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6RCxtQkFBYyxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUE7UUE2QzNFLGdDQUFnQztRQUNyQyxJQUFJO1FBQ0osaURBQWlEO1FBQ2pELDJDQUEyQztRQUMzQyw0Q0FBNEM7UUFDNUMsK0NBQStDO1FBQy9DLHVDQUF1QztRQUN2QyxtREFBbUQ7UUFDbkQseURBQXlEO1FBQ3pELDBCQUEwQjtRQUMxQixtREFBbUQ7UUFDbkQsSUFBSTtJQUNSLENBQUM7SUF2REcsOEJBQThCO0lBQ2pCLGVBQWU7O1lBRXhCLElBQUksSUFBSSxHQUFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsQ0FBRSxDQUFBO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUUsUUFBUSxJQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBLEdBQUcsNEJBQTRCLENBQUMsQ0FBQztRQUNqRixDQUFDO0tBQUE7SUFFRCxHQUFHO0lBQ1UsZ0JBQWdCOztZQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyx1QkFBdUI7O1lBQ3pCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU5QyxDQUFDO0tBQUE7SUFDSyxjQUFjLENBQUMsS0FBYTs7WUFFOUIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBQ0ssUUFBUSxDQUFDLEtBQWE7O1lBRXhCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUNLLFVBQVUsQ0FBQyxLQUFhOztZQUUxQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFDSyxnQkFBZ0I7O1lBRW5CLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBQ0ssUUFBUTs7WUFFVixJQUFJLFFBQVEsR0FBRSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBQ00sY0FBYzs7WUFFaEIsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQztLQUFBO0NBYUw7QUFsRUQsZ0RBa0VDIn0=