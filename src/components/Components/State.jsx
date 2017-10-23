import React from 'react'
import Playground from 'component-playground'

import { State } from '../../../lib'

/* eslint-disable import/no-webpack-loader-syntax */
const componentExample = require('raw-loader!./examples/state')

export default function States() {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-12">
          <p className="lead">State component...</p>
          <Playground
            codeText={componentExample}
            docClass={State}
            scope={{ React, State }}
            theme="panda-syntax"
          />
        </div>
      </div>
    </div>
  )
}
