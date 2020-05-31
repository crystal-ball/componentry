/**
 * Post framework setup runs immediately after framework setup
 */

// Setup custom jest matchers to test the state of the DOM
// https://github.com/gnapse/jest-dom
import '@testing-library/jest-dom/extend-expect' // eslint-disable-line -- Sets up Jest matchers
