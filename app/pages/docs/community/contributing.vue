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

    <DocsSection :id="contributionPathsSection.key" :title="contributionPathsSection.title"
      :description="contributionPathsSection.description">
      <ERow dense>
        <ECol v-for="item in contributionPathsSection.items" :key="item.title" cols="12" md="6" lg="4">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="localSetupSection.key" :title="localSetupSection.title" :description="localSetupSection.description">
      <ECard outlined>
        <ol class="pl-5 mb-0">
          <li v-for="(item, index) in localSetupSection.items" :key="item"
            :class="index === localSetupSection.items.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ol>
      </ECard>

      <ECard v-for="snippet in localSetupSection.snippets" :key="snippet.label" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="pullRequestFlowSection.key" :title="pullRequestFlowSection.title"
      :description="pullRequestFlowSection.description">
      <ECard elevation="sm">
        <ul class="pl-5 mb-0">
          <li v-for="(item, index) in pullRequestFlowSection.items" :key="item"
            :class="index === pullRequestFlowSection.items.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>

      <ECard v-for="snippet in pullRequestFlowSection.snippets" :key="snippet.label" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="reviewChecklistSection.key" :title="reviewChecklistSection.title"
      :description="reviewChecklistSection.description">
      <ECard outlined>
        <ul class="pl-5 mb-0">
          <li v-for="(item, index) in reviewChecklistSection.items" :key="item"
            :class="index === reviewChecklistSection.items.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="changelogPolicySection.key" :title="changelogPolicySection.title"
      :description="changelogPolicySection.description">
      <ECard outlined>
        <ul class="pl-5 mb-0">
          <li v-for="(item, index) in changelogPolicySection.items" :key="item"
            :class="index === changelogPolicySection.items.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>

      <ECard v-for="snippet in changelogPolicySection.snippets" :key="snippet.label" :subtitle="snippet.label">
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
import type {
  DocsEditorialGridItem,
  DocsPageAction,
  DocsContributingSectionKey,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { contributingCodeSnippets } from './contributing.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsContributingSectionKey>>('pages.contributing.contributing')
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing contributing hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-roadmap'),
    to: '/docs/community/roadmap',
    outlined: true,
  },
  {
    label: getActionLabel('open-changelog'),
    to: '/docs/community/changelog',
    variant: 'text',
    outlined: false,
  },
]))

const nextStepsMeta = [
  { to: '/docs/community/roadmap' },
  { to: '/docs/community/changelog' },
  { to: '/docs/advanced/plugin-api' },
] as const

const contributionPathsSection = computed(() => {
  const section = content.value.sections['contribution-paths']

  return {
    key: 'contribution-paths',
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const localSetupSection = computed(() => {
  const section = content.value.sections['local-setup']

  return {
    key: 'local-setup',
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
    snippets: contributingCodeSnippets['local-setup'],
  }
})

const pullRequestFlowSection = computed(() => {
  const section = content.value.sections['pull-request-flow']

  return {
    key: 'pull-request-flow',
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
    snippets: contributingCodeSnippets['pull-request-flow'],
  }
})

const reviewChecklistSection = computed(() => {
  const section = content.value.sections['review-checklist']

  return {
    key: 'review-checklist',
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
  }
})

const changelogPolicySection = computed(() => {
  const section = content.value.sections['changelog-policy']

  return {
    key: 'changelog-policy',
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
    snippets: contributingCodeSnippets['changelog-policy'],
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
      const meta = nextStepsMeta[index]!

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
