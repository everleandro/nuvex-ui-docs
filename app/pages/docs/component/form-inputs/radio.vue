<template>
  <article class="docs-page radio-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ERadioGroup v-model="usageValue" :label="pageText.usageGroupLabel" :detail="pageText.usageDetail"
            :color="color" :outlined="radioProperty.outlined" :disabled="radioProperty.disabled"
            :readonly="radioProperty.readonly" :tonal="radioProperty.tonal" :retain-color="radioProperty.retainColor">
            <ERadio model-value="email" :label="pageText.usageOptions.email" />
            <ERadio model-value="phone" :label="pageText.usageOptions.phone" />
            <ERadio model-value="sms" :label="pageText.usageOptions.sms" />
          </ERadioGroup>
        </template>

        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="radioProperty.outlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="radioProperty.disabled" cols="24" :label="controlLabel('disabled')" :color="color" />
            <ECheckbox v-model="radioProperty.readonly" cols="24" :label="controlLabel('readonly')" :color="color" />
            <ECheckbox v-model="radioProperty.tonal" cols="24" :label="controlLabel('tonal')" :color="color" />
            <ECheckbox v-model="radioProperty.retainColor" cols="24" :label="controlLabel('retainColor')"
              :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['layout-and-direction'].key" :title="sections['layout-and-direction'].title"
      :description="sections['layout-and-direction'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ERadioGroup v-model="layoutValues.row" cols="12" :label="pageText.layoutGroupLabels.row"
              :detail="pageText.layoutDetail" row :color="color">
              <ERadio model-value="staging" :label="pageText.layoutOptions.staging" />
              <ERadio model-value="production" :label="pageText.layoutOptions.production" />
              <ERadio model-value="canary" :label="pageText.layoutOptions.canary" />
            </ERadioGroup>

            <ERadioGroup v-model="layoutValues.column" cols="12" :label="pageText.layoutGroupLabels.column"
              :detail="pageText.layoutDetail" :color="color">
              <ERadio model-value="staging" :label="pageText.layoutOptions.staging" />
              <ERadio model-value="production" :label="pageText.layoutOptions.production" />
              <ERadio model-value="canary" :label="pageText.layoutOptions.canary" />
            </ERadioGroup>
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="radioCodeSnippets.layoutTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description="sections['visual-variants'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ERadioGroup v-model="visualStates.default" lg="6" :label="pageText.visualStateLabels.default"
              :color="color">
              <ERadio model-value="auto" :label="pageText.stateOptions.auto" />
              <ERadio model-value="manual" :label="pageText.stateOptions.manual" />
            </ERadioGroup>
            <ERadioGroup v-model="visualStates.outlined" lg="6" :label="pageText.visualStateLabels.outlined" outlined
              :color="color">
              <ERadio model-value="auto" :label="pageText.stateOptions.auto" />
              <ERadio model-value="manual" :label="pageText.stateOptions.manual" />
            </ERadioGroup>
            <ERadioGroup v-model="visualStates.tonal" lg="6" :label="pageText.visualStateLabels.tonal" tonal
              :color="color">
              <ERadio model-value="auto" :label="pageText.stateOptions.auto" />
              <ERadio model-value="manual" :label="pageText.stateOptions.manual" />
            </ERadioGroup>
            <ERadioGroup v-model="visualStates.retainColor" lg="6" :label="pageText.visualStateLabels.retainColor"
              retain-color :color="color">
              <ERadio model-value="auto" :label="pageText.stateOptions.auto" />
              <ERadio model-value="manual" :label="pageText.stateOptions.manual" />
            </ERadioGroup>
            <ERadioGroup v-model="visualStates.disabled" lg="6" :label="pageText.visualStateLabels.disabled" disabled
              :color="color">
              <ERadio model-value="auto" :label="pageText.stateOptions.auto" />
              <ERadio model-value="manual" :label="pageText.stateOptions.manual" />
            </ERadioGroup>
            <ERadioGroup v-model="visualStates.readonly" lg="6" :label="pageText.visualStateLabels.readonly" readonly
              outlined :color="color">
              <ERadio model-value="auto" :label="pageText.stateOptions.auto" />
              <ERadio model-value="manual" :label="pageText.stateOptions.manual" />
            </ERadioGroup>
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="radioCodeSnippets.visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['mandatory-selection'].key" :title="sections['mandatory-selection'].title"
      :description="sections['mandatory-selection'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ECard elevation="sm" style="width: 420px;">
            <ECard tonal>{{ pageText.currentModelValue }}: {{ mandatorySelection }}</ECard>
            <ERadioGroup :key="mandatoryDemoKey" v-model="mandatorySelection" mandatory
              :label="pageText.mandatoryGroupLabel" :detail="pageText.mandatoryDetail" :color="color">
              <ERadio model-value="free" :label="pageText.mandatoryOptions.free" />
              <ERadio model-value="pro" :label="pageText.mandatoryOptions.pro" />
              <ERadio model-value="enterprise" :label="pageText.mandatoryOptions.enterprise" />
            </ERadioGroup>

            <EDivider class="my-4"/>
            <div class="d-flex align-center justify-space-between gap-3 flex-wrap">
              <ESpacer/>
              <EButton text :color="color" @click="resetMandatoryDemo">{{ pageText.resetMandatoryButton }}</EButton>
            </div>
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="radioCodeSnippets.mandatoryTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="radioCodeSnippets.mandatoryTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.slots.key" :title="sections.slots.title"
      :description-html="sections.slots.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <div class="d-flex flex-column gap-3">
            <ERadioGroup v-model="slotValue" :color="color">
              <template #label>
                {{ pageText.slotGroupLead }}
                <a href="#" @click.prevent="slotDialogOpen = true" class="secondary--text">{{ pageText.slotGroupLinkLabel }}</a>
              </template>

              <ERadio model-value="stable">
                <template #label>
                  {{ pageText.slotOptionLabel }}
                </template>
              </ERadio>
              <ERadio model-value="beta" :label="pageText.validationOptions.beta" />
              <ERadio model-value="nightly" :label="pageText.validationOptions.nightly" />
            </ERadioGroup>

            <EDialog v-model="slotDialogOpen" max-width="420">
              <ECard class="pa-4 d-flex flex-column gap-3">
                <div>
                  <div class="type-subtitle text-heading">{{ pageText.slotDialogTitle }}</div>
                  <p class="type-body mt-2 mb-0">{{ pageText.slotDialogBody }}</p>
                </div>

                <div class="d-flex justify-end">
                  <EButton color="primary" @click="slotDialogOpen = false">{{ pageText.slotDialogClose }}</EButton>
                </div>
              </ECard>
            </EDialog>
          </div>
        </template>

        <template #panel-template>
          <CodePanel :code="radioCodeSnippets.slotsTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="radioCodeSnippets.slotsTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.validation.key" :title="sections.validation.title"
      :description="sections.validation.description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <DocsFormsRadioValidationPreview :color="color" />
        </template>

        <template #panel-template>
          <CodePanel :code="radioCodeSnippets.validationTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="radioCodeSnippets.validationTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedRadioApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { radioApiReference } from '~/api-reference/forms/radio'
import { radioApiReferenceEs } from '~/api-reference/forms/radio-es'
import { radioCodeSnippets } from './radio.snippets'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

type RadioValue = string | number | null | undefined

const { locale } = useI18n()

const content = useDocsComponentI18nContent('pages.input.radio')

type RadioSectionKey =
  | 'usage'
  | 'layout-and-direction'
  | 'visual-variants'
  | 'mandatory-selection'
  | 'slots'
  | 'validation'
  | 'props'

const getRequiredSection = (key: RadioSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Radio documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    'layout-and-direction': getRequiredSection('layout-and-direction'),
    'visual-variants': getRequiredSection('visual-variants'),
    'mandatory-selection': getRequiredSection('mandatory-selection'),
    slots: getRequiredSection('slots'),
    validation: getRequiredSection('validation'),
    props: getRequiredSection('props'),
  }
})

const localizedRadioApiReference = computed(() => {
  return locale.value === 'es' ? radioApiReferenceEs : radioApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const pageText = computed(() => {
  const text = content.value.labels.radioText

  if (!text) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Radio documentation labels missing: radioText',
    })
  }

  return text
})

const radioProperty = ref({
  row: true,
  outlined: false,
  disabled: false,
  readonly: false,
  tonal: false,
  retainColor: true,
})

const usageValue = ref<RadioValue>('email')

const layoutValues = ref({
  row: 'production' as RadioValue,
  column: 'production' as RadioValue,
})

const visualStates = ref({
  default: 'auto' as RadioValue,
  outlined: 'auto' as RadioValue,
  tonal: 'auto' as RadioValue,
  retainColor: 'auto' as RadioValue,
  disabled: 'auto' as RadioValue,
  readonly: 'auto' as RadioValue,
})

const mandatorySelection = ref<RadioValue>(undefined)
const mandatoryDemoKey = ref(0)

const resetMandatoryDemo = () => {
  mandatorySelection.value = undefined
  mandatoryDemoKey.value += 1
}

const slotValue = ref<RadioValue>('stable')
const slotDialogOpen = ref(false)

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const usageTemplateCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: 'e-radio-group',
    attrs: [
      'v-model="contactMethod"',
      'label="Contact method"',
      'detail="Choose the preferred channel for release updates."',
      `color="${color.value}"`,
      radioProperty.value.row && 'row',
      radioProperty.value.outlined && 'outlined',
      radioProperty.value.disabled && 'disabled',
      radioProperty.value.readonly && 'readonly',
      radioProperty.value.tonal && 'tonal',
      radioProperty.value.retainColor && 'retain-color',
    ],
    contentLines: [
      '<ERadio model-value="email" label="Email" />',
      '<ERadio model-value="phone" label="Phone" />',
      '<ERadio model-value="sms" label="SMS" />',
    ],
  })
})
</script>
