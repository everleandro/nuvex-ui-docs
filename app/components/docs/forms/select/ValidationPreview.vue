<template>
    <ECard class="select-validation-preview" :title="labels.cardTitle" :subtitle="labels.cardSubtitle" elevation="sm"
        color="green-100">
        <EForm ref="validationFormRef" v-model="validationFormIsValid" class="d-flex flex-column gap-3">
            <ESelect v-model="validationModel.assignee" :items="assigneeItems" color="green-900" item-text="name"
                item-value="id" label="Assignee" :rules="[requiredRule]" />

            <ESelect v-model="validationModel.priority" :items="priorityItems" label="Priority" :rules="[requiredRule]"
                color="green-900" />

            <ESelect v-model="validationModel.tags" :items="tagItems" multiple chip label="Tags" color="green-900" />

            <EFormColumn class="d-block">
                <EDivider />
                <div class="d-flex gap-2 flex-1 pt-4">
                    <ESpacer />
                    <EButton text @click="resetValidationDemo">Reset</EButton>
                    <EButton :disabled="!validationCanSubmit" :loading="validationSubmitting"
                        @click="submitValidationDemo" color="green-800">
                        {{ labels.submit }}
                    </EButton>
                </div>
            </EFormColumn>
        </EForm>
    </ECard>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
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

const { locale } = useI18n()

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
        submit: content.value.labels.integrationText?.form?.submit ?? 'Create ticket',
        idle: content.value.labels.integrationText?.form?.idle ?? 'Complete required fields to continue',
        submitting: content.value.labels.integrationText?.form?.submitting ?? 'Creating ticket...',
        success: content.value.labels.integrationText?.form?.success ?? 'Ticket created successfully',
        canceled: content.value.labels.integrationText?.form?.canceled ?? 'Form reset',
        cardTitle: content.value.labels.integrationText?.form?.cardTitle ?? 'Support ticket',
        cardSubtitle: content.value.labels.integrationText?.form?.cardSubtitle ?? 'Route issue and set priority',
    }
})

const validationFormIsValid = ref(false)
const validationSubmitting = ref(false)
const validationStatusMessage = ref(labels.value.idle)
const validationFormRef = ref<{ reset?: () => void } | null>(null)
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
}

const submitValidationDemo = async () => {
    if (!validationCanSubmit.value) return

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
    --e-color-input: var(--card-text);
    --e-color-disabled: rgba(155, 155, 155, 0.5);
    --e-contrast-disabled: rgba(255, 255, 255, 0.68);
    --e-color-border: var(--card-text);

    .e-divider {
        min-width: calc(100% + var(--card-padding) * 2);
        margin: 0 calc(var(--card-padding) * -1);
        opacity: 0.3;
    }

    .e-card::before {
        content: "";
        border-radius: inherit;
        opacity: .1;
        pointer-events: none;
        background-color: currentColor;
        transition: opacity .2s cubic-bezier(.4, 0, .6, 1);
        position: absolute;
        inset: 0;

    }
}
</style>
