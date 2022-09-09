import { type CSSProperties } from 'react'

/**
 * Classes that _MAY_ be applied to components to represent their current state.
 *
 * NOTE - Componentry does not yet consistently apply these classes for all states,
 * but they are provided here to document what classes _should_ be used to represent
 * these states.
 *
 * Ref:
 * - https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
 * - https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
 */
export const statesStyles = (): StatesStyles => ({
  '.C9Y-active': {},
  '.C9Y-hover': {},
  '.C9Y-focus': {},
  '.C9Y-invalid': {},
  '.C9Y-disabled': {},
  '.C9Y-checked': {},
  '.C9Y-selected': {},
})

export interface StatesStyles {
  /** Class applied when element is being clicked  */
  '.C9Y-active': CSSProperties
  /** Class applied when element is being hovered */
  '.C9Y-hover': CSSProperties
  /** Class applied when element has been clicked */
  '.C9Y-focus': CSSProperties
  /** Class applied when an element whose contents fail to validate */
  '.C9Y-invalid': CSSProperties
  /** Class applied when an element can't be activated or receive focus */
  '.C9Y-disabled': CSSProperties
  /** Class applied when element has been checked or toggled to an on state */
  '.C9Y-checked': CSSProperties
  /** Class applied when element has been selected */
  '.C9Y-selected': CSSProperties
}
