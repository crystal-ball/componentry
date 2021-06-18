/// <reference types="react" />
import { ComponentBaseProps } from '../utils/types';
interface ButtonProps extends ComponentBaseProps<'button'> {
    /** Toggles an active element style */
    active?: boolean;
    /** Button variant color */
    color?: 'primary';
    /** Disables the element, preventing mouse and keyboard events */
    disabled?: boolean;
    /** HTML element href */
    href?: string;
    /** Sets the display size */
    size?: 'sm' | 'lg';
    /** Sets the HTML element to an anchor */
    to?: string;
    /** Display variant */
    variant?: 'primary' | 'secondary';
}
/**
 * [Button component 📝](https://componentry.design/components/button)
 * @experimental
 */
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
