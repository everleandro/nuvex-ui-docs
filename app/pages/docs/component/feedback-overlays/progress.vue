<template>
  <article class="docs-page progress-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title"
      :description-html="sections.usage.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="progressProperties.color">
        <template #panel-design>
          <div class="progress-page__preview">
            <ECard :color="progressProperties.useContrastColor ? progressProperties.color : undefined"
              :subtitle="progressProperties.indeterminate ? progressLabel('indeterminate') : `${progressProperties.value}%`">
              <EProgressLinear :value="progressProperties.value" :indeterminate="progressProperties.indeterminate"
                :color="progressProperties.color" :height="progressProperties.height"
                :use-contrast-color="progressProperties.useContrastColor" :aria-label="progressLabel('valueLabel')" />
            </ECard>
          </div>
        </template>
        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="progressProperties.value" cols="24" :items="progressValues" :label="controlLabel('value')"
              :disabled="progressProperties.indeterminate" />
            <ESelect v-model="progressProperties.color" cols="24" :items="colors" :label="controlLabel('color')" />
            <ESelect v-model="progressProperties.height" cols="24" :items="heights" :label="controlLabel('height')" />
            <ECheckbox v-model="progressProperties.indeterminate" cols="24" :label="controlLabel('indeterminate')" />
            <ECheckbox v-model="progressProperties.useContrastColor" cols="24"
              :label="controlLabel('useContrastColor')" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['progress-modes'].key" :title="sections['progress-modes'].title"
      :description-html="sections['progress-modes'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow class="full-width">
            <ECol md="6">
              <ECard :title="progressLabel('determinate')" :subtitle="progressLabel('knownProgress')">
                <EProgressLinear :value="72" color="primary" :aria-label="progressLabel('knownProgress')" />
              </ECard>

            </ECol>
            <ECol md="6">
              <ECard :title="progressLabel('indeterminate')" :subtitle="progressLabel('unknownProgress')">
                <EProgressLinear indeterminate color="primary" :aria-label="progressLabel('unknownProgress')" />
              </ECard>
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="modesTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description-html="sections['visual-variants'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow class="full-width">
            <ECol md="6">
              <ECard description="3px · primary">
                <EProgressLinear :value="64" color="primary" :height="3" />
              </ECard>
            </ECol>
            <ECol md="6">
              <ECard description="6px · secondary">
                <EProgressLinear :value="64" color="secondary" :height="6" />
              </ECard>
            </ECol>
            <ECol cols="12">
              <ECard description="8px · contrast" color="primary">
                <EProgressLinear :value="64" color="primary" use-contrast-color :height="8" />
              </ECard>
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['value-behavior'].key" :title="sections['value-behavior'].title"
      :description-html="sections['value-behavior'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <div class="full-width">
            <div class="d-flex justify-between items-center mb-3">
              <strong class="type-body">{{ progressLabel('valueLabel') }}</strong>
              <span class="type-caption text-medium-emphasis">{{ lifecycleValue }}%</span>
            </div>
            <EProgressLinear :value="lifecycleValue" color="primary" :height="6"
              :aria-label="progressLabel('valueLabel')" />
            <div class="d-flex flex-wrap gap-4 mt-4">
              <EButton text @click="lifecycleValue = 0">{{ progressLabel('reset') }}</EButton>
              <EButton outlined color="primary" @click="advanceLifecycle">{{ progressLabel('advance') }}</EButton>
              <EButton color="primary" @click="lifecycleValue = 100">{{ progressLabel('complete') }}</EButton>
            </div>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="valueLifecycleTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="valueLifecycleTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['composition-patterns'].key" :title="sections['composition-patterns'].title"
      :description-html="sections['composition-patterns'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <ECard class="full-width" :title="progressLabel('reportTitle')" :subtitle="reportStatus"
            :aria-busy="exportRunning">
            <EProgressLinear v-if="exportRunning && exportValue === 0" indeterminate color="primary" :height="6"
              :aria-label="reportStatus" />
            <EProgressLinear v-else :value="exportValue" color="primary" :height="6" :aria-label="reportStatus" />
            <div class="d-flex justify-between items-center mt-4">
              <span class="type-caption text-medium-emphasis">{{ exportValue }}%</span>
              <EButton color="primary" :loading="exportRunning" @click="startExport">
                {{ progressLabel('reportAction') }}
              </EButton>
            </div>
          </ECard>
        </template>
        <template #panel-template>
          <CodePanel :code="compositionTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="compositionTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
      :description-html="sections.accessibility.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard :title="progressLabel('accessibilityHint')" aria-busy="true">
            <EProgressLinear indeterminate color="primary" :height="6" :aria-label="progressLabel('accessibleLabel')"
              aria-describedby="progress-accessibility-status" />
          </ECard>
        </template>
        <template #panel-template>
          <CodePanel :code="accessibilityTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.guidelines.key" :title="sections.guidelines.title"
      :description="sections.guidelines.description">
      <div class="progress-page__guidelines">
        <div>
          <h3 class="type-h6 success--text mb-3">{{ progressLabel('doTitle') }}</h3>
          <ul class="progress-page__guideline-list">
            <li v-for="item in guidelineItems.doItems" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div>
          <h3 class="type-h6 error--text mb-3">{{ progressLabel('dontTitle') }}</h3>
          <ul class="progress-page__guideline-list">
            <li v-for="item in guidelineItems.dontItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <h3 class="type-h5 text-heading mb-3">{{ progressLabel('apiTitle') }}</h3>
      <DocsApiTable :api-reference="localizedProgressApiReference" />
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ progressLabel('apiDetailsTitle') }}</h3>
      <p class="type-body">{{ progressLabel('apiDetailsBody') }}</p>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { progressApiReference } from '~/api-reference/feedback-overlays/progress'
import { progressApiReferenceEs } from '~/api-reference/feedback-overlays/progress-es'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'
import { progressCodeSnippets } from './progress.snippets'
import { ECard } from 'nuvex-ui'

type ProgressSectionKey = 'usage' | 'progress-modes' | 'visual-variants' | 'value-behavior'
  | 'composition-patterns' | 'accessibility' | 'guidelines' | 'props'

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.progress.progress')

const getRequiredSection = (key: ProgressSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `Progress documentation section missing: ${key}` })
  return section
}

const sections = computed(() => ({
  usage: getRequiredSection('usage'),
  'progress-modes': getRequiredSection('progress-modes'),
  'visual-variants': getRequiredSection('visual-variants'),
  'value-behavior': getRequiredSection('value-behavior'),
  'composition-patterns': getRequiredSection('composition-patterns'),
  accessibility: getRequiredSection('accessibility'),
  guidelines: getRequiredSection('guidelines'),
  props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const colors = ['primary', 'secondary', 'success', 'warning']
const heights = [3, 4, 6, 8, 12]
const progressValues = [0, 25, 48, 72, 100]
const progressProperties = ref({ value: 48, color: 'primary', height: 6, indeterminate: false, useContrastColor: false })
const lifecycleValue = ref(35)
const exportValue = ref(0)
const exportRunning = ref(false)
let exportTimer: ReturnType<typeof setInterval> | undefined

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()
const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const progressLabels = computed(() => {
  const labels = content.value.labels.progressText
  return labels && !Array.isArray(labels) ? labels : {}
})
const progressLabel = (key: string): string => String(progressLabels.value[key] ?? key)
const guidelineItems = computed(() => ({
  doItems: Array.isArray(progressLabels.value.doItems) ? progressLabels.value.doItems as string[] : [],
  dontItems: Array.isArray(progressLabels.value.dontItems) ? progressLabels.value.dontItems as string[] : [],
}))

const localizedProgressApiReference = computed(() => locale.value === 'es'
  ? progressApiReferenceEs
  : progressApiReference)

const usageTemplateCode = computed(() => buildTemplateElementSnippet({
  tag: 'EProgressLinear',
  attrs: [
    !progressProperties.value.indeterminate && `:value="${progressProperties.value.value}"`,
    progressProperties.value.indeterminate && 'indeterminate',
    `color="${progressProperties.value.color}"`,
    `:height="${progressProperties.value.height}"`,
    progressProperties.value.useContrastColor && 'use-contrast-color',
    'aria-label="Current progress"',
  ],
}))

const advanceLifecycle = () => {
  lifecycleValue.value = Math.min(100, lifecycleValue.value + 15)
}

const reportStatus = computed(() => {
  if (exportRunning.value && exportValue.value === 0) return progressLabel('reportPreparing')
  if (exportRunning.value) return progressLabel('reportProcessing')
  if (exportValue.value === 100) return progressLabel('reportComplete')
  return progressLabel('reportIdle')
})

const stopExportTimer = () => {
  if (exportTimer) clearInterval(exportTimer)
  exportTimer = undefined
}

const startExport = () => {
  stopExportTimer()
  exportValue.value = 0
  exportRunning.value = true
  exportTimer = setInterval(() => {
    exportValue.value = Math.min(100, exportValue.value + 10)
    if (exportValue.value === 100) {
      exportRunning.value = false
      stopExportTimer()
    }
  }, 180)
}

onBeforeUnmount(stopExportTimer)

const {
  modesTemplateCode,
  visualVariantsTemplateCode,
  valueLifecycleTemplateCode,
  valueLifecycleTsCode,
  compositionTemplateCode,
  compositionTsCode,
  accessibilityTemplateCode,
} = progressCodeSnippets
</script>

<style scoped lang="scss">
.progress-page__preview,
.progress-page__report {
  width: 100%;
}

.progress-page__examples,
.progress-page__guidelines {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
}

.progress-page__example {
  display: flex;
  flex-direction: column;
  gap: .75rem;
  min-width: 0;
  padding: 1rem;
}

.progress-page__contrast-surface {
  color: var(--e-contrast-primary, white);
  grid-column: 1 / -1;
}

.progress-page__guidelines {
  padding-block: 1rem;
}

.progress-page__guideline-list {
  display: grid;
  gap: .75rem;
  margin: 0;
  padding-left: 1.25rem;
}

@media (max-width: 700px) {

  .progress-page__examples,
  .progress-page__guidelines {
    grid-template-columns: minmax(0, 1fr);
  }

  .progress-page__contrast-surface {
    grid-column: auto;
  }
}
</style>
