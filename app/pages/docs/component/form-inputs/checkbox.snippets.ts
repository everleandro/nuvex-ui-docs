const visualVariantsTemplateCode = `<EForm>
  <ECheckbox v-model="visualStates.default" label="Default" :color="color" />
  <ECheckbox v-model="visualStates.outlined" label="Outlined" outlined :color="color" />
  <ECheckbox v-model="visualStates.tonal" label="Tonal" tonal :color="color" />
  <ECheckbox v-model="visualStates.retainColor" label="Retain color" retain-color :color="color" />
  <ECheckbox v-model="visualStates.active" label="Active" :color="color" />
  <ECheckbox v-model="visualStates.disabled" label="Disabled" disabled :color="color" />
  <ECheckbox v-model="visualStates.readonly" label="Readonly" readonly outlined :color="color" />
</EForm>`

const customValuesTemplateCode = `<ECheckbox
  v-model="releaseStatus"
  label="Release checklist"
  true-value="ready"
  false-value="hold"
  detail="Toggle to mark deployment readiness"
/>`

const slotsTemplateCode = `<ECheckbox v-model="slotChecked">
  <template #label>
    I agree to the
    <a href="#" @click.prevent="termsDialogOpen = true">Terms and Conditions</a>
  </template>
</ECheckbox>

<EDialog v-model="termsDialogOpen" max-width="420">
  <ECard class="pa-4 d-flex flex-column gap-3">
    <div>
      <div class="type-subtitle text-heading">Terms and Conditions</div>
      <p class="type-body mt-2 mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, velit ut tristique blandit, lectus nibh pharetra massa, id posuere justo nisi vitae arcu.
      </p>
    </div>

    <div class="d-flex justify-end">
      <EButton color="primary" @click="termsDialogOpen = false">
        Close
      </EButton>
    </div>
  </ECard>
</EDialog>`

const validationTemplateCode = `<ECard elevation="sm" class="pa-4" style="width: 420px;" :subtitle="validationFeedback">
  <EForm ref="validationFormRef" v-model="validationState.isValid" class="d-flex flex-column gap-3">
    <ECheckbox
      v-model="validationState.termsAccepted"
      label="I accept the terms of service"
      :rules="[(value) => value === true || 'You must accept the terms before continuing.']"
      :color="color"
    />

    <EDivider />

    <EFormColumn cols="12" class="d-flex gap-2">
      <ESpacer />
      <EButton text @click="resetValidationForm">
        Cancel
      </EButton>
      <EButton
        color="primary"
        :loading="validationState.submitting"
        :disabled="validationState.submitting || !validationState.isValid"
        @click="submitValidationForm"
      >
        Create account
      </EButton>
    </EFormColumn>
  </EForm>
</ECard>`

const validationTsCode = `import type { EForm } from 'nuvex-ui'

const validationFormRef = ref<EForm | null>(null)
const validationState = ref({
  isValid: false,
  termsAccepted: false,
  submitting: false,
  submitState: 'idle' as 'idle' | 'valid' | 'invalid' | 'canceled',
})

const validationFeedback = computed(() => {
  if (validationState.value.submitting) return 'Submitting consent...'
  if (validationState.value.submitState === 'canceled') return 'Consent form reset.'
  if (validationState.value.submitState === 'invalid') return 'You must accept the terms before continuing.'
  if (validationState.value.submitState === 'valid') return 'Form is valid. Ready to continue.'
  return 'Submit to validate the checkbox rule.'
})

const submitValidationForm = async () => {
  const valid = await validationFormRef.value?.validate?.()

  if (validationState.value.submitting) return

  if (!valid) {
    validationState.value.submitState = 'invalid'
    return
  }

  validationState.value.submitting = true
  validationState.value.submitState = 'valid'

  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
  } finally {
    validationState.value.submitting = false
  }
}

const resetValidationForm = () => {
  validationFormRef.value?.reset?.()
  validationFormRef.value?.resetValidation?.()
  validationState.value.submitting = false
  validationState.value.submitState = 'canceled'
}`

export const checkboxCodeSnippets = {
  visualVariantsTemplateCode,
  customValuesTemplateCode,
  customValuesTsCode: `const releaseStatus = ref<'ready' | 'hold'>('hold')`,
  slotsTemplateCode,
  slotsTsCode: `const slotChecked = ref(false)
const termsDialogOpen = ref(false)`,
  validationTemplateCode,
  validationTsCode,
} as const