import React from 'react'
import Playground from 'component-playground'

import { Alert } from '../../../lib'

/* eslint-disable import/no-webpack-loader-syntax */
const componentExample = require('raw-loader!./examples/alert')

export default function Alerts() {
  function logDismiss() {
    console.log('dismiss')
  }

  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-12">
          <p className="lead">Alert component...</p>
          <Playground
            codeText={componentExample}
            docClass={Alert}
            scope={{ React, Alert, logDismiss }}
            theme="panda-syntax"
          />
        </div>
      </div>
    </div>
  )
}
