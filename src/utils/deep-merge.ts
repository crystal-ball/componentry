/** Internal utility fn for deep merging theme+style definitions */
export function deepMerge(base: any, overrides: any) {
  const merged = JSON.parse(JSON.stringify(base))

  Object.keys(overrides).forEach((key) => {
    if (!(key in merged)) {
      // If base doesn't have this key we can just assign the entire override
      merged[key] = overrides[key]
    } else if (typeof overrides[key] !== 'object') {
      // Else if it's a value the override wins over base
      merged[key] = overrides[key]
    } else {
      // Else if it's an object then recursively deep-merge it
      merged[key] = deepMerge(merged[key], overrides[key])
    }
  })

  return merged
}
