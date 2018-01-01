/**
 * 🔮 InspireScript Magic Markdown Registry 🎉😍🎉
 *
 * Use the exposed `register` and `getRegistry` methods on the exported registry
 * instance to register Magic Markdown components and get the registry.
 *
 * See the Magic Markdown guide for design overview.
 */
class Registry {
  registry = {}

  register(component, name) {
    const registryName = name || component.displayName || component.name
    if (!name) {
      console.error('⚠️ Component registration requires a name: ', component)
    } else {
      this.registry[registryName] = component
    }
  }

  getRegistry() {
    return this.registry
  }
}

const registry = new Registry()

// The require context passed to deepRegister has a keys method for iterating
// through all matched imports. Calling require on a key returns a cjs module that
// we use to register the component
function deepRegister(r) {
  r.keys().forEach(key => {
    const component = r(key)
    registry.register(component.default, component.registryName)
  })
}

// Use webpack require.context to recursively find all registry imports anywhere in
// application and register them
deepRegister(require.context('./', true, /\.registry\.jsx?$/))

export default registry
