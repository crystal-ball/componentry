import React from 'react'
import Playground from 'component-playground'

import { Tooltip } from '../../../lib'

/* eslint-disable import/no-webpack-loader-syntax */
const componentExample = require('raw-loader!./examples/tooltip')

export default function Tooltips() {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-12">
          <p className="lead">Tooltip component...</p>
          <Playground
            codeText={componentExample}
            docClass={Tooltip}
            scope={{ React, Tooltip }}
            theme="panda-syntax"
          />
        </div>
      </div>
    </div>
  )
}
