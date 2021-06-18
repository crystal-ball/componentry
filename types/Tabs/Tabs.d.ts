/// <reference types="react" />
import { ActiveActionBaseProps, ActiveContainerBaseProps, ActiveContentBaseProps, ComponentBaseProps } from '../utils/types';
export interface TabsProps extends ActiveContainerBaseProps, ComponentBaseProps<'div'> {
}
export interface TabsActionsContainerProps extends ComponentBaseProps<'div'> {
    fill?: boolean;
    justify?: boolean;
    pills?: boolean;
    vertical?: boolean;
}
export interface TabsActionProps extends ActiveActionBaseProps, ComponentBaseProps<'button'> {
    /** Display variant */
    variant?: 'primary';
}
export interface TabsContentContainerProps extends ComponentBaseProps<'div'> {
}
export interface TabsContentProps extends ActiveContentBaseProps, ComponentBaseProps<'div'> {
    /** Display variant */
    variant?: 'primary';
}
export interface Tabs {
    (props: TabsProps): React.ReactElement;
    /**
     * [Tabs actions container component 📝](https://componentry.design/components/tabs)
     */
    ActionsContainer: React.FC<TabsActionsContainerProps>;
    /**
     * [Tabs action component 📝](https://componentry.design/components/tabs)
     */
    Action: React.FC<TabsActionProps>;
    /**
     * [Tabs content container component 📝](https://componentry.design/components/tabs)
     */
    ContentContainer: React.FC<TabsContentContainerProps>;
    /**
     * [Tabs content component 📝](https://componentry.design/components/tabs)
     */
    Content: React.FC<TabsContentProps>;
}
/**
 * [Tabs component 📝](https://componentry.design/components/tabs)
 * @experimental
 */
export declare const Tabs: Tabs;
