/// <reference types="react" />
import { ActiveActionBaseProps, ActiveContainerBaseProps, ActiveContentBaseProps, ComponentBaseProps } from '../utils/types';
export interface PopoverProps extends ActiveContainerBaseProps, ComponentBaseProps<'div'> {
}
export interface PopoverActionProps extends ActiveActionBaseProps, ComponentBaseProps<'button'> {
    /** Display variant */
    variant?: 'primary';
}
export interface PopoverBodyProps extends ActiveContentBaseProps, ComponentBaseProps<'div'> {
}
export interface PopoverContentProps extends ComponentBaseProps<'div'> {
    /** Display variant */
    variant?: 'primary';
}
export interface PopoverHeadingProps extends ComponentBaseProps<'div'> {
}
export interface Popover {
    (props: PopoverProps): React.ReactElement;
    /**
     * [Popover action component 📝](https://componentry.design/components/popover)
     */
    Action: React.FC<PopoverActionProps>;
    /**
     * [Popover body component 📝](https://componentry.design/components/popover)
     */
    Body: React.FC<PopoverBodyProps>;
    /**
     * [Popover content component 📝](https://componentry.design/components/popover)
     */
    Content: React.FC<PopoverContentProps>;
    /**
     * [Popover heading component 📝](https://componentry.design/components/popover)
     */
    Heading: React.FC<PopoverHeadingProps>;
}
/**
 * [Popover component 📝](https://componentry.design/components/popover)
 * @experimental
 */
export declare const Popover: Popover;
