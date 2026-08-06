<template>
  <DocsComponentPlayground :tabs="tabsPlayground" color="primary" class="utilities__elevation-usage">
    <template #panel-design>
      <div class="full-width p-4 surface-subtle">
        <div :class="['utilities__elevation-usage__surface', elevationClass, 'p-4']">
          <div class="d-flex flex-column gap-3">
            <div class="type-title">Elevation surface</div>
            <p class="mb-0 type-body">Layered content with a visible shadow token.</p>
          </div>
        </div>
      </div>
    </template>

    <template #panel-design-code>
      <CodePanel :code="htmlCode" language="html" />
    </template>

    <template #form>
      <EForm>
        <ESelect v-model="elevationLevel" cols="24" clearable :items="levelOptions" item-text="name" item-value="value"
          :label="resolvedLabels.level" />
      </EForm>
    </template>
  </DocsComponentPlayground>
</template>

<script setup lang="ts">
type ElevationLevel = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type SelectOption<TValue extends string> = {
  name: string
  value: TValue
}

type ElevationLabels = {
  level: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  classList: string
}

const props = defineProps<{
  labels?: Record<string, string>
}>()

const { tabsPlayground } = useDocsPlaygroundTabSets()

const elevationLevel = ref<ElevationLevel>('sm')

const resolvedLabels = computed<ElevationLabels>(() => ({
  level: props.labels?.level ?? 'Elevation level',
  xs: props.labels?.xs ?? 'xs',
  sm: props.labels?.sm ?? 'sm',
  md: props.labels?.md ?? 'md',
  lg: props.labels?.lg ?? 'lg',
  xl: props.labels?.xl ?? 'xl',
  classList: props.labels?.classList ?? 'Generated classes',
}))

const levelOptions = computed<SelectOption<ElevationLevel>[]>(() => ([
  { name: resolvedLabels.value.xs, value: 'xs' },
  { name: resolvedLabels.value.sm, value: 'sm' },
  { name: resolvedLabels.value.md, value: 'md' },
  { name: resolvedLabels.value.lg, value: 'lg' },
  { name: resolvedLabels.value.xl, value: 'xl' },
]))

const elevationClass = computed(() => elevationLevel.value ? `e-elevation--${elevationLevel.value}` : '')

const htmlCode = computed(() => {
  return `<div class="${elevationClass.value} p-4">\n  Layered content\n</div>`
})
</script>

<style lang="scss">
.utilities__elevation-usage {
  &__stage {
    min-height: 12rem;
    background: color-mix(in srgb, var(--e-color-surface-subtle) 72%, transparent);
  }

  &__surface {
    max-width: 28rem;
    margin: 0 auto;
    border-radius: var(--e-border-radius-root);
    background: var(--e-color-surface-base);
  }
}
</style>
