<template>
  <ECard class="docs-page__radio-validation-preview" elevation="sm" :title="statusMessage">
    <EForm ref="methodsFormRef" v-model="formIsValid">
      <ERadioGroup v-model="selection" :label="labels.validationGroupLabel"
        :rules="[(value: RadioValue) => value != null || labels.validationMessage]" :color="color">
        <ERadio model-value="stable" :label="labels.validationOptions.stable" />
        <ERadio model-value="beta" :label="labels.validationOptions.beta" />
        <ERadio model-value="nightly" :label="labels.validationOptions.nightly" />
      </ERadioGroup>

      <EFormColumn class="d-flex gap-2">
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

type RadioValue = string | number | null | undefined

const props = defineProps<{
  color: string
}>()

interface RadioValidationLabels {
  validationGroupLabel: string
  validationOptions: {
    stable: string
    beta: string
    nightly: string
  }
  validationButtonLabel: string
  validationMessage: string
  validationIdleFeedback: string
  validationSuccessFeedback: string
  validationCancelLabel: string
  validationSubmittingFeedback: string
  validationCanceledFeedback: string
}

const content = useDocsComponentI18nContent('pages.input.radio')

const labels = computed<RadioValidationLabels>(() => {
  const raw = content.value.labels.radioText as Partial<RadioValidationLabels> | undefined

  return {
    validationGroupLabel: raw?.validationGroupLabel ?? 'Release track',
    validationOptions: raw?.validationOptions ?? {
      stable: 'Stable',
      beta: 'Beta',
      nightly: 'Nightly',
    },
    validationButtonLabel: raw?.validationButtonLabel ?? 'Save preferences',
    validationMessage: raw?.validationMessage ?? 'Select a release track before continuing.',
    validationIdleFeedback: raw?.validationIdleFeedback ?? 'Submit to validate the radio group rule.',
    validationSuccessFeedback: raw?.validationSuccessFeedback ?? 'Form is valid. Ready to continue.',
    validationCancelLabel: raw?.validationCancelLabel ?? 'Cancel',
    validationSubmittingFeedback: raw?.validationSubmittingFeedback ?? 'Saving preferences...',
    validationCanceledFeedback: raw?.validationCanceledFeedback ?? 'Radio preferences reset.',
  }
})

const methodsFormRef = ref<EForm | null>(null)
const selection = ref<RadioValue>(undefined)
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
.docs-page__radio-validation-preview {
  width: 420px;
}
</style>
