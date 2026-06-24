<template>
  <section :id="id" class="docs-section p-3">
    <header v-if="eyebrow || title || hasDescriptionContent" class="docs-section__header">
      <p v-if="eyebrow" class="docs-section__eyebrow">{{ eyebrow }}</p>
      <h2 v-if="title" class="docs-section__title">{{ title }}</h2>
      <div v-if="hasDescriptionContent" class="docs-section__description">
        <slot v-if="hasDescriptionSlot" name="description" />
        <p v-else-if="descriptionHtml" v-html="descriptionHtml" />
        <p v-else>{{ description }}</p>
      </div>
    </header>

    <div class="docs-section__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = defineProps<{
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  descriptionHtml?: string
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

.docs-section__header {
  display: grid;
  gap: 0.5rem;
}

.docs-section__eyebrow,
.docs-section__title,
.docs-section__description {
  margin: 0;
}

.docs-section__description p {
  margin: 0;
}

.docs-section__eyebrow {
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
}

.docs-section__body {
  display: grid;
  gap: 1rem;
}
</style>