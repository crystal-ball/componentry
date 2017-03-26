import React from 'react';
import { ListGroup } from '../components';

function testClick() {
  console.log('click');
}

export default function ListGroups() {
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <h2>List Groups</h2>
          <ListGroup>
            <ListGroup.Item>Text One</ListGroup.Item>
            <ListGroup.Item>Text Two</ListGroup.Item>
            <ListGroup.Item>Text Three</ListGroup.Item>
          </ListGroup>
          <br />
          <br />

          <ListGroup>
            <ListGroup.Item onClick={testClick}>Text One</ListGroup.Item>
            <ListGroup.Item onClick={testClick}>Text Two</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
