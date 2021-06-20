import * as BabelTypes from '@babel/types';
declare type Attributes = Array<BabelTypes.JSXAttribute | BabelTypes.JSXSpreadAttribute>;
export declare function parseAttributes(attributes: Attributes, t: typeof BabelTypes, { filename, componentName, parseProps, }: {
    filename: string;
    componentName: string;
    parseProps: Record<string, number>;
}): {
    parsedAttributes: Record<string, unknown>;
    parseSuccess: boolean;
    passThroughAttributes: BabelTypes.JSXAttribute[];
};
export {};
