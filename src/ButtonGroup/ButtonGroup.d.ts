import * as React from 'react'
import { ButtonProps, FontProps, SpaceProps } from '../utils/componentry-props'

declare const ButtonGroupButton: React.ComponentType<ButtonProps & FontProps & SpaceProps>

interface ButtonGroupComponent extends React.ComponentClass<ActiveContainerProps> {
  Button: typeof ButtonGroupButton
}

/** https://crystal-ball.github.io/componentry/components/button-group */
declare const ButtonGroup: ButtonGroupComponent

export default ButtonGroup
