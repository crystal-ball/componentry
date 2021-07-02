'use strict'

module.exports = {
  // Base configsa are used by ESLint babel parser
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
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        [
          '@babel/plugin-transform-runtime',
          // https://github.com/babel/babel/issues/10261
          { version: require('@babel/helpers/package.json').version },
        ],
      ],
    },
    // ESM - ES5 syntax with ESModules
    esmodules: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
            // https://github.com/babel/babel/issues/10261
            version: require('@babel/helpers/package.json').version,
          },
        ],
      ],
    },
    // Next - Transpiled to stage 4 for package.esnext
    esnext: {
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
            // https://github.com/babel/babel/issues/10261
            version: require('@babel/helpers/package.json').version,
          },
        ],
      ],
    },

    // ℹ️ Local dev uses the default Storybook Babel configs
  },
}
