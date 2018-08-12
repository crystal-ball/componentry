// @flow
import elem from '../elem-factory'
import withTheme from '../withTheme'

/**
 * Very simple, but this provides the ability to customize what element every
 * Anchor in an application renders, with the ability to override by instance,
 * and provides a className to target!
 */

export default withTheme('Anchor', props =>
  elem({
    classes: 'anchor',
    ...props,
  }),
)
