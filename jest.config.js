/* eslint-env node */

const { ENABLE_JEST_NOTIFICATIONS } = process.env

module.exports = {
  // Provides nice test output of what's being run
  verbose: true,

  // OS notifications of test results is an opt in for funesies
  notify: Boolean(ENABLE_JEST_NOTIFICATIONS),

  // Test coverage can be enforced with a coverageThreshold
  collectCoverage: true,
  coverageReporters: ['text-summary'],
  collectCoverageFrom: ['src/**/*.js', '!**/*.stories.js'],

  // Pre/Post test framework setup configs
  setupFilesAfterEnv: ['<rootDir>/test/jest-extend.js'],
}
