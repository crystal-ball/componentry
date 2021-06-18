import React from 'react';
import { ClassValue } from 'clsx';
declare type StaticOptions<Props> = Props & {
    componentCx?: ClassValue;
};
/**
 * Generates a static component. Used for components that just set a className
 * and HTML attributes
 * @param displayName Component name
 * @param defaultProps Componentry library default prop values
 */
export declare function staticComponent<Props>(displayName: string, defaultProps?: StaticOptions<Props>): React.FC<Props>;
export {};
