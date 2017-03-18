# Contributing

Contributions are welcome!

## Architecture

## Miscellaneous Knowledge
Any miscellaneous knowledge that is difficult to document in place or is generally
applicable to the library can be documented here.

#### Testing
- Our Mocha setup requires the `.babelrc` file to specify that we are using ES6
  modules, but for some reason Mocha does not recognize presets in array form like
  we have: `["latest", { "es2015": { "loose": true, "modules": false } }],`.

  So we have added an environment specific preset in `.babelrc` with the string only
  latest preset. This is triggered by our npm test script which includes a Babel
  env: `BABEL_ENV=test mocha src/test/setup.js src/**/*.spec.js`
