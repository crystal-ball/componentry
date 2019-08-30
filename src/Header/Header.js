import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export default function Header(props) {
  return elem({ as: 'h1', ...useTheme('Header'), ...props })
}
