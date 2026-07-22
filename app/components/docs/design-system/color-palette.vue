<template>
    <ECard :title="color" class="color-palette__card" :color="color">
        <div v-for="colorItem in colorList" :key="colorItem" :class="colorItem" class="d-flex p-4">
            <span class="color-name">{{ colorItem }}</span>
            <ESpacer />
            <span>{{ getCssVar(colorItem) }}</span>
        </div>
    </ECard>
</template>
<script setup lang="ts">
const { getCssVar } = useColor();
const props = (defineProps<{
    color: string,
    primitiveTones?: readonly string[],
}>())

const colorList = computed(() => {
    const result = [...(props.primitiveTones || [])]?.map(tone => `${props.color}-${tone}`)
    return [
        props.color,
        ...result
    ]
})
</script>
<style lang="scss">
.color-palette__card {
    .e-card__main {
        padding: var(--card-padding) 0 0;
    }

    .e-card__headline {
        padding: 0 var(--card-padding);
        text-transform: capitalize;
    }
}
</style>