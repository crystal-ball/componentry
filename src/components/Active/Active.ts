import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  type ActiveActionBaseProps,
  type ActiveContainerBaseProps,
  type ActiveContentBaseProps,
  type ComponentBaseProps,
} from '../../utils/base-types'
import { Link } from '../Link/Link'

export interface ActiveProps
  extends ActiveContainerBaseProps,
    ComponentBaseProps<'div'> {}

export interface ActiveActionProps
  extends ActiveActionBaseProps,
    ComponentBaseProps<'button'> {}

export interface ActiveContentProps
  extends ActiveContentBaseProps,
    ComponentBaseProps<'div'> {}

export interface Active {
  (props: ActiveProps): React.ReactElement
  /**
   * [Active action component 📝](https://componentry.design/components/active)
   */
  Action: React.FC<ActiveActionProps>
  /**
   * [Active content component 📝](https://componentry.design/components/active)
   */
  Content: React.FC<ActiveContentProps>
}

/**
 * [Active component 📝](https://componentry.design/components/active)
 * @experimental
 */
export const Active = activeContainerBuilder<ActiveProps>('Active', {
  escEvents: true,
}) as Active

Active.Action = activeActionBuilder<ActiveActionProps>('ActiveAction', {
  aria: { controls: true },
  defaultAs: Link,
})

Active.Content = activeContentBuilder<ActiveContentProps>('ActiveContent', {
  aria: { id: true, hidden: true },
})
