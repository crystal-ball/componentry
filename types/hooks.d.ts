/**
 * Library hooks
 * @module
 */
import { RefObject } from 'react';
import { ActiveContext } from './utils/active-container-component-builder';
export declare const useActive: () => ActiveContext;
/**
 * Set the scrolltop of passed reference node to 0 when active changes to
 * truthy. Used for resetting scroll position of components on activation.
 */
export declare const useActiveSrollReset: (active: string | boolean, ref: RefObject<HTMLElement>) => void;
/**
 * Prevent document body scroll when active. Used for freezing app content when
 * overlay elements are activated
 */
export declare const useNoScroll: (active: string | boolean) => void;
declare type VisibleState = {
    active: string | boolean;
    visible: string | boolean;
};
/**
 * Hook handles transitioning display and opacity using active and visible
 * state using the following rules:
 *
 * - Show: Set active true to display element, then set visible true to
 *   transition element opacity using css transitions
 * - Hide: Set visible false to start element opacity using css transitions,
 *   then after transition duration set active false to set display none
 */
export declare const useVisible: (active: string | boolean, duration?: number) => VisibleState;
export {};
