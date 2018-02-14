<p className="lead">
  These APIs are avilable for customizing Componentry components. The APIs are
  consistent across components for predictability.
</p>

#### Specifying render element with `as`

All Componentry elements accept the `as` prop to specify a custom render
element. It's possible to pass a component or html tag. Internally this prop is
passed to the component `createElement` call.

```jsx
<Card as="section">
  <Card.Boyd>
    The container for this card will be an HTML section element instead of a
    div.
  </Card.Boyd>
</Card>
```

#### Specify theme color with `color`

Any component that is themeable uses the `color` prop to set the theme color.

```jsx
<Alert color="info">This alert will be use the info theme color.</Alert>
```

#### `<Trigger />` and `<Content />` subcomponents

All components with active state use Trigger and Content subcomponents.

```jsx
<Tooltip>
  <Tooltip.Trigger>Trigger</Tooltip.Trigger>
  <Tooltip.Content>
    The Trigger and Content subcomponents are standard for all components with
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
  <Active.Trigger>Trigger</Active.Trigger>
  <Active.Content>I manage my own state.</Active.Content>
</Active>
```

#### Observed usage

Component state changes can be observed by passing on event handlers:

* `onActivate`
* `onActivated`
* `onDeactivate`
* `onDeactivated`

```jsx
<Active
  onActivate={this.doSomethingOnActivate}
  onActivated={this.doSomethingAfterActivation}
  onDeactivate={this.doSomethingOnDeactivate}
  onDeactivated={this.doSomethingAfterDeactivation}
>
  <Active.Trigger>Trigger</Active.Trigger>
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
  <Active.Trigger>Trigger</Active.Trigger>
  <Active.Content>I will follow the instructions you give me.</Active.Content>
</Active>
```
