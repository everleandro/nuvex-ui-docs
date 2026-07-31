import { normalizeDocsPath } from '~/utils/docs-path'

const COMPONENT_DOC_SECTIONS = [
  'core-actions',
  'form-foundations',
  'form-inputs',
  'navigation',
  'layout',
  'feedback-overlays',
  'data-display-scheduling',
  'patterns-integration',
] as const

const LEGACY_COMPONENT_PATH_ALIASES: Record<string, string> = {
  '/docs/component/forms/button': '/docs/component/core-actions/button',
  '/docs/component/forms/form': '/docs/component/form-foundations/form',
  '/docs/component/forms/text-field': '/docs/component/form-inputs/text-field',
  '/docs/component/forms/textarea': '/docs/component/form-inputs/textarea',
  '/docs/component/forms/select': '/docs/component/form-inputs/select',
  '/docs/component/forms/checkbox': '/docs/component/form-inputs/checkbox',
  '/docs/component/forms/radio': '/docs/component/form-inputs/radio',
  '/docs/component/forms/switch': '/docs/component/form-inputs/switch',
  '/docs/component/data-scheduling/date-picker': '/docs/component/form-inputs/date-picker',
  '/docs/component/data-scheduling/time-picker': '/docs/component/form-inputs/time-picker',
  '/docs/forms/button': '/docs/component/core-actions/button',
  '/docs/forms/form': '/docs/component/form-foundations/form',
  '/docs/forms/text-field': '/docs/component/form-inputs/text-field',
  '/docs/forms/textarea': '/docs/component/form-inputs/textarea',
  '/docs/forms/select': '/docs/component/form-inputs/select',
  '/docs/forms/checkbox': '/docs/component/form-inputs/checkbox',
  '/docs/forms/radio': '/docs/component/form-inputs/radio',
  '/docs/forms/switch': '/docs/component/form-inputs/switch',
  '/docs/data-scheduling/date-picker': '/docs/component/form-inputs/date-picker',
  '/docs/data-scheduling/time-picker': '/docs/component/form-inputs/time-picker',
}

export const toCanonicalDocsPath = (path: string): string => {
  const normalizedPath = normalizeDocsPath(path)

  const aliasedPath = LEGACY_COMPONENT_PATH_ALIASES[normalizedPath]

  if (aliasedPath) {
    return aliasedPath
  }

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