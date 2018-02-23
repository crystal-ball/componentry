---
componentProps:
  - name: fill
    description: Toggles the fill style so that nav items fill the nav container based on their width.
    type: boolean
    defaultValue: "false"
  - name: justify
    description: Togles the justify styles so that nav items fill the nav container using an equal width.
    defaultValue: "false"
    type: boolean
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
  defaults={{ fill: false, justify: false, pills: false, vertical: false }}
  formFields={[
    { label: 'fill', boolean: true },
    { label: 'justify', boolean: true },
    { label: 'pills', boolean: true },
    { label: 'vertical', boolean: true },
  ]}
  renderCode={({ fill, justify, pills, vertical }) => `<Nav${pills ? ' pills' : ''}${vertical ? ' vertical' : ''}${fill ? ' fill' : ''}${justify ? ' justify' : ''}>
  <Nav.Item href="#" active>Item 1</Nav.Item>
  <Nav.Item href="#">Item 2</Nav.Item>
  <Nav.Item href="#">Item 3</Nav.Item>
</Nav>`}
  renderComponent={({ fill, justify, pills, vertical }) => (
    <div className="w-75">
      <Nav pills={pills} vertical={vertical} fill={fill} justify={justify}>
        <Nav.Item href="#" active>Item 1</Nav.Item>
        <Nav.Item href="#">Item 2</Nav.Item>
        <Nav.Item href="#">Item 3</Nav.Item>
      </Nav>
    </div>
  )}
/>

<PropsTabs componentProps={componentProps} />
