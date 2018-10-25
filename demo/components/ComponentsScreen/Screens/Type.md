---
formFields:
  - label: color
    options: [primary, secondary, success, info, warning, danger, light, dark, white, muted, body]
  - label: fontWeight
    options: [light, normal, bold]
  - label: italic
    boolean: true
  - label: size
    options: [sm, lg]
formDefaults:
  color: null
  fontWeight: null
  italic: false
  size: null
---
<ComponentsList components={['Anchor', 'Header']} />

Create consistent typography elements.

Notes:

- `fontSize`, `letterSpacing` accepts string | number: string converted to px value
- `lineHeight` type number is converted to unitless value (= element font size x unit)
- `color` accepts all color values, plus

<InteractiveDemo
  defaults={formDefaults}
  formFields={formFields}
  renderCode={formData => (
    `<Text${props.renderPropsText(formData)}>Text element</Text>`
   )}
  renderComponent={formData => <Text {...formData}>text element</Text>}
/>

<InteractiveDemo
  renderCode={() => `<Anchor href="#">Anchor element</Anchor>`}
  renderComponent={() => <Anchor href="#">Anchor element</Anchor>}
/>

<Header header="h2">Headers</Header>

<InteractiveDemo
  defaults={{ as: 'h1' }}
  formFields={[
    { label: 'as', options: ['h1', 'h2', 'h3', 'h4', 'h5'] },
  ]}
  renderCode={({ header, muted }) => `<Header as="${header}">Headers</Header>`}
  renderComponent={opts => <Header {...opts}>Headers</Header>}
/>
