## Installation

<pre>
<code>npm install componentry</code>
</pre>

## Styles

The Componentry library styles are written in SASS, so you will need a SASS
loader to use them. Applications can customize Componentry using any of the
theme variables used by Bootstrap. A typical application styles setup will look
like this:

```scss
// Define application theme customization variables, If you don't define
// custom variables, the default Componentry values will be sued
@import 'styles/your-variables';

// Import the Componentry library styles. The componentry import includes the
// full set of styles for content and components
@import '~componentry/styles/componentry';
```

_Componentry styles are a customized fork of the Bootstrap v4 styles. Thank you
to the Bootstrap community for creating such an amazing set of styles!_
