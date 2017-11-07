import React from 'react'

import PrismHighlighter from 'components/universal/PrismHighlighter'

const basicImport = `// Define any theme customization for Bootstrap and Componentry. They use the
// same variables in order to create a seamless theme.
@import 'styles/your-custom-theme-variables';

// Import Bootstrap styles from Componentry package. This creates the base set
// of styles for your app.
@import '~componentry/dist/bootstrap';

// Import the Componentry styles. This is a very light set of styles that extends
// and enhances Bootstrap
@import '~componentry/dist/componentry';
`

export default () => (
  <div className="col-9">
    <h2>Installation</h2>
    <pre>
      <code>npm install componentry</code>
    </pre>
    <h2 className="mt-3">Styles</h2>
    <p>
      Componentry is built for Bootstrap v4. To make getting started as easy as
      possible, the latest v4 release is included in the package. You can customize
      Bootstrap and Componentry using the SASS variables consumed by Bootstrap. A
      typical import will look like this:
    </p>
    <PrismHighlighter language="sass">{basicImport}</PrismHighlighter>
    {/* TODO: Include note about Componentry customization of Bootstrap SCSS */}
    {/* TODO: Include note about importing Bootstrap functions and variables into your theme file so that you can import those same variables anywhere */}
  </div>
)