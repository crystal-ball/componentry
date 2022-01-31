import { cosmiconfigSync } from 'cosmiconfig'
import merge from 'deepmerge'

import { theme } from '../theme-defaults'

const explorerSync = cosmiconfigSync('componentry')

// --------------------------------------------------------
// Config

const configSearchResults = explorerSync.search()

const userConfig = configSearchResults?.config ?? {}

const mergedConfig = {
  theme,
  components: userConfig.components ?? {},
  foundation: userConfig.foundation ?? {},
}

// Extend
if (userConfig.theme?.extend) {
  mergedConfig.theme = merge(mergedConfig.theme, userConfig.theme.extend)
}

// Override
if (userConfig.theme) {
  Object.entries(userConfig.theme).forEach(([key, value]) => {
    if (key !== 'extend') {
      // @ts-ignore Fix Me
      mergedConfig.theme[key] = value
    }
  })
}

export const getMergedConfig = () => mergedConfig
