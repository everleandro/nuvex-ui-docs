import common from './common'
import navigation from './navigation'
import playground from './playground'
import errors from './errors'
import introduction from './pages/introduction'
import installation from './pages/installation'
import nuxtIntegration from './pages/nuxt-integration'
import quickStart from './pages/quick-start'
import themingOverview from './pages/theming-overview'
import runtimeThemeApi from './pages/runtime-theme-api'
import designTokens from './pages/design-tokens'
import cssVariables from './pages/css-variables'
import lightAndDarkThemes from './pages/light-and-dark-themes'
import customThemes from './pages/custom-themes'
import iconConfiguration from './pages/icon-configuration'
import colors from './pages/colors'
import spacing from './pages/spacing'
import surfaces from './pages/surfaces'
import typography from './pages/typography'
import button from './pages/button'
import input from './pages/input'
import modal from './pages/modal'

const es = {
  common,
  navigation,
  playground,
  errors,
  pages: {
    introduction,
    installation,
    nuxtIntegration,
    quickStart,
    themingOverview,
    runtimeThemeApi,
    designTokens,
    cssVariables,
    lightAndDarkThemes,
    customThemes,
    iconConfiguration,
    colors,
    spacing,
    surfaces,
    typography,
    button,
    input,
    modal,
  },
} as const

export default es