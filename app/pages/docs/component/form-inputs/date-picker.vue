<template>
  <article class="docs-page date-picker-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title"
      :description-html="sections.usage.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="usageColor">
        <template #panel-design>
          <EDatePicker v-model="usageDate" :color="usageColor" :landscape="usageLandscape" :elevation="usageElevation"
            :grid-button-elevation="usageGridButtonElevation" :no-title="usageNoTitle" />
        </template>

        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="usageColor" cols="24" :items="colors" :color="usageColor"
              :label="controlLabel('color')" />
            <ESelect v-model="usageElevation" cols="24" :items="elevationOptions" item-text="label" clearable
              item-value="value" :color="usageColor" :label="controlLabel('elevation')" />
            <ESelect v-model="usageGridButtonElevation" cols="24" :items="elevationOptions" item-text="label" clearable
              item-value="value" :color="usageColor" :label="controlLabel('gridButtonElevation')" />
            <ECheckbox v-model="usageLandscape" cols="24" :label="controlLabel('landscape')" :color="usageColor" />
            <ECheckbox v-model="usageNoTitle" cols="24" :label="controlLabel('noTitle')" :color="usageColor" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['disabled-dates'].key" :title="sections['disabled-dates'].title"
      :description-html="sections['disabled-dates'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="secondary">
        <template #panel-design>
          <ERow class="flex-1-1-0">
            <ECol sm="6">
              <ECard :title="dateRulesCardsText.disabledTitle" :subtitle="dateRulesCardsText.disabledSubtitle">
                <div class="d-flex justify-center">
                  <EDatePicker v-model="disabledDate" color="secondary" :disabled="disabledDateRules" />
                </div>
              </ECard>
            </ECol>
            <ECol sm="6">
              <ECard :title="dateRulesCardsText.highlightedTitle" :subtitle="dateRulesCardsText.highlightedSubtitle">
                <div class="d-flex justify-center">
                  <EDatePicker v-model="highlightedDate" color="primary" :highlighted="highlightedDateRules" />
                </div>
              </ECard>
            </ECol>
          </ERow>
        </template>

        <template #panel-template>
          <CodePanel :code="dateRulesTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="dateRulesTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.localization.key" :title="sections.localization.title"
      :description-html="sections.localization.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <ERow class="flex-1-1-0">
            <ECol sm="6">
              <ECard :title="localizationCardsText.spanishTitle" :subtitle="localizationCardsText.spanishSubtitle">
                <div class="d-flex justify-center">
                  <EDatePicker v-model="localizedSpanishDate" lng="es" color="secondary" />
                </div>
              </ECard>
            </ECol>
            <ECol sm="6">
              <ECard :title="localizationCardsText.frenchTitle" :subtitle="localizationCardsText.frenchSubtitle">
                <div class="d-flex justify-center">
                  <EDatePicker v-model="localizedFrenchDate" lng="fr" color="primary" />
                </div>
              </ECard>
            </ECol>
          </ERow>
        </template>

        <template #panel-template>
          <CodePanel :code="localizationTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="localizationTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.integration.key" :title="sections.integration.title"
      :description-html="sections.integration.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <EDialog v-model="integrationDialogOpen">
            <EDatePicker v-model="birthDate" color="secondary" close-on-change />
          </EDialog>

          <ERow class="flex-1-1-0">
            <ECol sm="6">
              <ETextfield id="date-picker-birth-date" :model-value="formatDisplayDate(birthDate)"
                :label="integrationText.birthDateLabel" :append-icon="$icon.calendar" input-align="end" input-readonly
                @click="integrationDialogOpen = true" />
            </ECol>
            <ECol sm="6">
              <EMenu origin="bottom right" fit-content>
                <template #activator="{ attrs }">
                  <ETextfield id="date-picker-deadline" :model-value="formatDisplayDate(deadline)"
                    :label="integrationText.deadlineLabel" :append-icon="$icon.calendar" input-align="end"
                    input-readonly v-bind="attrs" />
                </template>
                <EDatePicker v-model="deadline" color="primary" close-on-change />
              </EMenu>
            </ECol>
          </ERow>
        </template>

        <template #panel-template>
          <CodePanel :code="integrationTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="integrationTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedDatePickerApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { type DatesConfiguration } from 'nuvex-ui'
import { datePickerApiReference } from '~/api-reference/forms/date-picker'
import { datePickerApiReferenceEs } from '~/api-reference/forms/date-picker-es'
import { datePickerCodeSnippets } from './date-picker.snippets'

const content = useDocsComponentI18nContent('pages.input.datePicker')
const { locale } = useI18n()

type DatePickerSectionKey =
  | 'usage'
  | 'disabled-dates'
  | 'localization'
  | 'integration'
  | 'props'

type DatePickerLocalizationCardLabels = {
  spanishTitle: string
  spanishSubtitle: string
  frenchTitle: string
  frenchSubtitle: string
}

type DatePickerDateRulesCardLabels = {
  disabledTitle: string
  disabledSubtitle: string
  highlightedTitle: string
  highlightedSubtitle: string
}

type DatePickerIntegrationLabels = {
  birthDateLabel: string
  deadlineLabel: string
}

const getRequiredSection = (key: DatePickerSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Date Picker documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    'disabled-dates': getRequiredSection('disabled-dates'),
    localization: getRequiredSection('localization'),
    integration: getRequiredSection('integration'),
    props: getRequiredSection('props'),
  }
})

const dateRulesCardsText = computed<DatePickerDateRulesCardLabels>(() => {
  const datePickerText = content.value.labels.datePickerText as {
    disabledCard?: Partial<Pick<DatePickerDateRulesCardLabels, 'disabledTitle' | 'disabledSubtitle'>> & {
      title?: string
      subtitle?: string
    }
    highlightedCard?: Partial<Pick<DatePickerDateRulesCardLabels, 'highlightedTitle' | 'highlightedSubtitle'>> & {
      title?: string
      subtitle?: string
    }
  } | undefined

  return {
    disabledTitle: datePickerText?.disabledCard?.title ?? 'Blocked scheduling rules',
    disabledSubtitle: datePickerText?.disabledCard?.subtitle
      ?? 'Blocks weekends and August 20-25.',
    highlightedTitle: datePickerText?.highlightedCard?.title ?? 'Visible scheduling windows',
    highlightedSubtitle: datePickerText?.highlightedCard?.subtitle
      ?? 'Marks releases and the approval window.',
  }
})

const localizationCardsText = computed<DatePickerLocalizationCardLabels>(() => {
  const datePickerText = content.value.labels.datePickerText as {
    localizationCards?: Partial<DatePickerLocalizationCardLabels>
  } | undefined
  const raw = datePickerText?.localizationCards

  return {
    spanishTitle: raw?.spanishTitle ?? 'Spanish calendar',
    spanishSubtitle: raw?.spanishSubtitle ?? 'Calendar labels and month names are displayed in Spanish.',
    frenchTitle: raw?.frenchTitle ?? 'French calendar',
    frenchSubtitle: raw?.frenchSubtitle ?? 'Calendar labels and month names are displayed in French.',
  }
})

const integrationText = computed<DatePickerIntegrationLabels>(() => {
  const datePickerText = content.value.labels.datePickerText as {
    integration?: Partial<DatePickerIntegrationLabels>
  } | undefined
  const raw = datePickerText?.integration

  return {
    birthDateLabel: raw?.birthDateLabel ?? 'Birth date',
    deadlineLabel: raw?.deadlineLabel ?? 'Deadline',
  }
})

const localizedDatePickerApiReference = computed(() => {
  return locale.value === 'es' ? datePickerApiReferenceEs : datePickerApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
  ogTitle: computed(() => content.value.seo.title),
  ogDescription: computed(() => content.value.seo.description),
  twitterTitle: computed(() => content.value.seo.title),
  twitterDescription: computed(() => content.value.seo.description),
})

const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']
const elevations = ['xs', 'sm', 'md', 'lg', 'xl'] as const

const { tabsPlayground, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const elevationOptions = computed(() => {
  return elevations.map((value) => ({
    label: value,
    value,
  }))
})

const formatDisplayDate = (value?: Date | string) => {
  const normalized = value instanceof Date ? value : new Date(value ?? new Date(2026, 7, 14))
  const language = locale.value.startsWith('es') ? 'es-ES' : 'en-US'

  return new Intl.DateTimeFormat(language, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(normalized)
}

const disabledDateRules: DatesConfiguration = {
  days: [0, 6],
  ranges: [
    {
      from: new Date(2026, 7, 20),
      to: new Date(2026, 7, 25),
    },
  ],
}

const highlightedDateRules: DatesConfiguration = {
  dates: [new Date(2026, 7, 14), new Date(2026, 7, 29)],
  ranges: [
    {
      from: new Date(2026, 7, 10),
      to: new Date(2026, 7, 12),
    },
  ],
}

const usageDate = ref(new Date(2026, 7, 14))
const disabledDate = ref(new Date(2026, 7, 14))
const highlightedDate = ref(new Date(2026, 7, 14))
const usageColor = ref('primary')
const usageLandscape = ref(false)
const usageElevation = ref<(typeof elevations)[number] | undefined>(undefined)
const usageGridButtonElevation = ref<(typeof elevations)[number] | undefined>(undefined)
const usageNoTitle = ref(false)

const usageTemplateCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: 'e-date-picker',
    attrs: [
      'v-model="value"',
      `color="${usageColor.value}"`,
      !!usageElevation.value && `elevation="${usageElevation.value}"`,
      usageLandscape.value && 'landscape',
      !!usageGridButtonElevation.value && `grid-button-elevation="${usageGridButtonElevation.value}"`,
      usageNoTitle.value && 'no-title',
    ],
  })
})

const localizedSpanishDate = ref(new Date(2026, 7, 14))
const localizedFrenchDate = ref(new Date(2026, 7, 14))

const integrationDialogOpen = ref(false)
const birthDate = ref(new Date(1996, 3, 18))
const deadline = ref(new Date(2026, 9, 3))

const {
  dateRulesTemplateCode,
  dateRulesTsCode,
  localizationTemplateCode,
  localizationTsCode,
  integrationTemplateCode,
  integrationTsCode,
} = datePickerCodeSnippets
</script>
