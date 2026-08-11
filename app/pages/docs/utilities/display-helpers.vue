<template>
  <article>
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="usageSection.key" :title="usageSection.title" :description="usageSection.description">
      <DocsUtilitiesDisplayHelpersUsagePlayground :labels="usageSection.labels" />
    </DocsSection>

    <DocsSection :id="classSyntaxSection.key" :title="classSyntaxSection.title"
      :description-html="classSyntaxSection.descriptionHtml">
      <ERow dense>
        <ECol v-for="item in classSyntaxItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title">
            <p v-if="item.descriptionHtml" class="type-body e-card__description"
              v-html="resolveDocsRichTextHtml(item.descriptionHtml, locale)" />
            <p v-else class="type-body e-card__description">
              {{ item.description }}
            </p>
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>
    <DocsSection :id="implementationExamplesSection.key" :title="implementationExamplesSection.title"
      :description-html="implementationExamplesSection.descriptionHtml">
      <ERow dense>
        <ECol v-for="example in implementationExamples" :key="example.title" cols="12">
          <ECard outlined class="full-height" :title="example.title" :description="example.description">
            <CodePanel :code="example.code" language="html" />
          </ECard>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="breakpointReferenceSection.key" :title="breakpointReferenceSection.title"
      :description="breakpointReferenceSection.description">
      <ECard outlined class="breakpoint-reference-table">
        <div class="breakpoint-reference-table__scroll">
          <table class="breakpoint-reference-table__table">
            <thead>
              <tr>
                <th>{{ breakpointReferenceLabels.tier }}</th>
                <th>{{ breakpointReferenceLabels.token }}</th>
                <th>{{ breakpointReferenceLabels.target }}</th>
                <th>{{ breakpointReferenceLabels.range }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in breakpointReferenceRows" :key="`${row.tier}-${row.token}`">
                <td>{{ row.tier }}</td>
                <td><code class="docs-inline-code">{{ row.token }}</code></td>
                <td>{{ row.target }}</td>
                <td>{{ row.range }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ECard>
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
  DocsDisplayHelpersSectionKey,
  DocsEditorialGridItem,
  DocsPageAction,
} from '~/types/docs'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'

type CodeExample = {
  title: string
  description: string
  code: string
}

type BreakpointReferenceRow = {
  tier: string
  token: string
  target: string
  range: string
}

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsDisplayHelpersSectionKey>>('pages.displayHelpers.displayHelpers')
const content = computed(() => editorialContent.value)
const { locale } = useI18n()

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing display helpers hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-flexbox'),
    to: '/docs/utilities/flexbox',
    outlined: true,
  },
  {
    label: getActionLabel('open-spacing-helpers'),
    to: '/docs/utilities/spacing-helpers',
    variant: 'text',
    outlined: false,
  },
]))

const usageSection = computed(() => content.value.sections.usage)
const classSyntaxSection = computed(() => content.value.sections['class-syntax'])
const responsiveSection = computed(() => content.value.sections['responsive-breakpoints'])
const breakpointReferenceSection = computed(() => content.value.sections['breakpoint-reference'])
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

const responsiveItems = computed(() => {
  return (responsiveSection.value.items as DocsEditorialGridItem[] | undefined) ?? []
})

const responsiveCodes = [
  `<div class="d-none d-md-block">
  Visible from md and up
</div>`,
  `<div class="d-block d-md-none">
  Visible only below md
</div>`,
  `<span class="d-inline d-xl-block">
  Inline by default, block on xl
</span>`,
]

const responsiveExamples = computed<CodeExample[]>(() => {
  return responsiveItems.value.map((item, index) => ({
    title: item.title,
    description: item.description,
    code: responsiveCodes[index] ?? '',
  }))
})

const breakpointReferenceLabels = computed(() => ({
  tier: breakpointReferenceSection.value.labels?.tier ?? 'Breakpoint tier',
  token: breakpointReferenceSection.value.labels?.token ?? 'Token',
  target: breakpointReferenceSection.value.labels?.target ?? 'Typical devices',
  range: breakpointReferenceSection.value.labels?.range ?? 'Range',
}))

const breakpointReferenceRows = computed<BreakpointReferenceRow[]>(() => {
  const entries = (breakpointReferenceSection.value.items as string[] | undefined) ?? []

  return entries
    .map((entry) => entry.split('|').map((part) => part.trim()))
    .filter((parts) => parts.length === 4)
    .map((parts) => ({
      tier: parts[0] ?? '',
      token: parts[1] ?? '',
      target: parts[2] ?? '',
      range: parts[3] ?? '',
    }))
})

const implementationItems = computed(() => {
  return (implementationExamplesSection.value.items as DocsEditorialGridItem[] | undefined) ?? []
})

const implementationCodes = [
  `<nav class="d-none d-md-block">\n  <a href="#">Docs</a>\n  <a href="#">API</a>\n</nav>`,
  `<button class="d-inline-flex d-md-none px-3 py-2 rounded">Open menu</button>`,
  `<span class="d-inline d-xl-block">Status: synced</span>`,
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
  ogTitle: computed(() => content.value.seo.title),
  ogDescription: computed(() => content.value.seo.description),
  twitterTitle: computed(() => content.value.seo.title),
  twitterDescription: computed(() => content.value.seo.description),
})
</script>

<style scoped>
.breakpoint-reference-table__scroll {
  overflow-x: auto;
}

.breakpoint-reference-table__table {
  width: 100%;
  border-collapse: collapse;
  min-width: 44rem;
}

.breakpoint-reference-table__table th,
.breakpoint-reference-table__table td {
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--e-color-border, rgba(128, 128, 128, 0.35));
}

.breakpoint-reference-table__table th {
  font-weight: 600;
  color: var(--e-color-on-surface-variant, currentColor);
}

.breakpoint-reference-table__table tbody tr:last-child td {
  border-bottom: none;
}

@media (max-width: 640px) {
  .breakpoint-reference-table__table {
    min-width: 38rem;
  }
}
</style>
