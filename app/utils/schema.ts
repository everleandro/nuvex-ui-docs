/**
 * Schema.org JSON-LD Structured Data Generators
 * Utility functions to generate proper schema.org structured data for SEO rich snippets
 */

export interface SchemaOrganization {
  '@context': string
  '@type': 'Organization'
  name: string
  description: string
  url: string
  logo: string
  sameAs?: string[]
  contactPoint?: {
    '@type': 'ContactPoint'
    contactType: string
    url: string
  }
}

export interface SchemaWebSite {
  '@context': string
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  potentialAction?: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    query?: string
  }
}

export interface SchemaBreadcrumb {
  '@context': string
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }>
}

export interface SchemaArticle {
  '@context': string
  '@type': 'Article' | 'TechArticle'
  headline: string
  description: string
  url: string
  image?: string | string[]
  datePublished?: string
  dateModified?: string
  author?: {
    '@type': 'Organization' | 'Person'
    name: string
    url?: string
  }
  publisher?: {
    '@type': 'Organization'
    name: string
    logo?: {
      '@type': 'ImageObject'
      url: string
      width?: number
      height?: number
    }
  }
  mainEntity?: SchemaArticle
}

export interface SchemaSearchAction {
  '@context': string
  '@type': 'WebSite'
  url: string
  potentialAction: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    'query-input'?: string
  }
}

/**
 * Generate Organization schema
 * Used globally to identify the organization behind the docs site
 */
export function schemaOrganization(config: {
  name: string
  description: string
  url: string
  logo: string
  socialProfiles?: string[]
}): SchemaOrganization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    description: config.description,
    url: config.url,
    logo: config.logo,
    sameAs: config.socialProfiles,
  }
}

/**
 * Generate WebSite schema with search action
 * Used to register the site with search engines and enable search-in-site indexing
 */
export function schemaWebSite(config: {
  name: string
  url: string
  description: string
  searchUrl?: string
}): SchemaWebSite {
  const schema: SchemaWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.url,
    description: config.description,
  }

  if (config.searchUrl) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: config.searchUrl,
      },
    }
  }

  return schema
}

/**
 * Generate BreadcrumbList schema
 * Used for docs hierarchy navigation (improves SERP appearance)
 */
export function schemaBreadcrumb(config: {
  items: Array<{
    name: string
    url?: string
    position: number
  }>
}): SchemaBreadcrumb {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: config.items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  }
}

/**
 * Generate Article schema
 * Used for documentation pages to enable rich snippets in search results
 */
export function schemaArticle(config: {
  headline: string
  description: string
  url: string
  image?: string | string[]
  datePublished?: string
  dateModified?: string
  authorName?: string
  authorUrl?: string
  publisherName?: string
  publisherLogo?: string
  type?: 'Article' | 'TechArticle'
}): SchemaArticle {
  const type = config.type || 'Article'

  const schema: SchemaArticle = {
    '@context': 'https://schema.org',
    '@type': type,
    headline: config.headline,
    description: config.description,
    url: config.url,
  }

  if (config.image) {
    schema.image = config.image
  }

  if (config.datePublished) {
    schema.datePublished = config.datePublished
  }

  if (config.dateModified) {
    schema.dateModified = config.dateModified
  }

  if (config.authorName) {
    schema.author = {
      '@type': 'Person',
      name: config.authorName,
      ...(config.authorUrl && { url: config.authorUrl }),
    }
  }

  if (config.publisherName) {
    schema.publisher = {
      '@type': 'Organization',
      name: config.publisherName,
      ...(config.publisherLogo && {
        logo: {
          '@type': 'ImageObject',
          url: config.publisherLogo,
        },
      }),
    }
  }

  return schema
}

/**
 * Generate FAQPage schema
 * Used for FAQ sections to enable rich snippets
 */
export function schemaFAQPage(config: {
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.mainEntity,
  }
}

/**
 * Generate LocalBusiness schema (if applicable)
 * Used for businesses to appear in local search results
 */
export function schemaLocalBusiness(config: {
  name: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  telephone?: string
  url?: string
  image?: string
  priceRange?: string
  sameAs?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.name,
    description: config.description,
    address: {
      '@type': 'PostalAddress',
      ...config.address,
    },
    ...(config.telephone && { telephone: config.telephone }),
    ...(config.url && { url: config.url }),
    ...(config.image && { image: config.image }),
    ...(config.priceRange && { priceRange: config.priceRange }),
    ...(config.sameAs && { sameAs: config.sameAs }),
  }
}

/**
 * Stringify schema to JSON-LD script tag content
 * Utility to prepare schema for useHead/head tag rendering
 */
export function stringifySchema(schema: any): string {
  return JSON.stringify(schema)
}

/**
 * Create a script tag object for useHead
 * Ready to pass to useHead({ script: [ ... ] })
 */
export function schemaToHeadScript(schema: any, id?: string) {
  return {
    type: 'application/ld+json',
    children: stringifySchema(schema),
    ...(id && { id }),
  }
}

/**
 * Common site configuration helpers
 */
export const SiteDefaults = {
  /**
   * Nuvex UI Organization details
   */
  organizationNuvexUI: (siteUrl: string) => ({
    name: 'Nuvex UI',
    description:
      'Vue 3 and Nuxt component library combining layout, forms, overlays, navigation, and theming for production applications.',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    socialProfiles: ['https://github.com/everleandro/nuvex-ui'],
  }),

  /**
   * Nuvex UI Docs WebSite details
   */
  websiteNuvexUIDocs: (siteUrl: string) => ({
    name: 'Nuvex UI Documentation',
    url: siteUrl,
    description:
      'Comprehensive documentation for Nuvex UI - a Vue 3 and Nuxt component library for building production-grade product interfaces.',
    searchUrl: `${siteUrl}/search?q={search_term_string}`,
  }),
}
