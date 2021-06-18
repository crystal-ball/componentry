/// <reference types="react" />
import { ComponentBaseProps } from '../utils/types';
interface LinkProps extends ComponentBaseProps<'a'> {
    /** Toggles an active element style */
    active?: boolean;
    /** Link variant color */
    color?: 'primary' | 'secondary';
    /** Disables the element, preventing mouse and keyboard events */
    disabled?: boolean;
    /** HTML element href */
    href?: string;
    /** Routing to */
    to?: string;
    /** Display variant */
    variant?: 'primary';
}
/**
 * [Link component 📝](https://componentry.design/components/link)
 * @experimental
 */
export declare const Link: React.FC<LinkProps>;
export {};
