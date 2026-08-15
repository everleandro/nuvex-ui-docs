<template>
  <EApp class="landing-dashboard landing-dashboard__theme">
    <EBar app fixed outlined>
      <EButton text :icon="$icon.menu" aria-label="Toggle dashboard navigation" @click="drawerOpen = !drawerOpen" />
      <div class="landing-dashboard__brand">
        <span class="landing-dashboard__brand-dot" />
        <span>Pulseboard</span>
      </div>
      <ESpacer />
      <div class="d-flex gap-1">
        <!-- <EButton text :icon="$icon.cog" aria-label="Settings" /> -->
        <EButton :icon="themeIcon" text :aria-label="themeToggleLabel" :title="themeToggleLabel"
          @click="toggleTheme()" />
        <!-- <EButton text :icon="$icon.bellOutline" aria-label="Notifications" /> -->
      </div>
    </EBar>

    <EDrawer v-model="drawerOpen" fixed nav class="landing-dashboard__drawer">
      <template #prepend>
        <EListItem :prepend-avatar="getAvatarByIndex(5)?.avatarSrc" title="Ever Santiesteban"
          subtitle="Q3 Product Team" />
      </template>

      <EList active-color="primary" inset>
        <EListItem :prepend-icon="$icon.home" :to="overview" title="Overview" />
        <EListItem :prepend-icon="$icon.storeClock" :to="schedule" title="Schedule" />
        <EListItem :prepend-icon="$icon.accountGroupOutline" :to="customers" title="Customers" />
      </EList>

      <template #append>
        <div class="p-3">
          <EButton color="primary" :prepend-icon="$icon.logout" block :to="login"><span class="px-10">Logout</span>
          </EButton>
        </div>
      </template>
    </EDrawer>
    <NuxtRouteAnnouncer />
    <EMain>
      <EContainer>
        <slot />
      </EContainer>
    </EMain>
  </EApp>
</template>

<script setup lang="ts">
const { getAvatarByIndex } = useAvatars()
import { withLocalePrefix } from '~/utils/locale-path'
import { useTheme, useBreakpoint } from 'nuvex-ui'
const { currentTheme, toggleTheme } = useTheme()
const { $icon } = useNuxtApp()
const { t, locale } = useI18n()
const route = useRoute()
const { viewport } = useBreakpoint()
const isLargeScreen = computed(() => viewport.lg || viewport.xl)
watch(
  () => [route.path, isLargeScreen.value],
  ([path, largeScreen]) => {
    if (!largeScreen) {
      drawerOpen.value = false
    }
  },
  { flush: 'post' }
)

useHead(() => ({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
  htmlAttrs: {
    'data-theme': currentTheme.value,
    style: `color-scheme: ${currentTheme.value === 'dark' ? 'dark' : 'light'};`,
  },
}))

const drawerOpen = ref(true)
const overview = computed(() => withLocalePrefix('/playgrounds/landing-dashboard', locale.value))
const login = computed(() => withLocalePrefix('/playgrounds/landing-dashboard/login', locale.value))
const customers = computed(() => withLocalePrefix('/playgrounds/landing-dashboard/customers', locale.value))
const schedule = computed(() => withLocalePrefix('/playgrounds/landing-dashboard/schedule', locale.value))

const isHydrated = ref(false)

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
)


</script>
<style lang="scss">
@use 'nuvex-ui/mixin.scss' as mixins;

.landing-dashboard {
  &__hero {
    h3 {
      @include mixins.xs {
        font-size: 16px;
        line-height: 16px;
      }
    }
  }
}
</style>