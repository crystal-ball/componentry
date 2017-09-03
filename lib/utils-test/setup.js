/* eslint-disable import/no-extraneous-dependencies */
// ========================================================
// Test Env Setup (loaded in npm script `test`)
// ========================================================

// Requiring register causes Node to compile any required files on the fly w/ Babel
require('babel-register')
const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop))
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js'
}
copyProps(window, global)
