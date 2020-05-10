import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const variantMap = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'body': 'p',
  'code': 'code',
  'small': 'small',
  'inline': 'span',
}

/**
 * Passed variant to element mapping will override the default library mappings
 * @param {{ [x:string]: string}} overrides
 */
export function setupTypographyElements(overrides) {
  Object.assign(variantMap, overrides)
}

/**
 * [Typography component 📝](https://componentry.design/components/typography)
 */
export default function Typography(props) {
  const { variant = 'body', inline = false, ...rest } = {
    ...useTheme('Typography'),
    ...props,
  }

  return elem({
    as: variantMap[inline ? 'inline' : variant],
    elemClassName: inline ? null : Typography.classesPrefix + variant,
    ...rest,
  })
}
Typography.classesPrefix = '✨'
Typography.displayName = '✨Typography'
