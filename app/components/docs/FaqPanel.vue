<template>
  <EExpansionPanels>
    <EExpansionPanel
      v-for="(item, index) in items"
      :key="`${item.question}-${index}`"
      :header-title="item.question"
    >
      <div class="secondary--text" v-html="item.answerHtml" />
    </EExpansionPanel>
  </EExpansionPanels>
</template>

<script setup lang="ts">
import type { DocsFaqItem } from '~/types/docs'

defineProps<{
  items: DocsFaqItem[]
}>()
</script>
