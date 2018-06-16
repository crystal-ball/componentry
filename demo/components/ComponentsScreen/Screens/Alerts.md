---
componentProps:
  - name: ariaTitle
    description: Screen reader only title that provides the context of the alert. By default the type of alert is included.
    type: string
    defaultValue: "''"
  - color: true
  - name: dismissible
    description: Controls whether alert can be dismissed by user, pass <code>false</code> to prevent dismissal of an alert.
    type: boolean
    defaultValue: "false"
  - deactivate: true
  - name: transitionDuration
    description: Length of opacity transition, if not passed component will default to 300ms or <code>THEME</code> value if set using <code>ThemeProvider</code>.
    type: number
    defaultValue: 300
---
<ComponentsList components={['Alert']} />

Provide contextual feedback messages for user actions using theme colors.

Alerts can contain any HTML elements, and can be dismissible or static. A
dismissible Alert requires Componentry Active `active` and `deactivate` props,
which can be passed directly or the Alert can be nested inside of an Active
component to automatically create an uncontrolled Alert.

<InteractiveDemo
  defaults={{ color: 'success', outline: false, dismissible: true }}
  formFields={[
    { label: 'color', options: this.props.colors },
    { label: 'dismissible', boolean: true },
    { label: 'outline', boolean: true },
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
</Alert>`
  )}
  renderComponent={({ color, dismissible, outline }) => (
    <div className="w-100">
      <Active defaultActive>
        <Alert color={color} dismissible={dismissible} outline={outline}>
          <h4 className="alert-heading">Well done!</h4>
          <p className="mb-0">You successfully read this important alert message.</p>
        </Alert>
      </Active>
    </div>
  )}
/>

<SupportingInfo
  classes={['alert-link','alert-heading']}
  apis={['Active component', 'Theme colors']}
/>

<Alert color="info" className="mt">
  The Alerts in this documentation use the enhanced alert styles from the
  Jetpack styles collection. They can also
  be imported directly from <code>~componentry/styles/jetpack/alert</code>.
</Alert>

### <Icon id="stars" /> A++ Accessibility

Alert components include a screen reader only message to announce the the type
of alert based on the theme color to provide the context created by the Alert
color. This context can be customized using the `ariaTitle` prop.

<PropsTabs componentProps={componentProps} themeColors />
