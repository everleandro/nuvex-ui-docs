<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDocsWorkflowI18nContent } from '~/composables/useDocsI18nContent'
import type {
  DocsWorkflowChecklistSection,
  DocsWorkflowCodeSection,
  DocsWorkflowDecisionSection,
  DocsWorkflowNextStepsSection,
} from '~/types/docs'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'

const { locale } = useI18n()

const content = useDocsWorkflowI18nContent('pages.introduction.quickStart')

const getRequiredSection = <TSection extends typeof content.value.sections[number]>(key: string) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Quick Start documentation section missing: ${key}`,
    })
  }

  return section as TSection
}

const sections = computed(() => ({
  'what-you-will-build': getRequiredSection<DocsWorkflowDecisionSection>('what-you-will-build'),
  'before-you-start': getRequiredSection<DocsWorkflowChecklistSection>('before-you-start'),
  'create-the-shell': getRequiredSection<DocsWorkflowCodeSection>('create-the-shell'),
  'add-primary-action': getRequiredSection<DocsWorkflowCodeSection>('add-primary-action'),
  'add-first-input': getRequiredSection<DocsWorkflowCodeSection>('add-first-input'),
  'assemble-the-screen': getRequiredSection<DocsWorkflowCodeSection>('assemble-the-screen'),
  verify: getRequiredSection<DocsWorkflowChecklistSection>('verify'),
  'next-steps': getRequiredSection<DocsWorkflowNextStepsSection>('next-steps'),
}))

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>

<template>
  <article class="docs-page">
    <DocsPageHero
      :title="content.hero.title"
      :description="content.hero.description"
      :actions="content.hero.actions"
    />

    <DocsSection
      :id="sections['what-you-will-build'].key"
      :title="sections['what-you-will-build'].title"
      :description="sections['what-you-will-build'].description"
      :description-html="resolveDocsRichTextHtml(sections['what-you-will-build'].descriptionHtml, locale)"
      :callout="sections['what-you-will-build'].callout"
    >
      <WorkflowDecisionGrid :section="sections['what-you-will-build']" :locale="locale" />
    </DocsSection>

    <DocsSection
      :id="sections['before-you-start'].key"
      :title="sections['before-you-start'].title"
      :description="sections['before-you-start'].description"
      :description-html="resolveDocsRichTextHtml(sections['before-you-start'].descriptionHtml, locale)"
      :callout="sections['before-you-start'].callout"
    >
      <WorkflowChecklist :section="sections['before-you-start']" :locale="locale" />
    </DocsSection>

    <DocsSection
      :id="sections['create-the-shell'].key"
      :title="sections['create-the-shell'].title"
      :description="sections['create-the-shell'].description"
      :description-html="resolveDocsRichTextHtml(sections['create-the-shell'].descriptionHtml, locale)"
      :callout="sections['create-the-shell'].callout"
    >
      <WorkflowCodeBlock :section="sections['create-the-shell']" :locale="locale" />
    </DocsSection>

    <DocsSection
      :id="sections['add-primary-action'].key"
      :title="sections['add-primary-action'].title"
      :description="sections['add-primary-action'].description"
      :description-html="resolveDocsRichTextHtml(sections['add-primary-action'].descriptionHtml, locale)"
      :callout="sections['add-primary-action'].callout"
    >
      <WorkflowCodeBlock :section="sections['add-primary-action']" :locale="locale" />
    </DocsSection>

    <DocsSection
      :id="sections['add-first-input'].key"
      :title="sections['add-first-input'].title"
      :description="sections['add-first-input'].description"
      :description-html="resolveDocsRichTextHtml(sections['add-first-input'].descriptionHtml, locale)"
      :callout="sections['add-first-input'].callout"
    >
      <WorkflowCodeBlock :section="sections['add-first-input']" :locale="locale" />
    </DocsSection>

    <DocsSection
      :id="sections['assemble-the-screen'].key"
      :title="sections['assemble-the-screen'].title"
      :description="sections['assemble-the-screen'].description"
      :description-html="resolveDocsRichTextHtml(sections['assemble-the-screen'].descriptionHtml, locale)"
      :callout="sections['assemble-the-screen'].callout"
    >
      <WorkflowCodeBlock :section="sections['assemble-the-screen']" :locale="locale" />
    </DocsSection>

    <DocsSection
      :id="sections.verify.key"
      :title="sections.verify.title"
      :description="sections.verify.description"
      :description-html="resolveDocsRichTextHtml(sections.verify.descriptionHtml, locale)"
      :callout="sections.verify.callout"
    >
      <WorkflowChecklist :section="sections.verify" :locale="locale" />
    </DocsSection>

    <DocsSection
      :id="sections['next-steps'].key"
      :title="sections['next-steps'].title"
      :description="sections['next-steps'].description"
      :description-html="resolveDocsRichTextHtml(sections['next-steps'].descriptionHtml, locale)"
      :callout="sections['next-steps'].callout"
    >
      <WorkflowNextSteps :section="sections['next-steps']" :locale="locale" />
    </DocsSection>

    <DocsPageFooter />
  </article>
</template>

<style scoped>
.docs-page {
  display: grid;
  gap: 1.5rem;
}

.docs-page :deep(.docs-page__inline-link) {
  color: var(--e-color-primary);
  text-decoration: none;
}

.docs-page :deep(.docs-page__inline-link:hover),
.docs-page :deep(.docs-page__inline-link:focus-visible) {
  text-decoration: underline;
}
</style>
