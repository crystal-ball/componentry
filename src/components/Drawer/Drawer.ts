import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  type ActiveActionBaseProps,
  type ActiveContainerBaseProps,
  type ActiveContentBaseProps,
  type ComponentBaseProps,
} from '../../utils/base-types'
import { Link } from '../Link/Link'

export interface DrawerProps
  extends ActiveContainerBaseProps,
    ComponentBaseProps<'div'> {}

export interface DrawerActionProps
  extends ActiveActionBaseProps,
    ComponentBaseProps<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DrawerContentProps
  extends ActiveContentBaseProps,
    ComponentBaseProps<'div'> {
  /** Display variant */
  variant?: 'primary'
}

export interface Drawer {
  (props: DrawerProps): React.ReactElement
  /**
   * [Drawer action component 📝](https://componentry.design/components/drawer)
   */
  Action: React.FC<DrawerActionProps>
  /**
   * [Drawer content component 📝](https://componentry.design/components/drawer)
   */
  Content: React.FC<DrawerContentProps>
}

/**
 * [Drawer component 📝](https://componentry.design/components/drawer)
 * @experimental
 */
export const Drawer = activeContainerBuilder<DrawerProps>('Drawer') as Drawer

Drawer.Action = activeActionBuilder<DrawerActionProps>('DrawerAction', {
  aria: { controls: true, expanded: true },
  defaultAs: Link,
})

Drawer.Content = activeContentBuilder<DrawerContentProps>('DrawerContent', {
  aria: { id: true, hidden: true },
})
