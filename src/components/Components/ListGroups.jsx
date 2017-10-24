// @flow
import React from 'react'
import Playground from 'component-playground'

import { ListGroup } from '../../../lib'
import componentExample from './examples/list-group.txt'

const testClick = () => console.log('click')

export default () => (
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
