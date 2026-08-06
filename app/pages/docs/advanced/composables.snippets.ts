type ComposablesCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const composablesCodeSnippets: Record<
  | 'use-theme'
  | 'use-overlay-service'
  | 'use-breakpoint'
  | 'compose-patterns',
  ComposablesCodeSnippet[]
> = {
  'use-theme': [
    {
      label: 'Read and switch the active theme',
      code: '<script setup lang="ts">\nconst { currentTheme, getThemes, setTheme, toggleTheme } = useTheme()\n\nconst options = computed(() => getThemes().map((theme) => ({\n  value: theme.name,\n  label: theme.label || theme.name,\n})))\n\nconst onThemeChange = (nextTheme: string) => {\n  setTheme(nextTheme)\n}\n</script>\n\n<template>\n  <ESelect\n    :items="options"\n    item-title="label"\n    item-value="value"\n    :model-value="currentTheme"\n    label="Theme"\n    @update:model-value="onThemeChange"\n  />\n\n  <EButton variant="tonal" @click="toggleTheme()">\n    Toggle theme\n  </EButton>\n</template>',
      language: 'html',
    },
  ],
  'use-overlay-service': [
    {
      label: 'Open and close overlays with shared behavior',
      code: '<script setup lang="ts">\nconst open = ref(false)\nconst panelRef = ref<HTMLElement | null>(null)\nconst overlayId = "settings-panel"\n\nconst {\n  openOverlay,\n  closeOverlay,\n  updateOverlayContentElement,\n} = useOverlayService()\n\nwatch(panelRef, (element) => {\n  updateOverlayContentElement(overlayId, element)\n})\n\nconst openPanel = () => {\n  open.value = true\n  openOverlay({\n    id: overlayId,\n    lockScroll: true,\n    autoFocus: true,\n    restoreFocus: true,\n    contentElement: panelRef.value,\n    onOutsideClick: () => closePanel(),\n    onEscape: () => closePanel(),\n  })\n}\n\nconst closePanel = () => {\n  open.value = false\n  closeOverlay(overlayId)\n}\n</script>',
      language: 'html',
    },
  ],
  'use-breakpoint': [
    {
      label: 'Branch layout by viewport state',
      code: '<script setup lang="ts">\nconst { viewport } = useBreakpoint()\n\nconst showDesktopSidebar = computed(() => viewport.lg || viewport.xl)\nconst toolbarDensity = computed(() => (viewport.xs ? "compact" : "comfortable"))\n</script>\n\n<template>\n  <div :class="showDesktopSidebar ? \"layout-desktop\" : \"layout-mobile\"">\n    <Toolbar :density="toolbarDensity" />\n  </div>\n</template>',
      language: 'html',
    },
  ],
  'compose-patterns': [
    {
      label: 'Combine theme, breakpoint, and overlay state',
      code: '<script setup lang="ts">\nconst { currentTheme } = useTheme()\nconst { viewport } = useBreakpoint()\nconst { isOverlayActive } = useOverlayService()\n\nconst shellClasses = computed(() => ({\n  "is-dark": currentTheme.value === "dark",\n  "is-mobile": viewport.xs || viewport.sm,\n  "has-overlay": isOverlayActive.value,\n}))\n</script>\n\n<template>\n  <main :class="shellClasses">\n    <slot />\n  </main>\n</template>',
      language: 'html',
    },
  ],
}
