<template>
    <EDrawer :model-value="isVisible" right width="240px" appearance="transparent">
        <template #prepend>
            <div class="d-flex items-center gap-2 mt-4 mb-2">
                <EIcon :icon="$icon.layersOutline" />
                <span class="text-h6">{{ t('docs.secondaryNav.title') }}</span>
            </div>
        </template>

        <div v-if="navItems.length" ref="tabGroupContainer" class="ml-3">
            <ETabGroup v-model="activeSection" vertical tab-align="start" track color="primary" inactive-color="secondary">
                <ETab v-for="item in navItems" :key="item.id" :value="item.id">
                    {{ item.label }}
                </ETab>
            </ETabGroup>
        </div>

        <p v-else class="ml-3 mt-2 text-caption">{{ t('docs.secondaryNav.empty') }}</p>
    </EDrawer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { getDocsSecondaryNavItems } from '~/content/docs'

const route = useRoute()
const { t } = useI18n()
const activeSection = ref('')
const topOffset = 92
const tabGroupContainer = ref<HTMLElement | null>(null)
let isSyncingFromScroll = false
let scrollFrame: number | null = null

const navItems = computed(() => getDocsSecondaryNavItems(route.path))
const isVisible = computed(() => route.path.startsWith('/docs/') && navItems.value.length > 0)

const scrollToSection = (id: string) => {
    if (!id) return

    const section = document.getElementById(id)
    if (!section) return

    const top = section.getBoundingClientRect().top + window.scrollY - topOffset

    window.scrollTo({ top, behavior: 'smooth' })
}

const focusTabForSection = (id: string) => {
    if (!id) return

    const container = tabGroupContainer.value
    if (!container) return

    const tab = container.querySelector<HTMLElement>(`.e-tab[data-value="${CSS.escape(id)}"]`)
    if (!tab || document.activeElement === tab) return

    tab.focus({ preventScroll: true })
}

const syncActiveSectionFromScroll = () => {
    if (typeof window === 'undefined') return

    const sectionIds: string[] = navItems.value.map((item) => item.id)
    if (!sectionIds.length) {
        activeSection.value = ''
        return
    }

    const threshold = topOffset + 24
    let currentSection = sectionIds[0] ?? ''

    for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue

        if (section.getBoundingClientRect().top - threshold <= 0) {
            currentSection = id
            continue
        }

        break
    }

    const nearPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
    if (nearPageBottom) {
        currentSection = sectionIds[sectionIds.length - 1] ?? currentSection
    }

    if (currentSection !== activeSection.value) {
        isSyncingFromScroll = true
        activeSection.value = currentSection
        nextTick(() => focusTabForSection(currentSection))
    }
}

const queueScrollSync = () => {
    if (typeof window === 'undefined' || scrollFrame !== null) return

    scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = null
        syncActiveSectionFromScroll()
    })
}

onMounted(() => {
    syncActiveSectionFromScroll()
    window.addEventListener('scroll', queueScrollSync, { passive: true })
    window.addEventListener('resize', queueScrollSync)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', queueScrollSync)
    window.removeEventListener('resize', queueScrollSync)

    if (scrollFrame !== null) {
        window.cancelAnimationFrame(scrollFrame)
    }
})

watch(
    () => route.path,
    async () => {
        activeSection.value = navItems.value[0]?.id ?? ''

        await nextTick()
        syncActiveSectionFromScroll()
    },
    { immediate: true },
)

watch(navItems, async () => {
    await nextTick()
    syncActiveSectionFromScroll()
})

watch(activeSection, (id) => {
    if (isSyncingFromScroll) {
        isSyncingFromScroll = false
        return
    }

    scrollToSection(id)
})
</script>