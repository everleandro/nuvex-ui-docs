import { normalizeDocsPath } from '~/utils/docs-path'

export const DEFAULT_LOCALE_CODE = 'en'

export const withLocalePrefix = (path: string, localeCode: string): string => {
  const normalizedPath = normalizeDocsPath(path)

  if (localeCode === DEFAULT_LOCALE_CODE) {
    return normalizedPath
  }

  if (normalizedPath === '/') {
    return `/${localeCode}`
  }

  return `/${localeCode}${normalizedPath}`
}
