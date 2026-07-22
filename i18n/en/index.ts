import common from './common'
import navigation from './navigation'
import playground from './playground'
import errors from './errors'
import introduction from './pages/introduction'
import installation from './pages/installation'
import nuxtIntegration from './pages/nuxt-integration'
import quickStart from './pages/quick-start'
import colors from './pages/colors'
import button from './pages/button'
import input from './pages/input'
import modal from './pages/modal'

const en = {
  common,
  navigation,
  playground,
  errors,
  pages: {
    introduction,
    installation,
    nuxtIntegration,
    quickStart,
    colors,
    button,
    input,
    modal,
  },
} as const

export default en