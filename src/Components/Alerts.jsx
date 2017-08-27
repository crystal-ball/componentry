import React from 'react'
import { Alert } from '../../lib'

export default function Alerts() {
  function logDismiss() {
    console.log('dismiss')
  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <p className="lead">Alert component motivation...</p>
          <Alert color="success" onDismiss={logDismiss}>
            <strong>Well done!</strong> You successfully read this important alert
            message.
          </Alert>
          <Alert color="info">
            <strong>Heads up!</strong> This alert needs your attention, but
            it&apos;s not super important.
          </Alert>
          <Alert color="warning" visibilityTransitionLength={400}>
            <strong>Warning!</strong> Better check yourself, you&apos;re not looking
            too good.
          </Alert>
          <Alert color="danger" dismissable={false}>
            <strong>Oh snap!</strong> Change a few things up and try submitting
            again.
          </Alert>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <h2>Props</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Default</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>color</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>dismissable</td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
