import elem from '../elem-factory'
import { targetClassNames } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * Anchor component
 */
export const Anchor = ({ button, ...props }) => {
  const merged = {
    as: 'a',
    variant: button ? 'btn' : 'a',
    ...useTheme('Anchor'),
    ...props,
  }

  const componentClassNames = targetClassNames(merged)

  // Clear component props that are also library props
  merged.color = null
  merged.size = null

  return elem({
    componentClassNames,
    ...merged,
  })
}

export const Header = props => elem({ as: 'h1', ...useTheme('Header'), ...props })
export const Text = props => elem({ as: 'p', ...useTheme('Text'), ...props })
