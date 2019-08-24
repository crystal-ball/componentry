import elem from '../elem-factory'
import { targetClassNames } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * Anchor component
 */
export const Anchor = ({ button, ...props }) => {
  const merged = {
    as: 'a',
    variant: button ? 'btn' : 'anchor',
    ...useTheme('Anchor'),
    ...props,
  }

  // Remap target color prop to differentiate from library text color prop
  merged.targetColor = merged.color
  merged.color = null

  return elem({
    componentClassNames: targetClassNames(merged),
    ...merged,
  })
}

export const Header = props => elem({ as: 'h1', ...useTheme('Header'), ...props })
export const Text = props => elem({ as: 'p', ...useTheme('Text'), ...props })
