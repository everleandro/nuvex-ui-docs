<template>
  <EApp>
    <EBar app clipped fixed outlined>
      <EButton :icon="$icon.menu" text @click="drawerModel = !drawerModel" />
      <NuxtLink :to="withLocalePrefix('/', locale)" aria-label="Nuvex UI home">
        <AppLogo class="mx-3" />
      </NuxtLink>
      <ESpacer />
      <div class="d-flex gap-1">
        <EButton :icon="themeIcon" text :aria-label="themeToggleLabel" :title="themeToggleLabel"
          @click="toggleTheme()" />
        <EButton :icon="$icon.gitHub" text to="https://github.com/everleandro/nuvex-ui" target="_blank" rel="noreferrer"
          aria-label="Open GitHub repository" title="Open GitHub repository" />

        <EMenu origin="bottom right" transition="scale">
          <template #activator="{ attrs }">
            <EButton v-bind="attrs" :icon="$icon.lng" :aria-label="languageToggleLabel" text
              :title="languageToggleLabel" />
          </template>
          <EList>
            <EListItem v-for="localeOption in locales" :key="localeOption.code"
              :is-active="isCurrentLocale(localeOption.code)" @click="toggleLanguage(localeOption.code)">
              {{ localeOption.name }}
            </EListItem>
          </EList>
        </EMenu>
      </div>
    </EBar>
    <AppNavigationDrawer v-model="drawerModel" />
    <AppSecondaryNav />
    <NuxtRouteAnnouncer />
    <EMain>
      <EContainer>
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
import { useSeoHead } from '~/composables/useSeoHead'
import { schemaOrganization, schemaWebSite, schemaToHeadScript, SiteDefaults } from '~/utils/schema'
import { getFontPreloadLinks } from '~/utils/fonts-config'

const { $icon } = useNuxtApp();
const drawerModel = ref(true);
const { currentTheme, toggleTheme } = useTheme();
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t, locale } = useI18n()
const isHydrated = ref(false)

const { getHeadObject } = useSeoHead()

const siteUrl = computed(() => String(runtimeConfig.public.siteUrl || 'http://localhost:3000'))

onMounted(() => {
  isHydrated.value = true
})

const themeIcon = computed(() => (currentTheme.value === 'dark' ? $icon.light : $icon.dark))
const themeToggleLabel = computed(() =>
  !isHydrated.value
    ? t('common.theme.toggle')
    : currentTheme.value === 'dark'
      ? t('common.theme.toLight')
      : t('common.theme.toDark'),
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
    return t('common.language.toggle')
  }

  return t('common.language.switchTo', { locale: targetLocaleName })
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

useHead(() => {
  const seoHead = getHeadObject()
  const orgSchema = schemaOrganization(SiteDefaults.organizationNuvexUI(siteUrl.value))
  const websiteSchema = schemaWebSite(SiteDefaults.websiteNuvexUIDocs(siteUrl.value))
  const fontPreloadLinks = getFontPreloadLinks()

  return {
    htmlAttrs: {
      lang: locale.value,
      'data-theme': currentTheme.value,
      style: `color-scheme: ${currentTheme.value === 'dark' ? 'dark' : 'light'};`,
    },
    ...seoHead,
    link: [
      ...fontPreloadLinks,
      // Existing links will be merged
      ...(seoHead.link || []),
    ],
    script: [
      schemaToHeadScript(orgSchema, 'schema-organization'),
      schemaToHeadScript(websiteSchema, 'schema-website'),
    ],
  }
})
</script>
