<template>
  <article class="utilities__elevation-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="usageSection.key" :title="usageSection.title" :description="usageSection.description">
      <DocsUtilitiesElevationUsagePlayground :labels="usageSection.labels" />
    </DocsSection>

    <DocsSection :id="classSyntaxSection.key" :title="classSyntaxSection.title"
      :description-html="classSyntaxSection.descriptionHtml">
      <ERow dense>
        <ECol v-for="item in classSyntaxItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title">
            <p v-if="item.descriptionHtml" class="type-body e-card__description"
              v-html="resolveDocsRichTextHtml(item.descriptionHtml, locale)" />
            <p v-else class="type-body e-card__description">{{ item.description }}</p>
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="scaleReferenceSection.key" :title="scaleReferenceSection.title"
      :description="scaleReferenceSection.description">
      <ERow dense>
        <ECol v-for="item in scaleReferenceItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title">
            <p v-if="item.descriptionHtml" class="type-body e-card__description"
              v-html="resolveDocsRichTextHtml(item.descriptionHtml, locale)" />
            <p v-else class="type-body e-card__description">{{ item.description }}</p>
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="implementationExamplesSection.key" :title="implementationExamplesSection.title"
      :description="implementationExamplesSection.description">
      <ERow dense>
        <ECol v-for="example in implementationExamples" :key="example.title" cols="12">
          <ECard outlined class="full-height" :title="example.title" :description="example.description">
            <CodePanel class="mt-4" :code="example.code" language="html" />
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="frameworkNotesSection.key" :title="frameworkNotesSection.title"
      :description="frameworkNotesSection.description">
      <ECard elevation="sm" color="info" tonal>
        <ul class="pl-5 mb-0">
          <li v-for="item in frameworkNotes" :key="item.text" class="mb-2">
            <span v-if="item.html" v-html="resolveDocsRichTextHtml(item.html, locale)" />
            <template v-else>{{ item.text }}</template>
          </li>
        </ul>
      </ECard>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { DocsConceptPageContent, DocsElevationSectionKey, DocsEditorialGridItem, DocsPageAction } from '~/types/docs'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'

type Example = {
  title: string
  description: string
  code: string
}

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsElevationSectionKey>>('pages.elevation.elevation')
const content = computed(() => editorialContent.value)
const { locale } = useI18n()

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing elevation hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-spacing-helpers'),
    to: '/docs/utilities/spacing-helpers',
    outlined: true,
  },
  {
    label: getActionLabel('open-flexbox'),
    to: '/docs/utilities/flexbox',
    variant: 'text',
    outlined: false,
  },
]))

const usageSection = computed(() => content.value.sections.usage)
const classSyntaxSection = computed(() => content.value.sections['class-syntax'])
const scaleReferenceSection = computed(() => content.value.sections['scale-reference'])
const implementationExamplesSection = computed(() => content.value.sections['implementation-examples'])
const frameworkNotesSection = computed(() => content.value.sections['framework-notes'])

const toGridItems = (items: DocsEditorialGridItem[] | undefined, itemsHtml: Partial<Record<string, string>> = {}) => {
  return (items ?? []).map((item) => ({
    ...item,
    descriptionHtml: itemsHtml[item.title],
  }))
}

const classSyntaxItems = computed(() => {
  return toGridItems(classSyntaxSection.value.items as DocsEditorialGridItem[] | undefined, classSyntaxSection.value.itemsHtml)
})

const scaleReferenceItems = computed(() => {
  return toGridItems(scaleReferenceSection.value.items as DocsEditorialGridItem[] | undefined, scaleReferenceSection.value.itemsHtml)
})

const implementationItems = computed(() => {
  return (implementationExamplesSection.value.items as DocsEditorialGridItem[] | undefined) ?? []
})

const implementationCodes = [
  `<div class="e-elevation--sm rounded-lg p-5">\n  <h3 class="mb-2">Compact panel</h3>\n  <p class="mb-0">Subtle separation for lightweight surfaces.</p>\n</div>`,
  `<div class="d-flex items-center justify-between px-6 py-4 e-elevation--md rounded-lg">\n  <span>Toolbar</span>\n  <div class="d-flex gap-2">\n    <button>Save</button>\n    <button>Publish</button>\n  </div>\n</div>`,
  `<aside class="e-elevation--lg rounded-xl p-6">\n  <h3 class="mb-2">Floating sheet</h3>\n  <p class="mb-0">Raised panel used for layered interactions.</p>\n</aside>`,
]

const implementationExamples = computed<Example[]>(() => {
  return implementationItems.value.map((item, index) => ({
    title: item.title,
    description: item.description,
    code: implementationCodes[index] ?? '',
  }))
})

const frameworkNotes = computed(() => {
  const items = (frameworkNotesSection.value.items as string[] | undefined) ?? []
  const itemsHtml = frameworkNotesSection.value.itemsHtml ?? {}

  return items.map((item) => ({
    text: item,
    html: itemsHtml[item],
  }))
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

<style lang="scss">
.utilities__elevation-page {
  /* Visual emphasis comes from the utility classes demonstrated on the page. */
}
</style>
