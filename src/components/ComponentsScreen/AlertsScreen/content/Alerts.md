---
componentProps:
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

<!-- TODO: remove wrapper div after inspirescript handles inline components -->

<div>
  <ComponentsList
    components={['Alert']}
  />
</div>

<p className="lead">
  Alerts provide contextual feedback messages for typical user actions with the
  handful of available and flexible alert messages.
</p>

<Alert color="info">
  Dismissible Alerts require library active props. The component is wrapped
  using <code>withActive</code> so disimissible Alerts can either be a child
  of a <code>{`<State />`}</code> component or props <code>active</code>{' '}
  and <code>deactivate</code> can be passed.
</Alert>

#### Alert configurations

<AlertsDemo />

<PropsDocs componentProps={componentProps} themeColors />
