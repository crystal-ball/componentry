import React from 'react';
import { ListGroup } from '../../lib';

function testClick() {
  console.log('click');
}

export default function ListGroups() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>List Groups</h2>
          <h4 className="mt-3">Plain Text List</h4>
          <ListGroup>
            <ListGroup.Item>Text Only One</ListGroup.Item>
            <ListGroup.Item>Text Only Two</ListGroup.Item>
            <ListGroup.Item>Text Only Three</ListGroup.Item>
          </ListGroup>

          <h4 className="mt-3">Button List</h4>
          <ListGroup>
            <ListGroup.Item onClick={testClick}>Button One</ListGroup.Item>
            <ListGroup.Item onClick={testClick}>Button Two</ListGroup.Item>
          </ListGroup>

          <h4 className="mt-3">Links List</h4>
          <ListGroup>
            <ListGroup.Item href="https://facebook.github.io/react/">
              Link One
            </ListGroup.Item>
            <ListGroup.Item href="https://facebook.github.io/react/">
              Link Two
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
