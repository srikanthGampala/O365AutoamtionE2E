"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationform = void 0;
const protractor_1 = require("protractor");
class registrationform {
    constructor() {
        this.FirstName = (0, protractor_1.element)(protractor_1.by.xpath("//fieldset[@class='fieldset']//input[@name='name']"));
        this.LastName = (0, protractor_1.element)(protractor_1.by.xpath("//p[2]//input[1]"));
        this.MartialStatus = protractor_1.element.all(protractor_1.by.xpath("//fieldset[2]//div[1]/label"));
        this.hobby = protractor_1.element.all(protractor_1.by.xpath("//fieldset[3]//div[1]/label"));
        this.country = (0, protractor_1.element)(protractor_1.by.xpath("(//select)[1]"));
        this.countryvalue = (0, protractor_1.element)(protractor_1.by.css("option[value='India']"));
        this.DOBMonth = (0, protractor_1.element)(protractor_1.by.xpath("(//select)[2]"));
        this.DOBMonthvalue = (0, protractor_1.element)(protractor_1.by.css("option[value='1']"));
        this.username = (0, protractor_1.element)(protractor_1.by.xpath("//fieldset[@class='fieldset']//input[@name='username']"));
        this.DOBDay = (0, protractor_1.element)(protractor_1.by.xpath("(//select)[3]"));
        this.DOBdayvalue = (0, protractor_1.element)(protractor_1.by.xpath("(//option[@value='1'][normalize-space()='1'])[2]"));
        this.DOBYear = (0, protractor_1.element)(protractor_1.by.xpath("(//select)[4]"));
        this.DOBYearvalue = (0, protractor_1.element)(protractor_1.by.css("option[value='2014']"));
        this.AboutYourself = (0, protractor_1.element)(protractor_1.by.xpath("//form[@id='register_form']//fieldset//textarea"));
        this.password = (0, protractor_1.element)(protractor_1.by.css("fieldset[class='fieldset'] input[name='password']"));
        this.confirmpassword = (0, protractor_1.element)(protractor_1.by.css("input[name='c_password']"));
        this.choosefile = (0, protractor_1.element)(protractor_1.by.xpath("//input[@type='file']"));
        this.phonenumber = (0, protractor_1.element)(protractor_1.by.css("fieldset[class='fieldset'] input[name='phone']"));
        this.email = (0, protractor_1.element)(protractor_1.by.xpath("//fieldset[@class='fieldset']//input[@name='email']"));
        this.submitbuton = (0, protractor_1.element)(protractor_1.by.xpath("//input[@value='submit']"));
        //select dropdown= new Select(staticDropdown);
        // this.LoginUserCount=element.all(by.css("ul[class='ng-scope']"));
        // this.ExistinguserLogin=element(by.model("vm.username"));
        // this.ExistingUserPwd=element(by.model("vm.password"));
    }
}
exports.registrationform = registrationform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3JlZ2lzdHJhdGlvbmZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTJFO0FBRTNFLE1BQWEsZ0JBQWdCO0lBd0J6QjtRQUlJLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEtBQUssR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsT0FBTyxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFFL0QsOENBQThDO1FBRTlDLG1FQUFtRTtRQUNuRSwyREFBMkQ7UUFDM0QseURBQXlEO0lBQzdELENBQUM7Q0FFSjtBQXhERCw0Q0F3REMifQ==