import React from 'react'
import { Tab } from 'componentry'

import PropsTabsContent from './PropsDocsContent'
import propsContent from './content/props'
import { component } from './props-docs.scss'

type Props = {
  componentProps: Array,
  activeComponent: boolean,
  size: boolean,
  themeColors: boolean,
}

export default ({
  componentProps = [],
  activeComponent = false,
  size = false,
  themeColors = false,
}: Props) => {
  const showComponentProps = !!componentProps.length
  const defaultActive = componentProps.length ? 'component' : 'element'
  const elementProps = propsContent.elementProps.filter(prop => {
    if (!themeColors && prop.name === 'color') return false
    if (!size && prop.name === 'size') return false
    return prop
  })

  return (
    <div className={component}>
      <h3 id="props">Props</h3>
      <Tab defaultActive={defaultActive} className="d-flex">
        <Tab.ContentContainer>
          {showComponentProps && (
            <Tab.Content activeId="component">
              <PropsTabsContent contentProps={componentProps} />
            </Tab.Content>
          )}
          <Tab.Content activeId="element">
            <PropsTabsContent contentProps={elementProps} />
          </Tab.Content>
          {activeComponent && (
            <Tab.Content activeId="active">
              <PropsTabsContent contentProps={propsContent.activeProps} />
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
