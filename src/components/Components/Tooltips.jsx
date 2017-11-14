// @flow
import React from 'react'

import { Tooltip } from '../../../lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Tooltip component...</p>
        <Tooltip>
          <Tooltip.Trigger>Tooltip Trigger</Tooltip.Trigger>
          <Tooltip.Content>
            Only 8% of the world’s currency is physical money, the rest only exists
            on computers.
          </Tooltip.Content>
        </Tooltip>
        <Tooltip
          Trigger="Tooltip Trigger"
          Content="Only 8% of the world’s currency is physical money, the rest only exists on computers."
        />
      </div>
    </div>
  </div>
)
