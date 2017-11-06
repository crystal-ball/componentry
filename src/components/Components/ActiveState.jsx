// @flow
import React from 'react'

import { State } from '../../../lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">State component...</p>
        <h3>FaCC pattern</h3>
        <p>
          Component accepts a function as children (FaCC pattern) that will be
          called with the `activate` and `deactivate` state change handlers as well
          as the current `active` state of the component.
        </p>

        <h3>Activate/Deactivate only</h3>
        <p>
          The `Trigger` component is automatically wired with `activate` or
          `deactivate` according to the current active state. You can use FaCC to
          access the active state change methods and explicilty set the `onClick` of
          any element to only `activate` or `deactivate`
        </p>
        <State>
          <State.Trigger>State Toggle</State.Trigger>
          <State.Content>
            <p>
              Content display toggled by the <code>Toggle</code> component.
            </p>
            <State>
              {({ active, activate, deactivate }) => [
                <State.Trigger onClick={activate} key="a">
                  Open only!
                </State.Trigger>,
                <State.Trigger onClick={deactivate} key="d">
                  Close only!
                </State.Trigger>,
                <p key="p">Current nested state: {String(active)}</p>,
                <State.Content key="c">
                  Content display toggled by the <code>Toggle</code> component.
                </State.Content>
              ]}
            </State>
          </State.Content>
        </State>
      </div>
    </div>
  </div>
)
