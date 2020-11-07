These APIs are avilable for customizing Componentry components. The APIs are
consistent across components for predictability.

## Specifying render element with `as`

All Componentry elements accept the `as` prop to specify a custom render
element. It's possible to pass a component or html tag. Internally this prop is
passed to the component `createElement` call.

```jsx
<Card as='section'>
  <Card.Body>
    The container for this card will be an HTML section element instead of a
    div.
  </Card.Body>
</Card>
```

## Specify theme color with `color`

Any component that is themeable uses the `color` prop to set the theme color.

```jsx
<Alert color='info'>This alert will be use the info theme color.</Alert>
```

## Specifying content alignment with `direction`

Active components that support aligning content in different directions use the
`direction` prop to include classes that set the content position.

- The direction classes are added to the container component so that both the
  action and content components can be easily targeted.
- Directional components have a sensible default set, so the `direction` prop
  only needs to be overridden for custom directions.

```jsx
<Popover
  Action='Open left'
  Content='This content will be aligned left of the action instead of right.'
  direction='left'
/>
```

## `<Action />` and `<Content />` subcomponents

All components with active state use Action and Content subcomponents.

```jsx
<Tooltip>
  <Tooltip.Action>Action</Tooltip.Action>
  <Tooltip.Content>
    The Action and Content subcomponents are standard for all components with
    active state.
  </Tooltip.Content>
</Tooltip>
```

## Active component control

<p className="lead">
  All components with active state can be used in one, or a combination of,
  these three ways: Uncontrolled, Observed and Controlled.
</p>

#### Uncontrolled usage

Components are uncontrolled by default, the active state is managed by the
component.

```jsx
<Active>
  <Active.Action>Action</Active.Action>
  <Active.Content>I manage my own state.</Active.Content>
</Active>
```

#### Observed usage

Component state changes can be observed by passing on event handlers:

- `onActivate`
- `onActivated`
- `onDeactivate`
- `onDeactivated`

```jsx
<Active
  onActivate={this.doSomethingOnActivate}
  onActivated={this.doSomethingAfterActivation}
  onDeactivate={this.doSomethingOnDeactivate}
  onDeactivated={this.doSomethingAfterDeactivation}
>
  <Active.Action>Action</Active.Action>
  <Active.Content>I will let you know when my state changes.</Active.Content>
</State>
```

#### Controlled usage

Components can be controlled by passing `active`, `activate` and `deactivate`
props.

```jsx
<Active
  active={activeState}
  activate={this.handleActivationChangeEvents}
  deactivate={this.handleDeactivationChangeEvents}
>
  <Active.Action>Action</Active.Action>
  <Active.Content>I will follow the instructions you give me.</Active.Content>
</Active>
```

## Action decorations

All Action components accept a `decoration` prop which is rendered after the
Action children. The decoration can be set at a component level or at an
application level using the ThemeProvider. This makes it easy to add a default
decoration to all action instances, eg adding an icon to all popovers.
