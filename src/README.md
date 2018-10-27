## Component Standards

## State

All components should be available with varying levels of control specified:

* **uncontrolled**: The component uses internal state and trigger methods
* **controlled**: The component's state is a parameter. Changing state requires
  passing methods in component hooks to handle externally changing state. Hooks
  are available to know when events are called.

#### Active Prop

Any component that toggles state should use prop `active` that can be controlled
and defaults to a private `_active` if not controlled

#### Changing State

Method `toggleActive` controls calling state change, accepts a boolean for
explict state changes.

#### Hooks

All components that toggle state should call hooks for:

* onActivate
* onActivated
* onDeactivate
* onDeactivated

Hooks should be called with the component as the first parameter and the event
as the second parameter.

#### Render as

Each component should accept an `as` prop that can be used to specify what a
component should be rendered as. Using an upper case `as` for the prop allows us
to directly use the prop in the template without needing another variable (b/c
JSX component must be upper case).

#### Shortcut Properties

Allow any subcomponent to be passed as a paremeter to the parent component for
simple invocations. The property name is always the subcomponent name.

#### Child Properties

Don't pass properties to children, expose them as part of the API. Then any
properties can be passed to those components.

#### Wrapping Containers

Wrapping tags should use ...rest to allow passing any data to components, this
can also be used with the render as feature to pass specific data to any
component that is rendered for an element.

#### Exports

All components should be in an individual file and export as default. Classes
should export the default class and functional components should declare a
function and default export it.
