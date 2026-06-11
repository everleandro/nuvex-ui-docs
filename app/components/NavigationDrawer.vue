<template>
    <EDrawer v-model="drawerModel" nav>
        <EList v-model:group="nestedGroupModel" class="mx-3" dense>
            <EListGroup value="Getting Started">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" title="Getting Started" :prepend-icon="$icon.gettingStarted"/>
                </template>
                <EListItem title="Introduction" />
                <EListItem title="Installation"/>
                <EListItem title="Quick Start"  />
            </EListGroup>
            <EListGroup value="Foundation">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" title="Foundation" :prepend-icon="$icon.foundation" />
                </template>
                <EListItem title="Typography" />
                <EListItem title="Icons" />
                <EListItem title="Colors" />
            </EListGroup>
            
            <EListGroup value="Theme System">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" title="Theme System" :prepend-icon="$icon.themeSystem"/>
                </template>
                <EListItem title="Theming" />
                <EListItem title="Design Tokens" />
            </EListGroup>
            <EListGroup value="Utilities">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" title="Utilities" :prepend-icon="$icon.utilities"/>
                </template>
                <EListItem title="Flexbox" />
                <EListItem title="Spacing" />
                <EListItem title="Layout" />
                <EListItem title="Helpers" />
            </EListGroup>
            
           
            <EListGroup value="components">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" title="Components" :prepend-icon="$icon.components"/>
                </template>
                <EListItem title="App" />
                <EListItem title="Bar" />
                <EListItem title="Button" />
                <EListItem title="Card" />
                <EListItem title="Drawer" />
                <EListItem title="List" />
                <EListItem title="Overlay" />
                <EListItem title="Snackbar" />
                <EListItem title="Tabs" />
                <EListItem title="TextField" />
            </EListGroup>
            <EListGroup value="Api">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" title="API" :prepend-icon="$icon.api"/>
                </template>
                <EListItem title="Advanced Usage" :prepend-icon="$icon.theming" />
                <EListItem title="Plugin" :prepend-icon="$icon.installation" />
                <EListItem title="SSR" :prepend-icon="$icon.installation" />
            </EListGroup>
            <EListGroup value="Community">
                <template #activator="{ attrs }">
                    <EListItem v-bind="attrs" title="Community" :prepend-icon="$icon.community"/>
                </template>
                <EListItem title="Roadmap" :prepend-icon="$icon.theming" />
                <EListItem title="Sponsors & Backers" :prepend-icon="$icon.installation" />
                <EListItem title="Changelog" :prepend-icon="$icon.installation" />
                <EListItem title="Contributing" :prepend-icon="$icon.installation" />
            </EListGroup>
        </EList>
    </EDrawer>
</template>
<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
})
const nestedGroupModel = ref(["components", "components/navigation"]);
const emit = defineEmits(['update:modelValue'])
const drawerModel = computed({
    get() {
        return props.modelValue
    },
    set(value: boolean) {
        emit('update:modelValue', value)
    },
})
</script>