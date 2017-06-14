var path = require('path');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e-tests/specs/**/*.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function () {
    // Add JUnit XML reporter - useful for CI
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './test_out',
      filePrefix: 'e2e'
    }));

    // Set the browser size
    browser.driver.manage().window().setSize(1024, 768);
  }
};
