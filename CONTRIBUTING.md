# Contributing

Contributions are welcome! This guide is a resource for navigating the package
structure and conventions.

## Architecture

## Miscellaneous Knowledge
Any miscellaneous knowledge that is difficult to document in place or is generally
applicable to the library can be documented here.

## Dependency Notes
- `cash-dom`: Used to replace jQuery `.closest()` for filtering click events.

#### Testing
- Our Mocha setup requires the `.babelrc` file to specify that we are using ES6
  modules, but for some reason Mocha does not recognize presets in array form like
  we have: `["latest", { "es2015": { "loose": true, "modules": false } }],`.

  So we have added an environment specific preset in `.babelrc` with the string only
  latest preset. This is triggered by our npm test script which includes a Babel
  env: `BABEL_ENV=test mocha src/test/setup.js src/**/*.spec.js`

## Component Expectations
One of the primary goals of Componentry is a simple, consistent API for all
components. The following expectations should be met for all components, and if not
documentation should explain why the convention has been overridden.

- Passed properties should be affirmative to avoid double negatives for configuring
  a component. For example, to hide a close button for a component, don't name the
  property `hideCloseButton` where showing the close button requires passing false
  _(double negative: hideCloseButton={false})_. Instead, use the affirmative:
  `closeButton`, so that showing and hiding do not double negate:
    - `closeButton={true}` _(include close button)_
    - `closeButton={false}` _(do not include close button)_
- Include sane defaults for properties whenever possible. For any component, whenever
  possible create a default value for each property reflecting the most common use
  case. For example, modals usually have close buttons, so a modal's property
  `closeButton` should be defaulted to true. Then consumers can pass
  `closeButton={false}` only when they need to disable common behavior.
- Use the [classnames](https://github.com/JedWatson/classnames) utility for
  assembling component classes. This lets consumers pass in arguments for
  `classNames` that will be computed along with the base component classes.
- Tests for the component should cover the exposed component API.

#### Code Conventions
- Component files should export the component as the default export. Components are
  exported as named exports in the package's `index.js`.
- Alphabetize component passed properties.

## Library Publishing
Componentry `prepublish` script creates:
- AMD consumable for `package.main`
- ESM consumable for `package.module`

