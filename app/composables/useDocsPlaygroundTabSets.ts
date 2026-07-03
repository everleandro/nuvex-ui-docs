import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

type DocsPlaygroundTabKey = 'design' | 'template' | 'example' | 'ts' | 'css'

type DocsPlaygroundTabsLabels = {
  design: string
  template: string
  example: string
  ts: string
  css?: string
}

type DocsPlaygroundTab = {
  value: string
  label: string
}

const tabLabelResolvers: Record<
  DocsPlaygroundTabKey,
  (labels: DocsPlaygroundTabsLabels) => string
> = {
  design: (labels) => labels.design,
  template: (labels) => labels.template,
  example: (labels) => labels.example,
  ts: (labels) => labels.ts,
  css: (labels) => labels.css ?? 'CSS',
}

export const useDocsPlaygroundTabSets = () => {
  const { t } = useI18n()

  const tabsBuilder = computed(() => {
    const labels: DocsPlaygroundTabsLabels = {
      design: t('docs.playgroundTabs.design'),
      template: t('docs.playgroundTabs.template'),
      example: t('docs.playgroundTabs.example'),
      ts: t('docs.playgroundTabs.ts'),
      css: t('docs.playgroundTabs.css'),
    }

    const build = (keys: DocsPlaygroundTabKey[]): DocsPlaygroundTab[] => {
      return keys.map((key) => ({
        value: key === 'example' ? 'design' : key,
        label: tabLabelResolvers[key](labels),
      }))
    }

    return {
      build,
      presets: {
        playground: ['example'] as const,
        designTemplate: ['design', 'template'] as const,
        designTemplateTs: ['design', 'template', 'ts'] as const,
        designTemplateTsCss: ['design', 'template', 'ts', 'css'] as const,
      },
    }
  })

  const tabsPlayground = computed(() => {
    return tabsBuilder.value.build([...tabsBuilder.value.presets.playground])
  })

  const tabsDesignOnly = computed(() => {
    return tabsBuilder.value.build(['design'])
  })

  const tabsDesignTemplate = computed(() => {
    return tabsBuilder.value.build([...tabsBuilder.value.presets.designTemplate])
  })

  const tabsDesignTemplateTs = computed(() => {
    return tabsBuilder.value.build([...tabsBuilder.value.presets.designTemplateTs])
  })

  const tabsDesignTemplateTsCss = computed(() => {
    return tabsBuilder.value.build([...tabsBuilder.value.presets.designTemplateTsCss])
  })

  return {
    tabsPlayground,
    tabsDesignOnly,
    tabsDesignTemplate,
    tabsDesignTemplateTs,
    tabsDesignTemplateTsCss,
  }
}