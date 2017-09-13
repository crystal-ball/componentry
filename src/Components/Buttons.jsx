import React from 'react'
import Playground from 'component-playground'

import { Button } from '../../lib'

/* eslint-disable import/no-webpack-loader-syntax */
const componentExample = require('raw-loader!./examples/button')

export default function Buttons() {
  return (
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
}
