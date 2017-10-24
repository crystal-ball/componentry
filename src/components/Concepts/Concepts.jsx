// @flow
import React from 'react'

import Header from 'components/universal/Header'

type Props = {
  match: {
    params: { concept: string }
  }
}

export default ({ match }: Props) => {
  const { concept } = match.params

  return (
    <div>
      <div className="fullscreen-row">
        <Header title={concept} />
      </div>

      <div className="row">
        <div className="col-10" />
      </div>
    </div>
  )
}
