<template>
  <article class="docs-page checkbox-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ECheckbox v-model="checkboxValue" :label="usageLabel" :color="color" :outlined="checkboxProperty.outlined"
            :disabled="checkboxProperty.disabled" :readonly="checkboxProperty.readonly" :tonal="checkboxProperty.tonal"
            :retain-color="checkboxProperty.retainColor" :detail="pageText.usageDetail" />
        </template>

        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="checkboxProperty.outlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="checkboxProperty.disabled" cols="24" :label="controlLabel('disabled')" :color="color" />
            <ECheckbox v-model="checkboxProperty.readonly" cols="24" :label="controlLabel('readonly')" :color="color" />
            <ECheckbox v-model="checkboxProperty.tonal" cols="24" :label="controlLabel('tonal')" :color="color" />
            <ECheckbox v-model="checkboxProperty.retainColor" cols="24" :label="controlLabel('retainColor')"
              :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description="sections['visual-variants'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ECheckbox v-model="visualStates.default" lg="6" :label="pageText.visualStateLabels.default"
              :color="color" />
            <ECheckbox v-model="visualStates.outlined" lg="6" :label="pageText.visualStateLabels.outlined" outlined
              :color="color" />
            <ECheckbox v-model="visualStates.tonal" lg="6" :label="pageText.visualStateLabels.tonal" tonal
              :color="color" />
            <ECheckbox v-model="visualStates.retainColor" lg="6" :label="pageText.visualStateLabels.retainColor"
              :retain-color="true" :color="color" />
            <ECheckbox v-model="visualStates.active" lg="6" :label="pageText.visualStateLabels.active" :color="color" />
            <ECheckbox v-model="visualStates.disabled" lg="6" :label="pageText.visualStateLabels.disabled" disabled
              :color="color" />
            <ECheckbox v-model="visualStates.readonly" lg="6" :label="pageText.visualStateLabels.readonly" readonly
              outlined :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="checkboxCodeSnippets.visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['custom-values'].key" :title="sections['custom-values'].title"
      :description="sections['custom-values'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <EForm>
            <ECheckbox v-model="releaseStatus" lg="8" :label="pageText.customValuesLabel" true-value="ready"
              false-value="hold" :detail="pageText.customValuesDetail" :color="color" />
            <EFormColumn lg="4">
              <ECard elevation="sm" :subtitle="pageText.currentModelValue">
                <ECard tonal :color="releaseStatus === 'ready' ? 'success' : 'warning'">
                  <span class="d-flex justify-center">{{ releaseStatus }}</span>
                </ECard>
              </ECard>
            </EFormColumn>
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="checkboxCodeSnippets.customValuesTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="checkboxCodeSnippets.customValuesTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['slots'].key" :title="sections['slots'].title"
      :description-html="sections['slots'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <DocsFormsCheckboxSlotsPreview :color="color" />
        </template>

        <template #panel-template>
          <CodePanel :code="checkboxCodeSnippets.slotsTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="checkboxCodeSnippets.slotsTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.validation.key" :title="sections.validation.title"
      :description="sections.validation.description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <DocsFormsCheckboxValidationPreview :color="color" />
        </template>

        <template #panel-template>
          <CodePanel :code="checkboxCodeSnippets.validationTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="checkboxCodeSnippets.validationTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedCheckboxApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import type { EForm } from 'nuvex-ui'
import { useI18n } from 'vue-i18n'
import { useComponentPageSchema, BreadcrumbBuilders } from '~/composables/useComponentPageSchema'
import { checkboxApiReference } from '~/api-reference/forms/checkbox'
import { checkboxApiReferenceEs } from '~/api-reference/forms/checkbox-es'
import { checkboxCodeSnippets } from './checkbox.snippets'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

type CheckboxValue = boolean | string | number

const { locale } = useI18n()

const content = useDocsComponentI18nContent('pages.input.checkbox')

type CheckboxSectionKey =
  | 'usage'
  | 'visual-variants'
  | 'custom-values'
  | 'slots'
  | 'validation'
  | 'props'

const getRequiredSection = (key: CheckboxSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Checkbox documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    'visual-variants': getRequiredSection('visual-variants'),
    'custom-values': getRequiredSection('custom-values'),
    slots: getRequiredSection('slots'),
    validation: getRequiredSection('validation'),
    props: getRequiredSection('props'),
  }
})

const localizedCheckboxApiReference = computed(() => {
  return locale.value === 'es' ? checkboxApiReferenceEs : checkboxApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
  ogTitle: computed(() => content.value.seo.title),
  ogDescription: computed(() => content.value.seo.description),
  twitterTitle: computed(() => content.value.seo.title),
  twitterDescription: computed(() => content.value.seo.description),
})

// Add Article and Breadcrumb schemas for rich snippets
const { getHeadObject: getSchemaHead } = useComponentPageSchema({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
  breadcrumbSegments: BreadcrumbBuilders.component('Checkbox'),
})

useHead(() => getSchemaHead())

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const pageText = computed(() => {
  return content.value.labels.checkboxText ?? {}
})

const checkboxProperty = ref({
  outlined: false,
  disabled: false,
  readonly: false,
  tonal: true,
  retainColor: true,
})

const checkboxValue = ref<CheckboxValue>(false)
const usageLabel = computed(() => pageText.value.usageLabel)

const visualStates = ref({
  default: false,
  outlined: false,
  tonal: true,
  retainColor: true,
  active: true,
  disabled: true,
  readonly: true,
})

const releaseStatus = ref<'ready' | 'hold'>('hold')

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const usageTemplateCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: 'e-checkbox',
    attrs: [
      'v-model="acceptTerms"',
      `label="${usageLabel.value}"`,
      `color="${color.value}"`,
      checkboxProperty.value.outlined && 'outlined',
      checkboxProperty.value.disabled && 'disabled',
      checkboxProperty.value.readonly && 'readonly',
      checkboxProperty.value.tonal && 'tonal',
      checkboxProperty.value.retainColor && 'retain-color',
    ],
  })
})
</script>
