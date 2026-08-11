<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :title="content.hero.prerequisitesTitle">
      <ECard elevation="sm" color="primary" tonal>
        <ul class="pl-5">
          <li v-for="(item, index) in prerequisites" :key="item"
            :class="index === prerequisites.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="overviewSection.key" :title="overviewSection.title" :description="overviewSection.description">
      <ERow dense>
        <ECol v-for="item in overviewSection.items" :key="item.title" cols="12" md="6" lg="4">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="useThemeSection.key" :title="useThemeSection.title" :description="useThemeSection.description"
      :callout="useThemeSection.callout">
      <ECard v-for="snippet in useThemeSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="useOverlayServiceSection.key" :title="useOverlayServiceSection.title"
      :description="useOverlayServiceSection.description">
      <ECard v-for="snippet in useOverlayServiceSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="useBreakpointSection.key" :title="useBreakpointSection.title"
      :description="useBreakpointSection.description">
      <ECard v-for="snippet in useBreakpointSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="composePatternsSection.key" :title="composePatternsSection.title"
      :description="composePatternsSection.description">
      <ECard v-for="snippet in composePatternsSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" class="mb-4">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type {
  DocsComposablesSectionKey,
  DocsEditorialGridItem,
  DocsPageAction,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { composablesCodeSnippets } from './composables.snippets'

useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsComposablesSectionKey>>('pages.composables.composables')
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing composables hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-plugin-api'),
    to: '/docs/advanced/plugin-api',
    outlined: true,
  },
  {
    label: getActionLabel('open-runtime-theme-api'),
    to: '/docs/theming/runtime-theme-api',
    variant: 'text',
    outlined: false,
  },
]))

const overviewSection = computed(() => {
  const section = content.value.sections.overview

  return {
    key: 'overview',
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const useThemeSection = computed(() => {
  const section = content.value.sections['use-theme']

  return {
    key: 'use-theme',
    title: section.title,
    description: section.description,
    snippets: composablesCodeSnippets['use-theme'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription || '',
    },
  }
})

const useOverlayServiceSection = computed(() => {
  const section = content.value.sections['use-overlay-service']

  return {
    key: 'use-overlay-service',
    title: section.title,
    description: section.description,
    snippets: composablesCodeSnippets['use-overlay-service'],
  }
})

const useBreakpointSection = computed(() => {
  const section = content.value.sections['use-breakpoint']

  return {
    key: 'use-breakpoint',
    title: section.title,
    description: section.description,
    snippets: composablesCodeSnippets['use-breakpoint'],
  }
})

const composePatternsSection = computed(() => {
  const section = content.value.sections['compose-patterns']

  return {
    key: 'compose-patterns',
    title: section.title,
    description: section.description,
    snippets: composablesCodeSnippets['compose-patterns'],
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
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
.docs-page {
  display: grid;
  gap: 1.5rem;
}

.docs-page__card-link {
  display: block;
}
</style>
