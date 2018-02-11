<ComponentsList components={['ListGroup', 'ListGroup.Item']} />

ListGroup component...

## Button list

<ListGroup className="w-50">
  <ListGroup.Item onClick={() => {}}>Button One</ListGroup.Item>
  <ListGroup.Item onClick={() => {}}>Button Two</ListGroup.Item>
</ListGroup>

### Link list

<ListGroup className="w-50">
  <ListGroup.Item href="#" active>
    Link One
  </ListGroup.Item>
  <ListGroup.Item href="#">Link Two</ListGroup.Item>
</ListGroup>

### Plain list

<ListGroup className="w-50">
  <ListGroup.Item>Item One</ListGroup.Item>
  <ListGroup.Item>Item Two</ListGroup.Item>
</ListGroup>
