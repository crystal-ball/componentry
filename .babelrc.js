'use strict'

/**
 * @file Compilation configuration
 *
 * Library is compiled to two targets before publishing, a CommonJS version and
 * an ESModules version. Both are compiled to work across the maximum number of
 * active browsers using Browserslist "defaults" target
 * (https://github.com/browserslist/browserslist#best-practices).
 *
 * Polyfills are _not_ included in the compilation: There is no clear guidance
 * on whether they should be included and most libraries do not include them.
 * This is probably because most current frameworks, like Next.js and Create
 * React App, include their own set of sensible polyfills.
 */

const { BABEL_ENV } = process.env

const targets = BABEL_ENV === 'test' ? 'node 16' : 'defaults' // Testing runs in Node
const useESM = BABEL_ENV === 'browser'

module.exports = {
  // Base configs are used by ESLint babel parser
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: useESM ? false : 'commonjs',
        targets,
        exclude: [
          'transform-typeof-symbol', // https://github.com/facebook/create-react-app/issues/5277
        ],
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],

  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: useESM,
        version: '^7.17.0', // Default is 7.0, include current version for smaller bundle improvements
      },
    ],
  ],
}
