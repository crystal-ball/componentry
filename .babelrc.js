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
      presets: [
        ['@babel/preset-env', { modules: 'commonjs', targets: 'node 16' }],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [],
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
        [
          '@babel/plugin-transform-runtime',

          {
            corejs: '3',
            helpers: true,
            regenerator: true,
            useESModules: false,
            version: '^7.17.0', // Include version for smaller bundle
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
            useESModules: true,
            version: '^7.17.0', // Include version for smaller bundle
          },
        ],
      ],
    },
    // ℹ️ Local dev uses the default Storybook Babel configs
  },
}
