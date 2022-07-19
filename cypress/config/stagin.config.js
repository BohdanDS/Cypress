const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    name: "development",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
