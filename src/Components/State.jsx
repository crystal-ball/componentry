import React from 'react'
import { State } from '../../lib'

export default function StateDemo() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>State</h2>
        </div>
        <div className="col-6">
          <State>
            <State.Toggle>State Toggle</State.Toggle>
            <State.Content>
              <p>
                Content display toggled by the <code>Toggle</code> component.
              </p>
              <State>
                <State.Activate>Open!</State.Activate>
                <State.Deactivate>Close!</State.Deactivate>
                <State.Content>
                  Content display toggled by the <code>Toggle</code> component.
                </State.Content>
              </State>
            </State.Content>
          </State>
        </div>
      </div>
    </div>
  )
}
