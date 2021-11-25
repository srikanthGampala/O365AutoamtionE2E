"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.way2automationLogin = void 0;
const protractor_1 = require("protractor");
class way2automationLogin {
    constructor() {
        this.UserName = (0, protractor_1.element)(protractor_1.by.model("Auth.user.name"));
        this.password = (0, protractor_1.element)(protractor_1.by.model("Auth.user.password"));
        this.UserDescription = (0, protractor_1.element)(protractor_1.by.model('model[options.key]'));
        this.LoginButton = (0, protractor_1.element)(protractor_1.by.buttonText("Login"));
        this.AfterLoginMessage = (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='ng-scope']/p"));
        this.LoginFailure = (0, protractor_1.element)(protractor_1.by.css("div.alert.alert-danger.ng-binding.ng-scope"));
        this.usernametootltip = (0, protractor_1.element)(protractor_1.by.css("div[ng-message='minlength, maxlength']"));
        this.logoutbutton = (0, protractor_1.element)(protractor_1.by.css("a[href='#/login']"));
        // this.LoginUserCount=element.all(by.css("ul[class='ng-scope']"));
        // this.ExistinguserLogin=element(by.model("vm.username"));
        // this.ExistingUserPwd=element(by.model("vm.password"));
    }
}
exports.way2automationLogin = way2automationLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F5MmF1dG9tYXRpb25Mb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3dheTJhdXRvbWF0aW9uTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTJFO0FBRzNFLE1BQWEsbUJBQW1CO0lBYzVCO1FBR0ksSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGdCQUFnQixHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsWUFBWSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN2RCxtRUFBbUU7UUFDbkUsMkRBQTJEO1FBQzNELHlEQUF5RDtJQUM3RCxDQUFDO0NBRUo7QUE5QkQsa0RBOEJDIn0=