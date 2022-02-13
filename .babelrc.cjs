'use strict'

/* eslint-disable import/extensions */

module.exports = {
  // Base configs are used by ESLint babel parser
  presets: ['@babel/preset-react', '@babel/preset-typescript'],

  env: {
    /**
     * Test env mimics production, but uses commonjs modules because Jest
     * doesn't support ESModules and operates directly on source code.
     */
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          // https://github.com/babel/babel/issues/10261
          { version: require('@babel/helpers/package.json').version },
        ],
      ],
    },

    // Publish targets
    // ---------------------------------------------------------------------------

    // CommonJS - ES5 syntax with commonJS modules
    commonjs: {
      presets: [
        [
          '@babel/preset-env',
          {
            corejs: '3',
            modules: 'commonjs',
            targets: 'node 14',
            useBuiltIns: 'usage',
          },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        [
          '@babel/plugin-transform-runtime',

          {
            corejs: '3',
            helpers: true,
            regenerator: true,
            useESModules: false,
            // https://github.com/babel/babel/issues/10261
            version: '^7.17.0',
          },
        ],
      ],
    },
    // ESM - ES5 syntax with ESModules
    browser: {
      presets: [
        [
          '@babel/preset-env',
          {
            corejs: '3',
            modules: false,
            targets: 'defaults',
            useBuiltIns: 'usage',
          },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: '3',
            helpers: true,
            regenerator: true,
            version: '^7.17.0', // Include version for smaller bundle
          },
        ],
      ],
    },
    // ℹ️ Local dev uses the default Storybook Babel configs
  },
}
