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
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const commonFunctions_1 = require("../MainBase/common/commonFunctions");
class LoginPage extends commonFunctions_1.commonFunctions {
    constructor() {
        //Banking page elments
        super(...arguments);
        this.EnterEmail = (0, protractor_1.element)(protractor_1.by.name("loginfmt"));
        this.ClickOnNext = (0, protractor_1.element)(protractor_1.by.css("#idSIButton9"));
        this.SelectSonata = (0, protractor_1.element)(protractor_1.by.xpath("//span[normalize-space()='Sonata Software']"));
        this.EnterPassword = (0, protractor_1.element)(protractor_1.by.name("Password"));
        this.ClickOnSigninBtn = (0, protractor_1.element)(protractor_1.by.xpath("//span[@id='submitButton']"));
        this.ClickOnYesBtn = (0, protractor_1.element)(protractor_1.by.id("idSIButton9"));
    }
    //private clickonTableFirstColumn:ElementFinder= element(by.xpath("//thead//td[1]"));
    //public  sortedData: any;
    // Banking page methods starts
    SubmitEmail(username) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.EnterEmail, username);
        });
    }
    NextBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnNext);
        });
    }
    clickOnSonata() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.SelectSonata);
        });
    }
    fillPassWord(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.EnterPassword, password);
        });
    }
    SigninBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnSigninBtn);
        });
    }
    ClickOnYes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnYesBtn);
        });
    }
    validateTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            let Title = protractor_1.browser.getTitle();
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzRjtBQUN0Rix3RUFBcUU7QUFFckUsTUFBYSxTQUFVLFNBQVEsaUNBQWU7SUFBOUM7UUFFSSxzQkFBc0I7O1FBRWQsZUFBVSxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hELGdCQUFXLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsaUJBQVksR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDO1FBQzlGLGtCQUFhLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0QscUJBQWdCLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNqRixrQkFBYSxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBMEN4RSxDQUFDO0lBekNHLHFGQUFxRjtJQUNyRiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBRWpCLFdBQVcsQ0FBQyxRQUFnQjs7WUFFckMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRVksT0FBTzs7WUFHaEIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7SUFFWSxhQUFhOztZQUdsQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUNRLFlBQVksQ0FBQyxRQUFnQjs7WUFFbEMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUQsQ0FBQztLQUFBO0lBRVksU0FBUzs7WUFFbEIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUVZLFVBQVU7O1lBRW5CLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBQ0ssYUFBYTs7WUFDZixJQUFJLEtBQUssR0FBRSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBSWxDLENBQUM7S0FBQTtDQUNKO0FBbkRELDhCQW1EQyJ9