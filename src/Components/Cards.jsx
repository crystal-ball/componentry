import React from 'react';
import { Button, Card } from '../../lib';

export default function Cards() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-12">
          <p className="lead">Card component motivation...</p>
        </div>
        <div className="col-6">
          <Card>
            <Card.Header>Card Header</Card.Header>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card&apos;s content.
              </p>
              <Button color="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>2 days ago</Card.Footer>
          </Card>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <h2>Props</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Default</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Card.Header</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>Card.Body</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>Card.Footer</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>Card.Title</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>className</td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
