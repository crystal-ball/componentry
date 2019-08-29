// Explicitly set the `core-js` version used by `preset-env` per Babel best
// practices and allow polyifilling proposal stage features
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
      plugins: ['@babel/plugin-proposal-class-properties'],
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
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        'transform-react-remove-prop-types',
      ],
    },
    // ESM - ES5 syntax with ESModules
    esmodules: {
      presets: [
        ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs }],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        'transform-react-remove-prop-types',
      ],
    },
    // Next - Transpiled to stage 4 for package.esnext
    next: {
      presets: ['@babel/preset-react'],
      plugins: [
        // Preset env doesn't yet support this syntax
        '@babel/plugin-syntax-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        'transform-react-remove-prop-types',
      ],
    },

    // ℹ️ Local dev uses the default Storybook Babel configs
  },
}
