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
              Chrome: '65',
              Firefox: '60',
            },
          },
        ],
        '@babel/preset-react',
        '@babel/preset-flow',
      ],
      plugins: [
        'react-hot-loader/babel', // 🔥
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
            targets: { browsers: ['>0.25%', 'not ie 11', 'not op_mini all'] },
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
    esm: {
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
      presets: ['@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        'transform-react-remove-prop-types',
      ],
    },
  },
}
