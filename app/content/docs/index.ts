import { introductionContent } from './getting-started/introduction'
import { introductionContentEs } from './getting-started/introduction-es'
import { buttonComponentContent } from './forms/button'
import { buttonComponentContentEs } from './forms/button-es'
import { checkboxComponentContent } from './forms/checkbox'
import { checkboxComponentContentEs } from './forms/checkbox-es'
import { radioComponentContent } from './forms/radio'
import { radioComponentContentEs } from './forms/radio-es'
import { switchComponentContent } from './forms/switch'
import { switchComponentContentEs } from './forms/switch-es'
import { selectComponentContent } from './forms/select'
import { selectComponentContentEs } from './forms/select-es'
import { textareaComponentContent } from './forms/textarea'
import { textareaComponentContentEs } from './forms/textarea-es'
import { textFieldComponentContent } from './forms/text-field'
import { textFieldComponentContentEs } from './forms/text-field-es'
import type {
  DocsComponentPageContent,
  DocsFooterContent,
  DocsLocaleCode,
  DocsPageContent,
  DocsSecondaryNavItem,
} from './types'
import { normalizeDocsPath } from '~/utils/docs-path'

const DEFAULT_DOCS_LOCALE: DocsLocaleCode = 'en'

const docsContentByLocale: Record<DocsLocaleCode, Record<string, DocsPageContent>> = {
  en: {
    '/docs/getting-started/introduction': introductionContent,
  },
  es: {
    '/docs/getting-started/introduction': introductionContentEs,
  },
}

const docsComponentContentByLocale: Record<DocsLocaleCode, Record<string, DocsComponentPageContent>> = {
  en: {
    '/docs/forms/button': buttonComponentContent,
    '/docs/forms/checkbox': checkboxComponentContent,
    '/docs/forms/radio': radioComponentContent,
    '/docs/forms/switch': switchComponentContent,
    '/docs/forms/select': selectComponentContent,
    '/docs/forms/textarea': textareaComponentContent,
    '/docs/forms/text-field': textFieldComponentContent,
  },
  es: {
    '/docs/forms/button': buttonComponentContentEs,
    '/docs/forms/checkbox': checkboxComponentContentEs,
    '/docs/forms/radio': radioComponentContentEs,
    '/docs/forms/switch': switchComponentContentEs,
    '/docs/forms/select': selectComponentContentEs,
    '/docs/forms/textarea': textareaComponentContentEs,
    '/docs/forms/text-field': textFieldComponentContentEs,
  },
}

export const resolveDocsLocale = (locale: string): DocsLocaleCode => {
  if (locale === 'es') return 'es'
  return DEFAULT_DOCS_LOCALE
}

export const getDocsPageContent = (path: string, locale: string = DEFAULT_DOCS_LOCALE): DocsPageContent | undefined => {
  const normalizedPath = normalizeDocsPath(path)
  const localeCode = resolveDocsLocale(locale)

  return docsContentByLocale[localeCode][normalizedPath]
    ?? docsContentByLocale[DEFAULT_DOCS_LOCALE][normalizedPath]
}

export const getDocsComponentPageContent = (
  path: string,
  locale: string = DEFAULT_DOCS_LOCALE,
): DocsComponentPageContent | undefined => {
  const normalizedPath = normalizeDocsPath(path)
  const localeCode = resolveDocsLocale(locale)

  return docsComponentContentByLocale[localeCode][normalizedPath]
    ?? docsComponentContentByLocale[DEFAULT_DOCS_LOCALE][normalizedPath]
}

export const getDocsSecondaryNavItems = (path: string, locale: string = DEFAULT_DOCS_LOCALE): DocsSecondaryNavItem[] => {
  const docsPageContent = getDocsPageContent(path, locale)
  if (docsPageContent) {
    return docsPageContent.sections.map((section) => ({
      id: section.key,
      label: section.title,
    }))
  }

  const componentPageContent = getDocsComponentPageContent(path, locale)
  if (!componentPageContent) return []

  return componentPageContent.sections.map((section) => ({
    id: section.key,
    label: section.title,
  }))
}

export const getDocsFooterContent = (path: string, locale: string = DEFAULT_DOCS_LOCALE): DocsFooterContent | undefined => {
  const content = getDocsPageContent(path, locale)
  return content?.footer
}
