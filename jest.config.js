/* eslint-env node */

const { JEST_NOTIFY, ENABLE_JEST_NOTIFICATIONS } = process.env

module.exports = {
  // Provides nice test output of what's being run
  verbose: true,

  // OS notifications of test results in watch mode only
  // 😢 https://github.com/facebook/jest/issues/8036
  notify: Boolean(JEST_NOTIFY) && Boolean(ENABLE_JEST_NOTIFICATIONS),

  // Test coverage can be enforced with a coverageThreshold
  collectCoverage: true,
  coverageReporters: ['text-summary'],
  collectCoverageFrom: ['src/**/*.js'],

  // Pre/Post test framework setup configs
  setupFilesAfterEnv: ['<rootDir>/src/utils-test/jest-extend.js'],
}
