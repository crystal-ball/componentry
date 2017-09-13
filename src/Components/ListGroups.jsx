import React from 'react'
import Playground from 'component-playground'

import { ListGroup } from '../../lib'

function testClick() {
  console.log('click')
}

/* eslint-disable import/no-webpack-loader-syntax */
const componentExample = require('raw-loader!./examples/list-group')

export default function ListGroups() {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-12">
          <p className="lead">ListGroup component...</p>
          <Playground
            codeText={componentExample}
            docClass={ListGroup}
            scope={{ React, ListGroup, testClick }}
            theme="panda-syntax"
          />
        </div>
      </div>
    </div>
  )
}
