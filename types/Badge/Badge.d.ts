/// <reference types="react" />
import { ComponentBaseProps } from '../utils/types';
interface BadgeProps extends ComponentBaseProps<'div'> {
    /** Variant color */
    color?: 'primary';
    /** Display variant */
    variant?: 'primary' | 'rounded';
}
/**
 * [Badge component 📝](https://componentry.design/components/badge)
 * @experimental
 */
export declare const Badge: React.FC<BadgeProps>;
export {};
