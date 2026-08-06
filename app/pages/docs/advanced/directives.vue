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

    <DocsSection :id="rippleSection.key" :title="rippleSection.title" :description="rippleSection.description"
      :callout="rippleSection.callout">
      <ECard v-for="snippet in rippleSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="clickOutsideSection.key" :title="clickOutsideSection.title"
      :description="clickOutsideSection.description">
      <ECard v-for="snippet in clickOutsideSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" class="mb-4">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="focusOutsideSection.key" :title="focusOutsideSection.title"
      :description="focusOutsideSection.description">
      <ECard v-for="snippet in focusOutsideSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" class="mb-4">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="nextStepsSection.key" :title="nextStepsSection.title" :description="nextStepsSection.description">
      <ERow dense>
        <ECol v-for="item in nextStepsSection.items" :key="item.to" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="docs-page__card-link no-underline">
            <ECard v-ripple outlined :title="item.title" :description="item.description" class="full-height" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { DocsDirectivesSectionKey, DocsEditorialGridItem, DocsPageAction, DocsWorkflowPageContent } from '~/types/docs'
import { withLocalePrefix } from '~/utils/locale-path'
import { directivesCodeSnippets } from './directives.snippets'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsDirectivesSectionKey>>('pages.directives.directives')
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing directives hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-menu-docs'),
    to: '/docs/component/navigation/menu',
    outlined: true,
  },
  {
    label: getActionLabel('open-dialog-docs'),
    to: '/docs/component/feedback-overlays/dialog',
    variant: 'text',
    outlined: false,
  },
]))

const directivesNextStepsMeta = [
  { to: '/docs/advanced/composables' },
  { to: '/docs/component/navigation/menu' },
  { to: '/docs/component/feedback-overlays/dialog' },
  { to: '/docs/getting-started/nuxt-integration' },
] as const

const overviewSection = computed(() => {
  const section = content.value.sections.overview

  return {
    key: 'overview',
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const rippleSection = computed(() => {
  const section = content.value.sections.ripple

  return {
    key: 'ripple',
    title: section.title,
    description: section.description,
    snippets: directivesCodeSnippets.ripple,
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription || '',
    },
  }
})

const clickOutsideSection = computed(() => {
  const section = content.value.sections['click-outside']

  return {
    key: 'click-outside',
    title: section.title,
    description: section.description,
    snippets: [
      ...directivesCodeSnippets['click-outside-basic'],
      ...directivesCodeSnippets['click-outside-advanced'],
    ],
  }
})

const focusOutsideSection = computed(() => {
  const section = content.value.sections['focus-outside']

  return {
    key: 'focus-outside',
    title: section.title,
    description: section.description,
    snippets: [
      ...directivesCodeSnippets['focus-outside-basic'],
      ...directivesCodeSnippets['focus-outside-advanced'],
    ],
  }
})

const nextStepsSection = computed(() => {
  const section = content.value.sections['next-steps']
  const items = (section.items as DocsEditorialGridItem[] | undefined) ?? []

  return {
    key: 'next-steps',
    title: section.title,
    description: section.description,
    items: items.map((item, index) => {
      const meta = directivesNextStepsMeta[index]!

      return {
        title: item.title,
        description: item.description,
        to: meta.to,
      }
    }),
  }
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>

<style scoped>
.docs-page {
  display: grid;
  gap: 1.5rem;
}

.docs-page__card-link {
  display: block;
  height: 100%;
}
</style>
