import * as React from 'react'
import {
  ActiveContainerProps,
  ActiveTriggerProps,
  ActiveContentProps,
} from '../utils/componentry-props'

declare const DrodpownContent: React.ComponentType<ActiveContentProps>
declare const DropdownItem: React.ComponentType<ActiveTriggerProps>
declare const DrodpownTrigger: React.ComponentType<ActiveTriggerProps>

interface DropdownComponent extends React.ComponentClass<ActiveContainerProps> {
  Content: typeof DrodpownContent
  Item: typeof DropdownItem
  Trigger: typeof DrodpownTrigger
}

/** https://crystal-ball.github.io/componentry/components/dropdowns */
declare const Dropdown: DropdownComponent

export default Dropdown
