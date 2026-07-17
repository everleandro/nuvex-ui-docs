<template>
  <CodeBox :initial-tab="initialTabValue">
    <template #tabs>
      <ETab v-for="tab in tabs" :key="tab.value" :value="tab.value"
        :prepend-icon="tab.icon ? $icon[tab.icon] : undefined">
        {{ tab.label }}
      </ETab>
    </template>

    <template #window-item>
      <EWindowItem v-for="tab in tabs" :key="tab.value" :value="tab.value">
        <div class="code-command-tabs__panel p-4 d-flex flex-column gap-3">
          <CodePanel :code="tab.code" :language="tab.language ?? 'bash'" />
          <p v-if="tab.note" class="code-command-tabs__note type-body">{{ tab.note }}</p>
        </div>
      </EWindowItem>
    </template>
  </CodeBox>
</template>

<script setup lang="ts">
import type { DocsWorkflowCommandEntry, DocsWorkflowCommandValue } from '~/types/docs'

interface CommandTabDefinition {
  value: DocsWorkflowCommandValue
  label: string
  icon?: string
}

interface ResolvedCommandTab extends CommandTabDefinition, DocsWorkflowCommandEntry { }

const commandTabDefinitions: CommandTabDefinition[] = [
  { value: 'npm', label: 'npm', icon: 'npm' },
  { value: 'pnpm', label: 'pnpm', icon: 'pnpm' },
  { value: 'yarn', label: 'yarn', icon: 'yarn' },
  { value: 'bun', label: 'bun', icon: 'bun' },
]

const props = defineProps<{
  commands?: Partial<Record<DocsWorkflowCommandValue, DocsWorkflowCommandEntry>>
}>()

const tabs = computed<ResolvedCommandTab[]>(() => {
  return commandTabDefinitions.flatMap((tab) => {
    const command = props.commands?.[tab.value]

    if (!command) {
      return []
    }

    return [{
      ...tab,
      ...command,
    }]
  })
})

const initialTabValue = computed(() => tabs.value[0]?.value ?? 'npm')
</script>

<style scoped>
.code-command-tabs__panel {
  min-height: 100%;
}

.code-command-tabs__note {
  margin: 0;
  opacity: 0.8;
}
</style>