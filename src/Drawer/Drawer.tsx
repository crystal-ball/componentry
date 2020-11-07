import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionComponent } from '../utils/active-action-component-builder'
import { activeContentComponent } from '../utils/active-content-component-builder'
import { BaseActiveContainerProps, BaseProps } from '../utils/base-types'

export interface DrawerProps
  extends BaseActiveContainerProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface DrawerActionProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DrawerContentProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
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
 */
export const Drawer = activeContainerBuilder<DrawerProps>('Drawer') as Drawer

Drawer.Action = activeActionComponent<DrawerActionProps>('DrawerAction', {
  aria: { controls: true, expanded: true },
})

Drawer.Content = activeContentComponent<DrawerContentProps>('DrawerContent', {
  aria: { id: true, hidden: true },
})
