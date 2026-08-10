// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],
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

  // Phase 4: Performance Optimization
  image: {
    // Image optimization settings
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 365, // 1 year for versioned images
    },
    // Enabled formats for responsive images
    formats: ['webp', 'avif'],
    // Quality settings
    quality: 80,
    // Presets for common sizes
    presets: {
      thumbnail: { modifiers: { width: 150, height: 150 } },
      small: { modifiers: { width: 400, height: 300 } },
      medium: { modifiers: { width: 800, height: 600 } },
      large: { modifiers: { width: 1200, height: 800 } },
      'og-image': { modifiers: { width: 1200, height: 630 } },
    },
  },

  nitro: {
    // Compression settings
    prerender: {
      crawlLinks: false,
      routes: ['/sitemap.xml', '/robots.txt'],
    },
    // Enable compression for smaller payloads
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
    // Cache control for assets
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },

  // Build optimization
  build: {
    // Optimization flags
    transpile: ['nuvex-ui'],
    // CSS extraction
    cssSourceMap: false,
    // Tree-shake unused code
    terserOptions: {
      compress: {
        drop_console: false,
      },
    },
  },

  // Route rules for performance
  routeRules: {
    // Cache static routes for 24 hours
    '/**': { cache: { maxAge: 60 * 60 * 24 } },
    // Don't cache playgrounds
    '/playgrounds/**': { noCache: true },
    // Don't cache admin
    '/admin/**': { noCache: true },
  },
})

