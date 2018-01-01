<p className="lead">ListGroup component...</p>

## Button list

<ListGroup className="w-50">
  <ListGroup.Item onClick={testClick}>Button One</ListGroup.Item>
  <ListGroup.Item onClick={testClick}>Button Two</ListGroup.Item>
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
