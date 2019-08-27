import * as React from 'react'

interface AlertProps {
  active?: boolean,
  ariaTitle?: string,
  color?: string,
  deactivate?: Function,
  dismissible:? boolean,
  outline:? boolean,
}

/** https://crystal-ball.github.io/componentry/components/block */
declare const Alert: React.ComponentType<AlertProps>

export default Alert
