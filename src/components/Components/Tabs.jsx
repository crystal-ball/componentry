import React from 'react'

import { Tab } from '../../../lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Nav component...</p>
        <Tab defaultTab="three">
          <Tab.Nav className="nav-justified mb-3">
            <Tab.Trigger tabId="one">Item 1</Tab.Trigger>
            <Tab.Trigger tabId="two">Item 2</Tab.Trigger>
            <Tab.Trigger tabId="three">Item 3</Tab.Trigger>
          </Tab.Nav>
          <Tab.ContentContainer>
            <Tab.Content tabId="one">Tab 1</Tab.Content>
            <Tab.Content tabId="two">Tab 2</Tab.Content>
            <Tab.Content tabId="three">Tab 3</Tab.Content>
          </Tab.ContentContainer>
        </Tab>
      </div>
    </div>
  </div>
)
