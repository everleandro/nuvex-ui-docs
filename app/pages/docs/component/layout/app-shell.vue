<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="structureSection.key" :title="structureSection.title"
      :description="structureSection.description">
      <ERow dense>
        <ECol v-for="item in structureSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="baseTemplateSection.key" :title="baseTemplateSection.title"
      :description-html="baseTemplateSection.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <DocsPlaygroundFrame path="/playgrounds/app-shell" :locale="locale" :title="content.hero.title"
            @snippet-change="usageSnippet = $event" />
        </template>
        <template #panel-template>
          <CodePanel :code="usageSnippet" language="html" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="verifyStructureSection.key" :title="verifyStructureSection.title"
      :description="verifyStructureSection.description">
      <ECard elevation="sm" color="primary" tonal>
        <ul class="pl-5">
          <li v-for="item in verifyStructureSection.items" :key="item" class="mb-2">{{ item }}</li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="nextStepsSection.key" :title="nextStepsSection.title"
      :description="nextStepsSection.description">
      <ERow dense>
        <ECol v-for="item in nextStepsSection.items" :key="item.to" cols="12" md="4">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="no-underline full-height d-block">
            <ECard v-ripple outlined class="full-height" :title="item.title" :description="item.description" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { DocsEditorialGridItem, DocsWorkflowPageContent } from '~/types/docs'
import { withLocalePrefix } from '~/utils/locale-path'

type AppShellSectionKey = 'structure' | 'base-template' | 'verify-structure' | 'next-steps'

const { locale } = useI18n()
const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<AppShellSectionKey>>('pages.appShell.appShell')
const content = computed(() => editorialContent.value)

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const { tabsDesignTemplate } = useDocsPlaygroundTabSets()
const usageSnippet = ref('')

const structureSection = computed(() => ({
  key: 'structure',
  title: content.value.sections.structure.title,
  description: content.value.sections.structure.description,
  items: (content.value.sections.structure.items as DocsEditorialGridItem[] | undefined) ?? [],
}))

const baseTemplateSection = computed(() => ({
  key: 'base-template',
  title: content.value.sections['base-template'].title,
  descriptionHtml: content.value.sections['base-template'].descriptionHtml,
}))

const verifyStructureSection = computed(() => ({
  key: 'verify-structure',
  title: content.value.sections['verify-structure'].title,
  description: content.value.sections['verify-structure'].description,
  items: (content.value.sections['verify-structure'].items as string[] | undefined) ?? [],
}))

const nextStepRoutes = [
  '/docs/component/layout/bar',
  '/docs/component/layout/drawer',
  '/docs/component/layout/container',
] as const

const nextStepsSection = computed(() => ({
  key: 'next-steps',
  title: content.value.sections['next-steps'].title,
  description: content.value.sections['next-steps'].description,
  items: ((content.value.sections['next-steps'].items as DocsEditorialGridItem[] | undefined) ?? []).map((item, index) => ({
    ...item,
    to: nextStepRoutes[index]!,
  })),
}))
</script>
