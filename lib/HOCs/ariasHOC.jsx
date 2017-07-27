import React from 'react';
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
  function WithArias({
    active,
    arias: {
      controls,
      describedby,
      expanded,
      haspopup,
      hidden,
      id,
      labelledby,
      role
    },
    guid,
    ...other
  }) {
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

  WithArias.displayName = `ariasHOC(${getDisplayName(WrappedComponent)})`;
  WithArias.ROLE = WrappedComponent.ROLE;

  WithArias.propTypes = {
    active: bool,
    arias: shape({
      controls: bool,
      describedby: bool,
      expanded: bool,
      haspopup: bool,
      hidden: bool,
      id: bool,
      labelledby: bool,
      role: string
    }),
    guid: string
  };

  // guid && active cannot be marked as required b/c the original component never has it set?
  WithArias.defaultProps = {
    active: undefined,
    arias: {
      controls: false,
      describedby: false,
      expanded: false,
      haspopup: false,
      hidden: false,
      id: false,
      labelledby: false,
      role: null
    },
    guid: undefined
  };

  return WithArias;
}
