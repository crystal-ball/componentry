import { cosmiconfigSync } from 'cosmiconfig'

import { createTheme } from '../theme/theme'

const explorerSync = cosmiconfigSync('componentry')

// --------------------------------------------------------
// Config

const configSearchResults = explorerSync.search()

const userConfig = configSearchResults?.config ?? {}

const mergedConfig = {
  theme: createTheme(userConfig.theme ?? {}),
  components: userConfig.components ?? {},
  foundation: userConfig.foundation ?? {},
}

export const getMergedConfig = () => mergedConfig
