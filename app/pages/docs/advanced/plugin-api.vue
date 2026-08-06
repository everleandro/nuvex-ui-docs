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

    <DocsSection :id="configureLocalesAndDefaultLocaleSection.key"
      :title="configureLocalesAndDefaultLocaleSection.title"
      :description="configureLocalesAndDefaultLocaleSection.description">
      <ECard v-for="snippet in configureLocalesAndDefaultLocaleSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="overrideComponentsRegistrySection.key" :title="overrideComponentsRegistrySection.title"
      :description="overrideComponentsRegistrySection.description" :callout="overrideComponentsRegistrySection.callout">
      <ECard v-for="snippet in overrideComponentsRegistrySection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label">
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
import type { DocsEditorialGridItem, DocsPageAction, DocsPluginApiSectionKey, DocsWorkflowPageContent } from '~/types/docs'
import { pluginApiCodeSnippets } from './plugin-api.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsPluginApiSectionKey>>('pages.pluginApi.pluginApi')
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing plugin-api hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('back-to-installation'),
    to: '/docs/getting-started/installation',
    outlined: true,
  },
  {
    label: getActionLabel('open-nuxt-integration'),
    to: '/docs/getting-started/nuxt-integration',
    variant: 'text',
    outlined: false,
  },
]))

const pluginApiNextStepMeta = [
  {
    to: '/docs/design-system/icon-configuration',
  },
  {
    to: '/docs/advanced/composables',
  },
  {
    to: '/docs/theming/runtime-theme-api',
  },
  {
    to: '/docs/getting-started/nuxt-integration',
  },
] as const

const configureLocalesAndDefaultLocaleSection = computed(() => {
  const section = content.value.sections['configure-locales-and-default-locale']

  return {
    key: 'configure-locales-and-default-locale',
    title: section.title,
    description: section.description,
    snippets: pluginApiCodeSnippets['configure-locales-and-default-locale'],
  }
})

const overrideComponentsRegistrySection = computed(() => {
  const section = content.value.sections['override-components-registry']

  return {
    key: 'override-components-registry',
    title: section.title,
    description: section.description,
    snippets: pluginApiCodeSnippets['override-components-registry'],
    callout: {
      color: 'warning' as const,
      icon: 'alert',
      description: section.calloutDescription || '',
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
    items: items.map((item, index) => {
      const meta = pluginApiNextStepMeta[index]!

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
