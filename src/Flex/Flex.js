// @flow
import elementFactory from '../component-factories/element'

type Props = {
  /** Toggles between display flex and display inline-flex */
  inline?: boolean,
  /** Adds flexbox align-items atomic classes */
  align?: '' | 'start' | 'center' | 'end' | 'baseline' | 'stretch',
  /** Adds flexbox justify-content atomic classes */
  justify?: '' | 'start' | 'center' | 'end' | 'around' | 'between',
}

export default elementFactory(
  'Flex',
  ({ align = '', inline = false, justify = '', ...props }: Props) => ({
    className: {
      'd-flex': !inline,
      'd-inline-flex': inline,
      [`align-items-${align}`]: align,
      [`justify-content-${justify}`]: justify,
    },
    ...props,
  }),
)
