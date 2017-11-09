// @flow
import React from 'react'

import StatefulNameLink from 'components/universal/Navigations/StatefulNameLink'
import { conceptsRoutesMap } from 'utils/concepts-routes'

export default () => (
  <div>
    <p className="lead">
      The following guides provide background on the conventions Componentry
      follows. Familiarity with these concepts will enable you to write cleaner more
      flexible code{' '}
      <span role="img" aria-label="huzzah">
        🎉
      </span>.
    </p>
    <ul>
      <li>
        <StatefulNameLink {...conceptsRoutesMap.accessibility} /> covers out of the
        box accessibility provided by Componentry and recommendations for creating
        accessible content.
      </li>
      <li>
        <StatefulNameLink {...conceptsRoutesMap.theming} /> covers customizing the
        styles and icons for Bootstrap + Componentry using SASS variables.
      </li>
      <li>
        <StatefulNameLink {...conceptsRoutesMap.apis} /> covers the APIs Componentry
        components expose for composing and customizing new components.
      </li>
    </ul>
  </div>
)
