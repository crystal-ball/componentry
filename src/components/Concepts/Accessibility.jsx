// @flow
import React from 'react'

import { Alert } from '../../../lib'

export default () => (
  <div>
    <p className="lead">
      We believe that creating fully accessible content is not just a compliance
      checkbox. Accessibility is a core goal that Componentry aims to fulfill with
      A++,{' '}
      <span role="img" aria-label="100 percent">
        💯
      </span>{' '}
      level support.
    </p>
    <p>
      Componentry components are fully accessible out of the box. The library
      handles coordinating accessibility attributes within components. However,
      creating fully accessible content is an... WHAT DO WE DO?? arias, roles
    </p>
    <Alert color="success">
      We&apos;re never done improving. Do you know how Componentry can be more
      accessible? Please{' '}
      <a href="https://github.com/crystal-ball/componentry/issues">
        file an issue
      </a>{' '}
      letting us know, or better yet submit a pull request{' '}
      <span role="img" aria-label="huzzah">
        🎉
      </span>
    </Alert>
    <h5>
      Use the <code>&lt;Button /&gt;</code> component
    </h5>
    <p>
      When creating interactable elements, using the correct HTML elements provides
      better default accessibility attributes. The <code>&lt;Button /&gt;</code>{' '}
      component can be configured to appear and behave the same as an anchor element
      by passing a truthy <code>link</code> prop. Using buttons for any element that
      has user interaction is important because button elements include important
      accessibility traits by default, such as keyboard operation.{' '}
    </p>
    <h5>Use aria-hidden for visibility</h5>
    <h5>Color contrast</h5>
    <h5>Additional Resources</h5>
    - React/jsxa11y
  </div>
)
