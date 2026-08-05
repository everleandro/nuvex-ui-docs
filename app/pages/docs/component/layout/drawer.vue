<template>
  <article class="docs-page docs-page__drawer">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.playground.key" :title="sections.playground.title"
      :description-html="sections.playground.descriptionHtml" :callout="sections.playground.callout">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <DocsPlaygroundFrame path="/playgrounds/drawer" :locale="locale" :title="drawerLabel('playgroundTitle')"
            @snippet-change="usageSnippet = $event" />
        </template>
        <template #panel-template>
          <CodePanel :code="usageSnippet" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedDrawerApiReference" />
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ drawerLabel('apiEventTitle') }}</h3>
      <p class="type-body">{{ drawerLabel('apiEventBody') }}</p>
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ drawerLabel('apiSlotsTitle') }}</h3>
      <p class="type-body">{{ drawerLabel('apiSlotsBody') }}</p>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { drawerApiReference } from '~/api-reference/layout/drawer'
import { drawerApiReferenceEs } from '~/api-reference/layout/drawer-es'

type DrawerSectionKey = 'playground' | 'slots' | 'props'

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.drawer.drawer')
const getRequiredSection = (key: DrawerSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `Drawer documentation section missing: ${key}` })
  return section
}
const sections = computed(() => ({
  playground: getRequiredSection('playground'),
  slots: getRequiredSection('slots'),
  props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const { tabsDesignTemplate } = useDocsPlaygroundTabSets()
const usageSnippet = ref('')
const slotsSnippet = ref('')
const drawerLabels = computed(() => {
  const labels = content.value.labels.drawerText
  return labels && !Array.isArray(labels) ? labels : {}
})
const drawerLabel = (key: string): string => String(drawerLabels.value[key] ?? key)
const localizedDrawerApiReference = computed(() => locale.value === 'es' ? drawerApiReferenceEs : drawerApiReference)
</script>
