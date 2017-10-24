import React from 'react'
import Playground from 'component-playground'

import { Button } from '../../../lib'
import componentExample from './examples/button.txt'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Button component...</p>
        <Playground
          codeText={componentExample}
          docClass={Button}
          scope={{ React, Button }}
          theme="panda-syntax"
        />
      </div>
    </div>
  </div>
)
