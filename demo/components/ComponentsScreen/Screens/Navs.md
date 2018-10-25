---
componentProps:
  - name: fill
    description: Toggles the fill style so that nav items fill the nav container based on their width.
    type: boolean
    default: false
  - name: justify
    description: Togles the justify styles so that nav items fill the nav container using an equal width.
    default: false
    type: boolean
  - name: pills
    description: Toggles the nav item 'pill' styles.
    default: false
    type: boolean
  - name: vertical
    description: Toggles flex column classes to create a vertically oriented nav.
    default: false
    type: boolean
---

<ComponentsList components={['Nav', 'Nav.Item']} />

Create structured navs or custom navigation elements using the base Nav
component.

The base Nav component and styles creates a flexible flexbox container with
options for composing navigation into other components. By default the Nav
component creates a `nav` tag with either `a` or Button elements for nav items,
but the tags used can be specified using the `as` prop.

Like the `List.Item` component, the `Nav.Item` has a base class `nav-item` that
is added to any element. The modifier `nav-item-action` is added to button and
anchor elements to provide user interaction styles.

<InteractiveDemo
  defaults={{ fill: false, justify: false, pills: false, vertical: false }}
  formFields={[
    { label: 'fill', boolean: true },
    { label: 'justify', boolean: true },
    { label: 'pills', boolean: true },
    { label: 'vertical', boolean: true },
  ]}
  renderCode={({ fill, justify, pills, vertical }) => `<Nav${pills ? ' pills' : ''}${vertical ? ' vertical' : ''}${fill ? ' fill' : ''}${justify ? ' justify' : ''}>
  <Nav.Item href="#" active>Active</Nav.Item>
  <Nav.Item href="#">Link</Nav.Item>
  <Nav.Item onClick={() => console.log('hi')}>Link</Nav.Item>
  <Nav.Item href="#" disabled>Disabled</Nav.Item>
</Nav>`}
  renderComponent={configs => (
    <div className="w-75">
      <Nav {...configs}>
        <Nav.Item href="#" active>Active</Nav.Item>
        <Nav.Item href="#">Link</Nav.Item>
        <Nav.Item onClick={() => console.log('hi')}>Link</Nav.Item>
        <Nav.Item href="#" disabled>Disabled</Nav.Item>
      </Nav>
    </div>
  )}
/>

<SupportingInfo apis={['Items component']} />

<PropsTabs componentProps={componentProps} />
