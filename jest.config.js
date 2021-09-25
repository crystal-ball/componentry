'use strict'

const { ENABLE_JEST_NOTIFICATIONS } = process.env

module.exports = {
  testEnvironment: 'jsdom',

  // Provides nice test output of what's being run
  verbose: true,

  // OS notifications of test results is an opt in for funesies
  notify: Boolean(ENABLE_JEST_NOTIFICATIONS),

  // Test coverage can be enforced with a coverageThreshold
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.stories.js',
    '!src/storybook/**',
    '!src/test/**',
    '!src/{Media,Modal,Theme}/stories/**',
  ],

  // Pre/Post test framework setup configs
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-after-env-setup.js'],
}
