// @flow
import React from 'react'

import { Active } from 'componentry-lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Active component...</p>
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
        <Active>
          <Active.Trigger>State Toggle</Active.Trigger>
          <Active.Content>
            <p>
              Content display toggled by the <code>Toggle</code> component.
            </p>
            <Active>
              {({ active, activate, deactivate }) => [
                <Active.Trigger onClick={activate} key="a">
                  Open only!
                </Active.Trigger>,
                <Active.Trigger onClick={deactivate} key="d">
                  Close only!
                </Active.Trigger>,
                <p key="p">Current nested state: {String(active)}</p>,
                <Active.Content key="c">
                  Content display toggled by the <code>Toggle</code> component.
                </Active.Content>,
              ]}
            </Active>
          </Active.Content>
        </Active>
      </div>
    </div>
  </div>
)
