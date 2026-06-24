<template>
  <CodeBox :color="color" :github="github" :auto-copy="isBaseMode" :initial-tab="activeTabValue">
    <template #tabs>
      <ETab v-for="tab in tabs" :key="tab.value" :value="tab.value">
        {{ tab.label }}
      </ETab>
    </template>

    <template #window-item>
      <EWindowItem v-for="tab in tabs" :key="tab.value" :value="tab.value">
        <CodeCopyButton v-if="showInlineCopy(tab.value)" only-visible />
        <slot :name="`panel-${tab.value}`" />
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
  mode?: 'base' | 'inline-example'
  inlineTabValue?: string
}>(), {
  color: undefined,
  github: undefined,
  mode: 'base',
  inlineTabValue: 'example',
})

const slots = useSlots()
const hasFormSlot = computed(() => Boolean(slots.form))
const tabs = computed(() => props.tabs)
const isBaseMode = computed(() => props.mode === 'base')
const activeTabValue = computed(() => {
  const firstTab = props.tabs[0]?.value

  if (props.mode === 'inline-example') {
    const hasInlineTab = props.tabs.some((tab) => tab.value === props.inlineTabValue)
    return hasInlineTab ? props.inlineTabValue : firstTab ?? 'design'
  }

  return firstTab ?? 'design'
})

const showInlineCopy = (tabValue: string): boolean => {
  return props.mode === 'inline-example' && tabValue === props.inlineTabValue
}
</script>
