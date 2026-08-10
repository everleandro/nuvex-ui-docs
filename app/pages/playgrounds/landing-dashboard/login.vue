<template>
    <EMain class="landing-dashboard__theme">
        <EContent class="d-flex justify-center items-center" style="height: 100dvh;">
            <ECard title="Login" style="max-width: 450px;" elevation="sm">
                <EForm ref="loginform" v-model="formValid" label-behavior="floating">
                    <ETextfield label="Email" placeholder="Enter your email" v-model="data.email"
                        :rules="[requiredRule, emailRule]" />
                    <ETextfield label="Password" placeholder="Enter your password" v-model="data.password"
                        type="password" :rules="[requiredRule]" />
                    <ECheckbox label="Remember me" v-model="data.remember" />
                    <EFormColumn>
                        <EButton type="submit" color="primary" :disabled="!formValid" block @click="submitForm">Submit
                        </EButton>
                    </EFormColumn>
                </EForm>
            </ECard>
        </EContent>
    </EMain>
</template>
<script setup lang="ts">
import type { EForm } from 'nuvex-ui'
const { locale } = useI18n()
import { withLocalePrefix } from '~/utils/locale-path'
definePageMeta({
    layout: false,
})
const { $router } = useNuxtApp()
const loginform = ref<EForm | null>(null)
const { requiredRule, emailRule } = useValidationRules()
const formValid = ref(true)
const data = reactive({
    email: 'santiestebanjimenez@gmail.com',
    password: '12345678',
    remember: true,
})

const submitForm = async () => {
    await loginform.value?.validate()
    if (formValid.value) {
        $router.push({ path: withLocalePrefix('/playgrounds/landing-dashboard', locale.value) })
    }
}
</script>