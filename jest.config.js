/* eslint-env node */
module.exports = {
  // Provides nice test output of what's being run
  verbose: true,

  // OS notifications of test results
  notify: process.env.JEST_NOTIFY,

  // Test coverage can be enforced with a coverageThreshold
  collectCoverage: process.env.COLLECT_COVERAGE,
  collectCoverageFrom: ['src/**/*.js'],

  // Pre/Post test framework setup configs
  setupFilesAfterEnv: ['<rootDir>/src/utils-test/jest-extend.js'],
}
