import React from 'react'
import { element } from '../../utils/element-creator'
import { staticComponent } from '../../utils/static-component-builder'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface CardPropsOverrides {}

export interface CardPropsDefaults {
  variant?: 'outlined'
}

export type CardProps = Resolve<MergeTypes<CardPropsDefaults, CardPropsOverrides>> &
  UtilityProps &
  React.ComponentPropsWithoutRef<'div'>
interface CardBodyProps extends UtilityProps, React.ComponentPropsWithoutRef<'div'> {}
interface CardFooterProps extends UtilityProps, React.ComponentPropsWithoutRef<'div'> {}
interface CardHeaderProps extends UtilityProps, React.ComponentPropsWithoutRef<'div'> {}
interface CardTitleProps extends UtilityProps, React.ComponentPropsWithoutRef<'h4'> {}
interface CardSubtitleProps extends UtilityProps, React.ComponentPropsWithoutRef<'h5'> {}

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

  return element({
    componentCx: `C9Y-Card-base C9Y-Card-${variant}`,
    ...rest,
  })
}) as Card
Card.displayName = 'Card'

Card.Body = staticComponent('CardBody')

Card.Footer = staticComponent('CardFooter')

Card.Header = staticComponent('CardHeader')

Card.Title = staticComponent<CardTitleProps>('CardTitle', {
  as: 'h4',
})

Card.Subtitle = staticComponent<CardSubtitleProps>('CardSubtitle', {
  as: 'h5',
})
