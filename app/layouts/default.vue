<template>
  <EApp>
    <EBar app clipped outlined>
      <EButton :icon="$icon.menu" @click="drawerModel = !drawerModel" />
      <AppLogo class="mx-3" />
      <ESpacer />
      <EButton :icon="$icon.themeDarkLight" :aria-label="themeToggleLabel" :title="themeToggleLabel"
        @click="toggleTheme()" />
      <EButton :icon="$icon.gitHub" @click="drawerModel = !drawerModel" />
    </EBar>
    <NavigationDrawer v-model="drawerModel" />
    <NuxtRouteAnnouncer />
    <EMain>
      <EContainer>
        <slot />
      </EContainer>
    </EMain>
  </EApp>
</template>

<script setup lang="ts">
import { EButton, useTheme } from 'nuvex-ui';

const drawerModel = ref(true);
const { currentTheme, toggleTheme } = useTheme();

const themeToggleLabel = computed(() =>
  currentTheme.value === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro',
);
</script>
