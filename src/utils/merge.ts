export function merge(base = {}, overrides = {}) {
  return deepMerge(JSON.parse(JSON.stringify(base)), overrides)
}

/* eslint-disable no-param-reassign */
function deepMerge(base: any, overrides: any) {
  Object.keys(overrides).forEach((key) => {
    if (!(key in base)) {
      // If base doesn't have this key we can just assign the entire override
      base[key] = overrides[key]
    } else if (typeof overrides[key] !== 'object') {
      // Else if the override is an object we need to recursively deep-merge
      base[key] = overrides[key]
    } else {
      // Else it's a primitive value and overrides wins over base
      base[key] = merge(base[key], overrides[key])
    }
  })

  return base
}
/* eslint-enable no-param-reassign */
