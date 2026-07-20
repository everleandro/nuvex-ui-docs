type NuxtIntegrationCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const nuxtIntegrationCodeSnippets: Record<
  'register-nuxt-plugin' | 'load-styles' | 'persist-theme' | 'assemble-nuxt-integration',
  NuxtIntegrationCodeSnippet[]
> = {
  'register-nuxt-plugin': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `import { NuvexUI } from 'nuvex-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NuvexUI)
})`,
      language: 'ts',
    },
  ],
  'load-styles': [
    {
      label: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  css: [
    'nuvex-ui/styles.css',
    'nuvex-ui/framework.scss',
    '~/assets/styles/app.scss',
  ],
})`,
      language: 'ts',
    },
  ],
  'persist-theme': [
    {
      label: 'app/plugins/nuvex-ui.ts helpers',
      code: `const LEGACY_THEME_STORAGE_KEY = 'nuvex-ui:theme'

const readLegacyTheme = (): string | undefined => {
  if (!import.meta.client) {
    return undefined
  }

  try {
    const legacyTheme = window.localStorage.getItem(LEGACY_THEME_STORAGE_KEY)?.trim()
    return legacyTheme || undefined
  } catch {
    return undefined
  }
}

const readThemeCookie = (): string | undefined => {
  if (import.meta.server) {
    return undefined
  }

  const match = document.cookie.match(/(?:^|;\s*)nuvex-ui-theme=([^;]+)/)
  return match?.[1] ? decodeURIComponent(match[1]).trim() : undefined
}`,
      language: 'ts',
    },
    {
      label: 'app/plugins/nuvex-ui.ts cookie + storage',
      code: `const themeCookie = useCookie<string | undefined>('nuvex-ui-theme', {
  sameSite: 'lax',
  path: '/',
})

theme: {
  storage: {
    get: () => import.meta.server ? themeCookie.value : readThemeCookie() || readLegacyTheme(),
    set: (themeName: string) => {
      if (import.meta.server) {
        return
      }

      themeCookie.value = themeName

      try {
        window.localStorage.setItem(LEGACY_THEME_STORAGE_KEY, themeName)
      } catch {
        // Ignore restricted storage access and keep the SSR cookie as source of truth.
      }
    },
  },
}`,
      language: 'ts',
    },
  ],
  'assemble-nuxt-integration': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `import { NuvexUI } from 'nuvex-ui'

const LEGACY_THEME_STORAGE_KEY = 'nuvex-ui:theme'

const readLegacyTheme = (): string | undefined => {
  if (!import.meta.client) {
    return undefined
  }

  try {
    const legacyTheme = window.localStorage.getItem(LEGACY_THEME_STORAGE_KEY)?.trim()
    return legacyTheme || undefined
  } catch {
    return undefined
  }
}

const readThemeCookie = (): string | undefined => {
  if (import.meta.server) {
    return undefined
  }

  const match = document.cookie.match(/(?:^|;\s*)nuvex-ui-theme=([^;]+)/)
  return match?.[1] ? decodeURIComponent(match[1]).trim() : undefined
}

export default defineNuxtPlugin((nuxtApp) => {
  const themeCookie = useCookie<string | undefined>('nuvex-ui-theme', {
    sameSite: 'lax',
    path: '/',
  })

  nuxtApp.vueApp.use(NuvexUI, {
    theme: {
      storage: {
        get: () => import.meta.server ? themeCookie.value : readThemeCookie() || readLegacyTheme(),
        set: (themeName: string) => {
          if (import.meta.server) {
            return
          }

          themeCookie.value = themeName

          try {
            window.localStorage.setItem(LEGACY_THEME_STORAGE_KEY, themeName)
          } catch {
            // Ignore restricted storage access and keep the SSR cookie as source of truth.
          }
        },
      },
    },
  })
})`,
      language: 'ts',
    },
  ],
}