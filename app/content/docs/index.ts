import { introductionContent } from './getting-started/introduction'
import type { DocsPageContent, DocsSecondaryNavItem } from './types'

const docsContentByPath: Record<string, DocsPageContent> = {
  '/docs/getting-started/introduction': introductionContent,
}

export const getDocsPageContent = (path: string): DocsPageContent | undefined => {
  return docsContentByPath[path]
}

export const getDocsSecondaryNavItems = (path: string): DocsSecondaryNavItem[] => {
  const content = getDocsPageContent(path)
  if (!content) return []

  return content.sections.map((section) => ({
    id: section.key,
    label: section.title,
  }))
}
