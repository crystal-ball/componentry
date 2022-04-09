import React from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { staticComponent } from '../../utils/static-component-builder'
import { useThemeProps } from '../Provider/Provider'

export interface CardProps extends ComponentBaseProps<'div'> {
  variant?: 'outlined'
}
interface CardBodyProps extends ComponentBaseProps<'div'> {}
interface CardFooterProps extends ComponentBaseProps<'div'> {}
interface CardHeaderProps extends ComponentBaseProps<'div'> {}
interface CardTitleProps extends ComponentBaseProps<'h4'> {}
interface CardSubtitleProps extends ComponentBaseProps<'h5'> {}

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
