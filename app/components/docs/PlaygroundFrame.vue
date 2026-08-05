<template>
  <iframe ref="frame" :key="frameKey" class="docs-playground-frame" :src="src" :title="title"
    sandbox="allow-scripts allow-same-origin" />
</template>

<script setup lang="ts">
import { useTheme } from 'nuvex-ui'
import type { PlaygroundSnippetMessage } from '~/types/docs-playground'
import { withLocalePrefix } from '~/utils/locale-path'

const props = defineProps<{
  path: string
  locale: string
  title: string
}>()

const emit = defineEmits<{
  snippetChange: [snippet: string]
}>()

const frame = ref<HTMLIFrameElement | null>(null)
const { currentTheme } = useTheme()
const src = computed(() => withLocalePrefix(props.path, props.locale))
const frameKey = computed(() => `${props.path}-${props.locale}-${currentTheme.value}`)

const handleMessage = (event: MessageEvent<unknown>): void => {
  if (event.origin !== window.location.origin || event.source !== frame.value?.contentWindow) return

  const message = event.data as Partial<PlaygroundSnippetMessage> | null
  if (message?.type !== 'nuvex:playground-snippet' || typeof message.snippet !== 'string') return

  emit('snippetChange', message.snippet)
}

onMounted(() => window.addEventListener('message', handleMessage))
onBeforeUnmount(() => window.removeEventListener('message', handleMessage))
</script>

<style scoped>
.docs-playground-frame {
  display: block;
  width: 100%;
  height: var(--docs-playground-frame-height, 560px);
  border: 0;
  background: var(--e-color-surface-canvas);
}
</style>