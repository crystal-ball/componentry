/// <reference types="react" />
import { ActiveActionBaseProps, ActiveContainerBaseProps, ActiveContentBaseProps, ComponentBaseProps } from '../utils/types';
export interface DropdownProps extends ActiveContainerBaseProps, ComponentBaseProps<'div'> {
}
export interface DropdownActionProps extends ActiveActionBaseProps, ComponentBaseProps<'button'> {
    /** Display variant */
    variant?: 'primary';
}
export interface DropdownContentProps extends ActiveContentBaseProps, ComponentBaseProps<'div'> {
    /** Display variant */
    variant?: 'primary';
}
export interface DropdownItemProps extends ActiveActionBaseProps, ComponentBaseProps<'button'> {
    /** Display variant */
    variant?: 'unstyled';
}
export interface Dropdown {
    (props: DropdownProps): React.ReactElement;
    /**
     * [Dropdown action component 📝](https://componentry.design/components/dropdown)
     */
    Action: React.FC<DropdownActionProps>;
    /**
     * [Dropdown content component 📝](https://componentry.design/components/dropdown)
     */
    Content: React.FC<DropdownContentProps>;
    /**
     * [Dropdown item component 📝](https://componentry.design/components/dropdown)
     */
    Item: React.FC<DropdownItemProps>;
}
/**
 * [Dropdown component 📝](https://componentry.design/components/dropdown)
 * @experimental
 */
export declare const Dropdown: Dropdown;
