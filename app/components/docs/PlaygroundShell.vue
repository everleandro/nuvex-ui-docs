<template>
    <EApp :class="{ 'docs-playground-shell--ready': isReady, 'docs-playground-shell': true }">
        <div v-if="!isReady" class="docs-playground-shell__placeholder" aria-live="polite">
            <div class="docs-playground-shell__pulse" />
            <span class="docs-playground-shell__label">Preparing playground…</span>
        </div>
        <div class="docs-playground-shell__content">
            <slot />
        </div>
    </EApp>
</template>

<script setup lang="ts">
const isReady = ref(false)

onMounted(() => {
    isReady.value = true
})
</script>

<style scoped>
.docs-playground-shell {
    position: relative;
    transform: translate(0);
    width: 100%;
    aspect-ratio: 16 / 10;
    max-width: 100%;
    overflow: hidden;
    isolation: isolate;
}

.docs-playground-shell__placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: var(--e-color-text-muted);
    background: linear-gradient(180deg, color-mix(in srgb, var(--e-color-primary) 8%, transparent) 0%, transparent 100%);
    z-index: 2;
}

.docs-playground-shell__pulse {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999px;
    border: 2px solid color-mix(in srgb, var(--e-color-primary) 28%, transparent);
    border-top-color: var(--e-color-primary);
    animation: docs-playground-shell-spin 0.8s linear infinite;
}

.docs-playground-shell__label {
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

.docs-playground-shell__content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 180ms ease, transform 180ms ease;
}

.docs-playground-shell--ready .docs-playground-shell__content {
    opacity: 1;
    transform: translateY(0);
}

@keyframes docs-playground-shell-spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
