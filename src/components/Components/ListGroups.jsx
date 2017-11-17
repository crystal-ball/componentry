// @flow
import React from 'react'

import { ListGroup } from '../../../lib'

const testClick = () => console.log('click')

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">ListGroup component...</p>
        <h3>Button list</h3>
        <ListGroup className="w-50">
          <ListGroup.Item onClick={testClick}>Button One</ListGroup.Item>
          <ListGroup.Item onClick={testClick}>Button Two</ListGroup.Item>
        </ListGroup>
        <h3>Link list</h3>
        <ListGroup className="w-50">
          <ListGroup.Item href="#" active>
            Link One
          </ListGroup.Item>
          <ListGroup.Item href="#">Link Two</ListGroup.Item>
        </ListGroup>
        <h3>Plain list</h3>
        <ListGroup className="w-50">
          <ListGroup.Item>Item One</ListGroup.Item>
          <ListGroup.Item>Item Two</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  </div>
)
