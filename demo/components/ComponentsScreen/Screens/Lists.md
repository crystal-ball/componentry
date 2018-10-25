---
componentProps:
  - color: true
  - name: active
    description: Designates a list item as active, adding class active.
    type: boolean
    default: false
---

<ComponentsList components={['List', 'List.Item']} />

Flexible display capabilities for series of content.

The List will automatically render a `ul` and child `li` tags for lists of
elements without user interactions. Including a `href` or `onClick` wil return a
`div` with appropriate `a` or `Button` components for list items.

Note that list group items should *not* render the `btn` class. They are
separate components with distinct classes and styles!

<InteractiveDemo
  renderCode={() => `<Header as="h4" className="mt-3">List Items</Header>
<List>
  <List.Item>Item One</List.Item>
  <List.Item active>Item Two</List.Item>
  <List.Item>Item Three</List.Item>
  <List.Item disabled>Disabled</List.Item>
</List>
<Header as="h4" className="mt-3">Action List Items</Header>
<List>
  <List.Item onClick={() => {}}>Button One</List.Item>
  <List.Item active onClick={() => {}}>Button Two</List.Item>
  <List.Item onClick={() => {alert('CLICKED!')}} color="danger">
    Be Careful!
  </List.Item>
  <List.Item onClick={() => {}} disabled>Disabled</List.Item>
</List>`}
  renderComponent={() => (
    <div className="w-50">
      <Header as="h4" className="mt-3">List Items</Header>
      <List>
        <List.Item>Item One</List.Item>
        <List.Item active>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item disabled>Disabled</List.Item>
      </List>
      <Header as="h4" className="mt-3">Action List Items</Header>
      <List>
        <List.Item onClick={() => {}}>Button One</List.Item>
        <List.Item active onClick={() => {}}>Button Two</List.Item>
        <List.Item onClick={() => {alert('CLICKED!')}} color="danger">
          Be Careful!
        </List.Item>
        <List.Item onClick={() => {}} disabled>Disabled</List.Item>
      </List>
    </div>
  )}
/>

<SupportingInfo
  classes={['list-group-flush', ]}
  apis={['Items component', 'Theme colors']}
/>

<Alert color="info">
  ℹ️ Only the first list item is checked for an href or onClick to determine the
  List container tag. If you have a mixed list you can pass the desired tag
  or component using the `as` prop on the List.
</Alert>

<PropsTabs componentProps={componentProps} />
