// @flow
import React from 'react'

import PrismHighlighter from 'components/universal/PrismHighlighter'

const includeExample = `<svg
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
style="position: absolute; width: 0; height: 0"
>
<symbol viewBox="0 0 32 32" id="close">
  <path d="M32,3.22,19.22,16,32,28.78,28.78,32,16,19.22,3.22,32,0,28.78,12.78,16,0,3.22,3.22,0,16,12.78,28.78,0Z">
  </path>
</symbol>
</svg>`

const appExample = `<ThemeProvider theme={{ defaultButtonColor: 'secondary' }}>
  {/* Any child component will be themed */}
</ThemeProvider>`

export default () => (
  <div>
    <p className="lead">
      Componentry uses very few styles, and when styles are added Bootstrap
      variables are used whenever possible. This makes styling Componentry
      components simple and consistent, your Bootstrap theme customizations will
      automatically theme Componentry.
    </p>
    <h4>Custom icons</h4>
    <p>
      The default library icons can be enabled by setting
      <code>$include-icons</code> true in your theme. The included icons are
      displayed with<code>background-image</code> styles.
    </p>
    <p>
      The preferred method for customizing icons is with an inlined
      <code>&lt;svg&gt;</code> with your icon. Componentry includes a
      <code>&lt;use&gt;</code> element for each icon, and will use your included
      icon. The id for any icon used is documented in the component.
    </p>
    <PrismHighlighter language="html">{includeExample}</PrismHighlighter>
    <h4>
      Set theme context with the <code>&lt;ThemeProvider /&gt;</code>
    </h4>
    <p>
      Customizations for behavior or defaults can be set using the{' '}
      <code>&lt;ThemeProvider /&gt;</code> component. The theme provider sets your
      customizations on the context, and will be picked up by any child component.
      The available options are:
    </p>
    <ul>
      <li>
        <code>defaultButtonColor</code> - Sets the default color for{' '}
        <code>Button</code> components.
      </li>
      <li>
        <code>visibilityTransitionLength</code> - Sets the default fade out
        duration.
      </li>
    </ul>
    <PrismHighlighter language="jsx">{appExample}</PrismHighlighter>
    <p>
      <em>
        Note that these defaults can still be overriden for any component instance.
      </em>
    </p>
  </div>
)
