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
import elevation from './pages/elevation'
import displayHelpers from './pages/display-helpers'
import flexbox from './pages/flexbox'
import spacing from './pages/spacing'
import surfaces from './pages/surfaces'
import typography from './pages/typography'
import form from './pages/form'
import button from './pages/button'
import input from './pages/input'
import modal from './pages/modal'
import list from './pages/list'
import menu from './pages/menu'
import tabs from './pages/tabs'
import progress from './pages/progress'
import card from './pages/card'
import schedule from './pages/schedule'
import appShell from './pages/app-shell'
import bar from './pages/bar'
import drawer from './pages/drawer'

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
    elevation,
    displayHelpers,
    flexbox,
    spacing,
    surfaces,
    typography,
    form,
    button,
    input,
    modal,
    list,
    menu,
    tabs,
    progress,
    card,
    schedule,
    appShell,
    bar,
    drawer,
  },
} as const

export default es