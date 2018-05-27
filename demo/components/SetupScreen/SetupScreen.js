import React from 'react'
import DocumentTitle from 'react-document-title'

import Setup from './Setup.md'

export default () => (
  <div className="container">
    <DocumentTitle title="Setup · Componentry" />
    <div className="row">
      <div className="col-9">
        <Setup />
      </div>
    </div>
  </div>
)
