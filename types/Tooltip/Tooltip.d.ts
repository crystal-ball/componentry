/// <reference types="react" />
import { ActiveActionBaseProps, ActiveContainerBaseProps, ActiveContentBaseProps, ComponentBaseProps } from '../utils/types';
export interface TooltipProps extends ActiveContainerBaseProps, ComponentBaseProps<'div'> {
}
export interface TooltipActionProps extends ActiveActionBaseProps, ComponentBaseProps<'button'> {
    /** Display variant */
    variant?: 'primary';
}
export interface TooltipContentProps extends ActiveContentBaseProps, ComponentBaseProps<'div'> {
    /** Display variant */
    variant?: 'primary';
}
export interface Tooltip {
    (props: TooltipProps): React.ReactElement;
    /**
     * [Tooltip action component 📝](https://componentry.design/components/tooltip)
     */
    Action: React.FC<TooltipActionProps>;
    /**
     * [Tooltip content component 📝](https://componentry.design/components/tooltip)
     */
    Content: React.FC<TooltipContentProps>;
}
/**
 * [Tooltip component 📝](https://componentry.design/components/tooltip)
 * @experimental
 */
export declare const Tooltip: Tooltip;
