import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { withLocalePrefix } from '~/utils/locale-path'

export interface UseSeoHeadConfig {
  title?: string | { value: string }
  description?: string | { value: string }
  og_image?: string | { value: string | undefined }
  type?: 'website' | 'article' | 'documentation'
  url?: string | { value: string }
}

export function useSeoHead(config: UseSeoHeadConfig = {}) {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  const { locale } = useI18n()
  const hasCustomTitle = Boolean(config.title)
  const hasCustomDescription = Boolean(config.description)

  const siteUrl = computed(() => String(runtimeConfig.public.siteUrl || 'http://localhost:3000'))

  // Resolve computed or plain values
  const title = computed(() => {
    if (!config.title) return 'Nuvex UI'
    return typeof config.title === 'string' ? config.title : config.title.value
  })

  const description = computed(() => {
    if (!config.description) {
      return 'Nuvex UI combines layout, forms, overlays, navigation, and theming for Vue 3 and Nuxt.'
    }
    return typeof config.description === 'string' ? config.description : config.description.value
  })

  const og_image = computed(() => {
    if (!config.og_image) {
      return `${siteUrl.value}/media.png`
    }
    const img = typeof config.og_image === 'string' ? config.og_image : config.og_image.value
    if (!img) {
      return `${siteUrl.value}/media.png`
    }
    // Return full URL if it starts with http, otherwise prepend siteUrl
    return img.startsWith('http') ? img : `${siteUrl.value}${img.startsWith('/') ? img : '/' + img}`
  })

  const pageUrl = computed(() => {
    if (config.url) {
      const url = typeof config.url === 'string' ? config.url : config.url.value
      return new URL(url, siteUrl.value).toString()
    }
    const canonicalPath = withLocalePrefix(route.path, locale.value)
    return new URL(canonicalPath, siteUrl.value).toString()
  })

  const ogType = computed(() => config.type || 'website')

  // Locales configuration for hreflang
  const locales: { code: string; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ]

  type AlternateHeadLink = { rel: 'alternate'; hreflang: string; href: string }

  const alternateHeadLinks = computed<AlternateHeadLink[]>(() => {
    const links: AlternateHeadLink[] = locales
      .map((value) => {
        const localizedPath = withLocalePrefix(route.path, value.code)

        if (!localizedPath) {
          return null
        }

        return {
          rel: 'alternate' as const,
          hreflang: value.code,
          href: new URL(localizedPath, siteUrl.value).toString(),
        }
      })
      .filter((value): value is AlternateHeadLink => value !== null)

    // Add x-default hreflang pointing to the default locale (English)
    const defaultLocalePath = withLocalePrefix(route.path, 'en')
    if (defaultLocalePath) {
      links.push({
        rel: 'alternate',
        hreflang: 'x-default',
        href: new URL(defaultLocalePath, siteUrl.value).toString(),
      })
    }

    return links
  })

  const canonicalPath = computed(() => {
    return withLocalePrefix(route.path, locale.value)
  })

  return {
    title,
    description,
    og_image,
    pageUrl,
    ogType,
    siteUrl,
    canonicalPath,
    alternateHeadLinks,
    getHeadObject: () => {
      const metaTags: any[] = [
        { name: 'description', content: description.value },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'theme-color', content: '#8b7cf6' },
        { property: 'og:type', content: ogType.value },
        { property: 'og:site_name', content: 'Nuvex UI' },
        { property: 'og:locale', content: locale.value === 'es' ? 'es_ES' : 'en_US' },
        { property: 'og:url', content: pageUrl.value },
        { property: 'og:image', content: og_image.value },
        { property: 'og:image:secure_url', content: og_image.value },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Nuvex UI documentation preview' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: og_image.value },
        { name: 'twitter:image:alt', content: 'Nuvex UI documentation preview' },
      ]

      if (hasCustomTitle) {
        metaTags.push(
          { property: 'og:title', content: title.value },
          { name: 'twitter:title', content: title.value },
        )
      }

      if (hasCustomDescription) {
        metaTags.push(
          { property: 'og:description', content: description.value },
          { name: 'twitter:description', content: description.value },
        )
      }

      return {
        title: title.value,
        meta: metaTags,
        link: [
          {
            rel: 'canonical' as const,
            href: new URL(canonicalPath.value, siteUrl.value).toString(),
          },
          ...alternateHeadLinks.value,
        ],
      }
    },
  }
}
