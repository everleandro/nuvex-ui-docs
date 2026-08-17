<template>
  <div class="full-width d-flex flex-column gap-3">
    <p class="type-body text-medium-emphasis" aria-live="polite">{{ feedback }}</p>
    <ESchedule v-model="date" class="full-width" :spaces="spaces" :start="9 * 60 * 60" :end="14 * 60 * 60"
      :row-height="64" elevation="sm">
      <template #empty-slot="{ data }">
        <EButton text block class="full-height" :aria-label="`${labels.createAt} ${formatTime(data.start)}`"
          @click="selectSlot(data)">
          {{ labels.add }}
        </EButton>
      </template>
    </ESchedule>
  </div>
</template>

<script setup lang="ts">
import type { ScheduleSlotEvent } from 'nuvex-ui'
import { useScheduleResources } from './schedule.resources'

const { labels, spaces } = useScheduleResources({ spaceCount: 1, eventCount: 4 })

const date = ref(new Date())
const feedback = ref(labels.value.chooseSlot)
const formatTime = (value: Date | string) => new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
}).format(new Date(value))
const selectSlot = (data: ScheduleSlotEvent) => {
  feedback.value = `${labels.value.selectedSlot} ${formatTime(data.start)}`
}
</script>