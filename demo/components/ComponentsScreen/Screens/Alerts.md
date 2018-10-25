---
componentProps:
  - name: active
    description: Sets visibility of dismissible alerts
    type: boolean
    default: false
  - name: ariaTitle
    description: Screen reader only title that provides the context of the alert. By default the type of alert is included.
    type: string
    default: "'CONTEXT_COLOR alert'"
  - name: color
    description: Sets alert contextual color
    type: ['primary','secondary','success','danger','warning','info','light','dark']
  - name: deactivate
    description: The deactivate callback will be passed to any dismissible Alert's <code>Close</code>
    type: func
  - name: dismissible
    description: Sets whether Alert can be dismissed. Dismissible Alerts render a Close component.
    type: boolean
    default: false
  - name: outline
    description: Toggles the outline alert style
    type: boolean
    default: false
---
<ComponentsList components={['Alert']} />

Provide contextual feedback messages for user actions using theme colors.

Alerts can contain any HTML elements, and can be dismissible or static. A
dismissible Alert requires Componentry Active `active` and `deactivate` props,
which can be passed directly or the Alert can be nested inside of an Active
component to automatically create an uncontrolled Alert.

<InteractiveDemo
  defaults={{ color: 'success', outline: true, dismissible: true }}
  formFields={[
    { label: 'color', options: this.props.colors },
    { label: 'outline', boolean: true },
    { label: 'dismissible', boolean: true },
  ]}
  renderCode={({ color, dismissible, outline }) => dismissible ? (
    `<Active defaultActive>
  <Alert color="${color}" dismissible${outline ? ' outline' : ''}>
    <h4 className="alert-heading">Well done!</h4>
    <p className="mb-0">You successfully read this important alert message.</p>
  </Alert>
</Active>`
  ) : (
    `<Alert color="${color}"${outline ? ' outline' : ''}>
  <h4 className="alert-heading">Well done!</h4>
  <p className="mb-0">You successfully read this important alert message.</p>
  <hr />
  <Anchor href="#" className="alert-link">Go home</Anchor>
</Alert>`
  )}
  renderComponent={({ color, dismissible, outline }) => (
    <div className="w-100">
      <Active defaultActive>
        <Alert color={color} dismissible={dismissible} outline={outline}>
          <h4 className="alert-heading">Well done!</h4>
          <p className="mb-0">You successfully read this important alert message.</p>
          <hr />
          <Anchor href="#" className="alert-link">Go home</Anchor>
        </Alert>
      </Active>
    </div>
  )}
/>

<SupportingInfo
  classes={['alert-link','alert-heading']}
  apis={['Active component', 'Theme colors']}
/>

### <Icon id="stars" /> A++ Accessibility

Alert components include a screen reader only message to announce the the type
of alert based on the theme color to provide the context created by the Alert
color. This context can be customized using the `ariaTitle` prop.

<PropsTabs componentProps={componentProps} />
