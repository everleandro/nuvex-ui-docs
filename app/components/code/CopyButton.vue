<template>
    <div ref="root">
        <transition name="slide-fade">
            <e-button
                v-show="visible"
                :icon="$icon.contentCopy"
                text
                small
                class="copy-button-activator m-1"
                @click="copy"
            />
        </transition>
    </div>
</template>

<script setup lang="ts">
const visible = ref(true)
const root = ref<HTMLElement>()

const props = defineProps({
    onlyVisible: {
        type: Boolean,
        default: false,
    },
})

const copy = async () => {
    let code = root.value?.parentElement?.querySelector('code')

    if (props.onlyVisible) {
        code = root.value?.parentElement?.querySelector(
            ':scope > div:not([style*="display:none"]):not([style*="display: none"]) code',
        )
    }

    if (!code) {
        return
    }

    await navigator.clipboard.writeText(code.innerText)

    setTimeout(() => {
        visible.value = false
    }, 300)

    setTimeout(() => {
        visible.value = true
    }, 3000)
}
</script>

<style lang="scss">
.copy-button-activator {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateX(20px);
    opacity: 0;
}
</style>