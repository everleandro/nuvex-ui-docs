import { introductionContent } from './getting-started/introduction'
import type { DocsFooterContent, DocsPageContent, DocsSecondaryNavItem } from './types'
import { normalizeDocsPath } from '~/utils/docs-path'

const docsContentByPath: Record<string, DocsPageContent> = {
  '/docs/getting-started/introduction': introductionContent,
}

export const getDocsPageContent = (path: string): DocsPageContent | undefined => {
  return docsContentByPath[normalizeDocsPath(path)]
}

export const getDocsSecondaryNavItems = (path: string): DocsSecondaryNavItem[] => {
  const content = getDocsPageContent(path)
  if (!content) return []

  return content.sections.map((section) => ({
    id: section.key,
    label: section.title,
  }))
}

export const getDocsFooterContent = (path: string): DocsFooterContent | undefined => {
  const content = getDocsPageContent(path)
  return content?.footer
}
