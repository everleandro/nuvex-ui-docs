export const textareaCodeSnippets = {
  visualVariantsTemplateCode: `<EForm>
  <ETextarea v-model="visualVariantsProperty.default" label="Default" :rows="4" :color="color" />
  <ETextarea v-model="visualVariantsProperty.outlined" label="Outlined" :rows="4" outlined :color="color" />
  <ETextarea v-model="visualVariantsProperty.readonly" label="Readonly" :rows="4" readonly outlined :color="color" />
  <ETextarea v-model="visualVariantsProperty.disabled" label="Disabled" :rows="4" disabled :color="color" />
  <ETextarea v-model="visualVariantsProperty.floating" label="Floating" :rows="4" label-behavior="floating" :color="color" />
  <ETextarea v-model="visualVariantsProperty.floatingOutlined" label="Floating outlined" :rows="4" outlined label-behavior="floating" :color="color" />
</EForm>`,

  rowsAndLengthTemplateCode: `<EForm>
  <ETextarea v-model="rowsLengthProperty.short" :rows="2" :limit="80" counter label="Short note" :color="color" />
  <ETextarea v-model="rowsLengthProperty.medium" :rows="4" :limit="180" counter label="Summary" :color="color" />
  <ETextarea v-model="rowsLengthProperty.long" :rows="8" :limit="480" counter label="Detailed description" :color="color" />
</EForm>`,

  iconsAndAffixesTemplateCode: `<EForm>
  <ETextarea v-model="iconAffixProperty.prependInner" :prepend-inner-icon="$icon.account" :rows="4" label="prepend-inner" :color="color" />
  <ETextarea v-model="iconAffixProperty.appendInner" :append-inner-icon="$icon.email" :rows="4" label="append-inner" :color="color" />
  <ETextarea v-model="iconAffixProperty.prepend" :prepend-icon="$icon.form" :rows="4" label="prepend" :color="color" />
  <ETextarea v-model="iconAffixProperty.append" :append-icon="$icon.magnify" :rows="4" label="append" :color="color" />
  <ETextarea v-model="iconAffixProperty.affix" prefix="ID" suffix="chars" :rows="3" label="prefix/suffix" :color="color" />
</EForm>`,

  slotsCompositionTemplateCode: `<ETextarea
  v-model="slotsCompositionProperty.value"
  :rows="5"
  label="Release note"
  placeholder="Describe user-visible changes"
  :color="color"
>
  <template #prepend>
    <EAvatar :icon="$icon.account" size="small" color="secondary" />
  </template>
  <template #append-inner>
    <EButton :icon="$icon.send" :color="color" size="small" text />
  </template>
</ETextarea>`,

  validationTemplateCode: `<ECard :title="labels.cardTitle" :subtitle="statusMessage" elevation="sm">
  <EForm ref="validationFormRef" v-model="formIsValid" class="d-flex flex-column gap-3">
    <ETextfield v-model="model.subject" label="Subject" :rules="[requiredRule]" :color="color" />
    <ETextarea
      v-model="model.message"
      label="Message"
      label-behavior="floating"
      :rows="5"
      :limit="280"
      counter
      :rules="[requiredRule, minLengthRule]"
      :color="color"
    />

    <EFormColumn class="d-block">
      <EDivider />
      <div class="d-flex gap-2 flex-1 pt-4">
        <ESpacer />
        <EButton text @click="resetForm">{{ labels.cancel }}</EButton>
        <EButton :loading="submitting" :disabled="!canSubmit" color="primary" @click="submitForm">
          {{ labels.submit }}
        </EButton>
      </div>
    </EFormColumn>
  </EForm>
</ECard>`,

  validationTsCode: `import type { EForm } from 'nuvex-ui'

const labels = {
  submit: 'Send feedback',
  cancel: 'Cancel',
  idle: 'Complete required fields to continue',
  submitting: 'Sending feedback...',
  success: 'Feedback submitted successfully',
  canceled: 'Feedback form reset',
  cardTitle: 'Feedback form',
  cardSubtitle: 'Capture details with actionable context',
}

const validationFormRef = ref<EForm | null>(null)
const formIsValid = ref(false)
const submitting = ref(false)
const submitted = ref(false)
const wasCanceled = ref(false)
const model = ref({
    subject: '',
    message: '',
})

const requiredRule = (value: unknown) => {
  return Boolean(String(value ?? '').trim()) || 'This field is required'
}

const minLengthRule = (value: unknown) => {
  return String(value ?? '').trim().length >= 12 || 'Use at least 12 characters'
}

const canSubmit = computed(() => {
  return formIsValid.value && !submitting.value
})

const statusMessage = computed(() => {
  if (submitting.value) return labels.submitting
  if (wasCanceled.value) return labels.canceled
  if (submitted.value) return labels.success
  return labels.idle
})

const submitForm = async () => {
  const valid = await validationFormRef.value?.validate?.()
  if (!canSubmit.value || !valid) return

  submitting.value = true
  submitted.value = false
  wasCanceled.value = false

  try {
    await new Promise((resolve) => setTimeout(resolve, 600))
    submitted.value = true
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  validationFormRef.value?.reset?.()
  validationFormRef.value?.resetValidation?.()
  submitting.value = false
  submitted.value = false
  wasCanceled.value = true
}

const color = ref('primary')`,
} as const