import React from 'react';
import { ComponentBaseProps, MergePropTypes } from '../utils/types';
export interface TextProps {
}
interface DefaultTextProps {
    /** Shorthand to set text-align */
    align?: 'left' | 'center' | 'right' | 'justify';
    /** Shorthand to set font-weight bold */
    bold?: boolean;
    /** Shorthand to set font color */
    color?: 'anchor' | 'body' | 'heading' | 'primary';
    /** Switches display between an inline (span) and block (div) element */
    inline?: boolean;
    /** Shorthand to set font-style italic */
    italic?: boolean;
    /** Display variant */
    variant?: 'heading-1' | 'heading-2' | 'heading-3' | 'body' | 'code' | 'small';
}
declare type Props = MergePropTypes<DefaultTextProps, TextProps> & ComponentBaseProps<'div'>;
/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export declare const Text: React.FC<Props>;
export {};
