export const textFieldCodeSnippets = {
  iconsTemplateCode: `<ECard elevation="sm" color="surface-subtle">
  <EForm>
    <ETextfield v-model="iconsVariant.prependInner" :prepend-inner-icon="$icon.account" md="6" label="prepend inner" />
    <ETextfield v-model="iconsVariant.appendInner" :append-inner-icon="$icon.account" md="6" label="append inner" />
    <ETextfield v-model="iconsVariant.prepend" :prepend-icon="$icon.account" md="6" label="prepend" />
    <ETextfield v-model="iconsVariant.append" :append-icon="$icon.account" md="6" label="append" />

    <ETextfield v-model="iconsVariant.prependInnerOutlined" :prepend-inner-icon="$icon.account" outlined md="6" label="prepend inner" />
    <ETextfield v-model="iconsVariant.appendInnerOutlined" :append-inner-icon="$icon.account" outlined md="6" label="append inner" />
    <ETextfield v-model="iconsVariant.prependOutlined" :prepend-icon="$icon.account" outlined md="6" label="prepend" />
    <ETextfield v-model="iconsVariant.appendOutlined" :append-icon="$icon.account" outlined md="6" label="append" />
  </EForm>
</ECard>`,

  iconsTsCode: `const iconsVariant = ref({
  prependInner: '',
  appendInner: '',
  prepend: '',
  append: '',
  prependInnerOutlined: '',
  appendInnerOutlined: '',
  prependOutlined: '',
  appendOutlined: '',
})`,

  visualVariantsTemplateCode: `<EForm class="full-width">
  <ETextfield v-model="visualVariants.default" lg="4" label="Default" :color="color" />
  <ETextfield v-model="visualVariants.outlined" lg="4" label="Outlined" outlined :color="color" />
  <ETextfield v-model="visualVariants.readonly" lg="4" label="Readonly" readonly outlined :color="color" />

  <ETextfield v-model="visualVariants.default" lg="4" label="Default" retain-color :color="color" />
  <ETextfield v-model="visualVariants.outlined" lg="4" label="Outlined" outlined retain-color :color="color" />
  <ETextfield v-model="visualVariants.readonly" lg="4" label="Readonly" readonly outlined retain-color :color="color" />

  <ETextfield v-model="visualVariants.default" lg="4" label-behavior="floating" label="Default" :color="color" />
  <ETextfield v-model="visualVariants.outlined" lg="4" label-behavior="floating" label="Outlined" outlined :color="color" />
  <ETextfield model-value="floated" lg="4" label-behavior="floating" label="Readonly" readonly outlined :color="color" />

  <ETextfield v-model="visualVariants.disabled" lg="4" label="Disabled" disabled :color="color" />
  <ETextfield v-model="visualVariants.disabled" lg="8" label="Disabled" disabled outlined :color="color" />
</EForm>`,

  namedSlotsTemplateCode: `<EForm>
  <ETextfield v-model="searchValue" label="Search" placeholder="Search components" clearable :color="color">
    <template #prepend>
      <EAvatar :icon="$icon.account" size="small" color="secondary" />
    </template>
    <template #prepend-inner>
      <EIcon :icon="$icon.mapMarker" color="blue" />
    </template>
    <template #append-inner>
      <EButton :icon="$icon.magnify" :color="color" size="small" text />
    </template>
    <template #append>
      <EButton :icon="$icon.microphone" :color="color" tonal />
    </template>
  </ETextfield>
</EForm>`,

  prefixSuffixTemplateCode: `<ETextfield v-model="priceValue" label="Price" prefix="$" suffix="USD" clearable :color="color" />
<ETextfield v-model="skuValue" label="SKU" prefix="ID" suffix="-A" counter :limit="12" :color="color" />`,

  validationTemplateCode: `<ECard
  class="docs-page__text-field-validation"
  :title="labels.cardTitle"
  :subtitle="statusMessage"
  elevation="sm"
>
  <EForm ref="methodsFormRef" v-model="formIsValid" class="d-flex flex-column gap-3">
    <ETextfield
      v-model="firstName"
      :label="labels.firstNameLabel"
      :placeholder="labels.firstNamePlaceholder"
      :rules="[requiredRule]"
    />

    <ETextfield
      v-model="lastName"
      :label="labels.lastNameLabel"
      :placeholder="labels.lastNamePlaceholder"
      :rules="[requiredRule]"
    />

    <ETextfield
      v-model="email"
      :prepend-inner-icon="$icon.email"
      :label="labels.emailLabel"
      :placeholder="labels.emailPlaceholder"
      :rules="[requiredRule, emailRule]"
    />

    <ETextfield
      v-model="password"
      :prepend-inner-icon="$icon.lock"
      :label="labels.passwordLabel"
      :placeholder="labels.passwordPlaceholder"
      :rules="[requiredRule, passwordRule]"
      type="password"
    />

    <EFormColumn class="d-block">
      <EDivider />
      <div class="d-flex gap-2 flex-1 pt-4">
        <ESpacer />
        <EButton text @click="resetForm">
          {{ labels.cancel }}
        </EButton>
        <EButton
          :loading="submitting"
          color="primary"
          type="submit"
          :disabled="!canSubmit"
          :append-icon="$icon.arrowRight"
          @click="submitForm"
        >
          {{ labels.submit }}
        </EButton>
      </div>
    </EFormColumn>
  </EForm>
</ECard>`,

  validationTsCode: `import type { EForm } from 'nuvex-ui'
import { EFormColumn, ESpacer } from 'nuvex-ui'

interface IntegrationFormLabels {
  cancel: string
  submit: string
  cardTitle: string
  cardSubtitle: string
  idle: string
  submitting: string
  success: string
  canceled: string
  firstNameLabel: string
  firstNamePlaceholder: string
  lastNameLabel: string
  lastNamePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  passwordLabel: string
  passwordPlaceholder: string
}

const labels: IntegrationFormLabels = {
  cancel: 'Cancel',
  submit: 'Complete registration',
  cardTitle: 'Registration Form',
  cardSubtitle: 'Basic details',
  idle: 'Complete all required fields to continue',
  submitting: 'Submitting registration...',
  success: 'Registration completed successfully',
  canceled: 'Registration form reset',
  firstNameLabel: 'First name',
  firstNamePlaceholder: 'Jane',
  lastNameLabel: 'Last name',
  lastNamePlaceholder: 'Doe',
  emailLabel: 'Email',
  emailPlaceholder: 'name@company.com',
  passwordLabel: 'Password',
  passwordPlaceholder: 'At least 6 characters',
}

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const methodsFormRef = ref<EForm | null>(null)
const password = ref('')
const formIsValid = ref(false)
const submitting = ref(false)
const submitted = ref(false)
const wasCanceled = ref(false)

const { requiredRule, emailRule, passwordRule } = useValidationRules()

const canSubmit = computed(() => {
  return formIsValid.value && !submitting.value
})

const statusMessage = computed(() => {
  if (submitting.value) return labels.submitting
  if (wasCanceled.value) return labels.canceled
  if (submitted.value) return labels.success
  return labels.idle
})

const submitForm = async () => {
  const valid = await methodsFormRef.value?.validate?.()
  if (!canSubmit.value || !valid) return

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
}`,
} as const