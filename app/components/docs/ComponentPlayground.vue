<template>
  <CodeBox :color="color" :github="github" :initial-tab="activeTabValue">
    <template #tabs>
      <ETab v-for="tab in tabs" :key="tab.value" :value="tab.value">
        {{ tab.label }}
      </ETab>
    </template>

    <template #window-item>
      <EWindowItem v-for="tab in tabs" :key="tab.value" :value="tab.value">
        <template v-if="tab.value === designTabValue && hasDesignStructureSlots">
          <div class="full-height d-flex flex-column p-4">
            <div v-if="hasDesignSlot" class="flex-1 d-flex flex-wrap gap-4 justify-center items-center">
              <slot name="panel-design" />
            </div>
            <div v-if="hasDesignCodeSlot" class="d-flex mt-4 items-end design-code-panel">
              <slot name="panel-design-code" />
            </div>
          </div>
        </template>
        <template v-else>
          <slot :name="`panel-${tab.value}`" />
        </template>
      </EWindowItem>
    </template>

    <template v-if="hasFormSlot" #form>
      <slot name="form" />
    </template>
  </CodeBox>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface PlaygroundTab {
  value: string
  label: string
}

interface PlaygroundGithubLink {
  title: string
  url: string
}

const props = withDefaults(defineProps<{
  tabs: PlaygroundTab[]
  color?: string
  github?: PlaygroundGithubLink
  initialTabValue?: string
  designTabValue?: string
}>(), {
  color: undefined,
  github: undefined,
  initialTabValue: 'design',
  designTabValue: 'design',
})

const slots = useSlots()
const hasFormSlot = computed(() => Boolean(slots.form))
const hasDesignSlot = computed(() => Boolean(slots['panel-design']))
const hasDesignCodeSlot = computed(() => Boolean(slots['panel-design-code']))
const hasDesignStructureSlots = computed(() => hasDesignSlot.value || hasDesignCodeSlot.value)
const tabs = computed(() => props.tabs)
const designTabValue = computed(() => props.designTabValue ?? 'design')
const activeTabValue = computed(() => {
  const firstTab = props.tabs[0]?.value
  const hasInitialTab = props.tabs.some((tab) => tab.value === props.initialTabValue)
  return hasInitialTab ? props.initialTabValue : firstTab ?? 'design'
})

</script>
<style scoped>
.design-code-panel {
  min-height: 65%;
}
</style>
