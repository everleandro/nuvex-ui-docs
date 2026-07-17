<template>
    <EDrawer v-model="drawerModel" nav>
        <EList v-model:group="nestedGroupModel" inset dense >
            <EListGroup v-for="group in navigationGroups" :key="group.id" :value="group.id">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" :title="t(getNavigationGroupTitleKey(group))"
                        :prepend-icon="$icon[group.icon]" />
                </template>
                <template v-for="entry in group.entries" :key="entry.id">
                    <EListItem
                        v-if="entry.kind === 'header'"
                        class="app-navigation-drawer__header"
                        :title="t(entry.titleKey)"
                        tabindex="-1"
                    />
                    <EDivider v-else-if="entry.kind === 'divider'" class="my-2" />
                    <EListItem
                        v-else
                        active-color="primary"
                        :title="t(getNavigationItemTitleKey(entry))"
                        :to="withLocalePrefix(entry.to, locale)"
                    />
                </template>
            </EListGroup>
        </EList>
    </EDrawer>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { findOpenGroupIdsByPath, getNavigationGroupTitleKey, getNavigationItemTitleKey, navigationGroups } from '~/navigation.config';
import { withLocalePrefix } from '~/utils/locale-path'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
})
const route = useRoute()
const { locale, t } = useI18n()
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

<style scoped lang="scss">
.app-navigation-drawer__header {
    pointer-events: none;
    opacity: 0.72;
    text-transform: uppercase;
}
</style>