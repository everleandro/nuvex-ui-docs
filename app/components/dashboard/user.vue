<template>
    <ECard :class="cardClass" elevation="sm" class="user-card">
        <div class="d-flex gap-4 full-width align-start">
            <EAvatar v-bind="avatarAttrs" size="large" />

            <div class="d-flex flex-column flex-1-1-0 gap-2">
                <div class="d-flex justify-space-between align-start gap-3">
                    <div class="d-flex flex-column gap-1">
                        <h3 class="type-title mb-0">{{ modelValue.name }}</h3>
                        <p class="type-subtitle mb-0">
                            {{ modelValue.email || 'No email provided' }}
                        </p>
                    </div>
                </div>

                <div class="d-flex flex-wrap gap-2">
                    <EChip>Premium client</EChip>
                    <EChip color="secondary">Last visit 2h ago</EChip>
                </div>
            </div>
            <EButton ref="menuActivator" :icon="$icon.dotsMenu" text />
            <EMenu :activator="menuActivator" fit-content origin="right bottom" transition="scale">
                <template #activator="attrs">

                </template>
                <e-list color="primary" dense>
                    <e-list-item :prepend-icon="$icon.accountEdit">
                        Edit
                    </e-list-item>
                    <e-list-item :prepend-icon="$icon.accountCancel">
                        Disable
                    </e-list-item>
                </e-list>
            </EMenu>
        </div>
    </ECard>
</template>
<script lang="ts">
export interface Employee {
    name: string
    id: string
    avatarSrc?: string
    email?: string
}
</script>
<script lang="ts" setup>
export interface Props {
    gridMode?: boolean
    color?: string,
    modelValue: Employee
}

const menuActivator = ref<HTMLElement | null>(null)
const { $icon } = useNuxtApp()
const props = withDefaults(defineProps<Props>(), { color: 'primary', gridMode: true })

const avatarAttrs = computed(() => {
    return props.modelValue.avatarSrc ? { src: props.modelValue.avatarSrc } : { color: props.color, icon: $icon.user }
})

const cardClass = computed(() => {
    const classes = ['user-card']
    if (props.gridMode) classes.push('user-card--grid-mode')
    return classes
})

</script>
<style lang="scss">
.user-card {
    height: 100%;
}
</style>