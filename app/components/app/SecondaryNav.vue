<template>
    <EDrawer :model-value="isVisible" right width="240px" appearance="transparent">
        <template #prepend>
            <div class="d-flex items-center gap-2 mt-4 mb-2">
                <EIcon :icon="$icon.layersOutline" />
                <span class="text-h6">On this page</span>
            </div>
        </template>

        <ETabGroup v-if="navItems.length" v-model="activeSection" vertical tab-align="start" track class="ml-3">
            <ETab v-for="item in navItems" :key="item.id" :value="item.id">
                {{ item.label }}
            </ETab>
        </ETabGroup>

        <p v-else class="ml-3 mt-2 text-caption">No sections available.</p>
    </EDrawer>
</template>

<script setup lang="ts">
import { getDocsSecondaryNavItems } from '~/content/docs'

const route = useRoute()
const activeSection = ref('')

const navItems = computed(() => getDocsSecondaryNavItems(route.path))
const isVisible = computed(() => route.path.startsWith('/docs/') && navItems.value.length > 0)

const scrollToSection = (id: string) => {
    if (!id) return

    const section = document.getElementById(id)
    if (!section) return

    const topOffset = 92
    const top = section.getBoundingClientRect().top + window.scrollY - topOffset

    window.scrollTo({ top, behavior: 'smooth' })
}

watch(
    () => route.path,
    () => {
        activeSection.value = navItems.value[0]?.id ?? ''
    },
    { immediate: true },
)

watch(activeSection, (id) => {
    scrollToSection(id)
})
</script>