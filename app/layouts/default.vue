<template>
  <EApp>
    <EBar app clipped fixed outlined>
      <EButton :icon="$icon.menu" @click="drawerModel = !drawerModel" />
      <AppLogo class="mx-3" />
      <ESpacer />
      <EButton :icon="$icon.themeDarkLight" :aria-label="themeToggleLabel" :title="themeToggleLabel"
        @click="toggleTheme()" />
      <EButton :icon="$icon.gitHub" />

      <EMenu origin="bottom right" transition="scale">
        <template #activator="{ attrs }">
          <EButton v-bind="attrs" :icon="$icon.lng" :aria-label="languageToggleLabel" :title="languageToggleLabel" />
        </template>
        <EList>
          <EListItem v-for="localeOption in locales" :key="localeOption.code"
            :is-active="isCurrentLocale(localeOption.code)" @click="toggleLanguage(localeOption.code)">
            {{ localeOption.name }}
          </EListItem>
        </EList>
      </EMenu>
    </EBar>
    <AppNavigationDrawer v-model="drawerModel" />
    <AppSecondaryNav />
    <NuxtRouteAnnouncer />
    <EMain>
      <EContainer class="p-4" max-width="980px">
        <slot />
        <DocsPageFooter />
      </EContainer>
    </EMain>
  </EApp>
</template>

<script setup lang="ts">
import { EButton, useTheme } from 'nuvex-ui';
import { useI18n } from 'vue-i18n'
import { withLocalePrefix } from '~/utils/locale-path'

const drawerModel = ref(true);
const { currentTheme, toggleTheme } = useTheme();
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t, locale } = useI18n()
const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
})

const themeToggleLabel = computed(() =>
  !isHydrated.value
    ? t('ui.theme.toggle')
    : currentTheme.value === 'dark'
      ? t('ui.theme.toLight')
      : t('ui.theme.toDark'),
);

type LayoutLocale = { code: string; name: string }

const locales: LayoutLocale[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Espanol' },
]

const alternateLocale = computed<LayoutLocale | undefined>(() => {
  return locales.find((value) => value.code !== locale.value)
})

const languageToggleLabel = computed(() => {
  const targetLocaleName = alternateLocale.value?.name

  if (!targetLocaleName) {
    return t('ui.language.toggle')
  }

  return t('ui.language.switchTo', { locale: targetLocaleName })
})

const isCurrentLocale = (localeCode: string): boolean => {
  return locale.value === localeCode
}

const toggleLanguage = async (localeCode: string) => {
  const targetPath = withLocalePrefix(route.path, localeCode)
  if (!targetPath) {
    return
  }

  await navigateTo(targetPath)
}

const siteUrl = computed(() => String(runtimeConfig.public.siteUrl || 'http://localhost:3000'))

const canonicalPath = computed(() => {
  return withLocalePrefix(route.path, locale.value)
})

const alternateHeadLinks = computed<{ rel: string; hreflang: string; href: string }[]>(() => {
  const links = locales
    .map((value) => {
      const localizedPath = withLocalePrefix(route.path, value.code)

      if (!localizedPath) {
        return null
      }

      return {
        rel: 'alternate',
        hreflang: value.code,
        href: new URL(localizedPath, siteUrl.value).toString(),
      }
    })
    .filter((value): value is { rel: string; hreflang: string; href: string } => Boolean(value))

  return links
})

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    {
      rel: 'canonical',
      href: new URL(canonicalPath.value, siteUrl.value).toString(),
    },
    ...alternateHeadLinks.value,
  ],
}))
</script>
