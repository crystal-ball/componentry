import React from 'react'

import { Button } from 'componentry-lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Button component...</p>
        <p>
          The <code>Button</code> component is the base component for any element
          that has a user interaction in the library. It is important to use either
          a button element or a valid href for any click target in order to support
          keyboard users <em>(See A++ Accessibility Guide)</em>. In cases where a
          target that looks like a link is required, but the target causes an in
          page change, the <code>Button</code> component should be used with the{' '}
          <code>link</code> prop.
        </p>
        <p>Docs: color, link, outline, size</p>
        <Button>Primary</Button>
      </div>
    </div>
  </div>
)
