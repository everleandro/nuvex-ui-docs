<template>
    <EDrawer v-model="drawerModel" nav>
        <EList v-model:group="nestedGroupModel" class="mx-3" dense>
            <EListGroup v-for="group in navigationGroups" :key="group.id" :value="group.id">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" :title="group.title" :prepend-icon="$icon[group.icon]" />
                </template>
                <EListItem v-for="item in group.children" :key="item.to" :title="item.title" :to="item.to" />
            </EListGroup>
        </EList>
    </EDrawer>
</template>
<script setup lang="ts">
import { findOpenGroupIdsByPath, navigationGroups } from '~/navigation.config';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
})
const route = useRoute()
const nestedGroupModel = ref<string[]>(findOpenGroupIdsByPath(route.path));
const emit = defineEmits(['update:modelValue'])
const drawerModel = computed({
    get() {
        return props.modelValue
    },
    set(value: boolean) {
        emit('update:modelValue', value)
    },
})

watch(
    () => route.path,
    (path) => {
        nestedGroupModel.value = findOpenGroupIdsByPath(path)
    },
    { immediate: true },
)
</script>