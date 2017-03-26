import React from 'react';
import { Button, Card } from '../index';

export default function Buttons() {
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <h2>Cards</h2>
          <Card>
            <Card.Header>
              Featured
            </Card.Header>
            <Card.Block>
              <h4 className='card-title'>Card title</h4>
              <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
              <Button color='primary'>Go somewhere</Button>
            </Card.Block>
            <Card.Footer>
              2 days ago
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
