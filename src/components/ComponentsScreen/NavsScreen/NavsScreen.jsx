import React from 'react'

import { Nav } from 'componentry-lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Nav component...</p>
        <Nav pills>
          <Nav.Item href="#">Item 1</Nav.Item>
          <Nav.Item href="#">Item 2</Nav.Item>
          <Nav.Item href="#">Item 3</Nav.Item>
        </Nav>
      </div>
    </div>
  </div>
)
