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
export const states = {
  /** Class applied when element is being clicked  */
  '.C9Y-active': {},
  /** Class applied when element is being hovered */
  '.C9Y-hover': {},
  /** Class applied when element has been clicked */
  '.C9Y-focus': {},
  /** Class applied when an element whose contents fail to validate */
  '.C9Y-invalid': {},
  /** Class applied when an element can't be activated or receive focus */
  '.C9Y-disabled': {
    pointerEvents: 'none',
  },
  /** Class applied when element has been checked or toggled to an on state */
  '.C9Y-checked': {},
  /** Class applied when element has been selected */
  '.C9Y-selected': {},
}
