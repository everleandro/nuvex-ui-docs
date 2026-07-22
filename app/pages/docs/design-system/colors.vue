<template>
  <article class="design-system__colors-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :id="backgroundHelpersSection.key" :title="backgroundHelpersSection.title"
      :description="backgroundHelpersSection.description" :description-html="backgroundHelpersSection.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow dense class="flex-1">
            <ECol v-for="helper in semanticHelpersPreview" :key="helper.color" cols="6"
              :class="['e-elevation--sm p-4', helper.color]">
              <span class="type-subtitle">.{{ helper.color }}</span>
            </ECol>
          </ERow>
        </template>

        <template #panel-template>
          <CodePanel :code="backgroundHelpersCode" language="html" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="textHelpersSection.key" :title="textHelpersSection.title"
      :description="textHelpersSection.description" :description-html="textHelpersSection.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard>
            <div v-html="textHelperPreviewHtml" />
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="textHelpersCode" language="html" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="semanticPaletteSection.id" :title="semanticPaletteSection.title"
      :description="semanticPaletteSection.description">

      <ERow>
        <ECol v-for="color in semanticColorNames" :key="color" cols="12" md="6" lg="4">
          <ECard :color="color" :title="color" :subtitle="`var(--e-color-${color})`" class="full-height" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="surfacePaletteSection.id" :title="surfacePaletteSection.title"
      :description="surfacePaletteSection.description">
      <ERow dense>
        <ECol v-for="surface in surfaceColorNames" :key="surface" cols="12" md="6" lg="4">
          <ECard :color="surface" :title="surface" :subtitle="`var(--e-color-${surface})`" outlined
            class="full-height" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="primitivePaletteSection.id" :title="primitivePaletteSection.title"
      :description="primitivePaletteSection.description">
      <ERow dense>
        <ECol v-for="color in primitiveFamilies" :key="color" cols="6" lg="4">
          <DocsDesignSystemColorPalette :color="color" :primitive-tones="primitiveTones" />
        </ECol>
      </ERow>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import type { DocsColorsSectionKey, DocsConceptPageContent, DocsPageAction } from '~/types/docs'

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsColorsSectionKey>>('pages.colors.colors')
const content = computed(() => editorialContent.value)

const { tabsDesignTemplate } = useDocsPlaygroundTabSets()

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing colors hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-theming-overview'),
    to: '/docs/theming/overview',
    outlined: true,
  },
  {
    label: getActionLabel('open-surfaces'),
    to: '/docs/design-system/surfaces',
    variant: 'text',
    outlined: false,
  },
]))

const backgroundHelpersSection = computed(() => content.value.sections['background-helpers'])
const textHelpersSection = computed(() => content.value.sections['text-helpers'])
const paletteReferenceSection = computed(() => content.value.sections['palette-reference'])

const textHelperPreviewHtml = computed(() => {
  return textHelpersSection.value.labels?.previewHtml
    ?? 'Build expressive interfaces with text color helpers. Highlight primary actions with <span class="primary--text">.primary--text</span>, display additional information using <span class="secondary--text">.secondary--text</span>, indicate success with <span class="success--text">.success--text</span>, warn users through <span class="warning--text">.warning--text</span>, show errors using <span class="error--text">.error--text</span>, and present helpful information with <span class="info--text">.info--text</span>. For custom designs, choose from the primitive palette, including <span class="blue-500--text">.blue-500--text</span>, <span class="teal-600--text">.teal-600--text</span>, <span class="purple-400--text">.purple-400--text</span>, and <span class="neutral-700--text">.neutral-700--text</span>.'
})

const semanticHelpersPreview: { color: string }[] = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'success' },
  { color: 'warning' },
  { color: 'error' },
  { color: 'info' },
]


const semanticColorNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'info'] as const
const surfaceColorNames = ['surface-canvas', 'surface-base', 'surface-raised', 'surface-subtle', 'input', 'label', 'disabled', 'border'] as const
const primitiveFamilies = ['red', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'brown', 'neutral'] as const
const primitiveTones = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const

const paletteGroupLabels = computed(() => {
  return paletteReferenceSection.value.labels ?? {
    semantic: '',
    semanticDescription: '',
    surfaces: '',
    surfacesDescription: '',
    primitive: '',
    primitiveDescription: '',
  }
})

const semanticPaletteSection = computed(() => ({
  id: `${paletteReferenceSection.value.key}-semantic`,
  title: paletteGroupLabels.value.semantic,
  description: paletteGroupLabels.value.semanticDescription,
}))

const surfacePaletteSection = computed(() => ({
  id: `${paletteReferenceSection.value.key}-surfaces`,
  title: paletteGroupLabels.value.surfaces,
  description: paletteGroupLabels.value.surfacesDescription,
}))

const primitivePaletteSection = computed(() => ({
  id: `${paletteReferenceSection.value.key}-primitive`,
  title: paletteGroupLabels.value.primitive,
  description: paletteGroupLabels.value.primitiveDescription,
}))

const backgroundHelpersCode = `<div class="primary pa-4">Primary</div>
<div class="secondary pa-4">Secondary</div>
<div class="success pa-4">Success</div>
<div class="warning pa-4">Warning</div>
<div class="error pa-4">Error</div>
<div class="info pa-4">Info</div>`

const textHelpersCode = `<section class="surface-base pa-4">
  <p class="primary--text">.primary--text</p>
  <p class="secondary--text">.secondary--text</p>
  <p class="success--text">.success--text</p>
  <p class="warning--text">.warning--text</p>
  <p class="error--text">.error--text</p>
  <p class="info--text">.info--text</p>

  <p class="blue-500--text">.blue-500--text</p>
  <p class="teal-600--text">.teal-600--text</p>
  <p class="purple-400--text">.purple-400--text</p>
  <p class="neutral-700--text">.neutral-700--text</p>
</section>`

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>

<style>
[data-theme=dark],
html.dark,
:root.dark {
  .design-system__colors-page {
    --e-contrast-input: black;
    --e-contrast-label: black;
    --e-contrast-border: white;
  }
}

:root,
[data-theme="light"],
html.light {
  .design-system__colors-page {
    --e-contrast-border: black;
  }
}

.color-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  width: 100%;
}

.color-preview-tile {
  border-radius: 20px;
  min-height: 132px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--e-elevation-sm);
}

.color-preview-tile__eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.72;
}

.color-preview-tile__title {
  font-size: 1rem;
  font-weight: 700;
}

.color-preview-tile__meta {
  font-family: Monaco, Consolas, 'Liberation Mono', monospace;
  font-size: 0.75rem;
  opacity: 0.78;
}

.text-helper-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  width: 100%;
}

.text-helper-preview__card {
  background: var(--e-color-surface-1);
}

.palette-group {
  display: grid;
  gap: 1rem;
}

.palette-card {
  height: 100%;
  padding: 1rem;
  display: grid;
  gap: 1rem;
  background: var(--e-color-surface-1);
}

.palette-card__header {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: flex-start;
}

.palette-card__title {
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
}

.palette-card__token {
  font-family: Monaco, Consolas, 'Liberation Mono', monospace;
  font-size: 0.75rem;
  color: var(--e-color-label);
}

.palette-swatch-list,
.palette-scale-grid {
  display: grid;
  gap: 0.75rem;
}

.palette-scale-grid {
  grid-template-columns: repeat(auto-fit, minmax(112px, 1fr));
}

.palette-swatch {
  border-radius: 16px;
  min-height: 92px;
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.palette-swatch__label {
  font-size: 0.875rem;
  font-weight: 700;
}

.palette-swatch__value {
  font-family: Monaco, Consolas, 'Liberation Mono', monospace;
  font-size: 0.72rem;
  line-height: 1.35;
  opacity: 0.85;
}
</style>
