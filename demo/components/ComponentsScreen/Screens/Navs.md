---
componentProps:
  - name: pills
    description: Toggles the nav item 'pill' styles.
    defaultValue: "false"
    type: boolean
  - name: vertical
    description: Toggles flex column classes to create a vertically oriented nav.
    defaultValue: "false"
    type: boolean
---

<ComponentsList components={['Nav', 'Nav.Item']} />

Create structured navs or custom navigation elements using the base Nav
component.

The base Nav component and styles creates a flexible flexbox container with
options for composing navigation into other components. By default the Nav
component creates a `nav` tag with either `a` or Button elements for nav items,
but the tags used can be specified using the `as` prop.

<InteractiveDemo
  defaults={{ pills: false, vertical: false }}
  formFields={[
    { label: 'pills', boolean: true },
    { label: 'vertical', boolean: true },
  ]}
  renderCode={({ pills, vertical }) => `<Nav${pills ? ' pills' : ''}${vertical ? ' vertical' : ''}>
  <Nav.Item href="#" active>Item 1</Nav.Item>
  <Nav.Item href="#">Item 2</Nav.Item>
  <Nav.Item href="#">Item 3</Nav.Item>
</Nav>`}
  renderComponent={({ pills, vertical }) => (
    <Nav pills={pills} vertical={vertical}>
      <Nav.Item href="#" active>Item 1</Nav.Item>
      <Nav.Item href="#">Item 2</Nav.Item>
      <Nav.Item href="#">Item 3</Nav.Item>
    </Nav>
  )}
/>

<PropsTabs componentProps={componentProps} />
