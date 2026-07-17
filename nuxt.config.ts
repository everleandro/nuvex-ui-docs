// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  css: [
    'nuvex-ui/styles.css',
    'nuvex-ui/framework.scss',
    '~/assets/styles/app.scss',
  ],
  runtimeConfig: {
    public: {
      siteUrl:
        (globalThis as { process?: { env?: Record<string, string | undefined> } })
          .process?.env?.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Espanol' },
    ],
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'nuvex-docs-locale',
      redirectOn: 'root',
    },
  },
})
