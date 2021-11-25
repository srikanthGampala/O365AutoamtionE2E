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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const protractor_1 = require("protractor");
describe('calendar', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://letcode.in/forms');
        yield protractor_1.browser.manage().timeouts().implicitlyWait(10000);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(3000);
    }));
    // it ('Select tomorrow date', async ()=>{
    //     let tomo= moment().add(3, 'day').format('DD');
    //     await element(by.buttonText(tomo)).click();
    // });
    // it ('Select next week date', async()=>{
    //     let tomo= moment().add(6, 'day').format('DD');
    //     await element(by.buttonText(tomo)).click();
    // })
    xit('Select next month data', () => __awaiter(void 0, void 0, void 0, function* () {
        let nextMonth = (0, moment_1.default)().add(30, 'day').format('DD MMM');
        console.log(nextMonth);
        let date = nextMonth.split(' ')[0];
        console.log(date);
        let month = nextMonth.split(' ')[1];
        console.log(month);
        yield (0, protractor_1.$)('div.datepicker-nav-month').click();
        yield (0, protractor_1.element)(protractor_1.by.xpath(`//div[text()='${month}']`)).click();
        yield (0, protractor_1.element)(protractor_1.by.buttonText(date)).click();
    }));
    xit('Select previous 20 days & next 10 days', () => __awaiter(void 0, void 0, void 0, function* () {
        let nextMonth = (0, moment_1.default)().add(-30, 'day').format('DD MMM');
        console.log(nextMonth);
        let date = nextMonth.split(' ')[0];
        console.log(date);
        let month = nextMonth.split(' ')[1];
        console.log(month);
        yield (0, protractor_1.$)('input.is-datetimepicker-range').click();
        yield (0, protractor_1.element)(protractor_1.by.css("div[class='datepicker is-active'] div[class='datepicker-nav-month']")).click();
        yield protractor_1.element.all(protractor_1.by.xpath(`//div[text()='${month}']`)).last().click();
        yield protractor_1.element.all(protractor_1.by.buttonText(date)).last().click();
        nextMonth = (0, moment_1.default)().add(30, 'day').format('DD MMM');
        console.log(nextMonth);
        date = nextMonth.split(' ')[0];
        console.log(date);
        month = nextMonth.split(' ')[1];
        console.log(month);
        // await $('input.is-datetimepicker-range').click();
        yield (0, protractor_1.element)(protractor_1.by.css("div[class='datepicker is-active'] div[class='datepicker-nav-month']")).click();
        yield protractor_1.element.all(protractor_1.by.xpath(`//div[text()='${month}']`)).last().click();
        yield protractor_1.element.all(protractor_1.by.buttonText(date)).last().click();
    }));
    it('Select next month data', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, protractor_1.$)("#Date").click();
        // let nextMonth =moment().add(30,'day').format('DD MMM');
        // console.log(nextMonth);
        // let date =nextMonth.split(' ')[0]
        // console.log(date);
        // let month =nextMonth.split(' ')[1]
        // console.log(month);
        // await $('div.datepicker-nav-month').click();
        // await element(by.xpath(`//div[text()='${month}']`)).click();
        // await element(by.buttonText(date)).click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50Q2FsZW5kYXJTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vTW9tZW50Q2FsZW5kYXJTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLDJDQUFvRDtBQUdwRCxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUUsRUFBRTtJQUNyQixVQUFVLENBQUMsR0FBTyxFQUFFO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUM5QyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDSCxTQUFTLENBQUMsR0FBUSxFQUFFO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLDBDQUEwQztJQUMxQyxxREFBcUQ7SUFDckQsa0RBQWtEO0lBQ2xELE1BQU07SUFFTiwwQ0FBMEM7SUFDMUMscURBQXFEO0lBQ3JELGtEQUFrRDtJQUNsRCxLQUFLO0lBQ0wsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQVEsRUFBRTtRQUNwQyxJQUFJLFNBQVMsR0FBRSxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLEtBQUssR0FBRSxTQUFTLENBQUMsS0FBSyxD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