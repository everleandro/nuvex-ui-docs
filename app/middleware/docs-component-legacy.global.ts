import { DEFAULT_LOCALE_CODE, withLocalePrefix } from '~/utils/locale-path'
import { normalizeDocsPath } from '~/utils/docs-path'
import { toCanonicalDocsPath } from '~/utils/docs-navigation-paths'

const getLocaleCodeFromPath = (path: string): string => {
  if (path === '/es' || path.startsWith('/es/')) {
    return 'es'
  }

  return DEFAULT_LOCALE_CODE
}

export default defineNuxtRouteMiddleware((to) => {
  const normalizedPath = normalizeDocsPath(to.path)
  const canonicalPath = toCanonicalDocsPath(normalizedPath)

  if (normalizedPath === canonicalPath) {
    return
  }

  return navigateTo(
    {
      path: withLocalePrefix(canonicalPath, getLocaleCodeFromPath(to.path)),
      query: to.query,
      hash: to.hash,
    },
    {
      redirectCode: 301,
      replace: true,
    },
  )
})