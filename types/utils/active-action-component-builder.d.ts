import React from 'react';
import { ARIAControls } from './aria';
import { ActiveActionBaseProps } from './types';
interface ActiveActionBuilder {
    /** Overrides component onClick to specified activate/deactivate action */
    action?: 'activate' | 'deactivate';
    /** Map of aria attributes to render with component */
    aria?: ARIAControls;
}
/**
 * Factory returns custom `<Action />` components defined by the fn options.
 * Componentry sets up actions to be buttons styled as links by default, this
 * can be overridden by passing an as and type props for an anchor.
 */
export declare function activeActionBuilder<TProps extends ActiveActionBaseProps>(displayName: string, { action, aria }?: ActiveActionBuilder): React.FC<TProps>;
export {};
