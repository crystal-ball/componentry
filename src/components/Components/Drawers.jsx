// @flow
import React from 'react'

import { Drawer } from '../../../lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Drawer component...</p>
        <Drawer>
          <Drawer.Trigger>
            <svg role="img" className="icon chevron font">
              <use href="#chevron" />
            </svg>
            Toggle Drawer
          </Drawer.Trigger>
          <Drawer.Content>
            The Motion Picture Academy refused to nominate Tron (1982) for a
            special-effects award because, according to director Steven Lisberger,
            “The Academy thought we cheated by using computers”
          </Drawer.Content>
        </Drawer>
      </div>
    </div>
  </div>
)
