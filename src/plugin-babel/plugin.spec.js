/* global __filename */
import { pluginTester } from 'babel-plugin-tester'
import plugin from './plugin'

// 📝 Tester docs:
// https://github.com/babel-utils/babel-plugin-tester

pluginTester({
  plugin,
  pluginName: 'componentry plugin',
  babelOptions: {
    presets: [['@babel/preset-react', { runtime: 'automatic' }]],
    plugins: [],
  },

  // All fixture and outputFixture configs below are relative to this filename
  filename: __filename,
  // Array of tests format used to allow more descriptive test titles
  tests: [
    {
      title: 'ignores non-precompile components',
      fixture: '__fixtures__/ignores-components/code.js',
      outputFixture: '__fixtures__/ignores-components/output.js',
    },
    {
      title: 'transforms supported types of props',
      fixture: '__fixtures__/prop-types/code.js',
      outputFixture: '__fixtures__/prop-types/output.js',
    },
    {
      title: 'transforms styles props and merges styles props',
      fixture: '__fixtures__/styles-props/code.js',
      outputFixture: '__fixtures__/styles-props/output.js',
    },
    {
      title: 'transforms components individual props',
      fixture: '__fixtures__/component-props/code.js',
      outputFixture: '__fixtures__/component-props/output.js',
    },
    {
      title: 'transforms as prop',
      fixture: '__fixtures__/as-prop/code.js',
      outputFixture: '__fixtures__/as-prop/output.js',
    },
    {
      title: 'transforms className prop',
      fixture: '__fixtures__/classname-props/code.js',
      outputFixture: '__fixtures__/classname-props/output.js',
    },
    {
      title: 'passes through refs',
      fixture: '__fixtures__/refs/code.js',
      outputFixture: '__fixtures__/refs/output.js',
    },
    {
      title: 'passes through non-library props',
      fixture: '__fixtures__/passthrough-props/code.js',
      outputFixture: '__fixtures__/passthrough-props/output.js',
    },
    // --------------------------------------------------------
    // OPTIONS
    {
      title: 'includes a data-precompiled flag when plugin option is used',
      fixture: '__fixtures__/data-precompiled/code.js',
      outputFixture: '__fixtures__/data-precompiled/output.js',
      pluginOptions: {
        dataFlag: true,
      },
    },
    {
      title: 'checks component import paths',
      fixture: '__fixtures__/checks-import-paths/code.js',
      outputFixture: '__fixtures__/checks-import-paths/output.js',
      pluginOptions: {
        customImportPath: 'componentry_path',
      },
    },
    {
      title: 'skips excluded components',
      fixture: '__fixtures__/exclude_option/code.js',
      outputFixture: '__fixtures__/exclude_option/output.js',
      pluginOptions: {
        exclude: ['Badge'],
      },
    },
  ],
})

/**
 * TODO
 *
 * 1. Test styles merging with something like mt={999} style={{ overflow: 'hidden' }}
 * 2. Test className merging
 */
