import withTheme from '../withTheme'
import elem from '../elem-factory'
import { btnClasses, cleanBtnClasses } from '../Button/Button'

const Header = withTheme('Header', props => elem({ defaultAs: 'h1', ...props }))
const Text = withTheme('Text', props => elem({ defaultAs: 'p', ...props }))

const Anchor = withTheme('Anchor', ({ button, ...rest }) =>
  elem({
    defaultAs: 'a',
    // Passing button creates an anchor with button styles
    classes: button ? btnClasses(rest) : 'anchor',
    // Only clean btn classes for button style or default type props (eg color)
    // won't work
    ...(button ? cleanBtnClasses(rest) : rest),
  }),
)

export { Anchor, Header, Text }
