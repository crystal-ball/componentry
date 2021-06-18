import React from 'react';
import { ComponentBaseProps } from '../utils/types';
export interface InputProps extends ComponentBaseProps<'input'> {
}
export interface InputDescriptionProps extends ComponentBaseProps<'div'> {
}
export interface InputErrorProps extends ComponentBaseProps<'div'> {
}
export interface InputFieldProps extends ComponentBaseProps<'input'> {
}
export interface InputLabelProps extends ComponentBaseProps<'label'> {
}
export interface Input {
    (props: InputProps): React.ReactElement;
    displayName: 'Input';
    /**
     * [Input description component 📝](https://componentry.design/components/input)
     */
    Description: React.FC<InputDescriptionProps>;
    /**
     * [Input error component 📝](https://componentry.design/components/input)
     */
    Error: React.FC<InputErrorProps>;
    /**
     * [Input field component 📝](https://componentry.design/components/input)
     */
    Field: React.FC<InputFieldProps>;
    /**
     * [Input label component 📝](https://componentry.design/components/input)
     */
    Label: React.FC<InputLabelProps>;
}
/**
 * [Input component 📝](https://componentry.design/components/input)
 * @experimental
 */
export declare const Input: Input;
