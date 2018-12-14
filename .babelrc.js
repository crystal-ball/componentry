module.exports = {
  env: {
    // Local Development
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              Chrome: '71',
              Firefox: '64',
            },
          },
        ],
        '@babel/preset-react',
        '@babel/preset-flow',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties', // Class static and property initializers
        '@babel/plugin-transform-runtime', // runtime needed for generators
      ],
    },
    // Production - Bundling documentation site
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
        '@babel/preset-flow',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime', // Library babel-helpers with import statements
        'transform-react-remove-prop-types', // Strip propTypes declarations
      ],
    },
    // Test - Mocha setup cannot use esmodules
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },

    // Publish targets
    // ---------------------------------------------------------------------------

    // commonJS - ES5 syntax with commonJS modules
    common: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
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
        '@babel/preset-flow',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        'transform-react-remove-prop-types',
      ],
    },
    // Next - Transpiled to stage 4 for package.esnext
    next: {
      presets: ['@babel/preset-react', '@babel/preset-flow'],
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
