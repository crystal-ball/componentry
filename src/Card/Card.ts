/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { ComponentBaseProps } from '../utils/types'
import { staticComponent } from '../utils/static-component-builder'

interface CardProps extends ComponentBaseProps<'div'> {}
interface CardBodyProps extends ComponentBaseProps<'div'> {}
interface CardFooterProps extends ComponentBaseProps<'div'> {}
interface CardHeaderProps extends ComponentBaseProps<'div'> {}
interface CardTitleProps extends ComponentBaseProps<'div'> {}

export interface Card {
  (props: CardProps): React.ReactElement
  displayName: 'Card'
  /**
   * [Card body component 📝](https://componentry.design/components/card)
   */
  Body: React.FC<CardBodyProps>
  /**
   * [Card footer component 📝](https://componentry.design/components/card)
   */
  Footer: React.FC<CardFooterProps>
  /**
   * [Card header component 📝](https://componentry.design/components/card)
   */
  Header: React.FC<CardHeaderProps>
  /**
   * [Card title component 📝](https://componentry.design/components/card)
   */
  Title: React.FC<CardTitleProps>
}

/**
 * [Card component 📝](https://componentry.design/components/card)
 * @experimental
 */
export const Card = staticComponent('Card') as Card

Card.Body = staticComponent('CardBody')

Card.Footer = staticComponent('CardFooter')

Card.Header = staticComponent('CardHeader')

Card.Title = staticComponent('CardTitle', {
  as: 'h4',
})
