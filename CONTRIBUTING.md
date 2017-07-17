# Contributing

Contributions are welcome! This guide is a resource for navigating the package
structure and conventions.

Any miscellaneous knowledge that is difficult to document in place or is generally
applicable to the library can be documented here.

## Architecture
This library's architecture is driven by two primary goals:
- Maintain as light of a footprint as possible
- Make consumption of library as simple as possible

There are _lots_ of React component libraries available, and we don't want to add
noise to the community. This library is useful because it's small, simple and
compatible with Boostrap v4.

#### Experimental JS Features
Library source code should not use experimental JS features beyond Stage-4. This lets
us deliver an untranspiled version of the library as `package.esnext`. Features like
class statics and decorators would make some of the code terser, but would then
require transpilation to maintain Stage-4 status.

## Dependency Notes
Componentry's only external dependency is `babel-runtime`, which provides the required
Babel helpers from transpiling in module format. Bootstrap v4 is included as a
dependency to allow importing the SCSS without requiring install.

Jed Watson's [classnames](https://github.com/JedWatson/classnames) is recreated in
repo as an ES module.

## Testing
Testing uses Mocha with Enzyme. The `.babelrc` configs have a test environment to
configure Babel to compile ESM for Mocha, this is triggered by the `BABEL_ENV` in the
package test script.

Test setup is required for Mocha+Enzyme, it is located in the `lib/test/setup.js`
file which is imported in the package test script.

NOTE: Tests should only validate expected component *behavior*, and not internal
implementation of those behaviors.

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
Three versions of the library source code are created by the `prepublish` script:
- `package.main` ES5 AMD version: This version can be used in any environment
- `package.module` ES5 ESM version: This version is transpiled to ES5 syntax in ES6 modules. This will
  be the version picked up by Webpack.
- `package.esnext` ES Stage 4 version: Untranspiled source version using only Stage-4 features. This
  version can be used to by consuming projects configured to create their own
  targeted compile configurations.

The different versions are created using Babel configs triggered by the `BABEL_ENV`,
see the `.babelrc` file for more info.

