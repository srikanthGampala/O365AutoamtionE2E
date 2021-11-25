"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalsqaHomePage = void 0;
const protractor_1 = require("protractor");
class globalsqaHomePage {
    constructor() {
        this.registerButton = (0, protractor_1.element)(protractor_1.by.css("a.btn.btn-link"));
        this.FirstName = (0, protractor_1.element)(protractor_1.by.model("vm.user.firstName"));
        this.LastName = (0, protractor_1.element)(protractor_1.by.model("vm.user.lastName"));
        this.UserName = (0, protractor_1.element)(protractor_1.by.model("vm.user.username"));
        this.password = (0, protractor_1.element)(protractor_1.by.model("vm.user.password"));
        this.RegisterUser = (0, protractor_1.element)(protractor_1.by.cssContainingText('.btn.btn-primary', 'Register'));
        this.flashMessage = (0, protractor_1.element)(protractor_1.by.binding("flash.message"));
        this.LoginButton = (0, protractor_1.element)(protractor_1.by.buttonText("Login"));
        this.LoginMessage = (0, protractor_1.element)(protractor_1.by.css("p.ng-scope"));
        this.LoginUserCount = protractor_1.element.all(protractor_1.by.css("ul[class='ng-scope']"));
        this.ExistinguserLogin = (0, protractor_1.element)(protractor_1.by.model("vm.username"));
        this.ExistingUserPwd = (0, protractor_1.element)(protractor_1.by.model("vm.password"));
    }
}
exports.globalsqaHomePage = globalsqaHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsc3FhSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9nbG9iYWxzcWFIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMkU7QUFFM0UsTUFBYSxpQkFBaUI7SUFjMUI7UUFFSSxJQUFJLENBQUMsY0FBYyxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsWUFBWSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBRUo7QUE5QkQsOENBOEJDIn0=