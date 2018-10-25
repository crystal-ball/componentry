import withTheme from '../withTheme'
import elem from '../elem-factory'

const Anchor = withTheme('Anchor', props => elem({ defaultAs: 'a', ...props }))
const Header = withTheme('Header', props => elem({ defaultAs: 'h1', ...props }))
const Text = withTheme('Text', props => elem({ defaultAs: 'p', ...props }))

export { Anchor, Header, Text }
