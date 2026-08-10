/**
 * Composable for component documentation pages
 * Generates Article and Breadcrumb schemas for rich snippets
 * Supports multilingual pages (en/es)
 */

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { schemaArticle, schemaBreadcrumb, schemaToHeadScript } from '~/utils/schema'
import { withLocalePrefix } from '~/utils/locale-path'

export interface UseComponentPageSchemaConfig {
  /** Component/page title */
  title: string | { value: string }
  /** Component/page description */
  description: string | { value: string }
  /** Breadcrumb segment names (e.g., ['Components', 'Button']) */
  breadcrumbSegments: Array<{ label: string; url?: string }>
  /** Component category for rich snippet context (optional) */
  category?: string
  /** Date published (ISO format, optional) */
  datePublished?: string
  /** Date modified (ISO format, optional) */
  dateModified?: string
}

export function useComponentPageSchema(config: UseComponentPageSchemaConfig) {
  const route = useRoute()
  const { locale } = useI18n()
  const runtimeConfig = useRuntimeConfig()

  const siteUrl = computed(() => String(runtimeConfig.public.siteUrl || 'http://localhost:3000'))

  // Resolve title
  const title = computed(() => {
    return typeof config.title === 'string' ? config.title : config.title.value
  })

  // Resolve description
  const description = computed(() => {
    return typeof config.description === 'string' ? config.description : config.description.value
  })

  // Current page URL with locale
  const pageUrl = computed(() => {
    return new URL(withLocalePrefix(route.path, locale.value), siteUrl.value).toString()
  })

  /**
   * Generate Article schema for rich snippet in search results
   * Includes component-specific metadata and language tagging
   */
  const articleSchema = computed(() => {
    return schemaArticle({
      headline: title.value,
      description: description.value,
      url: pageUrl.value,
      type: 'TechArticle', // More specific than Article for component docs
      inLanguage: locale.value, // en or es
      publisherName: 'Nuvex UI',
      publisherLogo: `${siteUrl.value}/logo.png`,
      datePublished: config.datePublished,
      dateModified: config.dateModified,
    })
  })

  /**
   * Generate Breadcrumb schema for SERP navigation display
   * Helps search engines understand doc hierarchy
   */
  const breadcrumbSchema = computed(() => {
    // Build breadcrumb with position numbers
    const breadcrumbItems = config.breadcrumbSegments.map((segment, index) => ({
      position: index + 1,
      label: segment.label,
      url: segment.url ? withLocalePrefix(segment.url, locale.value) : undefined,
    }))

    // Generate breadcrumb with full URLs
    const items = breadcrumbItems.map((item) => ({
      position: item.position,
      name: item.label,
      ...(item.url && {
        url: new URL(item.url, siteUrl.value).toString(),
      }),
    }))

    return schemaBreadcrumb({
      items,
      inLanguage: locale.value,
    })
  })

  /**
   * Get head object with both schemas ready for useHead()
   * Usage: useHead(() => getHeadObject())
   */
  const getHeadObject = () => {
    return {
      script: [
        schemaToHeadScript(articleSchema.value, `schema-article-${route.name}`),
        schemaToHeadScript(breadcrumbSchema.value, `schema-breadcrumb-${route.name}`),
      ],
    }
  }

  return {
    title,
    description,
    pageUrl,
    articleSchema,
    breadcrumbSchema,
    getHeadObject,
  }
}

/**
 * Breadcrumb builder utility
 * Common breadcrumb structures for different doc sections
 */
export const BreadcrumbBuilders = {
  /**
   * Build breadcrumb for component pages
   * Example: ['Docs', 'Components', 'Button']
   */
  component: (componentName: string) => [
    { label: 'Docs', url: '/docs' },
    { label: 'Components', url: '/docs/component' },
    { label: componentName },
  ],

  /**
   * Build breadcrumb for design system pages
   * Example: ['Docs', 'Design System', 'Colors']
   */
  designSystem: (systemName: string) => [
    { label: 'Docs', url: '/docs' },
    { label: 'Design System', url: '/docs/design-system' },
    { label: systemName },
  ],

  /**
   * Build breadcrumb for guide/concept pages
   * Example: ['Docs', 'Guides', 'Quick Start']
   */
  guide: (guideName: string) => [
    { label: 'Docs', url: '/docs' },
    { label: 'Guides', url: '/docs/getting-started' },
    { label: guideName },
  ],

  /**
   * Build breadcrumb for API reference
   * Example: ['Docs', 'API Reference', 'useTheme']
   */
  apiReference: (apiName: string) => [
    { label: 'Docs', url: '/docs' },
    { label: 'API Reference', url: '/docs/api-reference' },
    { label: apiName },
  ],

  /**
   * Build custom breadcrumb from segment array
   */
  custom: (segments: Array<{ label: string; url?: string }>) => segments,
}
