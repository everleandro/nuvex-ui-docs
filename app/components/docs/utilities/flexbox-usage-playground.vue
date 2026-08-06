<template>
    <DocsComponentPlayground :tabs="tabsPlayground" color="primary" class="utilities__flexbox-usage">
        <template #panel-design>
            <div class="full-width d-block">
                <div :class="previewContainerClass">
                    <EChip v-for="item in previewItems" :key="item.label" :class="item.className">
                        {{ item.label }}
                    </EChip>
                </div>
            </div>
        </template>

        <template #panel-design-code>
            <CodePanel :code="htmlCode" language="html" />
        </template>

        <template #form>
            <EForm>
                <ESelect v-model="displayClass" cols="24" :items="displayOptions" item-text="name" item-value="value"
                    :label="resolvedLabels.display" />
                <ESelect v-model="directionClass" cols="24" :items="directionOptions" item-text="name"
                    item-value="value" :label="resolvedLabels.direction" />
                <ESelect v-model="justifyClass" cols="24" :items="justifyOptions" item-text="name" item-value="value"
                    :label="resolvedLabels.justify" />
                <ESelect v-model="itemsClass" cols="24" :items="alignOptions" item-text="name" item-value="value"
                    :label="resolvedLabels.align" />
                <ESelect v-model="gapSize" cols="24" :items="gapOptions" item-text="name" item-value="value"
                    :label="resolvedLabels.gap" />
            </EForm>
        </template>
    </DocsComponentPlayground>
</template>

<script setup lang="ts">
type SelectOption<TValue extends string | number> = {
    name: string
    value: TValue
}

type FlexboxUsageLabels = {
    display: string
    direction: string
    wrap: string
    justify: string
    align: string
    gap: string
    block: string
    inline: string
    row: string
    column: string
    noWrap: string
    wrapEnabled: string
    start: string
    center: string
    end: string
    between: string
    around: string
    stretch: string
    baseline: string
    classList: string
    previewTitle: string
    previewBody: string
}

const props = defineProps<{
    labels?: Record<string, string>
}>()

const { tabsPlayground } = useDocsPlaygroundTabSets()

const displayClass = ref<'d-flex' | 'd-inline-flex'>('d-flex')
const directionClass = ref<'flex-row' | 'flex-column'>('flex-row')
const justifyClass = ref<'justify-start' | 'justify-center' | 'justify-end' | 'justify-between' | 'justify-around'>('justify-between')
const itemsClass = ref<'items-start' | 'items-center' | 'items-end' | 'items-stretch' | 'items-baseline'>('items-center')
const gapSize = ref(3)

const resolvedLabels = computed<FlexboxUsageLabels>(() => ({
    display: props.labels?.display ?? 'Display mode',
    direction: props.labels?.direction ?? 'Direction',
    wrap: props.labels?.wrap ?? 'Wrap',
    justify: props.labels?.justify ?? 'Justify',
    align: props.labels?.align ?? 'Align items',
    gap: props.labels?.gap ?? 'Gap size',
    block: props.labels?.block ?? 'Block flex',
    inline: props.labels?.inline ?? 'Inline flex',
    row: props.labels?.row ?? 'Row',
    column: props.labels?.column ?? 'Column',
    noWrap: props.labels?.noWrap ?? 'No wrap',
    wrapEnabled: props.labels?.wrapEnabled ?? 'Wrap',
    start: props.labels?.start ?? 'Start',
    center: props.labels?.center ?? 'Center',
    end: props.labels?.end ?? 'End',
    between: props.labels?.between ?? 'Space between',
    around: props.labels?.around ?? 'Space around',
    stretch: props.labels?.stretch ?? 'Stretch',
    baseline: props.labels?.baseline ?? 'Baseline',
    classList: props.labels?.classList ?? 'Generated classes',
    previewTitle: props.labels?.previewTitle ?? 'Rendered helper preview',
    previewBody: props.labels?.previewBody ?? 'Use selectors to test combinations before copying markup into app views.',
}))

const displayOptions = computed<SelectOption<'d-flex' | 'd-inline-flex'>[]>(() => ([
    { name: resolvedLabels.value.block, value: 'd-flex' },
    { name: resolvedLabels.value.inline, value: 'd-inline-flex' },
]))

const directionOptions = computed<SelectOption<'flex-row' | 'flex-column'>[]>(() => ([
    { name: resolvedLabels.value.row, value: 'flex-row' },
    { name: resolvedLabels.value.column, value: 'flex-column' },
]))

const justifyOptions = computed<SelectOption<'justify-start' | 'justify-center' | 'justify-end' | 'justify-between' | 'justify-around'>[]>(() => ([
    { name: resolvedLabels.value.start, value: 'justify-start' },
    { name: resolvedLabels.value.center, value: 'justify-center' },
    { name: resolvedLabels.value.end, value: 'justify-end' },
    { name: resolvedLabels.value.between, value: 'justify-between' },
    { name: resolvedLabels.value.around, value: 'justify-around' },
]))

const alignOptions = computed<SelectOption<'items-start' | 'items-center' | 'items-end' | 'items-stretch' | 'items-baseline'>[]>(() => ([
    { name: resolvedLabels.value.start, value: 'items-start' },
    { name: resolvedLabels.value.center, value: 'items-center' },
    { name: resolvedLabels.value.end, value: 'items-end' },
    { name: resolvedLabels.value.stretch, value: 'items-stretch' },
    { name: resolvedLabels.value.baseline, value: 'items-baseline' },
]))

const gapOptions: SelectOption<number>[] = Array.from({ length: 9 }, (_, index) => ({
    name: `${index}`,
    value: index,
}))

const gapClass = computed(() => `gap-${gapSize.value}`)

const previewContainerClass = computed(() => ([
    displayClass.value,
    directionClass.value,
    justifyClass.value,
    itemsClass.value,
    gapClass.value,
    'p-4',
    'full-width',
    'utilities__flexbox-usage_playground-container',
]))

const generatedClassList = computed(() => ([
    directionClass.value,
    displayClass.value,
    justifyClass.value,
    itemsClass.value,
    gapClass.value,
]).map((cls, index, arr) => index === 0 ? `${cls}\n` : index === arr.length - 1 ? `         ${cls}` : `         ${cls}\n`).join(''))

const previewItems = [
    { label: 'Alpha', className: 'justify-center ml-0' },
    { label: 'Beta', className: 'justify-center ml-0' },
    { label: 'Gamma', className: 'justify-center ml-0' },
    { label: 'Delta', className: 'justify-center ml-0' },
]

const htmlCode = computed(() => {
    const lines = [
        `<div class="${generatedClassList.value}">`,
        `  <EChip class="justify-center"></EChip>`,
        `  <EChip class="justify-center">Beta</EChip>`,
        `  <EChip class="justify-center">Gamma</EChip>`,
        `  <EChip class="justify-center">Delta</EChip>`,
        `</div>`,
    ]

    return lines.join('\n')
})
</script>

<style lang="scss">
.utilities__flexbox-usage {
    .e-chip {
        width: 20%;
        margin-left: 0;
    }

    &_playground-container {
        min-height: 250px;
        background-color: var(--e-color-surface-canvas);
    }
}
</style>
