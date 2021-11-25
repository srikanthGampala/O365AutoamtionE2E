"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formfilling = void 0;
const protractor_1 = require("protractor");
class formfilling {
    constructor() {
        this.logoutbutton = (0, protractor_1.element)(protractor_1.by.css("a[href='#/login']"));
        // this.LoginUserCount=element.all(by.css("ul[class='ng-scope']"));
        // this.ExistinguserLogin=element(by.model("vm.username"));
        // this.ExistingUserPwd=element(by.model("vm.password"));
    }
}
exports.formfilling = formfilling;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWZpbGxpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9mb3JtZmlsbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMkU7QUFFM0UsTUFBYSxXQUFXO0lBT3BCO1FBSUksSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDdkQsbUVBQW1FO1FBQ25FLDJEQUEyRDtRQUMzRCx5REFBeUQ7SUFDN0QsQ0FBQztDQUVKO0FBakJELGtDQWlCQyJ9