---
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

<InteractiveDemo
  defaults={formDefaults}
  formFields={formFields}
  renderCode={data => (`<div>
  <Header${props.renderPropsText(data)}>Header element</Header>
  <Text${props.renderPropsText(data)}>Text element</Text>
  <Anchor href="#" ${props.renderPropsText(data)}>Anchor element</Anchor>
 </div>`
   )}
  renderComponent={data => (<div>
  <Header {...data}>Header element</Header>
  <Text {...data}>Text element</Text>
  <Anchor href="#" {...data}>Anchor element</Anchor>
 </div>)}
/>

<PropsTabs />
