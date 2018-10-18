import withTheme from '../withTheme'
import elem from '../elem-factory'

type Props = {
  // Inline style props
  /** Numbers will be converted to px value */
  fontSize?: number | string,
  /** Numbers will be converted to px value */
  letterSpacing?: number | string,
  /** Numbers converted to unitless value */
  lineHeight?: number | string,
  // -- Utility class name props
  /** Additionally all theme colors and grays  */
  color?: 'white' | 'body' | 'muted',
  fontWeight?: 'light' | 'normal' | 'bold',
  italic?: boolean,
  monospace?: boolean,
  size?: 'sm' | 'lg',
  textAlign?: 'justify' | 'right' | 'center' | 'left',
  uppercase?: boolean,
}

/**
 * The type elements share the same props API and are only different in the
 * default `as` value which is customized with default props.
 */
const makeType = as => ({
  color,
  fontSize,
  fontWeight,
  italic = false,
  letterSpacing,
  lineHeight,
  monospace = false,
  uppercase = false,
  size,
  textAlign,
  ...rest
}: Props) => {
  const classes = {
    'font-italic': italic,
    'text-uppercase': uppercase,
    'text-monospace': monospace,
    [`font-weight-${fontWeight}`]: fontWeight,
    [`text-${color}`]: color,
    [`text-${size}`]: size,
    [`text-${textAlign}`]: textAlign,
  }

  if (as === 'a') classes.disabled = !rest.href

  return elem({
    defaultAs: as,
    style: { fontSize, letterSpacing, lineHeight },
    classes,
    ...rest,
  })
}

const Anchor = withTheme('Anchor', makeType('a'))
const Header = withTheme('Header', makeType('h1'))
const Text = withTheme('Text', makeType('p'))

export { Anchor, Header, Text }
