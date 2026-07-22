<template>
  <article class="docs-page textarea-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ETextarea v-model="usageProperty.value" :label="usageProperty.label" :placeholder="usageProperty.placeholder"
            :outlined="textareaProperty.outlined" :disabled="textareaProperty.disabled" :readonly="textareaProperty.readonly"
            :clearable="textareaProperty.clearable" :counter="textareaProperty.counter"
            :retain-color="textareaProperty.retainColor" :rows="textareaProperty.rows"
            :limit="textareaProperty.counter ? maxLength : undefined" :color="color" />
        </template>

        <template #panel-design-code>
          <CodePanel :code="usageHtmlCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="textareaProperty.outlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="textareaProperty.disabled" cols="24" :label="controlLabel('disabled')" :color="color" />
            <ECheckbox v-model="textareaProperty.readonly" cols="24" :label="controlLabel('readonly')" :color="color" />
            <ECheckbox v-model="textareaProperty.clearable" cols="24" :label="controlLabel('clearable')" :color="color" />
            <ECheckbox v-model="textareaProperty.counter" cols="24" :label="controlLabel('counter')" :color="color" />
            <ECheckbox v-model="textareaProperty.retainColor" cols="24" :label="controlLabel('retainColor')" :color="color" />
            <ESelect v-model="textareaProperty.rows" cols="24" :items="rowOptions" :label="controlLabel('rows')" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description="sections['visual-variants'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ETextarea v-model="visualVariantsProperty.default" lg="6" label="Default" :rows="4" :color="color" />
            <ETextarea v-model="visualVariantsProperty.outlined" lg="6" label="Outlined" :rows="4" outlined :color="color" />
            <ETextarea v-model="visualVariantsProperty.readonly" lg="6" label="Readonly" :rows="4" readonly outlined :color="color" />
            <ETextarea v-model="visualVariantsProperty.disabled" lg="6" label="Disabled" :rows="4" disabled :color="color" />
            <ETextarea v-model="visualVariantsProperty.floating" lg="6" label="Floating" :rows="4" label-behavior="floating"
              :color="color" />
            <ETextarea v-model="visualVariantsProperty.floatingOutlined" lg="6" label="Floating outlined" :rows="4" outlined
              label-behavior="floating" :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['rows-and-length'].key" :title="sections['rows-and-length'].title"
      :description-html="sections['rows-and-length'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ETextarea v-model="rowsLengthProperty.short" lg="6" :rows="2" :limit="80" counter label="Short note" label-behavior="floating" :color="color" />
            <ETextarea v-model="rowsLengthProperty.medium" lg="6" :rows="4" :limit="180" counter label="Summary" label-behavior="floating" :color="color" />
            <ETextarea v-model="rowsLengthProperty.long" lg="12" :rows="8" :limit="480" counter
              label="Detailed description" label-behavior="floating" :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="rowsAndLengthTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['icons-and-affixes'].key" :title="sections['icons-and-affixes'].title"
      :description-html="sections['icons-and-affixes'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ETextarea v-model="iconAffixProperty.prependInner" lg="6" :prepend-inner-icon="$icon.account" :rows="4"
              label="prepend-inner" :color="color" />
            <ETextarea v-model="iconAffixProperty.appendInner" lg="6" :append-inner-icon="$icon.email" :rows="4"
              label="append-inner" :color="color" />
            <ETextarea v-model="iconAffixProperty.prepend" lg="6" :prepend-icon="$icon.form" :rows="4"
              label="prepend" :color="color" />
            <ETextarea v-model="iconAffixProperty.append" lg="6" :append-icon="$icon.magnify" :rows="4"
              label="append" :color="color" />
            <ETextarea v-model="iconAffixProperty.affix" lg="12" prefix="ID" suffix="chars" :rows="3"
              label="prefix/suffix" :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="iconsAndAffixesTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['slots-composition'].key" :title="sections['slots-composition'].title"
      :description-html="sections['slots-composition'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <ETextarea v-model="slotsCompositionProperty.value" :rows="5" label="Release note" placeholder="Describe user-visible changes"
            :color="color">
            <template #prepend>
              <EAvatar :icon="$icon.account" size="small" color="secondary" />
            </template>
            <template #append-inner>
              <EButton :icon="$icon.send" :color="color" size="small" text />
            </template>
          </ETextarea>
        </template>

        <template #panel-template>
          <CodePanel :code="slotsCompositionTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['validation'].key" :title="sections['validation'].title"
      :description="sections['validation'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ECard :title="labels.form.cardTitle" :subtitle="labels.form.cardSubtitle" elevation="sm" color="surface-subtle">
            <EForm v-model="validationFormIsValid" class="d-flex flex-column gap-3">
              <ETextfield v-model="validationProperty.model.subject" label="Subject" :rules="[requiredRule]" />
              <ETextarea v-model="validationProperty.model.message" label="Message" label-behavior="floating" :rows="5" :limit="280" counter
                :rules="[requiredRule, minLengthRule]" />
              <EButton :disabled="!validationCanSubmit" :loading="validationSubmitting" @click="submitValidationDemo">
                {{ labels.form.submit }}
              </EButton>
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

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedTextareaApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { textareaApiReference } from '~/api-reference/forms/textarea'
import { textareaApiReferenceEs } from '~/api-reference/forms/textarea-es'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

const { locale } = useI18n()

const content = useDocsComponentI18nContent('pages.input.textarea')

type TextareaSectionKey =
  | 'usage'
  | 'visual-variants'
  | 'rows-and-length'
  | 'icons-and-affixes'
  | 'slots-composition'
  | 'validation'
  | 'props'

const getRequiredSection = (key: TextareaSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Textarea documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    'visual-variants': getRequiredSection('visual-variants'),
    'rows-and-length': getRequiredSection('rows-and-length'),
    'icons-and-affixes': getRequiredSection('icons-and-affixes'),
    'slots-composition': getRequiredSection('slots-composition'),
    validation: getRequiredSection('validation'),
    props: getRequiredSection('props'),
  }
})

const localizedTextareaApiReference = computed(() => {
  return locale.value === 'es' ? textareaApiReferenceEs : textareaApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']
const rowOptions = [2, 3, 4, 6, 8]
const maxLength = ref(280)

const usageProperty = ref({
  label: 'Feedback',
  placeholder: 'Describe your experience',
  value: '',
})

const textareaProperty = ref({
  outlined: false,
  disabled: false,
  readonly: false,
  clearable: true,
  counter: false,
  retainColor: false,
  rows: 4,
})

const visualVariantsProperty = ref({
  default: 'Default textarea content',
  outlined: 'Outlined textarea content',
  readonly: 'Readonly multiline value for auditing context.',
  disabled: 'Disabled value',
  floating: 'Floating label behavior in multiline inputs.',
  floatingOutlined: 'Floating label behavior with outlined variant.',
})

const rowsLengthProperty = ref({
  short: 'Quick note',
  medium: 'A concise summary that still needs multiple lines for context.',
  long: 'This description intentionally contains more content to validate rows, readability, and maximum length handling in one place.',
})

const iconAffixProperty = ref({
  prependInner: '',
  appendInner: '',
  prepend: '',
  append: '',
  affix: '',
})

const slotsCompositionProperty = ref({
  value: 'Ship notes for this release. Mention impact, risk, and rollback path.',
})

const labels = computed(() => {
  return {
    form: content.value.labels.formText?.form ?? {
      submit: 'Submit',
      idle: 'Idle',
      submitting: 'Submitting...',
      success: 'Success',
      canceled: 'Canceled',
      cardTitle: 'Form',
      cardSubtitle: 'Subtitle',
    },
  }
})

const validationFormIsValid = ref(false)
const validationSubmitting = ref(false)
const validationProperty = ref({
  model: {
    subject: '',
    message: '',
  },
})

const requiredRule = (value: unknown) => {
  return Boolean(String(value ?? '').trim()) || 'This field is required'
}

const minLengthRule = (value: unknown) => {
  return String(value ?? '').trim().length >= 12 || 'Use at least 12 characters'
}

const validationCanSubmit = computed(() => {
  return validationFormIsValid.value && !validationSubmitting.value
})

const submitValidationDemo = async () => {
  if (!validationCanSubmit.value) return

  validationSubmitting.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 600))
  } finally {
    validationSubmitting.value = false
  }
}

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const usageHtmlCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: 'e-textarea',
    attrs: [
      'label="Feedback"',
      'placeholder="Describe your experience"',
      `rows="${textareaProperty.value.rows}"`,
      `color="${color.value}"`,
      textareaProperty.value.outlined && 'outlined',
      textareaProperty.value.disabled && 'disabled',
      textareaProperty.value.readonly && 'readonly',
      textareaProperty.value.clearable && 'clearable',
      textareaProperty.value.counter && 'counter',
      textareaProperty.value.retainColor && 'retain-color',
    ],
  })
})

const visualVariantsTemplateCode = `<EForm>
  <ETextarea v-model="visualVariantsProperty.default" label="Default" :rows="4" :color="color" />
  <ETextarea v-model="visualVariantsProperty.outlined" label="Outlined" :rows="4" outlined :color="color" />
  <ETextarea v-model="visualVariantsProperty.readonly" label="Readonly" :rows="4" readonly outlined :color="color" />
  <ETextarea v-model="visualVariantsProperty.disabled" label="Disabled" :rows="4" disabled :color="color" />
  <ETextarea v-model="visualVariantsProperty.floating" label="Floating" :rows="4" label-behavior="floating" :color="color" />
  <ETextarea v-model="visualVariantsProperty.floatingOutlined" label="Floating outlined" :rows="4" outlined label-behavior="floating" :color="color" />
</EForm>`

const rowsAndLengthTemplateCode = `<EForm>
  <ETextarea v-model="rowsLengthProperty.short" :rows="2" :limit="80" counter label="Short note" :color="color" />
  <ETextarea v-model="rowsLengthProperty.medium" :rows="4" :limit="180" counter label="Summary" :color="color" />
  <ETextarea v-model="rowsLengthProperty.long" :rows="8" :limit="480" counter label="Detailed description" :color="color" />
</EForm>`

const iconsAndAffixesTemplateCode = `<EForm>
  <ETextarea v-model="iconAffixProperty.prependInner" :prepend-inner-icon="$icon.account" :rows="4" label="prepend-inner" :color="color" />
  <ETextarea v-model="iconAffixProperty.appendInner" :append-inner-icon="$icon.email" :rows="4" label="append-inner" :color="color" />
  <ETextarea v-model="iconAffixProperty.prepend" :prepend-icon="$icon.form" :rows="4" label="prepend" :color="color" />
  <ETextarea v-model="iconAffixProperty.append" :append-icon="$icon.magnify" :rows="4" label="append" :color="color" />
  <ETextarea v-model="iconAffixProperty.affix" prefix="ID" suffix="chars" :rows="3" label="prefix/suffix" :color="color" />
</EForm>`

const slotsCompositionTemplateCode = `<ETextarea
  v-model="slotsCompositionProperty.value"
  :rows="5"
  label="Release note"
  placeholder="Describe user-visible changes"
  :color="color"
>
  <template #prepend>
    <EAvatar :icon="$icon.account" size="small" color="secondary" />
  </template>
  <template #append-inner>
    <EButton :icon="$icon.send" :color="color" size="small" text />
  </template>
</ETextarea>`

const validationTemplateCode = `<ECard title="Feedback form" subtitle="Capture details with actionable context" elevation="sm" color="surface-subtle">
  <EForm v-model="validationFormIsValid" class="d-flex flex-column gap-3">
    <ETextfield v-model="validationProperty.model.subject" label="Subject" :rules="[requiredRule]" />
    <ETextarea
      v-model="validationProperty.model.message"
      label="Message"
      :rows="5"
      :limit="280"
      counter
      :rules="[requiredRule, minLengthRule]"
    />
    <EButton :disabled="!validationCanSubmit" :loading="validationSubmitting" @click="submitValidationDemo">
      Send feedback
    </EButton>
  </EForm>
</ECard>`

const validationTsCode = `const validationFormIsValid = ref(false)
const validationSubmitting = ref(false)
const validationProperty = ref({
  model: {
    subject: '',
    message: '',
  },
})

const requiredRule = (value: unknown) => {
  return Boolean(String(value ?? '').trim()) || 'This field is required'
}

const minLengthRule = (value: unknown) => {
  return String(value ?? '').trim().length >= 12 || 'Use at least 12 characters'
}

const validationCanSubmit = computed(() => {
  return validationFormIsValid.value && !validationSubmitting.value
})`
</script>
