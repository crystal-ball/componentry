module.exports = {
  env: {
    /**
     * Local Development
     */
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              chrome: '70',
              firefox: '63',
            },
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        // Runtime will transform Babel helpers to imports from @babel/runtime
        // Passing useESModules allows webpack to handle module transforms
        ['@babel/plugin-transform-runtime', { useESModules: true }],
      ],
    },
    /**
     * Production - Bundling documentation site
     */
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: '> 0.25%, not dead',
            // Will automatically add core-js imports for unsupported language
            // features based on environment
            useBuiltIns: 'usage',
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        // Runtime will transform Babel helpers to imports from @babel/runtime
        // Passing useESModules allows webpack to handle module transforms
        ['@babel/plugin-transform-runtime', { useESModules: true }],
        // Strip propTypes declarations
        'transform-react-remove-prop-types',
      ],
    },
    /**
     * Test env mimics production, but uses commonjs modules because Jest
     * doesn't support ESModules and operates directly on source code.
     */
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },

    // Publish targets
    // ---------------------------------------------------------------------------

    // CommonJS - ES5 syntax with commonJS modules
    common: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
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
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
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
  },
}
