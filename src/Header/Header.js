import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export default function Header(props) {
  const merged = { as: 'h1', ...useTheme('Header'), ...props }
  return elem({ componentClassNames: ['heading', merged.as], ...merged })
}
