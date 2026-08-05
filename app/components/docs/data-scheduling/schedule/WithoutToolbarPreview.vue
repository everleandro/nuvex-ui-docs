<template>
  <ESchedule v-model="date" v-model:scale="scale" class="full-width" :spaces="spaces" :events="events"
    :start="9 * 60 * 60" :end="14 * 60 * 60" :row-height="64" hide-toolbar elevation="sm" />
</template>

<script setup lang="ts">
import { CalendarScale } from 'nuvex-ui'
import { useScheduleResources } from './schedule.resources'

const { spaces, events } = useScheduleResources({ spaceCount: 1, eventCount: 2 })
const date = ref(new Date(2026, 7, 3))
const scale = ref(CalendarScale.Week)
</script>