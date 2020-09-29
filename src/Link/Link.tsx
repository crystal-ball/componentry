import { interactionComponent } from '../factories/interaction-component'

interface LinkProps {
  /** Display variant */
  variant?: 'primary'
  size?: never
}

/**
 * [Link component 📝](https://componentry.design/components/link)
 */
export const Link = interactionComponent<LinkProps>('Link', 'link')
