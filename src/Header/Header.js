// @flow
import withTheme from '../withTheme'
import elem from '../elem-factory'

type Props = {
  /** Specifies DOM header element size */
  header: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** Sets text color to muted */
  muted: boolean,
}

export default withTheme('Header', ({ header = 'h1', muted, ...rest }: Props) =>
  elem({
    defaultAs: header,
    classes: {
      'text-muted': muted,
    },
    ...rest,
  }),
)
