import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/components/alerts" activeClassName="active">
          Alerts
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/buttons" activeClassName="active">
          Buttons
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/cards" activeClassName="active">
          Cards
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/drawers" activeClassName="active">
          Drawers
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/dropdowns" activeClassName="active">
          Dropdowns
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/icons" activeClassName="active">
          Icons
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/list-groups" activeClassName="active">
          List Groups
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/modals" activeClassName="active">
          Modals
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/popovers" activeClassName="active">
          Popovers
        </NavLink>
      </div>
      <div>
        <NavLink to="/components/tooltips" activeClassName="active">
          Tooltips
        </NavLink>
      </div>
    </nav>
  );
}
