import React from 'react'
import DocumentTitle from 'react-document-title'

import GettingStarted from './GettingStarted.md'

export default () => (
  <div className="container">
    <DocumentTitle title="Getting started · Componentry" />
    <div className="row">
      <div className="col-9">
        <GettingStarted />
      </div>
    </div>
  </div>
)
