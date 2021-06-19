import React from 'react';
import { ComponentBaseProps } from '../utils/types';
export interface FlexProps extends ComponentBaseProps<'div'> {
    /** Sets an `align-items` style */
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    /** Sets a `flex-direction` flex style */
    direction?: 'column' | 'column-reverse' | 'row-reverse' | 'row';
    /** Switches between display between an inline and block element */
    inline?: boolean;
    /** Sets a `justify-content` style */
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    /** Sets a `flex-wrap` flex style */
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}
/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export declare const Flex: React.FC<FlexProps>;
