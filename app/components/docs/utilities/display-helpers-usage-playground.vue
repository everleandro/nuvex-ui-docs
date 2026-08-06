<template>
  <DocsComponentPlayground :tabs="tabsPlayground" color="primary" class="utilities__display-usage">
    <template #panel-design>
      <div class="surface-subtle p-4 d-block full-width" style="min-height: 60px;">
        <div :class="[...generatedClassList, 'm-1 p-4 utilities__display-usage__preview-box']">A</div>
        <div :class="[...generatedClassList, 'm-1 p-4 utilities__display-usage__preview-box']">B</div>
      </div>
    </template>

    <template #panel-design-code>
      <CodePanel :code="htmlCode" language="html" />
    </template>

    <template #form>
      <EForm>
        <ESelect v-model="baseDisplay" cols="24" :items="displayOptions" item-text="name" item-value="value"
          :label="resolvedLabels.baseDisplay" />
        <ESelect v-model="breakpoint" cols="24" :items="breakpointOptions" item-text="name" item-value="value"
          :label="resolvedLabels.breakpoint" />
        <ESelect v-model="responsiveDisplay" cols="24" :items="displayOptions" item-text="name" item-value="value"
          :label="resolvedLabels.responsiveDisplay" :disabled="breakpoint === 'none'" />
      </EForm>
    </template>
  </DocsComponentPlayground>
</template>

<script setup lang="ts">
type DisplayValue = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'none'
type BreakpointValue = 'none' | 'sm' | 'md' | 'lg' | 'xl'

type SelectOption<TValue extends string> = {
  name: string
  value: TValue
}

type DisplayLabels = {
  baseDisplay: string
  breakpoint: string
  responsiveDisplay: string
  noBreakpoint: string
  block: string
  inline: string
  inlineBlock: string
  flex: string
  inlineFlex: string
  hidden: string
  classList: string
}

const props = defineProps<{
  labels?: Record<string, string>
}>()

const { tabsPlayground } = useDocsPlaygroundTabSets()

const baseDisplay = ref<DisplayValue>('block')
const breakpoint = ref<BreakpointValue>('none')
const responsiveDisplay = ref<DisplayValue>('none')

const resolvedLabels = computed<DisplayLabels>(() => ({
  baseDisplay: props.labels?.baseDisplay ?? 'Base display',
  breakpoint: props.labels?.breakpoint ?? 'Responsive breakpoint',
  responsiveDisplay: props.labels?.responsiveDisplay ?? 'Display at breakpoint',
  noBreakpoint: props.labels?.noBreakpoint ?? 'None',
  block: props.labels?.block ?? 'Block',
  inline: props.labels?.inline ?? 'Inline',
  inlineBlock: props.labels?.inlineBlock ?? 'Inline block',
  flex: props.labels?.flex ?? 'Flex',
  inlineFlex: props.labels?.inlineFlex ?? 'Inline flex',
  hidden: props.labels?.hidden ?? 'Hidden',
  classList: props.labels?.classList ?? 'Generated classes',
}))

const displayOptions = computed<SelectOption<DisplayValue>[]>(() => ([
  { name: resolvedLabels.value.block, value: 'block' },
  { name: resolvedLabels.value.inline, value: 'inline' },
  { name: resolvedLabels.value.inlineBlock, value: 'inline-block' },
  { name: resolvedLabels.value.flex, value: 'flex' },
  { name: resolvedLabels.value.inlineFlex, value: 'inline-flex' },
  { name: resolvedLabels.value.hidden, value: 'none' },
]))

const breakpointOptions = computed<SelectOption<BreakpointValue>[]>(() => ([
  { name: resolvedLabels.value.noBreakpoint, value: 'none' },
  { name: 'sm', value: 'sm' },
  { name: 'md', value: 'md' },
  { name: 'lg', value: 'lg' },
  { name: 'xl', value: 'xl' },
]))

const generatedClassList = computed(() => {
  const classes = [`d-${baseDisplay.value}`]

  if (breakpoint.value !== 'none') {
    classes.push(`d-${breakpoint.value}-${responsiveDisplay.value}`)
  }

  return classes
})

const generatedClassString = computed(() => generatedClassList.value.join(' '))

const htmlCode = computed(() => {
  return `<div>
  <div class="${generatedClassString.value}">
    Sample content
  </div>
  <div class="${generatedClassString.value}">
    Sample content
  </div>
</div>
  `
})
</script>
<style lang="scss">
.utilities__display-usage {
  &__preview-box {
    background-color: var(--e-color-surface-base);
    border-radius: var(--e-border-radius-root);
    min-width: 60px;
    text-align: center;
  }

  .d-inline {
    display: inline;
  }
}
</style>
