<template>
  <article class="docs-page switch-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ESwitch v-model="switchValue" :label="pageText.usageLabel" :detail="pageText.usageDetail" :color="color"
            :outlined="switchProperty.outlined" :disabled="switchProperty.disabled" :readonly="switchProperty.readonly"
            :loading="switchProperty.loading" :retain-color="switchProperty.retainColor" />
        </template>

        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="switchProperty.outlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="switchProperty.disabled" cols="24" :label="controlLabel('disabled')" :color="color" />
            <ECheckbox v-model="switchProperty.readonly" cols="24" :label="controlLabel('readonly')" :color="color" />
            <ECheckbox v-model="switchProperty.loading" cols="24" :label="controlLabel('loading')" :color="color" />
            <ECheckbox v-model="switchProperty.retainColor" cols="24" :label="controlLabel('retainColor')" :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description="sections['visual-variants'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ESwitch v-model="visualStates.default" lg="6" :label="pageText.visualStateLabels.default" :color="color" />
            <ESwitch v-model="visualStates.outlined" lg="6" :label="pageText.visualStateLabels.outlined" outlined :color="color" />
            <ESwitch v-model="visualStates.tonal" lg="6" :label="pageText.visualStateLabels.tonal" tonal :color="color" />
            <ESwitch v-model="visualStates.retainColor" lg="6" :label="pageText.visualStateLabels.retainColor" retain-color :color="color" />
            <ESwitch v-model="visualStates.loading" lg="6" :label="pageText.visualStateLabels.loading" loading :color="color" />
            <ESwitch v-model="visualStates.disabled" lg="6" :label="pageText.visualStateLabels.disabled" disabled :color="color" />
            <ESwitch v-model="visualStates.readonly" lg="6" :label="pageText.visualStateLabels.readonly" readonly outlined :color="color" />
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
            <ESwitch v-model="deploymentStatus" lg="8" :label="pageText.customValuesLabel" true-value="published"
              false-value="draft" :detail="pageText.customValuesDetail" :color="color" />
            <EFormColumn lg="4">
              <ECard color="surface-subtle" elevation="sm" class="pa-3 d-flex flex-column gap-2">
                <div class="type-subtitle">{{ pageText.currentModelValue }}</div>
                <EChip :color="deploymentStatus === 'published' ? 'success' : 'warning'" tonal>
                  {{ deploymentStatus }}
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

    <DocsSection :id="sections['loading-and-async'].key" :title="sections['loading-and-async'].title"
      :description="sections['loading-and-async'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ECard elevation="sm" color="surface-subtle" class="pa-4 d-flex flex-column gap-3" style="width: 420px;">
            <ESwitch v-model="asyncState.value" :label="pageText.asyncLabel" :detail="pageText.asyncDetail"
              :loading="asyncState.loading" :color="color" @update:model-value="handleAsyncUpdate" />
            <div class="d-flex align-center flex-column justify-space-between gap-3 flex-wrap">
              <EChip :color="asyncFeedbackColor" tonal>{{ asyncFeedback }}</EChip>
              <EButton :disabled="asyncState.loading" :color="color" text @click="resetAsyncDemo">
                {{ pageText.asyncButtonLabel }}
              </EButton>
            </div>
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="asyncTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="asyncTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.slots.key" :title="sections.slots.title"
      :description-html="sections.slots.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <div class="d-flex flex-column gap-3">
            <ESwitch v-model="slotValue" :color="color">
              <template #label>
                {{ pageText.slotLead }}
                <a href="#" @click.prevent="termsDialogOpen = true">{{ pageText.slotLinkLabel }}</a>
              </template>
            </ESwitch>

            <EDialog v-model="termsDialogOpen" max-width="420">
              <ECard class="pa-4 d-flex flex-column gap-3">
                <div>
                  <div class="type-subtitle text-heading">{{ pageText.dialogTitle }}</div>
                  <p class="type-body mt-2 mb-0">{{ pageText.dialogBody }}</p>
                </div>

                <div class="d-flex justify-end">
                  <EButton color="primary" @click="termsDialogOpen = false">
                    {{ pageText.dialogClose }}
                  </EButton>
                </div>
              </ECard>
            </EDialog>
          </div>
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
          <ECard elevation="sm" color="surface-subtle" class="pa-4" style="width: 420px;">
            <EForm v-model="validationState.isValid" validate-on-submit @submit="handleValidationSubmit"
              @submit-invalid="handleValidationInvalid">
              <ESwitch v-model="validationState.accepted" :label="pageText.validationLabel"
                :rules="[(value: boolean) => value === true || validationMessage]" :color="color" />
              <EFormColumn cols="12" class="d-flex flex-column gap-2">
                <EButton color="primary" type="submit" :disabled="!validationState.isValid">{{ pageText.validationButtonLabel }}</EButton>
                <div class="d-flex justify-center"><EChip class="type-subtitle">{{ validationFeedback }}</EChip></div>
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
      <DocsApiTable :api-reference="localizedSwitchApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { switchApiReference } from '~/api-reference/forms/switch'
import { switchApiReferenceEs } from '~/api-reference/forms/switch-es'
import { useDocsComponentI18nContent } from '~/composables/useDocsI18nContent'
import { useDocsPlaygroundTabSets } from '~/composables/useDocsPlaygroundTabSets'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

type SwitchValue = boolean | string | number

const { locale } = useI18n()

const content = useDocsComponentI18nContent('pages.input.switch')

type SwitchSectionKey =
  | 'usage'
  | 'visual-variants'
  | 'custom-values'
  | 'loading-and-async'
  | 'slots'
  | 'validation'
  | 'props'

const getRequiredSection = (key: SwitchSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Switch documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    'visual-variants': getRequiredSection('visual-variants'),
    'custom-values': getRequiredSection('custom-values'),
    'loading-and-async': getRequiredSection('loading-and-async'),
    slots: getRequiredSection('slots'),
    validation: getRequiredSection('validation'),
    props: getRequiredSection('props'),
  }
})

const localizedSwitchApiReference = computed(() => {
  return locale.value === 'es' ? switchApiReferenceEs : switchApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const pageText = computed(() => {
  return content.value.labels.switchText ?? {
    usageLabel: 'Enable release gate',
    usageDetail: 'Controls whether the release can proceed automatically.',
    visualStateLabels: {
      default: 'Default',
      outlined: 'Outlined',
      tonal: 'Tonal',
      retainColor: 'Retain color',
      loading: 'Loading',
      disabled: 'Disabled',
      readonly: 'Readonly',
    },
    customValuesLabel: 'Publish changes',
    customValuesDetail: 'Maps switch state to deployment status values.',
    currentModelValue: 'Current model value',
    asyncLabel: 'Live analytics',
    asyncDetail: 'Persist the preference before enabling session tracking.',
    asyncButtonLabel: 'Reset demo',
    asyncIdleFeedback: 'Toggle the switch to simulate an async save.',
    asyncSavingFeedback: 'Saving preference...',
    asyncSuccessFeedback: 'Preference saved successfully.',
    slotLead: 'I reviewed the',
    slotLinkLabel: 'environment policy',
    dialogTitle: 'Environment policy',
    dialogBody: 'Use the label slot when the switch label needs richer inline content such as links, helper context, or policy summaries.',
    dialogClose: 'Close',
    validationLabel: 'Enable production notifications',
    validationButtonLabel: 'Continue',
    validationMessage: 'Enable this switch before continuing.',
    validationIdleFeedback: 'Submit to validate the switch rule.',
    validationSuccessFeedback: 'Form is valid. Ready to continue.',
  }
})

const switchProperty = ref({
  outlined: false,
  disabled: false,
  readonly: false,
  loading: false,
  retainColor: true,
})

const switchValue = ref<SwitchValue>(false)

const visualStates = ref({
  default: false,
  outlined: true,
  tonal: true,
  retainColor: true,
  loading: true,
  disabled: false,
  readonly: true,
})

const deploymentStatus = ref<'published' | 'draft'>('draft')

const asyncState = ref({
  value: true,
  loading: false,
  status: 'idle' as 'idle' | 'saving' | 'success',
})

const handleAsyncUpdate = async (value: SwitchValue) => {
  asyncState.value.value = Boolean(value)
  asyncState.value.loading = true
  asyncState.value.status = 'saving'

  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
    asyncState.value.status = 'success'
  } finally {
    asyncState.value.loading = false
  }
}

const resetAsyncDemo = () => {
  asyncState.value = {
    value: true,
    loading: false,
    status: 'idle',
  }
}

const asyncFeedback = computed(() => {
  if (asyncState.value.status === 'saving') return pageText.value.asyncSavingFeedback
  if (asyncState.value.status === 'success') return pageText.value.asyncSuccessFeedback
  return pageText.value.asyncIdleFeedback
})

const asyncFeedbackColor = computed(() => {
  if (asyncState.value.status === 'saving') return 'warning'
  if (asyncState.value.status === 'success') return 'success'
  return 'secondary'
})

const slotValue = ref(false)
const termsDialogOpen = ref(false)

const validationMessage = computed(() => pageText.value.validationMessage)
const validationState = ref({
  isValid: undefined as boolean | undefined,
  accepted: false,
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
    tag: 'e-switch',
    attrs: [
      'v-model="releaseGate"',
      `label="${pageText.value.usageLabel}"`,
      `detail="${pageText.value.usageDetail}"`,
      `color="${color.value}"`,
      switchProperty.value.outlined && 'outlined',
      switchProperty.value.disabled && 'disabled',
      switchProperty.value.readonly && 'readonly',
      switchProperty.value.loading && 'loading',
      switchProperty.value.retainColor && 'retain-color',
    ],
  })
})

const visualVariantsTemplateCode = computed(() => `<EForm>
  <ESwitch v-model="visualStates.default" label="${pageText.value.visualStateLabels.default}" :color="color" />
  <ESwitch v-model="visualStates.outlined" label="${pageText.value.visualStateLabels.outlined}" outlined :color="color" />
  <ESwitch v-model="visualStates.tonal" label="${pageText.value.visualStateLabels.tonal}" tonal :color="color" />
  <ESwitch v-model="visualStates.retainColor" label="${pageText.value.visualStateLabels.retainColor}" retain-color :color="color" />
  <ESwitch v-model="visualStates.loading" label="${pageText.value.visualStateLabels.loading}" loading :color="color" />
  <ESwitch v-model="visualStates.disabled" label="${pageText.value.visualStateLabels.disabled}" disabled :color="color" />
  <ESwitch v-model="visualStates.readonly" label="${pageText.value.visualStateLabels.readonly}" readonly outlined :color="color" />
</EForm>`)

const customValuesTemplateCode = computed(() => `<ESwitch
  v-model="deploymentStatus"
  label="${pageText.value.customValuesLabel}"
  true-value="published"
  false-value="draft"
  detail="${pageText.value.customValuesDetail}"
/>`)

const customValuesTsCode = `const deploymentStatus = ref<'published' | 'draft'>('draft')`

const asyncTemplateCode = computed(() => `<ESwitch
  v-model="analyticsEnabled"
  label="${pageText.value.asyncLabel}"
  detail="${pageText.value.asyncDetail}"
  :loading="isSaving"
  @update:model-value="handleAsyncUpdate"
/>`)

const asyncTsCode = `const analyticsEnabled = ref(true)
const isSaving = ref(false)

const handleAsyncUpdate = async (value: boolean) => {
  analyticsEnabled.value = value
  isSaving.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
  } finally {
    isSaving.value = false
  }
}`

const slotsTemplateCode = computed(() => `<ESwitch v-model="slotValue">
  <template #label>
    ${pageText.value.slotLead}
    <a href="#" @click.prevent="dialogOpen = true">${pageText.value.slotLinkLabel}</a>
  </template>
</ESwitch>

<EDialog v-model="dialogOpen" max-width="420">
  <ECard class="pa-4 d-flex flex-column gap-3">
    <div>
      <div class="type-subtitle text-heading">${pageText.value.dialogTitle}</div>
      <p class="type-body mt-2 mb-0">
        ${pageText.value.dialogBody}
      </p>
    </div>

    <div class="d-flex justify-end">
      <EButton color="primary" @click="dialogOpen = false">
        ${pageText.value.dialogClose}
      </EButton>
    </div>
  </ECard>
</EDialog>`)

const slotsTsCode = `const slotValue = ref(false)
const dialogOpen = ref(false)`

const validationTemplateCode = computed(() => `<EForm
  v-model="isValid"
  validate-on-submit
  @submit="handleSubmit"
  @submit-invalid="handleInvalid"
>
  <ESwitch
    v-model="notificationsEnabled"
    label="${pageText.value.validationLabel}"
    :rules="[(value) => value === true || '${pageText.value.validationMessage}']"
  />

  <EButton color="primary" type="submit">
    ${pageText.value.validationButtonLabel}
  </EButton>
</EForm>`)

const validationTsCode = `const isValid = ref<boolean | undefined>()
const notificationsEnabled = ref(false)

const handleSubmit = () => {
  // Continue with the valid form submission flow.
}

const handleInvalid = () => {
  // Optional: react when validation blocks the submit.
}`
</script>
