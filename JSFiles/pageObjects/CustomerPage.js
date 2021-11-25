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
exports.CustomerPage = void 0;
const protractor_1 = require("protractor");
const commonFunctions_1 = require("../MainBase/common/commonFunctions");
class CustomerPage extends commonFunctions_1.commonFunctions {
    constructor() {
        //Banking page elments
        super(...arguments);
        this.CustomersBtn = (0, protractor_1.element)(protractor_1.by.buttonText("Customers"));
        this.SearchTxtBox = (0, protractor_1.element)(protractor_1.by.model("searchCustomer"));
        this.serachuserName = (0, protractor_1.element)(protractor_1.by.css("tbody td:nth-child(1)"));
        this.mytable = protractor_1.element.all(protractor_1.by.css('tbody'));
        this.allrows = this.mytable.$$("tr");
    }
    //private clickonTableFirstColumn:ElementFinder= element(by.xpath("//thead//td[1]"));
    //public  sortedData: any;
    // Banking page methods starts
    // 
    clickCustomersBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            this.click(this.CustomersBtn);
        });
    }
    searchTxtBoxMsg(SearchMsg) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                yield this.clearAndType(this.SearchTxtBox, SearchMsg);
            }
        });
    }
    validateSearch() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.serachuserName;
            this.assertText(yield text.getText(), "sri");
            console.log("Title:" + (yield text.getText()) + " is validated successfully");
        });
    }
    sortandVerifyTable() {
        return __awaiter(this, void 0, void 0, function* () {
            let myData = this.allrows.map((ele, index) => __awaiter(this, void 0, void 0, function* () {
                let data = ele.$$("td").get(0);
                return yield data.getText();
            }));
            let sortedData = (yield myData).sort().reverse();
            console.log("After sorting and reverse the array:" + sortedData);
            // await browser.sleep(1000);
            // element(by.xpath("//thead//td[1]")).click();
            // let aftersortedData= await this.allrows.map(async(ele, index)=>{
            //     let data= ele.$$("td").get(0);
            //     return await data.getText();
            // });
            // console.log("after ele sort click: " +  aftersortedData);
            // expect(sortedData).toEqual(aftersortedData);
        });
    }
}
exports.CustomerPage = CustomerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvQ3VzdG9tZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzRjtBQUN0Rix3RUFBcUU7QUFFckUsTUFBYSxZQUFhLFNBQVEsaUNBQWU7SUFBakQ7UUFFSSxzQkFBc0I7O1FBRWQsaUJBQVksR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqRSxpQkFBWSxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDakUsbUJBQWMsR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLFlBQU8sR0FBc0Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFELFlBQU8sR0FBc0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7SUE2QzlELENBQUM7SUE1Q0cscUZBQXFGO0lBQ3JGLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFHOUIsR0FBRztJQUNVLGlCQUFpQjs7WUFFMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLFNBQWlCOztZQUV2QztnQkFDSSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN6RDtRQUNELENBQUM7S0FBQTtJQUdLLGNBQWM7O1lBQ2hCLElBQUksSUFBSSxHQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssQ0FBRSxDQUFBO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUUsUUFBUSxJQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBLEdBQUcsNEJBQTRCLENBQUMsQ0FBQztRQUVqRixDQUFDO0tBQUE7SUFDSyxrQkFBa0I7O1lBRXBCLElBQUksTUFBTSxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQU0sR0FBRyxFQUFFLEtBQUssRUFBQyxFQUFFO2dCQUM1QyxJQUFJLElBQUksR0FBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxVQUFVLEdBQVMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDakUsNkJBQTZCO1lBQzdCLCtDQUErQztZQUMvQyxtRUFBbUU7WUFDbkUscUNBQXFDO1lBQ3JDLG1DQUFtQztZQUVuQyxNQUFNO1lBQ04sNERBQTREO1lBQzVELCtDQUErQztRQUVuRCxDQUFDO0tBQUE7Q0FDSjtBQXJERCxvQ0FxREMifQ==