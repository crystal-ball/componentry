---
defaults:
  size: null
formFields:
  - label: size
    options: ['sm', 'lg']
---
<ComponentsList components={['ButtonGroup', 'ButtonGroup.Button']} />

Create select options in a button styles.

The <Mono>ButtonGroup</Mono> component composes the <Mono>Active</Mono> and{' '}
<Mono>Button</Mono> components to create a flex wrapper that uses an `activeId` to switch
an `.active` class between inner <Mono>ButtonGroup.Button</Mono> components. Each button
in the group should be passed `color` and `activeId` props, and can accept any of the{' '}
<Anchor to="/components/buttons">Button</Anchor> props.

<InteractiveDemo
  defaults={defaults}
  formFields={formFields}
  renderCode={data => `<ButtonGroup  aria-label="Select OS" defaultActive="mac"${props.renderPropsText(data)}>
  <ButtonGroup.Button color="primary" activeId="linux">
    Linux
  </ButtonGroup.Button>
  <ButtonGroup.Button color="primary" activeId="mac">
    MacOS
  </ButtonGroup.Button>
  <ButtonGroup.Button color="primary" activeId="windows">
    Window
  </ButtonGroup.Button>
</ButtonGroup>`}
  renderComponent={data => <ButtonGroup  aria-label="Select OS" defaultActive="mac" {...data}>
    <ButtonGroup.Button color="primary" activeId="linux">
      Linux
    </ButtonGroup.Button>
    <ButtonGroup.Button color="primary" activeId="mac">
      MacOS
    </ButtonGroup.Button>
    <ButtonGroup.Button color="primary" activeId="windows">
      Window
    </ButtonGroup.Button>
  </ButtonGroup>}
/>

<SupportingInfo
  classes={['btn-group-vertical']}
  apis={['Active component', 'Sized component']}
/>

#### <Icon id="stars" /> A++ Accessibility

You should pass the <Mono>ButtonGroup</Mono> component a `label` prop describing the group
for assistive technologies (such as screen readers).

_Note the Componentry ButtonGroup does not support a single button checkbox
style. The checkbox style will be a separate ButtonToggle component that looks
like a switch._
