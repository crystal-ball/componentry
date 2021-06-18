/**
 * Library utility functions for working with props to className+style mappings
 * @module
 */
import { AriaAttributes } from 'react';
/** ARIA attributes to compute for an element */
export interface ARIAControls {
    /** Include an `aria-controls` attribute */
    controls?: boolean;
    /** Include an `aria-describedby` attribute */
    describedby?: boolean;
    /** Include an `aria-expanded` attribute */
    expanded?: boolean;
    /** Include an `aria-haspopup` attribute */
    haspopup?: boolean;
    /** Include an `aria-hidden` attribute */
    hidden?: boolean;
    /** Include an `id` attribute */
    id?: boolean;
    /** Include an `aria-labelledby` attribute */
    labelledby?: boolean;
    /** Inlclude a `role` attribute */
    role?: string;
    /** Include an `aria-selected` attribute */
    selected?: boolean;
}
interface ComputeARIAOptions {
    active: boolean | string;
    activeId?: string;
    guid: string;
    type?: 'action' | 'content';
    aria?: ARIAControls;
}
interface ComputedARIA extends AriaAttributes {
    id?: string;
    role?: string;
}
/** Computes ARIA attributes for an element */
export declare function computeARIA({ active, activeId, guid, type, aria, }: ComputeARIAOptions): ComputedARIA;
export {};
