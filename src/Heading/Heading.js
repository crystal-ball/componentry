import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export default function Heading(props) {
  const merged = { as: 'h1', ...useTheme('Heading'), ...props }
  return elem({ componentClassNames: ['heading', merged.as], ...merged })
}
