<template>
  <section class="docs-page-hero p-3">
    <h1 class="docs-page-hero__title type-h1 text-heading">{{ title }}</h1>
    <div v-if="hasDescriptionContent" class="docs-page-hero__description type-body">
      <slot v-if="hasDescriptionSlot" name="description" />
      <p v-else-if="descriptionHtml" v-html="descriptionHtml" />
      <p v-else>{{ description }}</p>
    </div>

    <div v-if="actions.length" class="docs-page-hero__actions">
      <EButton
        v-for="action in actions"
        :key="action.label"
        :to="withLocalePrefix(action.to, locale)"
        :variant="action.variant"
        :outlined="action.outlined"
      >
        {{ action.label }}
      </EButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useI18n } from 'vue-i18n'
import { withLocalePrefix } from '~/utils/locale-path'

export interface DocsPageHeroAction {
  label: string
  to: string
  variant?: 'text' | 'outlined' | 'flat' | 'tonal' | 'elevated'
  outlined?: boolean
}

const props = withDefaults(defineProps<{
  title: string
  description?: string
  descriptionHtml?: string
  actions?: DocsPageHeroAction[]
}>(), {
  description: '',
  actions: () => [],
})

const slots = useSlots()
const actions = computed(() => props.actions)
const hasDescriptionSlot = computed(() => Boolean(slots.description))
const hasDescriptionContent = computed(
  () => hasDescriptionSlot.value || Boolean(props.descriptionHtml) || Boolean(props.description)
)
const { locale } = useI18n()
</script>

<style scoped>
.docs-page-hero {
  display: grid;
  gap: 1rem;
}

.docs-page-hero__title,
.docs-page-hero__description {
  margin: 0;
}


.docs-page-hero__description {
  max-width: 78ch;
  opacity: 0.88;
}

.docs-page-hero__description p {
  margin: 0;
}

.docs-page-hero__description p + p {
  margin-top: 0.65rem;
}

.docs-page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 640px) {
  .docs-page-hero__actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>