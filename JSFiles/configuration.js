"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect:true,
    // Capabilities to be passed to the webdriver instance.
    //   seleniumArgs:['-Dwebdriver.edge.driver=C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\MicrosoftWebDriver.exe'],
    capabilities: {
        browserName: 'chrome',
        // shardTestFiles: true,
        // maxInstances:2
        //'browserName': "MicrosoftEdge"
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['outlookLoginSpec.js'],
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        }));
    },
    framework: 'jasmine',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0NBQWdDO0FBQ2hDLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDeEUsMkNBQTJDO0FBQ2hDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxlQUFlLEVBQUUsOEJBQThCO0lBQy9DLHFCQUFxQjtJQUNyQix1REFBdUQ7SUFDekQsbUxBQW1MO0lBRWhMLFlBQVksRUFDWDtRQUNFLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLHdCQUF3QjtRQUN4QixpQkFBaUI7UUFDakIsZ0NBQWdDO0tBQ2pDO0lBQ0gsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUM7SUFFOUIsU0FBUyxFQUFFO1FBQ1Qsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGNBQWMsQ0FBQztZQUM5QyxVQUFVLEVBQUUsZ0JBQWdCO1NBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FDMUIsSUFBSSxvQkFBb0IsQ0FBQztZQUN2QixRQUFRLEVBQUUsb0JBQW9CO1NBQy9CLENBQUMsQ0FDSCxDQUFDO0lBRUwsQ0FBQztJQUNELFNBQVMsRUFBRSxTQUFTO0lBQ25CLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDakIsVUFBVSxFQUFFLElBQUk7UUFDaEIsc0JBQXNCLEVBQUMsS0FBSztLQUMzQjtDQUNGLENBQUMifQ==