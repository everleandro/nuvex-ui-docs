<template>
  <article class="docs-page list-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title"
      :description-html="sections.usage.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <div class="list-page__demo">
            <EList v-model="selectedValue" :outlined="listProperty.outlined" :inset="listProperty.inset"
              :disabled="listProperty.disabled" :size="listProperty.size != 'default' ? listProperty.size : undefined"
              :color="color" :active-color="activeColor">
              <EListItem value="inbox" :title="listLabel('inbox')" :subtitle="listLabel('inboxSubtitle')"
                :prepend-icon="$icon.email" />
              <EListItem value="drafts" :title="listLabel('drafts')" :subtitle="listLabel('draftsSubtitle')"
                :prepend-icon="$icon.pencil" />
              <EListItem value="archive" :title="listLabel('archive')" :subtitle="listLabel('archiveSubtitle')"
                :prepend-icon="$icon.layersOutline" />
            </EList>
            <p class="type-caption text-medium-emphasis mt-2">{{ listLabel('selectedValue') }}: {{ selectedValue }}</p>
          </div>
        </template>

        <template #panel-template>
          <CodePanel :code="usageTemplateCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :label="controlLabel('color')" clearable />
            <ESelect v-model="activeColor" cols="24" :items="colors" :label="controlLabel('activeColor')" clearable />
            <ESelect v-model="listProperty.size" cols="24" :items="sizes" :label="controlLabel('size')" />
            <ECheckbox v-model="listProperty.outlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="listProperty.inset" cols="24" :label="controlLabel('inset')" :color="color" />
            <ECheckbox v-model="listProperty.disabled" cols="24" :label="controlLabel('disabled')" :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['item-content'].key" :title="sections['item-content'].title"
      :description-html="sections['item-content'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <EList outlined inset class="list-page__demo">
            <EListItem :prepend-icon="$icon.account" :title="listLabel('profile')"
              :subtitle="listLabel('profileSubtitle')" />
            <EListItem :prepend-avatar="teamAvatar?.avatarSrc" :title="listLabel('team')"
              :subtitle="listLabel('teamSubtitle')" />
            <EListItem :prepend-icon="$icon.cog" :append-icon="$icon.arrowRight" :title="listLabel('notifications')"
              :subtitle="listLabel('notificationsSubtitle')" />
          </EList>
        </template>
        <template #panel-template>
          <CodePanel :code="itemContentTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description-html="sections['visual-variants'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <div class="list-page__variant-grid">
            <EList>
              <EListItem :title="listLabel('defaultVariant')" :subtitle="listLabel('defaultVariantSubtitle')" />
            </EList>
            <EList outlined inset elevation="sm" size="large">
              <EListItem :title="listLabel('outlinedVariant')" :subtitle="listLabel('outlinedVariantSubtitle')" />
            </EList>
            <EList dense size="small">
              <EListItem :title="listLabel('denseVariant')" :subtitle="listLabel('denseVariantSubtitle')" />
            </EList>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['selection-and-states'].key" :title="sections['selection-and-states'].title"
      :description-html="sections['selection-and-states'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <div class="list-page__variant-grid">
            <div>
              <p class="type-subtitle mb-2">{{ listLabel('singleSelection') }}</p>
              <EList v-model="singleSelection" active-color="primary" outlined inset>
                <EListItem value="available" :title="listLabel('available')" />
                <EListItem value="disabled" :title="listLabel('disabledItem')" disabled />
              </EList>
            </div>
            <div>
              <p class="type-subtitle mb-2">{{ listLabel('multipleSelection') }}</p>
              <EList v-model="multipleSelection" active-color="secondary" outlined inset>
                <EListItem value="inbox" :title="listLabel('inbox')" />
                <EListItem value="drafts" :title="listLabel('drafts')" />
                <EListItem value="archive" :title="listLabel('archive')" />
              </EList>
            </div>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="selectionTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="selectionTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['navigation-links'].key" :title="sections['navigation-links'].title"
      :description-html="sections['navigation-links'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <EList inset active-color="primary" class="list-page__demo">
            <EListItem :prepend-icon="$icon.home" to="/docs" :title="listLabel('home')" />
            <EListItem :prepend-icon="$icon.navigation" to="/docs/component/navigation/list"
              :title="listLabel('listDocs')" />
            <EListItem :prepend-icon="$icon.components" to="/docs/component/core-actions/button"
              :title="listLabel('buttonDocs')" />
          </EList>
        </template>
        <template #panel-template>
          <CodePanel :code="navigationTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['groups-and-nesting'].key" :title="sections['groups-and-nesting'].title"
      :description-html="sections['groups-and-nesting'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <EList v-model:group="openGroups" outlined inset active-color="primary" class="list-page__demo">
            <EListGroup value="components">
              <template #activator="{ attrs }">
                <EListItem v-bind="attrs" :title="listLabel('components')" />
              </template>
              <EListGroup value="navigation">
                <template #activator="{ attrs }">
                  <EListItem v-bind="attrs" :title="listLabel('navigation')" />
                </template>
                <EListItem :title="listLabel('list')" />
                <EListItem :title="listLabel('tabs')" />
              </EListGroup>
              <EListItem :title="listLabel('settings')" />
            </EListGroup>
          </EList>
        </template>
        <template #panel-template>
          <CodePanel :code="groupsTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="groupsTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['slots-composition'].key" :title="sections['slots-composition'].title"
      :description-html="sections['slots-composition'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <EList outlined inset class="list-page__demo">
            <EListItem :title="listLabel('member')" :subtitle="listLabel('memberSubtitle')">
              <template #prepend>
                <EAvatar :src="memberAvatar?.avatarSrc" />
              </template>
              <template #append>
                <EButton :icon="$icon.dotsMenu" text size="small" :aria-label="listLabel('moreActions')" />
              </template>
            </EListItem>
          </EList>
        </template>
        <template #panel-template>
          <CodePanel :code="slotsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
      :description-html="sections.accessibility.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <div class="list-page__demo">
            <EList v-model="keyboardSelection" active-color="primary" outlined inset
              :aria-label="listLabel('foldersAriaLabel')">
              <EListItem value="inbox" :title="listLabel('inbox')" :subtitle="listLabel('inboxSubtitle')" />
              <EListItem value="drafts" :title="listLabel('drafts')" :subtitle="listLabel('draftsSubtitle')" />
              <EListItem value="archive" :title="listLabel('archive')" :subtitle="listLabel('archiveSubtitle')" />
            </EList>
            <p class="type-caption text-medium-emphasis mt-2">{{ listLabel('keyboardHint') }}</p>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="accessibilityTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <h3 class="type-h5 text-heading mb-3">{{ listLabel('apiList') }}</h3>
      <DocsApiTable :api-reference="localizedApi.list" />
      <h3 class="type-h5 text-heading mt-6 mb-3">{{ listLabel('apiItem') }}</h3>
      <DocsApiTable :api-reference="localizedApi.item" />
      <h3 class="type-h5 text-heading mt-6 mb-3">{{ listLabel('apiGroup') }}</h3>
      <DocsApiTable :api-reference="localizedApi.group" />
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ listLabel('eventsTitle') }}</h3>
      <p class="type-body">{{ listLabel('eventsBody') }}</p>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { ListModelProp, Size } from 'nuvex-ui'
import { listApiReference, listGroupApiReference, listItemApiReference } from '~/api-reference/navigation/list'
import { listApiReferenceEs, listGroupApiReferenceEs, listItemApiReferenceEs } from '~/api-reference/navigation/list-es'
import { listCodeSnippets } from './list.snippets'
import { buildTemplateElementSnippet } from "~/utils/snippet-element";

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.list.list')

type ListSectionKey = 'usage' | 'item-content' | 'visual-variants' | 'selection-and-states' | 'navigation-links'
  | 'groups-and-nesting' | 'slots-composition' | 'accessibility' | 'props'

const getRequiredSection = (key: ListSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `List documentation section missing: ${key}` })
  return section
}

const sections = computed(() => ({
  usage: getRequiredSection('usage'),
  'item-content': getRequiredSection('item-content'),
  'visual-variants': getRequiredSection('visual-variants'),
  'selection-and-states': getRequiredSection('selection-and-states'),
  'navigation-links': getRequiredSection('navigation-links'),
  'groups-and-nesting': getRequiredSection('groups-and-nesting'),
  'slots-composition': getRequiredSection('slots-composition'),
  accessibility: getRequiredSection('accessibility'),
  props: getRequiredSection('props'),
}))

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})

const color = ref<string | undefined>(undefined)
const activeColor = ref<string | undefined>(undefined)
const colors = ['primary', 'secondary', 'success', 'warning', 'blue']
const sizes: Size[] = ['x-small', 'small', 'default', 'large', 'x-large']
const selectedValue = ref<ListModelProp>('inbox')
const singleSelection = ref<ListModelProp>('available')
const multipleSelection = ref<ListModelProp>(['inbox', 'archive'])
const keyboardSelection = ref<ListModelProp>('inbox')
const openGroups = ref<ListModelProp>(['components', 'components/navigation'])
const listProperty = ref({ outlined: true, inset: true, disabled: false, size: 'default' })
const { getAvatarByIndex } = useAvatars()
const teamAvatar = getAvatarByIndex(1)
const memberAvatar = getAvatarByIndex(2)

const { tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()
const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const listLabel = (key: string): string => {
  const labels = content.value.labels.listText
  return labels && !Array.isArray(labels) ? labels[key] ?? key : key
}

const usageTemplateCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: "EList",
    attrs: [
      'v-model="selectedValue"',
      color.value && `color="${color.value}"`,
      listProperty.value.size != 'default' && `size="${listProperty.value.size}"`,
      listProperty.value.outlined && "outlined",
      listProperty.value.inset && "inset",
      listProperty.value.disabled && "disabled",
    ],
    contentLines: [`<EListItem
    value="inbox"
    title="Inbox"
    subtitle="12 unread messages"
    :prepend-icon="$icon.email"
  />
  <EListItem
    value="drafts"
    title="Drafts"
    subtitle="3 items pending review"
    :prepend-icon="$icon.pencil"
  />
  <EListItem
    value="archive"
    title="Archive"
    subtitle="Completed conversations"
    :prepend-icon="$icon.layersOutline"
  />`],
  });
});

const localizedApi = computed(() => locale.value === 'es'
  ? { list: listApiReferenceEs, item: listItemApiReferenceEs, group: listGroupApiReferenceEs }
  : { list: listApiReference, item: listItemApiReference, group: listGroupApiReference })

const {
  itemContentTemplateCode,
  visualVariantsTemplateCode,
  selectionTemplateCode,
  selectionTsCode,
  navigationTemplateCode,
  groupsTemplateCode,
  groupsTsCode,
  slotsTemplateCode,
  accessibilityTemplateCode,
} = listCodeSnippets
</script>

<style scoped lang="scss">
.list-page__demo {
  width: min(100%, 520px);
  margin-inline: auto;
}

.list-page__variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  width: 100%;
}
</style>
