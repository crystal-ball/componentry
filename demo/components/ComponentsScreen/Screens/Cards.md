<ComponentsList
  components={['Card', 'Card.Header', 'Card.Body', 'Card.Title', 'Card.Footer']}
/>

Flexible and extensible content containers with multiple variants and options.

A card is a flexible and extensible content container. It includes options for
headers and footers, a wide variety of content, contextual background colors,
and powerful display options.

<InteractiveDemo
  renderCode={() => `<Card>
  <Card.Header>Card Header</Card.Header>
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <p className="card-text">Card Body Content.</p>
  </Card.Body>
  <Card.Footer>2 days ago</Card.Footer>
</Card>`}
  renderComponent={() => (
    <Card className="w-50">
      <Card.Header>Card Header</Card.Header>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <p className="card-text">Example of card body content.</p>
        <p className="card-text">
          Using the <code>card-text</code> class with card content will set the
          bottom margin of the last child to zero for consistent whitespace.
        </p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </Card.Body>
      <Card.Footer>2 days ago</Card.Footer>
    </Card>
  )}
/>

<SupportingInfo
  classes={[
    'card-text',
    'card-subtitle',
    'card-link',
    'card-img-top',
    'card-img-bottom',
    'card-img-overlay',
    'card-header-tabs',
    'card-group',
    'card-deck',
    'card-columns'
  ]}
/>

<PropsTabs />
