type IconConfigurationSnippetKey =
  | 'application-strategy-vue'
  | 'application-strategy-nuxt'
  | 'application-usage'
  | 'mdi-config'
  | 'mdi-nuxt'
  | 'mdi-usage'
  | 'font-awesome-config'
  | 'font-awesome-nuxt'
  | 'font-awesome-usage'
  | 'override-framework-icons'
  | 'override-framework-icons-nuxt'
  | 'override-usage'
  | 'per-instance-override'

type IconConfigurationCodeSnippet = {
  code: string
  language: 'ts' | 'js' | 'html' | 'vue' | 'scss' | 'json'
}

export const iconConfigurationCodeSnippets: Record<IconConfigurationSnippetKey, IconConfigurationCodeSnippet> = {
  'application-strategy-vue': {
    code: `import { NuvexUI } from 'nuvex-ui'

app.use(NuvexUI, {
  iconFont: {
    baseClass: 'your-icon-base-class', // Shared class added to every resolved icon
    prefix: 'your-icon-prefix-', // Used when the library follows prefix + icon-name
  },
})`,
    language: 'ts',
  },
  'application-strategy-nuxt': {
    code: `import { NuvexUI } from 'nuvex-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NuvexUI, {
    iconFont: {
      baseClass: 'your-icon-base-class', // Shared class added to every resolved icon
      prefix: 'your-icon-prefix-', // Used when the library follows prefix + icon-name
    },
  })
})`,
    language: 'ts',
  },
  'application-usage': {
    code: `<template>
  <EIcon icon="home" />
  <EIcon icon="account" />
  <EButton icon="calendar" />
</template>`,
    language: 'html',
  },
  'mdi-config': {
    code: `import { NuvexUI } from 'nuvex-ui'

app.use(NuvexUI, {
  iconFont: {
    baseClass: 'mdi',
    prefix: 'mdi-',
  },
})`,
    language: 'ts',
  },
  'mdi-nuxt': {
    code: `import { NuvexUI } from 'nuvex-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NuvexUI, {
    iconFont: {
      baseClass: 'mdi',
      prefix: 'mdi-',
    },
  })
})`,
    language: 'ts',
  },
  'mdi-usage': {
    code: `<template>
  <EIcon icon="home" />
  <EIcon icon="account" />
  <EIcon icon="calendar" />
</template>`,
    language: 'html',
  },
  'font-awesome-config': {
    code: `import { NuvexUI } from 'nuvex-ui'

app.use(NuvexUI, {
  iconFont: {
    baseClass: 'fa',
    resolveClass: (name) => ['fa-solid', \`fa-\${name}\`],
  },
})`,
    language: 'ts',
  },
  'font-awesome-nuxt': {
    code: `import { NuvexUI } from 'nuvex-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NuvexUI, {
    iconFont: {
      baseClass: 'fa',
      resolveClass: (name) => ['fa-solid', \`fa-\${name}\`],
    },
  })
})`,
    language: 'ts',
  },
  'font-awesome-usage': {
    code: `<template>
  <EIcon icon="house" />
  <EIcon icon="user" />
  <EIcon icon="gear" />
</template>`,
    language: 'html',
  },
  'override-framework-icons': {
    code: `import { NuvexUI } from 'nuvex-ui'

app.use(NuvexUI, {
  icons: {
    calendar: { d: 'M19,19H5V8H19...' },
    clear: { d: 'M19,6.41L17.59,5...' },
    arrowLeft: { d: 'M14,7L9,12L14,17V7Z' },
  },
})`,
    language: 'ts',
  },
  'override-framework-icons-nuxt': {
    code: `import { NuvexUI } from 'nuvex-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NuvexUI, {
    icons: {
      calendar: { d: 'M19,19H5V8H19...' },
      clear: { d: 'M19,6.41L17.59,5...' },
      arrowLeft: { d: 'M14,7L9,12L14,17V7Z' },
    },
  })
})`,
    language: 'ts',
  },
  'override-usage': {
    code: `<template>
  <ETextfield clearable />
  <EDatePicker />
  <EAutocomplete clearable />
</template>`,
    language: 'html',
  },
  'per-instance-override': {
    code: `<template>
  <EIcon icon="account" prefix="mdi-" />
</template>`,
    language: 'html',
  },
}
