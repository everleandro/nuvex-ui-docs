import { useI18n } from 'vue-i18n'
import type {
  DocsComponentPageContent,
  DocsConceptPageContent,
  DocsColorsSectionKey,
  DocsCustomThemesSectionKey,
  DocsCssVariablesSectionKey,
  DocsDesignTokensSectionKey,
  DocsIconConfigurationSectionKey,
  DocsIntroductionSectionKey,
  DocsInstallationSectionKey,
  DocsLightAndDarkThemesSectionKey,
  DocsNuxtIntegrationSectionKey,
  DocsQuickStartSectionKey,
  DocsRuntimeThemeApiSectionKey,
  DocsSecondaryNavItem,
  DocsSpacingSectionKey,
  DocsSurfacesSectionKey,
  DocsThemingOverviewSectionKey,
  DocsTypographySectionKey,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { toCanonicalDocsPath } from '~/utils/docs-navigation-paths'

type DocsSecondaryNavContentResolver = {
  kind: 'workflow' | 'component' | 'concept'
  messageKey: string
  introId?: string
}

const docsSecondaryNavResolvers: Record<string, DocsSecondaryNavContentResolver> = {
  '/docs/getting-started/introduction': {
    kind: 'concept',
    messageKey: 'pages.introduction.introduction',
  },
  '/docs/design-system/colors': {
    kind: 'concept',
    messageKey: 'pages.colors.colors',
  },
  '/docs/design-system/typography': {
    kind: 'concept',
    messageKey: 'pages.typography.typography',
  },
  '/docs/design-system/spacing': {
    kind: 'concept',
    messageKey: 'pages.spacing.spacing',
  },
  '/docs/design-system/surfaces': {
    kind: 'concept',
    messageKey: 'pages.surfaces.surfaces',
  },
  '/docs/theming/overview': {
    kind: 'concept',
    messageKey: 'pages.themingOverview.overview',
  },
  '/docs/theming/runtime-theme-api': {
    kind: 'workflow',
    messageKey: 'pages.runtimeThemeApi.runtimeThemeApi',
  },
  '/docs/theming/design-tokens': {
    kind: 'workflow',
    messageKey: 'pages.designTokens.designTokens',
    introId: 'sass-to-css-variables',
  },
  '/docs/theming/css-variables': {
    kind: 'workflow',
    messageKey: 'pages.cssVariables.cssVariables',
    introId: 'generated-css-variables',
  },
  '/docs/theming/light-and-dark-themes': {
    kind: 'workflow',
    messageKey: 'pages.lightAndDarkThemes.lightAndDarkThemes',
    introId: 'framework-theme-baseline',
  },
  '/docs/theming/custom-themes': {
    kind: 'workflow',
    messageKey: 'pages.customThemes.customThemes',
    introId: 'framework-custom-theme-support',
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
  '/docs/design-system/icon-configuration': {
    kind: 'workflow',
    messageKey: 'pages.iconConfiguration.iconConfiguration',
  },
  '/docs/component/form-foundations/form': {
    kind: 'component',
    messageKey: 'pages.form.form',
  },
  '/docs/component/core-actions/button': {
    kind: 'component',
    messageKey: 'pages.button.button',
  },
  '/docs/component/form-inputs/checkbox': {
    kind: 'component',
    messageKey: 'pages.input.checkbox',
  },
  '/docs/component/form-inputs/radio': {
    kind: 'component',
    messageKey: 'pages.input.radio',
  },
  '/docs/component/form-inputs/select': {
    kind: 'component',
    messageKey: 'pages.input.select',
  },
  '/docs/component/form-inputs/switch': {
    kind: 'component',
    messageKey: 'pages.input.switch',
  },
  '/docs/component/form-inputs/text-field': {
    kind: 'component',
    messageKey: 'pages.input.textField',
  },
  '/docs/component/form-inputs/textarea': {
    kind: 'component',
    messageKey: 'pages.input.textarea',
  },
  '/docs/component/navigation/list': {
    kind: 'component',
    messageKey: 'pages.list.list',
  },
  '/docs/component/navigation/menu': {
    kind: 'component',
    messageKey: 'pages.menu.menu',
  },
  '/docs/component/navigation/tabs': {
    kind: 'component',
    messageKey: 'pages.tabs.tabs',
  },
  '/docs/component/feedback-overlays/dialog': {
    kind: 'component',
    messageKey: 'pages.modal.dialog',
  },
  '/docs/component/feedback-overlays/progress': {
    kind: 'component',
    messageKey: 'pages.progress.progress',
  },
  '/docs/component/data-scheduling/card': {
    kind: 'component',
    messageKey: 'pages.card.card',
  },
}

const toSectionNavItems = (content: DocsComponentPageContent): DocsSecondaryNavItem[] => {
  return content.sections.map((section) => ({
    id: section.key,
    label: section.title,
  }))
}

const toEditorialSectionNavItems = <TSection extends { title: string }>(content: {
  hero?: {
    prerequisitesTitle?: string
  }
  sections: Record<string, TSection>
}, introId?: string): DocsSecondaryNavItem[] => {
  const items = Object.entries(content.sections).map(([id, section]) => ({
    id,
    label: section.title,
  }))

  if (content.hero?.prerequisitesTitle && introId) {
    return [
      {
        id: introId,
        label: content.hero.prerequisitesTitle,
      },
      ...items,
    ]
  }

  return items
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
      return toEditorialSectionNavItems(
        tm(resolver.messageKey) as DocsConceptPageContent<
          DocsIntroductionSectionKey | DocsThemingOverviewSectionKey | DocsColorsSectionKey | DocsTypographySectionKey | DocsSpacingSectionKey | DocsSurfacesSectionKey
        >,
        resolver.introId,
      )
    }

    if (resolver.kind === 'workflow') {
      return toEditorialSectionNavItems(
        tm(resolver.messageKey) as DocsWorkflowPageContent<
          DocsInstallationSectionKey | DocsQuickStartSectionKey | DocsNuxtIntegrationSectionKey | DocsIconConfigurationSectionKey | DocsRuntimeThemeApiSectionKey | DocsDesignTokensSectionKey | DocsCssVariablesSectionKey | DocsLightAndDarkThemesSectionKey | DocsCustomThemesSectionKey
        >,
        resolver.introId,
      )
    }

    return toSectionNavItems(tm(resolver.messageKey) as DocsComponentPageContent)
  })
}