## Installation

<pre>
<code>npm install componentry</code>
</pre>

## Styles

Componentry is built for Bootstrap v4. To make getting started as easy as
possible, the latest v4 release is included in the package. You can customize
Bootstrap and Componentry using the SASS variables consumed by Bootstrap. A
typical import will look like this:

```scss
// Define any theme customization for Bootstrap and Componentry. They use the
// same variables in order to create a seamless theme.
@import 'styles/theme';

// Import Bootstrap styles from Componentry package. This creates the base set
// of styles for your app.
@import '~componentry/dist/bootstrap';

// Import the Componentry styles. This is a very light set of styles that extends
// and enhances Bootstrap
@import '~componentry/dist/componentry';
```

## Next Steps

* <Link to="/concepts">Concepts</Link> include guides on usage
* <Link to="/components">Components</Link> document component APIs
