/* eslint-env node */
module.exports = {
  verbose: true,
  collectCoverageFrom: ['lib/**/*.{js,jsx}'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  setupFiles: ['raf/polyfill', './config/enzyme.js'],
  moduleFileExtensions: ['js', 'jsx']
}
