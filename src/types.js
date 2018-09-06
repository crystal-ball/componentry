// @flow
export type ThemeColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type ActiveProps = {
  /** Display state of element - controls aria-hidden, used for show+hide */
  active: boolean | string,
  /** Unique id for component is used for connecting aria-attributes */
  guid: string,
  activate: Function,
  deactivate: Function,
}
