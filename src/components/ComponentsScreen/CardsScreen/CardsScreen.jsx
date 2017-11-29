// @flow
import React from 'react'

import { Card } from 'componentry-lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Card component...</p>
        <Card className="w-50">
          <Card.Header>Card Header</Card.Header>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <p className="card-text">Card Body Content.</p>
          </Card.Body>
          <Card.Footer>2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  </div>
)
