// @flow
import React from 'react'
import Playground from 'component-playground'

import { Popover } from '../../../lib'
import componentExample from './examples/popover.txt'

export default () => (
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
