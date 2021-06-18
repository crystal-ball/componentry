/// <reference types="react" />
declare type UtilityClasses = {
    [classname: string]: string | boolean | undefined;
};
declare type Props = {
    [prop: string]: unknown;
};
declare type ComponentryAttributes = {
    props: Props;
    styles: React.CSSProperties;
    utilityCx: [UtilityClasses, string[]];
};
/**
 * Library utility that handles:
 * 1. filtering out library props
 * 2. Mapping library props to style and className values
 *
 * NB: values are passed through without additional mapping, eg the number 1
 * isn't mapped to 1px or 1rem.
 */
export declare function componentry({ __precompile, block, color, outline, fill, inline, justify, pills, variant, vertical, activate, deactivate, defaultActive, guid, onActivate, onActivated, onDeactivate, onDeactivated, ...filteredProps }: Props): ComponentryAttributes;
export {};
