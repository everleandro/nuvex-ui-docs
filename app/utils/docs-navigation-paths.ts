import { normalizeDocsPath } from '~/utils/docs-path'

const COMPONENT_DOC_SECTIONS = [
  'forms',
  'navigation',
  'layout',
  'feedback-overlays',
  'data-scheduling',
] as const

export const toCanonicalDocsPath = (path: string): string => {
  const normalizedPath = normalizeDocsPath(path)

  if (normalizedPath.startsWith('/docs/component/')) {
    return normalizedPath
  }

  for (const section of COMPONENT_DOC_SECTIONS) {
    const legacyPrefix = `/docs/${section}/`

    if (normalizedPath.startsWith(legacyPrefix)) {
      return normalizedPath.replace(legacyPrefix, `/docs/component/${section}/`)
    }
  }

  return normalizedPath
}

export const isLegacyComponentDocsPath = (path: string): boolean => {
  const normalizedPath = normalizeDocsPath(path)
  return normalizedPath !== toCanonicalDocsPath(normalizedPath)
}