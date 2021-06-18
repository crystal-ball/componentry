import React from 'react';
import { ComponentBaseProps, MergePropTypes } from '../utils/types';
export interface IconProps {
}
interface DefaultIconProps {
    /** SVG id for href link */
    id: string;
    /** Display variant */
    variant?: 'font';
}
declare type Props = MergePropTypes<DefaultIconProps, IconProps> & ComponentBaseProps<'svg'>;
/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export declare const Icon: React.FC<Props>;
export {};
