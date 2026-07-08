import { NuvexUI } from 'nuvex-ui'

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
})
