import { type CSSProperties } from 'react'

/**
 * Global states styles
 *
 * Individual components may use these styles to represent their current state.
 * The global styles are provided here to document what styles _should_ be used.
 */
export const statesStyles = (): StatesStyles => ({
  // Actions states
  '.C9Y-disabled': {},
  '.C9Y-focused': {},
  '.C9Y-hovered': {},
  '.C9Y-pressed': {},
  '.C9Y-selected': {},

  // Validation states
  '.C9Y-valid': {},
  '.C9Y-invalid': {},

  // Deprecated
  '.C9Y-active': {},
  '.C9Y-hover': {},
  '.C9Y-focus': {},
  '.C9Y-checked': {},
})

export interface StatesStyles {
  /** Indicates element interactions are disabled  */
  '.C9Y-disabled': CSSProperties
  /** Indicates an element has focus */
  '.C9Y-focused': CSSProperties
  /** Indicates an element is being hovered */
  '.C9Y-hovered': CSSProperties
  /** Indicates an element is being clicked or pressed  */
  '.C9Y-pressed': CSSProperties
  /** Indicates an element an element has been selected */
  '.C9Y-selected': CSSProperties

  /** Indicates an element's contents failed to validate */
  '.C9Y-invalid': CSSProperties
  /** Indicates an element's contents validated successfully */
  '.C9Y-valid': CSSProperties

  /** @deprecated use C9Y-pressed  */
  '.C9Y-active': CSSProperties
  /** @deprecated use C9Y-hovered */
  '.C9Y-hover': CSSProperties
  /** @deprecated use C9Y-focused */
  '.C9Y-focus': CSSProperties
  /** @deprecated use C9Y-selected */
  '.C9Y-checked': CSSProperties
}
