import React, { ForwardedRef } from 'react';
import { ClassValue } from 'clsx';
declare type ElementProps = {
    as?: React.ElementType;
    className?: ClassValue;
    style?: React.CSSProperties;
};
declare type ElementCreator<Props> = Props & {
    componentCx?: ClassValue;
    ref?: ForwardedRef<HTMLButtonElement>;
    themeCx?: ClassValue;
};
/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and all classes and styles
 * are merged properly.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site)
 */
export declare function element<Props extends ElementProps>(displayName: string, { as, className, componentCx, style, themeCx, ...merged }: ElementCreator<Props>): React.ReactElement;
export {};
