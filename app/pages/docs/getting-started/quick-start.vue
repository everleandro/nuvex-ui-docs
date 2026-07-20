<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description"
      :description-html="content.hero.descriptionHtml" :actions="heroActions" />

    <DocsSection :title="content.hero.prerequisitesTitle">
      <ECard elevation="sm" color="primary" tonal>
        <ul class="pl-5">
          <li v-for="(item, index) in prerequisites" :key="item" :class="index === prerequisites.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="recommendedStructureSection.key" :title="recommendedStructureSection.title" :description="recommendedStructureSection.description">
      <ERow dense>
        <ECol v-for="item in recommendedStructureSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height quick-start__structure-card" :title="item.title"
            :description="item.description" :prepend-header-icon="$icon[item.icon]" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="createLayoutBaseSection.key" :title="createLayoutBaseSection.title"
      :description="createLayoutBaseSection.description">
      <ECard v-for="snippet in createLayoutBaseSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="addDrawerSection.key" :title="addDrawerSection.title" :description="addDrawerSection.description">
      <ECard v-for="snippet in addDrawerSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="connectDrawerStateSection.key" :title="connectDrawerStateSection.title"
      :description="connectDrawerStateSection.description">
      <ECard v-for="(snippet,index) in connectDrawerStateSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="addBarToggleSection.key" :title="addBarToggleSection.title"
      :description="addBarToggleSection.description">
      <ECard v-for="snippet in addBarToggleSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="assembleInitialStructureSection.key" :title="assembleInitialStructureSection.title"
      :description="assembleInitialStructureSection.description" :callout="assembleInitialStructureSection.callout">
      <ECard v-for="(snippet,index) in assembleInitialStructureSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="verifyStructureSection.key" :title="verifyStructureSection.title"
      :description="verifyStructureSection.description">
      <ECard elevation="sm" color="primary" tonal>
        <ol class="pl-5">
          <li v-for="(item, index) in verifyStructureSection.items" :key="index" class="mb-2">
            {{ item }}
          </li>
        </ol>
      </ECard>
    </DocsSection>

    <DocsSection :id="nextStepsSection.key" :title="nextStepsSection.title" :description="nextStepsSection.description">
      <ERow dense>
        <ECol v-for="item in nextStepsSection.items" :key="item.to" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="no-underline full-height d-block">
            <ECard v-ripple outlined :title="item.title" :description="item.description" class="full-height"/>
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDocsQuickStartI18nContent } from '~/composables/useDocsI18nContent'
import type { DocsGridItem, DocsPageAction } from '~/types/docs'
import { quickStartCodeSnippets } from './quick-start.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsQuickStartI18nContent('pages.quickStart.quickStart')
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites)

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: content.value.hero.actions.backToInstallation,
    to: '/docs/getting-started/installation',
    outlined: true,
  },
  {
    label: content.value.hero.actions.openAppShell,
    to: '/docs/component/layout/app-shell',
    variant: 'text',
    outlined: false,
  },
]))

const quickStartNextStepMeta = [
  {
    to: '/docs/component/layout/app-shell',
    icon: 'layout',
  },
  {
    to: '/docs/component/forms/button',
    icon: 'forms',
  },
  {
    to: '/docs/component/forms/text-field',
    icon: 'forms',
  },
  {
    to: '/docs/theming/overview',
    icon: 'theming',
  },
] as const

const recommendedStructureSection = computed(() => {
  const section = content.value.sections['recommended-structure']

  return {
    key: 'recommended-structure',
    title: section.title,
    description: section.description,
    items: (section.items as DocsGridItem[] | undefined) ?? [],
  }
})

const createLayoutBaseSection = computed(() => {
  const section = content.value.sections['create-layout-base']

  return {
    key: 'create-layout-base',
    title: section.title,
    description: section.description,
    snippets: quickStartCodeSnippets['create-layout-base'],
  }
})

const addDrawerSection = computed(() => {
  const section = content.value.sections['add-drawer']

  return {
    key: 'add-drawer',
    title: section.title,
    description: section.description,
    snippets: quickStartCodeSnippets['add-drawer'],
  }
})

const connectDrawerStateSection = computed(() => {
  const section = content.value.sections['connect-drawer-state']

  return {
    key: 'connect-drawer-state',
    title: section.title,
    description: section.description,
    snippets: quickStartCodeSnippets['connect-drawer-state'],
  }
})

const addBarToggleSection = computed(() => {
  const section = content.value.sections['add-bar-toggle']

  return {
    key: 'add-bar-toggle',
    title: section.title,
    description: section.description,
    snippets: quickStartCodeSnippets['add-bar-toggle'],
  }
})

const assembleInitialStructureSection = computed(() => {
  const section = content.value.sections['assemble-initial-structure']

  return {
    key: 'assemble-initial-structure',
    title: section.title,
    description: section.description,
    snippets: quickStartCodeSnippets['assemble-initial-structure'],
    callout: {
      color: 'info' as const,
      description: section.calloutDescription ?? '',
    },
  }
})

const verifyStructureSection = computed(() => {
  const section = content.value.sections['verify-structure']

  return {
    key: 'verify-structure',
    title: section.title,
    description: section.description,
    items: section.items ?? [],
  }
})

const nextStepsSection = computed(() => {
  const section = content.value.sections['next-steps']
  const items = (section.items as DocsGridItem[] | undefined) ?? []

  return {
    key: 'next-steps',
    title: section.title,
    description: section.description,
    items: items.map((item, index) => {
      const meta = quickStartNextStepMeta[index]!

      return {
        title: item.title,
        description: item.description,
        to: meta.to,
        icon: meta.icon,
      }
    }),
  }
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>

<style lang="scss">

.quick-start__structure-card .e-card__header > .e-card__prepend {
  align-self: baseline;
}
</style>
