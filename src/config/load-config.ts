import { lilconfigSync } from 'lilconfig'

import { alertStyles } from '../components/Alert/Alert.styles'
import { badgeStyles } from '../components/Badge/Badge.styles'
import { buttonStyles } from '../components/Button/Button.styles'
import { cardStyles } from '../components/Card/Card.styles'
import { closeStyles } from '../components/Close/Close.styles'
import { formGroupStyles } from '../components/FormGroup/FormGroup.styles'
import { iconStyles } from '../components/Icon/Icon.styles'
import { iconButtonStyles } from '../components/IconButton/IconButton.styles'
import { inputStyles } from '../components/Input/Input.styles'
import { linkStyles } from '../components/Link/Link.styles'
import { modalStyles } from '../components/Modal/Modal.styles'
import { paperStyles } from '../components/Paper/Paper.styles'
import { popoverStyles } from '../components/Popover/Popover.styles'
import { tableStyles } from '../components/Table/Table.styles'
import { textStyles } from '../components/Text/Text.styles'
import { tooltipStyles } from '../components/Tooltip/Tooltip.styles'
import { foundationStyles } from '../styles/foundation.styles'
import { statesStyles } from '../styles/states.styles'
import { Theme, createTheme } from '../theme/theme'
import { deepMerge } from '../utils/deep-merge'

import { type ComponentProps, type ComponentStyles } from './config'

export const loadConfig = (): {
  theme: Theme
  styles: ComponentStyles
  defaultProps: ComponentProps
} => {
  const userConfig = lilconfigSync('componentry').search()?.config ?? {}
  const theme = createTheme(userConfig.theme)

  return {
    theme,
    styles: deepMerge(
      {
        // FOUNDATION
        foundation: foundationStyles(theme),
        // COMPONENTS
        Alert: alertStyles(theme),
        Badge: badgeStyles(theme),
        Button: buttonStyles(theme),
        Card: cardStyles(theme),
        Close: closeStyles(),
        Icon: iconStyles(),
        FormGroup: formGroupStyles(theme),
        IconButton: iconButtonStyles(theme),
        Input: inputStyles(theme),
        Link: linkStyles(theme),
        Modal: modalStyles(theme),
        Paper: paperStyles(theme),
        Popover: popoverStyles(theme),
        Table: tableStyles(theme),
        Text: textStyles(theme),
        Tooltip: tooltipStyles(theme),
        // UTILITIES
        states: statesStyles(),
      },
      userConfig.styles ?? {},
    ),
    defaultProps: userConfig.defaultProps ?? {},
  }
}
