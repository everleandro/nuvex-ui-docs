const visualVariantsTemplateCode = `<EForm>
  <ESwitch v-model="visualStates.default" lg="6" label="Default" :color="color" />
  <ESwitch v-model="visualStates.outlined" lg="6" label="Outlined" outlined :color="color" />
  <ESwitch v-model="visualStates.tonal" lg="6" label="Tonal" tonal :color="color" />
  <ESwitch v-model="visualStates.retainColor" lg="6" label="Retain color" retain-color :color="color" />
  <ESwitch v-model="visualStates.loading" lg="6" label="Loading" loading :color="color" />
  <ESwitch v-model="visualStates.disabled" lg="6" label="Disabled" disabled :color="color" />
  <ESwitch v-model="visualStates.readonly" lg="6" label="Readonly" readonly outlined :color="color" />
</EForm>`

const customValuesTemplateCode = `<EForm>
  <ESwitch
    v-model="deploymentStatus"
    lg="8"
    label="Publish changes"
    true-value="published"
    false-value="draft"
    detail="Maps switch state to deployment status values."
    :color="color"
  />

  <EFormColumn lg="4">
    <ECard elevation="sm" subtitle="Current model value">
      <ECard :color="deploymentStatus === 'published' ? 'success' : 'warning'" tonal>
        {{ deploymentStatus }}
      </ECard>
    </ECard>
  </EFormColumn>
</EForm>`

const asyncTemplateCode = `<ECard elevation="sm" style="width: 420px;">
  <ECard :color="asyncFeedbackColor" tonal>
    {{ asyncFeedback }}
  </ECard>

  <ESwitch
    v-model="asyncState.value"
    label="Live analytics"
    detail="Persist the preference before enabling session tracking."
    :loading="asyncState.loading"
    :color="color"
    @update:model-value="handleAsyncUpdate"
  />

  <EButton :disabled="asyncState.loading" :color="color" block class="mt-4" @click="resetAsyncDemo">
    Reset state
  </EButton>
</ECard>`

const slotsTemplateCode = `<ESwitch v-model="slotValue" :color="color">
  <template #label>
    I reviewed the
    <a href="#" @click.prevent="termsDialogOpen = true" class="primary--text">environment policy</a>
  </template>
</ESwitch>

<EDialog v-model="termsDialogOpen" max-width="420">
  <ECard class="pa-4 d-flex flex-column gap-3">
    <div>
      <div class="type-subtitle text-heading">Environment policy</div>
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

const validationTemplateCode = `<ECard elevation="sm" class="docs-page__switch-validation-preview" :subtitle="statusMessage">
  <EForm ref="methodsFormRef" v-model="formIsValid">
    <ESwitch
      v-model="accepted"
      label="Enable production notifications"
      :rules="[(value) => value === true || 'Enable this switch before continuing.']"
      :color="color"
    />

    <EFormColumn cols="12" class="d-flex gap-2">
      <ESpacer />
      <EButton text @click="resetForm">
        Cancel
      </EButton>
      <EButton color="primary" :loading="submitting" :disabled="submitting || !formIsValid" @click="submitForm">
        Continue
      </EButton>
    </EFormColumn>
  </EForm>
</ECard>`

const validationTsCode = `import type { EForm } from 'nuvex-ui'

const methodsFormRef = ref<EForm | null>(null)
const accepted = ref(false)
const formIsValid = ref(false)
const submitting = ref(false)

const submitForm = async () => {
  const valid = await methodsFormRef.value?.validate?.()
  if (submitting.value || !valid) return

  submitting.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  methodsFormRef.value?.reset?.()
  methodsFormRef.value?.resetValidation?.()
  submitting.value = false
}`

export const switchCodeSnippets = {
  visualVariantsTemplateCode,
  customValuesTemplateCode,
  customValuesTsCode: `const deploymentStatus = ref<'published' | 'draft'>('draft')`,
  asyncTemplateCode,
  asyncTsCode: `const asyncState = ref({
  value: true,
  loading: false,
  status: 'idle' as 'idle' | 'saving' | 'success',
})

const asyncFeedback = computed(() => {
  if (asyncState.value.status === 'saving') return 'Saving preference...'
  if (asyncState.value.status === 'success') return 'Preference saved successfully.'
  return 'Toggle the switch to simulate an async update.'
})

const asyncFeedbackColor = computed(() => {
  if (asyncState.value.status === 'saving') return 'warning'
  if (asyncState.value.status === 'success') return 'success'
  return 'secondary'
})

const handleAsyncUpdate = async (value: boolean) => {
  asyncState.value.value = value
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
}`,
  slotsTemplateCode,
  slotsTsCode: `const slotValue = ref(false)
const termsDialogOpen = ref(false)`,
  validationTemplateCode,
  validationTsCode,
} as const