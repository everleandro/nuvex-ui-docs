export const formCodeSnippets = {
    usageHtmlCode: `<ECard title="Shared form behavior" subtitle="One parent controls multiple child fields">
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
</ECard>`,

    inheritedTemplateCode: `<ECard elevation="sm">
    <EForm
        :label-behavior="inheritedBehavior.labelBehavior"
        :outlined="inheritedBehavior.outlined"
    >
        <ETextfield v-model="inheritedModel.firstName" md="6" label="First name" />
        <ESelect v-model="inheritedModel.status" md="6" :items="statusItems" label="Environment status" />
        <ETextfield v-model="inheritedModel.companyName" label="Company legal name" />
        <ETextarea v-model="inheritedModel.notes" label="Operational notes" />
    </EForm>
</ECard>`,

    inheritedTsCode: `const statusItems = ['Draft', 'Ready', 'Blocked']

const inheritedBehavior = reactive({
    outlined: true,
    labelBehavior: 'floating',
})

const inheritedModel = reactive({
    firstName: '',
    companyName: '',
    status: '',
    notes: '',
})`,

    tableTemplateCode: `<ECard title="Structured approval form" subtitle="Table layout for dense business inputs" elevation="sm">
    <EForm
        table
        field-color="primary"
        label-behavior="floating"
    >
        <ETextfield v-model="tableModel.ticketId" md="6" label="Ticket ID" />
        <ESelect v-model="tableModel.assignee" md="6" :items="assigneeItems" label="Assignee" />
        <ESelect v-model="tableModel.environment" md="6" :items="environmentItems" label="Environment" />
        <ECheckbox v-model="tableModel.requiresApproval" md="6" label="Requires approval" />
    </EForm>
</ECard>`,

    tableTsCode: `const assigneeItems = ['Ana', 'Marco', 'Sofia']
const environmentItems = ['Staging', 'Production', 'Canary']

const tableModel = reactive({
    ticketId: '',
    assignee: '',
    environment: '',
    requiresApproval: false,
})`,

    columnTemplateCode: `<ECard title="Action layout with Form Column" subtitle="Group fields and actions without breaking alignment" elevation="sm">
    <EForm :color="color" label-min-width="130">
        <ETextfield v-model="columnModel.name" lg="12" label="Workflow name" />
        <ESelect v-model="columnModel.owner" lg="12" :items="assigneeItems" label="Owner" />

        <EFormColumn class="d-flex gap-4">
            <ESpacer />
            <EButton color="primary" type="submit">Save changes</EButton>
        </EFormColumn>
    </EForm>
</ECard>`,

    columnTsCode: `const assigneeItems = ['Ana', 'Marco', 'Sofia']

const columnModel = reactive({
    name: '',
    owner: '',
})`,

    validationTemplateCode: `<ECard title="Submit-time validation flow" :subtitle="validationFeedback" elevation="sm" style="width: 500px;">
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
            <EButton color="primary" block type="submit" :disabled="!validationState.isValid">Submit form</EButton>
        </EFormColumn>
    </EForm>
</ECard>`,

    validationTsCode: `const validationState = reactive({
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
}`,

    methodsTemplateCode: `<ECard title="Programmatic form control" :subtitle="methodsFeedback" elevation="sm" style="width: 560px;">
    <EForm ref="methodsFormRef" v-model="methodsState.isValid" :color="color">
        <ETextfield v-model="methodsModel.name" label="Name" :rules="[requiredRule]" />
        <ETextfield v-model="methodsModel.email" label="Email" :rules="[requiredRule,emailRule]" />
        <EFormColumn cols="12" class="d-flex gap-2">
            <ESpacer />
            <EButton color="primary" @click="runValidate">Run validate()</EButton>
            <EButton color="secondary" @click="runResetValidation">Run resetValidation()</EButton>
        </EFormColumn>
    </EForm>
</ECard>`,

    methodsTsCode: `const methodsState = reactive({
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
}`,
} as const