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

The Button component is the base component for any element that has a user
interaction in the library. Use Button components for actions in forms, dialogs
and more.

#### A++ Accessibility

See the <Link to="/concepts/accessibility">A++ accessibility guide</Link> for
information on the importance of using a button element for any user interaction
target that is not an anchor element.

<InteractiveDemo
  defaults={defaults}
  formFields={[
    { label: 'Theme color', options: this.props.colors, id: 'color' },
    { label: 'Outline', boolean: true, id: 'outline' },
    { label: 'Size', options: this.props.sizes, id: 'size' },
    <hr />,
    {
      label: 'Link',
      boolean: true,
      id: 'link',
      changeValues: {
        false: defaults,
        true: { color: null, size: null, outline: false, link: true }
      }
    },
  ]}
  renderCode={({ color, outline, size, link }) => `<Button${color ? ` color="${color}"` : ''}${outline ? ' outline' : ''}${size ? ` size="${size}"` : ''}${link ? ' link' : ''}>Click me!</Button>`}
  renderComponent={data => <Button {...data}>Click me!</Button>}
/>

<PropsDocs componentProps={componentProps} themeColors size />
