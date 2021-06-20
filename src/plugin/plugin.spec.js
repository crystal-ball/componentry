/* global __filename */
import pluginTester from 'babel-plugin-tester'
import plugin from './plugin'

// TODO:
// transforms components with as props
// transforms jsx expression containers

pluginTester({
  plugin,
  pluginName: 'componentry plugin',
  babelOptions: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          useBuiltIns: true,
        },
      ],
    ],
    plugins: [],
  },

  // All fixture and outputFixture configs below are relative to this filename
  filename: __filename,
  // Array of tests format used to allow more descriptive test titles
  tests: [
    {
      title: 'transforms display components',
      fixture: '__fixtures__/complex-example/code.js',
      outputFixture: '__fixtures__/complex-example/output.js',
    },
    {
      title: 'transforms attributes with expression container values',
      fixture: '__fixtures__/expression-containers/code.js',
      outputFixture: '__fixtures__/expression-containers/output.js',
    },
    {
      title: 'skips transforming components with spread attributes',
      fixture: '__fixtures__/spread-attribute/code.js',
      outputFixture: '__fixtures__/spread-attribute/output.js',
    },
    {
      title: 'only transforms display components',
      fixture: '__fixtures__/ignores-components/code.js',
      outputFixture: '__fixtures__/ignores-components/output.js',
    },
    {
      title: 'passes through non-library props',
      fixture: '__fixtures__/passthrough-props/code.js',
      outputFixture: '__fixtures__/passthrough-props/output.js',
    },
  ],
})

// Tester docs:
// https://github.com/babel-utils/babel-plugin-tester
