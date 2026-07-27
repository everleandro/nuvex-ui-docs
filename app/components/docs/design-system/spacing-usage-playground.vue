<template>
    <DocsComponentPlayground :tabs="tabsPlayground" color="primary" class="design-system__spacing-usage">
        <template #panel-design>
            <ECard elevation="xs" class="design-system__spacing-usage-card flex-1">
                <div :class="['design-system__spacing-usage__margin-shell', marginClass]">
                    <div :class="['design-system__spacing-usage__padding-shell', paddingClass]">
                        <div class="design-system__spacing-usage__content d-flex gap-4 p-4">
                            <code class="docs-inline-code">{{ marginClassLabel }}</code>
                            <code class="docs-inline-code">{{ paddingClass }}</code>
                        </div>
                    </div>
                </div>
            </ECard>
        </template>

        <template #form>
            <EForm>
                <ESelect v-model="paddingDirection" cols="24" :items="directionOptions" item-text="name"
                    item-value="value" :label="resolvedLabels.paddingDirection" />
                <ESelect v-model="paddingSize" cols="24" :items="sizeOptions" item-text="name" item-value="value"
                    :label="resolvedLabels.paddingSize" />
                <ESelect v-model="marginDirection" cols="24" :items="directionOptions" item-text="name"
                    item-value="value" :label="resolvedLabels.marginDirection" />
                <ESelect v-model="marginSize" cols="24" :items="sizeOptions" item-text="name" item-value="value"
                    :label="resolvedLabels.marginSize" />
            </EForm>
        </template>
    </DocsComponentPlayground>
</template>

<script setup lang="ts">
type DirectionValue = 'all' | 'x' | 'y' | 't' | 'r' | 'b' | 'l'

type SelectOption<TValue extends string | number> = {
    name: string
    value: TValue
}

type UsageLabels = {
    paddingDirection: string
    paddingSize: string
    marginDirection: string
    marginSize: string
    all: string
    horizontal: string
    vertical: string
    top: string
    right: string
    bottom: string
    left: string
    marginClass: string
    paddingClass: string
    previewTitle: string
    previewBody: string
}

const props = defineProps<{
    labels?: Record<string, string>
}>()

const { tabsPlayground } = useDocsPlaygroundTabSets()

const paddingDirection = ref<DirectionValue>('all')
const paddingSize = ref(4)
const marginDirection = ref<DirectionValue>('all')
const marginSize = ref(2)

const resolvedLabels = computed<UsageLabels>(() => ({
    paddingDirection: props.labels?.paddingDirection ?? 'Padding direction',
    paddingSize: props.labels?.paddingSize ?? 'Padding size',
    marginDirection: props.labels?.marginDirection ?? 'Margin direction',
    marginSize: props.labels?.marginSize ?? 'Margin size',
    all: props.labels?.all ?? 'All',
    horizontal: props.labels?.horizontal ?? 'Horizontal',
    vertical: props.labels?.vertical ?? 'Vertical',
    top: props.labels?.top ?? 'Top',
    right: props.labels?.right ?? 'Right',
    bottom: props.labels?.bottom ?? 'Bottom',
    left: props.labels?.left ?? 'Left',
    marginClass: props.labels?.marginClass ?? 'Margin class',
    paddingClass: props.labels?.paddingClass ?? 'Padding class',
    previewTitle: props.labels?.previewTitle ?? 'Rendered helper preview',
    previewBody: props.labels?.previewBody ?? 'Change the selectors to inspect how each helper maps to the generated class name.',
}))

const directionOptions = computed<SelectOption<DirectionValue>[]>(() => ([
    { name: resolvedLabels.value.all, value: 'all' },
    { name: resolvedLabels.value.horizontal, value: 'x' },
    { name: resolvedLabels.value.vertical, value: 'y' },
    { name: resolvedLabels.value.top, value: 't' },
    { name: resolvedLabels.value.right, value: 'r' },
    { name: resolvedLabels.value.bottom, value: 'b' },
    { name: resolvedLabels.value.left, value: 'l' },
]))

const sizeOptions: SelectOption<number>[] = Array.from({ length: 13 }, (_, index) => ({
    name: `${index}`,
    value: index,
}))

const buildSpacingClass = (type: 'm' | 'p', direction: DirectionValue, size: number) => {
    if (direction === 'all') {
        return `${type}-${size}`
    }

    return `${type}${direction}-${size}`
}

const marginClass = computed(() => buildSpacingClass('p', marginDirection.value, marginSize.value))
const marginClassLabel = computed(() => buildSpacingClass('m', marginDirection.value, marginSize.value))
const paddingClass = computed(() => buildSpacingClass('p', paddingDirection.value, paddingSize.value))

</script>

<style lang="scss">
.design-system__spacing-usage {
    --margin-shell-color: #ffcc80;
    --padding-shell-color: #c5e1a5;

    .design-code-panel {
        min-height: unset;
    }

    &-card {
        --card-padding: 0;
    }

    &__margin-shell {
        background-color: var(--margin-shell-color);
    }

    &__padding-shell {
        background-color: var(--padding-shell-color);
    }

    &__content {
        background-color: var(--e-color-surface-subtle);
    }
}
</style>