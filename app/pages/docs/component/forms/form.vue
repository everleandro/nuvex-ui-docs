<template>
    <article class="docs-page form-page">
        <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

        <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description-html="sections.usage.descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
                <template #panel-design>
                    <DocsFormsFormUsagePreview :color="color" :outlined="formControls.outlined"
                        :disabled="formControls.disabled" :readonly="formControls.readonly"
                        :retain-color="formControls.retainColor" :table="formControls.table"
                        :field-color="formControls.fieldColor" />
                </template>

                <template #panel-template>
                    <CodePanel :code="usageHtmlCode" />
                </template>

                <template #form>
                    <EForm>
                        <ESelect v-model="color" cols="24" :items="colors" :label="controlLabel('color')"
                            :color="color" />
                        <ECheckbox v-model="formControls.outlined" cols="24" :label="controlLabel('outlined')"
                            :color="color" />
                        <ECheckbox v-model="formControls.disabled" cols="24" :label="controlLabel('disabled')"
                            :color="color" />
                        <ECheckbox v-model="formControls.readonly" cols="24" :label="controlLabel('readonly')"
                            :color="color" />
                        <ECheckbox v-model="formControls.retainColor" cols="24" :label="controlLabel('retainColor')"
                            :color="color" />
                    </EForm>
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['inherited-behavior'].key" :title="sections['inherited-behavior'].title"
            :description-html="sections['inherited-behavior'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
                <template #panel-design>
                    <ECard elevation="sm">
                        <EForm :label-behavior="inheritedBehavior.labelBehavior" :outlined="inheritedBehavior.outlined"
                            :color="color">
                            <ETextfield v-model="inheritedModel.firstName" md="6" label="First name" />
                            <ESelect v-model="inheritedModel.status" md="6" :items="statusItems"
                                label="Environment status" />
                            <ETextfield v-model="inheritedModel.companyName" label="Company legal name" />
                            <ETextarea v-model="inheritedModel.notes" label="Operational notes" />
                        </EForm>
                    </ECard>
                </template>

                <template #panel-template>
                    <CodePanel :code="inheritedTemplateCode" />
                </template>

                <template #panel-ts>
                    <CodePanel :code="inheritedTsCode" language="ts" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['table-layout'].key" :title="sections['table-layout'].title"
            :description-html="sections['table-layout'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
                <template #panel-design>
                    <ECard :title="tableText.cardTitle" :subtitle="tableText.cardSubtitle" elevation="sm">
                        <EForm table :color="color" :table-line-color="tableConfig.tableLineColor || undefined"
                            :table-cell-background-color="tableConfig.tableCellBackgroundColor || undefined"
                            :table-field-color="tableConfig.tableFieldColor || undefined"
                            :table-line-opacity="tableConfig.tableLineOpacity">
                            <ETextfield v-model="tableModel.ticketId" md="6" :label="tableText.ticketLabel" />
                            <ESelect v-model="tableModel.assignee" md="6" :items="assigneeItems"
                                :label="tableText.assigneeLabel" />
                            <ESelect v-model="tableModel.environment" md="6" :items="environmentItems"
                                :label="tableText.environmentLabel" />
                            <ECheckbox v-model="tableModel.requiresApproval" md="6" :label="tableText.approvalLabel" />
                        </EForm>
                    </ECard>
                </template>

                <template #panel-template>
                    <CodePanel :code="tableTemplateCode" />
                </template>

                <template #panel-ts>
                    <CodePanel :code="tableTsCode" language="ts" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['form-column'].key" :title="sections['form-column'].title"
            :description-html="sections['form-column'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
                <template #panel-design>
                    <ECard :title="columnText.cardTitle" :subtitle="columnText.cardSubtitle" elevation="sm">
                        <EForm :color="color" label-min-width="130">
                            <ETextfield v-model="columnModel.name" lg="12" label="Workflow name" />
                            <ESelect v-model="columnModel.owner" lg="12" :items="assigneeItems" label="Owner" />

                            <EFormColumn class="d-flex gap-4">
                                <ESpacer />
                                <EButton color="primary" type="submit">{{ columnText.primaryAction }}</EButton>
                            </EFormColumn>
                        </EForm>
                    </ECard>
                </template>

                <template #panel-template>
                    <CodePanel :code="columnTemplateCode" />
                </template>

                <template #panel-ts>
                    <CodePanel :code="columnTsCode" language="ts" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['validation-lifecycle'].key" :title="sections['validation-lifecycle'].title"
            :description-html="sections['validation-lifecycle'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
                <template #panel-design>
                    <ECard :title="validationText.cardTitle" :subtitle="validationFeedback" elevation="sm"
                        style="width: 500px;">
                        <EForm v-model="validationState.isValid" validate-on-submit label-behavior="floating"
                            focus-first-invalid :color="color" @submit="handleValidationSubmit"
                            @submit-invalid="handleValidationInvalid">
                            <ETextfield v-model="validationModel.subject" md="12" :label="validationText.subjectLabel"
                                :rules="[requiredRule]" />
                            <ETextarea v-model="validationModel.message" md="12" :label="validationText.messageLabel"
                                :rules="[requiredRule]" />
                            <ECheckbox v-model="validationModel.policyAccepted" md="12"
                                :label="validationText.policyLabel"
                                :rules="[(value: boolean) => value === true || validationText.policyMessage]" />
                            <EFormColumn cols="12">
                                <EButton color="primary" block type="submit">{{ validationText.submitLabel }}</EButton>
                            </EFormColumn>
                        </EForm>
                    </ECard>
                </template>

                <template #panel-template>
                    <CodePanel :code="validationTemplateCode" />
                </template>

                <template #panel-ts>
                    <CodePanel :code="validationTsCode" language="ts" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['exposed-methods'].key" :title="sections['exposed-methods'].title"
            :description-html="sections['exposed-methods'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
                <template #panel-design>
                    <ECard :title="methodsText.cardTitle" :subtitle="methodsFeedback" elevation="sm"
                        style="width: 560px;">
                        <EForm ref="methodsFormRef" v-model="methodsState.isValid" :color="color">
                            <ETextfield v-model="methodsModel.name" label="Name" :rules="[requiredRule]" />
                            <ETextfield v-model="methodsModel.email" label="Email" :rules="[requiredRule]" />
                            <EFormColumn cols="12" class="d-flex gap-2">
                                <ESpacer />
                                <EButton color="primary" @click="runValidate">{{ methodsText.validateAction }}</EButton>
                                <EButton color="secondary" @click="runResetValidation">{{
                                    methodsText.resetValidationAction }}</EButton>
                            </EFormColumn>
                        </EForm>
                    </ECard>
                </template>

                <template #panel-template>
                    <CodePanel :code="methodsTemplateCode" />
                </template>

                <template #panel-ts>
                    <CodePanel :code="methodsTsCode" language="ts" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
            <DocsApiTable :api-reference="localizedFormApiReference" />
        </DocsSection>
    </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { RouteLocationAsString } from 'vue-router'
import { formApiReference } from '~/api-reference/forms/form'
import { formApiReferenceEs } from '~/api-reference/forms/form-es'

type FormSectionKey =
    | 'usage'
    | 'inherited-behavior'
    | 'table-layout'
    | 'form-column'
    | 'validation-lifecycle'
    | 'exposed-methods'
    | 'props'

type FormInstance = {
    validate?: () => Promise<boolean>
    reset?: () => void
    resetValidation?: () => void
}

interface FormTextLabels {
    fieldColorLabel: string
}

interface FormTableLabels {
    cardTitle: string
    cardSubtitle: string
    assigneeLabel: string
    environmentLabel: string
    ticketLabel: string
    approvalLabel: string
}

interface FormColumnLabels {
    cardTitle: string
    cardSubtitle: string
    primaryAction: string
    secondaryAction: string
    tertiaryAction: string
    helperTitle: string
    helperBody: string
}

interface FormValidationLabels {
    cardTitle: string
    cardSubtitle: string
    subjectLabel: string
    messageLabel: string
    policyLabel: string
    submitLabel: string
    invalidFeedback: string
    validFeedback: string
    idleFeedback: string
    requiredMessage: string
    policyMessage: string
}

interface FormMethodsLabels {
    cardTitle: string
    cardSubtitle: string
    validateAction: RouteLocationAsString
    resetValidationAction: string
    stateIdle: string
    stateValid: string
    stateInvalid: string
    stateReset: string
    stateResetValidation: string
}

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.form.form')

const getRequiredSection = (key: FormSectionKey) => {
    const section = content.value.sections.find((value) => value.key === key)

    if (!section) {
        throw createError({
            statusCode: 500,
            statusMessage: `Form documentation section missing: ${key}`,
        })
    }

    return section
}

const sections = computed(() => ({
    usage: getRequiredSection('usage'),
    'inherited-behavior': getRequiredSection('inherited-behavior'),
    'table-layout': getRequiredSection('table-layout'),
    'form-column': getRequiredSection('form-column'),
    'validation-lifecycle': getRequiredSection('validation-lifecycle'),
    'exposed-methods': getRequiredSection('exposed-methods'),
    props: getRequiredSection('props'),
}))

useSeoMeta({
    title: computed(() => content.value.seo.title),
    description: computed(() => content.value.seo.description),
})

const { tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
    return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const formText = computed<FormTextLabels>(() => {
    const raw = content.value.labels.formText as Partial<FormTextLabels> | undefined

    return {
        fieldColorLabel: raw?.fieldColorLabel ?? 'fieldColor',
    }
})

const tableText = computed<FormTableLabels>(() => {
    const raw = content.value.labels.tableText as Partial<FormTableLabels> | undefined

    return {
        cardTitle: raw?.cardTitle ?? 'Structured approval form',
        cardSubtitle: raw?.cardSubtitle ?? 'Table layout for dense business inputs',
        assigneeLabel: raw?.assigneeLabel ?? 'Assignee',
        environmentLabel: raw?.environmentLabel ?? 'Environment',
        ticketLabel: raw?.ticketLabel ?? 'Ticket ID',
        approvalLabel: raw?.approvalLabel ?? 'Requires approval',
    }
})

const columnText = computed<FormColumnLabels>(() => {
    const raw = content.value.labels.columnText as Partial<FormColumnLabels> | undefined

    return {
        cardTitle: raw?.cardTitle ?? 'Action layout with Form Column',
        cardSubtitle: raw?.cardSubtitle ?? 'Group fields and actions without breaking alignment',
        primaryAction: raw?.primaryAction ?? 'Save changes',
        secondaryAction: raw?.secondaryAction ?? 'Reset',
        tertiaryAction: raw?.tertiaryAction ?? 'Validate only',
        helperTitle: raw?.helperTitle ?? 'Review before submit',
        helperBody: raw?.helperBody ?? 'Use Form Column to align action content with the form grid.',
    }
})

const validationText = computed<FormValidationLabels>(() => {
    const raw = content.value.labels.validationText as Partial<FormValidationLabels> | undefined

    return {
        cardTitle: raw?.cardTitle ?? 'Submit-time validation flow',
        cardSubtitle: raw?.cardSubtitle ?? 'Coordinate validation from the parent form',
        subjectLabel: raw?.subjectLabel ?? 'Subject',
        messageLabel: raw?.messageLabel ?? 'Message',
        policyLabel: raw?.policyLabel ?? 'I reviewed the release policy',
        submitLabel: raw?.submitLabel ?? 'Submit form',
        invalidFeedback: raw?.invalidFeedback ?? 'Validation blocked the submit. Review the highlighted fields.',
        validFeedback: raw?.validFeedback ?? 'Form is valid. Submit handlers can continue safely.',
        idleFeedback: raw?.idleFeedback ?? 'Submit the form to test validation lifecycle events.',
        requiredMessage: raw?.requiredMessage ?? 'This field is required.',
        policyMessage: raw?.policyMessage ?? 'You must confirm the policy before continuing.',
    }
})

const methodsText = computed<FormMethodsLabels>(() => {
    const raw = content.value.labels.methodsText as Partial<FormMethodsLabels> | undefined

    return {
        cardTitle: raw?.cardTitle ?? 'Programmatic form control',
        cardSubtitle: raw?.cardSubtitle ?? 'Drive validation and resets from explicit actions',
        validateAction: raw?.validateAction ?? 'Run validate()',
        resetValidationAction: raw?.resetValidationAction ?? 'Run resetValidation()',
        stateIdle: raw?.stateIdle ?? 'Choose an action to inspect the form instance behavior.',
        stateValid: raw?.stateValid ?? 'validate() resolved successfully.',
        stateInvalid: raw?.stateInvalid ?? 'validate() found invalid fields.',
        stateReset: raw?.stateReset ?? 'reset() cleared the model values.',
        stateResetValidation: raw?.stateResetValidation ?? 'resetValidation() cleared validation messages.',
    }
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']
const statusItems = ['Draft', 'Ready', 'Blocked']
const assigneeItems = ['Ana', 'Marco', 'Sofia']
const environmentItems = ['Staging', 'Production', 'Canary']

const formControls = reactive({
    outlined: false,
    disabled: false,
    readonly: false,
    retainColor: false,
    table: false,
    fieldColor: '',
})

const inheritedBehavior = reactive({
    outlined: true,
    labelBehavior: 'floating'
})

const tableConfig = reactive({
    tableLineColor: '',
    tableCellBackgroundColor: '',
    tableFieldColor: '',
    tableLineOpacity: 1,
})

const inheritedModel = reactive({
    firstName: '',
    companyName: '',
    status: '',
    notes: '',
})

const tableModel = reactive({
    ticketId: '',
    assignee: '',
    environment: '',
    requiresApproval: false,
})

const columnModel = reactive({
    name: '',
    owner: '',
})

const validationState = reactive({
    isValid: false,
    submitState: 'idle' as 'idle' | 'valid' | 'invalid',
})

const validationModel = reactive({
    subject: '',
    message: '',
    policyAccepted: false,
})

const methodsState = reactive({
    isValid: false,
    lastAction: 'idle' as 'idle' | 'valid' | 'invalid' | 'reset-validation',
})

const methodsModel = reactive({
    name: '',
    email: '',
})

const methodsFormRef = ref<FormInstance | null>(null)

const requiredRule = (value: unknown) => {
    return !!value || validationText.value.requiredMessage
}

const validationFeedback = computed(() => {
    if (validationState.submitState === 'idle') return validationText.value.idleFeedback
    if (validationState.submitState === 'valid') return validationText.value.validFeedback
    return validationText.value.invalidFeedback
})

const methodsFeedback = computed(() => {
    switch (methodsState.lastAction) {
        case 'valid':
            return methodsText.value.stateValid
        case 'invalid':
            return methodsText.value.stateInvalid
        case 'reset-validation':
            return methodsText.value.stateResetValidation
        default:
            return methodsText.value.stateIdle
    }
})

const handleValidationSubmit = () => {
    validationState.submitState = 'valid'
}

const handleValidationInvalid = () => {
    validationState.submitState = 'invalid'
}

const runValidate = async () => {
    const valid = await methodsFormRef.value?.validate?.()
    methodsState.lastAction = valid ? 'valid' : 'invalid'
}

const runResetValidation = () => {
    methodsFormRef.value?.resetValidation?.()
    methodsState.lastAction = 'reset-validation'
}

const localizedFormApiReference = computed(() => {
    return locale.value === 'es' ? formApiReferenceEs : formApiReference
})

const usageHtmlCode = `<ECard title="Shared form behavior" subtitle="One parent controls multiple child fields">
    <EForm
        :outlined="outlined"
        :disabled="disabled"
        :readonly="readonly"
        :retain-color="retainColor"
        :color="color"
    >
        <ETextfield md="6" label="Name" placeholder="Jane Doe" />
        <ESelect md="6" :items="['Admin', 'Editor', 'Viewer']" label="Role" />
        <ETextfield label="Email" placeholder="name@company.com" />
        <ETextarea label="Notes" />
    </EForm>
</ECard>`

const inheritedTemplateCode = `<ECard elevation="sm">
    <EForm
        :label-behavior="inheritedBehavior.labelBehavior"
        :outlined="inheritedBehavior.outlined"
    >
        <ETextfield v-model="inheritedModel.firstName" md="6" label="First name" />
        <ESelect v-model="inheritedModel.status" md="6" :items="statusItems" label="Environment status" />
        <ETextfield v-model="inheritedModel.companyName" label="Company legal name" />
        <ETextarea v-model="inheritedModel.notes" label="Operational notes" />
    </EForm>
</ECard>`

const inheritedTsCode = `const statusItems = ['Draft', 'Ready', 'Blocked']

const inheritedBehavior = reactive({
    outlined: true,
    labelBehavior: 'floating',
})

const inheritedModel = reactive({
    firstName: '',
    companyName: '',
    status: '',
    notes: '',
})`

const tableTemplateCode = `<ECard title="Structured approval form" subtitle="Table layout for dense business inputs" elevation="sm">
    <EForm
        table
        :color="color"
        :table-line-color="tableConfig.tableLineColor || undefined"
        :table-cell-background-color="tableConfig.tableCellBackgroundColor || undefined"
        :table-field-color="tableConfig.tableFieldColor || undefined"
        :table-line-opacity="tableConfig.tableLineOpacity"
    >
        <ETextfield v-model="tableModel.ticketId" md="6" label="Ticket ID" />
        <ESelect v-model="tableModel.assignee" md="6" :items="assigneeItems" label="Assignee" />
        <ESelect v-model="tableModel.environment" md="6" :items="environmentItems" label="Environment" />
        <ECheckbox v-model="tableModel.requiresApproval" md="6" label="Requires approval" />
    </EForm>
</ECard>`

const tableTsCode = `const assigneeItems = ['Ana', 'Marco', 'Sofia']
const environmentItems = ['Staging', 'Production', 'Canary']

const tableConfig = reactive({
    tableLineColor: '',
    tableCellBackgroundColor: '',
    tableFieldColor: '',
    tableLineOpacity: 1,
})

const tableModel = reactive({
    ticketId: '',
    assignee: '',
    environment: '',
    requiresApproval: false,
})`

const columnTemplateCode = `<ECard title="Action layout with Form Column" subtitle="Group fields and actions without breaking alignment" elevation="sm">
    <EForm :color="color" label-min-width="130">
        <ETextfield v-model="columnModel.name" lg="12" label="Workflow name" />
        <ESelect v-model="columnModel.owner" lg="12" :items="assigneeItems" label="Owner" />

        <EFormColumn class="d-flex gap-4">
            <ESpacer />
            <EButton color="primary" type="submit">Save changes</EButton>
        </EFormColumn>
    </EForm>
</ECard>`

const columnTsCode = `const assigneeItems = ['Ana', 'Marco', 'Sofia']

const columnModel = reactive({
    name: '',
    owner: '',
})`

const validationTemplateCode = `<ECard title="Submit-time validation flow" :subtitle="validationFeedback" elevation="sm" style="width: 500px;">
    <EForm
        v-model="validationState.isValid"
        validate-on-submit
        label-behavior="floating"
        focus-first-invalid
        :color="color"
        @submit="handleValidationSubmit"
        @submit-invalid="handleValidationInvalid"
    >
        <ETextfield v-model="validationModel.subject" md="12" label="Subject" :rules="[requiredRule]" />
        <ETextarea v-model="validationModel.message" md="12" label="Message" :rules="[requiredRule]" />
        <ECheckbox
            v-model="validationModel.policyAccepted"
            md="12"
            label="I reviewed the release policy"
            :rules="[(value) => value === true || validationText.policyMessage]"
        />
        <EFormColumn cols="12">
            <EButton color="primary" block type="submit">Submit form</EButton>
        </EFormColumn>
    </EForm>
</ECard>`

const validationTsCode = `const validationState = reactive({
    isValid: false,
    submitState: 'idle',
})

const validationModel = reactive({
    subject: '',
    message: '',
    policyAccepted: false,
})

const requiredRule = (value) => !!value || 'This field is required.'

const handleValidationSubmit = () => {
    validationState.submitState = 'valid'
}

const handleValidationInvalid = () => {
    validationState.submitState = 'invalid'
}`

const methodsTemplateCode = `<ECard title="Programmatic form control" :subtitle="methodsFeedback" elevation="sm" style="width: 560px;">
    <EForm ref="methodsFormRef" v-model="methodsState.isValid" :color="color">
        <ETextfield v-model="methodsModel.name" label="Name" :rules="[requiredRule]" />
        <ETextfield v-model="methodsModel.email" label="Email" :rules="[requiredRule]" />
        <EFormColumn cols="12" class="d-flex gap-2">
            <ESpacer />
            <EButton color="primary" @click="runValidate">Run validate()</EButton>
            <EButton color="secondary" @click="runResetValidation">Run resetValidation()</EButton>
        </EFormColumn>
    </EForm>
</ECard>`

const methodsTsCode = `const methodsState = reactive({
    isValid: false,
    lastAction: 'idle',
})

const methodsModel = reactive({
    name: '',
    email: '',
})

const methodsFormRef = ref(null)

const runValidate = async () => {
    const valid = await methodsFormRef.value?.validate?.()
    methodsState.lastAction = valid ? 'valid' : 'invalid'
}

const runResetValidation = () => {
    methodsFormRef.value?.resetValidation?.()
    methodsState.lastAction = 'reset-validation'
}`
</script>
