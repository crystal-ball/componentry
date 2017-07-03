import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: './lib/index.js',
  external: [
    'react',
    'prop-types',
  ],
  plugins: [
    resolve({
      // use "jsnext:main" if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true,

      // use "main" field or index.js, even if it's not an ES6 module
      // (needs to be converted from CommonJS to ES6
      // – see https://github.com/rollup/rollup-plugin-commonjs
      main: true,
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
      exclude: [
        'node_modules/process-es6/**',
      ],
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement', 'cloneElement'],
      },
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
  targets: [
    {
      dest: 'dist/componentry.js',
      format: 'umd',
      moduleName: 'componentry',
    },
  ],
};
