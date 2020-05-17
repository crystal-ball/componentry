import React from 'react'

import DocumentTitle from 'components/universal/DocumentTitle'
import Jetpack from './Jetpack.md'

export default () => (
  <div className="container">
    <DocumentTitle title="Jetpack collection · Componentry" />
    <div className="row">
      <div className="col-12">
        <Jetpack />
      </div>
    </div>
  </div>
)
