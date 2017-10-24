// @flow
import React from 'react'
import Playground from 'component-playground'

import { Tooltip } from '../../../lib'
import componentExample from './examples/tooltip.txt'

export default () => (
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
