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

    <DocsSection :id="planningPrinciplesSection.key" :title="planningPrinciplesSection.title"
      :description="planningPrinciplesSection.description">
      <ECard outlined>
        <ol class="pl-5 mb-0">
          <li v-for="(item, index) in planningPrinciplesSection.items" :key="item"
            :class="index === planningPrinciplesSection.items.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ol>
      </ECard>
    </DocsSection>

    <DocsSection :id="nearTermSection.key" :title="nearTermSection.title" :description="nearTermSection.description">
      <ERow dense>
        <ECol v-for="item in nearTermSection.items" :key="item.title" cols="12" md="6" lg="4">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="nextUpSection.key" :title="nextUpSection.title" :description="nextUpSection.description">
      <ERow dense>
        <ECol v-for="item in nextUpSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="laterSection.key" :title="laterSection.title" :description="laterSection.description">
      <ERow dense>
        <ECol v-for="item in laterSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="feedbackLoopSection.key" :title="feedbackLoopSection.title"
      :description="feedbackLoopSection.description">
      <ECard elevation="sm">
        <ul class="pl-5 mb-0">
          <li v-for="(item, index) in feedbackLoopSection.items" :key="item"
            :class="index === feedbackLoopSection.items.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
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
  DocsRoadmapSectionKey,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsRoadmapSectionKey>>('pages.roadmap.roadmap')
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing roadmap hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-changelog'),
    to: '/docs/community/changelog',
    outlined: true,
  },
  {
    label: getActionLabel('open-contributing'),
    to: '/docs/community/contributing',
    variant: 'text',
    outlined: false,
  },
]))

const nextStepsMeta = [
  { to: '/docs/community/changelog' },
  { to: '/docs/community/contributing' },
  { to: '/docs/advanced/plugin-api' },
] as const

const planningPrinciplesSection = computed(() => {
  const section = content.value.sections['planning-principles']

  return {
    key: 'planning-principles',
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
  }
})

const nearTermSection = computed(() => {
  const section = content.value.sections['near-term']

  return {
    key: 'near-term',
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const nextUpSection = computed(() => {
  const section = content.value.sections['next-up']

  return {
    key: 'next-up',
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const laterSection = computed(() => {
  const section = content.value.sections.later

  return {
    key: 'later',
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const feedbackLoopSection = computed(() => {
  const section = content.value.sections['feedback-loop']

  return {
    key: 'feedback-loop',
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
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
  height: 100%;
}
</style>
