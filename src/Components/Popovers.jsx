import React from 'react'
import Playground from 'component-playground'

import { Popover } from '../../lib'

/* eslint-disable import/no-webpack-loader-syntax */
const componentExample = require('raw-loader!./examples/popover')

export default function Popovers() {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-12">
          <p className="lead">Popover component...</p>
          <Playground
            codeText={componentExample}
            docClass={Popover}
            scope={{ React, Popover }}
            theme="panda-syntax"
          />
        </div>
      </div>
    </div>
  )
}
