import React from 'react'
import { createActiveAction } from '../../utils/create-active-action-component'
import { createActiveContainer } from '../../utils/create-active-container-component'
import { createActiveContent } from '../../utils/create-active-content-component'
import { UtilityProps } from '../../utils/utility-props'
import { Link } from '../Link/Link'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
} from './active-types'

export interface ActiveProps
  extends ActiveContainerBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface ActiveActionProps
  extends ActiveActionBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'button'> {}

export interface ActiveContentProps
  extends ActiveContentBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

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
export const Active = createActiveContainer('Active', {
  escEvents: true,
}) as Active

Active.Action = createActiveAction('ActiveAction', {
  aria: { controls: true },
  defaultAs: Link,
})

Active.Content = createActiveContent('ActiveContent', {
  aria: { id: true, hidden: true },
})
