import { useI18n } from 'vue-i18n'
import type {
  DocsComponentPageContent,
  DocsConceptPageContent,
  DocsIntroductionSectionKey,
  DocsInstallationSectionKey,
  DocsNuxtIntegrationSectionKey,
  DocsQuickStartSectionKey,
  DocsSecondaryNavItem,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { toCanonicalDocsPath } from '~/utils/docs-navigation-paths'

type DocsSecondaryNavContentResolver = {
  kind: 'workflow' | 'component' | 'concept'
  messageKey: string
}

const docsSecondaryNavResolvers: Record<string, DocsSecondaryNavContentResolver> = {
  '/docs/getting-started/introduction': {
    kind: 'concept',
    messageKey: 'pages.introduction.introduction',
  },
  '/docs/getting-started/quick-start': {
    kind: 'workflow',
    messageKey: 'pages.quickStart.quickStart',
  },
  '/docs/getting-started/installation': {
    kind: 'workflow',
    messageKey: 'pages.installation.installation',
  },
  '/docs/getting-started/nuxt-integration': {
    kind: 'workflow',
    messageKey: 'pages.nuxtIntegration.nuxtIntegration',
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

const toSectionNavItems = (content: DocsComponentPageContent): DocsSecondaryNavItem[] => {
  return content.sections.map((section) => ({
    id: section.key,
    label: section.title,
  }))
}

const toEditorialSectionNavItems = <TSection extends { title: string }>(content: {
  sections: Record<string, TSection>
}): DocsSecondaryNavItem[] => {
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

    if (resolver.kind === 'concept') {
      return toEditorialSectionNavItems(tm(resolver.messageKey) as DocsConceptPageContent<DocsIntroductionSectionKey>)
    }

    if (resolver.kind === 'workflow') {
      return toEditorialSectionNavItems(
        tm(resolver.messageKey) as DocsWorkflowPageContent<
          DocsInstallationSectionKey | DocsQuickStartSectionKey | DocsNuxtIntegrationSectionKey
        >,
      )
    }

    return toSectionNavItems(tm(resolver.messageKey) as DocsComponentPageContent)
  })
}