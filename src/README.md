## Component standards checklist

- All components accept an `as` prop to control the wrapper element
- Components with subcomponents should accept a shorthand render prop for that
  subcomponent matching the name.
- Props not used by the library should be passed through container components
  using spread operator

## Stateful components

- All stateful components use an `active` prop to determine visibility state
- Component state management can be uncontrolled, or controlled:
  - By default components are uncontrolled and will internally manage updating
    state
  - Components can be controlled by passing override `activate` and `deactivate`
    props that manage updating state
- Stateful components changes can be observed by passing `on<EVENT>` props

## Code patterns

1. Using merge and spread to layer props to generate final values

```jsx
const merged = { as: 'button', ...useTheme('Button'), ...props }
```

_This allows a component to cleanly top level set default values for a
component, override those with context values and override those with JSX prop
values._

## TODO

- Animating reqs
- Does `active` NEED to be passed when creating a controlled component with
  override activate/deactivate props?
- Change the shorthand to `render<COMPONENT>`, eg instead of passing `Content`,
  pass `renderContent`???
