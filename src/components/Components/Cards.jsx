// @flow
import React from 'react'
import Playground from 'component-playground'

import { Button, Card } from '../../../lib'
import componentExample from './examples/card.txt'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Card component...</p>
        <Playground
          codeText={componentExample}
          docClass={Card}
          scope={{ React, Button, Card }}
          theme="panda-syntax"
        />
      </div>
    </div>
  </div>
)
