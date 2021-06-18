import React from 'react';
import { ActiveContainerBaseProps } from './types';
export interface ActiveContext {
    /** Multi content active components use an active id string */
    active: boolean | string;
    /** Unique ide for this context */
    guid: string;
    /** Called on activate events */
    activate: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Called on deactivate events */
    deactivate: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
/** Active context */
export declare const ActiveCtx: React.Context<ActiveContext>;
interface DefaultActiveContainerProps {
    /** Includes click events handler */
    clickEvents?: boolean;
    /** Default content placement direction */
    direction?: 'top' | 'left' | 'right' | 'bottom';
    /** Include esc events handler */
    escEvents?: boolean;
    /** Includes mouse events handler */
    mouseEvents?: boolean;
}
/**
 * Factory returns custom `<Active />` components defined by the options. Active
 * components are responsible for:
 *
 * 1. Creating a scoped `active` value (type boolean for single set of
 *    action+content, string for set of actions+content).
 * 2. Exposing internal `activate` and`deactivate` methods for changing `active`
 *    state.
 * 3. On `active` change add or remove configured event listeners and fire
 *    change listeners.
 *
 * NOTE: The `handleActivate` and `handleDeactivate` methods are passed through
 * context as the `activate` and `deactivate` handlers for subcomponents to _always_
 * use. This ensures that we can always hook into the change events for internal
 * needs like setting or removing special event listeners.
 */
export declare function activeContainerBuilder<TProps extends ActiveContainerBaseProps>(displayName: string, defaultProps?: DefaultActiveContainerProps): React.FC<TProps>;
export {};
