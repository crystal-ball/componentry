---
defaults:
  color: primary
  outline: false
  size: null
  link: false
componentProps:
  - color: true
  - name: link
    description: Link buttons are styled to appear the same as <code>anchor</code> elements.
    type: boolean
    defaultValue: false
  - name: outline
    description: Outline buttons have a themed outline and white background appearance.
    type: boolean
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
    { label: 'outline', boolean: true },
    { label: 'size', options: this.props.sizes },
    {
      label: 'link',
      boolean: true,
      changeValues: {
        false: defaults,
        true: { color: null, size: null, outline: false, link: true }
      }
    },
  ]}
  renderCode={({ color, outline, size, link }) => `<Button${color ? ` color="${color}"` : ''}${outline ? ' outline' : ''}${size ? ` size="${size}"` : ''}${link ? ' link' : ''}>Click me!</Button>`}
  renderComponent={data => <Button {...data}>Click me!</Button>}
/>

<SupportingInfo
  classes={['btn-block', 'btn-group', 'btn-group-toggle']}
  apis={['Theme colors', 'Sized component']}
/>

#### <Icon id="stars" /> A++ Accessibility

When creating elements with user interaction it's important to use a button
element for any target that is not an anchor. Using a button element ensures
that screen readers are able to understand the intent of a user interacting with
that element. The Button component makes it easy to create semantic, accessible
button elements that look like anchors with the `link` prop.

<PropsTabs componentProps={componentProps} themeColors size />
