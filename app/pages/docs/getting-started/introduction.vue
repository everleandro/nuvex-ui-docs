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
    >
      <ERow v-if="section.type === 'card-grid'" dense>
        <ECol
          v-for="item in section.items"
          :key="item.title"
          :cols="12"
          :md="section.cols?.md ?? 6"
          :lg="section.cols?.lg ?? 4"
        >
          <ECard class="docs-page__card" :title="item.title" :description="item.description" outlined/>
        </ECol>
      </ERow>

      <ol v-else-if="section.ordered" class="docs-page__steps">
        <li v-for="item in section.items" :key="item">{{ item }}</li>
      </ol>

      <ul v-else class="docs-page__list">
        <li v-for="item in section.items" :key="item">{{ item }}</li>
      </ul>
    </DocsSection>

  </article>
</template>

<script setup lang="ts">
import { introductionContent as content } from '~/content/docs/getting-started/introduction'

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description,
})
</script>

<style scoped>
.docs-page {
  display: grid;
  gap: 1.5rem;
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
