// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],
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
  sitemap: {
    // Auto-discover routes from file system
    urls: async () => {
      return []
    },
    sitemaps: {
      pages: {
        // Dynamic routes - will be auto-generated
      },
    },
    defaults: {
      // Default priority for all routes
      priority: 0.8,
      changefreq: 'weekly',
    },
    // Exclude patterns
    exclude: [
      '/playgrounds/**', // Exclude playgrounds - noindex applied
      '/admin/**', // Exclude admin routes if any
    ],
    // Ensure trailing slashes
    trailingSlash: false,
  },
})

