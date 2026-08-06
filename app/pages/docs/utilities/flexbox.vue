<template>
  <article class="utilities__flexbox-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="usageSection.key" :title="usageSection.title" :description="usageSection.description">
      <DocsUtilitiesFlexboxUsagePlayground :labels="usageSection.labels" />
    </DocsSection>

    <DocsSection :id="classSyntaxSection.key" :title="classSyntaxSection.title"
      :description-html="classSyntaxSection.descriptionHtml">
      <ERow dense>
        <ECol v-for="item in classSyntaxItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title">
            <p class="type-body e-card__description" v-html="resolveDocsRichTextHtml(item.descriptionHtml, locale)" />
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="axisBehaviorSection.key" :title="axisBehaviorSection.title"
      :description="axisBehaviorSection.description">
      <ERow dense>
        <ECol v-for="item in axisBehaviorItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title">
            <p class="type-body e-card__description" v-html="resolveDocsRichTextHtml(item.descriptionHtml, locale)" />
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="directionWrappingSection.key" :title="directionWrappingSection.title"
      :description="directionWrappingSection.description">
      <ERow dense>
        <ECol v-for="item in directionWrappingItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title">
            <p class="type-body e-card__description" v-html="resolveDocsRichTextHtml(item.descriptionHtml, locale)" />
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="alignmentSection.key" :title="alignmentSection.title" :description="alignmentSection.description">
      <ERow dense>
        <ECol v-for="item in alignmentItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title">
            <p class="type-body e-card__description" v-html="resolveDocsRichTextHtml(item.descriptionHtml, locale)" />
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="itemSizingSection.key" :title="itemSizingSection.title"
      :description="itemSizingSection.description">
      <ERow dense>
        <ECol v-for="item in itemSizingItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title">
            <p class="type-body e-card__description" v-html="resolveDocsRichTextHtml(item.descriptionHtml, locale)" />
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
import type {
  DocsConceptPageContent,
  DocsEditorialGridItem,
  DocsFlexboxSectionKey,
  DocsPageAction,
} from '~/types/docs'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'

type CodeExample = {
  title: string
  description: string
  code: string
}

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsFlexboxSectionKey>>('pages.flexbox.flexbox')
const content = computed(() => editorialContent.value)
const { locale } = useI18n()

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing flexbox hero action: ${key}`)
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
    label: getActionLabel('open-display-helpers'),
    to: '/docs/utilities/display-helpers',
    variant: 'text',
    outlined: false,
  },
]))

const usageSection = computed(() => content.value.sections.usage)
const classSyntaxSection = computed(() => content.value.sections['class-syntax'])
const axisBehaviorSection = computed(() => content.value.sections['axis-behavior'])
const directionWrappingSection = computed(() => content.value.sections['direction-wrapping'])
const alignmentSection = computed(() => content.value.sections.alignment)
const itemSizingSection = computed(() => content.value.sections['item-sizing'])
const implementationExamplesSection = computed(() => content.value.sections['implementation-examples'])
const frameworkNotesSection = computed(() => content.value.sections['framework-notes'])

const toGridItems = (items: DocsEditorialGridItem[] | undefined, itemsHtml: Partial<Record<string, string>> = {}) => {
  if (typeof items === 'undefined') {
    return Object.entries(itemsHtml || {}).map(([title, descriptionHtml]) => ({
      title,
      descriptionHtml,
    }))
  }
  return (items ?? []).map((item) => ({
    ...item,
    descriptionHtml: itemsHtml[item.title],
  }))
}

const classSyntaxItems = computed(() => {
  return toGridItems(undefined, classSyntaxSection.value.itemsHtml)
})

const axisBehaviorItems = computed(() => {
  return toGridItems(undefined, axisBehaviorSection.value.itemsHtml)
})

const directionWrappingItems = computed(() => {
  return toGridItems(undefined, directionWrappingSection.value.itemsHtml)
})

const alignmentItems = computed(() => {
  return toGridItems(undefined, alignmentSection.value.itemsHtml)
})

const itemSizingItems = computed(() => {
  return toGridItems(itemSizingSection.value.items as DocsEditorialGridItem[] | undefined, itemSizingSection.value.itemsHtml)
})

const implementationItems = computed(() => {
  return (implementationExamplesSection.value.items as DocsEditorialGridItem[] | undefined) ?? []
})

const implementationCodes = [
  `<div class="d-flex items-center justify-between gap-3 p-3 outlined rounded">\n  <div class="d-flex gap-2 items-center">\n    <button class="px-3 py-2 rounded">Back</button>\n    <button class="px-3 py-2 rounded">Refresh</button>\n  </div>\n  <div class="d-flex gap-2 items-center">\n    <button class="px-3 py-2 rounded">Save</button>\n    <button class="px-3 py-2 rounded">Publish</button>\n  </div>\n</div>`,
  `<div class="d-flex flex-wrap gap-2">\n  <button class="px-3 py-2 rounded">Filter A</button>\n  <button class="px-3 py-2 rounded">Filter B</button>\n  <button class="px-3 py-2 rounded">Filter C</button>\n  <button class="px-3 py-2 rounded">Filter D</button>\n</div>`,
  `<section class="d-flex gap-4">\n  <aside class="flex-none px-3 py-2 outlined rounded">240px panel</aside>\n  <main class="flex-1 px-3 py-2 outlined rounded">Fluid workspace</main>\n</section>`,
]

const implementationExamples = computed<CodeExample[]>(() => {
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
})
</script>
