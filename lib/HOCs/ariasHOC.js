import React, { Component } from 'react';
import { bool, shape, string } from 'prop-types';

import getDisplayName from '../utils/getDisplayName';

/**
 * Decorator for including aria attributes with components. Decorated components must
 * have a `guid` and `active` prop that can be used with the flags in `arias`.
 * @export
 * @param {React.Component} WrappedComponent Component to decorate with arias
 * @returns {React.Component}
 */
export default function ariasHOC(WrappedComponent) {
  return class WithArias extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    static ROLE = WrappedComponent.ROLE

    static propTypes = {
      active: bool,
      arias: shape({
        controls: bool,
        describedby: bool,
        expanded: bool,
        haspopup: bool,
        hidden: bool,
        id: bool,
        labelledby: bool,
        role: string,
      }),
      guid: string,
    }

    // guid && active cannot be marked as required b/c the original component never has it set?
    static defaultProps = {
      active: undefined,
      arias: {
        controls: false,
        describedby: false,
        expanded: false,
        haspopup: false,
        hidden: false,
        id: false,
        labelledby: false,
        role: null,
      },
      guid: undefined,
    }

    render() {
      let {
        active,
        arias: {
          controls,
          describedby,
          expanded,
          haspopup,
          hidden,
          id,
          labelledby,
          role,
        },
        guid,
        ...other
      } = this.props;

      return (
        <WrappedComponent
          {...other}
          aria-controls={controls ? guid : null}
          aria-describedby={describedby ? guid : null}
          aria-expanded={expanded ? String(active) : null}
          aria-haspopup={haspopup ? 'true' : null}
          aria-hidden={hidden ? String(!active) : null}
          aria-labelledby={labelledby ? guid : null}
          id={id ? guid : null}
          role={role}
        />
      );
    }
  };
}
