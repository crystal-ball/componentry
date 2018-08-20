Componentry's architecture is driven by two primary goals:

- Make consumption of library as simple as possible
- Maintain as light of a footprint as possible

There are _lots_ of React component libraries available, and we don't want to
add noise to the community. This library is useful because it's small, simple
and compatible with Boostrap v4.

## Component architecture

One of the primary goals of Componentry is a simple, consistent API for all
components. The following expectations should be met for all components, and if
not documentation should explain why the convention has been overridden.

- Passed properties should be affirmative to avoid double negatives for
  configuring a component. For example, to hide a close button for a component,
  don't name the property `hideCloseButton` where showing the close button
  requires passing false _(double negative: hideCloseButton={false})_. Instead,
  use the affirmative: `closeButton`, so that showing and hiding do not double
  negate: - `closeButton={true}` _(include close button)_ -
  `closeButton={false}` _(do not include close button)_
- Include sensible defaults for properties whenever possible. For any component,
  whenever possible create a default value for each property reflecting the most
  common use case. For example, modals usually have close buttons, so a modal's
  property `closeButton` should be defaulted to true. Then consumers can pass
  `closeButton={false}` only when they need to disable common behavior.
- Use the [classnames](https://github.com/JedWatson/classnames) utility for
  assembling component classes. This lets consumers pass in arguments for
  `classNames` that will be computed along with the base component classes.
- Tests for the component should cover the exposed component API.

### Active components

#### Responsibilities

_These responsibilites inform what components should be required to manage and
prevents creep_

- `active-container-factory` generates container components for active elements.
  Handles coordination of controlled and uncontrolled active usage, and provides
  the active provider to set the active context for that element.
- `ActiveProvider` provides context for passing+accessing active state and
  update methods at any level.
- `withActive` passes the values and change handlers with a context consumer.

### Computing props

Every library component can have default props configured using the
`<ThemeProvider />`. The default configurations are accessed by individual
components using context, but these values are **defaults** and will be
overriden by component instance props values. This computed props value is
handled in each component by merging the context values and props values. Note
that any values which are additive, such as `className` need to be accessed
directly from props and context because merging the two can override or
duplicate the values.

### Passing props

All props that are not used by the library are passed through using rest syntax.
This supports composition by allowing any root component to be used as a library
element and any arbitrary props to be passed. It's important that the props rest
is included **last** in the `createElement` call so that **any** library prop
can be overriden _(Eg: passing activate/deactive methods override library props
which enables controlled components)_.

## Design principles

<p class="lead">
  The guiding principles of Componentry aim to enable scaling applications
  to large sizes while maintaining design cohesion, even as the application
  theme evolves.
</p>

In order to accomplish this Componentry:

- Utilizes theme customization variables with sensible defaults for generating
  utility and component styles. This drives cohesion, and enables both sweeping
  and fine grained customization of an application theme.
- Provides powerful atomic classes that enable functional composition of custom
  styles. This drives cohesion across large scale apps and provides solid best
  practices for teams to follow.
- Scopes styles to single component elements to ensure that it's easy to
  understand how the complete style set of a component was generated.

_Componentry extends Bootstrap, so it's helpful to be familiar with their
[Approach][]._

## Dependencies

Componentry has dependencies on `classnames` (SIZE) and `nanoid` (SIZE). These
libraries provide utilities for computing classnames and generating unique ids
for aria attributes. `babel-runtime` is also included as a dependency to allow
the ESModule builds to reference only the package imports for size
optimizations.

## Library Publishing

Three versions of the library source code are created by the `prepublish`
script. The different versions are created using Babel configs triggered by the
`BABEL_ENV`, see the `.babelrc` file for more info.

- `package.main` ES5 AMD version: This version can be used in any environment
- `package.module` ES5 ESM version: This version is transpiled to ES5 syntax in
  ES6 modules. This will be the version picked up by Webpack.
- `package.esnext` ES Stage 4 version: Untranspiled source version using only
  Stage-4 features. This version can be used to by consuming projects configured
  to create their own targeted compile configurations.

<!-- Link -->

[approach]: https://getbootstrap.com/docs/4.0/extend/approach/
