---
componentProps:
  - color: true
  - name: active
    description: Designates a list item as active, adding class active.
    type: boolean
    default: false
---

<ComponentsList components={['ListGroup', 'ListGroup.Item']} />

Flexible display capabilities for series of content.

The ListGroup will automatically render a `ul` and child `li` tags for lists of
elements without user interactions. Including a `href` or `onClick` wil return a
`div` with appropriate `a` or `Button` components for list items.

<InteractiveDemo
  renderCode={() => `<ListGroup>
  <ListGroup.Item>Item One</ListGroup.Item>
  <ListGroup.Item active>Item Two</ListGroup.Item>
  <ListGroup.Item>Item Three</ListGroup.Item>
</ListGroup>`}
  renderComponent={() => (
    <div className="w-50">
      <ListGroup>
        <ListGroup.Item color="info">Item One</ListGroup.Item>
        <ListGroup.Item active>Item Two</ListGroup.Item>
        <ListGroup.Item>Item Three</ListGroup.Item>
      </ListGroup>
    </div>
  )}
/>

<SupportingInfo
  classes={['list-group-flush', ]}
  apis={['Items component', 'Theme colors']}
/>

<Alert color="info">
  ℹ️ Only the first list item is checked for an href or onClick to determine the
  ListGroup container tag. If you have a mixed list you can pass the desired tag
  or component using the `as` prop on the ListGroup.
</Alert>

<PropsTabs componentProps={componentProps} />
