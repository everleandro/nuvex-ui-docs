<template>
  <section class="landing-dashboard__view">
    <ERow class="landing-dashboard__hero py-4 mb-2">
      <ECol class="flex-1-1-0 d-flex items-center">
        <div class="d-flex flex-column gap-1">
          <p class="landing-dashboard__eyebrow type-caption">Overview</p>
          <h3 class="mb-0">A polished product preview for your next demo</h3>
        </div>
      </ECol>
      <ECol cols="auto" class="d-flex items-center">
        <EButton class="ml-4" color="secondary" :prepend-icon="$icon.calendar">This week</EButton>
      </ECol>
    </ERow>

    <ERow class="mt-2">
      <ECol cols="6" md="6" lg="3">
        <ECard tonal elevation="sm" color="primary" :prepend-header-icon="$icon.storeClock" title="Bookings"
          subtitle="Today">
          <div class="d-flex flex-column gap-2">
            <div class="type-display-2">128</div>
            <p class="type-subtitle mb-0">18 arrivals confirmed</p>
            <EProgressLinear :value="72" color="primary" :height="6" aria-label="Today's bookings" />
          </div>
        </ECard>
      </ECol>
      <ECol cols="6" md="6" lg="3">
        <ECard tonal elevation="sm" color="green-700" :prepend-header-icon="$icon.account" title="Occupancy"
          subtitle="Peak rooms">
          <div class="d-flex flex-column gap-2">
            <div class="type-display-2">84%</div>
            <p class="type-subtitle mb-0">Strong demand this evening</p>
            <EProgressLinear :value="84" color="primary" :height="6" aria-label="Occupancy" />
          </div>
        </ECard>
      </ECol>
      <ECol cols="6" md="6" lg="3">
        <ECard tonal elevation="sm" color="blue-700" :prepend-header-icon="$icon.alert" title="Canceled"
          subtitle="Last 7 days">
          <div class="d-flex flex-column gap-2">
            <div class="type-display-2">14</div>
            <p class="type-subtitle mb-0">Mostly due to late changes</p>
            <EProgressLinear :value="32" color="primary" :height="6" aria-label="Canceled reservations" />
          </div>
        </ECard>
      </ECol>
      <ECol cols="6" md="6" lg="3">
        <ECard tonal elevation="sm" color="amber-700" :prepend-header-icon="$icon.accountGroupOutline" title="Returning"
          subtitle="Loyal guests">
          <div class="d-flex flex-column gap-2">
            <div class="type-display-2">61</div>
            <p class="type-subtitle mb-0">Up 12% from last month</p>
            <EProgressLinear :value="61" color="primary" :height="6" aria-label="Returning customers" />
          </div>
        </ECard>
      </ECol>
    </ERow>

    <ERow class="mt-8">
      <ECol cols="12" md="4" lg="4">
        <ECard elevation="md" class="h-full">
          <div class="d-flex justify-between align-center mb-3">
            <div>
              <p class="type-title mb-1">Top customers</p>
              <p class="type-subtitle mb-0">Most active this month</p>
            </div>
            <span class="landing-dashboard__pill">+24%</span>
          </div>
          <EList class="landing-dashboard__compact-list">
            <EListItem v-for="customer in customerList" :key="customer.id" :prepend-avatar="customer.avatarSrc"
              :title="customer.name" :subtitle="customer.subtitle" />
          </EList>
        </ECard>
      </ECol>
      <ECol cols="12" md="8" lg="8">
        <ERow>
          <ECol v-for="item in miniChartCards" :key="item.title" cols="6" lg="6">
            <ECard elevation="sm" class="landing-dashboard__mini-card" :style="{ '--mini-chart-color': item.color }">
              <div class="d-flex justify-between align-start mb-3 full-width">
                <div>
                  <p class="type-subtitle-2 mb-1">{{ item.title }}</p>
                  <p class="type-caption mb-0">{{ item.subtitle }}</p>
                </div>
                <span class="landing-dashboard__mini-badge">{{ item.change }}</span>
              </div>
              <div class="landing-dashboard__mini-chart mb-3">
                <svg viewBox="0 0 120 60" role="img" :aria-label="item.title">
                  <path :d="getSparklinePath(item.values)" class="landing-dashboard__mini-line" />
                </svg>
              </div>
              <div class="d-flex justify-between align-baseline mt-3">
                <span class="type-title">{{ item.value }}</span>
                <span class="type-caption">{{ item.caption }}</span>
              </div>
            </ECard>
          </ECol>
        </ERow>
      </ECol>
    </ERow>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'playground-dashboard',
})

const { getAvatarList } = useAvatars()

const customerList = computed(() => {
  const baseCustomers = [
    { name: 'Mira Alvarez', subtitle: '12 reservations', id: 'mira' },
    { name: 'Ethan Brooks', subtitle: '9 reservations', id: 'ethan' },
    { name: 'Alex Johnson', subtitle: '9 reservations', id: 'alex' },
    { name: 'Sofia Chen', subtitle: '8 reservations', id: 'sofia' },
    { name: 'Daniel Ortiz', subtitle: '7 reservations', id: 'daniel' },
  ]

  return baseCustomers.map((customer, index) => ({
    ...customer,
    avatarSrc: getAvatarList()[index]?.avatarSrc,
  }))
})

const miniChartCards = [
  {
    title: 'Check-ins',
    subtitle: 'Daily pace',
    value: '92%',
    caption: 'Last 7 days',
    change: '+8%',
    color: 'var(--e-color-primary)',
    values: [24, 28, 31, 29, 34, 38, 36],
  },
  {
    title: 'Revenue',
    subtitle: 'Bookings value',
    value: '$4.2k',
    caption: 'This week',
    change: '+12%',
    color: 'var(--e-color-success)',
    values: [18, 22, 20, 27, 26, 31, 34],
  },
  {
    title: 'No-shows',
    subtitle: 'Cancelled seats',
    value: '6%',
    caption: 'Attendance',
    change: '-3%',
    color: 'var(--e-color-warning)',
    values: [14, 12, 13, 15, 11, 10, 9],
  },
  {
    title: 'Retention',
    subtitle: 'Returning guests',
    value: '61%',
    caption: 'Loyalty',
    change: '+5%',
    color: 'var(--e-color-secondary)',
    values: [20, 24, 22, 26, 28, 30, 32],
  },
]

const getSparklinePath = (values: number[], width = 120, height = 60, padding = 8) => {
  const maxValue = Math.max(...values)
  const minValue = Math.min(...values)
  const innerHeight = height - padding * 2
  const innerWidth = width - padding * 2

  const points = values.map((value, index) => {
    const x = padding + (index / (values.length - 1)) * innerWidth
    const normalized = (value - minValue) / (maxValue - minValue || 1)
    const y = height - padding - normalized * innerHeight
    return { x, y }
  })

  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(' ')
}
</script>

<style scoped>
.landing-dashboard__view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.landing-dashboard__eyebrow {
  margin: 0;
  color: var(--e-color-primary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.landing-dashboard__mini-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.45rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--mini-chart-color) 16%, transparent);
  color: var(--mini-chart-color);
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
  width: 45px;
  height: 45px;
}

.landing-dashboard__mini-chart {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin-bottom: 0.65rem;
  border-radius: 12px;
}

.landing-dashboard__mini-chart svg {
  width: 100%;
  height: 100%;
}

.landing-dashboard__mini-line {
  fill: none;
  stroke: var(--mini-chart-color);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.landing-dashboard__pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: var(--e-color-primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.landing-dashboard__pill--success {
  color: var(--e-color-success);
}

.landing-dashboard__chart {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.25rem;
}

.landing-dashboard__chart-svg {
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
  padding: 0.6rem;
}

.landing-dashboard__chart-line {
  fill: none;
  stroke: color-mix(in srgb, var(--e-color-primary) 70%, var(--e-color-secondary));
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.landing-dashboard__chart-dot {
  fill: var(--e-color-primary);
}

.landing-dashboard__chart-labels {
  display: flex;
  justify-content: space-between;
  color: var(--e-color-text-muted);
  font-size: 0.8rem;
}
</style>