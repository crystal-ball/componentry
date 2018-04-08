# Componentry styling

Componentry is designed to utilize Bootstrap v4 as seamlessly as possible in
order to provide seamless appearance between atomic styles and React components.
When appropriate, Componentry overrides or extends Bootstrap with enhancements.

See https://crystal-ball.github.io/componentry/setup for full documentation.

## Directory structure

Styles are split into the following categories:

* `/styles` root contains import aggregation entry files. These are consumed by
  library users.
* `/styles/bootstrap` contains the latest release of Bootstrap. Only change
  these styles when absolutely necessary, they will be overwritten when updating
  Bootstrap releases.
* `/styles/componetry` contains styles for the library that provide atomic
  styles for the components.
* `/styles/jetpack` contains optional utility styles and enhancements for
  Bootstrap and Componentry styles.

Component styles are colocated with component source files int he `/src`
directory.

## ⚠️ Componentry overrides

Changes to Bootstrap's styles in `/styles/bootstrap` should include a
`@COMPONENTRY` flag to help provide guides on what is library changes when we
are updating the Bootstrap styles used.
