<ComponentsList
  components={['Card', 'Card.Header', 'Card.Body', 'Card.Title', 'Card.Footer']}
/>

Cards provide a flexible and extensible content container with multiple variants
and options.

<Card>
  <Card.Body>
    <Card className="w-50">
      <Card.Header>Card Header</Card.Header>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <p className="card-text">Card Body Content.</p>
      </Card.Body>
      <Card.Footer>2 days ago</Card.Footer>
    </Card>
  </Card.Body>
</Card>

<PrismHighlighter language="jsx">
{`<Card className="w-50">
  <Card.Header>Card Header</Card.Header>
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <p className="card-text">Card Body Content.</p>
  </Card.Body>
  <Card.Footer>2 days ago</Card.Footer>
</Card>`}
</PrismHighlighter>
