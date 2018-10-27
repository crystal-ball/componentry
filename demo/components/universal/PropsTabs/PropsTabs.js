import React from 'react'
import { arrayOf, bool, shape, string } from 'prop-types'
import { Icon, Tab } from 'componentry'

import TabContent from './TabContent'
import { activeProps, componentryProps } from './props-content'
import { component } from './props-tabs.scss'

const PropsTabs = ({
  activeComponent = false,
  componentProps = [],
  directionalComponent = null,
}) => {
  const showComponentProps = !!componentProps.length
  /* eslint-disable no-nested-ternary */
  const defaultActive = componentProps.length
    ? 'Component'
    : activeComponent
      ? 'Active'
      : 'Componentry'
  /* eslint-enable no-nested-ternary */

  // Filter out the Componentry props that aren't applicable for this component
  const filteredComponentryProps = componentryProps.filter(prop => {
    if (prop.name === 'color' && componentProps.find(p => p.name === 'color')) return null
    if (prop.name === 'size' && componentProps.find(p => p.name === 'size')) return null

    // Directional components have different default directions, assign correct
    // default for directionals
    if (prop.name === 'direction') {
      if (!directionalComponent) return false // filter out
      prop.default = directionalComponent // eslint-disable-line
      return prop
    }

    return prop
  })

  return (
    <div className={component}>
      <h2 id="props">
        <Icon id="tune" /> Component props
      </h2>

      <Tab className="d-flex" defaultActive={defaultActive}>
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
        <Tab.Nav vertical>
          {showComponentProps && (
            <Tab.Trigger activeId="Component">Component props</Tab.Trigger>
          )}
          {activeComponent && <Tab.Trigger activeId="Active">Active props</Tab.Trigger>}
          <Tab.Trigger activeId="Componentry">Componentry props</Tab.Trigger>
        </Tab.Nav>
      </Tab>
    </div>
  )
}

PropsTabs.propTypes = {
  activeComponent: bool,
  componentProps: arrayOf(shape({ name: string })),
  directionalComponent: string,
}

PropsTabs.defaultProps = {
  activeComponent: false,
  componentProps: [],
  directionalComponent: false,
}

export default PropsTabs
