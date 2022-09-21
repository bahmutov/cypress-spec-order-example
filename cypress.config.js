const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      config.specPattern = [
        'cypress/e2e/spec2.cy.js',
        'cypress/e2e/spec3.cy.js',
        'cypress/e2e/spec1.cy.js',
      ]
      // IMPORTANT: need to return the changed config
      // so Cypress knows about your changes
      return config
    },
  },
})
