import * as React from 'react'
import {
  ActiveContainerProps,
  ActiveTriggerProps,
  ActiveContentProps,
} from '../utils/componentry-props'

declare const ActiveContent: React.ComponentType<ActiveContentProps>
declare const ActiveTrigger: React.ComponentType<ActiveTriggerProps>

interface ActiveComponent extends React.ComponentClass<ActiveContainerProps> {
  Content: typeof ActiveContent
  Trigger: typeof ActiveTrigger
}

/** https://crystal-ball.github.io/componentry/components/active */
declare const Active: ActiveComponent

export default Active
