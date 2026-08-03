<template>
  <article class="docs-page tabs-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title"
      :description-html="sections.usage.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <div class="full-width">
            <ETabGroup v-model="usageTab" :color="color" :inactive-color="inactiveColor"
              :tab-align="tabProperties.tabAlign" :track="tabProperties.track" :grow="tabProperties.grow">
              <ETab value="overview">{{ tabsLabel('overview') }}</ETab>
              <ETab value="activity">{{ tabsLabel('activity') }}</ETab>
              <ETab value="settings">{{ tabsLabel('settings') }}</ETab>
            </ETabGroup>
            <p class="type-caption text-medium-emphasis mt-3">
              {{ tabsLabel('selectedValue') }}: {{ usageTab }}
            </p>
          </div>
        </template>
        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :label="controlLabel('color')" />
            <ESelect v-model="inactiveColor" cols="24" :items="colors" :label="controlLabel('inactiveColor')" />
            <ESelect v-model="tabProperties.tabAlign" cols="24" :items="alignments" :label="controlLabel('tabAlign')" />
            <ECheckbox v-model="tabProperties.track" cols="24" :label="controlLabel('track')" />
            <ECheckbox v-model="tabProperties.grow" cols="24" :label="controlLabel('grow')" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['content-panels'].key" :title="sections['content-panels'].title"
      :description-html="sections['content-panels'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <div class="full-width">
            <ETabGroup v-model="panelTab" name="account-tabs" track color="primary">
              <ETab value="overview">{{ tabsLabel('overview') }}</ETab>
              <ETab value="activity">{{ tabsLabel('activity') }}</ETab>
              <ETab value="settings">{{ tabsLabel('settings') }}</ETab>
            </ETabGroup>
            <EWindow v-model="panelTab" name="account-tabs" class="tabs-page__window mt-4">
              <EWindowItem value="overview">
                <p class="type-body">{{ tabsLabel('overviewBody') }}</p>
              </EWindowItem>
              <EWindowItem value="activity">
                <p class="type-body">{{ tabsLabel('activityBody') }}</p>
              </EWindowItem>
              <EWindowItem value="settings">
                <p class="type-body">{{ tabsLabel('settingsBody') }}</p>
              </EWindowItem>
            </EWindow>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="contentPanelsTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="contentPanelsTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.orientation.key" :title="sections.orientation.title"
      :description-html="sections.orientation.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <div class="d-flex items-center full-width gap-4">
            <ETabGroup v-model="orientationTab" name="foundation-tabs" vertical tab-align="start" track color="primary"
              inactive-color="secondary">
              <ETab value="foundation">{{ tabsLabel('foundation') }}</ETab>
              <ETab value="components">{{ tabsLabel('components') }}</ETab>
              <ETab value="utilities">{{ tabsLabel('utilities') }}</ETab>
            </ETabGroup>
            <EWindow v-model="orientationTab" name="foundation-tabs" class="p-4">
              <EWindowItem value="foundation">
                <h3 class="type-h6 mb-2">{{ tabsLabel('foundation') }}</h3>
                <p class="type-body">{{ tabsLabel('foundationBody') }}</p>
              </EWindowItem>
              <EWindowItem value="components">
                <h3 class="type-h6 mb-2">{{ tabsLabel('components') }}</h3>
                <p class="type-body">{{ tabsLabel('componentsBody') }}</p>
              </EWindowItem>
              <EWindowItem value="utilities">
                <h3 class="type-h6 mb-2">{{ tabsLabel('utilities') }}</h3>
                <p class="type-body">{{ tabsLabel('utilitiesBody') }}</p>
              </EWindowItem>
            </EWindow>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="orientationTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="orientationTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['states-and-interactions'].key" :title="sections['states-and-interactions'].title"
      :description-html="sections['states-and-interactions'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <div class="full-width">
            <ETabGroup v-model="stateTab" track color="primary">
              <ETab value="profile">{{ tabsLabel('profile') }}</ETab>
              <ETab value="security">{{ tabsLabel('security') }}</ETab>
              <ETab value="billing" disabled>{{ tabsLabel('billing') }}</ETab>
            </ETabGroup>
            <div class="d-flex flex-wrap gap-3 items-center mt-4">
              <EButton outlined color="primary" @click="stateTab = 'security'">{{ tabsLabel('openSecurity') }}</EButton>
              <span class="type-caption text-medium-emphasis">{{ tabsLabel('selectedValue') }}: {{ stateTab }}</span>
            </div>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="statesTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="statesTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['slots-composition'].key" :title="sections['slots-composition'].title"
      :description-html="sections['slots-composition'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <div class="full-width">
            <ETabGroup v-model="compositionTab" color="primary" track grow>
              <ETab value="design" :icon="$icon.designSystem" />
              <ETab value="docs" :icon="$icon.introduction" />
              <ETab value="releases" :icon="$icon.gettingStarted" />
            </ETabGroup>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="compositionTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
      :description-html="sections.accessibility.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <div class="full-width">
            <p class="type-caption text-medium-emphasis mt-3">{{ tabsLabel('keyboardHint') }}</p>
            <ETabGroup v-model="accessibilityTab" name="workspace-tabs" :aria-label="tabsLabel('workspaceAriaLabel')"
              track color="primary">
              <ETab value="overview">{{ tabsLabel('overview') }}</ETab>
              <ETab value="activity">{{ tabsLabel('activity') }}</ETab>
              <ETab value="settings">{{ tabsLabel('settings') }}</ETab>
            </ETabGroup>
            <EWindow v-model="accessibilityTab" name="workspace-tabs" class="tabs-page__window mt-4">
              <EWindowItem value="overview">
                <p class="type-body">{{ tabsLabel('overviewBody') }}</p>
              </EWindowItem>
              <EWindowItem value="activity">
                <p class="type-body">{{ tabsLabel('activityBody') }}</p>
              </EWindowItem>
              <EWindowItem value="settings">
                <p class="type-body">{{ tabsLabel('settingsBody') }}</p>
              </EWindowItem>
            </EWindow>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="accessibilityTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <h3 class="type-h5 text-heading mb-3">{{ tabsLabel('apiGroup') }}</h3>
      <DocsApiTable :api-reference="localizedApi.group" />
      <h3 class="type-h5 text-heading mt-6 mb-3">{{ tabsLabel('apiTab') }}</h3>
      <DocsApiTable :api-reference="localizedApi.tab" />
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ tabsLabel('eventsTitle') }}</h3>
      <p class="type-body">{{ tabsLabel('eventsBody') }}</p>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { tabApiReference, tabGroupApiReference } from '~/api-reference/navigation/tabs'
import { tabApiReferenceEs, tabGroupApiReferenceEs } from '~/api-reference/navigation/tabs-es'
import { tabsCodeSnippets } from './tabs.snippets'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

type TabsSectionKey = 'usage' | 'visual-variants' | 'alignment-and-growth' | 'orientation' | 'content-panels'
  | 'states-and-interactions' | 'slots-composition' | 'accessibility' | 'props'

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.tabs.tabs')
const getRequiredSection = (key: TabsSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `Tabs documentation section missing: ${key}` })
  return section
}
const sections = computed(() => ({
  usage: getRequiredSection('usage'),
  'visual-variants': getRequiredSection('visual-variants'),
  'alignment-and-growth': getRequiredSection('alignment-and-growth'),
  orientation: getRequiredSection('orientation'),
  'content-panels': getRequiredSection('content-panels'),
  'states-and-interactions': getRequiredSection('states-and-interactions'),
  'slots-composition': getRequiredSection('slots-composition'),
  accessibility: getRequiredSection('accessibility'),
  props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const colors = ['primary', 'secondary', 'success', 'warning']
const alignments = ['start', 'center', 'end']
const color = ref('primary')
const inactiveColor = ref('secondary')
const tabProperties = ref({ track: true, grow: false, tabAlign: 'center' })
const usageTab = ref('overview')
const visualDefaultTab = ref('overview')
const visualTrackedTab = ref('activity')
const visualIconTab = ref('design')
const alignmentTab = ref('overview')
const orientationTab = ref('foundation')
const panelTab = ref('overview')
const stateTab = ref('profile')
const compositionTab = ref('design')
const accessibilityTab = ref('overview')

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()
const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const tabsLabel = (key: string): string => {
  const labels = content.value.labels.tabsText
  return labels && !Array.isArray(labels) ? labels[key] ?? key : key
}

const usageTemplateCode = computed(() => buildTemplateElementSnippet({
  tag: 'ETabGroup',
  attrs: [
    'v-model="activeTab"',
    color.value !== 'primary' && `color="${color.value}"`,
    inactiveColor.value !== 'secondary' && `inactive-color="${inactiveColor.value}"`,
    tabProperties.value.tabAlign !== 'center' && `tab-align="${tabProperties.value.tabAlign}"`,
    tabProperties.value.track && 'track',
    tabProperties.value.grow && 'grow'
  ],
  contentLines: [`<ETab value="overview">Overview</ETab>
    <ETab value="activity">Activity</ETab>
    <ETab value="settings">Settings</ETab>`],
}))

const localizedApi = computed(() => locale.value === 'es'
  ? { group: tabGroupApiReferenceEs, tab: tabApiReferenceEs }
  : { group: tabGroupApiReference, tab: tabApiReference })

const {
  visualVariantsTemplateCode,
  alignmentTemplateCode,
  orientationTemplateCode,
  orientationTsCode,
  contentPanelsTemplateCode,
  contentPanelsTsCode,
  statesTemplateCode,
  statesTsCode,
  compositionTemplateCode,
  accessibilityTemplateCode,
} = tabsCodeSnippets
</script>

<style scoped lang="scss"></style>
