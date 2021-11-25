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
exports.AddPluginPage = void 0;
const protractor_1 = require("protractor");
const commonFunctions_1 = require("../MainBase/common/commonFunctions");
class AddPluginPage extends commonFunctions_1.commonFunctions {
    constructor() {
        //Banking page elments
        super(...arguments);
        this.ClickOnFirstEmail = (0, protractor_1.element)(protractor_1.by.xpath("//div[@class='_3qXS6Uo8WFxax_lDWr_1a_']/div[2]"));
        this.ClickEllipse = (0, protractor_1.element)(protractor_1.by.xpath("//button[@id='read_ellipses_menu']"));
        this.ClickOnAddins = (0, protractor_1.element)(protractor_1.by.xpath("//span[normalize-space()='Get Add-ins']"));
        this.ClickOnMyAddins = (0, protractor_1.element)(protractor_1.by.id("MyAddins"));
        this.ClickOnCustomAddinDropDown = (0, protractor_1.element)(protractor_1.by.id("PrivateAddInDropdownLabel"));
        // public async AddFromFile(){
        //     await this.click(this.AddOnFromFile)
        // }   
    }
    //private AddOnFromFile: ElementFinder= element(by.id("idSIButton9"));
    //private clickonTableFirstColumn:ElementFinder= element(by.xpath("//thead//td[1]"));
    //public  sortedData: any;
    // Banking page methods starts
    ClickFirstEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnFirstEmail);
        });
    }
    ClickOnEllipse() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickEllipse);
        });
    }
    ClickGetAddins() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnAddins);
        });
    }
    ClickMyAddins() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnMyAddins);
        });
    }
    ClickCustomAddinDropDown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.ClickOnCustomAddinDropDown);
        });
    }
}
exports.AddPluginPage = AddPluginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUGx1Z2luUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0FkZFBsdWdpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNGO0FBQ3RGLHdFQUFxRTtBQUVyRSxNQUFhLGFBQWMsU0FBUSxpQ0FBZTtJQUFsRDtRQUVJLHNCQUFzQjs7UUFFZCxzQkFBaUIsR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQ3RHLGlCQUFZLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUNyRixrQkFBYSxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDM0Ysb0JBQWUsR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzRCwrQkFBMEIsR0FBaUIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBaUMvRiw4QkFBOEI7UUFDOUIsMkNBQTJDO1FBSTNDLE9BQU87SUFDWCxDQUFDO0lBdENHLHNFQUFzRTtJQUN0RSxxRkFBcUY7SUFDckYsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUVqQixlQUFlOztZQUV4QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBRVksY0FBYzs7WUFHdkIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFWSxjQUFjOztZQUduQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUdRLGFBQWE7O1lBRXRCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRVksd0JBQXdCOztZQUVqQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0NBT0o7QUEvQ0Qsc0NBK0NDIn0=