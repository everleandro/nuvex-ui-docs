<template>
  <article class="docs-page checkbox-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ECheckbox
            v-model="checkboxValue"
            :label="usageLabel"
            :color="color"
            :outlined="checkboxProperty.outlined"
            :disabled="checkboxProperty.disabled"
            :readonly="checkboxProperty.readonly"
            :tonal="checkboxProperty.tonal"
            :true-value="resolvedTrueValue"
            :false-value="resolvedFalseValue"
            detail="Required for deployment checklist"
          />
        </template>

        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="checkboxProperty.outlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="checkboxProperty.disabled" cols="24" :label="controlLabel('disabled')" :color="color" />
            <ECheckbox v-model="checkboxProperty.readonly" cols="24" :label="controlLabel('readonly')" :color="color" />
            <ECheckbox v-model="checkboxProperty.tonal" cols="24" :label="controlLabel('tonal')" :color="color" />
            <ECheckbox v-model="useCustomValues" cols="24" :label="controlLabel('customValues')" :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description="sections['visual-variants'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ECheckbox v-model="visualStates.default" lg="6" label="Default" :color="color" />
            <ECheckbox v-model="visualStates.outlined" lg="6" label="Outlined" outlined :color="color" />
            <ECheckbox v-model="visualStates.active" lg="6" label="Active" :color="color" />
            <ECheckbox v-model="visualStates.disabled" lg="6" label="Disabled" disabled :color="color" />
            <ECheckbox v-model="visualStates.readonly" lg="6" label="Readonly" readonly outlined :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['custom-values'].key" :title="sections['custom-values'].title"
      :description="sections['custom-values'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <EForm>
            <ECheckbox v-model="releaseStatus" lg="8" label="Release checklist" true-value="ready" false-value="hold"
              detail="Toggle to mark deployment readiness" :color="color" />
            <ECard lg="4" color="surface-subtle" elevation="sm" class="pa-3 d-flex flex-column gap-2">
              <div class="text-caption">Current model value</div>
              <EChip :color="releaseStatus === 'ready' ? 'success' : 'warning'" tonal>
                {{ releaseStatus }}
              </EChip>
            </ECard>
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="customValuesTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="customValuesTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['slots'].key" :title="sections['slots'].title" :description-html="sections['slots'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <ECheckbox v-model="slotChecked" :color="color">
            <template #label>
              I agree to the
              <a href="#" class="checkbox-page__inline-link" @click.prevent>Terms and Conditions</a>
            </template>
          </ECheckbox>
        </template>

        <template #panel-template>
          <CodePanel :code="slotsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.validation.key" :title="sections.validation.title" :description="sections.validation.description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ECard elevation="sm" color="surface-subtle" class="pa-4" style="width: 100%;">
            <EForm v-model="validationState.isValid">
              <ECheckbox
                v-model="validationState.termsAccepted"
                label="I accept the terms of service"
                :rules="[(value) => value === true || validationMessage]"
                :color="color"
              />
              <div class="d-flex items-center gap-2 mt-3">
                <EButton color="primary" @click="handleValidationSubmit">Create account</EButton>
                <span class="text-caption">{{ validationFeedback }}</span>
              </div>
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
      <DocsApiTable :api-reference="localizedCheckboxApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { checkboxApiReference } from '~/api-reference/forms/checkbox'
import { checkboxApiReferenceEs } from '~/api-reference/forms/checkbox-es'
import { useDocsPlaygroundTabSets } from '~/composables/useDocsPlaygroundTabSets'
import { getDocsComponentPageContent } from '~/content/docs'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

type CheckboxValue = boolean | string | number

const { locale } = useI18n()

const content = computed(() => {
  const resolvedContent = getDocsComponentPageContent('/docs/forms/checkbox', locale.value)

  if (!resolvedContent) {
    throw createError({ statusCode: 404, statusMessage: 'Checkbox documentation content not found' })
  }

  return resolvedContent
})

type CheckboxSectionKey =
  | 'usage'
  | 'visual-variants'
  | 'custom-values'
  | 'slots'
  | 'validation'
  | 'props'

const getRequiredSection = (key: CheckboxSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Checkbox documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    'visual-variants': getRequiredSection('visual-variants'),
    'custom-values': getRequiredSection('custom-values'),
    slots: getRequiredSection('slots'),
    validation: getRequiredSection('validation'),
    props: getRequiredSection('props'),
  }
})

const localizedCheckboxApiReference = computed(() => {
  return locale.value === 'es' ? checkboxApiReferenceEs : checkboxApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const checkboxProperty = ref({
  outlined: false,
  disabled: false,
  readonly: false,
  tonal: false,
})

const useCustomValues = ref(false)
const checkboxValue = ref<CheckboxValue>(false)
const usageLabel = ref('Enable deployment checks')

const resolvedTrueValue = computed<CheckboxValue>(() => {
  return useCustomValues.value ? 'enabled' : true
})

const resolvedFalseValue = computed<CheckboxValue>(() => {
  return useCustomValues.value ? 'disabled' : false
})

watch(useCustomValues, () => {
  checkboxValue.value = resolvedFalseValue.value
})

const visualStates = ref({
  default: false,
  outlined: false,
  active: true,
  disabled: true,
  readonly: true,
})

const releaseStatus = ref<'ready' | 'hold'>('hold')
const slotChecked = ref(false)

const validationMessage = 'You must accept the terms before continuing.'
const validationState = ref({
  isValid: undefined as boolean | undefined,
  termsAccepted: false,
  submitted: false,
})

const handleValidationSubmit = () => {
  validationState.value.submitted = true
}

const validationFeedback = computed(() => {
  if (!validationState.value.submitted) {
    return 'Submit to validate the checkbox rule.'
  }

  return validationState.value.termsAccepted
    ? 'Form is valid. Ready to continue.'
    : validationMessage
})

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const usageTemplateCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: 'e-checkbox',
    attrs: [
      'v-model="acceptTerms"',
      `label="${usageLabel.value}"`,
      `color="${color.value}"`,
      checkboxProperty.value.outlined && 'outlined',
      checkboxProperty.value.disabled && 'disabled',
      checkboxProperty.value.readonly && 'readonly',
      checkboxProperty.value.tonal && 'tonal',
      useCustomValues.value && 'true-value="enabled"',
      useCustomValues.value && 'false-value="disabled"',
    ],
  })
})

const visualVariantsTemplateCode = `<EForm>
  <ECheckbox v-model="visualStates.default" label="Default" :color="color" />
  <ECheckbox v-model="visualStates.outlined" label="Outlined" outlined :color="color" />
  <ECheckbox v-model="visualStates.active" label="Active" :color="color" />
  <ECheckbox v-model="visualStates.disabled" label="Disabled" disabled :color="color" />
  <ECheckbox v-model="visualStates.readonly" label="Readonly" readonly outlined :color="color" />
</EForm>`

const customValuesTemplateCode = `<ECheckbox
  v-model="releaseStatus"
  label="Release checklist"
  true-value="ready"
  false-value="hold"
  detail="Toggle to mark deployment readiness"
/>`

const customValuesTsCode = `const releaseStatus = ref<'ready' | 'hold'>('hold')`

const slotsTemplateCode = `<ECheckbox v-model="slotChecked">
  <template #label>
    I agree to the
    <a href="#" @click.prevent>Terms and Conditions</a>
  </template>
</ECheckbox>`

const validationTemplateCode = `<EForm v-model="isValid">
  <ECheckbox
    v-model="termsAccepted"
    label="I accept the terms of service"
    :rules="[(value) => value === true || 'You must accept the terms before continuing.']"
  />

  <EButton color="primary" @click="submitted = true">
    Create account
  </EButton>
</EForm>`

const validationTsCode = `const isValid = ref<boolean | undefined>()
const submitted = ref(false)
const termsAccepted = ref(false)`
</script>

<style scoped>
.checkbox-page__inline-link {
  color: inherit;
  text-decoration: underline;
}
</style>
