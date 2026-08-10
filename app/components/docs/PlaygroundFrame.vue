<template>
  <div class="docs-playground-frame-shell">
    <div v-if="!isLoaded" class="docs-playground-frame-placeholder" aria-live="polite">
      <div class="docs-playground-frame-placeholder__pulse" />
      <span class="docs-playground-frame-placeholder__label">Loading preview…</span>
    </div>

    <iframe ref="frame" :key="frameKey" class="docs-playground-frame"
      :class="{ 'docs-playground-frame--ready': isLoaded }" :src="src" :title="title"
      sandbox="allow-scripts allow-same-origin" @load="handleFrameLoad" />
  </div>
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
const isClientReady = ref(false)
const isLoaded = ref(false)

const markReady = () => {
  setTimeout(() => {
    isLoaded.value = true
  }, 400)
}

const handleMessage = (event: MessageEvent<unknown>): void => {
  if (event.origin !== window.location.origin || event.source !== frame.value?.contentWindow) return

  const message = event.data as Partial<PlaygroundSnippetMessage> | null
  if (message?.type !== 'nuvex:playground-snippet' || typeof message.snippet !== 'string') return

  emit('snippetChange', message.snippet)
}

const handleFrameLoad = (): void => {
  if (!isClientReady.value) {
    return
  }

  markReady()
}

watch(
  () => [props.path, props.locale, currentTheme.value],
  () => {
    isLoaded.value = false
    if (isClientReady.value) {
      markReady()
    }
  },
  { flush: 'post' },
)

onMounted(() => {
  isClientReady.value = true
  window.addEventListener('message', handleMessage)

  if (frame.value?.contentWindow) {
    markReady()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('message', handleMessage)
})
</script>

<style scoped>
.docs-playground-frame-shell {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  min-height: var(--docs-playground-frame-height, 560px);
  overflow: hidden;
  border-radius: inherit;
  background: var(--e-color-surface-canvas);
}

.docs-playground-frame-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--e-color-text-muted);
  background: linear-gradient(180deg, color-mix(in srgb, var(--e-color-primary) 8%, transparent) 0%, transparent 100%);
}

.docs-playground-frame-placeholder__pulse {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  border: 2px solid color-mix(in srgb, var(--e-color-primary) 28%, transparent);
  border-top-color: var(--e-color-primary);
  animation: docs-playground-frame-spin 0.8s linear infinite;
}

.docs-playground-frame-placeholder__label {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.docs-playground-frame {
  display: block;
  width: 100%;
  height: var(--docs-playground-frame-height, 560px);
  border: 0;
  background: var(--e-color-surface-canvas);
  opacity: 0;
  transition: opacity 150ms ease;
}

.docs-playground-frame--ready {
  opacity: 1;
}

@keyframes docs-playground-frame-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>