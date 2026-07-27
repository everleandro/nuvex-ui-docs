<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="introSectionId" :title="content.hero.prerequisitesTitle">
      <ECard>
        <ul class="pl-5">
          <li v-for="(item, index) in prerequisites" :key="item"
            :class="index === prerequisites.length - 1 ? 'mb-0' : 'mb-2'">
            <span v-html="item"></span>
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="defineThemeObjectSection.key" :title="defineThemeObjectSection.title"
      :description="defineThemeObjectSection.description">
      <ECard v-for="(snippet, index) in defineThemeObjectSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="registerAtStartupSection.key" :title="registerAtStartupSection.title"
      :description="registerAtStartupSection.description" :callout="registerAtStartupSection.callout">
      <ECard v-for="(snippet, index) in registerAtStartupSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="operateAtRuntimeSection.key" :title="operateAtRuntimeSection.title"
      :description="operateAtRuntimeSection.description" :callout="operateAtRuntimeSection.callout">
      <ECard v-for="(snippet, index) in operateAtRuntimeSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="builtInThemeLimitsSection.key" :title="builtInThemeLimitsSection.title"
      :description="builtInThemeLimitsSection.description">
      <ECard elevation="sm" color="warning" tonal>
        <p class="mb-0">{{ builtInThemeLimitsSection.note }}</p>
      </ECard>
    </DocsSection>

    <DocsSection :id="nextStepsSection.key" :title="nextStepsSection.title" :description="nextStepsSection.description">
      <ERow dense>
        <ECol v-for="item in nextStepsSection.items" :key="item.to" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="no-underline full-height d-block">
            <ECard v-ripple outlined :title="item.title" :description="item.description" class="full-height" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type {
  DocsCustomThemesSectionKey,
  DocsEditorialGridItem,
  DocsPageAction,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { customThemesCodeSnippets } from './custom-themes.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsCustomThemesSectionKey>>(
  'pages.customThemes.customThemes',
)
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])
const introSectionId = 'framework-custom-theme-support'

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing custom-themes hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('back-to-light-and-dark-themes'),
    to: '/docs/theming/light-and-dark-themes',
    outlined: true,
  },
  {
    label: getActionLabel('open-runtime-theme-api'),
    to: '/docs/theming/runtime-theme-api',
    variant: 'text',
    outlined: false,
  },
]))

const nextStepsMeta = [
  '/docs/theming/runtime-theme-api',
  '/docs/theming/light-and-dark-themes',
  '/docs/theming/design-tokens',
  '/docs/theming/css-variables',
] as const

const defineThemeObjectSection = computed(() => {
  const section = content.value.sections['define-theme-object']

  return {
    key: 'define-theme-object',
    title: section.title,
    description: section.description,
    snippets: customThemesCodeSnippets['define-theme-object'],
  }
})

const registerAtStartupSection = computed(() => {
  const section = content.value.sections['register-at-startup']

  return {
    key: 'register-at-startup',
    title: section.title,
    description: section.description,
    snippets: customThemesCodeSnippets['register-at-startup'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
  }
})

const operateAtRuntimeSection = computed(() => {
  const section = content.value.sections['operate-at-runtime']

  return {
    key: 'operate-at-runtime',
    title: section.title,
    description: section.description,
    snippets: customThemesCodeSnippets['operate-at-runtime'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
  }
})

const builtInThemeLimitsSection = computed(() => ({
  key: 'built-in-theme-limits',
  title: content.value.sections['built-in-theme-limits'].title,
  description: content.value.sections['built-in-theme-limits'].description,
  note: content.value.sections['built-in-theme-limits'].note ?? '',
}))

const nextStepsSection = computed(() => {
  const section = content.value.sections['next-steps']
  const items = (section.items as DocsEditorialGridItem[] | undefined) ?? []

  return {
    key: 'next-steps',
    title: section.title,
    description: section.description,
    items: items.map((item, index) => ({
      title: item.title,
      description: item.description,
      to: nextStepsMeta[index]!,
    })),
  }
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>
