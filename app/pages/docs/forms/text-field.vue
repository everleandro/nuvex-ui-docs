<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsInlinePlayground" :color="color" mode="inline-example" inline-tab-value="playground">
        <template #panel-playground>
          <div class="full-height d-flex flex-col p-4">
            <div class="flex-1 d-flex justify-center items-center">
              <ETextfield v-model="playgroundValue" :label="fieldLabel" :placeholder="placeholder"
                :outlined="isOutlined" :disabled="isDisabled" :readonly="isReadonly" :clearable="isClearable"
                :counter="showCounter" :limit="showCounter ? maxLength : undefined" :required="isRequired"
                :color="color" />
            </div>
            <div class="flex-1">
              <div v-text="playgroundSnippet" v-prism ></div>
            </div>
          </div>
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="isOutlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="isDisabled" cols="24" :label="controlLabel('disabled')" :color="color" />
            <ECheckbox v-model="isReadonly" cols="24" :label="controlLabel('readonly')" :color="color" />
            <ECheckbox v-model="isClearable" cols="24" :label="controlLabel('clearable')" :color="color" />
            <ECheckbox v-model="showCounter" cols="24" :label="controlLabel('counter')" :color="color" />
            <ECheckbox v-model="isRequired" cols="24" :label="controlLabel('required')" :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['input-types'].key" :title="sections['input-types'].title"
      :description-html="sections['input-types'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <div class="pa-4 d-flex flex-col gap-4">
            <ETextfield v-model="typeValueText" label="Text" placeholder="Regular text input" type="text"
              :color="color" />
            <ETextfield v-model="typeValueEmail" label="Email" placeholder="name@company.com" type="email"
              :color="color" />
            <ETextfield v-model="typeValuePassword" label="Password" placeholder="Enter password" type="password"
              :color="color" />
          </div>
        </template>

        <template #panel-template>
          <div v-text="typeSnippet" v-prism class="full-height"></div>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['prefix-suffix-counter'].key" :title="sections['prefix-suffix-counter'].title"
      :description="sections['prefix-suffix-counter'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <div class="pa-4 d-flex flex-col gap-4">
            <ETextfield v-model="priceValue" label="Price" prefix="$" suffix="USD" clearable :color="color" />
            <ETextfield v-model="skuValue" label="SKU" placeholder="AA-1234" counter :limit="12" :color="color" />
          </div>
        </template>

        <template #panel-template>
          <div v-text="prefixSuffixSnippet" v-prism class="full-height"></div>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['inner-icons'].key" :title="sections['inner-icons'].title"
      :description="sections['inner-icons'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <div class="pa-4 d-flex flex-col gap-4">
            <ETextfield v-model="searchValue" label="Search" placeholder="Search components"
              :prepend-inner-icon="$icon.search" clearable :color="color" />
            <ETextfield v-model="profileValue" label="Profile" placeholder="username"
              :prepend-inner-icon="$icon.account" :append-inner-icon="$icon.checkCircle" :color="color" />
          </div>
        </template>

        <template #panel-template>
          <div v-text="iconSnippet" v-prism class="full-height"></div>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.states.key" :title="sections.states.title"
      :description="sections.states.description">
      <div v-text="statesSnippet" v-prism class="full-height"></div>
    </DocsSection>

    <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
      :description="sections.accessibility.description">
      <div v-text="accessibilitySnippet" v-prism class="full-height"></div>
    </DocsSection>

    <DocsSection :id="sections.integration.key" :title="sections.integration.title"
      :description="sections.integration.description">
      <div v-text="integrationSnippet" v-prism class="full-height"></div>
    </DocsSection>

    <DocsSection :id="sections['do-dont'].key" :title="sections['do-dont'].title"
      :description="sections['do-dont'].description">
      <div v-text="doSnippet" v-prism class="full-height mb-4"></div>
      <div v-text="dontSnippet" v-prism class="full-height"></div>
    </DocsSection>

    <DocsSection :id="sections['composition-patterns'].key" :title="sections['composition-patterns'].title"
      :description="sections['composition-patterns'].description">
      <div v-text="compositionSnippet" v-prism class="full-height"></div>
    </DocsSection>

    <DocsSection :id="sections.faq.key" :title="sections.faq.title" :description="sections.faq.description">
      <DocsFaqPanel :items="faqItems" />
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="textFieldApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { textFieldApiReference } from '~/api-reference/forms/text-field'
import { getDocsComponentPageContent } from '~/content/docs'
import { buildSfcSnippet } from '~/utils/snippet-sfc'

const { locale } = useI18n()

const content = computed(() => {
  const resolvedContent = getDocsComponentPageContent('/docs/forms/text-field', locale.value)

  if (!resolvedContent) {
    throw createError({ statusCode: 404, statusMessage: 'TextField documentation content not found' })
  }

  return resolvedContent
})

type TextFieldSectionKey =
  | 'usage'
  | 'input-types'
  | 'prefix-suffix-counter'
  | 'inner-icons'
  | 'states'
  | 'accessibility'
  | 'integration'
  | 'do-dont'
  | 'composition-patterns'
  | 'faq'
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
    'input-types': getRequiredSection('input-types'),
    'prefix-suffix-counter': getRequiredSection('prefix-suffix-counter'),
    'inner-icons': getRequiredSection('inner-icons'),
    states: getRequiredSection('states'),
    accessibility: getRequiredSection('accessibility'),
    integration: getRequiredSection('integration'),
    'do-dont': getRequiredSection('do-dont'),
    'composition-patterns': getRequiredSection('composition-patterns'),
    faq: getRequiredSection('faq'),
    props: getRequiredSection('props'),
  }
})

const faqItems = computed(() => {
  return sections.value.faq.faqItems ?? []
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

const isOutlined = ref(false)
const isDisabled = ref(false)
const isReadonly = ref(false)
const isClearable = ref(true)
const showCounter = ref(false)
const isRequired = ref(false)

const playgroundValue = ref('')
const typeValueText = ref('')
const typeValueEmail = ref('')
const typeValuePassword = ref('')
const priceValue = ref('19.99')
const skuValue = ref('AA-1024')
const searchValue = ref('')
const profileValue = ref('nuvex-user')

const tabsInlinePlayground = computed(() => [
  {
    value: 'playground',
    label: content.value.labels.tabs.example,
  },
])

const tabsDesignTemplate = computed(() => [
  {
    value: 'design',
    label: content.value.labels.tabs.design,
  },
  {
    value: 'template',
    label: content.value.labels.tabs.template,
  },
])

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const playgroundSnippet = computed(() => `<template>
  <e-text-field
    v-model="value"
    label="${fieldLabel.value}"
    placeholder="${placeholder.value}"${isOutlined.value ? '\n    outlined' : ''}${isDisabled.value ? '\n    disabled' : ''}${isReadonly.value ? '\n    readonly' : ''}${isClearable.value ? '\n    clearable' : ''}${showCounter.value ? `\n    counter\n    :limit="${maxLength.value}"` : ''}${isRequired.value ? '\n    required' : ''}
    color="${color.value}"
  />
</template>`)

const typeSnippet = `<template>
  <e-text-field v-model="textValue" label="Text" type="text" />
  <e-text-field v-model="emailValue" label="Email" type="email" />
  <e-text-field v-model="passwordValue" label="Password" type="password" />
</template>`

const prefixSuffixSnippet = `<template>
  <e-text-field v-model="price" label="Price" prefix="$" suffix="USD" clearable />
  <e-text-field v-model="sku" label="SKU" counter :limit="12" />
</template>`

const iconSnippet = `<template>
  <e-text-field
    v-model="search"
    label="Search"
    :prepend-inner-icon="iconSearch"
    clearable
  />
  <e-text-field
    v-model="profile"
    label="Profile"
    :prepend-inner-icon="iconAccount"
    :append-inner-icon="iconCheckCircle"
  />
</template>`

const statesSnippet = `<template>
  <e-text-field
    v-model="email"
    label="Work email"
    :error-messages="emailErrors"
    :aria-invalid="emailErrors.length > 0"
  />

  <e-text-field v-model="invoiceId" label="Invoice ID" readonly />
  <e-text-field v-model="legacyCode" label="Legacy Code" disabled />
</template>`

const accessibilitySnippet = `<template>
  <e-text-field
    v-model="username"
    label="Username"
    hint="Use 4 to 20 characters"
    :counter="true"
    :limit="20"
  />
</template>`

const integrationSnippet = buildSfcSnippet({
  template: `  <e-text-field
    v-model="form.email"
    label="Email"
    :error-messages="errors.email"
  />

  <e-button :loading="submitting" :disabled="submitting" @click="submit">
    Submit form
  </e-button>`,
  scriptSetup: `const submitting = ref(false)
const form = reactive({ email: '' })
const errors = reactive({ email: [] as string[] })

const submit = async () => {
  errors.email = form.email ? [] : ['Email is required']
  if (errors.email.length) return
  submitting.value = true
  try {
    await saveForm(form)
  } finally {
    submitting.value = false
  }
}`,
})

const doSnippet = `<template>
  <e-text-field label="Email" type="email" />
  <e-text-field label="SKU" counter :limit="12" />
  <e-text-field label="Name" clearable />
</template>`

const dontSnippet = `<template>
  <e-text-field placeholder="Write your email" />
  <e-text-field label="Very very very very long confusing label" />
  <e-text-field label="Password" type="text" />
</template>

<!-- Avoid placeholders as labels, verbose labels, or non-semantic input types -->`

const compositionSnippet = `<template>
  <div class="d-flex ga-3 align-end">
    <e-text-field v-model="filters.query" label="Search" clearable />
    <e-select v-model="filters.status" :items="statusOptions" label="Status" />
    <e-button color="primary">Apply filters</e-button>
  </div>
</template>`

</script>

<style lang="scss">
.docs-page {
  .e-text-field {
    margin-bottom: 8px;
  }
}
</style>
