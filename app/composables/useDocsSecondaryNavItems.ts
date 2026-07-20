import { useI18n } from 'vue-i18n'
import type {
  DocsComponentPageContent,
  DocsInstallationEditorialContent,
  DocsPageContent,
  DocsQuickStartEditorialContent,
  DocsSecondaryNavItem,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { toCanonicalDocsPath } from '~/utils/docs-navigation-paths'

type DocsSecondaryNavContentResolver = {
  kind: 'page' | 'workflow' | 'component' | 'installation' | 'quick-start'
  messageKey: string
}

const docsSecondaryNavResolvers: Record<string, DocsSecondaryNavContentResolver> = {
  '/docs/getting-started/introduction': {
    kind: 'page',
    messageKey: 'pages.introduction.introduction',
  },
  '/docs/getting-started/quick-start': {
    kind: 'quick-start',
    messageKey: 'pages.quickStart.quickStart',
  },
  '/docs/getting-started/installation': {
    kind: 'installation',
    messageKey: 'pages.installation.installation',
  },
  '/docs/component/forms/button': {
    kind: 'component',
    messageKey: 'pages.button.button',
  },
  '/docs/component/forms/checkbox': {
    kind: 'component',
    messageKey: 'pages.input.checkbox',
  },
  '/docs/component/forms/radio': {
    kind: 'component',
    messageKey: 'pages.input.radio',
  },
  '/docs/component/forms/select': {
    kind: 'component',
    messageKey: 'pages.input.select',
  },
  '/docs/component/forms/switch': {
    kind: 'component',
    messageKey: 'pages.input.switch',
  },
  '/docs/component/forms/text-field': {
    kind: 'component',
    messageKey: 'pages.input.textField',
  },
  '/docs/component/forms/textarea': {
    kind: 'component',
    messageKey: 'pages.input.textarea',
  },
}

const toSectionNavItems = (
  content: DocsPageContent | DocsWorkflowPageContent | DocsComponentPageContent,
): DocsSecondaryNavItem[] => {
  return content.sections.map((section) => ({
    id: section.key,
    label: section.title,
  }))
}

const toInstallationSectionNavItems = (content: DocsInstallationEditorialContent): DocsSecondaryNavItem[] => {
  return Object.entries(content.sections).map(([id, section]) => ({
    id,
    label: section.title,
  }))
}

const toQuickStartSectionNavItems = (content: DocsQuickStartEditorialContent): DocsSecondaryNavItem[] => {
  return Object.entries(content.sections).map(([id, section]) => ({
    id,
    label: section.title,
  }))
}

export const useDocsSecondaryNavItems = (path: Ref<string> | ComputedRef<string>) => {
  const { tm } = useI18n()

  return computed<DocsSecondaryNavItem[]>(() => {
    const normalizedPath = toCanonicalDocsPath(path.value)
    const resolver = docsSecondaryNavResolvers[normalizedPath]

    if (!resolver) {
      return []
    }

    if (resolver.kind === 'installation') {
      return toInstallationSectionNavItems(tm(resolver.messageKey) as DocsInstallationEditorialContent)
    }

    if (resolver.kind === 'quick-start') {
      return toQuickStartSectionNavItems(tm(resolver.messageKey) as DocsQuickStartEditorialContent)
    }

    if (resolver.kind === 'page') {
      return toSectionNavItems(tm(resolver.messageKey) as DocsPageContent)
    }

    if (resolver.kind === 'workflow') {
      return toSectionNavItems(tm(resolver.messageKey) as DocsWorkflowPageContent)
    }

    return toSectionNavItems(tm(resolver.messageKey) as DocsComponentPageContent)
  })
}