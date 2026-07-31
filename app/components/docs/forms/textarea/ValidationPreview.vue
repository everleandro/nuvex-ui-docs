<template>
  <ECard class="docs-page__textarea-validation-preview" :title="labels.cardTitle" :subtitle="statusMessage" elevation="sm">
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
  </ECard>
</template>

<script setup lang="ts">
import type { EForm } from 'nuvex-ui'

const props = defineProps<{
  color: string
}>()

interface TextareaValidationLabels {
  submit: string
  cancel: string
  idle: string
  submitting: string
  success: string
  canceled: string
  cardTitle: string
  cardSubtitle: string
}

const content = useDocsComponentI18nContent('pages.input.textarea')

const labels = computed<TextareaValidationLabels>(() => {
  const raw = content.value.labels.formText?.form as Partial<TextareaValidationLabels> | undefined

  return {
    submit: raw?.submit ?? 'Send feedback',
    cancel: raw?.cancel ?? 'Cancel',
    idle: raw?.idle ?? 'Complete required fields to continue',
    submitting: raw?.submitting ?? 'Sending feedback...',
    success: raw?.success ?? 'Feedback submitted successfully',
    canceled: raw?.canceled ?? 'Feedback form reset',
    cardTitle: raw?.cardTitle ?? 'Feedback form',
    cardSubtitle: raw?.cardSubtitle ?? 'Capture details with actionable context',
  }
})

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
  if (submitting.value) return labels.value.submitting
  if (wasCanceled.value) return labels.value.canceled
  if (submitted.value) return labels.value.success
  return labels.value.idle
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

const color = computed(() => props.color)
</script>

<style lang="scss">
.docs-page__textarea-validation-preview {
  width: 600px;
}
</style>