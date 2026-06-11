// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'nuvex-ui/styles.css',
    'nuvex-ui/framework.scss',
    '~/assets/styles/nuvex-ui-theme-overrides.css',
  ]
})
