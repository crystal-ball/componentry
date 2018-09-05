/* eslint-env node */
module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverageFrom: ['src/**/*.js'],
  testURL: 'http://localhost',
  setupFiles: ['raf/polyfill', './config/enzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
