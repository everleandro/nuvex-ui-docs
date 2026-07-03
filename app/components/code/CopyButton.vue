<template>
    <div ref="root">
        <e-button :icon="$icon.contentCopy" text small
            :class="['copy-button-activator', 'm-1', { 'copy-button-activator--copied': copied }]"
            :title="copied ? t('ui.copy.copied') : t('ui.copy.code')" @click="copy" />
        <transition name="copy-feedback-fade">
            <span v-if="copied" class="copy-button-feedback">{{ t('ui.copy.copied') }}</span>
        </transition>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const copied = ref(false)
const root = ref<HTMLElement>()
let copiedTimer: ReturnType<typeof setTimeout> | undefined

const props = defineProps({
    onlyVisible: {
        type: Boolean,
        default: false,
    },
})

const resolveSearchRoot = () => {
    return (
        root.value?.closest('.code-panel, .e-window')
        || root.value?.parentElement
        || undefined
    )
}

const resolveCodeElement = () => {
    const searchRoot = resolveSearchRoot()

    if (!searchRoot) {
        return null
    }

    if (props.onlyVisible) {
        const visibleCode = searchRoot.querySelector(
            ':scope > div:not([style*="display:none"]):not([style*="display: none"]) code',
        )

        if (visibleCode) {
            return visibleCode
        }
    }

    return searchRoot.querySelector('code')
}

const copy = async () => {
    const code = resolveCodeElement()

    if (!code) {
        return
    }

    await navigator.clipboard.writeText(code.textContent ?? '')

    copied.value = true

    if (copiedTimer) {
        clearTimeout(copiedTimer)
    }

    copiedTimer = setTimeout(() => {
        copied.value = false
    }, 1600)
}

onBeforeUnmount(() => {
    if (copiedTimer) {
        clearTimeout(copiedTimer)
    }
})
</script>

<style lang="scss">
.copy-button-activator {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}

.copy-button-activator--copied {
    color: var(--e-color-success, #2e7d32);
}

.copy-button-feedback {
    position: absolute;
    top: 8px;
    right: 42px;
    z-index: 1;
    padding: 2px 8px;
    border-radius: 9999px;
    font-size: 11px;
    line-height: 1.4;
    background: color-mix(in srgb, var(--e-color-success, #2e7d32) 18%, transparent);
    color: var(--e-color-success, #2e7d32);
    border: 1px solid color-mix(in srgb, var(--e-color-success, #2e7d32) 35%, transparent);
}

.copy-feedback-fade-enter-active,
.copy-feedback-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.copy-feedback-fade-enter-from,
.copy-feedback-fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>