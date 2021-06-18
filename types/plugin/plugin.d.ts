import { Visitor } from '@babel/core';
import * as BabelTypes from '@babel/types';
declare const componentryPlugin: Plugin;
export default componentryPlugin;
declare type PluginOptions = {
    types: typeof BabelTypes;
};
declare type Plugin = (options: PluginOptions) => {
    visitor: Visitor;
};
/**
 * # Types Notes
 *
 * JSXOpeningElement can be a:
 * 1. JSXIdentifier (eg List)
 * 2. JSXMemberExpression (eg List.Item)
 * 3. JSXNamespacedName (eg List:Item)
 *
 * JSXOpeningElement.attributes can contain:
 * 1. JSXAttribute (eg <Flex radical="heck yeah">)
 * 2. JSXSpreadAttribute (eg <Flex {...rest}>)
 *
 * JSXAttribute.name
 * 1. JSXIdentifier (eg <Flex radical="heck yeah">)
 * 2. JSXNamespacedName (eg <Flex name:spaced="attr">)
 *
 * JSXAttribute.value
 * 1. StringLiteral (eg <Flex radical="heck yeah">)
 * 2. JSXExpressionContainer (eg <Flex onRadical={() => {}}>)
 * 3. null (eg <Flex radical>)
 * 4. JSXElement (??? what)
 * 5. JSXFragment (??? what)
 */
