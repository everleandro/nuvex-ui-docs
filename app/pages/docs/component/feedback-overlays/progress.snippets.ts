export const progressCodeSnippets = {
  modesTemplateCode: `<template>
  <EProgressLinear :value="72" color="primary" aria-label="File processing progress" />
  <EProgressLinear indeterminate color="secondary" aria-label="Preparing workspace data" />
</template>`,

  visualVariantsTemplateCode: `<ERow class="full-width">
    <ECol md="6">
        <ECard description="3px · primary">
            <EProgressLinear :value="64" color="primary" :height="3" />
        </ECard>
    </ECol>
    <ECol md="6">
        <ECard description="6px · secondary">
            <EProgressLinear :value="64" color="secondary" :height="6" />
        </ECard>
    </ECol>
    <ECol cols="12">
        <ECard description="8px · contrast" color="primary">
            <EProgressLinear :value="64" color="primary" use-contrast-color :height="8" />
        </ECard>
    </ECol>
</ERow>`,

  valueLifecycleTemplateCode: `<div class="full-width">
    <div class="d-flex justify-between items-center mb-3">
        <strong class="type-body">{{ label }}</strong>
        <span class="type-caption text-medium-emphasis">{{ progress }}%</span>
    </div>
    <EProgressLinear :value="progress" color="primary" :height="6"
        aria-label="Current progress" />
    <div class="d-flex flex-wrap gap-4 mt-4">
        <EButton text @click="lifecycleValue = 0">Reset</EButton>
        <EButton outlined color="primary" @click="advanceLifecycle">Advance</EButton>
        <EButton color="primary" @click="lifecycleValue = 100">Complete</EButton>
    </div>
</div>`,

  valueLifecycleTsCode: `const progress = ref(35)

const advance = () => {
  progress.value = Math.min(100, progress.value + 15)
}`,

  compositionTemplateCode: `<ECard
  class="full-width"
  :title="title"
  :subtitle="reportStatus"
  outlined
  :aria-busy="exportRunning"
>
  <EProgressLinear
    v-if="exportRunning && exportValue === 0"
    indeterminate
    color="primary"
    :height="6"
    :aria-label="reportStatus"
  />

  <EProgressLinear
    v-else
    :value="exportValue"
    color="primary"
    :height="6"
    :aria-label="reportStatus"
  />

  <div class="d-flex justify-between items-center mt-4">
    <span class="type-caption text-medium-emphasis">
      {{ exportValue }}%
    </span>

    <EButton
      color="primary"
      :loading="exportRunning"
      @click="startExport"
    >
      Start Report
    </EButton>
  </div>
</ECard>`,

  compositionTsCode: `const labels = {
  title: 'Quarterly report export',
  start: 'Start export',
  idle: 'Ready to start the report export',
  preparing: 'Preparing export',
  processing: 'Processing report pages',
  complete: 'Export ready',
}

const progress = ref(0)
const running = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

const status = computed(() => {
  if (running.value && progress.value === 0) return labels.preparing
  if (running.value) return labels.processing
  if (progress.value === 100) return labels.complete
  return labels.idle
})

const startExport = () => {
  if (timer) clearInterval(timer)
  progress.value = 0
  running.value = true

  timer = setInterval(() => {
    progress.value = Math.min(100, progress.value + 10)
    if (progress.value === 100) {
      running.value = false
      clearInterval(timer)
    }
  }, 180)
}

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})`,

  accessibilityTemplateCode: `<ECard
  :title="progressLabel('accessibilityHint')"
  aria-busy="true"
>
  <EProgressLinear
    indeterminate
    color="primary"
    :height="6"
    :aria-label="progressLabel('accessibleLabel')"
    aria-describedby="progress-accessibility-status"
  />
</ECard>`,
} as const;
