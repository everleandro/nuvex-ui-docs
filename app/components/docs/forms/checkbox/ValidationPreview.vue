<template>
  <ECard class="docs-page__checkbox-validation-preview" elevation="sm" :title="validationFeedback">
    <EForm ref="validationFormRef" v-model="validationState.isValid">
      <ECheckbox v-model="validationState.termsAccepted" :label="labels.validationCheckboxLabel"
        :rules="[(value: boolean) => value === true || validationMessage]" :color="color" />
      <EFormColumn cols="12" class="d-flex gap-2">
        <ESpacer />
        <EButton text @click="resetValidationForm">{{ labels.validationCancelLabel }}</EButton>
        <EButton color="primary" :loading="validationState.submitting"
          :disabled="validationState.submitting || !validationState.isValid"
          @click="submitValidationForm">
          {{ labels.validationButtonLabel }}
        </EButton>
      </EFormColumn>
    </EForm>
  </ECard>
</template>

<script setup lang="ts">
import type { EForm } from 'nuvex-ui'

const props = defineProps<{
  color: string
}>()

interface CheckboxValidationLabels {
  validationCheckboxLabel: string
  validationMessage: string
  validationCancelLabel: string
  validationButtonLabel: string
  validationIdleFeedback: string
  validationSuccessFeedback: string
  validationSubmittingFeedback: string
  validationCanceledFeedback: string
}

const content = useDocsComponentI18nContent('pages.input.checkbox')

const labels = computed<CheckboxValidationLabels>(() => {
  const raw = content.value.labels.checkboxText as Partial<CheckboxValidationLabels> | undefined

  return {
    validationCheckboxLabel: raw?.validationCheckboxLabel ?? 'I accept the terms of service',
    validationMessage: raw?.validationMessage ?? 'You must accept the terms before continuing.',
    validationCancelLabel: raw?.validationCancelLabel ?? 'Cancel',
    validationButtonLabel: raw?.validationButtonLabel ?? 'Create account',
    validationIdleFeedback: raw?.validationIdleFeedback ?? 'Submit to validate the checkbox rule.',
    validationSuccessFeedback: raw?.validationSuccessFeedback ?? 'Form is valid. Ready to continue.',
    validationSubmittingFeedback: raw?.validationSubmittingFeedback ?? 'Submitting consent...',
    validationCanceledFeedback: raw?.validationCanceledFeedback ?? 'Consent form reset.',
  }
})

const validationMessage = computed(() => labels.value.validationMessage)
const validationFormRef = ref<EForm | null>(null)
const validationState = ref({
  isValid: false,
  termsAccepted: false,
  submitting: false,
  submitState: 'idle' as 'idle' | 'valid' | 'invalid' | 'canceled',
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
}

const validationFeedback = computed(() => {
  if (validationState.value.submitting) return labels.value.validationSubmittingFeedback
  if (validationState.value.submitState === 'canceled') return labels.value.validationCanceledFeedback
  if (validationState.value.submitState === 'invalid') return validationMessage.value
  if (validationState.value.submitState === 'valid') return labels.value.validationSuccessFeedback
  return labels.value.validationIdleFeedback
})

const color = computed(() => props.color)
</script>

<style lang="scss">
.docs-page__checkbox-validation-preview {
  width: 420px;
}
</style>
