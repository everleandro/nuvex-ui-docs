<template>
    <ECard class="select-validation-preview" :title="labels.cardTitle" :subtitle="validationStatusMessage" elevation="sm">
        <EForm ref="validationFormRef" v-model="validationFormIsValid" class="d-flex flex-column gap-3">
            <ESelect v-model="validationModel.assignee" :items="assigneeItems" :color="color" item-text="name"
                item-value="id" label="Assignee" :rules="[requiredRule]" />

            <ESelect v-model="validationModel.priority" :items="priorityItems" label="Priority" :rules="[requiredRule]"
                :color="color" />

            <ESelect v-model="validationModel.tags" :items="tagItems" multiple chip label="Tags" :color="color" />

            <EFormColumn class="d-block">
                <EDivider />
                <div class="d-flex gap-2 flex-1 pt-4">
                    <ESpacer />
                    <EButton text @click="resetValidationDemo">{{ labels.cancel }}</EButton>
                    <EButton :disabled="!validationCanSubmit" :loading="validationSubmitting"
                        @click="submitValidationDemo" color="primary">
                        {{ labels.submit }}
                    </EButton>
                </div>
            </EFormColumn>
        </EForm>
    </ECard>
</template>

<script setup lang="ts">
import type { EForm } from 'nuvex-ui'
import avatarManifest from '~~/assets/avatar-manifest.json'

type AvatarManifestEntry = {
    id: string
    name: string
    email: string
    avatarFile: string
    pravatarId: number
}

type Assignee = {
    id: string
    name: string
    email: string
    avatarSrc: string
}

const content = useDocsComponentI18nContent('pages.input.select')

const assigneeItems: Assignee[] = (avatarManifest as AvatarManifestEntry[]).map((entry) => ({
    id: entry.id,
    name: entry.name,
    email: entry.email,
    avatarSrc: `/img/avatar/${entry.avatarFile}`,
}))

const priorityItems = ['Low', 'Medium', 'High', 'Critical']
const tagItems = ['UI', 'Accessibility', 'API', 'Performance', 'Documentation']

const labels = computed(() => {
    return {
        cancel: content.value.labels.integrationText?.form?.cancel ?? 'Cancel',
        submit: content.value.labels.integrationText?.form?.submit ?? 'Create ticket',
        idle: content.value.labels.integrationText?.form?.idle ?? 'Complete required fields to continue',
        submitting: content.value.labels.integrationText?.form?.submitting ?? 'Creating ticket...',
        success: content.value.labels.integrationText?.form?.success ?? 'Ticket created successfully',
        canceled: content.value.labels.integrationText?.form?.canceled ?? 'Form reset',
        cardTitle: content.value.labels.integrationText?.form?.cardTitle ?? 'Support ticket',
        cardSubtitle: content.value.labels.integrationText?.form?.cardSubtitle ?? 'Route issue and set priority',
    }
})

const color = ref('primary')
const validationFormIsValid = ref(false)
const validationSubmitting = ref(false)
const validationStatusMessage = ref(labels.value.idle)
const validationFormRef = ref<EForm | null>(null)
const validationModel = ref({
    assignee: '',
    priority: 'Medium',
    tags: ['UI'],
})

const requiredRule = (value: unknown) => {
    if (Array.isArray(value)) {
        return value.length > 0 || 'This field is required'
    }

    return Boolean(value) || 'This field is required'
}

const validationCanSubmit = computed(() => {
    return validationFormIsValid.value && !validationSubmitting.value
})

const resetValidationDemo = () => {
    validationFormRef.value?.reset?.()
    validationFormRef.value?.resetValidation?.()
    validationSubmitting.value = false
    validationStatusMessage.value = labels.value.canceled
}

const submitValidationDemo = async () => {
    const valid = await validationFormRef.value?.validate?.()
    if (!validationCanSubmit.value || !valid) return

    validationSubmitting.value = true
    validationStatusMessage.value = labels.value.submitting

    try {
        await new Promise((resolve) => setTimeout(resolve, 900))
        validationStatusMessage.value = labels.value.success
    } finally {
        validationSubmitting.value = false
    }
}
</script>
<style scoped lang="scss">
.select-validation-preview {
    width: 600px;
    --e-color-disabled: rgba(155, 155, 155, 0.5);

    .e-divider {
        min-width: calc(100% + var(--card-padding) * 2);
        margin: 0 calc(var(--card-padding) * -1);
        opacity: 0.3;
    }
}
</style>
