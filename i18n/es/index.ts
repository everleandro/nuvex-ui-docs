import common from './common'
import navigation from './navigation'
import playground from './playground'
import errors from './errors'
import introduction from './pages/introduction'
import installation from './pages/installation'
import nuxtIntegration from './pages/nuxt-integration'
import quickStart from './pages/quick-start'
import iconConfiguration from './pages/icon-configuration'
import colors from './pages/colors'
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
    iconConfiguration,
    colors,
    typography,
    button,
    input,
    modal,
  },
} as const

export default es