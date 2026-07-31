const layoutTemplateCode = `<EForm>
  <ERadioGroup v-model="environment" label="Horizontal options" detail="Choose how deployment targets should be arranged." row>
    <ERadio model-value="staging" label="Staging" />
    <ERadio model-value="production" label="Production" />
    <ERadio model-value="canary" label="Canary" />
  </ERadioGroup>

  <ERadioGroup v-model="environment" label="Vertical options" detail="Choose how deployment targets should be arranged.">
    <ERadio model-value="staging" label="Staging" />
    <ERadio model-value="production" label="Production" />
    <ERadio model-value="canary" label="Canary" />
  </ERadioGroup>
</EForm>`

const visualVariantsTemplateCode = `<EForm>
  <ERadioGroup v-model="visualStates.default" label="Default" :color="color">
    <ERadio model-value="auto" label="Auto" />
    <ERadio model-value="manual" label="Manual" />
  </ERadioGroup>
  <ERadioGroup v-model="visualStates.outlined" label="Outlined" outlined :color="color">
    <ERadio model-value="auto" label="Auto" />
    <ERadio model-value="manual" label="Manual" />
  </ERadioGroup>
  <ERadioGroup v-model="visualStates.tonal" label="Tonal" tonal :color="color">
    <ERadio model-value="auto" label="Auto" />
    <ERadio model-value="manual" label="Manual" />
  </ERadioGroup>
  <ERadioGroup v-model="visualStates.retainColor" label="Retain color" retain-color :color="color">
    <ERadio model-value="auto" label="Auto" />
    <ERadio model-value="manual" label="Manual" />
  </ERadioGroup>
  <ERadioGroup v-model="visualStates.disabled" label="Disabled" disabled :color="color">
    <ERadio model-value="auto" label="Auto" />
    <ERadio model-value="manual" label="Manual" />
  </ERadioGroup>
  <ERadioGroup v-model="visualStates.readonly" label="Readonly" readonly outlined :color="color">
    <ERadio model-value="auto" label="Auto" />
    <ERadio model-value="manual" label="Manual" />
  </ERadioGroup>
</EForm>`

const mandatoryTemplateCode = `<ERadioGroup
  v-model="membershipTier"
  mandatory
  label="Plan selection"
  detail="Select one plan before continuing."
>
  <ERadio model-value="free" label="Free" />
  <ERadio model-value="pro" label="Pro" />
  <ERadio model-value="enterprise" label="Enterprise" />
</ERadioGroup>`

const slotsTemplateCode = `<ERadioGroup v-model="releaseTrack">
  <template #label>
    Review the release policy
    <a href="#" @click.prevent="dialogOpen = true">before choosing a track</a>
  </template>

  <ERadio model-value="stable">
    <template #label>
      Stable channel
    </template>
  </ERadio>
  <ERadio model-value="beta" label="Beta" />
  <ERadio model-value="nightly" label="Nightly" />
</ERadioGroup>`

const validationTemplateCode = `<ECard elevation="sm" class="docs-page__radio-validation-preview" :subtitle="statusMessage">
  <EForm ref="methodsFormRef" v-model="formIsValid" class="d-flex flex-column gap-3">
    <ERadioGroup
      v-model="selection"
      label="Release track"
      :rules="[(value) => value != null || 'You must choose a release track before continuing.']"
      :color="color"
    >
      <ERadio model-value="stable" label="Stable" />
      <ERadio model-value="beta" label="Beta" />
      <ERadio model-value="nightly" label="Nightly" />
    </ERadioGroup>

    <EDivider />

    <EFormColumn cols="12" class="d-flex gap-2">
      <ESpacer />
      <EButton text @click="resetForm">
        Cancel
      </EButton>
      <EButton color="primary" :loading="submitting" :disabled="submitting || !formIsValid" @click="submitForm">
        Submit
      </EButton>
    </EFormColumn>
  </EForm>
</ECard>`

const validationTsCode = `import type { EForm } from 'nuvex-ui'

type RadioValue = string | number | null | undefined

const methodsFormRef = ref<EForm | null>(null)
const selection = ref<RadioValue>(undefined)
const formIsValid = ref(false)
const submitting = ref(false)
const submitted = ref(false)
const wasCanceled = ref(false)

const statusMessage = computed(() => {
  if (submitting.value) return 'Submitting release track...'
  if (wasCanceled.value) return 'Selection reset.'
  if (submitted.value) return 'Release track saved successfully.'
  return 'Submit to validate the radio group.'
})

const submitForm = async () => {
  const valid = await methodsFormRef.value?.validate?.()
  if (submitting.value || !valid) return

  submitting.value = true
  submitted.value = false
  wasCanceled.value = false

  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
    submitted.value = true
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  methodsFormRef.value?.reset?.()
  methodsFormRef.value?.resetValidation?.()
  submitting.value = false
  submitted.value = false
  wasCanceled.value = true
}`

export const radioCodeSnippets = {
  layoutTemplateCode,
  visualVariantsTemplateCode,
  mandatoryTemplateCode,
  mandatoryTsCode: `const membershipTier = ref<string | undefined>()`,
  slotsTemplateCode,
  slotsTsCode: `const releaseTrack = ref('stable')
const dialogOpen = ref(false)`,
  validationTemplateCode,
  validationTsCode,
} as const