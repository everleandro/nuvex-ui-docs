<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="exploreSection.key" :title="exploreSection.title" :description="exploreSection.description">
      <ERow dense>
        <ECol v-for="item in exploreSection.items" :key="item.title"cols="12" md="6" lg="4">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="docs-page__card-link">
            <ECard v-ripple class="docs-page__card" :title="item.title" :description="item.description"
              :prepend-header-icon="item.icon ? $icon[item.icon] : undefined" :prepend-icon-props="{ size: 'x-large' }" outlined />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="docsOrganizationSection.key" :title="docsOrganizationSection.title"
      :description="docsOrganizationSection.description"
      :description-html="resolveDocsRichTextHtml(docsOrganizationSection.descriptionHtml, locale)">
      <ERow dense>
        <ECol v-for="item in docsOrganizationSection.items" :key="item.title" cols="12" md="6" lg="3">
          <ECard class="docs-page__card" :title="item.title" :description="item.description" outlined />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="recommendedPathSection.key" :title="recommendedPathSection.title"
      :description="recommendedPathSection.description">
      <ol class="docs-page__steps">
        <li v-for="(item, index) in recommendedPathSection.items" :key="item">
          <span v-if="recommendedPathSection.itemsHtml[index]"
            v-html="resolveDocsRichTextHtml(recommendedPathSection.itemsHtml[index], locale)" />
          <template v-else>{{ item }}</template>
        </li>
      </ol>
    </DocsSection>

    <DocsSection :id="systemPrinciplesSection.key" :title="systemPrinciplesSection.title"
      :description="systemPrinciplesSection.description">
      <ul class="docs-page__list">
        <li v-for="(item, index) in systemPrinciplesSection.items" :key="item">
          <span v-if="systemPrinciplesSection.itemsHtml[index]"
            v-html="resolveDocsRichTextHtml(systemPrinciplesSection.itemsHtml[index], locale)" />
          <template v-else>{{ item }}</template>
        </li>
      </ul>
    </DocsSection>
  </article>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { DocsConceptPageContent, DocsEditorialGridItem, DocsIntroductionSectionKey, DocsPageAction } from '~/types/docs'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsIntroductionSectionKey>>('pages.introduction.introduction')
const content = computed(() => editorialContent.value)

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing introduction hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('start-with-installation'),
    to: '/docs/getting-started/installation',
    outlined: true,
  },
  {
    label: getActionLabel('open-quick-start'),
    to: '/docs/getting-started/quick-start',
    variant: 'text',
    outlined: false,
  },
]))

const introductionExploreMeta = [
  {
    to: '/docs/getting-started/installation',
    icon: 'gettingStarted',
  },
  {
    to: '/docs/design-system/colors',
    icon: 'designSystem',
  },
  {
    to: '/docs/theming/overview',
    icon: 'theming',
  },
  {
    to: '/docs/component/layout/app-shell',
    icon: 'layout',
  },
  {
    to: '/docs/component/forms/overview',
    icon: 'forms',
  },
  {
    to: '/docs/advanced/plugin-api',
    icon: 'advanced',
  },
] as const


const exploreSection = computed(() => {
  const section = content.value.sections['what-is-nuvex-ui']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[]).map((item, index) => {
      const meta = introductionExploreMeta[index]!

      return {
        title: item.title,
        description: item.description,
        to: meta.to,
        icon: meta.icon,
      }
    }),
  }
})

const docsOrganizationSection = computed(() => {
  const section = content.value.sections['docs-organization']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    descriptionHtml: section.descriptionHtml,
    items: (section.items as DocsEditorialGridItem[] ),
  }
})

const recommendedPathSection = computed(() => {
  const section = content.value.sections['recommended-path']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: section.items as string[],
    itemsHtml: section.itemsHtml ?? [],
  }
})

const systemPrinciplesSection = computed(() => {
  const section = content.value.sections['system-principles']

  return {
    key: section.key,
    title: section.title,
    description: section.description,
    items: section.items as string[],
    itemsHtml: section.itemsHtml ?? [],
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

.docs-page__card {
  height: 100%;
}

.docs-page__steps,
.docs-page__list {
  margin: 0;
  padding-left: 1.25rem;
}

.docs-page__steps li,
.docs-page__list li {
  margin-bottom: 0.5rem;
}
</style>
