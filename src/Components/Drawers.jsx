import React from 'react';
import { Drawer } from '../../lib';

export default function Drawers() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>Drawers</h2>
        </div>
        <div className="col-6">
          <h4>Subcomponents</h4>
          <Drawer>
            <Drawer.Trigger>
              <span className="chevron-icon" /> Toggle Drawer
            </Drawer.Trigger>
            <Drawer.Content>
              The Motion Picture Academy refused to nominate Tron (1982) for a
              special-effects award because, according to director Steven Lisberger,
              “The Academy thought we cheated by using computers”
            </Drawer.Content>
          </Drawer>
        </div>
        <div className="col-6">
          <h4>Parameter Values</h4>
          <Drawer Trigger="Toggle Drawer" Content="Short hand syntax" />
        </div>
      </div>
    </div>
  );
}
