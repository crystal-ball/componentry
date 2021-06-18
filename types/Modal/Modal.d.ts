import React from 'react';
import { ComponentBaseProps } from '../utils/types';
export interface ModalProps extends ComponentBaseProps<'div'> {
    align?: 'center';
    scroll?: 'body' | 'container' | 'overlay';
    size?: 'sm' | 'lg';
    transitionDuration?: number;
}
export interface ModalBodyProps extends ComponentBaseProps<'div'> {
}
export interface ModalCloseProps extends ComponentBaseProps<'button'> {
}
export interface ModalFooterProps extends ComponentBaseProps<'div'> {
}
export interface ModalHeaderProps extends ComponentBaseProps<'div'> {
    close?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface ModalTitleProps extends ComponentBaseProps<'h2'> {
    id?: string;
}
export interface Modal {
    (props: ModalProps): React.ReactElement;
    displayName: 'Modal';
    /**
     * [Modal body component 📝](https://componentry.design/components/modal)
     */
    Body: React.FC<ModalBodyProps>;
    /**
     * [Modal close component 📝](https://componentry.design/components/modal)
     */
    Close: React.FC<ModalCloseProps>;
    /**
     * [Modal footer component 📝](https://componentry.design/components/modal)
     */
    Footer: React.FC<ModalFooterProps>;
    /**
     * [Modal header component 📝](https://componentry.design/components/modal)
     */
    Header: React.FC<ModalHeaderProps>;
    /**
     * [Modal title component 📝](https://componentry.design/components/modal)
     */
    Title: React.FC<ModalTitleProps>;
}
/**
 * [Modal component 📝](https://componentry.design/components/modal)
 * @experimental
 */
export declare const Modal: Modal;
