import React from 'react'
import { Tab } from 'componentry'

import PropsDocsContent from './PropsDocsContent'
import propsContent from './content/props'
import { component } from './props-docs.scss'

type Props = {
  activeComponent: boolean,
  componentProps: Array,
  directionalComponent?: string,
  size?: boolean,
  themeColors: boolean,
}

export default ({
  activeComponent = false,
  componentProps = [],
  directionalComponent = null,
  size = false,
  themeColors = false,
}: Props) => {
  const showComponentProps = !!componentProps.length
  const defaultActive = componentProps.length ? 'component' : 'element'

  // Filter out the element props that aren't applicable for this component
  const elementProps = propsContent.elementProps.filter(prop => {
    if (!themeColors && prop.name === 'color') return false
    if (!size && prop.name === 'size') return false

    // Directional components have different default directions, assign correct
    // default for directionals
    if (prop.name === 'direction') {
      if (!directionalComponent) return false // filter out
      prop.defaultValue = directionalComponent // eslint-disable-line
      return prop
    }

    return prop
  })

  return (
    <div className={component}>
      <h3 id="props">Props</h3>
      <Tab defaultActive={defaultActive} className="d-flex">
        <Tab.ContentContainer>
          {showComponentProps && (
            <Tab.Content activeId="component">
              <PropsDocsContent contentProps={componentProps} />
            </Tab.Content>
          )}
          <Tab.Content activeId="element">
            <PropsDocsContent contentProps={elementProps} />
          </Tab.Content>
          {activeComponent && (
            <Tab.Content activeId="active">
              <PropsDocsContent contentProps={propsContent.activeProps} />
            </Tab.Content>
          )}
        </Tab.ContentContainer>
        <Tab.Nav vertical pills className="ml-4">
          {showComponentProps && (
            <Tab.Trigger activeId="component">Component props</Tab.Trigger>
          )}
          <Tab.Trigger activeId="element">Element props</Tab.Trigger>
          {activeComponent && (
            <Tab.Trigger activeId="active">Active props</Tab.Trigger>
          )}
        </Tab.Nav>
      </Tab>
    </div>
  )
}
