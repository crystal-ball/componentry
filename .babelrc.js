/**
 * CoreJS includes the polyfills for new language features compiled by Babel.
 * Explicitly set the `core-js` version used by `preset-env` per Babel best
 * practices and allow polyifilling proposal stage features
 */
const corejs = { version: 3, proposals: true }

module.exports = {
  env: {
    /**
     * Test env mimics production, but uses commonjs modules because Jest
     * doesn't support ESModules and operates directly on source code.
     */
    test: {
      presets: [
        ['@babel/preset-env', { useBuiltIns: 'usage', corejs }],
        '@babel/preset-react',
      ],
    },

    // Publish targets
    // ---------------------------------------------------------------------------

    // CommonJS - ES5 syntax with commonJS modules
    common: {
      presets: [
        ['@babel/preset-env', { useBuiltIns: 'usage', corejs }],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        [
          '@babel/plugin-transform-runtime',
          // https://github.com/babel/babel/issues/10261
          { corejs, version: require('@babel/helpers/package.json').version },
        ],
      ],
    },
    // ESM - ES5 syntax with ESModules
    esmodules: {
      presets: [
        ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs }],
        '@babel/preset-react',
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs,
            useESModules: true,
            // https://github.com/babel/babel/issues/10261
            version: require('@babel/helpers/package.json').version,
          },
        ],
      ],
    },
    // Next - Transpiled to stage 4 for package.esnext
    next: {
      presets: ['@babel/preset-react'],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs,
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
