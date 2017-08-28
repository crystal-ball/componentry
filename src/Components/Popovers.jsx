import React from 'react'
import { Popover } from '../../lib'

export default function Popovers() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>Popovers</h2>
        </div>
        <div className="col-12">
          <Popover>
            <Popover.Toggle color="primary" outline>
              Popover Trigger
            </Popover.Toggle>
            <Popover.Content className="top">
              The new Texas Instrument calculators have ABC keyboards because if
              they had QWERTY keyboards, they would be considered computers and
              wouldn’t be allowed for standardized test taking
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Toggle color="primary" outline>
              Popover Trigger
            </Popover.Toggle>
            <Popover.Content className="bottom">
              The new Texas Instrument calculators have ABC keyboards because if
              they had QWERTY keyboards, they would be considered computers and
              wouldn’t be allowed for standardized test taking
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Toggle color="primary" outline>
              Popover Trigger
            </Popover.Toggle>
            <Popover.Content className="right">
              The new Texas Instrument calculators have ABC keyboards because if
              they had QWERTY keyboards, they would be considered computers and
              wouldn’t be allowed for standardized test taking
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Toggle color="primary" outline>
              Popover Trigger
            </Popover.Toggle>
            <Popover.Content className="left">
              The new Texas Instrument calculators have ABC keyboards because if
              they had QWERTY keyboards, they would be considered computers and
              wouldn’t be allowed for standardized test taking
            </Popover.Content>
          </Popover>
        </div>
      </div>
    </div>
  )
}
