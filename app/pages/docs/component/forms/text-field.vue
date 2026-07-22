<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ETextfield v-model="playgroundValue" :label="fieldLabel" :placeholder="placeholder"
            :outlined="TextfieldProperty.outlined" :disabled="TextfieldProperty.disabled"
            :readonly="TextfieldProperty.readonly" :clearable="TextfieldProperty.clearable"
            :counter="TextfieldProperty.counter" :limit="TextfieldProperty.counter ? maxLength : undefined"
            :color="color" :retain-color="TextfieldProperty.retainColor" />
        </template>
        <template #panel-design-code>
          <CodePanel :code="HTMLCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="TextfieldProperty.outlined" cols="24" :label="controlLabel('outlined')"
              :color="color" />
            <ECheckbox v-model="TextfieldProperty.disabled" cols="24" :label="controlLabel('disabled')"
              :color="color" />
            <ECheckbox v-model="TextfieldProperty.readonly" cols="24" :label="controlLabel('readonly')"
              :color="color" />
            <ECheckbox v-model="TextfieldProperty.clearable" cols="24" :label="controlLabel('clearable')"
              :color="color" />
            <ECheckbox v-model="TextfieldProperty.counter" cols="24" :label="controlLabel('counter')" :color="color" />
            <ECheckbox v-model="TextfieldProperty.retainColor" cols="24" :label="controlLabel('retainColor')"
              :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['icons'].key" :title="sections['icons'].title"
      :description-html="sections['icons'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ECard elevation="sm" color="surface-subtle">
            <EForm>
              <ETextfield v-model="iconsVariant.prependInner" :prepend-inner-icon="$icon.account" md="6"
                label="prepend inner" />
              <ETextfield v-model="iconsVariant.appendInner" :append-inner-icon="$icon.account" md="6"
                label="append inner" />
              <ETextfield v-model="iconsVariant.prepend" :prepend-icon="$icon.account" md="6" label="prepend" />
              <ETextfield v-model="iconsVariant.append" :append-icon="$icon.account" md="6" label="append" />
              <ETextfield v-model="iconsVariant.prependInnerOutlined" :prepend-inner-icon="$icon.account" outlined
                md="6" label="prepend inner" />
              <ETextfield v-model="iconsVariant.appendInnerOutlined" :append-inner-icon="$icon.account" outlined md="6"
                label="append inner" />
              <ETextfield v-model="iconsVariant.prependOutlined" :prepend-icon="$icon.account" outlined md="6"
                label="prepend" />
              <ETextfield v-model="iconsVariant.appendOutlined" :append-icon="$icon.account" outlined md="6"
                label="append" />
            </EForm>
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="iconsTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="iconsTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description="sections['visual-variants'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm class="full-width">
            <ETextfield v-model="visualVariants.default" lg="4" label="Default" :color="color" />
            <ETextfield v-model="visualVariants.outlined" lg="4" label="Outlined" outlined :color="color" />
            <ETextfield v-model="visualVariants.readonly" lg="4" label="Readonly" readonly outlined :color="color" />
            <ETextfield v-model="visualVariants.default" lg="4" label="Default" retain-color :color="color" />
            <ETextfield v-model="visualVariants.outlined" lg="4" label="Outlined" outlined retain-color
              :color="color" />
            <ETextfield v-model="visualVariants.readonly" lg="4" label="Readonly" readonly outlined retain-color
              :color="color" />
            <ETextfield v-model="visualVariants.default" lg="4" label-behavior="floating" label="Default"
              :color="color" />
            <ETextfield v-model="visualVariants.outlined" lg="4" label-behavior="floating" label="Outlined" outlined
              :color="color" />
            <ETextfield model-value="floated" lg="4" label-behavior="floating" label="Readonly" readonly outlined
              :color="color" />
            <ETextfield v-model="visualVariants.disabled" lg="4" label="Disabled" disabled :color="color" />
            <ETextfield v-model="visualVariants.disabled" lg="8" label="Disabled" disabled outlined :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['slots'].key" :title="sections['slots'].title"
      :description-html="sections['slots'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
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
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="namedSlotsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['prepend-append-icons'].key" :title="sections['prepend-append-icons'].title"
      :description-html="sections['prepend-append-icons'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <ETextfield v-model="priceValue" label="Price" prefix="$" suffix="USD" clearable :color="color" />
          <ETextfield v-model="skuValue" label="SKU" prefix="ID" suffix="-A" counter :limit="12" :color="color" />
        </template>

        <template #panel-template>
          <CodePanel :code="prefixSuffixTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['validation'].key" :title="sections['validation'].title"
      :description-html="sections['validation'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTsCss" :color="color">
        <template #panel-design>
           <DocsFormsTextfieldValidation />
        </template>

        <template #panel-template>
          <CodePanel :code="validationTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="validationTsCode" language="ts" />
        </template>

        <template #panel-css>
          <CodePanel :code="validationCssCode" language="scss" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedTextFieldApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { EForm } from 'nuvex-ui'
import { useI18n } from 'vue-i18n'
import { textFieldApiReference } from '~/api-reference/forms/text-field'
import { textFieldApiReferenceEs } from '~/api-reference/forms/text-field-es'

const { locale } = useI18n()

const content = useDocsComponentI18nContent('pages.input.textField')

type TextFieldSectionKey =
  | 'usage'
  | 'icons'
  | 'visual-variants'
  | 'slots'
  | 'prepend-append-icons'
  | 'validation'
  | 'props'

const getRequiredSection = (key: TextFieldSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `TextField documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    icons: getRequiredSection('icons'),
    'visual-variants': getRequiredSection('visual-variants'),
    'slots': getRequiredSection('slots'),
    'prepend-append-icons': getRequiredSection('prepend-append-icons'),
    'validation': getRequiredSection('validation'),
    props: getRequiredSection('props'),
  }
})

const localizedTextFieldApiReference = computed(() => {
  return locale.value === 'es' ? textFieldApiReferenceEs : textFieldApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const fieldLabel = ref('Name')
const placeholder = ref('Write your value')
const maxLength = ref(24)


const playgroundValue = ref('')
const priceValue = ref('19.99')
const skuValue = ref('AA-1024')
const searchValue = ref('')

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs, tabsDesignTemplateTsCss } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const visualVariants = ref({
  default: '',
  outlined: '',
  readonly: '',
  disabled: '',
});
const iconsVariant = ref({
  prependInner: '',
  appendInner: '',
  prepend: '',
  append: '',
  prependInnerOutlined: '',
  appendInnerOutlined: '',
  prependOutlined: '',
  appendOutlined: '',
});

const TextfieldProperty = ref({
  outlined: false,
  readonly: false,
  disabled: false,
  clearable: false,
  counter: false,
  retainColor: false,
});

const HTMLCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: "e-text-field",
    attrs: [
      `color="${color.value}"`,
      TextfieldProperty.value.readonly && "readonly",
      TextfieldProperty.value.clearable && "clearable",
      TextfieldProperty.value.disabled && "disabled",
      TextfieldProperty.value.outlined && "outlined",
      TextfieldProperty.value.counter && "counter",
      TextfieldProperty.value.retainColor && "retain-color",
    ]
  });
});

const iconsTemplateCode = `<ECard elevation="sm" color="surface-subtle">
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
</ECard>`

const iconsTsCode = `const iconsVariant = ref({
  prependInner: '',
  appendInner: '',
  prepend: '',
  append: '',
  prependInnerOutlined: '',
  appendInnerOutlined: '',
  prependOutlined: '',
  appendOutlined: '',
})`

const visualVariantsTemplateCode = `<EForm class="full-width">
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
</EForm>`

const namedSlotsTemplateCode = `<EForm>
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
</EForm>`

const prefixSuffixTemplateCode = `<ETextfield v-model="priceValue" label="Price" prefix="$" suffix="USD" clearable :color="color" />
<ETextfield v-model="skuValue" label="SKU" prefix="ID" suffix="-A" counter :limit="12" :color="color" />`

const validationTemplateCode = `<ECard
  class="docs-page__text-field-validation"
  :title="labels.cardTitle"
  :subtitle="labels.cardSubtitle"
  elevation="sm"
  color="green-100"
>
  <EForm v-model="formIsValid" class="d-flex flex-column gap-3">
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
        <EButton
          :loading="submitting"
          color="green-900"
          type="submit"
          :disabled="!formIsValid"
          :append-icon="$icon.arrowRight"
          @click="submitForm"
        >
          {{ labels.submit }}
        </EButton>
      </div>
    </EFormColumn>
  </EForm>
</ECard>`

const validationTsCode = `import { EFormColumn, ESpacer } from 'nuvex-ui'

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

const labels: IntegrationFormLabels = {
  submit: 'Complete registration',
  cardTitle: 'Registration Form',
  cardSubtitle: 'Basic details',
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
const password = ref('')
const formIsValid = ref(false)
const submitting = ref(false)

const { requiredRule, emailRule, passwordRule } = useValidationRules()

const submitForm = async () => {
  if (!formIsValid.value || submitting.value) return

  submitting.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
  } finally {
    submitting.value = false
  }
}`

const validationCssCode = `.docs-page__text-field-validation {
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
}`

</script>

<style lang="scss">
.docs-page {
  .e-text-field {
    margin-bottom: 8px;
  }
}
</style>
