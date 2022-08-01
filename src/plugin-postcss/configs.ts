import { lilconfigSync } from 'lilconfig'

import { Theme, createTheme } from '../theme/theme'

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

// TODO: VALIDATE ALL FIELDS ARE PRESENT, SET TO EMPTY OBJECTS IF MISSING
export const getMergedConfig = (): Config => mergedConfig
