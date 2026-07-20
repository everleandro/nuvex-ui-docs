<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :title="content.hero.prerequisitesTitle">
      <ECard elevation="sm" color="primary" tonal>
        <ul class="pl-5">
          <li v-for="(item, index) in prerequisites" :key="item" :class="index === prerequisites.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="whatThisGuideAddsSection.key" :title="whatThisGuideAddsSection.title" :description="whatThisGuideAddsSection.description">
      <ERow dense>
        <ECol v-for="item in whatThisGuideAddsSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" :prepend-header-icon="$icon[item.icon]" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="registerNuxtPluginSection.key" :title="registerNuxtPluginSection.title" :description="registerNuxtPluginSection.description">
      <ECard v-for="snippet in registerNuxtPluginSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="loadStylesSection.key" :title="loadStylesSection.title" :description="loadStylesSection.description" :callout="loadStylesSection.callout">
      <ECard v-for="snippet in loadStylesSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="persistThemeSection.key" :title="persistThemeSection.title" :description="persistThemeSection.description" :callout="persistThemeSection.callout">
      <ECard v-for="(snippet, index) in persistThemeSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="assembleNuxtIntegrationSection.key" :title="assembleNuxtIntegrationSection.title" :description="assembleNuxtIntegrationSection.description" :callout="assembleNuxtIntegrationSection.callout">
      <ECard v-for="snippet in assembleNuxtIntegrationSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="verifyIntegrationSection.key" :title="verifyIntegrationSection.title" :description="verifyIntegrationSection.description">
      <ECard elevation="sm" color="primary" tonal>
        <ol class="pl-5">
          <li v-for="(item, index) in verifyIntegrationSection.items" :key="index" class="mb-2">
            {{ item }}
          </li>
        </ol>
      </ECard>
    </DocsSection>

    <DocsSection :id="commonPitfallsSection.key" :title="commonPitfallsSection.title" :description="commonPitfallsSection.description">
      <ERow dense>
        <ECol v-for="item in commonPitfallsSection.items" :key="item.title" cols="12" md="6">
          <ECard elevation="sm" class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
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
import { useDocsNuxtIntegrationI18nContent } from '~/composables/useDocsI18nContent'
import type { DocsGridItem, DocsPageAction } from '~/types/docs'
import { nuxtIntegrationCodeSnippets } from './nuxt-integration.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsNuxtIntegrationI18nContent('pages.nuxtIntegration.nuxtIntegration')
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites)

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: content.value.hero.actions.backToInstallation,
    to: '/docs/getting-started/installation',
    outlined: true,
  },
  {
    label: content.value.hero.actions.openThemingOverview,
    to: '/docs/theming/overview',
    variant: 'text',
    outlined: false,
  },
]))

const nuxtIntegrationNextStepMeta = [
  {
    to: '/docs/theming/overview',
    icon: 'theming',
  },
  {
    to: '/docs/theming/runtime-theme-api',
    icon: 'theming',
  },
  {
    to: '/docs/theming/light-and-dark-themes',
    icon: 'theming',
  },
  {
    to: '/docs/component/layout/app-shell',
    icon: 'layout',
  },
] as const

const whatThisGuideAddsSection = computed(() => {
  const section = content.value.sections['what-this-guide-adds']

  return {
    key: 'what-this-guide-adds',
    title: section.title,
    description: section.description,
    items: (section.items as DocsGridItem[] | undefined) ?? [],
  }
})

const registerNuxtPluginSection = computed(() => {
  const section = content.value.sections['register-nuxt-plugin']

  return {
    key: 'register-nuxt-plugin',
    title: section.title,
    description: section.description,
    snippets: nuxtIntegrationCodeSnippets['register-nuxt-plugin'],
  }
})

const loadStylesSection = computed(() => {
  const section = content.value.sections['load-styles']

  return {
    key: 'load-styles',
    title: section.title,
    description: section.description,
    snippets: nuxtIntegrationCodeSnippets['load-styles'],
    callout: {
      color: 'warning' as const,
      icon: 'alert',
      description: section.calloutDescription ?? '',
    },
  }
})

const persistThemeSection = computed(() => {
  const section = content.value.sections['persist-theme']

  return {
    key: 'persist-theme',
    title: section.title,
    description: section.description,
    snippets: nuxtIntegrationCodeSnippets['persist-theme'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
  }
})

const assembleNuxtIntegrationSection = computed(() => {
  const section = content.value.sections['assemble-nuxt-integration']

  return {
    key: 'assemble-nuxt-integration',
    title: section.title,
    description: section.description,
    snippets: nuxtIntegrationCodeSnippets['assemble-nuxt-integration'],
    callout: {
      color: 'success' as const,
      description: section.calloutDescription ?? '',
    },
  }
})

const verifyIntegrationSection = computed(() => {
  const section = content.value.sections['verify-integration']

  return {
    key: 'verify-integration',
    title: section.title,
    description: section.description,
    items: section.items ?? [],
  }
})

const commonPitfallsSection = computed(() => {
  const section = content.value.sections['common-pitfalls']

  return {
    key: 'common-pitfalls',
    title: section.title,
    description: section.description,
    items: (section.items as DocsGridItem[] | undefined) ?? [],
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
      const meta = nuxtIntegrationNextStepMeta[index]!

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
