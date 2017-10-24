// @flow
import React from 'react'
import Playground from 'component-playground'

import { Alert } from '../../../lib'
import componentExample from './examples/alert.txt'

function logDismiss() {
  console.log('dismiss')
}

export default () => (
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
