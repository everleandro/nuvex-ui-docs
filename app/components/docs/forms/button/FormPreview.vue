<template>
    <ECard class="docs-page__button-integration-form-preview" title="Form Title" :subtitle="statusMessage"
        elevation="sm" color="green-100">
        <EForm v-model="formIsValid" class="d-flex flex-column gap-3">
            <ETextfield v-model="email" :prepend-icon="$icon.email" :label="labels.emailLabel"
                :placeholder="labels.emailPlaceholder" :rules="[requiredRule, emailRule]" />
            <ETextfield v-model="password" :prepend-icon="$icon.lock" :label="labels.passwordLabel"
                :placeholder="labels.passwordPlaceholder" :rules="[requiredRule, passwordRule]" type="password" />
        </EForm>
        <EDivider />
        <div class="d-flex gap-2 flex-1">
            <ESpacer />
            <EButton text @click="resetForm">
                {{ labels.cancel }}
            </EButton>
            <EButton :loading="submitting" :disabled="!canSubmit" color="primary" @click="submitForm">
                {{ labels.submit }}
            </EButton>
        </div>
    </ECard>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useValidationRules } from '~/composables/useValidationRules'
import { useDocsComponentI18nContent } from '~/composables/useDocsI18nContent'

interface IntegrationFormLabels {
    submit: string
    cancel: string
    idle: string
    submitting: string
    success: string
    canceled: string
    emailLabel: string
    emailPlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
}

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.button.button')

const labels = computed<IntegrationFormLabels>(() => {
    const raw = content.value.labels.integrationText?.form as Partial<IntegrationFormLabels> | undefined

    return {
        submit: raw?.submit ?? 'Log in',
        cancel: raw?.cancel ?? 'Cancel',
        idle: raw?.idle ?? 'Enter credentials to enable login',
        submitting: raw?.submitting ?? 'Signing in...',
        success: raw?.success ?? 'Login successful',
        canceled: raw?.canceled ?? 'Login form reset',
        emailLabel: raw?.emailLabel ?? 'Email',
        emailPlaceholder: raw?.emailPlaceholder ?? 'name@company.com',
        passwordLabel: raw?.passwordLabel ?? 'Password',
        passwordPlaceholder: raw?.passwordPlaceholder ?? 'At least 6 characters',
    }
})

const email = ref('')
const password = ref('')
const formIsValid = ref(false)
const submitting = ref(false)
const submitted = ref(false)
const wasCanceled = ref(false)

const {
    requiredRule,
    emailRule,
    passwordRule,
} = useValidationRules()

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
    if (!canSubmit.value) return

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
    email.value = ''
    password.value = ''
    formIsValid.value = false
    submitting.value = false
    submitted.value = false
    wasCanceled.value = true
}
</script>
<style scoped lang="scss">
.docs-page__button-integration-form-preview {
    width: 400px;
    --e-color-input: var(--card-text);
    --e-color-disabled: rgba(155, 155, 155, 0.5);
    --e-contrast-disabled: rgba(255, 255, 255, 0.68);
}
</style>
