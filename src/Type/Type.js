import withTheme from '../withTheme'
import elem from '../elem-factory'

/**
 * The type elements share the same props API and are only different in the
 * default `as` value which is customized with default props.
 */
const makeType = as => props => elem({ defaultAs: as, ...props })

const Anchor = withTheme('Anchor', makeType('a'))
const Header = withTheme('Header', makeType('h1'))
const Text = withTheme('Text', makeType('p'))

export { Anchor, Header, Text }
