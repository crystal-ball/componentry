import React from 'react';
import { ComponentBaseProps } from '../utils/types';
interface CardCloseProps extends ComponentBaseProps<'button'> {
}
interface AlertProps extends ComponentBaseProps<'div'> {
    /** Sets a custom aria title */
    ariaTitle?: string;
    /** Sets the theme color of the alert */
    color?: 'primary' | 'success' | 'warning' | 'critical';
    /** Deactivate handler called on click of Alert dismiss button */
    deactivate?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Toggles alert dismissible feature */
    dismissible?: boolean;
    /** Toggles alert outline styles */
    variant?: 'primary' | 'outline';
}
interface Alert {
    (props: AlertProps): React.ReactElement;
    displayName: 'Alert';
    /**
     * [Alert close component 📝](https://componentry.design/components/alert)
     */
    Close: React.FC<CardCloseProps>;
}
/**
 * [Alert component 📝](https://componentry.design/components/alert)
 * @experimental
 */
export declare const Alert: Alert;
export {};
