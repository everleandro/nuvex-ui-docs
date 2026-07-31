<template>
  <div class="code-panel code-panel__wrapper flex-1 app-responsive-content full-width p-4">
    <div class="code-panel__actions">
      <CopyButton />
    </div>

    <div v-prism="prismBinding" class="code-panel__content"></div>
  </div>
</template>

<script setup lang="ts">
import CopyButton from '~/components/code/CopyButton.vue'

const props = withDefaults(
  defineProps<{
    code: string
    language?: string
    lineNumbers?: boolean
    debounceMs?: number
  }>(),
  {
    language: 'html',
    lineNumbers: false,
    debounceMs: 80,
  },
)

const highlightedCode = ref(props.code)
let timer: ReturnType<typeof setTimeout> | undefined

watch(
  () => props.code,
  (value) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      highlightedCode.value = value
    }, props.debounceMs)
  },
)

onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
const prismBinding = computed(() => ({
  class: `language-${props.language}`,
  lineNumbers: props.lineNumbers,
  code: highlightedCode.value,
}))
</script>

<style lang="scss">
.code-panel {
  position: relative;
  height: 100%;

  &__wrapper {
    border: 1px solid var(--prism-border);
    background: var(--e-color-surface-raised, #f8fafc);
    border-radius: var(--e-border-radius-root);

    pre[class*="language-"] {
      border: none;
      padding: 0;
    }
  }

  &__actions {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  &__content {
    height: 100%;

    &>pre {
      height: 100%;
    }
  }
}
</style>
