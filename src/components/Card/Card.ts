import React from 'react'
import { createElement } from '../../utils/create-element'
import { createStaticComponent } from '../../utils/create-static-component'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface CardPropsOverrides {}

export interface CardPropsDefaults {
  variant?: 'outlined'
}

export type CardProps = Resolve<MergeTypes<CardPropsDefaults, CardPropsOverrides>> &
  UtilityProps &
  React.ComponentPropsWithoutRef<'div'>
interface CardBodyProps extends UtilityProps, React.ComponentPropsWithoutRef<'div'> {
  as?: React.ElementType
}
interface CardFooterProps extends UtilityProps, React.ComponentPropsWithoutRef<'div'> {
  as?: React.ElementType
}
interface CardHeaderProps extends UtilityProps, React.ComponentPropsWithoutRef<'div'> {
  as?: React.ElementType
}
interface CardTitleProps extends UtilityProps, React.ComponentPropsWithoutRef<'h4'> {
  as?: React.ElementType
}
interface CardSubtitleProps extends UtilityProps, React.ComponentPropsWithoutRef<'h5'> {
  as?: React.ElementType
}

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
   * [Card subtitle component 📝](https://componentry.design/components/card)
   */
  Subtitle: React.FC<CardSubtitleProps>
  /**
   * [Card title component 📝](https://componentry.design/components/card)
   */
  Title: React.FC<CardTitleProps>
}

/**
 * [Card component 📝](https://componentry.design/components/card)
 * @experimental
 */
export const Card = ((props) => {
  const { variant = 'outlined', ...rest } = {
    ...useThemeProps('Card'),
    ...props,
  }

  return createElement({
    componentClassName: `C9Y-Card-base C9Y-Card-${variant}`,
    ...rest,
  })
}) as Card
Card.displayName = 'Card'

Card.Body = createStaticComponent('CardBody')

Card.Footer = createStaticComponent('CardFooter')

Card.Header = createStaticComponent('CardHeader')

Card.Title = createStaticComponent<CardTitleProps>('CardTitle', {
  as: 'h4',
})

Card.Subtitle = createStaticComponent<CardSubtitleProps>('CardSubtitle', {
  as: 'h5',
})
