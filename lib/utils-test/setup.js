/* eslint-disable import/no-extraneous-dependencies */
// ========================================================
// Test Env Setup (loaded in npm script `test`)
// ========================================================

// Requiring register causes Node to compile any required files on the fly w/ Babel
require('babel-register')
const jsdom = require('jsdom').jsdom

const exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
