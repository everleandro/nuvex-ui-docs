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

    <DocsSection :id="resolveInitialThemeSection.key" :title="resolveInitialThemeSection.title" :description="resolveInitialThemeSection.description" :callout="resolveInitialThemeSection.callout">
      <ECard v-for="snippet in resolveInitialThemeSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="inspectThemeStateSection.key" :title="inspectThemeStateSection.title" :description="inspectThemeStateSection.description">
      <ECard v-for="(snippet, index) in inspectThemeStateSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="changeActiveThemeSection.key" :title="changeActiveThemeSection.title" :description="changeActiveThemeSection.description" :callout="changeActiveThemeSection.callout">
      <ECard v-for="(snippet, index) in changeActiveThemeSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="persistThemeChoiceSection.key" :title="persistThemeChoiceSection.title" :description="persistThemeChoiceSection.description" :callout="persistThemeChoiceSection.callout">
      <ECard v-for="(snippet, index) in persistThemeChoiceSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="controlDomOutputSection.key" :title="controlDomOutputSection.title" :description="controlDomOutputSection.description">
      <ECard v-for="snippet in controlDomOutputSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="emitCssVariablesSection.key" :title="emitCssVariablesSection.title" :description="emitCssVariablesSection.description" :callout="emitCssVariablesSection.callout">
      <ECard v-for="(snippet, index) in emitCssVariablesSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="registerRuntimeThemesSection.key" :title="registerRuntimeThemesSection.title" :description="registerRuntimeThemesSection.description" :callout="registerRuntimeThemesSection.callout">
      <ECard v-for="snippet in registerRuntimeThemesSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="appIntegrationPatternsSection.key" :title="appIntegrationPatternsSection.title" :description="appIntegrationPatternsSection.description">
      <ECard v-for="(snippet, index) in appIntegrationPatternsSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label" :class="index > 0 ? 'mt-4' : undefined">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="runtimeMistakesSection.key" :title="runtimeMistakesSection.title" :description="runtimeMistakesSection.description">
      <ERow dense>
        <ECol v-for="item in runtimeMistakesSection.items" :key="item.title" cols="12" md="6">
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
import type {
  DocsEditorialGridItem,
  DocsPageAction,
  DocsRuntimeThemeApiSectionKey,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { runtimeThemeApiCodeSnippets } from './runtime-theme-api.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsRuntimeThemeApiSectionKey>>(
  'pages.runtimeThemeApi.runtimeThemeApi',
)
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing runtime-theme-api hero action: ${key}`)
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
    label: getActionLabel('open-custom-themes'),
    to: '/docs/theming/custom-themes',
    variant: 'text',
    outlined: false,
  },
]))

const runtimeThemeApiNextStepMeta = [
  '/docs/theming/overview',
  '/docs/theming/light-and-dark-themes',
  '/docs/theming/custom-themes',
  '/docs/theming/design-tokens',
] as const

const resolveInitialThemeSection = computed(() => {
  const section = content.value.sections['resolve-initial-theme']

  return {
    key: 'resolve-initial-theme',
    title: section.title,
    description: section.description,
    snippets: runtimeThemeApiCodeSnippets['resolve-initial-theme'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
  }
})

const inspectThemeStateSection = computed(() => {
  const section = content.value.sections['inspect-theme-state']

  return {
    key: 'inspect-theme-state',
    title: section.title,
    description: section.description,
    snippets: runtimeThemeApiCodeSnippets['inspect-theme-state'],
  }
})

const changeActiveThemeSection = computed(() => {
  const section = content.value.sections['change-active-theme']

  return {
    key: 'change-active-theme',
    title: section.title,
    description: section.description,
    snippets: runtimeThemeApiCodeSnippets['change-active-theme'],
    callout: {
      color: 'warning' as const,
      icon: 'alert',
      description: section.calloutDescription ?? '',
    },
  }
})

const persistThemeChoiceSection = computed(() => {
  const section = content.value.sections['persist-theme-choice']

  return {
    key: 'persist-theme-choice',
    title: section.title,
    description: section.description,
    snippets: runtimeThemeApiCodeSnippets['persist-theme-choice'],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription ?? '',
    },
  }
})

const controlDomOutputSection = computed(() => {
  const section = content.value.sections['control-dom-output']

  return {
    key: 'control-dom-output',
    title: section.title,
    description: section.description,
    snippets: runtimeThemeApiCodeSnippets['control-dom-output'],
  }
})

const emitCssVariablesSection = computed(() => {
  const section = content.value.sections['emit-css-variables']

  return {
    key: 'emit-css-variables',
    title: section.title,
    description: section.description,
    snippets: runtimeThemeApiCodeSnippets['emit-css-variables'],
    callout: {
      color: 'success' as const,
      description: section.calloutDescription ?? '',
    },
  }
})

const registerRuntimeThemesSection = computed(() => {
  const section = content.value.sections['register-runtime-themes']

  return {
    key: 'register-runtime-themes',
    title: section.title,
    description: section.description,
    snippets: runtimeThemeApiCodeSnippets['register-runtime-themes'],
    callout: {
      color: 'warning' as const,
      icon: 'alert',
      description: section.calloutDescription ?? '',
    },
  }
})

const appIntegrationPatternsSection = computed(() => {
  const section = content.value.sections['app-integration-patterns']

  return {
    key: 'app-integration-patterns',
    title: section.title,
    description: section.description,
    snippets: runtimeThemeApiCodeSnippets['app-integration-patterns'],
  }
})

const runtimeMistakesSection = computed(() => {
  const section = content.value.sections['runtime-mistakes']

  return {
    key: 'runtime-mistakes',
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
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
      to: runtimeThemeApiNextStepMeta[index]!,
    })),
  }
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>
