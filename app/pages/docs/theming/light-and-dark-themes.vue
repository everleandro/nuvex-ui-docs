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

    <DocsSection :id="builtInThemeBaselineSection.key" :title="builtInThemeBaselineSection.title"
      :description="builtInThemeBaselineSection.description">
      <ECard elevation="sm" color="info" tonal>
        <ul class="pl-5 mb-0">
          <li v-for="item in builtInThemeBaselineSection.items" :key="item" class="mb-2">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="initialThemeResolutionSection.key" :title="initialThemeResolutionSection.title"
      :description="initialThemeResolutionSection.description" :callout="initialThemeResolutionSection.callout">
      <ERow dense>
        <ECol v-for="item in initialThemeResolutionSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="domThemeContractSection.key" :title="domThemeContractSection.title"
      :description="domThemeContractSection.description">
      <ECard v-for="(snippet, index) in domThemeContractSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="adoptInVueAndNuxtSection.key" :title="adoptInVueAndNuxtSection.title"
      :description="adoptInVueAndNuxtSection.description" :callout="adoptInVueAndNuxtSection.callout">
      <ECard v-for="(snippet, index) in adoptInVueAndNuxtSection.snippets" :key="snippet.label || snippet.code"
        :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="customizeLightAndDarkSection.key" :title="customizeLightAndDarkSection.title"
      :description="customizeLightAndDarkSection.description" :callout="customizeLightAndDarkSection.callout">
      <ERow dense>
        <ECol v-for="item in customizeLightAndDarkSection.items" :key="item.title" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="no-underline full-height d-block">
            <ECard v-ripple outlined :title="item.title" :description="item.description" class="full-height" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="stayOnBaseThemesSection.key" :title="stayOnBaseThemesSection.title"
      :description="stayOnBaseThemesSection.description">
      <ECard elevation="sm" color="success" tonal>
        <p class="mb-0">
          {{ stayOnBaseThemesSection.note }}
        </p>
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
  DocsEditorialGridItem,
  DocsLightAndDarkThemesSectionKey,
  DocsPageAction,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { lightAndDarkThemesCodeSnippets } from './light-and-dark-themes.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsLightAndDarkThemesSectionKey>>(
  'pages.lightAndDarkThemes.lightAndDarkThemes',
)
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])
const introSectionId = 'framework-theme-baseline'

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing light-and-dark-themes hero action: ${key}`)
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
    label: getActionLabel('open-runtime-theme-api'),
    to: '/docs/theming/runtime-theme-api',
    variant: 'text',
    outlined: false,
  },
]))

const customizationPathMeta = [
  '/docs/theming/design-tokens',
  '/docs/theming/css-variables',
] as const

const nextStepsMeta = [
  '/docs/theming/runtime-theme-api',
  '/docs/theming/design-tokens',
  '/docs/theming/css-variables',
  '/docs/theming/custom-themes',
] as const

const builtInThemeBaselineSection = computed(() => ({
  key: 'built-in-theme-baseline',
  title: content.value.sections['built-in-theme-baseline'].title,
  description: content.value.sections['built-in-theme-baseline'].description,
  items: (content.value.sections['built-in-theme-baseline'].items as string[] | undefined) ?? [],
}))

const initialThemeResolutionSection = computed(() => {
  const section = content.value.sections['initial-theme-resolution']

  return {
    key: 'initial-theme-resolution',
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
    callout: {
      color: 'warning' as const,
      icon: 'alert',
      description: section.calloutDescription ?? '',
    },
  }
})

const domThemeContractSection = computed(() => {
  const section = content.value.sections['dom-theme-contract']

  return {
    key: 'dom-theme-contract',
    title: section.title,
    description: section.description,
    snippets: lightAndDarkThemesCodeSnippets['dom-theme-contract'],
  }
})

const adoptInVueAndNuxtSection = computed(() => {
  const section = content.value.sections['adopt-in-vue-and-nuxt']

  return {
    key: 'adopt-in-vue-and-nuxt',
    title: section.title,
    description: section.description,
    snippets: lightAndDarkThemesCodeSnippets['adopt-in-vue-and-nuxt'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
  }
})

const customizeLightAndDarkSection = computed(() => {
  const section = content.value.sections['customize-light-and-dark']

  return {
    key: 'customize-light-and-dark',
    title: section.title,
    description: section.description,
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
    items: (((section.items as DocsEditorialGridItem[] | undefined) ?? []).map((item, index) => ({
      ...item,
      to: customizationPathMeta[index]!,
    }))),
  }
})

const stayOnBaseThemesSection = computed(() => ({
  key: 'stay-on-base-themes',
  title: content.value.sections['stay-on-base-themes'].title,
  description: content.value.sections['stay-on-base-themes'].description,
  note: content.value.sections['stay-on-base-themes'].note ?? '',
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
  ogTitle: computed(() => content.value.seo.title),
  ogDescription: computed(() => content.value.seo.description),
  twitterTitle: computed(() => content.value.seo.title),
  twitterDescription: computed(() => content.value.seo.description),
})
</script>
