/// <reference types="react" />
import { ComponentBaseProps } from '../utils/types';
export interface NavProps extends ComponentBaseProps<'nav'> {
    fill?: boolean;
    justify?: boolean;
    pills?: boolean;
    vertical?: boolean;
}
export interface NavItemProps extends ComponentBaseProps<'a'> {
}
export interface Nav {
    (props: NavProps): React.ReactElement;
    displayName: 'Nav';
    /**
     * [Nav item component 📝](https://componentry.design/components/nav)
     */
    Item: React.FC<NavItemProps>;
}
/**
 * [Nav component 📝](https://componentry.design/components/nav)
 * @experimental
 */
export declare const Nav: Nav;
