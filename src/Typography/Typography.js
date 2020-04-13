import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const variantMap = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'body': 'p',
  'code': 'code',
  'small': 'small',
}

/**
 * [Typography component 📝](https://componentry.design/components/typography)
 */
export default function Typography(props) {
  const { variant = 'body', ...rest } = {
    ...useTheme('Typography'),
    ...props,
  }

  return elem({
    as: variantMap[variant],
    elemClassName: variant,
    ...rest,
  })
}
Typography.displayName = 'Typography'
