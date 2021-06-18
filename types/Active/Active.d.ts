/// <reference types="react" />
import { ActiveActionBaseProps, ActiveContainerBaseProps, ActiveContentBaseProps, ComponentBaseProps } from '../utils/types';
export interface ActiveProps extends ActiveContainerBaseProps, ComponentBaseProps<'div'> {
}
export interface ActiveActionProps extends ActiveActionBaseProps, ComponentBaseProps<'button'> {
}
export interface ActiveContentProps extends ActiveContentBaseProps, ComponentBaseProps<'div'> {
}
export interface Active {
    (props: ActiveProps): React.ReactElement;
    /**
     * [Active action component 📝](https://componentry.design/components/active)
     */
    Action: React.FC<ActiveActionProps>;
    /**
     * [Active content component 📝](https://componentry.design/components/active)
     */
    Content: React.FC<ActiveContentProps>;
}
/**
 * [Active component 📝](https://componentry.design/components/active)
 * @experimental
 */
export declare const Active: Active;
