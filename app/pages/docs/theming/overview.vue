<template>
  <article class="docs-page theming-overview-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="whatThemingCoversSection.key" :title="whatThemingCoversSection.title"
      :description="whatThemingCoversSection.description">
      <ERow dense>
        <ECol v-for="item in whatThemingCoversSection.items" :key="item.title" cols="12" md="6" lg="4">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="themeModelOverviewSection.key" :title="themeModelOverviewSection.title"
      :description="themeModelOverviewSection.description">
      <ERow dense>
        <ECol v-for="item in themeModelOverviewSection.items" :key="item.title" cols="12" md="6" lg="4">
          <ECard outlined tonal class="full-height theming-overview-page__model-card" :title="item.title"
            :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="defaultBehaviorSection.key" :title="defaultBehaviorSection.title"
      :description="defaultBehaviorSection.description">
      <ECard elevation="sm" color="info" tonal>
        <ul class="docs-page__list mb-0 pl-5">
          <li v-for="item in defaultBehaviorSection.items" :key="item" class="mb-2">
            <span v-if="defaultBehaviorSection.itemsHtml[item]"
              v-html="resolveDocsRichTextHtml(defaultBehaviorSection.itemsHtml[item], locale)" />
            <template v-else>{{ item }}</template>
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="chooseYourPathSection.key" :title="chooseYourPathSection.title"
      :description="chooseYourPathSection.description">
      <ERow dense>
        <ECol v-for="item in chooseYourPathSection.items" :key="item.to" cols="12" md="6" lg="4">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="docs-page__card-link">
            <ECard v-ripple outlined class="docs-page__card full-height" :title="item.title" :description="item.description" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="buildTimeVsRuntimeSection.key" :title="buildTimeVsRuntimeSection.title"
      :description="buildTimeVsRuntimeSection.description">
      <ERow dense>
        <ECol v-for="item in buildTimeVsRuntimeSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="commonMistakesSection.key" :title="commonMistakesSection.title"
      :description="commonMistakesSection.description">
      <ECard outlined>
        <ul class="docs-page__list mb-0 pl-5">
          <li v-for="item in commonMistakesSection.items" :key="item" class="mb-2">
            <span v-if="commonMistakesSection.itemsHtml[item]"
              v-html="resolveDocsRichTextHtml(commonMistakesSection.itemsHtml[item], locale)" />
            <template v-else>{{ item }}</template>
          </li>
        </ul>
      </ECard>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type {
  DocsConceptPageContent,
  DocsEditorialGridItem,
  DocsPageAction,
  DocsThemingOverviewSectionKey,
} from '~/types/docs'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsThemingOverviewSectionKey>>(
  'pages.themingOverview.overview',
)
const content = computed(() => editorialContent.value)

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing theming overview hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-light-and-dark-themes'),
    to: '/docs/theming/light-and-dark-themes',
    outlined: true,
  },
  {
    label: getActionLabel('open-runtime-theme-api'),
    to: '/docs/theming/runtime-theme-api',
    variant: 'text',
    outlined: false,
  },
]))

const themingPathMeta = [
  '/docs/theming/light-and-dark-themes',
  '/docs/theming/runtime-theme-api',
  '/docs/theming/design-tokens',
  '/docs/theming/css-variables',
  '/docs/theming/custom-themes',
] as const

const whatThemingCoversSection = computed(() => {
  const section = content.value.sections['what-theming-covers']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const themeModelOverviewSection = computed(() => {
  const section = content.value.sections['theme-model-overview']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const defaultBehaviorSection = computed(() => {
  const section = content.value.sections['default-behavior']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
    itemsHtml: section.itemsHtml ?? {},
  }
})

const chooseYourPathSection = computed(() => {
  const section = content.value.sections['choose-your-path']
  const items = (section.items as DocsEditorialGridItem[] | undefined) ?? []

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: items.map((item, index) => ({
      ...item,
      to: themingPathMeta[index]!,
    })),
  }
})

const buildTimeVsRuntimeSection = computed(() => {
  const section = content.value.sections['build-time-vs-runtime']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const commonMistakesSection = computed(() => {
  const section = content.value.sections['common-mistakes']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
    itemsHtml: section.itemsHtml ?? {},
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
  text-decoration: none;
  color: inherit;
}

.docs-page :deep(.docs-page__inline-link) {
  color: var(--e-color-primary);
  text-decoration: none;
}

.docs-page :deep(.docs-page__inline-link:hover),
.docs-page :deep(.docs-page__inline-link:focus-visible) {
  text-decoration: underline;
}

</style>
