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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50Q2FsZW5kYXJTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvTW9tZW50Q2FsZW5kYXJTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLDJDQUFpRDtBQUdqRCxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUUsRUFBRTtJQUNyQixVQUFVLENBQUMsR0FBTyxFQUFFO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNqRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDSCxTQUFTLENBQUMsR0FBUSxFQUFFO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBRSxzQkFBc0IsRUFBRSxHQUFRLEVBQUU7UUFDbEMsSUFBSSxJQUFJLEdBQUUsSUFBQSxnQkFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFFLHVCQUF1QixFQUFFLEdBQU8sRUFBRTtJQUV2QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQVEsRUFBRTtJQUV4QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0gsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLEdBQVEsRUFBRTtJQUV2RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==