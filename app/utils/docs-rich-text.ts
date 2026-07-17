import { withLocalePrefix } from './locale-path'

export const resolveDocsRichTextHtml = (value: string | undefined, locale: string): string | undefined => {
  if (!value) return undefined

  return value.replaceAll(
    'href="/docs/',
    `href="${withLocalePrefix('/docs/', locale)}`,
  )
}