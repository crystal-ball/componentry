import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const asMap = {
  'display-1': 'h1',
  'display-2': 'h1',
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'subheading-1': 'h3',
  'subheading-2': 'h4',
  'subheading-3': 'h5',
}

/**
 * [Heading component 📝](https://componentry.design/components/heading)
 */
export default function Heading(props) {
  const { variant = 'heading-1', ...rest } = {
    ...useTheme('Heading'),
    ...props,
  }

  return elem({
    as: asMap[variant],
    elemClassName: variant,
    ...rest,
  })
}
Heading.displayName = 'Heading'
