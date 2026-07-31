<template>
  <ECard class="docs-page__switch-validation-preview" elevation="sm" :subtitle="statusMessage">
    <EForm ref="methodsFormRef" v-model="formIsValid">
      <ESwitch
        v-model="accepted"
        :label="labels.validationLabel"
        :rules="[(value: boolean) => value === true || labels.validationMessage]"
        :color="color"
      />

      <EFormColumn cols="12" class="d-flex gap-2">
        <ESpacer />
        <EButton text @click="resetForm">{{ labels.validationCancelLabel }}</EButton>
        <EButton color="primary" :loading="submitting" :disabled="submitting || !formIsValid" @click="submitForm">
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

interface SwitchValidationLabels {
  validationLabel: string
  validationButtonLabel: string
  validationMessage: string
  validationIdleFeedback: string
  validationSuccessFeedback: string
  validationCancelLabel: string
  validationSubmittingFeedback: string
  validationCanceledFeedback: string
}

const content = useDocsComponentI18nContent('pages.input.switch')

const labels = computed<SwitchValidationLabels>(() => {
  const raw = content.value.labels.switchText as Partial<SwitchValidationLabels> | undefined

  return {
    validationLabel: raw?.validationLabel ?? 'Enable production notifications',
    validationButtonLabel: raw?.validationButtonLabel ?? 'Continue',
    validationMessage: raw?.validationMessage ?? 'Enable this switch before continuing.',
    validationIdleFeedback: raw?.validationIdleFeedback ?? 'Submit to validate the switch rule.',
    validationSuccessFeedback: raw?.validationSuccessFeedback ?? 'Form is valid. Ready to continue.',
    validationCancelLabel: raw?.validationCancelLabel ?? 'Cancel',
    validationSubmittingFeedback: raw?.validationSubmittingFeedback ?? 'Saving notification preference...',
    validationCanceledFeedback: raw?.validationCanceledFeedback ?? 'Notification preference reset.',
  }
})

const methodsFormRef = ref<EForm | null>(null)
const accepted = ref(false)
const formIsValid = ref(false)
const submitting = ref(false)
const submitted = ref(false)
const wasCanceled = ref(false)

const statusMessage = computed(() => {
  if (submitting.value) return labels.value.validationSubmittingFeedback
  if (wasCanceled.value) return labels.value.validationCanceledFeedback
  if (submitted.value) return labels.value.validationSuccessFeedback
  return labels.value.validationIdleFeedback
})

const color = computed(() => props.color)

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
}
</script>

<style lang="scss">
.docs-page__switch-validation-preview {
  width: 420px;
}
</style>
