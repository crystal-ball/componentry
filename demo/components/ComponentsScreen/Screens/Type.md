---
componentProps:
  - name: button
    description: Toggles button styles for the <span class="text-monospace">Anchor</span> component
    type: boolean
    default: false
formFields:
  - label: color
    options: [primary, secondary, success, info, warning, danger, light, dark, white, muted, body]
  - label: fontWeight
    options: [light, normal, bold]
  - label: fontSize
    string: true
  - label: italic
    boolean: true
  - label: letterSpacing
    string: true
  - label: lineHeight
    string: true
  - label: monospace
    boolean: true
  - label: size
    options: [sm, lg]
  - label: textAlign
    options: ['left', 'center', 'right', 'justified']
  - label: uppercase
    boolean: true
formDefaults:
  color: null
  fontWeight: null
  fontSize: null
  italic: false
  letterSpacing: null
  lineHeight: null
  monospace: null
  size: null
  textAlign: null
  uppercase: null
---
<ComponentsList components={['Anchor', 'Header']} />

Create consistent typography elements.

## Headers and Text

<InteractiveDemo
  defaults={formDefaults}
  formFields={formFields}
  renderCode={data => (`<Header${props.renderPropsText(data)}>Header element</Header>
<Text${props.renderPropsText(data)}>Text element</Text>`
   )}
  renderComponent={data => (<div>
  <Header {...data}>Header element</Header>
  <Text {...data}>Text element</Text>
 </div>)}
/>

## Anchors

<InteractiveDemo
  defaults={{ ...formDefaults, button: false }}
  formFields={[ { label: 'button', boolean: true }, ...formFields ]}
  renderCode={data => (
    `<Anchor href="#"${props.renderPropsText(data)}>Anchor element</Anchor>`
  )}
  renderComponent={data => (<div>
  <Anchor href="#" {...data}>Anchor element</Anchor>
 </div>)}
/>

<PropsTabs componentProps={componentProps} />
