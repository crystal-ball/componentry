import React from 'react';
import { ComponentBaseProps } from '../utils/types';
export interface BlockProps extends ComponentBaseProps<'div'> {
    /** Sets display between to an inline or block element */
    inline?: boolean;
}
/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export declare const Block: React.FC<BlockProps>;
