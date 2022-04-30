import { lilconfigSync } from 'lilconfig'

import { type Theme, createTheme } from '../theme/theme'

const explorer = lilconfigSync('componentry')

// --------------------------------------------------------
// Config

type Config = {
  theme: Theme
  components: any
  foundation: any
}

const configSearchResults = explorer.search()

const userConfig = configSearchResults?.config ?? {}

const mergedConfig: Config = {
  theme: userConfig.theme ?? createTheme(),
  components: userConfig.components ?? {},
  foundation: userConfig.foundation ?? {},
}

export const getMergedConfig = (): Config => mergedConfig
