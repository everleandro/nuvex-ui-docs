<template>
  <article class="design-system__typography-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="usageSection.key" :title="usageSection.title" :description="usageSection.description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard v-for="sample in usageSamples" :key="sample.className"
            class="design-system__typography-page__sample-card">
            <div class="d-flex">
              <span :class="sample.className">{{ sample.previewText }}</span>

              <ESpacer />
              <code class="docs-inline-code">.{{ sample.className }}</code>
            </div>
            <EDivider class="my-2" />
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="usageTemplateCode" language="html" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="hierarchySection.key" :title="hierarchySection.title"
      :description-html="hierarchySection.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard v-for="sample in hierarchySamples" :key="sample.className"
            class="design-system__typography-page__sample-card">
            <div class="d-flex">
              <span :class="sample.className">{{ sample.previewText }}</span>

              <ESpacer />
              <code class="docs-inline-code">.{{ sample.className }}</code>
            </div>
            <EDivider class="my-2" />
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="hierarchyTemplateCode" language="html" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="specializedRolesSection.key" :title="specializedRolesSection.title"
      :description-html="specializedRolesSection.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard v-for="sample in specializedSamples" :key="sample.className"
            class="design-system__typography-page__sample-card">
            <div class="d-flex">
              <span :class="sample.className">{{ sample.previewText }}</span>

              <ESpacer />
              <code class="docs-inline-code">.{{ sample.className }}</code>
            </div>
            <EDivider class="my-2" />
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="specializedTemplateCode" language="html" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import type { DocsConceptPageContent, DocsPageAction, DocsTypographySectionKey } from '~/types/docs'

type TypographySample = {
  label?: string
  className: string
  previewText: string
  tokens?: string[]
  tag?: 'p' | 'pre'
  supportingText?: string
  variant?: 'default' | 'dialog'
}

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsTypographySectionKey>>('pages.typography.typography')
const content = computed(() => editorialContent.value)
const { tabsDesignTemplate } = useDocsPlaygroundTabSets()

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing typography hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-colors'),
    to: '/docs/design-system/colors',
    outlined: true,
  },
  {
    label: getActionLabel('open-surfaces'),
    to: '/docs/design-system/surfaces',
    variant: 'text',
    outlined: false,
  },
]))

const usageSection = computed(() => content.value.sections.usage)
const hierarchySection = computed(() => content.value.sections.hierarchy)
const specializedRolesSection = computed(() => content.value.sections['specialized-roles'])

const usageSamples: TypographySample[] = [
  {
    className: 'type-lead',
    previewText: 'Lead ',
  },
  {
    className: 'type-heading',
    previewText: 'Heading',
  },
  {
    className: 'type-title',
    previewText: 'Title works well for cards, panels, and summary surfaces.',
  },
  {
    className: 'type-body',
    previewText: 'Type Body',
  },
  {
    className: 'type-subtitle',
    previewText: 'Subtitle stays compact and dense for metadata or secondary labels.',
  },
]

const hierarchySamples: TypographySample[] = [
  {
    previewText: 'Heading 1',
    className: 'type-h1',
  },
  {
    previewText: 'Heading 2',
    className: 'type-h2',
  },
  {
    previewText: 'Heading 3',
    className: 'type-h3',
  },
  {
    previewText: 'Heading 4',
    className: 'type-h4',
  },
  {
    previewText: 'Heading 5',
    className: 'type-h5',
  },
  {
    previewText: 'Heading 6',
    className: 'type-h6',
  },
]

const specializedSamples: TypographySample[] = [
  {
    previewText: 'Dialog title',
    className: 'type-dialog-title',
  },
  {
    previewText: 'Dialog lead',
    className: 'type-dialog-lead',
  },
]

const buildMarkupSnippet = (sample: TypographySample) => {
  return `<span class="${sample.className}">${sample.previewText}</span>`
}

const usageTemplateCode = usageSamples.map(buildMarkupSnippet).join('\n\n')
const hierarchyTemplateCode = hierarchySamples.map(buildMarkupSnippet).join('\n\n')
const specializedTemplateCode = specializedSamples.map(buildMarkupSnippet).join('\n\n')

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>

<style lang="scss">
.design-system__typography-page {
  &__sample-card {
    flex: 1 1 100%;
    --card-padding: 0;
  }
}
</style>
