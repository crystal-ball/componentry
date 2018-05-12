## Installation

<pre>
<code>npm install componentry</code>
</pre>

## Styles

Componentry uses Bootstrap v4 for styling. To make getting started as easy as
possible, the latest v4 release is included in the library. You can customize
Bootstrap and Componentry using the SCSS variables consumed by Bootstrap. A
typical import will look like this:

```scss
// Define theme customization variables, they will be used by both for Bootstrap
// and Componentry in order to create a seamless theme. If you don't define
// custom variables, the default Bootstrap theme will take effect.
@import 'styles/your-variables';

// Import Bootstrap v4 from Componentry. This creates the foundational styling
// for your app.
@import '~componentry/dist/bootstrap';

// Import the Componentry component styles. These styles provide the seamless
// customization of the React components.
@import '~componentry/dist/componentry';
```
