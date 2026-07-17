<template>
    <ECard class="docs-page__text-field-validation" :title="labels.cardTitle" :subtitle="labels.cardSubtitle" elevation="sm"
        color="green-100">
        <EForm v-model="formIsValid" class="d-flex flex-column gap-3">
            <ETextfield v-model="firstName" :label="labels.firstNameLabel" :placeholder="labels.firstNamePlaceholder"
                :rules="[requiredRule]" />
            <ETextfield v-model="lastName" :label="labels.lastNameLabel" :placeholder="labels.lastNamePlaceholder"
                :rules="[requiredRule]" />
            <ETextfield v-model="email" :prepend-inner-icon="$icon.email" :label="labels.emailLabel"
                :placeholder="labels.emailPlaceholder" :rules="[requiredRule, emailRule]" />
            <ETextfield v-model="password" :prepend-inner-icon="$icon.lock" :label="labels.passwordLabel"
                :placeholder="labels.passwordPlaceholder" :rules="[requiredRule, passwordRule]" type="password" />
            <EFormColumn class="d-block">
                <EDivider />
                <div class="d-flex gap-2 flex-1 pt-4">
                    <ESpacer />
                    <EButton :loading="submitting" color="green-900" type="submit" :disabled="!formIsValid"
                        :append-icon="$icon.arrowRight" @click="submitForm">
                        {{ labels.submit }}
                    </EButton>
                </div>
            </EFormColumn>
        </EForm>
    </ECard>
</template>

<script setup lang="ts">
import { EFormColumn, ESpacer, ETextfield } from 'nuvex-ui'
import { useI18n } from 'vue-i18n'
import { useDocsComponentI18nContent } from '~/composables/useDocsI18nContent'
import { useValidationRules } from '~/composables/useValidationRules'

interface IntegrationFormLabels {
    submit: string
    cardTitle: string
    cardSubtitle: string
    firstNameLabel: string
    firstNamePlaceholder: string
    lastNameLabel: string
    lastNamePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
}

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.input.textField')

const labels = computed<IntegrationFormLabels>(() => {
    const raw = content.value.labels.integrationText?.form as Partial<IntegrationFormLabels> | undefined

    return {
        submit: raw?.submit ?? 'Log in',
        cardTitle: raw?.cardTitle ?? 'Registration Form',
        cardSubtitle: raw?.cardSubtitle ?? 'Basic details',
        firstNameLabel: raw?.firstNameLabel ?? 'First name',
        firstNamePlaceholder: raw?.firstNamePlaceholder ?? 'Jane',
        lastNameLabel: raw?.lastNameLabel ?? 'Last name',
        lastNamePlaceholder: raw?.lastNamePlaceholder ?? 'Doe',
        emailLabel: raw?.emailLabel ?? 'Email',
        emailPlaceholder: raw?.emailPlaceholder ?? 'name@company.com',
        passwordLabel: raw?.passwordLabel ?? 'Password',
        passwordPlaceholder: raw?.passwordPlaceholder ?? 'At least 6 characters',
    }
})

const email = ref('')
const firstName = ref('')
const lastName = ref('')
const password = ref('')
const formIsValid = ref(false)
const submitting = ref(false)

const {
    requiredRule,
    emailRule,
    passwordRule,
} = useValidationRules()

const canSubmit = computed(() => {
    return formIsValid.value && !submitting.value
})

const submitForm = async () => {
    if (!canSubmit.value) return

    submitting.value = true

    try {
        await new Promise((resolve) => setTimeout(resolve, 900))
    } finally {
        submitting.value = false
    }
}
</script>
<style scoped lang="scss">
.docs-page__text-field-validation {
    width: 600px;
    --e-color-input: var(--card-text);
    --e-color-disabled: rgba(155, 155, 155, 0.5);
    --e-contrast-disabled: rgba(255, 255, 255, 0.68);
    --e-color-border: var(--card-text);

    .e-divider {
        min-width: calc(100% + var(--card-padding) * 2);
        margin: 0 calc(var(--card-padding) * -1);
        opacity: 0.3;
    }
}
</style>
