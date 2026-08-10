<template>
    <EApp>
        <EBar app fixed outlined class="docs-landing-layout__bar mb-0">
            <NuxtLink :to="withLocalePrefix('/', locale)" aria-label="Nuvex UI home">
                <AppLogo class="mx-3" />
            </NuxtLink>
            <ESpacer />
            <EButton :icon="themeIcon" text :aria-label="themeToggleLabel" :title="themeToggleLabel"
                @click="toggleTheme()" />
            <EButton :icon="$icon.gitHub" text to="https://github.com/everleandro/nuvex-ui" target="_blank"
                rel="noreferrer" aria-label="Open GitHub repository" title="Open GitHub repository" />

            <EMenu origin="bottom right" transition="scale">
                <template #activator="{ attrs }">
                    <EButton v-bind="attrs" text :icon="$icon.lng" :aria-label="languageToggleLabel"
                        :title="languageToggleLabel" />
                </template>
                <EList>
                    <EListItem v-for="localeOption in locales" :key="localeOption.code"
                        :is-active="isCurrentLocale(localeOption.code)" @click="toggleLanguage(localeOption.code)">
                        {{ localeOption.name }}
                    </EListItem>
                </EList>
            </EMenu>
        </EBar>

        <NuxtRouteAnnouncer />

        <EMain class="docs-landing-layout__main">

            <EContainer class="e-container--fluid p-0">
                <slot />
                <DocsPageFooter />
            </EContainer>
        </EMain>
        <EDivider />
        <footer class="docs-landing-layout__footer d-flex p-10">
            <NuxtLink :to="withLocalePrefix('/', locale)" aria-label="Nuvex UI home">
                <AppLogo class="mx-3" />
            </NuxtLink>
            <ESpacer />
            <EButton :icon="$icon.gitHub" text to="https://github.com/everleandro/nuvex-ui" target="_blank"
                rel="noreferrer" aria-label="Open GitHub repository" title="Open GitHub repository" />
        </footer>
    </EApp>
</template>

<script setup lang="ts">
import { EButton, useTheme } from 'nuvex-ui'
import { useI18n } from 'vue-i18n'
import { withLocalePrefix } from '~/utils/locale-path'
const { $icon } = useNuxtApp()

const { currentTheme, toggleTheme } = useTheme()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t, locale } = useI18n()
const isHydrated = ref(false)

onMounted(() => {
    isHydrated.value = true
})

const themeToggleLabel = computed(() =>
    !isHydrated.value
        ? t('common.theme.toggle')
        : currentTheme.value === 'dark'
            ? t('common.theme.toLight')
            : t('common.theme.toDark'),
)
const themeIcon = computed(() => (currentTheme.value === 'dark' ? $icon.light : $icon.dark))

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
        'data-theme': currentTheme.value,
        style: `color-scheme: ${currentTheme.value === 'dark' ? 'dark' : 'light'};`,
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

<style scoped>
footer {
    background: var(--e-color-surface-base);
}
</style>