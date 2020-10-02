/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { staticComponent } from '../factories/static-component'
import { UtilityProps } from '../base-types'

interface CardProps extends UtilityProps {}
interface CardBodyProps extends UtilityProps {}
interface CardFooterProps extends UtilityProps {}
interface CardHeaderProps extends UtilityProps {}
interface CardTitleProps extends UtilityProps {}

interface Card extends React.FC<CardProps> {
  Body?: React.FC<CardBodyProps>
  Footer?: React.FC<CardFooterProps>
  Header?: React.FC<CardHeaderProps>
  Title?: React.FC<CardTitleProps>
}

/**
 * [Card component 📝](https://componentry.design/components/card)
 */
export const Card: Card = staticComponent('Card', {
  componentCx: 'card',
})

/**
 * [Card body component 📝](https://componentry.design/components/card)
 */
Card.Body = staticComponent('CardBody', {
  componentCx: 'card-body',
})

/**
 * [Card footer component 📝](https://componentry.design/components/card)
 */
Card.Footer = staticComponent('CardFooter', {
  componentCx: 'card-footer',
})

/**
 * [Card header component 📝](https://componentry.design/components/card)
 */
Card.Header = staticComponent('CardHeader', {
  componentCx: 'card-header',
})

/**
 * [Card title component 📝](https://componentry.design/components/card)
 */
Card.Title = staticComponent('CardTitle', {
  as: 'h4',
  componentCx: 'card-title',
})
