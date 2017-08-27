import React from 'react'
import { State, Content, Toggle, Activate, Deactivate } from '../../lib'

export default function StateDemo() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>State</h2>
        </div>
        <div className="col-6">
          <State>
            <Toggle>State Toggle</Toggle>
            <Content>
              <p>
                Content display toggled by the <code>Toggle</code> component.
              </p>
              <State>
                <Activate>Open!</Activate>
                <Deactivate>Close!</Deactivate>
                <Content>
                  Content display toggled by the <code>Toggle</code> component.
                </Content>
              </State>
            </Content>
          </State>
        </div>
      </div>
    </div>
  )
}
