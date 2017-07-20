import React from 'react';
import { Tooltip } from '../lib';

export default function Drawers() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>Tooltips</h2>
        </div>
        <div className="col-6">
          <h4>Subcomponents</h4>
          <Tooltip>
            <Tooltip.Trigger>Tooltip Trigger</Tooltip.Trigger>
            <Tooltip.Content>
              Only 8% of the world’s currency is physical money, the rest only
              exists on computers.
            </Tooltip.Content>
          </Tooltip>
        </div>
        <div className="col-6">
          <h4>Parameter Values</h4>
          <Tooltip
            Trigger="Tooltip trigger"
            Content="Shorthand invocation method"
          />
        </div>
      </div>
    </div>
  );
}
