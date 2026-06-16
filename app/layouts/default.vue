<template>
  <EApp>
    <EBar app clipped fixed outlined>
      <EButton :icon="$icon.menu" @click="drawerModel = !drawerModel" />
      <AppLogo class="mx-3" />
      <ESpacer />
      <EButton :icon="$icon.themeDarkLight" :aria-label="themeToggleLabel" :title="themeToggleLabel"
        @click="toggleTheme()" />
      <EButton :icon="$icon.gitHub" @click="drawerModel = !drawerModel" />
    </EBar>
    <AppNavigationDrawer v-model="drawerModel" />
    <AppSecondaryNav />
    <NuxtRouteAnnouncer />
    <EMain>
      <EContainer class="p-4">
        <slot />
        <DocsPageFooter />
      </EContainer>
    </EMain>
  </EApp>
</template>

<script setup lang="ts">
import { EButton, useTheme } from 'nuvex-ui';

const drawerModel = ref(true);
const { currentTheme, toggleTheme } = useTheme();
const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
})

const themeToggleLabel = computed(() =>
  !isHydrated.value
    ? 'Cambiar tema'
    : currentTheme.value === 'dark'
      ? 'Cambiar a tema claro'
      : 'Cambiar a tema oscuro',
);
</script>
