// @flow
import React from 'react'
import Playground from 'component-playground'

import { Drawer } from '../../../lib'
import componentExample from './examples/drawer.txt'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Drawer component...</p>
        <Playground
          codeText={componentExample}
          docClass={Drawer}
          scope={{ React, Drawer }}
          theme="panda-syntax"
        />
      </div>
    </div>
  </div>
)
