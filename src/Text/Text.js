import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export default function Text(props) {
  return elem({ as: 'p', ...useTheme('Text'), ...props })
}
