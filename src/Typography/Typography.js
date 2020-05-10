import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const defaultVariantsElements = {
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
  const { variant = 'body', inline = false, variantsElements = {}, ...rest } = {
    ...useTheme('Typography'),
    ...props,
  }

  return elem({
    as: inline
      ? 'span'
      : variantsElements[variant] || defaultVariantsElements[variant] || 'p',
    elemClassName: inline ? null : Typography.classesPrefix + variant,
    ...rest,
  })
}
Typography.classesPrefix = '✨'
Typography.displayName = '✨Typography'
