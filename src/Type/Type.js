import { useTheme } from '../Theme/Theme'
import elem from '../elem-factory'
import { btnClasses, cleanBtnClasses } from '../Button/Button'

export const Anchor = props => {
  const { button, ...rest } = { ...useTheme('Anchor'), ...props }

  return elem({
    defaultAs: 'a',
    // Passing button creates an anchor with button styles
    classes: button ? btnClasses(rest) : 'anchor',
    // Only clean btn classes for button style or default type props (eg color)
    // won't work
    ...(button ? cleanBtnClasses(rest) : rest),
  })
}

export const Header = props => elem({ defaultAs: 'h1', ...useTheme('Header'), ...props })
export const Text = props => elem({ defaultAs: 'p', ...useTheme('Text'), ...props })
