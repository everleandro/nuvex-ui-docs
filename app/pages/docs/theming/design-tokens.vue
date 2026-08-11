<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="introSectionId" :title="content.hero.prerequisitesTitle">
      <ECard >
        <ul class="pl-5">
          <li v-for="(item, index) in prerequisites" :key="item"
            :class="index === prerequisites.length - 1 ? 'mb-0' : 'mb-2'">
            <span v-html="item"></span>
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="overrideInVueAndNuxtSection.key" :title="overrideInVueAndNuxtSection.title"
      :description="overrideInVueAndNuxtSection.description" :callout="overrideInVueAndNuxtSection.callout">
      <ECard v-for="(snippet, index) in overrideInVueAndNuxtSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="frameworkTokenReferenceSection.key" :title="frameworkTokenReferenceSection.title"
      :description="frameworkTokenReferenceSection.description">
      <ECard subtitle="nuvex-ui/setting.scss public Sass inventory">
        <div class="design-tokens-reference-panel">
          <CodePanel :code="frameworkTokenReferencePanel.code" :language="frameworkTokenReferencePanel.language" />
        </div>
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
  DocsDesignTokensSectionKey,
  DocsEditorialGridItem,
  DocsPageAction,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { designTokensCodeSnippets } from './design-tokens.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsDesignTokensSectionKey>>(
  'pages.designTokens.designTokens',
)
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])
const introSectionId = 'sass-to-css-variables'

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing design-tokens hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('back-to-theming-overview'),
    to: '/docs/theming/overview',
    outlined: true,
  },
  {
    label: getActionLabel('open-css-variables'),
    to: '/docs/theming/css-variables',
    variant: 'text',
    outlined: false,
  },
]))

const designTokensNextStepMeta = [
  '/docs/theming/css-variables',
  '/docs/theming/light-and-dark-themes',
  '/docs/theming/custom-themes',
  '/docs/theming/runtime-theme-api',
] as const

const overrideInVueAndNuxtSection = computed(() => {
  const section = content.value.sections['override-in-vue-and-nuxt']

  return {
    key: 'override-in-vue-and-nuxt',
    title: section.title,
    description: section.description,
    snippets: designTokensCodeSnippets['override-in-vue-and-nuxt'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
  }
})

const frameworkTokenReferenceSection = computed(() => {
  const section = content.value.sections['framework-token-reference']

  return {
    key: 'framework-token-reference',
    title: section.title,
    description: section.description,
    snippets: designTokensCodeSnippets['framework-token-reference'],
  }
})

const frameworkTokenReferencePanel = computed(() => ({
  language: 'scss' as const,
  code: frameworkTokenReferenceSection.value.snippets
    .map((snippet) => `// ${snippet.label}\n${snippet.code}`)
    .join('\n\n'),
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
      to: designTokensNextStepMeta[index]!,
    })),
  }
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
  ogTitle: computed(() => content.value.seo.title),
  ogDescription: computed(() => content.value.seo.description),
  twitterTitle: computed(() => content.value.seo.title),
  twitterDescription: computed(() => content.value.seo.description),
})
</script>

<style scoped>
.design-tokens-reference-panel {
  height: min(70vh, 60rem);
  overflow: auto;
}

.design-tokens-reference-panel :deep(.code-panel) {
  min-height: 100%;
}
</style>
