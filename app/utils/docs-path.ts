const SUPPORTED_LOCALE_CODES = ['en', 'es'] as const

const localePrefixRegex = new RegExp(`^/(${SUPPORTED_LOCALE_CODES.join('|')})(?=/|$)`)

export const normalizeDocsPath = (path: string): string => {
  if (!path) {
    return '/'
  }

  const normalized = path.replace(localePrefixRegex, '')
  return normalized || '/'
}
