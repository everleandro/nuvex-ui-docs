import common from './common'
import navigation from './navigation'
import playground from './playground'
import errors from './errors'
import introduction from './pages/introduction'
import installation from './pages/installation'
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
    button,
    input,
    modal,
  },
} as const

export default en