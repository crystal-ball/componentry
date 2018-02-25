import React from 'react'
import { Nav, Tab } from 'componentry'

import Icon from 'components/universal/Icon'
import TabContent from './TabContent'
import { activeProps, componentryProps } from './props-content'
import { component } from './props-tabs.scss'

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
  const defaultActive = componentProps.length ? 'Component' : 'Componentry'

  // Filter out the Componentry props that aren't applicable for this component
  const filteredComponentryProps = componentryProps.filter(prop => {
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
      <h2 id="props">
        <Icon id="tune" /> Component props
      </h2>
      <Tab defaultActive={defaultActive} className="d-flex">
        <Tab.ContentContainer>
          {showComponentProps && (
            <Tab.Content activeId="Component">
              <TabContent contentProps={componentProps} />
            </Tab.Content>
          )}
          <Tab.Content activeId="Componentry">
            <TabContent contentProps={filteredComponentryProps} />
          </Tab.Content>
          {activeComponent && (
            <Tab.Content activeId="Active">
              <TabContent contentProps={activeProps} />
            </Tab.Content>
          )}
        </Tab.ContentContainer>
        <Nav vertical className="ml-4">
          {showComponentProps && (
            <Tab.Trigger activeId="Component">Component props</Tab.Trigger>
          )}
          <Tab.Trigger activeId="Componentry">Componentry props</Tab.Trigger>
          {activeComponent && (
            <Tab.Trigger activeId="Active">Active props</Tab.Trigger>
          )}
        </Nav>
      </Tab>
    </div>
  )
}
