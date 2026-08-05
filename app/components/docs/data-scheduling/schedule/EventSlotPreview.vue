<template>
  <div class="full-width">
    <ESchedule v-model="date" class="full-width" :spaces="spaces" :events="events" :start="9 * 60 * 60"
      :end="14 * 60 * 60" :row-height="64" event-elevation="none" elevation="sm">
      <template #event="{ event }">
        <EButton text block class="full-height">
          <span class="d-flex flex-column items-start full-width" style="color:var(--schedule-local-event-color)">
            <strong class="type-body">{{ event.name }}</strong>
            <span class="type-caption">{{ event.subtitle }}</span>
            <span class="type-caption text-medium-emphasis">{{ event.footer }}</span>
          </span>
        </EButton>
      </template>
    </ESchedule>
  </div>
</template>

<script setup lang="ts">
import { useScheduleResources } from './schedule.resources'

const date = ref(new Date(2026, 7, 3))
const { spaces, events: scheduleEvents } = useScheduleResources({ spaceCount: 1, eventCount: 9 })
const events = computed(() => scheduleEvents.value.filter(({ id }) => (
  id === 'planning' || id === 'customer-interview'
)))
</script>