<template>
  <article class="docs-page checkbox-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ECheckbox v-model="checkboxValue" :label="usageLabel" :color="color" :outlined="checkboxProperty.outlined"
            :disabled="checkboxProperty.disabled" :readonly="checkboxProperty.readonly" :tonal="checkboxProperty.tonal"
            :retain-color="checkboxProperty.retainColor"
            :detail="pageText.usageDetail" />
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
            <ECheckbox v-model="visualStates.default" lg="6" :label="pageText.visualStateLabels.default" :color="color" />
            <ECheckbox v-model="visualStates.outlined" lg="6" :label="pageText.visualStateLabels.outlined" outlined :color="color" />
            <ECheckbox v-model="visualStates.tonal" lg="6" :label="pageText.visualStateLabels.tonal" tonal :color="color" />
            <ECheckbox v-model="visualStates.retainColor" lg="6" :label="pageText.visualStateLabels.retainColor" :retain-color="true" :color="color" />
            <ECheckbox v-model="visualStates.active" lg="6" :label="pageText.visualStateLabels.active" :color="color" />
            <ECheckbox v-model="visualStates.disabled" lg="6" :label="pageText.visualStateLabels.disabled" disabled :color="color" />
            <ECheckbox v-model="visualStates.readonly" lg="6" :label="pageText.visualStateLabels.readonly" readonly outlined :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['custom-values'].key" :title="sections['custom-values'].title"
      :description="sections['custom-values'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <EForm>
            <ECheckbox v-model="releaseStatus" lg="8" :label="pageText.customValuesLabel" true-value="ready" false-value="hold"
              :detail="pageText.customValuesDetail" :color="color" />
            <EFormColumn lg="4">
              <ECard color="surface-subtle" elevation="sm" class="pa-3 d-flex flex-column gap-2">
                <div class="text-caption">{{ pageText.currentModelValue }}</div>
                <EChip :color="releaseStatus === 'ready' ? 'success' : 'warning'" tonal>
                  {{ releaseStatus }}
                </EChip>
              </ECard>
            </EFormColumn>
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="customValuesTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="customValuesTsCode" language="ts" />
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
          <CodePanel :code="slotsTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="slotsTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.validation.key" :title="sections.validation.title"
      :description="sections.validation.description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ECard elevation="sm" color="surface-subtle" class="pa-4" style="width: 400px;">
            <EForm v-model="validationState.isValid" validate-on-submit @submit="handleValidationSubmit"
              @submit-invalid="handleValidationInvalid">
              <ECheckbox v-model="validationState.termsAccepted" :label="pageText.validationCheckboxLabel"
                :rules="[(value: boolean) => value === true || validationMessage]" :color="color" />
              <EFormColumn cols="12" class="d-flex flex-column gap-2">
                <EButton color="primary" type="submit" :disabled="!validationState.isValid">{{ pageText.validationButtonLabel }}</EButton>
                <div class="d-flex justify-center"><EChip class="text-caption">{{ validationFeedback }}</EChip></div>
              </EFormColumn>
            </EForm>
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="validationTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="validationTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedCheckboxApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { checkboxApiReference } from '~/api-reference/forms/checkbox'
import { checkboxApiReferenceEs } from '~/api-reference/forms/checkbox-es'
import { useDocsPlaygroundTabSets } from '~/composables/useDocsPlaygroundTabSets'
import { getDocsComponentPageContent } from '~/content/docs'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

type CheckboxValue = boolean | string | number

const { locale } = useI18n()

const content = computed(() => {
  const resolvedContent = getDocsComponentPageContent('/docs/forms/checkbox', locale.value)

  if (!resolvedContent) {
    throw createError({ statusCode: 404, statusMessage: 'Checkbox documentation content not found' })
  }

  return resolvedContent
})

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
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const pageText = computed(() => {
  return content.value.labels.checkboxText ?? {
    usageLabel: 'Enable deployment checks',
    usageDetail: 'Required for deployment checklist',
    visualStateLabels: {
      default: 'Default',
      outlined: 'Outlined',
      tonal: 'Tonal',
      retainColor: 'Retain color',
      active: 'Active',
      disabled: 'Disabled',
      readonly: 'Readonly',
    },
    customValuesLabel: 'Release checklist',
    customValuesDetail: 'Toggle to mark deployment readiness',
    currentModelValue: 'Current model value',
    termsDialogTitle: 'Terms and Conditions',
    termsDialogBody: 'Use this dialog to explain the scope of consent, expected usage, and any additional conditions before continuing.',
    termsDialogClose: 'Close',
    validationCheckboxLabel: 'I accept the terms of service',
    validationMessage: 'You must accept the terms before continuing.',
    validationButtonLabel: 'Create account',
    validationIdleFeedback: 'Submit to validate the checkbox rule.',
    validationSuccessFeedback: 'Form is valid. Ready to continue.',
    slotsLead: 'I agree to the',
    slotsLinkLabel: 'Terms and Conditions',
  }
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

const validationMessage = computed(() => pageText.value.validationMessage)
const validationState = ref({
  isValid: undefined as boolean | undefined,
  termsAccepted: false,
  submitState: 'idle' as 'idle' | 'valid' | 'invalid',
})

const handleValidationSubmit = () => {
  validationState.value.submitState = 'valid'
}

const handleValidationInvalid = () => {
  validationState.value.submitState = 'invalid'
}

const validationFeedback = computed(() => {
  if (validationState.value.submitState === 'idle') {
    return pageText.value.validationIdleFeedback
  }

  return validationState.value.submitState === 'valid'
    ? pageText.value.validationSuccessFeedback
    : validationMessage.value
})

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

const visualVariantsTemplateCode = `<EForm>
  <ECheckbox v-model="visualStates.default" label="${pageText.value.visualStateLabels.default}" :color="color" />
  <ECheckbox v-model="visualStates.outlined" label="${pageText.value.visualStateLabels.outlined}" outlined :color="color" />
  <ECheckbox v-model="visualStates.tonal" label="${pageText.value.visualStateLabels.tonal}" tonal :color="color" />
  <ECheckbox v-model="visualStates.retainColor" label="${pageText.value.visualStateLabels.retainColor}" retain-color :color="color" />
  <ECheckbox v-model="visualStates.active" label="${pageText.value.visualStateLabels.active}" :color="color" />
  <ECheckbox v-model="visualStates.disabled" label="${pageText.value.visualStateLabels.disabled}" disabled :color="color" />
  <ECheckbox v-model="visualStates.readonly" label="${pageText.value.visualStateLabels.readonly}" readonly outlined :color="color" />
</EForm>`

const customValuesTemplateCode = computed(() => `<ECheckbox
  v-model="releaseStatus"
  label="${pageText.value.customValuesLabel}"
  true-value="ready"
  false-value="hold"
  detail="${pageText.value.customValuesDetail}"
/>`)

const customValuesTsCode = `const releaseStatus = ref<'ready' | 'hold'>('hold')`

const slotsTemplateCode = computed(() => `<ECheckbox v-model="slotChecked">
  <template #label>
    ${pageText.value.slotsLead}
    <a href="#" @click.prevent="termsDialogOpen = true">${pageText.value.slotsLinkLabel}</a>
  </template>
</ECheckbox>

<EDialog v-model="termsDialogOpen" max-width="420">
  <ECard class="pa-4 d-flex flex-column gap-3">
    <div>
      <div class="text-subtitle-2">${pageText.value.termsDialogTitle}</div>
      <p class="text-body-2 mt-2 mb-0">
        ${pageText.value.termsDialogBody}
      </p>
    </div>

    <div class="d-flex justify-end">
      <EButton color="primary" @click="termsDialogOpen = false">
        ${pageText.value.termsDialogClose}
      </EButton>
    </div>
  </ECard>
</EDialog>`)

const slotsTsCode = `const slotChecked = ref(false)
const termsDialogOpen = ref(false)`

const validationTemplateCode = computed(() => `<EForm
  v-model="isValid"
  validate-on-submit
  @submit="handleSubmit"
  @submit-invalid="handleInvalid"
>
  <ECheckbox
    v-model="termsAccepted"
    label="${pageText.value.validationCheckboxLabel}"
    :rules="[(value) => value === true || '${pageText.value.validationMessage}']"
  />

  <EButton color="primary" type="submit">
    ${pageText.value.validationButtonLabel}
  </EButton>
</EForm>`)

const validationTsCode = `const isValid = ref<boolean | undefined>()
const termsAccepted = ref(false)

const handleSubmit = () => {
  // Continue with the valid form submission flow.
}

const handleInvalid = () => {
  // Optional: react when validation blocks the submit.
}`
</script>
