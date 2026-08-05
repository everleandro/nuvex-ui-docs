<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections['usage-design'].key" :title="sections['usage-design'].title"
      :description-html="sections['usage-design'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <DocsDataSchedulingScheduleUsageDesignPreview />
        </template>
        <template #panel-template>
          <CodePanel :code="usageTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="usageTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['without-toolbar'].key" :title="sections['without-toolbar'].title"
      :description-html="sections['without-toolbar'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <DocsDataSchedulingScheduleWithoutToolbarPreview />
        </template>
        <template #panel-template>
          <CodePanel :code="withoutToolbarTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.slots.key" :title="sections.slots.title"
      :description-html="sections.slots.descriptionHtml">
      <h3 class="type-h5 text-heading mb-2">{{ scheduleLabel('toolbarSlotTitle') }}</h3>
      <p class="type-body mb-4">{{ scheduleLabel('toolbarSlotBody') }}</p>
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <DocsDataSchedulingScheduleToolbarSlotPreview />
        </template>
        <template #panel-template>
          <CodePanel :code="toolbarTemplateCode" />
        </template>
      </DocsComponentPlayground>

      <h3 class="type-h5 text-heading mt-8 mb-2">{{ scheduleLabel('eventSlotTitle') }}</h3>
      <p class="type-body mb-4">{{ scheduleLabel('eventSlotBody') }}</p>
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <DocsDataSchedulingScheduleEventSlotPreview />
        </template>
        <template #panel-template>
          <CodePanel :code="eventTemplateCode" />
        </template>
      </DocsComponentPlayground>

      <h3 class="type-h5 text-heading mt-8 mb-2">{{ scheduleLabel('emptySlotTitle') }}</h3>
      <p class="type-body mb-4">{{ scheduleLabel('emptySlotBody') }}</p>
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <DocsDataSchedulingScheduleEmptySlotPreview />
        </template>
        <template #panel-template>
          <CodePanel :code="emptySlotTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.integration.key" :title="sections.integration.title"
      :description-html="sections.integration.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <DocsDataSchedulingScheduleIntegrationPreview />
        </template>
        <template #panel-template>
          <CodePanel :code="integrationTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="integrationTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
      :description-html="sections.accessibility.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <DocsDataSchedulingScheduleAccessibilityPreview />
        </template>
        <template #panel-template>
          <CodePanel :code="accessibilityTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <h3 class="type-h5 text-heading mb-3">{{ scheduleLabel('apiPropsTitle') }}</h3>
      <div class="app-responsive-content">
        <DocsApiTable :api-reference="localizedApi.props" />
      </div>
      <h3 class="type-h5 text-heading mt-8 mb-3">{{ scheduleLabel('apiSlotsTitle') }}</h3>
      <div class="app-responsive-content">
        <DocsApiTable :api-reference="localizedApi.slots" />
      </div>
      <h3 class="type-h5 text-heading mt-8 mb-3">{{ scheduleLabel('apiEventsTitle') }}</h3>
      <div class="app-responsive-content">
        <DocsApiTable :api-reference="localizedApi.events" />
      </div>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  scheduleApiReference,
  scheduleEventsReference,
  scheduleSlotsReference,
} from '~/api-reference/data-scheduling/schedule'
import {
  scheduleApiReferenceEs,
  scheduleEventsReferenceEs,
  scheduleSlotsReferenceEs,
} from '~/api-reference/data-scheduling/schedule-es'
import { createScheduleUsageTsCode, scheduleCodeSnippets } from './schedule.snippets'

type ScheduleSectionKey = 'usage-design' | 'without-toolbar' | 'slots' | 'integration' | 'accessibility' | 'props'

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.schedule.schedule')
const getRequiredSection = (key: ScheduleSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `Schedule documentation section missing: ${key}` })
  return section
}
const sections = computed(() => ({
  'usage-design': getRequiredSection('usage-design'),
  'without-toolbar': getRequiredSection('without-toolbar'),
  slots: getRequiredSection('slots'),
  integration: getRequiredSection('integration'),
  accessibility: getRequiredSection('accessibility'),
  props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const scheduleLabels = computed<Record<string, string>>(() => {
  const labels = content.value.labels.scheduleText
  return labels && !Array.isArray(labels) ? labels : {}
})
const scheduleLabel = (key: string) => scheduleLabels.value[key] ?? key
const usageTsCode = computed(() => {
  const spaces = content.value.labels.scheduleSpaces as { studioA: string }
  const events = content.value.labels.scheduleEvents as {
    planning: { name: string, footer: string }
    research: { name: string, footer: string }
  }
  return createScheduleUsageTsCode({
    spaceLabel: spaces.studioA,
    planningName: events.planning.name,
    planningFooter: events.planning.footer,
    researchName: events.research.name,
    researchFooter: events.research.footer,
    locale: locale.value,
  })
})
const localizedApi = computed(() => locale.value === 'es'
  ? { props: scheduleApiReferenceEs, slots: scheduleSlotsReferenceEs, events: scheduleEventsReferenceEs }
  : { props: scheduleApiReference, slots: scheduleSlotsReference, events: scheduleEventsReference })
const { tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()
const {
  usageTemplateCode,
  withoutToolbarTemplateCode,
  toolbarTemplateCode,
  eventTemplateCode,
  emptySlotTemplateCode,
  integrationTemplateCode,
  integrationTsCode,
  accessibilityTemplateCode,
} = scheduleCodeSnippets
</script>
