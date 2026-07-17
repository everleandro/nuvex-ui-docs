<template>
    <EBar class="docs-page__button-integration-bar" elevation="xs">
        <EButton :icon="$icon.menu" text />
        <AppLogo />
        <ESpacer />
        <EButton :prepend-icon="$icon.plus" tonal> Crear</EButton>
        <EButton :icon="$icon.bellOutline" text />
    </EBar>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDocsComponentI18nContent } from '~/composables/useDocsI18nContent'

interface IntegrationHierarchyLabels {
    cancel: string
    draft: string
    publish: string
    idle: string
    cancelState: string
    draftState: string
    publishState: string
}

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.button.button')

const labels = computed<IntegrationHierarchyLabels>(() => {
    const raw = content.value.labels.integrationText?.hierarchy

    return {
        cancel: raw?.cancel ?? 'Cancel',
        draft: raw?.draft ?? 'Save draft',
        publish: raw?.publish ?? 'Publish',
        idle: raw?.idle ?? 'Select an action to inspect button hierarchy',
        cancelState: raw?.cancelState ?? 'Secondary action selected: cancel',
        draftState: raw?.draftState ?? 'Middle-priority action selected: save draft',
        publishState: raw?.publishState ?? 'Primary action selected: publish',
    }
})
</script>
<style scoped lang="scss">
.docs-page__button-integration-bar {
    --e-bar-inline-gap: var(--e-space-base);
}
</style>