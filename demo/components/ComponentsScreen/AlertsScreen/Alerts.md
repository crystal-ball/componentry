---
componentProps:
  - name: a11yLabel
    description: Screen reader only label that provides the context of the alert.
    type: string
    defaultValue: "'<COLOR> alert'"
  - color: true
  - name: dismissible
    description: Controls whether alert can be dismissed by user, pass <code>false</code> to prevent dismissal of an alert.
    type: boolean
    defaultValue: "false"
  - name: deactivate
    description: When passed, the <code>deactivate</code> will be called in place of internal state change handler. Note that the opacity transition and hiding of the component must be handled externally when passing a custom <code>deactivate</code> handler.
    type: function
    defaultValue: undefined
  - name: transitionDuration
    description: Length of opacity transition, if not passed component will default to 300ms or <code>THEME</code> value if set using <code>ThemeProvider</code>.
    type: number
    defaultValue: 300
---
<ComponentsList components={['Alert']} />

Provide contextual feedback messages for typical user actions using theme
colors.

Alerts can contain any HTML elements, and the `alert-heading` and `alert-link`
classes can be used with headings or links to provide themed elements. Alerts
can be dismissible or static.

<InteractiveDemo
  defaults={{ color: 'success', dismissible: true }}
  formFields={[
    { label: 'color', options: this.props.colors },
    { label: 'dismissible', boolean: true },
  ]}
  renderCode={({ color, dismissible }) => dismissible ? (
    `<Active defaultActive>
  <Alert color="${color}" dismissible>
    <h4 className="alert-heading">Well done!</h4>
    You successfully read this important alert message.
  </Alert>
</Active>`
  ) : (
    `<Alert color="${color}">
  <h4 className="alert-heading">Well done!</h4>
  You successfully read this important alertmessage.
</Alert>`
  )}
  renderComponent={({ color, dismissible }) => (
    <div className="w-100">
      <Active defaultActive>
        <Alert color={color} dismissible={dismissible}>
          <h4 className="alert-heading">Well done!</h4>
          You successfully read this important alert message.
        </Alert>
      </Active>
    </div>
  )}
/>

<Alert color="info">
  Dismissible Alerts require library active props. The component is wrapped
  using <code>withActive</code> so disimissible Alerts can either be a child
  of a <code>{`<State />`}</code> component or props <code>active</code>{' '}
  and <code>deactivate</code> can be passed.
</Alert>

### A++ Accessibility

By default alerts include a screen readers only message that signals the type of
alert to provide the context implied by the alert color. This context can by
overridden by passing a custom `a11yLabel` prop.

### Componentry alert styles

Alerts in this documentation have additional styles added for a cleaner, sharper
look. Add this SCSS to your project for these alerts:

```scss
.alert {
  background-color: transparent;
  border-color: $border-color;
}

@each $color, $value in $theme-colors {
  .alert-#{$color} {
    border-left: 5px solid $value;
  }
}
```

<PropsDocs componentProps={componentProps} themeColors />
