import { lilconfigSync } from 'lilconfig'

import { createTheme } from '../theme/theme'

const explorer = lilconfigSync('componentry')

// --------------------------------------------------------
// Config

const configSearchResults = explorer.search()

const userConfig = configSearchResults?.config ?? {}

const mergedConfig = {
  theme: userConfig.theme ?? createTheme(),
  components: userConfig.components ?? {},
  foundation: userConfig.foundation ?? {},
}

export const getMergedConfig = () => mergedConfig
