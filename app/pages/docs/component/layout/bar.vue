<template>
  <article class="docs-page docs-page__bar">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title"
      :description-html="sections.usage.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="barProperties.color">
        <template #panel-design>
          <EBar class="bar-example" :color="barProperties.color" :elevation="barProperties.elevation">
            <EButton :icon="$icon.menu" text />
            <span class="type-h6">{{ barLabel('workspace') }}</span>
            <ESpacer />
            <EButton :icon="$icon.account" text />
          </EBar>
        </template>
        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="barProperties.color" cols="24" :items="colors" :label="controlLabel('color')" clearable />
            <ESelect v-model="barProperties.elevation" cols="24" :items="elevations" :label="controlLabel('elevation')"
              clearable />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.density.key" :title="sections.density.title"
      :description-html="sections.density.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard class="full-width">
            <EBar class="bar-example" dense color="blue">
              <span class="title">{{ barLabel('denseBar') }}</span>
              <ESpacer />
              <div class="d-flex gap-0">
                <EButton text size="small" :icon="$icon.heart" :aria-label="barLabel('moreActions')" />
                <EButton text size="small" :icon="$icon.magnify" :aria-label="barLabel('moreActions')" />
                <EButton text size="small" :icon="$icon.dotsMenu" :aria-label="barLabel('moreActions')" />
              </div>
            </EBar>
          </ECard>
        </template>
        <template #panel-template>
          <CodePanel :code="barCodeSnippets.densityTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['content-actions'].key" :title="sections['content-actions'].title"
      :description-html="sections['content-actions'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <EBar outlined>
            <EButton text :icon="$icon.menu" :aria-label="barLabel('openNavigation')" />
            <span class="type-h6">{{ barLabel('projects') }}</span>
            <ESpacer />
            <EButton text :icon="$icon.magnify" :aria-label="barLabel('search')" />
          </EBar>
        </template>
        <template #panel-template>
          <CodePanel :code="barCodeSnippets.contentActionsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedBarApiReference" />
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ barLabel('apiSlotsTitle') }}</h3>
      <p class="type-body">{{ barLabel('apiSlotsBody') }}</p>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { barApiReference } from '~/api-reference/layout/bar'
import { barApiReferenceEs } from '~/api-reference/layout/bar-es'
import { barCodeSnippets } from './bar.snippets'

type BarSectionKey = 'usage' | 'content-actions' | 'density' | 'props'

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.bar.bar')
const getRequiredSection = (key: BarSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `Bar documentation section missing: ${key}` })
  return section
}
const sections = computed(() => ({
  usage: getRequiredSection('usage'),
  'content-actions': getRequiredSection('content-actions'),
  density: getRequiredSection('density'),
  props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const colors = ['primary', 'secondary', 'blue', 'cyan', 'teal']
const elevations = ['xs', 'sm', 'md', 'lg', 'xl']
const barProperties = ref<{
  color: string | undefined
  elevation: string | undefined
}>({ color: 'primary', elevation: 'sm' })

const { tabsPlayground, tabsDesignTemplate } = useDocsPlaygroundTabSets()
const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const barLabels = computed(() => {
  const labels = content.value.labels.barText
  return labels && !Array.isArray(labels) ? labels : {}
})
const barLabel = (key: string): string => String(barLabels.value[key] ?? key)
const localizedBarApiReference = computed(() => locale.value === 'es' ? barApiReferenceEs : barApiReference)
const usageTemplateCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: "EBar",
    attrs: [
      barProperties.value.color && `color="${barProperties.value.color}"`,
      barProperties.value.elevation && `elevation="${barProperties.value.elevation}"`
    ],
    contentLines: [`<EButton icon="menu" text />
    <span class="type-h6">title</span>
    <ESpacer /> 
    <EButton icon="account" text />
</EBar>`],
  });
});
</script>

<style lang="scss">
.docs-page__bar {
  .e-bar {
    border-radius: var(--e-border-radius-root);
  }
}
</style>
