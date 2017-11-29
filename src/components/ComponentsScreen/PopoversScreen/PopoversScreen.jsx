// @flow
import React from 'react'

import { Popover } from 'componentry-lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Popover component...</p>
        <Popover>
          <Popover.Trigger color="primary" outline>
            Popover Trigger
          </Popover.Trigger>
          <Popover.Content className="right">
            <Popover.Header>Fun Fact!</Popover.Header>
            <Popover.Body>
              The new Texas Instrument calculators have ABC keyboards because if
              they had QWERTY keyboards, they would be considered computers and
              wouldn’t be allowed for standardized test taking
            </Popover.Body>
          </Popover.Content>
        </Popover>
      </div>
    </div>
  </div>
)
