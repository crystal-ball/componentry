import * as BabelTypes from '@babel/types';
declare type Attributes = Array<BabelTypes.JSXAttribute | BabelTypes.JSXSpreadAttribute>;
export declare function parseAttributes(attributes: Attributes, t: typeof BabelTypes, { name }: {
    name: string;
}): {
    parsedAttributes: Record<string, unknown>;
    parseSuccess: boolean;
};
export {};
