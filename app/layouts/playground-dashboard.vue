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
        <EButton text :icon="$icon.cog" aria-label="Settings" />
        <EButton text :icon="$icon.bellOutline" aria-label="Notifications" />
      </div>
    </EBar>

    <EDrawer v-model="drawerOpen" nav class="landing-dashboard__drawer">
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
const { locale } = useI18n()
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

const drawerOpen = ref(true)
const overview = computed(() => withLocalePrefix('/playgrounds/landing-dashboard', locale.value))
const login = computed(() => withLocalePrefix('/playgrounds/landing-dashboard/login', locale.value))
const customers = computed(() => withLocalePrefix('/playgrounds/landing-dashboard/customers', locale.value))
const schedule = computed(() => withLocalePrefix('/playgrounds/landing-dashboard/schedule', locale.value))

</script>