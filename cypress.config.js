const { defineConfig } = require("cypress");  // ✅ FIXED

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'reports',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',

    specPattern: "cypress/e2e/**/*.js",

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config);
    },
  },

  env: {
    URL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  }
});