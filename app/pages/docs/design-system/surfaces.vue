<template>
  <article class="design-system__surfaces-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description"
      :description-html="content.hero.descriptionHtml" :actions="heroActions" />

    <DocsSection :id="surfaceRolesSection.key" :title="surfaceRolesSection.title"
      :description="surfaceRolesSection.description">
      <ERow dense>
        <ECol v-for="item in surfaceRoleItems" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="contrastPairingSection.key" :title="contrastPairingSection.title"
      :description="contrastPairingSection.description">
      <ECard elevation="sm" color="info" tonal>
        <p v-if="contrastPairingSection.bodyHtml" class="type-body mb-0"
          v-html="resolveDocsRichTextHtml(contrastPairingSection.bodyHtml, locale)" />
        <p v-else class="type-body mb-0">{{ contrastPairingSection.body }}</p>
      </ECard>
    </DocsSection>

    <DocsSection :id="layeringRuleSection.key" :title="layeringRuleSection.title"
      :description="layeringRuleSection.description">
      <ECard outlined class="design-system__surfaces-page__layering-card">
        <p class="type-subtitle mb-2">Default layering path</p>
        <p class="type-body mb-0"
          v-html="resolveDocsRichTextHtml(layeringRuleSection.bodyHtml, locale)" />
      </ECard>
    </DocsSection>

    <DocsSection :id="recommendedMappingsSection.key" :title="recommendedMappingsSection.title"
      :description="recommendedMappingsSection.description">
      <ECard outlined>
        <ul class="design-system__surfaces-page__mapping-list pl-5 mb-0">
          <li v-for="item in recommendedMappingItems" :key="item.text">
            <span v-if="item.html" v-html="resolveDocsRichTextHtml(item.html, locale)" />
            <template v-else>{{ item.text }}</template>
          </li>
        </ul>
      </ECard>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { DocsConceptPageContent, DocsEditorialGridItem, DocsPageAction, DocsSurfacesSectionKey } from '~/types/docs'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'

type SurfaceRoleItem = {
  title: string
  description: string
}

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsSurfacesSectionKey>>('pages.surfaces.surfaces')
const content = computed(() => editorialContent.value)
const { locale } = useI18n()

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing surfaces hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-colors'),
    to: '/docs/design-system/colors',
    outlined: true,
  },
  {
    label: getActionLabel('open-theming-overview'),
    to: '/docs/theming/overview',
    variant: 'text',
    outlined: false,
  },
]))

const surfaceRolesSection = computed(() => content.value.sections['surface-roles'])
const contrastPairingSection = computed(() => content.value.sections['contrast-pairing'])
const layeringRuleSection = computed(() => content.value.sections['layering-rule'])
const recommendedMappingsSection = computed(() => content.value.sections['recommended-mappings'])

const surfaceRoleItems = computed<SurfaceRoleItem[]>(() => {
  return (surfaceRolesSection.value.items as DocsEditorialGridItem[] | undefined) ?? []
})

const recommendedMappingItems = computed(() => {
  const items = (recommendedMappingsSection.value.items as string[] | undefined) ?? []
  const itemsHtml = recommendedMappingsSection.value.itemsHtml ?? {}

  return items.map((item) => ({
    text: item,
    html: itemsHtml[item],
  }))
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>

<style lang="scss">
.design-system__surfaces-page {
  &__layering-card {
    background: color-mix(in srgb, var(--e-color-surface-subtle) 90%, transparent);
  }

  &__mapping-list {
    display: grid;
    gap: 0.75rem;
  }
}
</style>
