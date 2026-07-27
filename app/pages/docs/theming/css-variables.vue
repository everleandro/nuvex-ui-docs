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

    <DocsSection :id="useInVueAndNuxtSection.key" :title="useInVueAndNuxtSection.title"
      :description="useInVueAndNuxtSection.description" :callout="useInVueAndNuxtSection.callout">
      <ECard v-for="(snippet, index) in useInVueAndNuxtSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
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
  DocsCssVariablesSectionKey,
  DocsEditorialGridItem,
  DocsPageAction,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { cssVariablesCodeSnippets } from './css-variables.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsCssVariablesSectionKey>>(
  'pages.cssVariables.cssVariables',
)
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])
const introSectionId = 'generated-css-variables'

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing css-variables hero action: ${key}`)
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
    label: getActionLabel('open-design-tokens'),
    to: '/docs/theming/design-tokens',
    variant: 'text',
    outlined: false,
  },
]))

const cssVariablesNextStepMeta = [
  '/docs/theming/design-tokens',
  '/docs/theming/light-and-dark-themes',
  '/docs/theming/runtime-theme-api',
] as const

const useInVueAndNuxtSection = computed(() => {
  const section = content.value.sections['use-in-vue-and-nuxt']

  return {
    key: 'use-in-vue-and-nuxt',
    title: section.title,
    description: section.description,
    snippets: cssVariablesCodeSnippets['use-in-vue-and-nuxt'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
  }
})

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
      to: cssVariablesNextStepMeta[index]!,
    })),
  }
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>
