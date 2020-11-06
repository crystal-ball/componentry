import React from 'react'
import { staticComponent } from '../factories/static-component'
import { BaseProps } from '../utils/base-types'

interface CardProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}
interface CardBodyProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}
interface CardFooterProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}
interface CardHeaderProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}
interface CardTitleProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

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

/** [Card component 📝](https://componentry.design/components/card) */
export const Card = staticComponent('Card', {
  componentCx: 'card',
}) as Card
Card.displayName = 'Card'

Card.Body = staticComponent<CardBodyProps>('CardBody', {
  componentCx: 'card-body',
})

Card.Footer = staticComponent<CardFooterProps>('CardFooter', {
  componentCx: 'card-footer',
})

Card.Header = staticComponent<CardHeaderProps>('CardHeader', {
  componentCx: 'card-header',
})

Card.Title = staticComponent<CardTitleProps>('CardTitle', {
  as: 'h4',
  componentCx: 'card-title',
})
