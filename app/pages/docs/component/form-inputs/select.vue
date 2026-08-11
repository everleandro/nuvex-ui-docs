<template>
  <article class="docs-page select-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ESelect v-model="playgroundValue" :items="assigneeItems" item-text="name" item-value="id"
            :label="playgroundLabel" :placeholder="playgroundPlaceholder" :outlined="selectProperty.outlined"
            :disabled="selectProperty.disabled" :readonly="selectProperty.readonly"
            :clearable="selectProperty.clearable" :chip="selectProperty.chip" :color="color" />
        </template>

        <template #panel-design-code>
          <CodePanel :code="usageHtmlCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="selectProperty.outlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="selectProperty.disabled" cols="24" :label="controlLabel('disabled')" :color="color" />
            <ECheckbox v-model="selectProperty.readonly" cols="24" :label="controlLabel('readonly')" :color="color" />
            <ECheckbox v-model="selectProperty.clearable" cols="24" :label="controlLabel('clearable')" :color="color" />
            <ECheckbox v-model="selectProperty.chip" cols="24" :label="controlLabel('chip')" :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['item-mapping'].key" :title="sections['item-mapping'].title"
      :description="sections['item-mapping'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <EForm>
            <ESelect v-model="mappedPrimitiveValue" lg="6" :items="assigneeItems" item-text="name" item-value="id"
              label="Primitive model (id)" clearable />
            <ESelect v-model="mappedObjectValue" lg="6" :items="assigneeItems" item-text="name" item-value="id"
              return-object label="Object model (item)" clearable />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="itemMappingTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="itemMappingTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description="sections['visual-variants'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ESelect v-model="visualVariants.default" lg="4" :items="statusItems" label="Default" :color="color" />
            <ESelect v-model="visualVariants.outlined" lg="4" :items="statusItems" label="Outlined" outlined
              :color="color" />
            <ESelect v-model="visualVariants.readonly" lg="4" :items="statusItems" label="Readonly" readonly outlined
              :color="color" />
            <ESelect v-model="visualVariants.disabled" lg="6" :items="statusItems" label="Disabled" disabled
              :color="color" />
            <ESelect v-model="visualVariants.disabledOutlined" lg="6" :items="statusItems" label="Disabled outlined"
              disabled outlined :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['multiple-and-chips'].key" :title="sections['multiple-and-chips'].title"
      :description="sections['multiple-and-chips'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ESelect v-model="tagValues" lg="6" :items="tagItems" multiple chip clearable label="Tags (multiple + chip)"
              :color="color" />
            <ESelect v-model="singleChipValue" lg="6" :items="statusItems" chip chip-closable clearable
              label="Single chip" :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="multipleAndChipsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['autocomplete-and-search'].key" :title="sections['autocomplete-and-search'].title"
      :description="sections['autocomplete-and-search'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ESelect v-model="fruitValue" :items="filteredFruitItems" :search="searchQuery" autocomplete clearable
            :color="color" label="Search fruit" placeholder="Type to filter"
            @update:search="searchQuery = String($event ?? '')" />
        </template>

        <template #panel-template>
          <CodePanel :code="autocompleteTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="autocompleteTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['slots'].key" :title="sections['slots'].title"
      :description-html="sections['slots'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTsCss" :color="color">
        <template #panel-design>
          <ESelect v-model="slotValue" :items="assigneeItems" item-text="name" item-value="id" label="Assignee"
            :color="color">
            <template #selection="{ selection, attrs }">
              <EChip v-bind="attrs" :prepend-avatar="selection?.avatarSrc" :avatar-size="32" closable>
                {{ selection?.name }}
              </EChip>
            </template>
            <template #item="{ item, attrs }">
              <EListItem v-bind="attrs" class="select-page__item-avatar" :prepend-avatar="item.avatarSrc"
                :title="item.name" :subtitle="item.email" />
            </template>
          </ESelect>
        </template>

        <template #panel-template>
          <CodePanel :code="slotsTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="slotsTsCode" language="ts" />
        </template>

        <template #panel-css>
          <CodePanel :code="slotsCssCode" language="scss" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['async-loading'].key" :title="sections['async-loading'].title"
      :description="sections['async-loading'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ESelect v-model="countryValue" :items="countryItems" item-text="name" item-value="code"
            :loading="loadingCountries" clearable label="Country"
            detail="Data is loaded when the control receives focus" :color="color" @focus="fetchCountries" />
        </template>

        <template #panel-template>
          <CodePanel :code="asyncTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="asyncTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['validation'].key" :title="sections['validation'].title"
      :description="sections['validation'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <DocsFormsSelectValidationPreview />
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
      <DocsApiTable :api-reference="localizedSelectApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { selectApiReference } from '~/api-reference/forms/select'
import { selectApiReferenceEs } from '~/api-reference/forms/select-es'
import { selectCodeSnippets } from './select.snippets'
import type { AvatarItem } from '~/composables/useAvatars'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

type Country = {
  code: string
  name: string
}

const { locale } = useI18n()

const content = useDocsComponentI18nContent('pages.input.select')

type SelectSectionKey =
  | 'usage'
  | 'item-mapping'
  | 'visual-variants'
  | 'multiple-and-chips'
  | 'autocomplete-and-search'
  | 'slots'
  | 'async-loading'
  | 'validation'
  | 'props'

const getRequiredSection = (key: SelectSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Select documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    'item-mapping': getRequiredSection('item-mapping'),
    'visual-variants': getRequiredSection('visual-variants'),
    'multiple-and-chips': getRequiredSection('multiple-and-chips'),
    'autocomplete-and-search': getRequiredSection('autocomplete-and-search'),
    slots: getRequiredSection('slots'),
    'async-loading': getRequiredSection('async-loading'),
    validation: getRequiredSection('validation'),
    props: getRequiredSection('props'),
  }
})

const localizedSelectApiReference = computed(() => {
  return locale.value === 'es' ? selectApiReferenceEs : selectApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
  ogTitle: computed(() => content.value.seo.title),
  ogDescription: computed(() => content.value.seo.description),
  twitterTitle: computed(() => content.value.seo.title),
  twitterDescription: computed(() => content.value.seo.description),
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const playgroundLabel = ref('Assignee')
const playgroundPlaceholder = ref('Select assignee')

const statusItems = ['Draft', 'In review', 'Published', 'Archived']
const tagItems = ['UI', 'Accessibility', 'API', 'Performance', 'Documentation']
const fruitItems = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Date', 'Grape', 'Orange']

const { getAvatarList } = useAvatars()

const assigneeItems: AvatarItem[] = getAvatarList()

const countryItems = ref<Country[]>([])

const selectProperty = ref({
  outlined: false,
  readonly: false,
  disabled: false,
  clearable: true,
  chip: false,
  autocomplete: false,
  returnObject: false,
})

const playgroundValue = ref<string | AvatarItem | Array<string | AvatarItem> | undefined>('ana')

const mappedPrimitiveValue = ref<string | undefined>('ana')
const mappedObjectValue = ref<AvatarItem | undefined>(assigneeItems[0])

const visualVariants = ref({
  default: 'Draft',
  outlined: 'In review',
  readonly: 'Published',
  disabled: 'Archived',
  disabledOutlined: 'Archived',
})

const tagValues = ref<string[]>(['UI', 'API'])
const singleChipValue = ref<string | undefined>('Draft')

const searchQuery = ref('')
const fruitValue = ref<string | undefined>('')

const filteredFruitItems = computed(() => {
  const term = searchQuery.value.trim().toLowerCase()

  if (!term) return fruitItems

  return fruitItems.filter((item) => item.toLowerCase().includes(term))
})

const slotValue = ref<string | undefined>('ana')

const loadingCountries = ref(false)
const countryValue = ref<string | undefined>()

const fetchCountries = async () => {
  if (countryItems.value.length > 0 || loadingCountries.value) return

  loadingCountries.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
    countryItems.value = [
      { code: 'es', name: 'Spain' },
      { code: 'mx', name: 'Mexico' },
      { code: 'ar', name: 'Argentina' },
      { code: 'co', name: 'Colombia' },
    ]
  } finally {
    loadingCountries.value = false
  }
}

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs, tabsDesignTemplateTsCss } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const usageHtmlCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: 'e-select',
    attrs: [
      ':items="assigneeItems"',
      'item-text="name"',
      'item-value="id"',
      'label="Assignee"',
      `color="${color.value}"`,
      selectProperty.value.outlined && 'outlined',
      selectProperty.value.disabled && 'disabled',
      selectProperty.value.readonly && 'readonly',
      selectProperty.value.clearable && 'clearable',
      selectProperty.value.chip && 'chip',
    ],
  })
})

const {
  itemMappingTemplateCode,
  itemMappingTsCode,
  visualVariantsTemplateCode,
  multipleAndChipsTemplateCode,
  autocompleteTemplateCode,
  autocompleteTsCode,
  slotsTemplateCode,
  slotsTsCode,
  slotsCssCode,
  asyncTemplateCode,
  asyncTsCode,
  validationTemplateCode,
  validationTsCode,
} = selectCodeSnippets
</script>
<style scoped lang="scss">
.select-page__item-avatar {
  --list-item-affix-width: 44px;
}
</style>
