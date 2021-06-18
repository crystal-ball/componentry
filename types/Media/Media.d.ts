import React from 'react';
export interface ApplicationMedia {
    sm: boolean;
    md: boolean;
    lg: boolean;
}
export interface MediaProps {
    children: React.ReactNode;
    breakpoints: number[];
}
/**
 * [Media component 📝](https://componentry.design/components/media)
 * @experimental
 */
export declare function Media({ children, breakpoints }: MediaProps): JSX.Element;
export declare namespace Media {
    var displayName: string;
}
/**
 * [Media hook 📝](https://componentry.design/components/media)
 */
export declare const useMedia: () => ApplicationMedia;
