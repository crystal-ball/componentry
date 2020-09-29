import { interactionComponent } from '../factories/interaction-component'

interface ButtonProps {
  /** Display variant */
  variant?: 'primary' | 'secondary'
}

/**
 * [Button component 📝](https://componentry.design/components/button)
 */
export const Button = interactionComponent<ButtonProps>('Button', 'btn')
