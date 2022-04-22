/* global __filename */
import pluginTester from 'babel-plugin-tester'
import plugin from './plugin'

// 📝 Tester docs:
// https://github.com/babel-utils/babel-plugin-teste

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
      title: 'transforms components',
      fixture: '__fixtures__/basics/code.js',
      outputFixture: '__fixtures__/basics/output.js',
    },
    {
      title: 'passes through refs',
      fixture: '__fixtures__/refs/code.js',
      outputFixture: '__fixtures__/refs/output.js',
    },
    {
      title: 'transforms as prop',
      fixture: '__fixtures__/as-prop/code.js',
      outputFixture: '__fixtures__/as-prop/output.js',
    },
    {
      title: 'transforms attributes with expression container values',
      fixture: '__fixtures__/expression-containers/code.js',
      outputFixture: '__fixtures__/expression-containers/output.js',
    },

    {
      title: 'skips non-precompile components',
      fixture: '__fixtures__/ignores-components/code.js',
      outputFixture: '__fixtures__/ignores-components/output.js',
    },
    {
      title: 'passes through non-library props',
      fixture: '__fixtures__/passthrough-props/code.js',
      outputFixture: '__fixtures__/passthrough-props/output.js',
    },
    {
      title: 'skips transforming components with spread attributes',
      fixture: '__fixtures__/spread-attribute/code.js',
      outputFixture: '__fixtures__/spread-attribute/output.js',
    },
    {
      title: 'includes a data-precompiled flag when plugin option is used',
      fixture: '__fixtures__/data-precompiled/code.js',
      outputFixture: '__fixtures__/data-precompiled/output.js',
      pluginOptions: {
        dataFlag: true,
      },
    },
  ],
})
