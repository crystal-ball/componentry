/// <reference types="react" />
import * as BabelTypes from '@babel/types';
export declare function buildClosingElement(identifier: string, t: typeof BabelTypes): BabelTypes.JSXClosingElement;
export declare function buildOpeningElement({ props, type }: JSX.Element, selfClosing: boolean, t: typeof BabelTypes): BabelTypes.JSXOpeningElement;
