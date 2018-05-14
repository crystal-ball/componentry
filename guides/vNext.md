# Componentry - vNext⚛️

_Componentry is upgrading 🎉🎉🎉_

Componentry is being improved to provide better scoping of component styles and
better separation between atomic and component styles. These upgrades will make
Componentry more scalable and debuggable.

Componentry vNext is about taking advantage of the lessons learned by the web
community from CSS in JS libraries: Using styles scoped to a single component
and single purpose atomic classes removes the uncertainty of how CSS is used and
what impacts of changing styles might be.

We think the combination of atomic classes with scoped component classes
provides the best foundation for writing reusable and scalable CSS.

#### Upgrade goals

* Simplify the setup and usage of Componentry styles.
* Scope component styles to a single consumer.
* Provide a foundation for building custom design systems.

## 🗺 Direction

Componentry began as a React component library for working with Bootstrap
styles, and this layering has worked well most of the time, but there is
non-neglible overhead to distinguishing the boundaries between Componentry and
Bootstrap, and that additional overhead extends into library setup and
development.

Componentry vNext is an evolution of the existing Bootstrap usage rather than a
direct departure, with the intent of mirroring the classes used by Bootstrap
whenever possible. Updates will be focused on ensuring that any class name is
scoped to a single component usage.

## 🚧 Upcoming changes

* [ ] Update bundled Bootstrap styles to v4.1.1 (latest)
* [ ] Update package to declare webpack `sideEffects` to allow applications to
      start importing single components.
* [ ] Create a `styles/atomic` directory for separation of atomic styles.
* [ ] Identify and migrate atomic theme mixins/functions to allow applications
      to begin consuming single components.
* [ ] Create a `theme.scss` styles entrypoint that includes all variables and
      helper mixins/functions required by component styles.
* [ ] Validate that any component class name can be imported and used without
      impact or dependency on global styles.
* [ ] Validate that component styles do no assume styling provided by general
      Bootstrap content styles.
