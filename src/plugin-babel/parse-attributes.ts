import { types as t } from '@babel/core'

import { BadgePropsDefaults } from '../components/Badge/Badge'
import { FlexPropsDefaults } from '../components/Flex/Flex'
import { GridPropsDefaults } from '../components/Grid/Grid'
import { PaperPropsDefaults } from '../components/Paper/Paper'
import { TextPropsDefaults } from '../components/Text/Text'
import { UtilityPropsBase } from '../utils/utility-classes'

const utilityPropsLookup: {
  [key in keyof UtilityPropsBase]-?: 1
} = {
  active: 1,
  alignContent: 1,
  alignItems: 1,
  alignSelf: 1,
  backgroundColor: 1,
  bold: 1,
  border: 1,
  borderBottom: 1,
  borderColor: 1,
  borderLeft: 1,
  borderRadius: 1,
  borderRight: 1,
  borderStyle: 1,
  borderTop: 1,
  borderWidth: 1,
  boxShadow: 1,
  color: 1,
  columnGap: 1,
  disabled: 1,
  display: 1,
  flexDirection: 1,
  flexGrow: 1,
  flexShrink: 1,
  flexWrap: 1,
  fontFamily: 1,
  fontSize: 1,
  fontWeight: 1,
  gap: 1,
  height: 1,
  invisible: 1,
  italic: 1,
  justifyContent: 1,
  justifyItems: 1,
  justifySelf: 1,
  letterSpacing: 1,
  lineHeight: 1,
  m: 1,
  maxHeight: 1,
  maxWidth: 1,
  mb: 1,
  minHeight: 1,
  minWidth: 1,
  ml: 1,
  mr: 1,
  mt: 1,
  mx: 1,
  my: 1,
  p: 1,
  pb: 1,
  pl: 1,
  position: 1,
  pr: 1,
  pt: 1,
  px: 1,
  py: 1,
  radius: 1,
  rowGap: 1,
  textAlign: 1,
  textTransform: 1,
  visible: 1,
  width: 1,
  zIndex: 1,
}

const badgePropsLookup: {
  [key in keyof BadgePropsDefaults]-?: 1
} = {
  color: 1,
  size: 1,
  variant: 1,
}

const flexPropsLookup: {
  [key in keyof FlexPropsDefaults]-?: 1
} = {
  align: 1,
  direction: 1,
  justify: 1,
  wrap: 1,
}

const gridPropsLookup: {
  [key in keyof GridPropsDefaults]-?: 1
} = {
  align: 1,
  justify: 1,
}

const paperPropsLookup: {
  [key in keyof PaperPropsDefaults]-?: 1
} = {
  variant: 1,
}

const textPropsLookup: {
  [key in keyof TextPropsDefaults]-?: 1
} = {
  textElementMap: 1,
  truncate: 1,
  variant: 1,
}

const componentPropsLookup: { [component: string]: PropLookup } = {
  Badge: badgePropsLookup,
  Flex: flexPropsLookup,
  Grid: gridPropsLookup,
  Paper: paperPropsLookup,
  Text: textPropsLookup,
}

export function parseAttributes(openingElement: t.JSXOpeningElement): {
  parsedComponentAs: string
  parsedAttributes: Record<string, unknown>
  passThroughAttributes: t.JSXAttribute[]
} {
  const { attributes, name } = openingElement
  const componentName = getComponentName(name)

  const parseProps: PropLookup = {
    ...utilityPropsLookup,
    ...componentPropsLookup[componentName],
  }

  const passThroughAttributes: t.JSXAttribute[] = []
  const parsedAttributes: { [propName: string]: string | number | boolean } = {}
  let parsedComponentAs = ''

  attributes.forEach((attribute) => {
    if (t.isJSXSpreadAttribute(attribute)) {
      // eg: {...rest}
      throw new Error(`Unsupported node type "${attribute.type}"`)
    }

    if (!t.isJSXIdentifier(attribute.name)) {
      // Safety check for attribute of type JSXNamespacedName (missing example)
      throw new Error(`Component attribute name is namespaced: ${attribute.name}`)
    }

    const propName = attribute.name.name
    const propValue = attribute.value

    if (propName === 'as') {
      if (t.isStringLiteral(propValue)) {
        parsedComponentAs = propValue.value
        return
      }
      if (t.isJSXExpressionContainer(propValue) && t.isIdentifier(propValue.expression)) {
        parsedComponentAs = propValue.expression.name
        return
      }
      throw new Error(`Unsupported type ${propValue?.type} for prop "as"`)
    }

    // If an attribute isn't one of the library props we can just pass it through, this is
    // *required* for some React development plugins that add __source and __self attrs
    if (!(propName in parseProps)) {
      passThroughAttributes.push(attribute)
      return
    }

    // 1. If attrValue is null, then attr is a truthy prop
    if (propValue === null) {
      parsedAttributes[propName] = true
      return
    }

    // 2. If attrValue is a string, then it's a string prop
    if (t.isStringLiteral(propValue)) {
      parsedAttributes[propName] = propValue.value
      return
    }

    // 3. Otherwise it *should* be an expression container like: someProp={1}
    if (t.isJSXExpressionContainer(propValue)) {
      const { expression } = propValue

      // Boolean, Numeric, and String literals are all supported
      if (
        t.isBooleanLiteral(expression) ||
        t.isNumericLiteral(expression) ||
        t.isStringLiteral(expression)
      ) {
        parsedAttributes[propName] = expression.value
        return
      }

      // Provide skip reason with specific expression type
      throw new Error(`Unsupported node type "${expression.type}" for prop "${propName}"`)
    }

    // Babel has JSXElement and JSXFragment types for attributes, which I haven't been
    // able to find an example of
    throw new Error(`Unsupported node type "${propValue?.type}" for prop "${propName}"`)
  })

  return { parsedComponentAs, parsedAttributes, passThroughAttributes }
}

function getComponentName(
  name: t.JSXIdentifier | t.JSXNamespacedName | t.JSXMemberExpression,
): string {
  if (t.isJSXIdentifier(name)) return name.name
  throw new Error(`Invalid parse component, expected JSXIdentifier`)
}

type PropLookup = {
  [propName: string]: 1
}
