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
exports.ProtractorBase = void 0;
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class ProtractorBase {
    constructor() {
        this.ec = protractor_1.browser.ExpectedConditions;
        this.timeOut = 20000;
    }
    /**
     * @description This function is used to do the click action
     * @param element- The element on which click action to be perfomed
     */
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.elementToBeClickable(element), this.timeOut, "Failed to click the element");
            element.click();
        });
    }
    /**
     * @description This function will append the text
     * @param element pass the element locator
     * @param testData data to be typed on the element
     */
    type(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.sendKeys(testData);
        });
    }
    /**
     * @description This function will clear the existing value and then type the data
     * @param element  Pass the element locator
     * @param testData Data to be typed on the element
     */
    clearAndType(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.clear();
            yield element.sendKeys(testData);
        });
    }
    assertText(element, expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            let actualText = yield element.getText();
            yield expect(actualText.trim()).toBe(expectedText);
        });
    }
    visibilityOf(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "Element is not visible");
        });
    }
    assertTrue(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            expect(yield element.isDisplayed()).toBe(true);
        });
    }
    assertFalse(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            expect(yield element.isDisplayed()).toBe(false);
        });
    }
    acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).accept();
        });
    }
    dismissAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).dismiss();
        });
    }
    typeInAlert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).sendKeys(data);
        });
    }
    waitForAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
        });
    }
    getTextFromAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            let alertText = yield (yield protractor_1.browser.switchTo().alert()).getText();
            return alertText;
        });
    }
    switchToFrame(frameNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.wait(this.ec.presenceOf((0, protractor_1.element)(protractor_1.by.tagName("iframe"))), 5000);
            yield protractor_1.browser.switchTo().frame(frameNumber);
        });
    }
    typeAndTab(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            let capabilities = yield protractor_1.browser.getCapabilities();
            let platform = capabilities.get('platform');
            yield this.visibilityOf(element);
            if (platform === "Mac OS x") {
                yield element.sendKeys(testData, ptor_1.protractor.Key.RETURN);
            }
            else {
                yield element.sendKeys(testData, ptor_1.protractor.Key.ENTER);
            }
        });
    }
    mouseHoverAndClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield protractor_1.browser.actions().mouseMove(yield element.getWebElement()).click().perform();
        });
    }
    moveToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield protractor_1.browser.actions().mouseMove(yield element.getWebElement()).perform();
        });
    }
    validateTitleOfThePage(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            let actualText = yield protractor_1.browser.getTitle();
            console.log("The Title of the page is:" + actualText);
            yield expect(actualText.trim()).toBe(expectedText);
        });
    }
}
exports.ProtractorBase = ProtractorBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9NYWluQmFzZS9iYXNlL1Byb3RyYWN0b3JCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErRjtBQUMvRixnREFBbUQ7QUFHbkQsTUFBYSxjQUFjO0lBQTNCO1FBRVksT0FBRSxHQUFnQyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQzdELFlBQU8sR0FBQyxLQUFLLENBQUM7SUFnSDFCLENBQUM7SUE5R0c7OztPQUdHO0lBRVUsS0FBSyxDQUFFLE9BQXNCOztZQUN0QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3RHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixDQUFDO0tBQUE7SUFDRDs7OztPQUlHO0lBQ1UsSUFBSSxDQUFFLE9BQXNCLEVBQUMsUUFBZ0I7O1lBQ3RELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVqQyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsQ0FBQztLQUFBO0lBQ0Q7Ozs7T0FJRztJQUNVLFlBQVksQ0FBRSxPQUFzQixFQUFDLFFBQWdCOztZQUM5RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxPQUFzQixFQUFFLFlBQW9COztZQUNoRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFB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