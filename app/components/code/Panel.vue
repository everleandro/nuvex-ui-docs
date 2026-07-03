<template>
  <div class="code-panel flex-1 app-responsive-content">
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

<style scoped>
.code-panel {
  position: relative;
}

.code-panel__actions {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}

.code-panel__content {
  height: 100%;
}
</style>
