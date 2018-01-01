import React, { Fragment } from 'react'
import { Tab } from 'componentry-lib'

import PropsTabsContent from './PropsDocsContent'
import propsContent from './content/props'
import { component } from './props-docs.scss'

type Props = {
  componentProps: Array,
}

export default ({ componentProps }: Props) => (
  <Fragment>
    <h3 className="mt-5 mb-3 text-right" id="props">
      Props
    </h3>
    <Tab defaultActive="component" className={`row ${component}`}>
      <div className="col-9">
        <Tab.ContentContainer>
          <Tab.Content activeId="component">
            <PropsTabsContent contentProps={componentProps} />
          </Tab.Content>
          <Tab.Content activeId="element">
            <PropsTabsContent contentProps={propsContent.elementProps} />
          </Tab.Content>
        </Tab.ContentContainer>
      </div>
      <div className="col-3">
        <Tab.Nav vertical pills>
          <Tab.Trigger activeId="component">Component props</Tab.Trigger>
          <Tab.Trigger activeId="element">Element props</Tab.Trigger>
        </Tab.Nav>
      </div>
    </Tab>
  </Fragment>
)
