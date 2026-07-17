<template>
  <section :id="id" class="docs-section p-3">
    <header v-if="title || hasDescriptionContent" class="docs-section__header">
      <h2 v-if="title" class="docs-section__title type-h4 text-heading">{{ title }}</h2>
      <div v-if="hasDescriptionContent" class="docs-section__description type-body">
        <p v-if="hasDescriptionSlot">
          <slot name="description" />
        </p>
        <p v-else-if="descriptionHtml" v-html="descriptionHtml" />
        <p v-else>{{ description }}</p>
      </div>
    </header>

    <ECard v-if="callout" elevation="sm" :color="callout.color || 'surface-subtle'" :description="callout.description"
      :title="callout.title" tonal :prepend-icon="callout.icon ? $icon[callout.icon] : undefined"
      class="docs-section__callout" />

    <div class="docs-section__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { DocsCallout } from '~/types/docs'

const props = defineProps<{
  id?: string
  title?: string
  description?: string
  descriptionHtml?: string
  callout?: DocsCallout
}>()

const slots = useSlots()

const hasDescriptionSlot = computed(() => Boolean(slots.description))
const hasDescriptionContent = computed(
  () => hasDescriptionSlot.value || Boolean(props.descriptionHtml) || Boolean(props.description)
)
</script>

<style scoped>
.docs-section {
  display: grid;
  gap: 1rem;
}
</style>