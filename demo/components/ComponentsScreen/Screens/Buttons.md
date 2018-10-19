---
defaults:
  anchor: false
  block: false
  color: primary
  outline: null
  size: null
  disabled: false
  fontWeight: null
componentProps:
  - color: true
  - name: anchor
    description: Anchor buttons are styled to appear the same as <code>anchor</code> elements.
    type: boolean
    defaultValue: false
  - name: outline
    description: Outline buttons have a themed outline and white background appearance.
    type: ['primary','secondary','success','danger','warning','info','light','dark']
    defaultValue: false
  - size: true
---
<ComponentsList components={['Button']} />

Create meaningful user interaction targets with support for theme, size and
outline variants.

The Button component is the default element created by the Active.Trigger
component, so the Button component API is available for all elements with an
interaction target.

Buttons can be customized with theme color, size and outline variants to provide
the exact styles needed.

<InteractiveDemo
  defaults={defaults}
  formFields={[
    { label: 'color', options: [...this.props.colors, 'link'] },
    { label: 'outline',options: [...this.props.colors, 'link'] },
    { label: 'block', boolean: true },
    { label: 'size', options: this.props.sizes },
    {
      label: 'anchor',
      boolean: true,
      changeValues: {
        false: defaults,
        true: { color: null, size: null, outline: false, anchor: true }
      }
    },
    {
      label: 'disabled',
      boolean: true,
    },
    'Typography API',
    { label: 'fontWeight', options: ['light', 'normal', 'bold'] },
    { label: 'fontSize', string: true },
    { label: 'letterSpacing', string: true },
    { label: 'textAlign', string: true }
  ]}
  renderCode={data => `<Button${props.renderPropsText(data)}>Click me!</Button>`}
  renderComponent={data => <Button {...data}>Click me!</Button>}
/>

<SupportingInfo
  classes={['btn-container-x', 'btn-container-y']}
  apis={['Theme colors', 'Sized component']}
/>

#### Containers

The `btn-container-x` and `btn-container-y` classes can be added to a containing
element to automatically add spacing between buttons (Useful for creating groups
of buttons automatically).

<InteractiveDemo
  renderCode={data => `<div className="btn-container-x">
  <Button outline="dark">Cancel</Button>
  <Button color="primary">Confirm</Button>
</div>`}
  renderComponent={data => (<div className="btn-container-x">
  <Button outline="dark">Cancel</Button>
  <Button color="primary">Confirm</Button>
</div>)}
/>


#### <Icon id="stars" /> A++ Accessibility

When creating elements with user interaction it's important to use a button
element for any target that is not an anchor. Using a button element ensures
that screen readers are able to understand the intent of a user interacting with
that element. The Button component makes it easy to create semantic, accessible
button elements that look like anchors with the `anchor` prop.

## Advanced theming

Advanced button theming is available to control: darken percent for hover and
active states, single disabled style, text transform and text weight.

<PropsTabs componentProps={componentProps} themeColors size />
