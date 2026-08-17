<template>
  <ESchedule v-model="date" class="full-width" :spaces="spaces" :events="events" :start="9 * 60 * 60"
    :end="14 * 60 * 60" :row-height="64" elevation="sm">
    <template #toolbar="toolbar">
      <EBar color="primary">
        <EButton text use-contrast-color :icon="$icon.arrowLeft" :aria-label="toolbar.labels.previousPeriod"
          @click="toolbar.goToPreviousPeriod()" />
        <EButton text use-contrast-color @click="toolbar.goToToday()">
          {{ toolbar.labels.today }}
        </EButton>
        <EButton text use-contrast-color :icon="$icon.arrowRight" :aria-label="toolbar.labels.nextPeriod"
          @click="toolbar.goToNextPeriod()" />
        <ESpacer />
        <strong class="type-subtitle">{{ formatDate(toolbar.date) }}</strong>
      </EBar>
    </template>
  </ESchedule>
</template>

<script setup lang="ts">
import { useScheduleResources } from './schedule.resources'

const date = ref(new Date())
const { spaces, events } = useScheduleResources({ spaceCount: 1, eventCount: 4 })
const formatDate = (value: Date) => new Intl.DateTimeFormat(undefined, {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
}).format(value)
</script>