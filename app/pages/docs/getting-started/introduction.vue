<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDocsPageI18nContent } from '~/composables/useDocsI18nContent'
import { resolveDocsRichTextHtml } from '~/utils/docs-rich-text'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const content = useDocsPageI18nContent('pages.introduction.introduction')

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
      v-for="section in content.sections"
      :key="section.key"
      :id="section.key"
      :title="section.title"
      :description="section.description"
      :description-html="resolveDocsRichTextHtml(section.descriptionHtml, locale)"
    >
      <ERow v-if="section.type === 'card-grid'" dense>
        <ECol
          v-for="item in section.items"
          :key="item.title"
          :cols="12"
          :md="section.cols?.md ?? 6"
          :lg="section.cols?.lg ?? 4"
        >
          <ECard
            class="docs-page__card"
            :title="item.title"
            :description="item.description"
            outlined
          />
        </ECol>
      </ERow>

      <ERow v-else-if="section.type === 'nav-card-grid'" dense>
        <ECol
          v-for="item in section.items"
          :key="item.title"
          :cols="12"
          :md="section.cols?.md ?? 6"
          :lg="section.cols?.lg ?? 4"
        >
          <NuxtLink
            :to="withLocalePrefix(item.to, locale)"
            class="docs-page__card-link"
          >
            <ECard
              v-ripple
              class="docs-page__card"
              :title="item.title"
              :description="item.description"
              :prepend-icon="$icon[item.icon]"
              :prepend-icon-props="{ size: 'x-large' }"
              outlined
            />
          </NuxtLink>
        </ECol>
      </ERow>

      <ol v-else-if="section.type === 'list' && section.ordered" class="docs-page__steps">
        <li v-for="(item, index) in section.items" :key="item">
          <span
            v-if="section.itemsHtml?.[index]"
            v-html="resolveDocsRichTextHtml(section.itemsHtml[index], locale)"
          />
          <template v-else>{{ item }}</template>
        </li>
      </ol>

      <ul v-else-if="section.type === 'list'" class="docs-page__list">
        <li v-for="(item, index) in section.items" :key="item">
          <span
            v-if="section.itemsHtml?.[index]"
            v-html="resolveDocsRichTextHtml(section.itemsHtml[index], locale)"
          />
          <template v-else>{{ item }}</template>
        </li>
      </ul>
    </DocsSection>

  </article>
</template>

<style scoped>
.docs-page {
  display: grid;
  gap: 1.5rem;
}

.docs-page__card-link {
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.docs-page :deep(.docs-page__inline-link) {
  color: var(--e-color-primary);
  text-decoration: none;
}

.docs-page :deep(.docs-page__inline-link:hover),
.docs-page :deep(.docs-page__inline-link:focus-visible) {
  text-decoration: underline;
}

.docs-page__card {
  height: 100%;
}

.docs-page__steps,
.docs-page__list {
  margin: 0;
  padding-left: 1.25rem;
}

.docs-page__steps li,
.docs-page__list li {
  margin-bottom: 0.5rem;
}
</style>
