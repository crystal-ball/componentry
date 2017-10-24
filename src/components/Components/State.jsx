// @flow
import React from 'react'
import Playground from 'component-playground'

import { State } from '../../../lib'
import componentExample from './examples/state.txt'

export default () => (
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
