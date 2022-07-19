const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f9tq69",
  chromeWebSecurity: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  env: {
    first_name: "Sahra",
    webdriverunivHomePage: "http://webdriveruniversity.com",
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.

    baseUrl: "https://webdriveruniversity.com",
    setupNodeEvents(on, config) {
      return require("./Cypress/plugins/index.js")(on, config);
    },
  },
});
