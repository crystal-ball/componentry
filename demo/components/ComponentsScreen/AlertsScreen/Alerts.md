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
<ComponentsList components={['Alert']} />


Alerts provide contextual feedback messages for typical user actions with the
handful of available and flexible alert messages.

<InteractiveDemo
  defaults={{ color: 'success', dismissible: true }}
  formFields={[
    { label: 'Theme color', options: this.props.colors, id: 'color' },
    { label: 'Dismissible', boolean: true, id: 'dismissible' },
  ]}
  renderCode={({ color, dismissible }) => dismissible ? (
    `<Active defaultActive>
  <Alert color="${color}" dismissible>
    <strong>Well done!</strong> You successfully read this important alert message.
  </Alert>
</Active>`
  ) : (
    `<Alert color="${color}">
  <strong>Well done!</strong> You successfully read this important alertmessage.
</Alert>`
  )}
  renderComponent={({ color, dismissible }) => dismissible ? (
    <Active defaultActive className="w-100">
      <Alert color={color} dismissible>
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
    </Active>
  ) : (
    <Alert color={color} className="w-100">
      <strong>Well done!</strong> You successfully read this important alert message.
    </Alert>
  )}
/>

<Alert color="info">
  Dismissible Alerts require library active props. The component is wrapped
  using <code>withActive</code> so disimissible Alerts can either be a child
  of a <code>{`<State />`}</code> component or props <code>active</code>{' '}
  and <code>deactivate</code> can be passed.
</Alert>

<PropsDocs componentProps={componentProps} themeColors />
