const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://itera-qa.azurewebsites.net",
    //defaultCommandTimeout: 20000,
    screenshotOnRunFailure: true,
    video: false,
    chromeWebSecurity: false,
    //supportFile: "cypress/support/component.js"
  },
  env: {
    baseUrl: "https://itera-qa.azurewebsites.net"
  }
});
