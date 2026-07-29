<template>
    <EBar class="docs-page__button-integration-bar" outlined>
        <EButton :icon="$icon.menu" text />
        <AppLogo />
        <ESpacer />
        <EButton :prepend-icon="$icon.plus" tonal> New</EButton>
        <EButton :icon="$icon.bellOutline" text />
        <EAvatar :src="getAvatarByIndex(0)?.avatarSrc" text />
    </EBar>
</template>

<script setup lang="ts">
const { getAvatarByIndex } = useAvatars()
</script>
<style scoped lang="scss">
.docs-page__button-integration-bar {
    --e-bar-inline-gap: var(--e-space-base);
    --e-avatar-size-default: 48px;
}
</style>