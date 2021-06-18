import React from 'react';
import { ARIAControls } from './aria';
import { ActiveContentBaseProps } from './types';
interface ActiveContentBuilder {
    /** Map of aria attributes to render with component */
    aria?: ARIAControls;
    /** Switch to include an absolute positioned wrapper for positioning+width styles */
    positioned?: boolean;
}
/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export declare function activeContentBuilder<TProps extends ActiveContentBaseProps>(displayName: string, { aria, positioned }: ActiveContentBuilder): React.FC<TProps>;
export {};
