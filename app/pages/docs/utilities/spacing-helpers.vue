<template>
  <article class="design-system__spacing-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="usageSection.key" :title="usageSection.title" :description="usageSection.description">
      <DocsDesignSystemSpacingUsagePlayground :labels="usageSection.labels" />
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

    <DocsSection :id="directionModifiersSection.key" :title="directionModifiersSection.title"
      :description="directionModifiersSection.description">
      <ERow dense>
        <ECol v-for="item in directionModifierItems" :key="item.title" cols="12" md="6">
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
      :description="implementationExamplesSection.description">
      <ERow dense>
        <ECol v-for="example in implementationExamples" :key="example.title">
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
import type { DocsConceptPageContent, DocsEditorialGridItem, DocsPageAction, DocsSpacingSectionKey } from '~/types/docs'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'

type ImplementationExample = {
  title: string
  description: string
  code: string
}

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsSpacingSectionKey>>('pages.spacing.spacing')
const content = computed(() => editorialContent.value)
const { locale } = useI18n()

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing spacing hero action: ${key}`)
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
    label: getActionLabel('open-display-helpers'),
    to: '/docs/utilities/display-helpers',
    variant: 'text',
    outlined: false,
  },
]))

const usageSection = computed(() => content.value.sections.usage)
const classSyntaxSection = computed(() => content.value.sections['class-syntax'])
const directionModifiersSection = computed(() => content.value.sections['direction-modifiers'])
const implementationExamplesSection = computed(() => content.value.sections['implementation-examples'])
const frameworkNotesSection = computed(() => content.value.sections['framework-notes'])

const classSyntaxItems = computed(() => {
  const items = (classSyntaxSection.value.items as DocsEditorialGridItem[] | undefined) ?? []
  const itemsHtml = classSyntaxSection.value.itemsHtml ?? {}

  return items.map((item) => ({
    ...item,
    descriptionHtml: itemsHtml[item.title],
  }))
})

const directionModifierItems = computed(() => {
  const items = (directionModifiersSection.value.items as DocsEditorialGridItem[] | undefined) ?? []
  const itemsHtml = directionModifiersSection.value.itemsHtml ?? {}

  return items.map((item) => ({
    ...item,
    descriptionHtml: itemsHtml[item.title],
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

const implementationExampleItems = computed(() => {
  return (implementationExamplesSection.value.items as DocsEditorialGridItem[] | undefined) ?? []
})

const implementationExamples = computed<ImplementationExample[]>(() => {
  const [surfaceItem, sectionItem, gapItem] = implementationExampleItems.value

  return [
    {
      title: surfaceItem?.title ?? 'Surface padding',
      description: surfaceItem?.description ?? '',
      code: `<div class="surface-raised p-4">\n  <h3 class="mb-2">Summary</h3>\n  <p class="mb-0">Content wrapped with framework padding helpers.</p>\n</div>`,
    },
    {
      title: sectionItem?.title ?? 'Section spacing',
      description: sectionItem?.description ?? '',
      code: `<section class="mb-6">\n  <h2 class="mb-2">Orders</h2>\n  <p class="mb-0">Review current order state.</p>\n</section>`,
    },
    {
      title: gapItem?.title ?? 'Item gaps',
      description: gapItem?.description ?? '',
      code: `<div class="d-flex gap-3">\n  <EButton>Save</EButton>\n  <EButton outlined>Cancel</EButton>\n  <EButton text>Preview</EButton>\n</div>`,
    },
  ]
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>

<style lang="scss">
.design-system__spacing-page {
  &__scale-card {
    --card-padding: 1rem;
  }

  &__scale-bar-frame {
    height: 0.75rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--e-color-surface-subtle) 85%, transparent);
    overflow: hidden;
  }

  &__scale-bar {
    height: 100%;
    border-radius: inherit;
    background: var(--e-color-primary);
  }
}
</style>
