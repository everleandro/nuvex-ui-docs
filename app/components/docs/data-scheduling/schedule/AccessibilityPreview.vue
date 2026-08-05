<template>
  <div class="full-width d-flex flex-column gap-3">
    <p class="type-body text-medium-emphasis" aria-live="polite">{{ announcement }}</p>
    <ESchedule v-model="date" class="full-width" :spaces="spaces" :events="events" :start="9 * 60 * 60"
      :end="14 * 60 * 60" :row-height="64" elevation="sm" @click:event="announceEvent"
      @click:empty-slot="announceSlot" />
  </div>
</template>

<script setup lang="ts">
import type { ScheduleEvent, ScheduleSlotEvent } from 'nuvex-ui'
import { useScheduleResources } from './schedule.resources'

const date = ref(new Date(2026, 7, 3))
const { labels, spaces, events } = useScheduleResources({ spaceCount: 1, eventCount: 1 })
const announcement = ref(labels.value.keyboardHint)
const formatTime = (value: Date | string) => new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
}).format(new Date(value))
const announceEvent = ({ data }: { data: ScheduleEvent }) => {
  announcement.value = `${labels.value.eventSelected}: ${data.name}`
}
const announceSlot = ({ data }: { data: ScheduleSlotEvent }) => {
  announcement.value = `${labels.value.slotSelected}: ${formatTime(data.start)}`
}
</script>