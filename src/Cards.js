import React from 'react';
import { Button, Card } from '../lib';

export default function Buttons() {
  return (
    <div>
      <h2>Cards</h2>
      <div className="row justify-content-center">
        <div className="col-6">
          <Card>
            <Card.Header>Card Header</Card.Header>
            <Card.Block>
              <Card.Title>Card title</Card.Title>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card&apos;s content.
              </p>
              <Button color="primary">Go somewhere</Button>
            </Card.Block>
            <Card.Footer>2 days ago</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
