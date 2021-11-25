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
        yield protractor_1.browser.get('https://letcode.in/calendar');
        yield protractor_1.browser.manage().timeouts().implicitlyWait(10000);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(3000);
    }));
    it('Select tomorrow date', () => __awaiter(void 0, void 0, void 0, function* () {
        let tomo = (0, moment_1.default)().add(3, 'day').format('DD');
        yield (0, protractor_1.element)(protractor_1.by.buttonText(tomo)).click;
    }));
    xit('Select next week date', () => __awaiter(void 0, void 0, void 0, function* () {
    }));
    xit('Select next month data', () => __awaiter(void 0, void 0, void 0, function* () {
    }));
    xit('Select previous 20 days & next 10 days', () => __awaiter(void 0, void 0, void 0, function* () {
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50Q2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Nb21lbnRDYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QiwyQ0FBaUQ7QUFHakQsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFFLEVBQUU7SUFDckIsVUFBVSxDQUFDLEdBQU8sRUFBRTtRQUNoQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDakQsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0gsU0FBUyxDQUFDLEdBQVEsRUFBRTtRQUNoQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUUsc0JBQXNCLEVBQUUsR0FBUSxFQUFFO1FBQ2xDLElBQUksSUFBSSxHQUFFLElBQUEsZ0JBQU0sR0FBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBRSx1QkFBdUIsRUFBRSxHQUFPLEVBQUU7SUFFdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFRLEVBQUU7SUFFeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNILEdBQUcsQ0FBQyx3Q0FBd0MsRUFBRSxHQUFRLEVBQUU7SUFFdkQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=