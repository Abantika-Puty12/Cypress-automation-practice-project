const { defineConfig } = require("Cypress");


module.exports = defineConfig({
  video: true, 
  screenshotOnRunFailure: true,
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      // implement node event listeners here
    },
  },
});
