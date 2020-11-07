import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionComponent } from '../utils/active-action-component-builder'
import { activeContentComponent } from '../utils/active-content-component-builder'
import {
  BaseActiveActionProps,
  BaseActiveContainerProps,
  BaseActiveContentProps,
  BaseProps,
} from '../utils/base-types'

export interface ActiveProps
  extends BaseActiveContainerProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface ActiveActionProps
  extends BaseActiveActionProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {}

export interface ActiveContentProps
  extends BaseActiveContentProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

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
 */
export const Active = activeContainerBuilder<ActiveProps>('Active', {
  escEvents: true,
}) as Active

Active.Action = activeActionComponent<ActiveActionProps>('ActiveAction', {
  aria: { controls: true },
})

Active.Content = activeContentComponent<ActiveContentProps>('ActiveContent', {
  aria: { id: true, hidden: true },
})
